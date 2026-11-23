import './styles.css';
import { textbookCards, type TextbookMemory } from './textbook-cards';
import { api } from '@appdeploy/client';
import { turkishLifeCards, turkishLifeExamples, turkishLifeDialogues } from './turkish-life';
import { screenshotBatchCards } from './screenshot-batch';
import { travelCards } from './travel';
import { novemberLearningCards } from './november-learning';
import { a1CourseCards, a1CourseTopics } from './a1-course';
import { a1ExpandedCards } from './a1-expanded';
import { a1TurkishRichCards } from './a1-turkish-rich';

type Card = {
  lang: string;
  flag: string;
  type: string;
  front: string;
  back: string;
  note: string;
  textbook?: TextbookMemory;
};
const rawCards: Card[] = [
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'planetary · detect · alien · debatable · dispute · controversy · habitable', back: '行星的 · 探测/发现 · 外星人/外来的 · 有争议的 · 争论/争端 · 争议 · 可居住的', note: 'Sentence 01 核心词汇组。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'considerable · react · quarrel · extract · dweller', back: '相当大的/重要的 · 反应 · 争吵 · 提取 · 居民', note: 'considerable 不等于 considerate；dweller 常见于 city dweller。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'resident · citizen · inhabitant · dweller · denizen', back: '居民 · 市民/公民 · 居民 · 居住者 · 常住者/栖居者', note: '同义词网络：citizen 强调公民身份，inhabitant/dweller 强调居住。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'dispute · controversy · disagreement · quarrel · argue', back: '争端/争论 · 争议 · 分歧 · 争吵 · 争论', note: '争议主题词族。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'the number of · the risk of · conform to · reside in', back: '……的数量 · ……的风险 · 遵守/符合 · 居住在', note: '固定搭配整体记忆；the number of + 复数名词通常搭配单数谓语。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'People prefer organic foods that contain no chemicals.', back: '人们更喜欢不含化学物质的有机食品。', note: 'prefer + 名词；that contain no chemicals 是定语从句。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'The number of city dwellers is growing.', back: '城市居民的数量正在增长。', note: 'the number of + 复数名词 + 单数谓语。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'Obesity increases the risk of heart disease.', back: '肥胖会增加患心脏病的风险。', note: 'increase the risk of = 增加……的风险。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'Any business venture involves a certain amount of risk.', back: '任何商业投资/商业项目都包含一定的风险。', note: 'business venture = 商业项目；involve risk = 涉及风险。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'Young people are under considerable pressure to conform.', back: '年轻人承受着相当大的压力，被要求遵守规范。', note: 'under considerable pressure to do；conform (to) = 遵从/符合。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'The spokesman refused either to confirm or deny the reports.', back: '发言人拒绝证实或否认这些报道。', note: 'either A or B；confirm or deny 是高频搭配。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'These plants need heat and humidity to grow well.', back: '这些植物需要热量和水分才能茁壮成长。', note: 'humidity = 湿度。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'We rented a car for the week and explored the area.', back: '我们租了一周的车，并游览了该地区。', note: 'explore = 探索/游览。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'All single full-time students must reside in university residence halls.', back: '所有单身全日制学生必须住在大学宿舍。', note: 'reside in = 居住在；residence hall = 学生宿舍。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'There is disagreement among archaeologists as to the age of the sculpture.', back: '考古学家们对这座雕塑的年代有分歧。', note: 'There is disagreement among… as to… = ……之间对……存在分歧。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'Solar panels trap energy from the sun.', back: '太阳能电池板捕获来自太阳的能量。', note: 'solar panel = 太阳能电池板；trap energy = 捕获能量。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'prefer · organic foods · chemicals', back: '用提示词翻译：人们更喜欢不含化学物质的有机食品。', note: '输出训练：先自己说完整英文，再翻面核对。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'the number of · city dweller', back: '用提示词翻译：城市居民的数量正在增长。', note: '注意 number 是中心词，所以使用 is growing。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'obesity · the risk of', back: '用提示词翻译：肥胖会增加患心脏病的风险。', note: '主动输出 increase the risk of heart disease。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'business venture · risk', back: '用提示词翻译：任何商业投资都包含一定的风险因素。', note: '尝试使用 involve 表达“涉及”。' },
  { lang: '英语', flag: '🇬🇧', type: 'IELTS · Sentence 01', front: 'considerable · conform', back: '用提示词翻译：年轻人被大力要求守规矩。', note: '推荐结构：be under considerable pressure to conform。' },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '句型',
    front: 'Duo kaç dil konuşuyor?',
    back: 'Duo 会说几种语言？',
    note: 'kaç=多少；dil=语言；konuşmak=说话',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '句型',
    front: 'Sana et vermiyorum.',
    back: '我不给你肉。',
    note: 'sana=给你；et=肉；vermek=给；否定现在进行时',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '句型',
    front: 'Sola bak!',
    back: '向左看！',
    note: 'sol=左；-a/-e 表方向；bakmak=看',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '句型',
    front: 'O, sana mı soruyor?',
    back: '他/她是在问你吗？',
    note: 'mı 是疑问助词，此处焦点是 sana',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '句型',
    front: 'Sola dönüyoruz.',
    back: '我们正在向左转。',
    note: 'dönmek=转；-üyor=现在进行时；-uz=我们',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '句型',
    front: 'Gün başlamıyor, bitiyor.',
    back: '一天不是在开始，而是在结束。',
    note: 'gün=天；başlamak=开始；bitmek=结束',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '句型',
    front: 'Sola dön!',
    back: '左转！',
    note: 'sola=向左；dön=转（命令式）',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '词汇',
    front: 'yetişkinler',
    back: '成年人（复数）',
    note: 'yetişkin=成年人；-ler=复数',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '词汇',
    front: 'gazete',
    back: '报纸',
    note: 'gazete okumak = 看报纸',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '词汇',
    front: 'hırsız',
    back: '小偷',
    note: '名词',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '动词',
    front: 'uçmak',
    back: '飞',
    note: 'uç- 词根；-mak 原形后缀',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '动词',
    front: 'sürmek',
    back: '驾驶 / 持续',
    note: '具体含义看语境',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '动词',
    front: 'okumak',
    back: '读',
    note: 'oku- = 读',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '动词',
    front: 'bilmek',
    back: '知道',
    note: 'bil- = 知道',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '语法',
    front: 'değil / değilim',
    back: '不是 / 我不是',
    note: 'değil=不是；değilim=我不是',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '词汇',
    front: 'Fransızca',
    back: '法语',
    note: '-ca 与语言/方式表达相关',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '词汇',
    front: 'İngilizce',
    back: '英语',
    note: '-ce 与语言/方式表达相关',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '词汇',
    front: 'harita',
    back: '地图',
    note: '名词',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '词汇',
    front: 'uçuş',
    back: '航班 / 飞行',
    note: '与 uçmak 建立词族关联',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '语法',
    front: '-mak / -mek',
    back: '动词原形后缀',
    note: '如 uçmak、okumak、bilmek、sürmek',
  },  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '语法',
    front: '-ıyor / -iyor / -uyor / -üyor',
    back: '现在进行时核心后缀',
    note: '形式受元音和谐影响',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '语法',
    front: '-a / -e',
    back: '方向：向…… / to',
    note: 'sol → sola（向左）',
  },
  {
    lang: '土耳其语',
    flag: '🇹🇷',
    type: '语法',
    front: 'mı / mi / mu / mü',
    back: '疑问助词',
    note: '形式受元音和谐影响',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: '句型',
    front: 'ليس عندي قلم رصاص.',
    back: '我没有铅笔。',
    note: 'ليس عندي = 我没有；قلم رصاص = 铅笔',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: '词汇',
    front: 'علكة',
    back: '口香糖',
    note: 'chewing gum',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: '句型',
    front: 'هناك علكة في شنطتي.',
    back: '我的包里有口香糖。',
    note: 'هناك=有；في=在……里；شنطتي=我的包',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: '词汇',
    front: 'ثقيل',
    back: '重的',
    note: 'heavy',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: '句型',
    front: 'هناك لاب توب.',
    back: '有一台笔记本电脑。',
    note: 'هناك=有；لاب توب=laptop',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: '句型',
    front: 'هناك مفتاح كبير.',
    back: '有一把大钥匙。',
    note: 'مفتاح=钥匙；كبير=大的；形容词通常位于名词后',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: '词汇',
    front: 'هاتف',
    back: '电话 / 手机',
    note: 'telephone / phone',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: 'UAE口语',
    front: 'السلام عليكم',
    back: '你好 / 愿你平安',
    note: '常用问候',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: 'UAE口语',
    front: 'شلونك؟',
    back: '你好吗？',
    note: '海湾口语常用',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: 'UAE口语',
    front: 'وين؟',
    back: '哪里？',
    note: '海湾口语；MSA 常见 أين؟',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: 'UAE口语',
    front: 'كم؟',
    back: '多少？',
    note: '询问数量/价格',
  },
  {
    lang: '阿拉伯语',
    flag: '🇸🇦',
    type: 'UAE口语',
    front: 'أبي',
    back: '我想要……',
    note: '海湾口语高频表达',
  },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'ami', back: '朋友', note: 'un ami = 一位男性朋友；注意法语名词有阴阳性' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'avion', back: '飞机', note: 'un avion；以元音开头，注意连读和冠词' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'arbre', back: '树', note: 'un arbre；阳性名词' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Ça va ?', back: '你好吗？ / 还好吗？', note: 'Ça va 既可以用于提问，也可以回答“还好/挺好的”' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Je m’appelle…', back: '我叫……', note: '自我介绍高频句型；s’appeler = 名叫' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'mon père', back: '我的父亲 / 我爸爸', note: 'père 是阳性名词，所以使用 mon' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'J’ai peur.', back: '我害怕。', note: 'avoir peur = 害怕；j’ai = je + ai' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Je fais.', back: '我做 / 我正在做。', note: 'faire = 做；je fais = 我做' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'un frère', back: '一个兄弟 / 兄弟', note: 'frère 是阳性名词；un = 一个（阳性）' },
  { lang: '法语', flag: '🇫🇷', type: '短语', front: 'une table noire', back: '一张黑色的桌子', note: 'table 是阴性；形容词 noir 随阴性变为 noire' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'tu es / tu as', back: '你是 / 你有', note: 'tu es 来自 être；tu as 来自 avoir，注意不要混淆' },
  { lang: '法语', flag: '🇫🇷', type: '连接词', front: 'parce que', back: '因为', note: '用于说明原因：parce que + 句子' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Excusez-moi, avez-vous des compléments de vitamine C ?', back: '不好意思，请问你们有维生素C补充剂吗？', note: 'Excusez-moi = 不好意思；avez-vous = 您有……吗，正式/礼貌表达' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Bonjour / Bonsoir / Salut', back: '你好 / 晚上好 / 嗨、再见', note: '问候组：Bonjour 较通用；Bonsoir 晚上使用；Salut 非正式，也可表示再见' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Au revoir / À bientôt / À demain', back: '再见 / 回头见 / 明天见', note: '告别组；À + 时间/时点常构成“……见”' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Bonne journée / Bonne soirée / Bonne nuit', back: '祝你今天愉快 / 祝你今晚愉快 / 晚安', note: 'bonne + 阴性名词；journée、soirée、nuit 都是阴性' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Prends soin de toi / Prenez soin de vous', back: '照顾好自己 / 您多保重', note: 'prendre soin de = 照顾；toi 非正式，vous 正式或复数' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Merci / Merci beaucoup / Je vous remercie', back: '谢谢 / 非常感谢 / 谢谢您', note: '感谢表达由简到正式；remercier quelqu’un = 感谢某人' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'De rien / Je vous en prie / Avec plaisir', back: '不客气 / 别客气 / 乐意效劳', note: '回应感谢的常用表达；Je vous en prie 更正式' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Pardon / Désolé(e) / Je m’excuse', back: '抱歉 / 对不起 / 我道歉', note: 'Désolé 男性说法，Désolée 女性说法；Je m’excuse = 我道歉' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'S’il vous plaît / S’il te plaît', back: '请 / 请（非正式）', note: 'vous 用于正式或复数；te 用于熟人单数' },
  { lang: '法语', flag: '🇫🇷', type: '短语', front: 'avoir besoin de / avoir envie de', back: '需要 / 想要、渴望', note: '高频固定搭配：avoir besoin de + 名词/不定式；avoir envie de + 名词/不定式' },
  { lang: '法语', flag: '🇫🇷', type: '短语', front: 'avoir raison / avoir tort', back: '有道理、是对的 / 错了', note: '法语常用 avoir 构成状态表达，不要逐字翻译成“拥有”' },
  { lang: '法语', flag: '🇫🇷', type: '短语', front: 'faire attention / faire la cuisine / faire du sport', back: '注意 / 做饭 / 做运动', note: 'faire 是高频搭配核心动词；按整体词块记忆' },
  { lang: '法语', flag: '🇫🇷', type: '短语', front: 'prendre soin de / prendre conscience', back: '照顾 / 意识到', note: 'prendre + 名词形成固定搭配；soin de 后接照顾对象' },
  { lang: '法语', flag: '🇫🇷', type: '连接词', front: 'bien que / à condition que / afin que', back: '尽管 / 只要、在……条件下 / 为了、以便', note: '这些连接结构常引出从句；bien que、afin que、à condition que 通常要求虚拟式' },
  { lang: '法语', flag: '🇫🇷', type: '连接词', front: 'car / comme si / d’ailleurs', back: '因为 / 好像、仿佛 / 此外、况且', note: '用于连接句子和组织逻辑；car 表原因，d’ailleurs 补充说明' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'à côté de / au bord de / au centre de / au milieu de', back: '在……旁边 / 在……边缘 / 在……中心 / 在……中间', note: '常见介词固定搭配，整体记忆 de 后面的名词结构' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'au lieu de / autour de / en face de / en dehors de', back: '代替、而不 / 在……周围 / 在……对面 / 在……外面、除了', note: '位置与关系介词词块；不要拆成单个词死记' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'capable de / content de / proche de / responsable de', back: '能够……的 / 对……满意的 / 靠近……的 / 对……负责的', note: '形容词 + 固定介词；学习形容词时把介词一起记' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'prêt à / habitué à / intéressé par / utile pour', back: '准备好……的 / 习惯于……的 / 对……感兴趣的 / 对……有用的', note: '形容词的介词支配不同：à / par / pour 需要作为词块一起记忆' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'mon / ma / mes · ton / ta / tes · son / sa / ses', back: '我的 · 你的 · 他/她的（按所修饰名词的性数变化）', note: '所有形容词与被拥有的名词配合：阳性单数 mon/ton/son，阴性单数 ma/ta/sa，复数 mes/tes/ses' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'notre / nos · votre / vos · leur / leurs', back: '我们的 · 你们/您的 · 他们/她们的', note: '单数所拥有物用 notre/votre/leur；复数所拥有物用 nos/vos/leurs' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'je / tu / il / elle / nous / vous / ils / elles', back: '我 / 你 / 他 / 她 / 我们 / 你们、您 / 他们 / 她们', note: '主语人称代词是动词变位的基础' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'qui / que / où / pourquoi / comment / combien / quand', back: '谁 / 什么 / 哪里 / 为什么 / 怎样 / 多少 / 什么时候', note: '核心疑问词；quel 表“哪个/什么样的”并随名词性数变化' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'le / la / les · un / une / des', back: '定冠词：这个/这些 · 不定冠词：一个/一些', note: '冠词随名词阴阳性和单复数变化；à+le=au，de+le=du，à+les=aux，de+les=des' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'à / de / avec / sans / pour / dans / sur / sous', back: '在、向 / 从、自、的 / 和 / 无 / 为了 / 在……内 / 在……上 / 在……下', note: '高频介词；优先通过完整短语和例句掌握，而不是一词一义' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'faire：tu fais / tu faisais / tu fis / tu feras', back: '你做 / 你过去经常做 / 你曾做 / 你将做', note: '对比直陈式现在时、未完成过去时、简单过去时、简单将来时；口语中简单过去时很少用' },
  { lang: '法语', flag: '🇫🇷', type: '语法', front: 'faire：tu as fait / tu avais fait / tu ferais / tu fasses', back: '你做过 / 你已经做了（过去的过去）/ 你会做、愿意做 / （虚拟式）你做', note: '复合过去时、愈过去时、条件式现在时、虚拟式现在时；不同语气表达时间与态度' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'lundi · mardi · mercredi · jeudi · vendredi · samedi · dimanche', back: '星期一 · 星期二 · 星期三 · 星期四 · 星期五 · 星期六 · 星期日', note: '法语星期通常小写；可按工作日→周末成组记忆' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'janvier · février · mars · avril · mai · juin', back: '一月 · 二月 · 三月 · 四月 · 五月 · 六月', note: '月份通常小写；按半年分组降低记忆负担' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'juillet · août · septembre · octobre · novembre · décembre', back: '七月 · 八月 · 九月 · 十月 · 十一月 · 十二月', note: '注意 août 的拼写和重音符号' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'rouge · bleu · jaune · vert · noir · blanc · gris · orange · marron', back: '红 · 蓝 · 黄 · 绿 · 黑 · 白 · 灰 · 橙 · 棕', note: '颜色作形容词时通常需注意性数配合；orange、marron 作颜色时通常不变' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'tête · visage · œil · oreille · nez · bouche · dent', back: '头 · 脸 · 眼睛 · 耳朵 · 鼻子 · 嘴 · 牙齿', note: '身体部位词汇组；œil 的复数是 yeux' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'épaule · bras · coude · poignet · main · doigt', back: '肩膀 · 手臂 · 肘部 · 手腕 · 手 · 手指', note: '按“肩→手指”的身体路径记忆' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'torse · ventre · dos · jambe · cou', back: '胸部 · 腹部 · 背部 · 腿 · 颈部', note: '身体部位词汇组' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'médecin · infirmier · professeur · ingénieur · avocat · architecte', back: '医生 · 护士 · 教师 · 工程师 · 律师 · 建筑师', note: '职业词汇组；实际使用时注意部分职业名称的阴性形式' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'cuisinier · électricien · mécanicien · vétérinaire · journaliste · comptable', back: '厨师 · 电工 · 机械师 · 兽医 · 记者 · 会计', note: '职业词汇组，建议配合 C’est un/une… 造句' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'France · Chine · États-Unis · Allemagne · Espagne · Italie', back: '法国 · 中国 · 美国 · 德国 · 西班牙 · 意大利', note: '国家名称；学习时可进一步关联 en/au/aux 的国家介词规则' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'Japon · Inde · Brésil · Australie · Russie · Mexique', back: '日本 · 印度 · 巴西 · 澳大利亚 · 俄罗斯 · 墨西哥', note: '国家名称组；与国籍、语言表达建立关联' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'piano · violon · guitare · flûte · saxophone · batterie', back: '钢琴 · 小提琴 · 吉他 · 长笛 · 萨克斯 · 鼓', note: '乐器词汇；常见表达 jouer du/de la/de l’ + 乐器' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'zéro · un · deux · trois · quatre · cinq · six · sept · huit · neuf · dix', back: '零 · 一 · 二 · 三 · 四 · 五 · 六 · 七 · 八 · 九 · 十', note: '基础数字 0–10，是更大数字组合的基础' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'onze · douze · treize · quatorze · quinze · seize', back: '十一 · 十二 · 十三 · 十四 · 十五 · 十六', note: '11–16 先整体记忆；17 起进入 dix-sept 等组合结构' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'vingt · trente · quarante · cinquante · soixante · cent · mille', back: '二十 · 三十 · 四十 · 五十 · 六十 · 一百 · 一千', note: '掌握十位数后再学习 70/80/90 的特殊组合规则' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Yo vivo en mi casa.', back: '我住在我家。', note: 'vivo = 我住/生活；mi = 我的；casa = 房子/家' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'hay / no hay', back: '有 / 没有', note: 'hay 表示“有、存在”；前面加 no 构成 no hay = 没有' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'muchos', back: '很多（阳性复数）', note: 'mucho 的阳性复数形式，通常修饰阳性复数名词' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'muy', back: '非常', note: '副词，常放在形容词或副词前，如 muy bien' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'ir · hacer · ser · venir · tener · saber', back: '去 · 做 · 是 · 来 · 有 · 知道', note: '高频不规则动词。现在时 yo：voy, hago, soy, vengo, tengo, sé；建议按人称成组练习。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'leer · escribir · deber', back: '读 · 写 · 应该/必须', note: '规则/常用动词组：leo/lees/lee/leemos/leéis/leen；escribo/escribes...；debo/debes...' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: '主语 · 谓语 · 宾语 · 表语 · 定语 · 状语 · 同位语 · 补语', back: '西语句子的 8 类常见成分', note: '先抓主语+谓语，再找宾语；时间、地点、方式等多作状语。例：Yo bebí la leche por la noche en casa.' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Yo bebí la leche por la noche en casa.', back: '我晚上在家喝了牛奶。', note: '主语 Yo + 谓语 bebí + 宾语 la leche + 时间状语 por la noche + 地点状语 en casa。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'hacia arriba · hacia abajo · más allá de · a través de · venir de · a', back: '向上 · 向下 · 超过/越过 · 穿过 · 从……来 · 到……去', note: '方向/路径介词组。把 hacia 记成“朝向”，de 常关联来源，a 常关联目的地。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'dentro de · encima de · debajo de · al lado de · cerca de · detrás de · entre · alrededor de', back: '在……里面 · 在……上方 · 在……下方 · 在……旁边 · 在……附近 · 在……后面 · 在……之间 · 围绕', note: '空间位置表达组；用“一个物体相对另一个物体的位置”来成组记忆。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'siempre · todos los días · normalmente · a menudo · a veces · nunca', back: '总是 · 每天 · 通常 · 经常 · 有时 · 从不', note: '一般现在时常见时间标志词，由高频到低频形成一条频率轴。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'ayer · anoche · hace un año · la semana pasada · el año pasado · antes', back: '昨天 · 昨晚 · 一年前 · 上周 · 去年 · 以前', note: '过去时间标志词，可优先联想到过去时。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'mañana · más tarde · la próxima semana · el año que viene · en el futuro · pronto', back: '明天 · 稍后 · 下周 · 明年 · 将来 · 很快', note: '未来时间表达组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'ahora · hoy · esta semana · actualmente · mientras · todavía', back: '现在 · 今天 · 本周 · 目前 · 与此同时 · 仍然', note: '现在/进行中的时间表达组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'cabeza · ojo · oreja · boca · diente · nariz · brazo · mano · pierna · pie', back: '头 · 眼睛 · 耳朵 · 嘴 · 牙齿 · 鼻子 · 手臂 · 手 · 腿 · 脚', note: '身体部位核心词汇。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'rojo · azul · amarillo · verde · negro · blanco · morado · rosa · naranja · gris', back: '红 · 蓝 · 黄 · 绿 · 黑 · 白 · 紫 · 粉 · 橙 · 灰', note: '颜色词；作形容词时注意与名词的性数配合。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'norte · sur · este · oeste · arriba · abajo · derecha · izquierda · dentro · fuera', back: '北 · 南 · 东 · 西 · 上 · 下 · 右 · 左 · 里 · 外', note: '方向词组，适合配合地图和问路句型复习。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'lunes · martes · miércoles · jueves · viernes · sábado · domingo', back: '星期一 · 星期二 · 星期三 · 星期四 · 星期五 · 星期六 · 星期日', note: '星期词通常小写。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'enero · febrero · marzo · abril · mayo · junio · julio · agosto · septiembre · octubre · noviembre · diciembre', back: '一月 · 二月 · 三月 · 四月 · 五月 · 六月 · 七月 · 八月 · 九月 · 十月 · 十一月 · 十二月', note: '月份词通常小写；按季度分组记忆。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'manzana · plátano · naranja · sandía · melón · uva · fresa · cereza · piña · mango', back: '苹果 · 香蕉 · 橙子 · 西瓜 · 甜瓜 · 葡萄 · 草莓 · 樱桃 · 菠萝 · 芒果', note: '水果核心词汇组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'perro · gato · elefante · león · tigre · oso · mono · jirafa · caballo · vaca', back: '狗 · 猫 · 大象 · 狮子 · 老虎 · 熊 · 猴子 · 长颈鹿 · 马 · 牛', note: '动物核心词汇组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'zanahoria · tomate · cebolla · patata · lechuga · pepino · ajo · berenjena · pimiento', back: '胡萝卜 · 番茄 · 洋葱 · 土豆 · 生菜 · 黄瓜 · 大蒜 · 茄子 · 甜椒', note: '蔬菜核心词汇组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'cuchara · tenedor · cuchillo · plato · vaso · taza · toalla · jabón · espejo · lámpara', back: '勺子 · 叉子 · 刀 · 盘子 · 杯子 · 茶杯 · 毛巾 · 肥皂 · 镜子 · 灯', note: '生活用品词汇组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'fútbol · tenis · voleibol · natación · correr · boxeo · esquí', back: '足球 · 网球 · 排球 · 游泳 · 跑步 · 拳击 · 滑雪', note: '运动词汇组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Hola. ¿Cómo estás? Estoy bien, gracias. ¿Y tú?', back: '你好。你好吗？我很好，谢谢。你呢？', note: '旅行最基础的问候链；把问候和回应一起练。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Cómo te llamas? Me llamo… / Mi nombre es…', back: '你叫什么名字？我叫……', note: '自我介绍核心句型。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '短语', front: 'por favor · gracias · de nada · perdón · lo siento · disculpe', back: '请 · 谢谢 · 不客气 · 对不起 · 抱歉 · 劳驾/打扰一下', note: '旅行礼貌表达组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'No entiendo. Hable más despacio. Repita, por favor.', back: '我不明白。请说慢一点。请重复。', note: '听不懂时的救命三连句。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Dónde está…? / ¿Dónde hay…? / ¿Dónde puedo encontrar…?', back: '……在哪里？哪里有……？我在哪里可以找到……？', note: '旅行问路三种核心框架：具体地点用 estar；询问“有没有”常用 hay；找东西可用 encontrar。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Dónde puedo comprar…? / ¿Dónde puedo alquilar…?', back: '我在哪里可以买……？我在哪里可以租……？', note: 'puedo + 动词原形 = 我可以……；替换 comprar/alquilar 即可扩展大量旅行场景。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Puedes ayudarme? / ¿Puedes mostrarme cómo llegar?', back: '你能帮我吗？/ 你能告诉我怎么走吗？', note: '¿Puedes + infinitivo…? 是非常实用的请求框架。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Cuánto cuesta? / ¿Cuánto cuesta el viaje? / ¿Cuánto cuesta un tour?', back: '多少钱？/ 车费多少？/ 旅游团多少钱？', note: 'cuánto cuesta = 多少钱；替换后面的名词即可。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Dónde puedo tomar un autobús / un taxi?', back: '我在哪里可以坐公交车 / 出租车？', note: 'tomar + 交通工具 = 乘坐；旅行交通高频表达。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Dónde está el aeropuerto? Necesito un vuelo a…', back: '机场在哪里？我需要一班飞往……的航班。', note: '机场核心句型；a 后接目的地。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Busco un hotel. Tengo reserva. ¿Dónde están los baños?', back: '我在找酒店。我有预订。洗手间在哪里？', note: '酒店/住宿高频表达组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Dónde puedo comer? Me gustaría un menú. ¿Qué recomienda?', back: '我在哪里可以吃饭？我想要一份菜单。您推荐什么？', note: '餐厅场景三句链；me gustaría 比 quiero 更委婉。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Puedes traer la cuenta? / ¿Se puede pagar con tarjeta?', back: '可以拿账单来吗？/ 可以刷卡支付吗？', note: '餐厅结账与支付高频句型。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Es demasiado caro. ¿No hay descuento? ¿Puedo probármelo?', back: '太贵了。没有折扣吗？我可以试穿吗？', note: '购物砍价/试穿场景；probármelo = 把它试穿在我身上。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Tengo que ordenar mi habitación.', back: '我必须整理我的房间。', note: 'tener que + 动词原形 = 必须/不得不做某事。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Llevo dos años estudiando español.', back: '我学习西班牙语两年了。', note: 'llevar + 时间 + gerundio = 某动作持续了多长时间。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Todavía no he desayunado. / No he comido nunca esto.', back: '我还没吃早餐。/ 我从来没吃过这个。', note: '现在完成时：he + 过去分词；todavía no = 还没，nunca = 从未。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Me gusta… / Me encanta… / ¿Prefieres té o café?', back: '我喜欢…… / 我非常喜欢…… / 你喜欢茶还是咖啡？', note: '表达喜好：gustar、encantar、preferir。注意复数对象常用 gustan。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '短语', front: 'Buen provecho. · Ten cuidado. · Que te mejores. · Buen viaje. · Buena suerte.', back: '慢慢吃/祝用餐愉快 · 小心 · 祝早日康复 · 一路顺风 · 祝好运', note: '高频祝福与提醒表达组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'tocador · espejo · rodapié · percha · armario · cajón · mesita de noche · despertador', back: '梳妆台 · 镜子 · 踢脚板 · 衣架 · 衣柜 · 抽屉 · 床头柜 · 闹钟', note: '卧室家具/用品词汇组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'edredón · colchón · cabecero · funda de almohada · ropa de cama · manta · colcha · moqueta', back: '羽绒被 · 床垫 · 床头板 · 枕套 · 床上用品 · 毯子 · 床罩/被子 · 地毯', note: '床品与卧室用品词汇组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '动词', front: 'lavar los platos · secar los platos · sacar la basura · fregar · barrer', back: '洗碗 · 擦干碗碟 · 倒垃圾 · 拖/擦地 · 扫地', note: '家务动作组；优先记“动词+对象”的搭配，而不是孤立动词。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '动词', front: 'doblar la ropa · lavar la ropa · tender la ropa · planchar', back: '叠衣服 · 洗衣服 · 晾衣服 · 熨衣服', note: '围绕 ropa 的家务动作链。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '动词', front: 'poner la mesa · retirar la mesa · llenar el lavavajillas · vaciar el lavavajillas', back: '摆餐桌 · 收餐桌 · 装洗碗机 · 清空洗碗机', note: '厨房/餐桌家务动作链。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '动词', front: 'limpiar el baño · limpiar el horno · limpiar las ventanas · quitar el polvo · aspirar la moqueta', back: '清洁浴室 · 清洁烤箱 · 擦窗户 · 除尘 · 吸地毯', note: 'limpiar + 对象 可扩展很多清洁表达；quitar el polvo = 除尘。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '动词', front: 'hacer la cama · cambiar las sábanas · regar las plantas · alimentar a la mascota · lavar el coche', back: '铺床 · 换床单 · 浇植物 · 喂宠物 · 洗车', note: '日常家务高频搭配组。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'marrón · dorado · plateado · turquesa · violeta · beige', back: '棕色 · 金色 · 银色 · 青绿色 · 紫罗兰色 · 米色', note: '扩展颜色词。颜色作形容词时注意性数配合；marrón 的复数是 marrones。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'primavera · verano · otoño · invierno', back: '春天 · 夏天 · 秋天 · 冬天', note: '四季词汇；通常小写。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'mañana · tarde · noche · madrugada · amanecer · hoy · ayer', back: '上午/早晨 · 下午 · 夜晚 · 凌晨 · 黎明 · 今天 · 昨天', note: '时间段词汇。注意 mañana 既可表示“早晨”，也可表示“明天”，由语境判断。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'arroz · pan · pasta · sándwich · pizza', back: '米饭 · 面包 · 意大利面 · 三明治 · 披萨', note: '常见主食。图片中的 onigiri、soba、udon 等属于外来食物名，不作为西语基础核心词优先记忆。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'agua · café · cerveza · té verde · zumo', back: '水 · 咖啡 · 啤酒 · 绿茶 · 果汁', note: '常见饮料；zumo 在西班牙常用，拉美很多地区更常说 jugo。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'palillos · bol · plato · tenedor · cuchara · taza · olla', back: '筷子 · 碗 · 盘子 · 叉子 · 勺子 · 杯子 · 锅', note: '餐具与厨房用品。与已有 cuchara/tenedor/plato/taza 去重后扩展。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'bicicleta · metro · moto · coche · autobús · tranvía · tren · avión', back: '自行车 · 地铁 · 摩托车 · 汽车 · 公交车 · 有轨电车 · 火车 · 飞机', note: '交通工具核心词汇。AVE 是西班牙高速铁路品牌/系统，不等同于所有“高铁”。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'taxi · barco · ferry · teleférico · ascensor · patinete · camión · furgoneta', back: '出租车 · 船 · 渡轮 · 缆车 · 电梯 · 滑板车 · 卡车 · 面包车', note: '交通工具扩展词汇。Uber 是品牌名，不作为普通交通工具词汇记忆。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'estación · parada · aeropuerto · puerto · biblioteca · hospital · clínica · banco', back: '车站 · 站点 · 机场 · 港口 · 图书馆 · 医院 · 诊所 · 银行', note: '城市公共设施与问路高频地点。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'comisaría · parque · iglesia · correos · bomberos', back: '警察局 · 公园 · 教堂 · 邮局/邮政 · 消防部门', note: '城市设施扩展。bomberos 本义“消防员”，表示消防站更准确说 parque de bomberos。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'soleado · nublado · lluvioso · llovizna · tormenta · granizo · nieve · ventisca', back: '晴朗的 · 多云的 · 多雨的 · 毛毛雨 · 暴风雨 · 冰雹 · 雪 · 暴风雪', note: '天气词汇。tiempo 可表示“天气/时间”，具体含义看语境。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'papá · mamá · abuelo · abuela · hijo · hija · hermano · hermana', back: '爸爸 · 妈妈 · 爷爷/外公 · 奶奶/外婆 · 儿子 · 女儿 · 兄弟 · 姐妹', note: '家庭成员核心词汇。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'esposo · esposa · tío · tía', back: '丈夫 · 妻子 · 叔伯舅/姑姨夫 · 姑姨舅妈', note: '家庭关系扩展词汇；具体中文亲属称谓需按关系判断。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'pera · lichi · longan · durián · aguacate · arándano · caqui · higo · pomelo · ciruela', back: '梨 · 荔枝 · 龙眼 · 榴莲 · 牛油果 · 蓝莓 · 柿子 · 无花果 · 柚子/葡萄柚 · 李子', note: '水果扩展组；与已有水果词去重。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'brócoli · champiñón · cebolleta · espárrago · calabacín · okra · chayote', back: '西兰花 · 蘑菇 · 小葱 · 芦笋 · 西葫芦 · 秋葵 · 佛手瓜', note: '蔬菜扩展组；图片中的 daikon、ñame 等地域/外来词后续单独扩展。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'cerdo · ternera · pollo · cordero · pescado · tocino · jamón · salchicha', back: '猪肉 · 牛肉/小牛肉 · 鸡肉 · 羊肉 · 鱼肉 · 培根/咸猪肉 · 火腿 · 香肠', note: '肉类核心词汇。pollo 也可指“鸡”；pescado 指作为食物的鱼。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'bistec · chuleta · conejo · pato · pavo · salmón · atún · bacalao', back: '牛排 · 排骨/肉排 · 兔肉 · 鸭肉 · 火鸡 · 三文鱼 · 金枪鱼 · 鳕鱼', note: '肉类和鱼类扩展词汇。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'tijeras · pelador · pegamento · llave inglesa · alicates · martillo · cinta métrica · regla', back: '剪刀 · 削皮器 · 胶水 · 扳手 · 钳子 · 锤子 · 卷尺 · 直尺', note: '常用工具词汇。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'yo · tú · él/ella · nosotros · vosotros · ellos/ellas · usted/ustedes', back: '我 · 你 · 他/她 · 我们 · 你们 · 他们/她们 · 您/您们', note: '主格人称代词。西班牙语常因动词变位已表明人称而省略主语。ello 是中性代词，不当作普通“它”来与 él/ella 并列背诵。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'me · te · lo/la · nos · os · los/las', back: '直接宾语代词：我 · 你 · 他/她/它 · 我们 · 你们 · 他们/她们', note: '直接宾语代词通常放在变位动词前；肯定命令式、不定式、动名词等环境可后置。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'me · te · le · nos · os · les', back: '间接宾语代词：给我 · 给你 · 给他/她/您 · 给我们 · 给你们 · 给他们/她们/您们', note: '与格/间接宾语代词。le/les 遇到 lo/la/los/las 时会变为 se。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'el/la/los/las · un/una/unos/unas', back: '定冠词 · 不定冠词', note: '冠词要与名词的性和数配合：el libro, la mesa, unos libros, unas sillas。否定句并非一律省略冠词，要按语义决定。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'quién · qué · dónde · adónde · de dónde · cómo · cuándo · cuánto · por qué · para qué', back: '谁 · 什么 · 哪里 · 去哪里 · 从哪里 · 怎样 · 何时 · 多少 · 为什么 · 为了什么', note: '疑问词在直接问句中通常带重音符号。注意 por qué（为什么）与 porque（因为）。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'mi/mis · tu/tus · su/sus · nuestro/a/os/as · vuestro/a/os/as', back: '我的 · 你的 · 他/她/您的 · 我们的 · 你们的', note: '短形式物主形容词放在名词前，并与“被拥有的东西”在数上、部分形式在性数上配合。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'a · el · en · dentro de · desde · a partir de · hace · después de · hasta', back: '时间搭配：在具体钟点 · 星期/日期 · 月份/季节/年份 · ……之后 · 从……起 · 从……开始 · ……以前 · ……之后 · 直到……', note: '例：a las ocho；el lunes；en julio；dentro de dos semanas；desde el lunes；hace cinco minutos；después de comer；hasta el lunes。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'no · ya no · nunca · todavía no · ni…ni… · casi no', back: '不 · 不再 · 从不 · 还没有 · 既不…也不… · 几乎不', note: '西语允许否定一致：Nunca voy / No voy nunca 都可。ni…ni… 用来并列两个否定项。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'S + V + O / no + V / ¿疑问词 + V + S…?', back: '陈述句 / 否定句 / 疑问句的基础结构', note: '西语语序较灵活。陈述句常见 SVO；否定词 no 通常在变位动词前；疑问句不需要英语式 do/does 助动词。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'ser + participio + por + agente', back: '被动句：由……被……', note: '典型分析式被动结构：主语 + ser 的相应变位 + 过去分词（与主语性数一致）+ por + 施动者。口语和书面语也常用 se 被动。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'estudiar: estudio · estudié · había estudiado · estudiaré', back: '学习：我学习 · 我学了 · 我此前已经学过 · 我将学习', note: '四个时态对照：现在时、简单过去时、过去完成时、简单将来时。图片“将来时 estudio”是明显错误，已更正为 estudiaré。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'leer: leo · leí · había leído · leeré', back: '读：我读 · 我读了 · 我此前已经读过 · 我将读', note: 'leer 的过去分词 leído 带重音；过去完成时 = había + 过去分词。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'escribir: escribo · escribí · había escrito · escribiré', back: '写：我写 · 我写了 · 我此前已经写过 · 我将写', note: 'escribir 的过去分词是不规则 escrito，不是 *escribido。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '语法', front: 'caminar/cantar/comer/beber/vivir/abrir/ver', back: '走路/唱歌/吃/喝/居住/打开/看见', note: '时态练习动词组。特别记 ver: veo, vi, había visto, veré；abrir: abro, abrí, había abierto, abriré。' },  { lang: '俄语', flag: '🇷🇺', type: '句型', front: 'Да, я уже работаю.', back: '是的，我已经在工作了。', note: 'Да = 是；я = 我；уже = 已经；работаю = 我工作' },
  { lang: '俄语', flag: '🇷🇺', type: '句型', front: 'Ты меня понимаешь?', back: '你明白我吗？', note: 'ты = 你；меня = 我（宾格）；понимаешь = 你明白' },
  { lang: '俄语', flag: '🇷🇺', type: '句型', front: 'Извините, я не понимаю.', back: '不好意思，我不明白。', note: 'Извините = 对不起/不好意思；не = 不；понимаю = 我明白' },
  { lang: '俄语', flag: '🇷🇺', type: '短语', front: 'много воды', back: '很多水', note: 'много = 很多；воды 是 вода（水）的变化形式' },
  { lang: '阿拉伯语', flag: '🇸🇦', type: '语法', front: 'هذا / هذه', back: '这个（阳性）/ 这个（阴性）', note: 'هذا 用于阳性名词；هذه 用于阴性名词' },
  { lang: '阿拉伯语', flag: '🇸🇦', type: '词汇', front: 'جداً', back: '非常', note: '常放在形容词后加强程度' },
  { lang: '阿拉伯语', flag: '🇸🇦', type: '句型', front: 'هذا الكلب جوعان', back: '这只狗饿了。', note: 'هذا = 这个；الكلب = 狗；جوعان = 饿的（口语常用）' },
  { lang: '阿拉伯语', flag: '🇸🇦', type: '句型', front: 'هذه الغرفة واسعة جداً', back: '这个房间非常宽敞。', note: 'هذه = 这个（阴性）；الغرفة = 房间；واسعة = 宽敞的；جداً = 非常' },
  { lang: '阿拉伯语', flag: '🇸🇦', type: '句型', front: 'شكراً لك', back: '谢谢你。', note: 'شكراً = 谢谢；لك = 给你/对你' },
  { lang: '阿拉伯语', flag: '🇸🇦', type: '词汇', front: 'عفواً', back: '不客气 / 没关系', note: '常用于回应感谢，也可表示“抱歉/劳驾”，依语境判断' },
  { lang: '阿拉伯语', flag: '🇸🇦', type: '句型', front: 'أنا جائع', back: '我饿了。', note: 'أنا = 我；جائع = 饿的（阳性说法）' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '海湾口语', front: 'لو سمحت، عندك فيتامين سي؟', back: '不好意思，请问你有维生素C吗？', note: 'لو سمحت = 劳驾/不好意思；عندك = 你有；口语实用表达' },
  { lang: '俄语', flag: '🇷🇺', type: '词汇', front: 'семья · мать · отец · сын · дочь', back: '家庭 · 母亲 · 父亲 · 儿子 · 女儿', note: '家庭核心成员词汇组；семья 重音在 я，мать/дочь 以软音符号结尾' },
  { lang: '俄语', flag: '🇷🇺', type: '词汇', front: 'брат · сестра · бабушка · дедушка · родственник', back: '兄弟 · 姐妹 · 奶奶/外婆 · 爷爷/外公 · 亲戚', note: '亲属词汇组；сестра 重音在最后一个 а' },
  { lang: '俄语', flag: '🇷🇺', type: '词汇', front: 'друг · подруга · знакомый · лучший друг · дружба', back: '男性朋友 · 女性朋友 · 熟人 · 最好的朋友 · 友谊', note: 'друг/подруга 是朋友；знакомый 是熟人；дружба 是抽象名词“友谊”' },
  { lang: '俄语', flag: '🇷🇺', type: '词汇', front: 'парень · девушка · муж · жена · пара', back: '男朋友/小伙子 · 女朋友/女孩 · 丈夫 · 妻子 · 一对情侣', note: 'парень、девушка 依语境可指年轻男女或恋爱对象；пара = 一对/情侣' },
  { lang: '俄语', flag: '🇷🇺', type: '词汇', front: 'знакомство · отношения · любовь · доверие · поддержка', back: '相识/认识 · 关系 · 爱 · 信任 · 支持', note: '关系主题抽象名词；отношения 常用复数形式表示人际/恋爱关系' },
  { lang: '俄语', flag: '🇷🇺', type: '动词', front: 'знакомиться · дружить · любить · помогать · поддерживать', back: '认识/结识 · 做朋友 · 爱 · 帮助 · 支持', note: '关系主题动词原形；знакомиться 是 -ся 反身动词，дружить 常与 с + 工具格搭配' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '词汇', front: 'مَطْعَم', back: '餐厅', note: '读音约 maṭʿam；来自词根 ط-ع-م，与“吃/食物”相关' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '句型', front: 'المَطْعَمُ قَرِيبٌ مِنَ البَيْتِ.', back: '餐厅离家很近。', note: 'قريب من = 离……近；البيت = 家/房子。名词句：餐厅 + 近 + من + 地点' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '句型', front: 'نَأْكُلُ العَشَاءَ فِي المَطْعَمِ.', back: '我们在餐厅吃晚饭。', note: 'نأكل = 我们吃；العشاء = 晚饭；في = 在……里。图片中的标准阿拉伯语句型' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '句型', front: 'هَذَا المَطْعَمُ نَظِيفٌ جِدًّا.', back: '这家餐厅非常干净。', note: 'هذا = 这个（阳性）；نظيف = 干净；جداً = 非常，可关联已有“هذا/هذه”和“جداً”' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '句型', front: 'أَذْهَبُ إِلَى المَطْعَمِ مَعَ أَصْدِقَائِي.', back: '我和朋友们一起去餐厅。', note: 'أذهب = 我去；إلى = 到/去；مع = 和；أصدقائي = 我的朋友们' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '词汇', front: 'هُنَاكَ', back: '那里 / 那边；有、存在', note: '读音 hunāka。表示远处“那里”；在 هناك + 名词 的结构里也常表达“有……”，可关联已有 هناك علكة في شنطتي。' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '词汇', front: 'هُنَا', back: '这里', note: '读音 hunā。与 هناك（那里）成对记忆：هنا = here，هناك = there。' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '日常口语', front: 'طَبْعًا', back: '当然', note: '读音 ṭabʿan。高频回应词，相当于“当然 / of course”。' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '日常口语', front: 'لَا بَأْسَ', back: '没问题 / 没关系', note: '读音 lā baʾsa。可用于表示“没关系、不要紧”；语境不同也可表示“还不错”。' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '日常口语', front: 'تَمَام', back: '好的 / 没问题 / 都好', note: '读音 tamām。日常高频表达，可表示“好、OK、没问题、很好”。' },
  { lang: '阿拉伯语', flag: '🇦🇪', type: '日常口语', front: 'مُمْكِن', back: '可能 / 可以吗', note: '读音 mumkin。既可表示“可能、可以”，口语中也常用于礼貌请求：ممكن ...؟ = 可以……吗？' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Tú bailas salsa también.', back: '你也跳萨尔萨舞。', note: 'bailar = 跳舞；tú bailas = 你跳舞；también = 也。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Tú cantas en este teatro, ¿verdad?', back: '你在这个剧院唱歌，对吗？', note: 'cantar = 唱歌；en este teatro = 在这个剧院；¿verdad? 用于确认“对吗？”。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '动词', front: 'cantar', back: '唱歌', note: '规则 -ar 动词；yo canto，tú cantas。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¡Guau, tú bailas!', back: '哇，你跳舞！', note: 'bailar = 跳舞；tú bailas 是第二人称单数现在时。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¡Yo canto!', back: '我唱歌！', note: 'cantar → yo canto；-ar 规则动词第一人称单数常以 -o 结尾。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '短语', front: 'mi tiempo libre', back: '我的空闲时间', note: 'mi = 我的；tiempo libre = 空闲时间。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Sí, hay duraznos también.', back: '是的，也有桃子。', note: 'hay = 有；duraznos = 桃子（拉美常用）；también = 也。' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'portable', back: '手机 / 便携式的', note: '作名词时口语常指 téléphone portable（手机）；作形容词表示便携式的。' },
  { lang: '法语', flag: '🇫🇷', type: '介词', front: 'dans', back: '在……里面', note: '表示处于某个空间内部；例如 dans la valise = 在行李箱里。' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'femme', back: '女人 / 妻子', note: 'une femme；具体是“女人”还是“妻子”取决于语境。' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'chapeau', back: '帽子', note: 'un chapeau；复数 chapeaux。' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'manteau', back: '大衣 / 外套', note: 'un manteau；复数 manteaux。' },
  { lang: '法语', flag: '🇫🇷', type: '短语', front: 'pas du tout', back: '一点也不 / 完全不', note: '加强否定：pas du tout = not at all。' },
  { lang: '法语', flag: '🇫🇷', type: '形容词', front: 'grand', back: '大的 / 高大的', note: '阳性单数 grand；阴性 grande。' },
  { lang: '法语', flag: '🇫🇷', type: '形容词', front: 'amusant', back: '有趣的 / 好笑的', note: '阳性 amusant；阴性 amusante。' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'mari', back: '丈夫', note: 'un mari = 丈夫；与 femme（妻子）关联记忆。' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'frère', back: '兄弟', note: 'un frère = 兄弟。' },
  { lang: '法语', flag: '🇫🇷', type: '词汇', front: 'neveu', back: '侄子 / 外甥', note: 'un neveu；阴性 nièce = 侄女/外甥女。' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Louis est intelligent.', back: 'Louis 很聪明。', note: 'être + adjectif：est = 是；intelligent = 聪明的。' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Attention, ma valise est très lourde !', back: '小心，我的行李箱很重！', note: 'valise 是阴性，所以用 ma；lourd 随阴性名词变为 lourde；très = 很。' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Excusez-moi Monsieur, je cherche un chapeau.', back: '打扰一下先生，我在找一顶帽子。', note: 'chercher + 名词 = 寻找……；Excusez-moi 是礼貌表达。' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Oui, à Toronto.', back: '是的，在多伦多。', note: 'à + 城市可表示“在/去某城市”，具体由语境决定。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '句型', front: 'Evet, sana bakıyorum.', back: '是的，我在看你。', note: 'bakmak 常与方向格搭配：sana = 向你/对你；bakıyorum = 我正在看。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '句型', front: 'O, küçük kediyi eve getiriyor.', back: '他/她正把小猫带回家。', note: 'kediyi 是特指宾格；eve = 到家；getiriyor = 正在带来/带去。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '句型', front: 'Hâlâ konuşuyor mu?', back: '他/她还在说话吗？', note: 'hâlâ = 仍然/还；konuşuyor = 正在说话；mu = 疑问助词。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '句型', front: 'Restoranı sabah açıyoruz.', back: '我们早上开餐厅。', note: 'restoranı = 餐厅（特指宾格）；sabah = 早上；açıyoruz = 我们打开/营业。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '句型', front: 'Seni arıyorum, neredesin?', back: '我在找你/给你打电话，你在哪里？', note: 'seni = 你（宾格）；aramak 可表示寻找或打电话；neredesin = 你在哪里。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '句型', front: 'Öğrenciler okula elma getiriyorlar.', back: '学生们正在把苹果带到学校。', note: 'öğrenciler = 学生们；okula = 到学校；elma = 苹果；getiriyorlar = 他们正在带来。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '词汇', front: 'duvar · kapı · pencere · tava', back: '墙 · 门 · 窗户 · 平底锅', note: '家居高频名词；结合房间场景成组记忆。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '短语', front: 'hâlâ sıcak', back: '仍然很热 / 还是热的', note: 'hâlâ = 仍然；sıcak = 热的。与已有 Hâlâ konuşuyor mu? 建立副词关联。' },
  { lang: '俄语', flag: '🇷🇺', type: '短语', front: 'пачка риса · тарелка риса · бутылка вина · бутылка воды', back: '一包米 · 一盘米饭 · 一瓶葡萄酒 · 一瓶水', note: '量词/容器 + 第二格结构；рис→риса，вино→вина，вода→воды。' },
  { lang: '俄语', flag: '🇷🇺', type: '短语', front: 'сахар и соль · миска супа', back: '糖和盐 · 一碗汤', note: 'суп→супа；用食物场景记第二格。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Viajas en coche o en tren?', back: '你坐汽车还是火车旅行？', note: 'viajar en + 交通工具；o = 或者。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'mucho', back: '很多 / 很多地', note: '可作形容词或副词；与 muchos 区分：muchos 修饰阳性复数名词。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Viajas cerca?', back: '你在附近旅行吗？ / 你去得近吗？', note: 'cerca = 附近、近；常见搭配 cerca de + 地点。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Estudias español?', back: '你学习西班牙语吗？', note: 'estudiar → tú estudias；西语一般疑问句不需要 do/does。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Hablas español?', back: '你会说西班牙语吗？', note: 'hablar → tú hablas；可与 estudiar español 对比学习。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Vivo con mi gato.', back: '我和我的猫住在一起。', note: 'vivir → vivo；con = 和；mi = 我的。' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Alice parle français.', back: 'Alice 说法语。', note: 'parler + 语言通常不加冠词：parler français；parle 是 parler 的第三人称单数现在时。' },
  { lang: '俄语', flag: '🇷🇺', type: '句型', front: 'Я иду домой.', back: '我正在回家。', note: 'идти = 步行去/走；иду = 我走/我正在去；домой 是方向副词“回家、往家”。' },
  { lang: '俄语', flag: '🇷🇺', type: '句型', front: 'Я хочу домой.', back: '我想回家。', note: 'хочу = 我想要；домой = 回家、往家。俄语口语可省略“去”：хочу домой = 想回家。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '短语', front: 'un hijo y un hermano', back: '一个儿子和一个兄弟', note: 'hijo = 儿子；hermano = 兄弟；两个都是阳性名词，所以用 un。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: 'Sí, yo vivo en este edificio.', back: '是的，我住在这栋大楼里。', note: 'vivir → yo vivo；en = 在；este edificio = 这栋楼，edificio 是阳性。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'lejos', back: '远 / 远处', note: '常见搭配 lejos de + 地点 = 离……远。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'estacionamiento', back: '停车场 / 停车位', note: '拉美常用；西班牙也常见 aparcamiento。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'más', back: '更多 / 更', note: 'más + 名词/形容词/副词；注意重音符号 á。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'calor', back: '热 / 热量', note: '常说 hace calor = 天气热；tener calor = 感到热。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'durazno · duraznos', back: '桃子 · 桃子（复数）', note: '拉美常用 durazno；西班牙常见 melocotón。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '句型', front: '¿Tú necesitas un durazno? Yo necesito dos duraznos.', back: '你需要一个桃子吗？我需要两个桃子。', note: 'necesitar = 需要；tú necesitas / yo necesito；数量 dos 后名词用复数 duraznos。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'país', back: '国家', note: '阳性名词：el país；复数 países。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'edificio', back: '大楼 / 建筑物', note: '阳性名词：el edificio。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'supermercado', back: '超市', note: '阳性名词：el supermercado。' },
  { lang: '西班牙语', flag: '🇪🇸', type: '词汇', front: 'mangos', back: '芒果（复数）', note: '单数 mango；复数 mangos。' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Je travaille dans mon salon.', back: '我在我的客厅里工作。', note: 'travailler → je travaille；dans = 在……里面；mon salon = 我的客厅。' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Tu travailles dans un restaurant ?', back: '你在一家餐厅工作吗？', note: 'travailler → tu travailles；口语中可直接用陈述语序加升调提问。' },
  { lang: '法语', flag: '🇫🇷', type: '句型', front: 'Toi aussi, tu as un oncle portugais ?', back: '你也有一个葡萄牙叔叔/舅舅吗？', note: 'toi aussi = 你也；tu as = 你有；oncle = 叔叔/伯伯/舅舅；portugais = 葡萄牙的。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '词汇', front: 'yatak', back: '床', note: '家居高频名词；yatak odası = 卧室。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '词汇', front: 'kanepe', back: '沙发', note: '家居名词，近义场景词 koltuk 也常表示扶手椅/沙发座椅。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '词汇', front: 'lamba', back: '灯', note: '家居高频名词。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '短语', front: 'mor cam', back: '紫色玻璃', note: 'mor = 紫色；cam = 玻璃。土耳其语形容词通常放在名词前。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '句型', front: 'Biz çatının üzerindeyiz.', back: '我们在屋顶上。', note: 'çatı → çatının 是属格“屋顶的”；üzerinde = 在……上面；-yiz 表“我们是/我们处于”。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '句型', front: 'Sadece cam şişeden su içerim.', back: '我只从玻璃瓶里喝水。', note: 'sadece = 只；cam şişe = 玻璃瓶；şişeden 的 -den 表“从……”；içerim = 我喝。' },
  { lang: '土耳其语', flag: '🇹🇷', type: '句型', front: 'Çatı kırmızı.', back: '屋顶是红色的。', note: 'çatı = 屋顶；kırmızı = 红色的。名词 + 形容词可直接构成现在时判断句。' },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Bu mektup İngiltere’den.", back: "这封信来自英格兰。", note: "İngiltere’den：来自英格兰；来源格 -den。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "O, şişeden içer.", back: "他/她从瓶子里喝。", note: "şişe→şişeden 来源格；içmek→içer 第三人称习惯现在时。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Lamba masanın üstünde.", back: "灯在桌子上。", note: "masa→masanın 属格；üstünde 表在上面。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Annem bana bir mektup yazıyor.", back: "我妈妈正在给我写一封信。", note: "annem 我的妈妈；bana 给我；yazıyor 正在写。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Bir şişe su, lütfen.", back: "请给我一瓶水。", note: "bir şişe 一瓶；lütfen 请。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Mektup çantanın içinde.", back: "信在包里面。", note: "çanta→çantanın 属格；içinde 在里面。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "İki şişe şarap var.", back: "有两瓶葡萄酒。", note: "iki şişe 两瓶；数字后名词通常不用复数；var 表存在。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Bir tane masa lambası almak istiyorum.", back: "我想买一盏台灯。", note: "masa lambası 台灯；almak 买；istiyorum 我想要。" },
  { lang: "法语", flag: '🇫🇷', type: '句型', front: "J'habite avec mon copain et mon chien.", back: "我和男朋友以及我的狗住在一起。", note: "habiter avec 和……住一起；mon copain 男朋友；mon chien 我的狗。" },
  { lang: "法语", flag: '🇫🇷', type: '句型', front: "Lisa, tu parles bien anglais ?", back: "丽莎，你英语说得好吗？", note: "parler→tu parles；bien 好地；parler anglais 说英语。" },
  { lang: "法语", flag: '🇫🇷', type: '句型', front: "parler", back: "说话；讲某种语言", note: "je parle / tu parles / il parle / nous parlons / vous parlez / ils parlent。" },
  { lang: "阿拉伯语", flag: '🇸🇦', type: '句型', front: "لَيْسَ هُنَاكَ نُقُودٌ.", back: "没有现金。", note: "ليس هناك + 名词：不存在……；نقود 现金。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Ты видишь тарелки?", back: "你看见盘子了吗？", note: "видеть→ты видишь；тарелки 无生命复数宾格同主格。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Кажется, она идёт.", back: "看来她正在走。", note: "кажется 看起来；идти→идёт。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Мы видим дверь.", back: "我们看见一扇门。", note: "видеть→мы видим；дверь 阴性宾格同形。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Мы не готовим мясо.", back: "我们不做肉。", note: "не + 动词表示否定；готовим 我们做饭。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Мы редко готовим.", back: "我们很少做饭。", note: "редко 很少；готовить 做饭。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Что собака делает на кровати?", back: "狗在床上做什么？", note: "на кровати 在床面上；делает 正在做。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Кажется, воды нет.", back: "好像没有水。", note: "нет + 第二格；вода→воды。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Я уже в кровати.", back: "我已经在床上了。", note: "в кровати 在床上/被窝里；区别 на кровати。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Нет, мы не готовим.", back: "不，我们不做饭。", note: "句首 нет=不；не готовим=不做饭。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Мы готовим суп.", back: "我们正在做汤。", note: "готовить→готовим；суп 汤。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Ты видишь его книги?", back: "你看见他的书吗？", note: "его книги 他的书；его 是不变的物主词。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Мы не видим мальчика, где он?", back: "我们没看见那个男孩，他在哪？", note: "мальчика 是有生命阳性名词的宾格形式，与第二格同形。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Мы вас видим.", back: "我们看见您/你们。", note: "вас 是 вы 的宾格。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Вы видите стол и кровать.", back: "您/你们看见桌子和床。", note: "вы видите；стол 和 кровать 为无生命宾语。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Вы её видите?", back: "您/你们看见她吗？", note: "её 在这里是她的宾格，区别物主代词 её。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Где ты живёшь?", back: "你住在哪里？", note: "жить→ты живёшь；где 在哪里。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Где они живут?", back: "他们住在哪里？", note: "жить→они живут。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Вы много знаете?", back: "您/你们知道很多吗？", note: "знать→вы знаете；много 很多。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Я живу в городе.", back: "我住在城市里。", note: "в + 前置格；город→городе。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Вы знаете его?", back: "您/你们认识他吗？", note: "его 在这里是宾格“他”；его книги 中是“他的”。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Я живу здесь.", back: "我住在这里。", note: "здесь 这里；я живу 我住。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Ты уже идёшь в школу?", back: "你已经要去学校了吗？", note: "идти→идёшь；в школу 方向宾格。" },
  { lang: "俄语", flag: '🇷🇺', type: '句型', front: "Ты идёшь домой, да?", back: "你要回家了，对吧？", note: "домой 往家；да? 对吧？" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Aşçı bıçağı kullanıyor.", back: "厨师正在使用刀。", note: "bıçak→bıçağı 特指宾格且 k→ğ；kullanıyor 正在使用。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Bir kaşık şeker yeterli.", back: "一勺糖就够了。", note: "bir kaşık 一勺；yeterli 足够。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Kadın masada yer.", back: "女人在桌边吃饭。", note: "masa→masada 位置格；yemek→yer 习惯现在时。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Neden benimle gelmiyorsun?", back: "你为什么不跟我来？", note: "benimle 和我；gelmiyorsun 你不来；neden 为什么。" },
  { lang: "土耳其语", flag: '🇹🇷', type: '句型', front: "Bugün Azeri yemeği yiyoruz.", back: "今天我们吃阿塞拜疆菜。", note: "bugün 今天；yiyoruz 我们正在吃。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "Tú bailas salsa, ¿verdad?", back: "你跳萨尔萨舞，对吗？", note: "bailar→bailas；¿verdad? 对吗。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "Nosotros cocinamos por la tarde.", back: "我们下午做饭。", note: "cocinar→cocinamos；por la tarde 下午。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "Sí, yo cocino pasta con mi abuela.", back: "是的，我和奶奶/外婆一起做意大利面。", note: "yo cocino；con mi abuela 和奶奶/外婆。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "Nosotros cocinamos sopa.", back: "我们做汤。", note: "nosotros cocinamos 我们做饭。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "Yo cocino solo.", back: "我一个人做饭。", note: "solo 男性说话者；女性用 sola。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "arroz con pollo", back: "鸡肉饭；米饭配鸡肉", note: "arroz 米饭；con 和/配；pollo 鸡肉。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "¿Sopa o tacos?", back: "汤还是墨西哥玉米卷饼？", note: "o 表示或者。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "Buenas tardes, quiero arroz con pollo, por favor.", back: "下午好，我想要鸡肉饭，谢谢。", note: "quiero 我想要；por favor 请；点餐常用。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "¡Nosotros cocinamos mucho también!", back: "我们也经常做饭！", note: "mucho 本义很多/大量，修饰动词时可译经常；también 也。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "¡No hay arroz!", back: "没有米饭！", note: "no hay 表示不存在。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "Tú cocinas, ¿verdad?", back: "你做饭，对吗？", note: "cocinar→tú cocinas；¿verdad? 反意确认。" },
  { lang: "西班牙语", flag: '🇪🇸', type: '句型', front: "mi sopa", back: "我的汤", note: "mi 我的；sopa 汤。" },
  { lang: "法语", flag: '🇫🇷', type: '句型', front: "Oui, j'habite à Madrid avec Lisa.", back: "是的，我和丽莎住在马德里。", note: "habiter à + 城市；avec 和……一起。" },
  { lang: "法语", flag: '🇫🇷', type: '句型', front: "Je travaille dans un restaurant.", back: "我在一家餐厅工作。", note: "travailler→je travaille；dans un restaurant 在餐厅里。" },
  { lang: "法语", flag: '🇫🇷', type: '句型', front: "Pardon, comment tu t'appelles ?", back: "不好意思，你叫什么名字？", note: "s’appeler 叫作；tu t’appelles 你叫。" },
  { lang: "法语", flag: "🇫🇷", type: "句型", front: "Je suis contente parce que ma rue est jolie.", back: "我很开心，因为我的街道很漂亮。", note: "contente 女性形式；parce que 因为；jolie 漂亮的（阴性）。" },
  { lang: "法语", flag: "🇫🇷", type: "句型", front: "Cool, ma maison est propre maintenant !", back: "太好了，我的房子现在干净了！", note: "ma maison 我的房子；propre 干净；maintenant 现在。" },
  { lang: "法语", flag: "🇫🇷", type: "句型", front: "Ton quartier est propre ?", back: "你的街区干净吗？", note: "quartier 阳性名词；口语升调问句。" },
  { lang: "法语", flag: "🇫🇷", type: "句型", front: "Oui, ma rue est toujours propre.", back: "是的，我的街道一直很干净。", note: "toujours 总是；ma rue 我的街道。" },
  { lang: "法语", flag: "🇫🇷", type: "句型", front: "Lisa habite dans mon quartier.", back: "丽莎住在我的街区。", note: "habiter 居住；dans mon quartier 在我的街区。" },
  { lang: "法语", flag: "🇫🇷", type: "句型", front: "Tu habites avec ton chat ?", back: "你和你的猫住在一起吗？", note: "habiter avec 与……住一起；ton chat 你的猫。" },
  { lang: "法语", flag: "🇫🇷", type: "短语", front: "dans ma rue", back: "在我的街道上", note: "rue 阴性名词；ma rue 我的街道。" },
  { lang: "法语", flag: "🇫🇷", type: "词汇", front: "rue", back: "街道", note: "la rue 阴性名词。" },
  { lang: "法语", flag: "🇫🇷", type: "句型", front: "C'est mon chat.", back: "这是我的猫。", note: "C'est 这是；mon chat 我的猫。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "词汇", front: "sekreter", back: "秘书", note: "联想英语 secretary。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "句型", front: "Aslan et yer.", back: "狮子吃肉。", note: "aslan 狮子；et 肉；yer 是 yemek 的习惯现在时。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "词汇", front: "ressam", back: "画家", note: "联想 resim 图画。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "词汇", front: "işsiz", back: "失业的", note: "iş 工作 + -siz 没有……的。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "词汇", front: "yakışıklı", back: "英俊的", note: "常形容男性外貌。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "词汇", front: "ama", back: "但是", note: "高频转折连词。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "词汇", front: "asker", back: "士兵", note: "与 polis 警察区分。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "词汇", front: "bekçi", back: "守卫、看守", note: "职业词，可表示门卫。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "词汇", front: "yönetmen", back: "导演", note: "与 yönetmek 管理、执导同词根。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "词汇", front: "yorgun", back: "疲惫的", note: "Yorgunum = 我累了。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "词汇", front: "polis", back: "警察", note: "联想英语 police。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "句型", front: "Onlar benim patronlarım değiller.", back: "他们不是我的老板。", note: "patron + lar 复数 + ım 我的；değiller 他们不是。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "句型", front: "Yediyi beş geçe ofise gel.", back: "7点05分来办公室。", note: "yediyi 七（宾格）；beş geçe 过五分；ofise 到办公室；gel 来。" },
  { lang: "土耳其语", flag: "🇹🇷", type: "语法", front: "değil / değiller", back: "不是 / 他们不是", note: "名词或形容词谓语否定用 değil；复数第三人称可用 değiller。" },
];

function splitAtomicCard(card: Card): Card[] {
  if (card.textbook) return [card];
  const separators = [' · ', ' / '];
  for (const separator of separators) {
    if (!card.front.includes(separator) || !card.back.includes(separator)) continue;
    const fronts = card.front.split(separator).map(x => x.trim()).filter(Boolean);
    const backs = card.back.split(separator).map(x => x.trim()).filter(Boolean);
    if (fronts.length <= 1 || fronts.length !== backs.length) continue;
    return fronts.flatMap((front, i) => splitAtomicCard({ ...card, front, back: backs[i], note: `${card.note} · 已按“一词/一知识点一卡”拆分。` }));
  }
  return [card];
}
function buildAtomicCards(source: Card[]) {
  const byKey = new Map<string, Card>();
  source.flatMap(splitAtomicCard).forEach(card => {
    const key = `${card.lang}::${(card.type.startsWith('A1 · ') || card.textbook) ? card.type + '::' : ''}${card.front}`;
    const existing = byKey.get(key);
    if (!existing) byKey.set(key, card);
    else if (!existing.note.includes(card.note)) existing.note = `${existing.note} ${card.note}`;
  });
  return [...byKey.values()];
}
const cards: Card[] = buildAtomicCards([...rawCards, ...turkishLifeCards, ...screenshotBatchCards, ...travelCards, ...novemberLearningCards, ...a1CourseCards, ...a1ExpandedCards, ...a1TurkishRichCards, ...textbookCards]);

type ReviewInfo = { score: number; lastReviewed: number; dueAt: number; times: number; stage?: number; ease?: number }; 
const DAY = 24 * 60 * 60 * 1000;
const EBBINGHAUS_INTERVALS = [5 * 60 * 1000, 30 * 60 * 1000, 12 * 60 * 60 * 1000, DAY, 2 * DAY, 4 * DAY, 7 * DAY, 15 * DAY, 30 * DAY, 60 * DAY];
function reviewDelay(score: number, old?: ReviewInfo, lapses = 0, successes = 0) {
  if (!old) return { stage: 0, delay: EBBINGHAUS_INTERVALS[0], ease: 1 };
  const previousStage = old.stage ?? Math.max(0, Math.min(old.times - 1, EBBINGHAUS_INTERVALS.length - 1));
  const oldEase = old.ease ?? 1;
  const ease = Math.max(0.55, Math.min(1.65, oldEase + (score === 2 ? 0.08 : score === 1 ? -0.12 : -0.25) + Math.min(successes, 5) * 0.01 - Math.min(lapses, 5) * 0.02));
  const stage = score === 0 ? 0 : score === 1 ? Math.max(0, previousStage - 1) : Math.min(previousStage + 1, EBBINGHAUS_INTERVALS.length - 1);
  const difficulty = Math.max(0.55, 1 - Math.min(lapses, 6) * 0.07);
  return { stage, delay: Math.round(EBBINGHAUS_INTERVALS[stage] * ease * difficulty), ease };
}
function dueLabel(review?: ReviewInfo) {
  if (!review) return '尚未学习';
  const ms = review.dueAt - Date.now();
  if (ms <= 0) return '现在需要复习';
  const mins = Math.ceil(ms / 60000);
  if (mins < 60) return `${mins} 分钟后复习`;
  const hours = Math.ceil(ms / 3600000);
  if (hours < 24) return `${hours} 小时后复习`;
  return `${Math.ceil(ms / DAY)} 天后复习`;
}
type State = {
  reviewed: number;
  mastered: number;
  scores: Record<string, number>;
  reviews?: Record<string, ReviewInfo>;
  daily?: Record<string, number>;
  lapses?: Record<string, number>;
  successes?: Record<string, number>;
  introduced?: Record<string, string>;
  knownCards?: string[];
  skills?: Record<string, { recognize: number; recall: number; speak: number; use: number }>;
};
function dayKey(ts = Date.now()) {
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function streakDays() {
  const days = new Set(Object.entries(state.daily || {}).filter(([, count]) => count > 0).map(([day]) => day));
  let streak = 0;
  const cursor = new Date();
  if (!days.has(dayKey(cursor.getTime()))) cursor.setDate(cursor.getDate() - 1);
  while (days.has(dayKey(cursor.getTime()))) { streak++; cursor.setDate(cursor.getDate() - 1); }
  return streak;
}
function cardKey(c: Card) { return c.textbook ? `textbook2012::${c.textbook.unit}::${c.textbook.kind}::${c.front}` : `${c.lang}::${c.front}`; }
function masteryScore(c: Card) {
  const r = state.reviews?.[cardKey(c)];
  if (!r) return 0;
  const stagePart = Math.min(45, ((r.stage ?? 0) / (EBBINGHAUS_INTERVALS.length - 1)) * 45);
  const repetitionPart = Math.min(20, r.times * 2.5);
  const recallPart = r.score === 2 ? 20 : r.score === 1 ? 10 : 0;
  const successPart = Math.min(10, (state.successes?.[cardKey(c)] || 0) * 2);
  const lapsePenalty = Math.min(30, (state.lapses?.[cardKey(c)] || 0) * 6);
  const overdueDays = Math.max(0, (Date.now() - r.dueAt) / DAY);
  const recencyPenalty = Math.min(15, overdueDays * 2);
  const prerequisitePenalty = prerequisitesFor(c).some(prereq => basicMasteryScore(prereq) < 40) ? 10 : 0;
  return Math.max(0, Math.min(100, Math.round(stagePart + repetitionPart + recallPart + successPart - lapsePenalty - recencyPenalty - prerequisitePenalty)));
}
function basicMasteryScore(c: Card) {
  const r = state.reviews?.[cardKey(c)];
  if (!r) return 0;
  return Math.max(0, Math.min(100, Math.round(((r.stage ?? 0) / 9) * 55 + Math.min(20, r.times * 2.5) + (r.score === 2 ? 25 : r.score === 1 ? 12 : 0) - Math.min(30, (state.lapses?.[cardKey(c)] || 0) * 6))));
}
function masteryFor(language: string) {
  const group = cards.filter(c => c.lang === language && !c.textbook);
  return group.length ? Math.round(group.reduce((sum, c) => sum + masteryScore(c), 0) / group.length) : 0;
}
function weakCards() {
  return cards.filter(c => { const r = state.reviews?.[cardKey(c)]; return r && (r.score < 2 || (r.stage ?? 0) <= 1); }).sort((a, b) => (state.reviews?.[a.front]?.score ?? 2) - (state.reviews?.[b.front]?.score ?? 2));
}
function knowledgeCategory(c: Card) {
  if (c.type === '语法') return '语法';
  if (c.type === '词汇' || c.type === '动词' || c.type === '连接词') return '词汇';
  if (c.type === '句型' || c.type === '短语' || c.type.includes('口语')) return '句型';
  return '发音与其他';
}
function skillStage(c: Card) {
  const skill = state.skills?.[cardKey(c)];
  if (!skill) return 0;
  if (skill.use >= 1) return 4;
  if (skill.speak >= 1) return 3;
  if (skill.recall >= 1) return 2;
  if (skill.recognize >= 1) return 1;
  return 0;
}
function learningLevel(c: Card) {
  const score = masteryScore(c);
  const skill = skillStage(c);
  if (score === 0 && !state.reviews?.[cardKey(c)]) return { label: '未学习', level: 0 };
  if (skill === 1 || score < 35) return { label: '会认', level: 1 };
  if (skill === 2 || score < 60) return { label: '会想', level: 2 };
  if (skill === 3 || score < 85) return { label: '会说', level: 3 };
  return { label: '会用 · 长期记忆', level: 4 };
}
function findCard(langName: string, term: string) { return cards.find(c => c.lang === langName && c.front === term); }
const prerequisiteLinks: Record<string, string[]> = {
  '土耳其语::Sola bak!': ['-a / -e'],
  '土耳其语::Sola dön!': ['-a / -e'],
  '土耳其语::Sola dönüyoruz.': ['-a / -e', '-ıyor / -iyor / -uyor / -üyor'],
  '土耳其语::Sana et vermiyorum.': ['-ıyor / -iyor / -uyor / -üyor'],
  '土耳其语::Gün başlamıyor, bitiyor.': ['-ıyor / -iyor / -uyor / -üyor'],
  '土耳其语::O, sana mı soruyor?': ['mı / mi / mu / mü']
};
function prerequisitesFor(c: Card) { return (prerequisiteLinks[cardKey(c)] || []).map(term => findCard(c.lang, term)).filter((x): x is Card => Boolean(x)); }
function relatedInModule(c: Card) { return cards.filter(x => x.lang === c.lang && topicFor(x) === topicFor(c) && cardKey(x) !== cardKey(c)).slice(0, 3); }
function exampleFor(c: Card) {
  const examples: Record<string, [string, string]> = {
    '土耳其语::-a / -e': ['Okula gidiyorum.', '我正在去学校。这里 okul → okula，表示“向学校”。'],
    '土耳其语::-ıyor / -iyor / -uyor / -üyor': ['Türkçe öğreniyorum.', '我正在学习土耳其语。öğreniyorum = 我正在学习。'],
    '土耳其语::mı / mi / mu / mü': ['Sen Türkçe biliyor musun?', '你会土耳其语吗？疑问助词跟随元音和谐。'],
    '阿拉伯语::هذا / هذه': ['هذه سيارة كبيرة.', '这是一辆大汽车。سيارة 是阴性，因此使用 هذه。'],
    '法语::tu es / tu as': ['Tu es prêt ? Tu as le temps ?', '你准备好了吗？你有时间吗？对比 être 与 avoir。'],
    '西班牙语::hay / no hay': ['Hay un café aquí.', '这里有一家咖啡馆。hay 表示“有/存在”。'],
    '俄语::Ты меня понимаешь?': ['Да, я тебя понимаю.', '是的，我明白你。对比 меня（我）与 тебя（你）的宾格。']
  };
  return examples[cardKey(c)] || (c.type === '词汇' || c.type === '动词' ? [`${c.front} — ${c.back}`, `先用这个词自己说一个最短句，再回忆：${c.note}`] : [c.front, `${c.back} · 尝试替换句中的一个词，自己造一个新句子。`]);
}
function mediaResources(c: Card) {
  const topic = topicFor(c);
  const curated: Record<string, { visual: string; visualNote: string; videoQuery: string; videoGoal: string }> = {
    '土耳其语::-a / -e': { visual: '🏫 → 🚶', visualNote: '把 -a/-e 记成“箭头指向目的地”：okul → okula。', videoQuery: 'Turkish dative case A E beginner examples', videoGoal: '重点看：什么时候加 -a/-e，以及元音和谐' },
    '土耳其语::-ıyor / -iyor / -uyor / -üyor': { visual: '👤  ···▶  🏃', visualNote: '把进行时想成“动作正在播放”。词干 + -(I)yor + 人称。', videoQuery: 'Turkish present continuous iyor beginner lesson', videoGoal: '重点看：词干变化、元音和谐和人称结尾' },
    '土耳其语::mı / mi / mu / mü': { visual: '💬  →  ❓', visualNote: '疑问助词像一个可移动的问号，放在你想强调的成分后面。', videoQuery: 'Turkish question particle mi mı mu mü lesson', videoGoal: '重点看：四种形式与句中焦点位置' },
    '阿拉伯语::هذا / هذه': { visual: '👆 هذا  |  👆 هذه', visualNote: '两个“这个”先按名词性别分组记：阳性 هذا，阴性 هذه。', videoQuery: 'Arabic demonstratives هذا هذه beginner lesson', videoGoal: '重点看：阳性/阴性名词怎样选择指示词' },
    '法语::tu es / tu as': { visual: 'tu es = 你是  ⇄  tu as = 你有', visualNote: '把 être 和 avoir 做成一组对比，不要孤立背诵。', videoQuery: 'French tu es tu as être avoir beginner lesson', videoGoal: '重点听：es 与 as 的发音，并比较使用场景' },
    '西班牙语::hay / no hay': { visual: '📍 hay = 有  |  🚫 no hay = 没有', visualNote: '看到一个场景，先问“这里有没有？”——hay 表存在。', videoQuery: 'Spanish hay no hay beginner examples', videoGoal: '重点看：hay 与 estar/tener 的区别' },
    '俄语::Ты меня понимаешь?': { visual: 'Ты → понимаешь → меня', visualNote: '用箭头记句子角色：你 → 理解 → 我（宾格 меня）。', videoQuery: 'Russian меня тебя accusative pronouns beginner', videoGoal: '重点看：я→меня、ты→тебя 的宾格变化' }
  };
  const item = curated[cardKey(c)];
  const defaultVisual = knowledgeCategory(c) === '词汇' ? `🧠 ${c.front}  ↔  ${c.back}` : `① ${topic}  →  ② ${c.front}  →  ③ 自己造句`;
  const languageEnglish: Record<string, string> = { '英语': 'English IELTS', '土耳其语': 'Turkish', '阿拉伯语': 'Arabic', '法语': 'French', '西班牙语': 'Spanish', '俄语': 'Russian' };
  const topicEnglish: Record<string, string> = { '基础词汇': 'basic vocabulary', '格与方向': 'dative case and direction', '动词原形': 'verb infinitives', '现在进行时': 'present continuous tense', '否定与疑问': 'negation and questions', '核心句型': 'essential sentence patterns', '字母与发音': 'alphabet and pronunciation', '指示词与性别': 'demonstratives and grammatical gender', '存在与位置': 'existence and location expressions', '问候与海湾口语': 'Gulf Arabic greetings and spoken expressions', '高频日常表达': 'common Arabic everyday expressions', '发音与连读': 'pronunciation and liaison', '基础词汇': 'basic vocabulary', '问候与礼貌': 'greetings politeness thanks and apologies', '名词与冠词': 'nouns and articles', '代词与疑问词': 'personal pronouns and question words', '所有形容词': 'possessive adjectives', '性数与形容词': 'gender number and adjective agreement', '高频介词': 'common prepositions and prepositional phrases', '固定搭配': 'common French collocations', '连接词与从句': 'conjunctions and subordinate clauses', 'être / avoir': 'etre avoir verbs', '动词与时态': 'French verb tenses and moods', '动词与句型': 'verbs and sentence patterns', '日常交流': 'everyday conversation', '发音基础': 'basic pronunciation', '名词与修饰': 'nouns adjectives and modifiers', '动词与变位': 'verb conjugation', '存在表达 hay': 'hay existence expression', '代词与格': 'pronouns and grammatical cases', '动词变化': 'verb conjugation', '否定与副词': 'negation and adverbs', '家庭与亲属': 'family and relatives', '朋友与关系': 'friendship romantic relationships and relationship vocabulary', '关系主题动词': 'relationship verbs', '餐厅与日常场景': 'restaurant everyday sentences and location expressions', '方向与位置': 'directions and spatial prepositions', '时间与时态': 'time expressions and tense markers', '句子结构': 'Spanish sentence structure', '旅行口语': 'Spanish travel phrases', '购物与餐厅': 'shopping and restaurant Spanish', '家居与家务': 'bedroom household chores vocabulary' };
  const englishLang = languageEnglish[c.lang] || c.lang;
  const englishTopic = topicEnglish[topic] || 'language lesson';
  const videoQuery = encodeURIComponent(item?.videoQuery || `${englishLang} ${englishTopic} beginner lesson ${c.front} pronunciation examples`);
  const imageQuery = encodeURIComponent(`${englishLang} ${englishTopic} ${c.front} visual example context picture`);
  return { visual: item?.visual || defaultVisual, visualNote: item?.visualNote || `先把“${c.front}”放回「${topic}」场景理解，再记忆形式。`, video: `https://www.youtube.com/results?search_query=${videoQuery}`, videoGoal: item?.videoGoal || `重点寻找包含“${c.front}”的发音、真实语境和完整例句`, image: `https://www.google.com/search?tbm=isch&q=${imageQuery}` };
}
const travelTopics = ['🌍 旅游'];
const curriculum: Record<string, string[]> = {
  '土耳其语': [...travelTopics, '基础词汇', '家居与位置', '格与方向', '动词原形', '现在进行时', '否定与疑问', '核心句型'],
  '阿拉伯语': [...travelTopics, '字母与发音', '基础词汇', '指示词与性别', '存在与位置', '问候与海湾口语', '高频日常表达', '餐厅与日常场景', '核心句型'],
  '法语': [...travelTopics, '发音与连读', '基础词汇', '问候与礼貌', '名词与冠词', '代词与疑问词', '所有形容词', '性数与形容词', '高频介词', '固定搭配', '连接词与从句', 'être / avoir', '动词与时态', '日常交流'],
  '西班牙语': [...travelTopics, '发音基础', '基础词汇', '方向与位置', '时间与时态', '名词与修饰', '代词与疑问词', '动词与变位', '句子结构', '否定与句型', '存在表达 hay', '旅行口语', '购物与餐厅', '家居与家务', '核心句型'],
  '俄语': [...travelTopics, '字母与发音', '基础词汇', '家庭与亲属', '朋友与关系', '关系主题动词', '代词与格', '动词变化', '移动与方向', '否定与副词', '核心句型'],
  '英语': [...travelTopics, 'IELTS Sentence 01 · 核心词汇', 'IELTS Sentence 01 · 同义词与搭配', 'IELTS Sentence 01 · 句子应用', 'IELTS Sentence 01 · 中译英输出']
};
function topicFor(c: Card) {
  if (c.textbook) return `📗 教材 A1 · ${c.textbook.unit}`;
  if (c.type.startsWith('A1 · ')) return c.type;
  if (c.type.startsWith('旅游 · ')) return '🌍 旅游';
  const text = `${c.front} ${c.back} ${c.note}`.toLowerCase();
  if (c.lang === '英语') {
    if (/用提示词翻译|输出训练/.test(text)) return 'IELTS Sentence 01 · 中译英输出';
    if (/resident|citizen|inhabitant|dweller|denizen|dispute|controversy|disagreement|quarrel|argue|the number of|the risk of|conform to|reside in|同义词|固定搭配/.test(text)) return 'IELTS Sentence 01 · 同义词与搭配';
    if (/people prefer|the number of city|obesity increases|business venture involves|young people are|spokesman refused|these plants need|we rented a car|full-time students|archaeologists|solar panels/.test(text)) return 'IELTS Sentence 01 · 句子应用';
    return 'IELTS Sentence 01 · 核心词汇';
  }
  if (c.lang === '土耳其语') {
    if (/yatak|kanepe|lamba|cam şişe|mor cam|çatı|üzerinde|家居|屋顶|玻璃瓶/.test(text)) return '家居与位置';
    if (/-a \/ -e|方向|sola|dön|bak|harita/.test(text)) return '格与方向';
    if (/-mak|mek|infinitive|动词原形|uçmak|sürmek|okumak|bilmek/.test(text)) return '动词原形';
    if (/现在进行|ıyor|iyor|uyor|üyor/.test(text)) return '现在进行时';
    if (/否定|疑问|değil|mı|mi|mu|mü/.test(text)) return '否定与疑问';
    return knowledgeCategory(c) === '词汇' ? '基础词汇' : '核心句型';
  }
  if (c.lang === '阿拉伯语') {
    if (/مطعم|المَطْعَم|العشاء|餐厅|晚饭|أصدقائي/.test(text)) return '餐厅与日常场景';
    if (/هذا|هذه|阳性|阴性|性别/.test(text)) return '指示词与性别';
    if (/هناك|هُنَاكَ|هُنَا|عندي|في |位置|存在|这里|那里/.test(text)) return '存在与位置';
    if (/طَبْعًا|لَا بَأْسَ|تَمَام|مُمْكِن|当然|没问题|可以吗/.test(text)) return '高频日常表达';
    if (c.type.includes('口语') || /السلام|شلونك|وين|كم|أبي|شكراً|عفواً|لو سمحت/.test(text)) return '问候与海湾口语';
    return knowledgeCategory(c) === '词汇' ? '基础词汇' : '核心句型';
  }
  if (c.lang === '法语') {
    if (/连读|发音|元音|鼻音/.test(text)) return '发音与连读';
    if (/bonjour|bonsoir|salut|au revoir|à bientôt|à demain|bonne journée|bonne soirée|bonne nuit|merci|remercie|de rien|je vous en prie|avec plaisir|pardon|désolé|désolée|m’excuse|s’il vous plaît|s’il te plaît|prends soin|prenez soin/.test(text)) return '问候与礼貌';
    if (/mon \/ ma \/ mes|ton \/ ta \/ tes|son \/ sa \/ ses|notre \/ nos|votre \/ vos|leur \/ leurs|所有形容词/.test(text)) return '所有形容词';
    if (/je \/ tu \/ il|qui \/ que \/ où|疑问词|人称代词/.test(text)) return '代词与疑问词';
    if (/le \/ la \/ les|un \/ une \/ des|冠词|名词/.test(text)) return '名词与冠词';
    if (/à \/ de \/ avec|à côté de|au bord de|au centre de|au milieu de|au lieu de|autour de|en face de|en dehors de|介词/.test(text)) return '高频介词';
    if (/avoir besoin|avoir envie|avoir raison|avoir tort|faire attention|faire la cuisine|faire du sport|prendre soin|prendre conscience|固定搭配/.test(text)) return '固定搭配';
    if (/bien que|à condition que|afin que|car \/|comme si|d’ailleurs|连接/.test(text)) return '连接词与从句';
    if (/capable de|content de|proche de|responsable de|prêt à|habitué à|intéressé par|utile pour/.test(text)) return '固定搭配';
    if (/阴性|阳性|形容词|noire|性数/.test(text)) return '性数与形容词';
    if (/être|avoir|tu es|tu as|j’ai/.test(text)) return 'être / avoir';
    if (/tu fais|tu faisais|tu fis|tu feras|tu as fait|tu avais fait|tu ferais|tu fasses|时态/.test(text)) return '动词与时态';
    if (c.type === '词汇') return '基础词汇';
    if (/ça va|appelle|excusez|日常|你好/.test(text)) return '日常交流';
    return '日常交流';
  }
  if (c.lang === '西班牙语') {
    if (/hay \/ no hay|存在/.test(text)) return '存在表达 hay';
    if (/yo · tú · él\/ella|me · te · lo\/la|me · te · le|quién · qué|mi\/mis · tu\/tus|人称代词|宾语代词|疑问词|物主形容词/.test(text)) return '代词与疑问词';
    if (/no · ya no|nunca · todavía|ni…ni|s \+ v \+ o|ser \+ participio|否定句|被动句/.test(text)) return '否定与句型';
    if (/主语|谓语|宾语|表语|定语|状语|同位语|补语|句子.*成分|yo bebí/.test(text)) return '句子结构';
    if (/siempre|todos los días|ayer|anoche|semana pasada|mañana|próxima semana|actualmente|todavía|primavera|verano|otoño|invierno|a · el · en · dentro de|estudiar: estudio|leer: leo|escribir: escribo|时态|时间标志|过去时间|未来时间|现在\/进行/.test(text)) return '时间与时态';
    if (/hacia arriba|hacia abajo|más allá|a través|dentro de|encima de|debajo de|al lado de|cerca de|detrás de|entre ·|alrededor de|norte · sur|lejos|estacionamiento|edificio|方向|空间位置/.test(text)) return '方向与位置';
    if (/ir · hacer · ser|leer · escribir|vivo|necesito|necesitas|动词|变位|llevo dos años|he desayunado|he comido/.test(text)) return '动词与变位';
    if (/tocador|edredón|percha|ropa de cama|lavar los platos|doblar la ropa|poner la mesa|limpiar el baño|hacer la cama|家务|卧室/.test(text)) return '家居与家务';
    if (/demasiado caro|descuento|probármelo|cuenta|pagar con tarjeta|dónde puedo comer|menú|recomienda|购物|餐厅/.test(text)) return '购物与餐厅';
    if (/hola|cómo estás|cómo te llamas|por favor|no entiendo|dónde está|dónde hay|dónde puedo|puedes ayudarme|cuánto cuesta|autobús|taxi|aeropuerto|hotel|reserva|buen viaje|旅行/.test(text)) return '旅行口语';
    if (/muchos|muy|修饰|rojo · azul|marrón · dorado|el\/la\/los\/las|冠词/.test(text)) return '名词与修饰';
    return knowledgeCategory(c) === '词汇' ? '基础词汇' : '核心句型';
  }
  if (c.lang === '俄语') {
    if (/семья|мать|отец|сын|дочь|брат|сестра|бабушка|дедушка|родственник|家庭|亲属/.test(text)) return '家庭与亲属';
    if (/друг|подруга|знакомый|дружба|парень|девушка|муж|жена|пара|знакомство|отношения|любовь|доверие|поддержка|朋友|关系|丈夫|妻子|爱情|信任/.test(text) && c.type !== '动词') return '朋友与关系';
    if (/знакомиться|дружить|любить|помогать|поддерживать/.test(text)) return '关系主题动词';
    if (/меня|宾格|格/.test(text)) return '代词与格';
    if (/иду домой|хочу домой|домой|идти|回家|方向副词/.test(text)) return '移动与方向';
    if (/работаю|понимаешь|понимаю|动词/.test(text)) return '动词变化';
    if (/не |уже|много|否定|副词/.test(text)) return '否定与副词';
    return knowledgeCategory(c) === '词汇' ? '基础词汇' : '核心句型';
  }
  return '核心句型';
}
function openKnowledgeGroup(language: string, topic: string) {
  bookUnit = null; bookKind = '全部';
  lang = language;
  document.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', (x as HTMLElement).dataset.lang === language));
  queueMode = 'all';
  (el('search') as HTMLInputElement).value = '';
  filtered = cards.filter(c => c.lang === language && (topic.startsWith('A1 · ') ? c.type === topic : topicFor(c) === topic));
  index = 0;
  renderLibrary();
  showPage('libraryPage');
}
let bookUnit: number | null = null;
let bookKind = '全部';
const textbookUnits = [
  {title:'Merhaba',zh:'你好 · 问候、认识朋友、字母',start:7,end:20},
  {title:'Nerede?',zh:'在哪里 · 学校、数字、城市',start:21,end:36},
  {title:'Ne Yapıyorsun?',zh:'你在做什么 · 日常生活、休闲',start:37,end:50},
  {title:'Benim Dünyam',zh:'我的世界 · 家人、朋友',start:51,end:66},
  {title:'Zaman Zaman',zh:'时间与节日 · 钟点、节庆',start:67,end:80},
  {title:'Çevremiz ve Biz',zh:'我们与周围环境 · 亲属、街区、身体',start:81,end:93}
];
const textbookUrl='/resources/istanbul-a1-textbook.pdf';
let textbookPage=7;
function openTextbook(page:number) {
  textbookPage=Math.max(1,Math.min(108,page));
  const frame=el('textbookFrame') as HTMLIFrameElement;
  frame.src=textbookUrl+'#page='+textbookPage+'&view=FitH';
  el('textbookPageNo').textContent='第 '+textbookPage+' / 108 页';
  (el('textbookPageInput') as HTMLInputElement).value=String(textbookPage);
  el('textbookReader').hidden=false;
  el('textbookReader').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderTextbookUnits(){
 const host=el('textbookUnitList');
 host.innerHTML=textbookUnits.map((u,i)=>`<button class="textbookUnit" data-pdf-page="${u.start}"><b>${String(i+1).padStart(2,'0')} · ${u.title}</b><span>${u.zh}</span><small>原书 ${u.start}–${u.end} 页 · 保留全部插图和对话</small></button>`).join('');
 host.querySelectorAll<HTMLButtonElement>('[data-pdf-page]').forEach(b=>b.addEventListener('click',()=>openTextbook(Number(b.dataset.pdfPage))));
}
function renderKnowledgeTree() {
  const languages = ['英语', '土耳其语', '阿拉伯语', '法语', '西班牙语', '俄语'];
  el('knowledgeTree').innerHTML = languages.map(language => {
    const group = cards.filter(c => c.lang === language);
    const topics = ['📘 A1 · 初级课程', ...(curriculum[language] || [...new Set(group.map(topicFor))])];
    const branches = topics.map((topic, order) => {
      const items = group.filter(c => topic === '📘 A1 · 初级课程' ? c.type.startsWith('A1 · ') : topicFor(c) === topic);
      const mastered = items.filter(c => learningLevel(c).level >= 3).length;
      const types = [...new Set(items.map(knowledgeCategory))].join(' · ');
      const progress = items.length ? Math.round(mastered * 100 / items.length) : 0;
      const stateLabel = topic === '📘 A1 · 初级课程' ? `${a1CourseTopics.length} 个单元 · ${items.length} 张入门卡片` : (!items.length ? '待学习内容' : `${items.length} 张 · ${types}`);
      const relationCount = items.reduce((sum, item) => sum + prerequisitesFor(item).length, 0);
      const relationLabel = relationCount ? ` · ${relationCount} 个前置关系` : '';
      return topic === '📘 A1 · 初级课程' ? `<details class='a1CourseGroup'><summary class='a1CourseHead'><b>📘 A1 · 初级课程</b><small>${stateLabel} · 点击展开子主题</small></summary>${a1CourseTopics.map((unit,i)=>{const unitCards=items.filter(c=>c.type==='A1 · '+unit);const finished=unitCards.filter(c=>learningLevel(c).level>=3).length;return `<button class='treeBranch' data-tree-lang='${language}' data-tree-topic='A1 · ${unit}'><div><b><span class='moduleNo'>${String(i+1).padStart(2,'0')}</span>${unit}</b><small>${unitCards.length} 张卡片 · 已掌握 ${finished}</small></div><div class='miniProgress'><span style='width:${unitCards.length?Math.round(finished*100/unitCards.length):0}%'></span></div></button>`}).join('')}</details>` : `<button class='treeBranch ${items.length ? '' : 'treeEmpty'}' data-tree-lang='${language}' data-tree-topic='${topic}' ${items.length ? '' : 'disabled'}><div><b><span class='moduleNo'>${order + 1}</span>${topic}</b><small>${stateLabel}${relationLabel}</small></div><div class='miniProgress'><span style='width:${progress}%'></span></div></button>`;
    }).join('');
    return `<details class='treeLanguage' ${language === lang ? 'open' : ''}><summary><b>${group[0]?.flag || ''} ${language}</b><span>${group.length} 张 · ${masteryFor(language)}%</span></summary>${language === '土耳其语' ? textbookCourseMenu() : ''}${branches}</details>`;
  }).join('');
  document.querySelectorAll<HTMLButtonElement>('[data-book-unit]').forEach(button => button.addEventListener('click', () => openBookUnit(Number(button.dataset.bookUnit))));
  document.querySelectorAll<HTMLButtonElement>('.treeBranch').forEach(button => button.addEventListener('click', () => openKnowledgeGroup(button.dataset.treeLang || '', button.dataset.treeTopic || '')));
} 
let state: State = JSON.parse(
  localStorage.getItem('language-card-state') ||
    '{"reviewed":0,"mastered":0,"scores":{}}'
);
state.reviews ||= {};
state.daily ||= {};
state.lapses ||= {};
state.successes ||= {};
state.introduced ||= {};
state.skills ||= {};
const latestBatchKeys = new Set(["俄语::Я иду домой.","俄语::Я хочу домой.","西班牙语::un hijo y un hermano","西班牙语::Sí, yo vivo en este edificio.","西班牙语::lejos","西班牙语::estacionamiento","西班牙语::más","西班牙语::calor","西班牙语::durazno","西班牙语::duraznos","西班牙语::¿Tú necesitas un durazno? Yo necesito dos duraznos.","西班牙语::país","西班牙语::edificio","西班牙语::supermercado","西班牙语::mangos","法语::Je travaille dans mon salon.","法语::Tu travailles dans un restaurant ?","法语::Toi aussi, tu as un oncle portugais ?","土耳其语::yatak","土耳其语::kanepe","土耳其语::lamba","土耳其语::mor cam","土耳其语::Biz çatının üzerindeyiz.","土耳其语::Sadece cam şişeden su içerim.","土耳其语::Çatı kırmızı."]);
const currentKeys = cards.map(cardKey);
if (!state.knownCards) {
  state.knownCards = currentKeys.filter(key => !latestBatchKeys.has(key));
  latestBatchKeys.forEach(key => { if (currentKeys.includes(key)) state.introduced![key] = dayKey(); });
}
const known = new Set(state.knownCards);
currentKeys.forEach(key => {
  if (!known.has(key)) state.introduced![key] ||= dayKey();
});
state.knownCards = currentKeys;
const migrateMap = <T>(source: Record<string, T>) => {
  const migrated: Record<string, T> = {};
  cards.forEach(c => {
    const key = cardKey(c);
    if (source[key] !== undefined) migrated[key] = source[key];
    else if (source[c.front] !== undefined) migrated[key] = source[c.front];
    else {
      const legacy = rawCards.find(raw => raw.lang === c.lang && splitAtomicCard(raw).some(part => part.front === c.front));
      if (!legacy) return;
      const legacyKey = `${legacy.lang}::${legacy.front}`;
      if (source[legacyKey] !== undefined) migrated[key] = source[legacyKey];
      else if (source[legacy.front] !== undefined) migrated[key] = source[legacy.front];
    }
  });
  return migrated;
};
state.scores = migrateMap(state.scores);
state.reviews = migrateMap(state.reviews!);
state.lapses = migrateMap(state.lapses);
state.successes = migrateMap(state.successes);
Object.entries(state.scores).forEach(([key, score]) => {
  if (!state.reviews![key]) state.reviews![key] = { score, lastReviewed: Date.now(), dueAt: Date.now(), times: 1, stage: 0 };
  else if (state.reviews![key].stage === undefined) state.reviews![key].stage = Math.max(0, Math.min(state.reviews![key].times - 1, EBBINGHAUS_INTERVALS.length - 1));
});
function saveLocalState() { localStorage.setItem('language-card-state', JSON.stringify(state)); }
function exportBackup() {
  const payload = { app: '语言知识卡片', version: 2, exportedAt: new Date().toISOString(), state };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `language-cards-backup-${dayKey()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}
function restoreBackup(file: File) {
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const restored = parsed?.state;
      if (!restored || typeof restored !== 'object' || typeof restored.scores !== 'object') throw new Error('invalid');
      state = restored as State;
      state.reviews ||= {};
      state.daily ||= {};
      state.lapses ||= {};
      state.successes ||= {};
      state.introduced ||= {};
      state.skills ||= {};
      state.knownCards ||= cards.map(cardKey);
      saveLocalState();
      alert('备份恢复成功，学习进度已保存到本机。');
      location.reload();
    } catch {
      alert('无法导入：请选择本 App 导出的有效 JSON 备份文件。');
    }
  };
  reader.readAsText(file);
}
saveLocalState();
let lang = '全部';
let queueMode: 'all' | 'reviewed' | 'due' | 'today' = 'today';
let index = 0;
let filtered = [...cards];
let recallDirection: 'target' | 'chinese' = 'target';
function isVocabulary(c: Card) { return c.textbook?.kind === '词汇' || c.type === '词汇' || c.type === '动词' || c.type === '连接词'; }
function isGrammar(c: Card) { return c.type === '语法'; }
let memoryPhotoRequest = 0;
function situationalExample(c: Card): Array<[string,string]> {
  const samples: Record<string,Array<[string,string]>> = {
    '法语::ami':[
      ['Je vais au café avec un ami.','我要和一位朋友去咖啡馆。'],
      ['Un ami vient dîner chez moi ce soir.','今晚有位朋友来我家吃饭。'],
      ['Tu connais mon ami Paul ?','你认识我的朋友保罗吗？']],
    '法语::amie':[
      ['Mon amie habite près d’ici.','我的女性朋友住在这附近。'],
      ['Je retrouve une amie après le travail.','下班后我去见一位女性朋友。'],
      ['C’est une amie de longue date.','她是我的一位老朋友。']],
    '法语::rue':[
      ['Excusez-moi, où est cette rue ?','打扰一下，这条街在哪里？'],
      ['J’habite dans la rue à côté.','我住在隔壁那条街。'],
      ['Il y a une pharmacie au bout de la rue.','街道尽头有一家药店。']],
    '法语::chat':[
      ['Le chat est sous la table.','猫在桌子下面。'],
      ['Mon chat dort sur le canapé.','我的猫睡在沙发上。'],
      ['Est-ce que ton chat aime jouer ?','你的猫喜欢玩吗？']],
    '法语::bonjour':[
      ['Bonjour, vous allez bien ?','您好，您还好吗？'],
      ['Bonjour, je voudrais un café.','您好，我想要一杯咖啡。']],
    '法语::merci':[
      ['Merci pour votre aide.','谢谢您的帮助。'],
      ['Merci beaucoup, à demain !','非常感谢，明天见！']],
    '土耳其语::duvar':[
      ['Duvarın yanında bekliyorum.','我在墙边等着。'],
      ['Bu duvarı beyaza boyayacağız.','我们要把这面墙刷成白色。'],
      ['Duvarda güzel bir fotoğraf var.','墙上有一张漂亮的照片。']],
    '土耳其语::polis':[
      ['Polise adresi sordum.','我向警察问了地址。'],
      ['Polis burada, merak etme.','警察在这里，别担心。'],
      ['Bir polis bize yolu gösterdi.','一名警察给我们指了路。']],
    '土耳其语::yorgun':[
      ['İşten sonra çok yorgunum.','下班后我很累。'],
      ['Bugün yorgun musun?','你今天累吗？'],
      ['Yorgunum, biraz dinlenmek istiyorum.','我累了，想休息一会儿。']],
    '土耳其语::ama':[
      ['Seni aramak istedim ama vaktim yoktu.','我想给你打电话，但当时没有时间。'],
      ['Kahve istiyorum ama süt istemiyorum.','我想喝咖啡，但不要牛奶。'],
      ['Gelmek istiyorum ama bugün çalışıyorum.','我想来，但今天要工作。']],
    '土耳其语::işsiz':[
      ['O şu anda işsiz.','他目前没有工作。'],
      ['Üç aydır işsizim.','我已经失业三个月了。']],
    '英语::resident':[
      ['Every resident must register at the reception desk.','每位住户都必须在前台登记。'],
      ['The building manager informed all residents about the water shutdown.','物业经理通知所有住户停水安排。'],
      ['Local residents complained about the traffic noise.','当地居民投诉交通噪音。']],
    '英语::friend':[
      ['I am meeting a friend for lunch.','我要和一位朋友一起吃午饭。'],
      ['My friend lives near the station.','我的朋友住在车站附近。']],
    '西班牙语::amigo':[
      ['Voy al cine con un amigo.','我要和一位朋友去电影院。'],
      ['Mi amigo vive cerca de aquí.','我的朋友住在这附近。']],
    '俄语::друг':[
      ['Мой друг живёт рядом.','我的朋友住在附近。'],
      ['Я встречаюсь с другом после работы.','我下班后要和朋友见面。']]
  };
  return samples[cardKey(c)] || []; 
}
type SceneDialogue = {scene:string,lines:Array<[string,string,string]>};
const dialogueCache: Record<string,SceneDialogue[]> = (() => { try { return JSON.parse(localStorage.getItem('language-dialogue-cache-v1') || '{}'); } catch { return {}; } })();
const dialoguePending = new Set<string>();
const dialogueFailures = new Set<string>();
async function loadDialogue(c: Card, simpleExample: string) {
  const key = cardKey(c);
  dialoguePending.add(key);
  try {
    const result = await api.post('/api/dialogue', { lang:c.lang, front:c.front, back:c.back, note:c.note, simpleExample });
    const scenes = result.data?.scenes as SceneDialogue[] | undefined;
    if (Array.isArray(scenes) && scenes.length && scenes.every(s => s.scene && Array.isArray(s.lines) && s.lines.length >= 2)) {
      dialogueCache[key] = scenes;
      try { localStorage.setItem('language-dialogue-cache-v1', JSON.stringify(dialogueCache)); } catch { /* storage quota */ }
      if (filtered[index] && cardKey(filtered[index]) === key) render();
    } else { dialogueFailures.add(key); if (filtered[index] && cardKey(filtered[index]) === key) el('memorySituation').textContent = '场景对话暂不可用，点击重试'; }
  } catch (err) { dialogueFailures.add(key); console.warn('Dialogue generation unavailable',err); if (filtered[index] && cardKey(filtered[index]) === key) el('memorySituation').textContent = '场景对话暂不可用，点击重试'; }
  finally { dialoguePending.delete(key); }
}
function sceneDialogues(c: Card): Array<{scene:string,lines:Array<[string,string,string]>}> {
  const entries: Record<string,Array<{scene:string,lines:Array<[string,string,string]>}>> = {
    '英语::resident': [
      {scene:'公寓前台登记',lines:[['A','Are you a resident of this building?','您是这栋楼的住户吗？'],['B','Yes, I am a resident on the eighth floor.','是的，我住在八楼。']]},
      {scene:'物业维修',lines:[['A','Who should we notify about the repair?','维修的事情应该通知谁？'],['B','Please inform every resident on this floor.','请通知这一层的每位住户。']]}],
    '英语::friend': [{scene:'约朋友吃饭',lines:[['A','Who are you having lunch with?','你和谁一起吃午饭？'],['B','I am meeting a friend from work.','我要见一位工作上的朋友。']]}],
    '法语::ami': [{scene:'咖啡馆偶遇',lines:[['A','Tu attends quelqu’un ?','你在等人吗？'],['B','Oui, j’attends un ami.','是的，我在等一位朋友。']]}],
    '法语::amie': [{scene:'介绍朋友',lines:[['A','Qui est cette personne ?','这位是谁？'],['B','C’est une amie de l’université.','她是我的大学朋友。']]}],
    '法语::rue': [{scene:'街头问路',lines:[['A','Excusez-moi, cette rue mène à la gare ?','请问这条街通往火车站吗？'],['B','Oui, continuez tout droit.','是的，一直往前走。']]}],
    '法语::chat': [{scene:'朋友家做客',lines:[['A','C’est ton chat ?','这是你的猫吗？'],['B','Oui, mon chat s’appelle Milo.','是的，我的猫叫米洛。']]}],
    '法语::bonjour': [{scene:'咖啡馆点餐',lines:[['A','Bonjour, qu’est-ce que vous désirez ?','您好，您想点什么？'],['B','Bonjour, un café, s’il vous plaît.','您好，请给我一杯咖啡。']]}],
    '法语::merci': [{scene:'商店结账',lines:[['A','Voici votre reçu.','这是您的收据。'],['B','Merci beaucoup !','非常感谢！']]}],
    '土耳其语::duvar': [{scene:'装修房间',lines:[['A','Bu duvarı hangi renge boyayalım?','这面墙刷成什么颜色？'],['B','Bence duvar beyaz olsun.','我觉得墙刷成白色吧。']]}],
    '土耳其语::polis': [{scene:'街头求助',lines:[['A','Burada bir polis var mı?','这里有警察吗？'],['B','Evet, köşede bir polis var.','有，街角有一名警察。']]}],
    '土耳其语::yorgun': [{scene:'下班回家',lines:[['A','Neden bu kadar yorgunsun?','你为什么这么累？'],['B','Bugün çok çalıştım, yorgunum.','我今天工作很多，很累。']]}],
    '土耳其语::ama': [{scene:'邀请吃饭',lines:[['A','Bu akşam bizimle gelir misin?','今晚你和我们一起去吗？'],['B','Gelmek isterim ama işim var.','我想去，但我有事。']]}],
    '西班牙语::amigo': [{scene:'周末约会',lines:[['A','¿Con quién vas al cine?','你和谁去看电影？'],['B','Voy con un amigo del trabajo.','我和一位同事朋友一起去。']]}],
    '俄语::друг': [{scene:'介绍朋友',lines:[['A','Кто это?','这是谁？'],['B','Это мой друг Алексей.','这是我的朋友阿列克谢。']]}]
  };
  return turkishLifeDialogues[cardKey(c)] || entries[cardKey(c)] || [];
}
function everydayExample(c: Card) {
  const known: Record<string, [string,string]> = {
    '土耳其语::duvar':['Bu duvar beyaz.','这面墙是白色的。'],
    '土耳其语::polis':['Polis burada.','警察在这里。'],
    '土耳其语::yorgun':['Bugün çok yorgunum.','我今天很累。'],
    '土耳其语::ama':['Gelmek istiyorum ama işim var.','我想来，但是我有事。'],
    '土耳其语::işsiz':['O şu anda işsiz.','他目前没有工作。'],
    '法语::rue':['J’habite dans cette rue.','我住在这条街上。'],
    '法语::chat':['Mon chat dort sur le canapé.','我的猫睡在沙发上。']
  };
  const pair = known[cardKey(c)];
  return pair ? { target:pair[0],chinese:pair[1] } : {target:'',chinese:''};
}
function memoryVisualOld(c: Card) {
  const meaning = c.back.trim();
  const cues: Array<[RegExp,string,string]> = [
    [/墙|wall/i,'🧱','想象手掌触碰一面粗糙的砖墙'],
    [/猫|chat|cat/i,'🐈','想象一只猫跳到你的桌子上'],
    [/狗|dog|chien/i,'🐕','想象小狗在门口摇尾巴'],
    [/房|家|home|house/i,'🏠','想象推开自己家的门'],
    [/学校|school|école/i,'🏫','想象走进教室'],
    [/水|water|eau/i,'💧','想象冰凉的水滴落在手心'],
    [/车|car|bus/i,'🚗','想象一辆车从眼前开过'],
    [/吃|食物|food|eat/i,'🍽️','想象餐桌上的食物和味道'],
    [/喝|drink/i,'🥤','想象拿起杯子喝一口'],
    [/书|book|livre/i,'📖','想象翻开一本书'],
    [/工作|office|职业/i,'💼','想象走进办公室'],
    [/走|去|come|go|venir/i,'🚶','想象自己沿着路走向目的地'],
    [/高兴|快乐|happy/i,'😊','想象收到好消息时的表情'],
    [/时间|今天|明天|昨天|钟/i,'🕒','想象时钟指针移动'],
    [/太阳|sun|soleil/i,'☀️','想象阳光照在脸上'],
    [/雨|rain|pluie/i,'🌧️','想象雨点打在窗户上']
  ];
  const found = cues.find(([pattern]) => pattern.test(meaning));
  return found ? { icon: found[1], scene: found[2] } : { icon: c.type === '语法' ? '🧩' : '🎬', scene: '把这个词放进你今天真实经历的一幕：谁、在哪里、正在做什么？' };
}
function memoryVisual(c: Card) {
  const meaning = c.back.trim();
  const photos: Array<[RegExp,string]> = [
    [/墙|wall/i,'brick wall building'],[/猫|chat|cat/i,'domestic cat'],[/狗|dog|chien/i,'dog animal'],
    [/房|家|home|house/i,'house exterior'],[/学校|school|école/i,'school classroom'],
    [/水|water|eau/i,'glass of water'],[/汽车|轿车|car/i,'car street'],[/公交|巴士|bus/i,'city bus'],
    [/吃|食物|food|eat/i,'dinner meal'],[/喝|drink/i,'drinking water'],
    [/书|book|livre/i,'open book'],[/办公室|office/i,'office desk'],
    [/警察|police|polis/i,'police officer'],[/太阳|sun|soleil/i,'sun sky'],
    [/雨|rain|pluie/i,'rain window'],[/街道|street|rue/i,'city street'],
    [/狮子|lion/i,'lion animal'],[/士兵|soldier/i,'soldier uniform']
  ];
  return { query: photos.find(([pattern]) => pattern.test(meaning))?.[1] || '' };
}
function memoryLinks(c: Card) {
  const neighbors = relatedInModule(c).filter(x => cardKey(x) !== cardKey(c)).slice(0, 3);
  return neighbors;
}
function memoryCoach(c: Card) {
  const meaning = c.back.trim();
  const target = c.front.trim();
  const notes = c.note.split(/[；;。]/).map(part => part.trim()).filter(Boolean);
  const reliable = notes.filter(part => /(?:→|=|词根|后缀|前缀|复数|宾格|属格|位置格|来源格|变位|阴性|阳性|搭配|过去时|现在时|人称|否定|不规则|介词|命令式|重音)/.test(part));
  const shortTarget = target.length <= 35 && !/[。！？!?]/.test(target);
  const isSentence = /[。！？!?]$/.test(target) || target.split(/\s+/).length >= 4;
  const cue = reliable.slice(0, 2).join('；');
  if (cue) {
    return {
      hook: `规则线索：${cue}`,
      chunk: isSentence ? '先理解整句意思，再找出线索中的词形或句式；只记确实出现的变化。' : '把词形与含义对应起来；不要用没有依据的谐音或强行拆词。',
      challenge: `遮住外语，看中文「${meaning}」，回忆「${target}」；再指出刚才的规则线索。`
    };
  }
  if (isSentence) {
    return {
      hook: `场景：${meaning}`,
      chunk: '先想象这句话发生的真实情境，再把整句作为一个语块记忆；没有可靠词根时不硬拆。',
      challenge: `遮住外语，只看「${meaning}」，完整说出原句；卡住时先回忆句子的动作或地点。`
    };
  }
  if (shortTarget) {
    return {
      hook: `意义锚点：${meaning}`,
      chunk: '这张卡没有经过核实的词源或构词线索。先听发音，回想一个实际使用场景，再把声音和意思配对。',
      challenge: `遮住外语，看到「${meaning}」后说出「${target}」；5分钟后再不看提示复述。`
    };
  }
  return {
    hook: `学习目标：${meaning}`,
    chunk: '内容较长，先分成可理解的词块学习；不自动编造词源、谐音或无关关联。',
    challenge: `不看外语，尝试还原「${target}」；忘记的部分单独再练。`
  };
}
function pronunciationCoach(c: Card) {
  const wordCount = c.front.trim().split(/\s+/).length;
  const scriptHint: Record<string, string> = { '英语':'注意重读音节和弱读，不要逐字母念。', '土耳其语':'按拼写稳定发音，注意元音和谐；先慢读再连起来。', '阿拉伯语':'注意长短元音和喉音；先听完整词，再模仿口型与节奏。', '法语':'注意词尾常不发音以及连读，整组模仿比逐字读更有效。', '西班牙语':'元音保持清晰稳定，r/rr 与重音位置要特别听。', '俄语':'先找重读音节；非重读元音会弱化，跟着声音模仿。' };
  return { focus: scriptHint[c.lang] || '先听重音和节奏，再完整模仿。', rhythm: wordCount > 1 ? `这是 ${wordCount} 个词的语块：先整句听，再按自然停顿跟读，不要一个词一个词拼。` : '单词训练：正常速度听 1 次 → 慢速听 1 次 → 不看文字说 1 次。' };
}
function knowledgeGaps(source: Card[]) {
  const allowed = new Set(source.map(cardKey));
  const gaps: { card: Card; reason: string }[] = [];
  source.forEach(card => {
    if (learningLevel(card).level < 2) return;
    prerequisitesFor(card).forEach(prereq => {
      if (allowed.has(cardKey(prereq)) && learningLevel(prereq).level < 2) gaps.push({ card: prereq, reason: `${topicFor(card)}：这是“${card.front}”的前置知识` });
    });
  });
  return gaps.filter((gap, i, arr) => arr.findIndex(x => cardKey(x.card) === cardKey(gap.card)) === i);
}
function dailyQueue(source: Card[]) {
  const now = Date.now();
  const today = dayKey();
  const isTodayCard = (c: Card) => state.introduced?.[cardKey(c)] === today;
  const todayNew = source.filter(c => isTodayCard(c) && !state.reviews?.[cardKey(c)]);
  const todayDue = source.filter(c => isTodayCard(c) && state.reviews?.[cardKey(c)] && state.reviews![cardKey(c)].dueAt <= now).sort((a, b) => state.reviews![cardKey(a)].dueAt - state.reviews![cardKey(b)].dueAt);
  const due = source.filter(c => !isTodayCard(c) && state.reviews?.[cardKey(c)] && state.reviews![cardKey(c)].dueAt <= now).sort((a, b) => state.reviews![cardKey(a)].dueAt - state.reviews![cardKey(b)].dueAt);
  const gaps = knowledgeGaps(source).map(x => x.card);
  const weak: Card[] = []; // Already studied cards return only when their next review is due.
  const fresh = source.filter(c => !isTodayCard(c) && !state.reviews?.[cardKey(c)]).slice(0, 5);
  return [...todayNew, ...todayDue, ...due, ...gaps, ...weak, ...fresh].filter((c, i, arr) => arr.findIndex(x => cardKey(x) === cardKey(c)) === i);
}
function recallPrompt(c: Card) {
  const stage = skillStage(c);
  if (stage === 0) return { label: '① 会认 · 声音+画面', prompt: c.front, answer: c.back };
  if (stage === 1) return { label: '② 会想 · 遮住答案提取', prompt: `看到意思，3 秒内想出外语：\n${c.back}`, answer: c.front };
  if (stage === 2) return { label: '③ 会说 · 先说再核对', prompt: `不要默念。先完整大声说出来，再点答案：\n${c.back}`, answer: c.front };
  if (stage === 3) return { label: '④ 会用 · 自己造句', prompt: `用「${c.front}」自己说一个新句子。\n不要照抄原句，换人物、地点、时间或宾语。`, answer: `${c.back}\n参考：${exampleFor(c)[0]}` };
  if (isGrammar(c)) return { label: '长期记忆 · 迁移应用', prompt: `${c.front}\n先解释规则，再自己造一个新例子。`, answer: c.back };
  if (isVocabulary(c) && recallDirection === 'chinese') return { label: '长期记忆 · 中文 → 外语', prompt: c.back, answer: c.front };
  return { label: '长期记忆 · 随机回忆', prompt: c.front, answer: c.back };
}
function textbookCourseMenu() {
  return `<details class='bookCourse' open><summary><b>📗 教材 A1 · 助记卡</b><span>${textbookCards.length} 张 · 6 单元</span></summary><p>一词 / 一句 / 一规则一卡。课本原句＋中文拆解＋原图助记＋补充对话。</p><div class='bookUnitGrid'>${textbookUnits.map((u, i) => {
    const unitCards = cards.filter(c => c.textbook?.unit === i + 1);
    const done = unitCards.filter(c => learningLevel(c).level >= 3).length;
    return `<button type='button' data-book-unit='${i + 1}'><small>UNIT ${i + 1} · ${unitCards.length} 张</small><b>${u.title}</b><span>${u.zh.split(' · ')[0]}</span><small>掌握 ${done}/${unitCards.length} →</small></button>`;
  }).join('')}</div><small>来源：已上传的 2012 年版 İstanbul A1 · 正文 6 单元核心内容</small></details>`;
}
function bookSubset() {
  const q = (el('search') as HTMLInputElement).value.trim().toLocaleLowerCase();
  return cards.filter(c => c.textbook?.unit === bookUnit && (bookKind === '全部' || c.textbook.kind === bookKind) && (!q || JSON.stringify(c).toLocaleLowerCase().includes(q)));
}
function openBookUnit(unit: number) {
  bookUnit = unit;
  bookKind = '全部';
  lang = '土耳其语';
  queueMode = 'all';
  (el('search') as HTMLInputElement).value = '';
  document.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', (x as HTMLElement).dataset.lang === lang));
  document.querySelectorAll('.reviewBtn').forEach(x => x.classList.toggle('active', (x as HTMLElement).dataset.mode === 'all'));
  filtered = bookSubset();
  index = 0;
  renderLibrary();
  showPage('libraryPage');
}
function renderBookFilters() {
  const host = el('bookFilters');
  host.hidden = bookUnit === null;
  if (bookUnit === null) return;
  const unit = textbookUnits[bookUnit - 1];
  const count = cards.filter(c => c.textbook?.unit === bookUnit);
  host.innerHTML = `<h2>UNIT ${bookUnit} · ${unit.title}</h2><p>${unit.zh} · 原书 p.${unit.start}–${unit.end}</p><div class='bookTypeFilters'>${['全部','词汇','句子','语法'].map(k => `<button type='button' data-book-kind='${k}' aria-pressed='${k === bookKind}' class='${k === bookKind ? 'active' : ''}'>${k} ${k === '全部' ? count.length : count.filter(c => c.textbook?.kind === k).length}</button>`).join('')}</div><div class='bookSearchRow'><input id='bookSearch' placeholder='搜索本单元：单词、中文、句子…' aria-label='搜索本单元'><button id='bookLearn' type='button'>开始背诵 →</button></div><p id='bookResultCount'>当前 ${filtered.length} 张 · 点击卡片查看助记，或开始背诵</p>`;
  (el('bookSearch') as HTMLInputElement).value = (el('search') as HTMLInputElement).value;
  host.querySelectorAll<HTMLButtonElement>('[data-book-kind]').forEach(b => b.onclick = () => {
    bookKind = b.dataset.bookKind || '全部';
    filtered = bookSubset(); index = 0; renderLibrary();
  });
  el('bookSearch').addEventListener('input', e => {
    const input = e.target as HTMLInputElement;
    const position = input.selectionStart;
    (el('search') as HTMLInputElement).value = input.value;
    filtered = bookSubset(); index = 0; renderLibrary();
    const next = el('bookSearch') as HTMLInputElement;
    next.focus(); next.setSelectionRange(position, position);
  });
  el('bookLearn').onclick = () => {
    if (!filtered.length) { el('bookResultCount').textContent = '没有匹配内容，请清空搜索或切换类型。'; return; }
    libraryDetailMode = false; index = 0; render(); showPage('studyPage');
  };
}
function renderTextbookMemory(c: Card) {
  const m = c.textbook!;
  ++memoryPhotoRequest;
  document.querySelector('.memoryBlock .learningTitle')!.textContent = '🧠 助记 · 原句、原图与对话';
  el('badge').textContent = `教材 A1 · 单元 ${m.unit} · ${m.kind} · ${index + 1}/${filtered.length}`;
  el('recallMode').textContent = m.kind === '词汇' ? '先回忆中文含义，再展开助记；点击单词可以听音、查义。' : '先尝试理解，再展开中文和拆解。';
  el('memoryAnalysis').textContent = m.analysis;
  const examples = el('memoryHook').parentElement!;
  examples.style.display = '';
  examples.querySelector('b')!.textContent = `📘 课本原句 · 第 ${m.page} 页`;
  el('memoryHook').replaceChildren(makeSpeakable(m.quote, c.lang));
  el('memoryChunk').textContent = m.quoteZh;
  const visual = el('memoryVisual');
  visual.classList.add('textbookVisual');
  visual.replaceChildren();
  const picture = document.createElement('img');
  picture.src = `/resources/a1-memory-${m.imagePage}.jpg`;
  picture.alt = `单元 ${m.unit} 课本情境图，第 ${m.imagePage} 页`;
  picture.loading = 'lazy';
  picture.className = 'textbookMemoryImage';
  const caption = document.createElement('small');
  caption.textContent = `课本原图 · 第 ${m.imagePage} 页${m.imagePage === m.page ? '' : ' · 同单元情境联想'}`;
  picture.onerror = () => { picture.hidden = true; caption.textContent = '图片暂未加载，请使用下方原句继续学习。'; };
  const source = document.createElement('a');
  source.href = `/resources/istanbul-a1-textbook.pdf#page=${m.page}`;
  source.target = '_blank'; source.rel = 'noopener'; source.textContent = `核对原文 p.${m.page} ↗`;
  visual.append(picture, caption, source);
  const section = el('memorySituation').parentElement!;
  section.style.display = '';
  section.querySelector('b')!.textContent = '💬 补充练习对话 · A 引用课本，B 为教学补充';
  el('memorySituation').replaceChildren();
  el('memorySituationTranslation').textContent = '';
  const scene = document.createElement('div'); scene.className = 'dialogueScene';
  m.dialogue.forEach(([speaker, sentence, translation]) => {
    const turn = document.createElement('div'); turn.className = 'dialogueTurn';
    const original = document.createElement('div'); original.className = 'dialogueOriginal';
    original.append(document.createTextNode(`${speaker}: `), makeSpeakable(sentence, c.lang));
    const chinese = document.createElement('div'); chinese.className = 'dialogueChinese'; chinese.textContent = translation;
    const listen = document.createElement('button'); listen.type = 'button'; listen.textContent = '🔊 听这句'; listen.className = 'bookLineSpeak';
    listen.onclick = () => speakWord(sentence, c.lang);
    turn.append(original, chinese, listen); scene.append(turn);
  });
  const practice = document.createElement('p'); practice.className = 'bookPractice'; practice.textContent = `🗣️ 开口练习：${m.practice}`;
  el('memorySituation').append(scene, practice);
  const nav = el('bookNavigation'); nav.hidden = false;
  nav.innerHTML = `<button id='bookPrevious' type='button'>← 上一张</button><span>${index + 1} / ${filtered.length}</span><button id='bookNext' type='button'>下一张 →</button>`;
  el('bookPrevious').onclick = () => pageCard(-1); el('bookNext').onclick = () => pageCard(1);
  const answer = el('answer');
  document.querySelector('.card')?.classList.remove('flipped','flipTurning','flipLanding');
  answer.classList.toggle('show', libraryDetailMode);
  answer.scrollTop = 0;
  el('grade').classList.remove('show');
  const reveal = el('reveal'); reveal.style.display = libraryDetailMode ? 'none' : ''; reveal.textContent = '查看中文解析与助记 ↻';
  const remembered = document.querySelector<HTMLButtonElement>('#grade button[data-score="2"]');
  if (remembered) remembered.textContent = '记住了 · 下一张 →';
}

const app = document.querySelector<HTMLDivElement>('#app')!;
app.innerHTML = `<main class='wrap'><h1>🧠 语言知识卡片</h1><div class='topTabs'><button class='topTab active' data-page='homePage'>首页</button><button class='topTab' data-page='studyPage'>学习</button><button class='topTab' data-page='knowledgePage'>知识库</button><button class='topTab' data-page='dataPage'>数据</button></div><div id='homePage' class='appPage active'><div class='stats'><div class='stat'><div class='num' id='total'></div><small>总卡片</small></div><div class='stat'><div class='num' id='reviewed'></div><small>今日复习</small></div><div class='stat'><div class='num' id='mastered'></div><small>已掌握</small></div><div class='stat'><div class='num' id='streak'></div><small>连续学习</small></div></div><section class='analytics'><div class='analyticsTitle'>📊 学习进度</div><div id='completion' class='completion'></div><div id='languageMastery' class='languageMastery'></div><div id='weakSummary' class='weakSummary'></div><div id='gapSummary' class='gapSummary'></div></section><div class='homeLanguage'><label for='homeLanguage'>选择学习语言</label><select id='homeLanguage'><option value='英语'>🇬🇧 英语</option><option value='法语'>🇫🇷 法语</option><option value='土耳其语'>🇹🇷 土耳其语</option><option value='阿拉伯语'>🇸🇦 阿拉伯语</option><option value='西班牙语'>🇪🇸 西班牙语</option><option value='俄语'>🇷🇺 俄语</option></select></div><div class='homeActions'><button id='startToday'>🎯 开始今日学习</button><button id='openKnowledge'>🌳 浏览知识库</button></div></div><div id='knowledgePage' class='appPage'><section class='knowledgePanel'><div class='analyticsTitle'>🌳 我的语言知识体系</div><div class='chainIntro'>知识关系已经合并到课程模块中：先看语言，再看课程模块，进入模块后查看卡片、前置知识和同模块关联。</div><div class='levelLegend'><span>○ 未学习</span><span>① 会认</span><span>② 会想</span><span>③ 会说</span><span>④ 会用 · 长期记忆</span></div><div id='textbookSection' class='textbookSection'><details><summary>📖 原文页码核对（可选）</summary><p>主要学习入口已移至下方「土耳其语 → 教材 A1 · 助记卡」。这里仅用于核对原文。上传文件为 2012 年《İstanbul A1》，卡片按实际版本整理。</p><div id='textbookUnitList' class='textbookUnitList'></div><button type='button' id='textbookStart'>📖 从第 1 单元开始</button><div id='textbookReader' class='textbookReader' hidden><div class='textbookReaderBar'><button type='button' id='textbookPrev'>← 上一页</button><span id='textbookPageNo'>第 7 / 108 页</span><button type='button' id='textbookNext'>下一页 →</button></div><div class='textbookJump'><label>跳转页码 <input id='textbookPageInput' type='number' min='1' max='108' value='7'></label><button id='textbookJumpBtn' type='button'>跳转</button><a href='/resources/istanbul-a1-textbook.pdf' target='_blank' rel='noopener'>↗ 全屏打开原书</a></div><iframe id='textbookFrame' title='Yeni İstanbul A1 土耳其语原版教材' loading='lazy'></iframe><p class='textbookHint'>如手机浏览器无法在框内翻页，请点击「全屏打开原书」，可缩放查看原始插图和全部对话。</p></div></details></div><div id='knowledgeTree'></div></section></div><div id='dataPage' class='appPage'><section class='localData'><div class='analyticsTitle'>📱 本机数据</div><div class='localNote'>学习记录只保存在当前手机/浏览器，不使用云端账号。建议定期导出备份，清除浏览器数据或换手机前务必备份。</div><div class='localActions'><button id='exportBtn' type='button'>⬇️ 导出备份</button><button id='importBtn' type='button'>⬆️ 导入恢复</button><input id='backupFile' type='file' accept='application/json,.json' hidden></div><div id='backupStatus' class='backupStatus'>自动保存：已开启</div></section></div><div id='studyPage' class='appPage'><button id='studyHomeBack' type='button' aria-label='返回首页'>⌂ 首页</button><input class='search' id='search' placeholder='搜索单词、句子、中文或语法…'><div class='filters'><button class='chip active' data-lang='全部'>全部</button><button class='chip' data-lang='英语'>🇬🇧 英语</button><button class='chip' data-lang='土耳其语'>🇹🇷 土耳其语</button><button class='chip' data-lang='阿拉伯语'>🇸🇦 阿拉伯语</button><button class='chip' data-lang='法语'>🇫🇷 法语</button><button class='chip' data-lang='西班牙语'>🇪🇸 西班牙语</button><button class='chip' data-lang='俄语'>🇷🇺 俄语</button></div><div class='reviewTools'><button class='reviewBtn active' id='todayBtn' data-mode='today'>🎯 今日学习 <span id='todayCount'></span></button><button class='reviewBtn' id='dueBtn' data-mode='due'>🧠 到期复习 <span id='dueCount'></span></button><button class='reviewBtn' id='historyBtn' data-mode='reviewed'>↩️ 复习过的</button><button class='reviewBtn' id='allBtn' data-mode='all'>📖 全部卡片</button></div><section id='study'><div class='card'><div class='studyLanguageBar'><small id='badge'></small></div><div class='front' id='front'></div><div class='recallMode' id='recallMode'></div><div class='audioTools'><button class='speak primaryListen' id='speak' type='button'>🔊 点击听发音</button><button class='speak' id='slowSpeak' type='button'>🐢 慢速拆音</button><button class='speak' id='listen3' type='button'>🎧 听3遍</button><button class='speak' id='shadow' type='button'>🗣️ 影子跟读</button></div><div class='speechStatus' id='speechStatus' aria-live='polite'></div><div id='bookNavigation' class='bookNavigation' hidden></div><div class='answer' id='answer'><div class='back' id='back'></div><section class='learningBlock memoryBlock'><div class='learningTitle'>🧠 记忆教练</div><div id='memoryVisual' class='memoryVisual'></div><div class='memorySection'><b>🔍 解析</b><div id='memoryAnalysis'></div></div><div class='memorySection'><b>💬 例句</b><div id='memoryHook'></div><div id='memoryChunk'></div></div><div class='memorySection'><b>🏙️ 场景句子</b><div id='memorySituation'></div><div id='memorySituationTranslation'></div></div></section></div><button class='reveal' id='reveal'>轻点卡片翻面 ↻</button><div class='grade' id='grade'><button data-score='0'>🔁 不熟悉 · 加强复习</button><button data-score='2'>下一张 →</button></div></div></section></div><div id='libraryPage' class='appPage'><div class='libraryHead'><button id='libraryBack' type='button'>← 知识库</button><b>分类卡片</b></div><section id='bookFilters' hidden></section><section id='library' class='list'></section></div></main><nav class='nav'><button id='studyBtn'>🎯 今日复习</button><button id='libBtn'>📚 卡片库</button><button id='savedWordsNav'>⭐ 生词本</button></nav>`;
const el = (id: string) => document.getElementById(id)!;
renderTextbookUnits();
el('textbookStart').addEventListener('click',()=>openTextbook(7));
el('textbookPrev').addEventListener('click',()=>openTextbook(textbookPage-1));
el('textbookNext').addEventListener('click',()=>openTextbook(textbookPage+1));
el('textbookJumpBtn').addEventListener('click',()=>openTextbook(Number((el('textbookPageInput') as HTMLInputElement).value)||7));

const savedWordKey='language-saved-words-v2';
const savedWords:Card[]=(()=>{try{return JSON.parse(localStorage.getItem(savedWordKey)||'[]')}catch{return []}})();
savedWords.forEach(c=>{if(!cards.some(x=>x.lang===c.lang&&x.front===c.front))cards.push(c)});
const dictionaryPopup=document.createElement('div');
dictionaryPopup.className='dictionaryPopup';document.body.append(dictionaryPopup);
const dictionaryCache:Record<string,any>={};
async function openWordDictionary(word:string,language:string,sentence:string){
 const key=language+'::'+word.toLowerCase();
 dictionaryPopup.classList.add('open');
 dictionaryPopup.replaceChildren();
 const heading=document.createElement('div');heading.className='dictionaryHeading';heading.textContent=word;
 const close=document.createElement('button');close.textContent='✕';close.onclick=()=>dictionaryPopup.classList.remove('open');heading.append(close);
 const meaning=document.createElement('div');meaning.className='dictionaryMeaning';meaning.textContent='正在查询释义…';
 const grammar=document.createElement('div');grammar.className='dictionaryGrammar';
 const actions=document.createElement('div');actions.className='dictionaryActions';
 const speak=document.createElement('button');speak.textContent='🔊 发音';speak.onclick=()=>speakWord(word,language);
 const save=document.createElement('button');save.textContent='⭐ 加入背诵';save.disabled=true;
 actions.append(speak,save);dictionaryPopup.append(heading,meaning,grammar,actions);
 const found=cards.find(c=>c.textbook?.kind==='词汇'&&c.lang===language&&c.front.toLocaleLowerCase('tr')===word.toLocaleLowerCase('tr')) || cards.find(c=>c.lang===language&&c.front.toLowerCase()===word.toLowerCase()&&c.back.length<150);
 let entry:any=found?{lemma:word,meaning:found.back,grammar:found.note}:dictionaryCache[key];
 if(!entry){try{const result=await api.post('/api/dictionary',{lang:language,word,sentence});entry=result.data?.entry;if(entry?.meaning)dictionaryCache[key]=entry;}catch{}}
 if(!entry?.meaning){meaning.textContent='暂时无法获取释义，请检查网络后重试';return}
 if(!dictionaryPopup.classList.contains('open')||!dictionaryPopup.contains(heading))return;
 meaning.textContent=entry.meaning;grammar.textContent=[entry.lemma&&entry.lemma!==word?'原形：'+entry.lemma:'',entry.grammar].filter(Boolean).join(' · ');
 const exists=()=>savedWords.some(c=>c.lang===language&&c.front.toLowerCase()===word.toLowerCase());
 const refresh=()=>save.textContent=exists()?'✓ 已收藏（点击移除）':'⭐ 加入背诵';
 save.disabled=false;refresh();
 save.onclick=()=>{
  if(exists()){const i=savedWords.findIndex(c=>c.lang===language&&c.front.toLowerCase()===word.toLowerCase());if(i>=0)savedWords.splice(i,1)}
  else savedWords.push({lang:language,flag:({'英语':'🇬🇧','土耳其语':'🇹🇷','法语':'🇫🇷','西班牙语':'🇪🇸','俄语':'🇷🇺','阿拉伯语':'🇸🇦'} as Record<string,string>)[language]||'📖',type:'我的生词',front:word,back:entry.meaning,note:[entry.lemma&&entry.lemma!==word?'原形：'+entry.lemma:'',entry.grammar,'例句：'+sentence].filter(Boolean).join('；')});
  localStorage.setItem(savedWordKey,JSON.stringify(savedWords));
  savedWords.forEach(c=>{if(!cards.some(x=>x.lang===c.lang&&x.front===c.front))cards.push(c)});
  refresh();
 };
}
function openSavedWords(){bookUnit=null;bookKind='全部';lang='全部';queueMode='all';filtered=savedWords.map(c=>cards.find(x=>x.lang===c.lang&&x.front===c.front)||c);index=0;renderLibrary();showPage('libraryPage');}

// Place the back control physically inside the card, so it never reserves a separate row.
document.querySelector('#study .card')?.prepend(el('studyHomeBack'));
el('studyHomeBack').addEventListener('click', () => showPage('homePage'));
function showPage(page: string) {
  document.querySelectorAll('.appPage').forEach(x => x.classList.toggle('active', x.id === page));
  document.querySelectorAll('.topTab').forEach(x => x.classList.toggle('active', (x as HTMLElement).dataset.page === page));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function updateStats() {
  el('total').textContent = String(cards.length);
  const todayReviewed = state.daily?.[dayKey()] || 0;
  el('reviewed').textContent = String(todayReviewed);
  el('mastered').textContent = String(cards.filter(c => masteryScore(c) >= 60).length);
  el('streak').textContent = `${streakDays()}天`; 
  const due = cards.filter(c => state.reviews?.[cardKey(c)] && state.reviews[cardKey(c)].dueAt <= Date.now()).length;
  el('dueCount').textContent = due ? `(${due})` : '(0)';
  const languageCards = cards.filter(c => lang === '全部' || c.lang === lang);
  const todayRemaining = dailyQueue(languageCards).length;
  el('todayCount').textContent = `(${todayRemaining})`;
  const completed = todayReviewed;
  const target = completed + todayRemaining;
  const percent = target ? Math.min(100, Math.round(completed * 100 / target)) : (completed ? 100 : 0);
  el('completion').innerHTML = `<div class='progressHead'><span>今日完成 ${completed}/${target}</span><b>${percent}%</b></div><div class='progressTrack'><div class='progressFill' style='width:${percent}%'></div></div>`;
  const languages = ['英语', '土耳其语', '阿拉伯语', '法语', '西班牙语', '俄语'];
  el('languageMastery').innerHTML = languages.map(language => `<span>${language} <b>${masteryFor(language)}%</b></span>`).join('');
  const weak = weakCards();
  el('weakSummary').innerHTML = weak.length ? `⚠️ 薄弱知识 ${weak.length} 张 · 优先：${weak.slice(0, 3).map(c => c.front).join(' · ')}` : '✨ 暂无明显薄弱知识';
  const gaps = knowledgeGaps(languageCards);
  el('gapSummary').innerHTML = gaps.length ? `<b>🧩 知识缺口 ${gaps.length} 个</b>${gaps.slice(0, 3).map(g => `<button class='gapItem' data-gap-lang='${g.card.lang}' data-gap-front='${g.card.front}'>${g.card.front}<small>${g.reason}</small></button>`).join('')}` : `<span>🧩 当前没有检测到前置知识缺口</span>`;
  document.querySelectorAll<HTMLButtonElement>('.gapItem').forEach(button => button.addEventListener('click', () => {
    lang = button.dataset.gapLang || '全部';
    document.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', (x as HTMLElement).dataset.lang === lang));
    queueMode = 'all';
    document.querySelectorAll('.reviewBtn').forEach(x => x.classList.toggle('active', (x as HTMLElement).dataset.mode === 'all'));
    (el('search') as HTMLInputElement).value = button.dataset.gapFront || '';
    apply();
    el('study').style.display = 'block';
    el('library').style.display = 'none';
  }));
  renderKnowledgeTree();
}
let libraryDetailMode = false;
function render() {
  const c = filtered[index % Math.max(filtered.length, 1)];
  if (!c) {
    const languageSelect = document.getElementById('homeLanguage') as HTMLSelectElement;
    if (languageSelect && lang !== '全部') languageSelect.value = lang;
    el('badge').textContent = '';
    el('front').textContent = '没有匹配的卡片';
    el('answer').classList.remove('show');
    el('grade').classList.remove('show');
    el('reveal').style.display = 'none';
    el('bookNavigation').hidden = true;
    return;
  }
  const recall = recallPrompt(c);
  el('badge').textContent = `${c.type} · ${index + 1}/${filtered.length}`;
  const languageSelect = document.getElementById('homeLanguage') as HTMLSelectElement;
  if (languageSelect && languageSelect.value !== c.lang) languageSelect.value = c.lang;
  el('recallMode').innerHTML = isVocabulary(c) ? `<button id='directionBtn' class='directionBtn'>⇄ ${recall.label}</button>` : `<span>${recall.label}</span>`;
  el('front').replaceChildren(makeSpeakable(c.front, c.lang));
  el('back').textContent = c.back;
  const directionBtn = document.getElementById('directionBtn');
  if (directionBtn) directionBtn.addEventListener('click', () => { recallDirection = recallDirection === 'target' ? 'chinese' : 'target'; render(); });
  if (c.textbook) {
    renderTextbookMemory(c);
    return;
  }
  el('bookNavigation').hidden = true;
  document.querySelector('.memoryBlock .learningTitle')!.textContent = '🧠 记忆教练';
  el('memoryHook').parentElement!.querySelector('b')!.textContent = '💬 例句';
  el('memorySituation').parentElement!.querySelector('b')!.textContent = '🏙️ 场景句子';
  el('memoryVisual').classList.remove('textbookVisual');
  const memory = memoryCoach(c);
  const realLife = everydayExample(c);
  const scenarios = situationalExample(c);
  // Only display genuine examples, never vocabulary glosses or homework prompts.
  const curatedExample = turkishLifeExamples[cardKey(c)];
  const usableExample = curatedExample || (realLife.target && realLife.target.toLocaleLowerCase().includes(c.front.toLocaleLowerCase())
    ? [realLife.target, realLife.chinese]
    : scenarios.length ? scenarios[0] : null);
  const exampleSection = el('memoryHook').parentElement!;
  exampleSection.style.display = usableExample ? '' : 'none';
  el('memoryHook').replaceChildren(makeSpeakable(usableExample ? usableExample[0] : '', c.lang));
  el('memoryChunk').textContent = usableExample ? usableExample[1] : '';
  const note = c.note.trim();
  el('memoryAnalysis').textContent = note || (c.type === '句子' ? '整句理解：' + c.back : '含义：' + c.back);
  const dialogues = (dialogueCache[cardKey(c)] || sceneDialogues(c)).filter(scene =>
    !usableExample || !scene.lines.some(([,line]) => line.trim().toLocaleLowerCase() === usableExample[0].trim().toLocaleLowerCase())
  );
  const situationSection = el('memorySituation').parentElement!;
  situationSection.style.display = '';
  if (!dialogues.length) el('memorySituation').textContent = dialoguePending.has(cardKey(c)) ? '正在生成场景对话…' : '场景对话尚未生成，点击重试';
  if (dialogues.length) el('memorySituation').replaceChildren();
  el('memorySituationTranslation').textContent = '';
  dialogues.forEach(dialogue => {
    const scene = document.createElement('div');
    scene.className = 'dialogueScene';
    const heading = document.createElement('div');
    heading.className = 'dialogueHeading';
    heading.textContent = '📍 ' + dialogue.scene;
    scene.append(heading);
    dialogue.lines.forEach(([speaker, sentence, translation]) => {
      const turn = document.createElement('div');
      turn.className = 'dialogueTurn';
      const original = document.createElement('div');
      original.className = 'dialogueOriginal';
      original.append(document.createTextNode(speaker + ': '), makeSpeakable(sentence, c.lang));
      const chinese = document.createElement('div');
      chinese.className = 'dialogueChinese';
      chinese.textContent = translation;
      turn.append(original,chinese);
      scene.append(turn);
    });
    el('memorySituation').append(scene);
  });
  if (!dialogueCache[cardKey(c)] && !dialoguePending.has(cardKey(c)) && !dialogueFailures.has(cardKey(c))) {
    void loadDialogue(c, usableExample?.[0] || '');
  }
  const visual = memoryVisual(c);
  const photo = el('memoryVisual');
  photo.textContent = '';
  const label = document.createElement('small');
  label.textContent = '📷 真实场景图片 · ' + c.back;
  photo.append(label);
  if (visual.query) {
    const img = document.createElement('img');
    img.alt = c.back + ' · 真实场景照片';
    img.loading = 'lazy';
    img.referrerPolicy = 'no-referrer';
    img.className = 'memoryPhoto';
    const key = cardKey(c);
    const request = ++memoryPhotoRequest;
    fetch('https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent('filetype:bitmap ' + visual.query) + '&gsrnamespace=6&gsrlimit=6&prop=imageinfo&iiprop=url|mime&iiurlwidth=640&format=json&origin=*')
      .then(r => { if (!r.ok) throw new Error('image'); return r.json(); })
      .then(data => {
        if (request !== memoryPhotoRequest || cardKey(filtered[index % Math.max(filtered.length,1)]) !== key) return;
        const items = Object.values(data?.query?.pages || {}) as Array<{imageinfo?: Array<{thumburl?:string,url?:string,mime?:string}>}>;
        const found = items.find(p => p.imageinfo?.[0]?.mime?.startsWith('image/') && (p.imageinfo[0].thumburl || p.imageinfo[0].url));
        if (!found) { label.textContent = '暂无匹配的真实图片'; return; }
        img.src = found.imageinfo![0].thumburl || found.imageinfo![0].url || '';
        img.onerror = () => { img.remove(); label.textContent = '图片加载失败，继续用例句记忆'; };
        photo.prepend(img);
      }).catch(() => { if (request === memoryPhotoRequest) label.textContent = '图片暂不可用，继续用例句记忆'; });
  } else { label.textContent = '此知识点不适合直接配图，使用生活例句记忆'; }

  const review = state.reviews?.[cardKey(c)];
  const level = learningLevel(c);

  document.querySelector('.card')?.classList.remove('flipped','flipTurning','flipLanding');
  el('answer').classList.add('show');
  el('grade').classList.toggle('show', !libraryDetailMode);
  const scrollArea = el('answer'); scrollArea.scrollTop = 0;
  (el('reveal') as HTMLElement).style.display = 'none';
}
function renderLibrary() {
  renderBookFilters();
  el('library').innerHTML = filtered.map(c => {
    const prerequisites = prerequisitesFor(c);
    const related = relatedInModule(c);
    const relations = prerequisites.length || related.length ? `<div class='embeddedRelations'>${prerequisites.length ? `<div><strong>前置知识</strong>${prerequisites.map(x => `<span>${x.front} · ${learningLevel(x).label}</span>`).join('')}</div>` : ''}${related.length ? `<div><strong>同模块关联</strong>${related.map(x => `<span>${x.front}</span>`).join('')}</div>` : ''}</div>` : '';
    return `<article class='item libraryOpenCard' role='button' tabindex='0' data-card-key='${encodeURIComponent(cardKey(c))}'><b>${c.flag} ${c.front}</b><small>${c.back} · ${c.type}${c.textbook ? ' · 原书 p.' + c.textbook.page : ''}</small><small>${c.note}</small>${relations}<small>点击进入卡片详情 →</small></article>`;
  }).join('') || `<div class='item'>没有匹配内容</div>`;
  document.querySelectorAll<HTMLElement>('.libraryOpenCard').forEach(node => {
    const open = () => { const position = filtered.findIndex(c => cardKey(c) === decodeURIComponent(node.dataset.cardKey || '')); if (position < 0) return; index = position; libraryDetailMode = true; render(); showPage('studyPage'); el('study').scrollIntoView({block:'start'}); };
    node.addEventListener('click', open);
    node.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
}
function apply() {
  const q = (el('search') as HTMLInputElement).value.trim().toLowerCase();
  if (lang === '全部') lang = (document.getElementById('homeLanguage') as HTMLSelectElement)?.value || '法语';
  const base = cards.filter(c => (bookUnit === null || c.textbook?.unit === bookUnit) && (bookKind === '全部' || c.textbook?.kind === bookKind) && (lang === '全部' || c.lang === lang) && (!q || JSON.stringify(c).toLowerCase().includes(q)));
  filtered = queueMode === 'today' ? dailyQueue(base) : base.filter(c => {
    const r = state.reviews?.[cardKey(c)];
    return queueMode === 'all' || (queueMode === 'reviewed' && Boolean(r)) || (queueMode === 'due' && Boolean(r) && r!.dueAt <= Date.now());
  });
  index = 0;
  render();
  renderLibrary();
}
function setQueueMode(mode: 'all' | 'reviewed' | 'due' | 'today') {
  queueMode = mode;
  document.querySelectorAll('.reviewBtn').forEach(x => x.classList.toggle('active', (x as HTMLElement).dataset.mode === mode));
  apply();
}
function makeSpeakable(sentence: string, language: string): HTMLElement {
  const wrapper = document.createElement('span');
  wrapper.className = 'speakableSentence';
  const parts = sentence.match(/\s+|[^\s]+/gu) || [];
  for (const part of parts) {
    if (/^\s+$/u.test(part)) { wrapper.append(document.createTextNode(part)); continue; }
    const word = part.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
    if (!word) { wrapper.append(document.createTextNode(part)); continue; }
    const token = document.createElement('button');
    token.type = 'button'; token.className = 'wordSpeak'; token.textContent = part;
    token.title = '点击查词 ' + word;
    token.setAttribute('aria-label', '查看单词 ' + word);
    token.addEventListener('click', event => { event.stopPropagation(); void openWordDictionary(word, language, sentence); });
    wrapper.append(token);
  }
  return wrapper;
}
function speakWord(word: string, language: string) {
  stopCurrentSpeech();
  void playEdgeOrNative(word, language, 0.9, 'natural', 0, speechSession);
}
function speechLocale(langName: string) {
  const locales: Record<string, string> = { '英语':'en-GB', '土耳其语':'tr-TR', '阿拉伯语':'ar-AE', '法语':'fr-FR', '西班牙语':'es-ES', '俄语':'ru-RU' };
  return locales[langName] || 'en-US';
}
type SpeechMode = 'natural' | 'slow' | 'repeat' | 'shadow';
function nativeVoiceCandidates(langName: string) {
  const locales: Record<string, string[]> = {
    '英语': ['en-GB', 'en-US'],
    '土耳其语': ['tr-TR'],
    '阿拉伯语': ['ar-AE', 'ar-SA'],
    '法语': ['fr-FR'],
    '西班牙语': ['es-ES', 'es-MX'],
    '俄语': ['ru-RU']
  };
  return locales[langName] || [speechLocale(langName)];
}
function rankedVoices(langName: string) {
  const voices = window.speechSynthesis.getVoices();
  const wanted = nativeVoiceCandidates(langName);
  const base = wanted[0].split('-')[0].toLowerCase();
  const quality = /(premium|enhanced|natural|siri|neural|eloquence)/i;
  return voices.filter(v => v.lang.toLowerCase().startsWith(`${base}-`)).sort((a, b) => {
    const score = (v: SpeechSynthesisVoice) => { const match = wanted.findIndex(x => x.toLowerCase() === v.lang.toLowerCase()); return (quality.test(v.name) ? 100 : 0) + (match >= 0 ? 30 - match * 10 : 0) + (v.localService ? 5 : 0); };
    return score(b) - score(a);
  });
}
function voiceFor(langName: string, mode: SpeechMode, pass = 0) {
  const voices = rankedVoices(langName);
  if (!voices.length) return undefined;
  if (mode === 'repeat' && voices.length > 1 && pass === 2) return voices[1];
  return voices[0];
}
function speakText(text: string, langName: string, rate: number, mode: SpeechMode, pass: number, onEnd?: () => void) {
  const utterance = new SpeechSynthesisUtterance(text);
  const locale = speechLocale(langName);
  const voice = voiceFor(langName, mode, pass);
  utterance.lang = voice?.lang || locale;
  utterance.rate = rate;
  utterance.pitch = mode === 'shadow' ? 1.03 : 1;
  if (voice) utterance.voice = voice;
  const modeLabel = mode === 'natural' ? '本地自然语速' : mode === 'slow' ? '慢速清晰模仿' : mode === 'shadow' ? '影子跟读节奏' : `三遍听力 · 第 ${pass + 1} 遍`;
  utterance.onstart = () => { el('speechStatus').textContent = voice ? `${modeLabel} · ${voice.name} · ${voice.lang}` : `${modeLabel} · 系统 ${locale} 语音`; };
  utterance.onend = () => onEnd?.();
  utterance.onerror = () => { el('speechStatus').textContent = `当前设备没有可用的 ${locale} 本国语音。iPhone 可到「设置 → 辅助功能 → 朗读内容 → 声音」下载对应语言的增强/高级语音后再打开 App。`; };
  window.speechSynthesis.speak(utterance);
}
// Edge TTS is an optional, unofficial cloud voice. Native voices remain available offline.
const EDGE_TTS_URL = 'https://language-edge-tts.15157605103.workers.dev/tts';
const edgeVoices: Record<string, string> = {
  '英语': 'en-US-JennyNeural', '法语': 'fr-FR-DeniseNeural',
  '土耳其语': 'tr-TR-EmelNeural', '阿拉伯语': 'ar-SA-ZariyahNeural',
  '俄语': 'ru-RU-SvetlanaNeural', '西班牙语': 'es-ES-ElviraNeural'
};
const audioCache = new Map<string, string>();
let activeAudio: HTMLAudioElement | undefined;
let activeAbort: AbortController | undefined;
let speechSession = 0;
function stopCurrentSpeech() {
  speechSession++;
  activeAbort?.abort();
  activeAbort = undefined;
  if (activeAudio) { activeAudio.pause(); activeAudio.src = ''; activeAudio = undefined; }
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
}
async function playEdgeOrNative(text: string, lang: string, rate: number, mode: SpeechMode, pass: number, session: number): Promise<void> {
  const voice = edgeVoices[lang];
  const native = () => new Promise<void>(resolve => {
    if (session !== speechSession) { resolve(); return; }
    if (!('speechSynthesis' in window)) { el('speechStatus').textContent = '在线语音不可用，且浏览器不支持本地语音。'; resolve(); return; }
    el('speechStatus').textContent = '在线语音暂不可用，已自动切换本地发音';
    speakText(text, lang, rate, mode, pass, resolve);
  });
  if (!voice || !navigator.onLine) { await native(); return; }
  const key = voice + ':' + text;
  let url = audioCache.get(key);
  try {
    if (!url) {
      const controller = new AbortController();
      activeAbort = controller;
      const timeout = window.setTimeout(() => controller.abort(), 8000);
      try {
        el('speechStatus').textContent = '正在加载 Edge Neural 在线语音…';
        const response = await fetch(EDGE_TTS_URL, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, voice }), signal: controller.signal
        });
        if (!response.ok || !(response.headers.get('content-type') || '').includes('audio/')) throw new Error('TTS unavailable');
        const blob = await response.blob();
        if (!blob.size || session !== speechSession) return;
        url = URL.createObjectURL(blob);
        audioCache.set(key, url);
        if (audioCache.size > 35) {
          const oldest = audioCache.keys().next().value;
          if (oldest) { URL.revokeObjectURL(audioCache.get(oldest)!); audioCache.delete(oldest); }
        }
      } finally { window.clearTimeout(timeout); if (activeAbort === controller) activeAbort = undefined; }
    }
    if (session !== speechSession || !url) return;
    await new Promise<void>((resolve, reject) => {
      const audio = new Audio(url);
      activeAudio = audio;
      audio.playbackRate = rate;
      audio.onended = () => { if (activeAudio === audio) activeAudio = undefined; resolve(); };
      audio.onerror = () => { if (activeAudio === audio) activeAudio = undefined; reject(new Error('Audio playback failed')); };
      el('speechStatus').textContent = 'Edge Neural · ' + voice + (rate < 0.8 ? ' · 慢速' : ' · 自然发音');
      audio.play().catch(reject);
    });
  } catch {
    if (session !== speechSession) return;
    await native();
  }
}
function speakCurrent(mode: SpeechMode = 'natural') {
  const c = filtered[index % Math.max(filtered.length, 1)];
  if (!c) return;
  stopCurrentSpeech();
  const session = speechSession;
  const rates = mode === 'repeat' ? [0.72, 0.9, 1.02] : [mode === 'slow' ? 0.65 : mode === 'shadow' ? 0.82 : 0.96];
  const run = async () => {
    for (let pass = 0; pass < rates.length && session === speechSession; pass++) {
      await playEdgeOrNative(c.front, c.lang, rates[pass], mode, pass, session);
      if (pass < rates.length - 1 && session === speechSession) await new Promise(resolve => window.setTimeout(resolve, 450));
    }
    if (session !== speechSession) return;
    el('speechStatus').textContent = mode === 'shadow' ? '现在跟读，模仿重音、停顿和语调。' : mode === 'repeat' ? '三遍完成：慢速 → 自然语速 → 真实语速。' : '播放完成。';
  };
  void run();
}
el('exportBtn').addEventListener('click', () => { exportBackup(); el('backupStatus').textContent = `最近导出：${new Date().toLocaleString()}`; });
el('importBtn').addEventListener('click', () => (el('backupFile') as HTMLInputElement).click());
el('backupFile').addEventListener('change', event => { const file = (event.target as HTMLInputElement).files?.[0]; if (file) restoreBackup(file); });
el('speak').addEventListener('click', () => speakCurrent('natural'));
el('slowSpeak').addEventListener('click', () => speakCurrent('slow'));
el('listen3').addEventListener('click', () => speakCurrent('repeat'));
el('shadow').addEventListener('click', () => speakCurrent('shadow'));
if ('speechSynthesis' in window) { window.speechSynthesis.getVoices(); window.speechSynthesis.addEventListener('voiceschanged', () => window.speechSynthesis.getVoices()); }
let cardFlipping = false;
el('reveal').addEventListener('click', () => {
  if (cardFlipping || el('answer').classList.contains('show')) return;
  cardFlipping = true;
  const card = document.querySelector<HTMLElement>('#study .card');
  card?.classList.add('flipTurning');
  window.setTimeout(() => {
    card?.classList.add('flipped');
    el('answer').classList.add('show');
    el('grade').classList.toggle('show', !libraryDetailMode);
    (el('reveal') as HTMLElement).style.display = 'none';
    card?.classList.remove('flipTurning');
    card?.classList.add('flipLanding');
    window.setTimeout(() => { card?.classList.remove('flipLanding'); cardFlipping = false; }, 240);
  }, 190);
});
// Tap anywhere on the card: front flips, back advances as remembered.
let flipTouchStart = 0;
const studyCard = document.querySelector<HTMLElement>('#study .card')!;
studyCard.addEventListener('touchstart', e => { flipTouchStart = e.touches[0]?.clientY || 0; }, {passive:true});
studyCard.addEventListener('click', e => {
  const target = e.target as HTMLElement;
  if (target.closest('button, input, a, label, summary') || cardFlipping || libraryDetailMode) return;
  if (Math.abs((e as MouseEvent).clientY - flipTouchStart) > 28 && flipTouchStart) { flipTouchStart = 0; return; }
  flipTouchStart = 0;
  const current = filtered[index % Math.max(filtered.length, 1)];
  if (current?.textbook) {
    if (!el('answer').classList.contains('show')) el('reveal').click();
    return;
  }
  // Full card is already visible: tap anywhere outside controls to advance.
  if (cardFlipping) return;
  cardFlipping = true;
  studyCard.classList.remove('flipLanding','flipTurning');
  studyCard.classList.add('cardTossOut');
  window.setTimeout(() => {
    document.querySelector<HTMLButtonElement>('#grade button[data-score="2"]')?.click();
    studyCard.classList.remove('cardTossOut');
    studyCard.classList.add('cardDealIn');
    window.setTimeout(() => { studyCard.classList.remove('cardDealIn'); cardFlipping = false; }, 330);
  }, 260);
});
el('memorySituation').addEventListener('click', () => { const c = filtered[index]; if (!c || dialogueCache[cardKey(c)] || dialoguePending.has(cardKey(c))) return; dialogueFailures.delete(cardKey(c)); el('memorySituation').textContent = '正在生成场景对话…'; void loadDialogue(c, ''); });
document.querySelectorAll<HTMLButtonElement>('#grade button').forEach(b =>
  b.addEventListener('click', () => {
    const c = filtered[index % filtered.length];
    if (!c) return;
    const score = Number(b.dataset.score);
    state.reviewed++;
    state.daily![dayKey()] = (state.daily![dayKey()] || 0) + 1;
    if (score === 2 && state.scores[cardKey(c)] !== 2) state.mastered++;
    if (score !== 2 && state.scores[cardKey(c)] === 2)
      state.mastered = Math.max(0, state.mastered - 1);
    state.scores[cardKey(c)] = score;
    if (score === 0) state.lapses![cardKey(c)] = (state.lapses![cardKey(c)] || 0) + 1;
    if (score === 2) {
      state.successes![cardKey(c)] = (state.successes![cardKey(c)] || 0) + 1;
      const skill = state.skills![cardKey(c)] || { recognize: 0, recall: 0, speak: 0, use: 0 };
      const stage = skillStage(c);
      if (stage === 0) skill.recognize++;
      else if (stage === 1) skill.recall++;
      else if (stage === 2) skill.speak++;
      else skill.use++;
      state.skills![cardKey(c)] = skill;
    }
    const old = state.reviews?.[cardKey(c)];
    const times = (old?.times || 0) + 1;
    const plan = reviewDelay(score, old, state.lapses![cardKey(c)] || 0, state.successes![cardKey(c)] || 0);
    state.reviews![cardKey(c)] = { score, lastReviewed: Date.now(), dueAt: Date.now() + plan.delay, times, stage: plan.stage, ease: plan.ease };
    saveLocalState();
    el('backupStatus').textContent = `自动保存：刚刚 · ${new Date().toLocaleTimeString()}`;
    updateStats();
    if (queueMode === 'today' || queueMode === 'due') {
      apply(); // Rebuild from due times so the card just reviewed is not immediately repeated.
    } else {
      index = (index + 1) % filtered.length;
      recallDirection = index % 2 === 0 ? 'target' : 'chinese';
      render();
    }
  })
);
document.getElementById('homeLanguage')?.addEventListener('change', e => {
  const value = (e.target as HTMLSelectElement).value;
  bookUnit = null; bookKind = '全部';
  lang = value;
  document.querySelectorAll('.chip').forEach(x => x.classList.toggle('active', (x as HTMLElement).dataset.lang === value));
  apply();
});
document.querySelectorAll<HTMLButtonElement>('.chip').forEach(b =>
  b.addEventListener('click', () => {
    document
      .querySelectorAll('.chip')
      .forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    bookUnit = null; bookKind = '全部';
    lang = b.dataset.lang || '全部';
    apply();
  })
);
document.querySelectorAll<HTMLButtonElement>('.topTab').forEach(button => button.addEventListener('click', () => showPage(button.dataset.page || 'homePage')));
el('startToday').addEventListener('click', () => { bookUnit = null; bookKind = '全部'; libraryDetailMode = false; lang = (el('homeLanguage') as HTMLSelectElement).value; setQueueMode('today'); showPage('studyPage'); });
el('openKnowledge').addEventListener('click', () => showPage('knowledgePage'));
el('libraryBack').addEventListener('click', () => showPage('knowledgePage'));
el('studyHomeBack').addEventListener('click', () => { if (libraryDetailMode) { libraryDetailMode = false; renderLibrary(); showPage('libraryPage'); } });
function pageCard(delta: number) {
  if (!filtered.length || cardFlipping) return;
  stopCurrentSpeech();
  index = (index + delta + filtered.length) % filtered.length;
  const card = document.querySelector<HTMLElement>('#study .card');
  card?.classList.remove('pageTurnNext', 'pageTurnPrev');
  void card?.offsetWidth;
  card?.classList.add(delta > 0 ? 'pageTurnNext' : 'pageTurnPrev');
  render();
}
let swipeX = 0; let swipeY = 0;
studyCard.addEventListener('touchstart', event => { swipeX = event.touches[0]?.clientX || 0; swipeY = event.touches[0]?.clientY || 0; }, {passive:true});
studyCard.addEventListener('touchend', event => {
  const dx = (event.changedTouches[0]?.clientX || 0) - swipeX;
  const dy = (event.changedTouches[0]?.clientY || 0) - swipeY;
  if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.35) { flipTouchStart = 99999; pageCard(dx < 0 ? 1 : -1); }
}, {passive:true});
document.addEventListener('keydown', event => {
  if (!el('studyPage').classList.contains('active') || (event.target as HTMLElement).matches('input, textarea')) return;
  if (event.key === 'ArrowRight') pageCard(1);
  if (event.key === 'ArrowLeft') pageCard(-1);
});
el('search').addEventListener('input', apply);
el('todayBtn').addEventListener('click', () => setQueueMode('today'));
el('historyBtn').addEventListener('click', () => setQueueMode('reviewed'));
el('allBtn').addEventListener('click', () => setQueueMode('all'));
el('dueBtn').addEventListener('click', () => setQueueMode('due'));
el('studyBtn').addEventListener('click', () => { libraryDetailMode = false; setQueueMode('today'); showPage('studyPage'); });
el('savedWordsNav').addEventListener('click',openSavedWords);
el('libBtn').addEventListener('click', () => { bookUnit = null; bookKind = '全部'; lang = '全部'; queueMode = 'all'; (el('search') as HTMLInputElement).value = ''; filtered = [...cards]; renderLibrary(); showPage('libraryPage'); });
updateStats();
apply();

