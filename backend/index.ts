import { router, json, error, ai } from '@appdeploy/sdk';

type Scene = { scene:string; lines:[string,string,string][] };
export const handler = router({
 'POST /api/dictionary': [async ({body})=>{
  const input=body as {lang?:string;word?:string;sentence?:string};
  if(!input?.word||input.word.length>90||!['英语','法语','土耳其语','阿拉伯语','俄语','西班牙语'].includes(input.lang||''))return error('Invalid word',400);
  try{
   const result=await ai.generate({prompt:'You are a precise Chinese bilingual dictionary. Language: '+input.lang+'. Target word: '+input.word+'. Sentence context: '+(input.sentence||'')+'. Give the contextual meaning in simplified Chinese, dictionary lemma and brief grammar note. Respond in exactly three lines, WITHOUT JSON, markdown, quotation marks, or extra commentary. Line 1 must start 释义： followed by Chinese meaning. Line 2 must start 原形： followed by lemma. Line 3 must start 语法： followed by a short Chinese explanation.',maxTokens:220,temperature:0,thinkingMode:'FAST',cache:false});
   const raw=String(result.text||'').trim();
   const get=(label:string)=>raw.match(new RegExp('(?:^|\\n)\\s*'+label+'[：:]\\s*([^\\n]+)'))?.[1]?.trim()||'';
   const entry={meaning:get('释义')||raw.split('\\n')[0]?.replace(/^\\s*(?:释义|意思)[：:]\\s*/,'').trim()||'',lemma:get('原形')||input.word,grammar:get('语法')};
   if(!entry.meaning)return json({entry:{lemma:input.word,meaning:'暂无释义，请稍后重试',grammar:''}});
   return json({entry});
  }catch(e){console.error('Dictionary lookup',e);return error('Dictionary temporarily unavailable',503)}
 }],

  'POST /api/dialogue': [async ({ body }) => {
    const input = body as {lang?:string;front?:string;back?:string;note?:string;simpleExample?:string};
    if (!input || !['英语','法语','土耳其语','阿拉伯语','俄语','西班牙语'].includes(input.lang || '') || !input.front || input.front.length > 300 || (input.back || '').length > 700) return error('Invalid card',400);
    const prompt = `Create TWO different, genuinely useful everyday two-person dialogues to teach the following language-learning flashcard. Language: ${input.lang}. Target text: ${input.front}. Chinese meaning: ${input.back || ''}. Context: ${input.note || ''}. Existing simple example (MUST NOT repeat): ${input.simpleExample || ''}.
Each scene must be a concrete realistic situation (e.g. hotel reception, café, home, office, shopping, travel), each scene 2 or 4 conversational turns alternating A and B. Every turn has a natural sentence in the target language and an accurate simplified Chinese translation. For single vocabulary, use the vocabulary word in at least one turn in EACH scene, allowing natural inflections. For a sentence flashcard, reuse the central useful expression in a new conversation, not copy the entire original sentence. For multi-word cards, choose one key phrase and use it naturally. Never write study instructions, meta comments, filler or transliterations. Ensure neither dialogue duplicates the simple example. Respond ONLY JSON: {"scenes":[{"scene":"中文场景名","lines":[["A","target language sentence","中文翻译"],["B","target language sentence","中文翻译"]]}]}.`;
    try {
      const output = await ai.generate({ prompt, maxTokens:1400, temperature:0.3, thinkingMode:'FAST', cache:false, schema:{type:'object',properties:{scenes:{type:'array',items:{type:'object',properties:{scene:{type:'string'},lines:{type:'array',items:{type:'array',items:{type:'string'}}}},required:['scene','lines']}}},required:['scenes']} });
      const raw = output.text.trim().replace(/^\x60\x60\x60(?:json)?\s*/i,'').replace(/\s*\x60\x60\x60$/,'');
      const match = raw.match(/\{[\s\S]*\}/);
      const parsed = JSON.parse(match ? match[0] : raw) as {scenes?:Scene[]};
      if (!Array.isArray(parsed.scenes) || parsed.scenes.length < 1 || parsed.scenes.length > 3) return json({scenes:[],available:false});
      const scenes = parsed.scenes.filter(s => typeof s.scene === 'string' && Array.isArray(s.lines) && s.lines.length >= 2 && s.lines.every(t => Array.isArray(t) && t.length === 3 && t.every(x => typeof x === 'string')));
      if (!scenes.length) return json({scenes:[],available:false});
      return json({ scenes });
    } catch (e) { console.error('Dialogue generation error',e); return json({scenes:[],available:false}); }
  }]
});