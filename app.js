const languages = [
  { id: "nl", name: "Nederlands", locale: "nl-NL", color: "#f06d5e" },
  { id: "ru", name: "русский", locale: "ru-RU", color: "#f6c85f" },
  { id: "zh", name: "中文", locale: "zh-CN", color: "#2f9d74" },
  { id: "en", name: "English", locale: "en-US", color: "#3778c2" },
  { id: "ja", name: "日本語", locale: "ja-JP", color: "#8f6ccf" },
];

const words = {
  apple: {
    aliases: ["apple", "appel", "яблоко", "yabloko", "苹果", "pingguo", "ringo", "りんご"],
    detected: { word: "apple", language: "English" },
    translations: {
      en: { word: "apple", phonetic: "A-puhl" },
      nl: { word: "appel", phonetic: "AH-puhl" },
      ru: { word: "яблоко", phonetic: "YA-bla-ka" },
      zh: { word: "苹果", phonetic: "píng guǒ" },
      ja: { word: "りんご", phonetic: "reen-go" },
    },
    facts: [
      "Apples can float because about one quarter of an apple is air.",
      "There are thousands of apple varieties around the world.",
      "Apple trees need bees and other pollinators to grow fruit.",
    ],
    art: "apple",
  },
  banana: {
    aliases: ["banana", "banaan", "банан", "banan", "香蕉", "xiangjiao", "バナナ"],
    detected: { word: "banana", language: "English" },
    translations: {
      en: { word: "banana", phonetic: "buh-NA-nuh" },
      nl: { word: "banaan", phonetic: "ba-NAAN" },
      ru: { word: "банан", phonetic: "ba-NAN" },
      zh: { word: "香蕉", phonetic: "xiāng jiāo" },
      ja: { word: "バナナ", phonetic: "ba-na-na" },
    },
    facts: [
      "Bananas grow in big hanging bunches.",
      "They are berries by plant science rules.",
      "Bananas are soft, so many toddlers try them early.",
    ],
    art: "fruit",
  },
  dog: {
    aliases: ["dog", "hond", "собака", "sobaka", "狗", "gou", "inu", "犬"],
    detected: { word: "hond", language: "Nederlands" },
    translations: {
      en: { word: "dog", phonetic: "dawg" },
      nl: { word: "hond", phonetic: "hont" },
      ru: { word: "собака", phonetic: "sa-BA-ka" },
      zh: { word: "狗", phonetic: "gǒu" },
      ja: { word: "犬", phonetic: "ee-noo" },
    },
    facts: [
      "Dogs learn family voices very quickly.",
      "A dog’s nose print is unique, a bit like a fingerprint.",
      "Many languages use different sounds for a dog bark.",
    ],
    art: "dog",
  },
  cat: {
    aliases: ["cat", "kat", "кошка", "koshka", "猫", "mao", "neko"],
    detected: { word: "cat", language: "English" },
    translations: {
      en: { word: "cat", phonetic: "kat" },
      nl: { word: "kat", phonetic: "kaht" },
      ru: { word: "кошка", phonetic: "KOSH-ka" },
      zh: { word: "猫", phonetic: "māo" },
      ja: { word: "猫", phonetic: "ne-ko" },
    },
    facts: [
      "Cats use their whiskers to feel tiny spaces.",
      "Many languages have a short, soft word for cat.",
      "Cats can sleep for much of the day.",
    ],
    art: "cat",
  },
  bird: {
    aliases: ["bird", "vogel", "птица", "ptitsa", "鸟", "niao", "tori", "鳥"],
    detected: { word: "bird", language: "English" },
    translations: {
      en: { word: "bird", phonetic: "burd" },
      nl: { word: "vogel", phonetic: "VO-gul" },
      ru: { word: "птица", phonetic: "PTEE-tsa" },
      zh: { word: "鸟", phonetic: "niǎo" },
      ja: { word: "鳥", phonetic: "to-ree" },
    },
    facts: [
      "Most birds have feathers and lay eggs.",
      "Bird songs can sound different in every neighborhood.",
      "Some birds learn sounds from the world around them.",
    ],
    art: "bird",
  },
  moon: {
    aliases: ["moon", "maan", "луна", "luna", "月亮", "yueliang", "tsuki", "月"],
    detected: { word: "moon", language: "English" },
    translations: {
      en: { word: "moon", phonetic: "moon" },
      nl: { word: "maan", phonetic: "mahn" },
      ru: { word: "луна", phonetic: "loo-NA" },
      zh: { word: "月亮", phonetic: "yuè liang" },
      ja: { word: "月", phonetic: "tsu-kee" },
    },
    facts: [
      "The Moon is Earth’s closest neighbor in space.",
      "It changes shape in the sky because sunlight hits it from different angles.",
      "Many bedtime stories around the world mention the Moon.",
    ],
    art: "moon",
  },
  sun: {
    aliases: ["sun", "zon", "солнце", "solntse", "太阳", "taiyang", "taiyou", "太陽"],
    detected: { word: "sun", language: "English" },
    translations: {
      en: { word: "sun", phonetic: "sun" },
      nl: { word: "zon", phonetic: "zon" },
      ru: { word: "солнце", phonetic: "SOLN-tse" },
      zh: { word: "太阳", phonetic: "tài yáng" },
      ja: { word: "太陽", phonetic: "tai-yoh" },
    },
    facts: [
      "The Sun is a star very close to Earth.",
      "Sunlight helps plants grow.",
      "Families around the world use sunny days for outdoor play.",
    ],
    art: "sun",
  },
  star: {
    aliases: ["star", "ster", "звезда", "zvezda", "星星", "xingxing", "hoshi", "星"],
    detected: { word: "star", language: "English" },
    translations: {
      en: { word: "star", phonetic: "star" },
      nl: { word: "ster", phonetic: "stehr" },
      ru: { word: "звезда", phonetic: "zvez-DA" },
      zh: { word: "星星", phonetic: "xīng xing" },
      ja: { word: "星", phonetic: "ho-shee" },
    },
    facts: [
      "Stars are giant glowing balls of gas.",
      "Some stars look like patterns called constellations.",
      "Children often draw stars with five points.",
    ],
    art: "star",
  },
  tree: {
    aliases: ["tree", "boom", "дерево", "derevo", "树", "shu", "ki", "木"],
    detected: { word: "tree", language: "English" },
    translations: {
      en: { word: "tree", phonetic: "tree" },
      nl: { word: "boom", phonetic: "bohm" },
      ru: { word: "дерево", phonetic: "DYE-rye-va" },
      zh: { word: "树", phonetic: "shù" },
      ja: { word: "木", phonetic: "kee" },
    },
    facts: [
      "Trees clean air and give shade.",
      "Some trees live for hundreds of years.",
      "Leaves can be many shapes, colors, and sizes.",
    ],
    art: "tree",
  },
  flower: {
    aliases: ["flower", "bloem", "цветок", "tsvetok", "花", "hua", "hana"],
    detected: { word: "flower", language: "English" },
    translations: {
      en: { word: "flower", phonetic: "FLOW-er" },
      nl: { word: "bloem", phonetic: "bloom" },
      ru: { word: "цветок", phonetic: "tsve-TOK" },
      zh: { word: "花", phonetic: "huā" },
      ja: { word: "花", phonetic: "ha-na" },
    },
    facts: [
      "Flowers can turn into fruits after pollination.",
      "Bees visit flowers for nectar.",
      "Many families give flowers for celebrations.",
    ],
    art: "flower",
  },
  water: {
    aliases: ["water", "вода", "voda", "水", "shui", "mizu"],
    detected: { word: "water", language: "English" },
    translations: {
      en: { word: "water", phonetic: "WAH-ter" },
      nl: { word: "water", phonetic: "WAH-ter" },
      ru: { word: "вода", phonetic: "va-DA" },
      zh: { word: "水", phonetic: "shuǐ" },
      ja: { word: "水", phonetic: "mee-zoo" },
    },
    facts: [
      "Water can be a liquid, solid ice, or invisible vapor.",
      "Every living thing on Earth needs water.",
      "Some words for water are very short because families say them so often.",
    ],
    art: "water",
  },
  bread: {
    aliases: ["bread", "brood", "хлеб", "khleb", "面包", "mianbao", "pan", "パン"],
    detected: { word: "bread", language: "English" },
    translations: {
      en: { word: "bread", phonetic: "bred" },
      nl: { word: "brood", phonetic: "broht" },
      ru: { word: "хлеб", phonetic: "khlyep" },
      zh: { word: "面包", phonetic: "miàn bāo" },
      ja: { word: "パン", phonetic: "pan" },
    },
    facts: ["Bread is made in many shapes around the world.", "Some breads are soft, some are crunchy.", "Families often share bread at meals."],
    art: "bread",
  },
  cheese: {
    aliases: ["cheese", "kaas", "сыр", "syr", "奶酪", "nailao", "chiizu", "チーズ"],
    detected: { word: "cheese", language: "English" },
    translations: {
      en: { word: "cheese", phonetic: "cheez" },
      nl: { word: "kaas", phonetic: "kahs" },
      ru: { word: "сыр", phonetic: "syr" },
      zh: { word: "奶酪", phonetic: "nǎi lào" },
      ja: { word: "チーズ", phonetic: "chee-zu" },
    },
    facts: ["Cheese can be creamy, stretchy, or crumbly.", "The Netherlands is famous for cheese markets.", "Some cheeses have tiny holes."],
    art: "cheese",
  },
  egg: {
    aliases: ["egg", "ei", "яйцо", "yaytso", "鸡蛋", "jidan", "tamago", "卵"],
    detected: { word: "egg", language: "English" },
    translations: {
      en: { word: "egg", phonetic: "eg" },
      nl: { word: "ei", phonetic: "eye" },
      ru: { word: "яйцо", phonetic: "yait-SO" },
      zh: { word: "鸡蛋", phonetic: "jī dàn" },
      ja: { word: "卵", phonetic: "ta-ma-go" },
    },
    facts: ["Eggshells can be white, brown, blue, or speckled.", "Many birds hatch from eggs.", "Eggs are used in cakes and pancakes."],
    art: "egg",
  },
  rice: {
    aliases: ["rice", "rijst", "рис", "ris", "米饭", "mifan", "gohan", "ご飯"],
    detected: { word: "rice", language: "English" },
    translations: {
      en: { word: "rice", phonetic: "rise" },
      nl: { word: "rijst", phonetic: "ryst" },
      ru: { word: "рис", phonetic: "rees" },
      zh: { word: "米饭", phonetic: "mǐ fàn" },
      ja: { word: "ご飯", phonetic: "go-han" },
    },
    facts: ["Rice is a daily food for many families.", "Rice grows in warm, wet fields.", "Tiny grains can become a whole bowl."],
    art: "rice",
  },
  soup: {
    aliases: ["soup", "soep", "суп", "sup", "汤", "tang", "suupu", "スープ"],
    detected: { word: "soup", language: "English" },
    translations: {
      en: { word: "soup", phonetic: "soop" },
      nl: { word: "soep", phonetic: "soop" },
      ru: { word: "суп", phonetic: "soop" },
      zh: { word: "汤", phonetic: "tāng" },
      ja: { word: "スープ", phonetic: "suu-pu" },
    },
    facts: ["Soup can warm you up on cold days.", "Families add favorite vegetables to soup.", "Some soups are smooth and some have noodles."],
    art: "soup",
  },
  fish: {
    aliases: ["fish", "vis", "рыба", "ryba", "鱼", "yu", "sakana", "魚"],
    detected: { word: "fish", language: "English" },
    translations: {
      en: { word: "fish", phonetic: "fish" },
      nl: { word: "vis", phonetic: "fis" },
      ru: { word: "рыба", phonetic: "RY-ba" },
      zh: { word: "鱼", phonetic: "yú" },
      ja: { word: "魚", phonetic: "sa-ka-na" },
    },
    facts: ["Fish breathe underwater with gills.", "Some fish are tiny and some are huge.", "Fish can swim in schools."],
    art: "fish",
  },
  rabbit: {
    aliases: ["rabbit", "konijn", "кролик", "krolik", "兔子", "tuzi", "usagi", "うさぎ"],
    detected: { word: "rabbit", language: "English" },
    translations: {
      en: { word: "rabbit", phonetic: "RA-bit" },
      nl: { word: "konijn", phonetic: "ko-NINE" },
      ru: { word: "кролик", phonetic: "KRO-lik" },
      zh: { word: "兔子", phonetic: "tù zi" },
      ja: { word: "うさぎ", phonetic: "u-sa-gi" },
    },
    facts: ["Rabbits have long ears.", "They can hop very quickly.", "A rabbit's nose wiggles when it sniffs."],
    art: "rabbit",
  },
  bear: {
    aliases: ["bear", "beer", "медведь", "medved", "熊", "xiong", "kuma", "くま"],
    detected: { word: "bear", language: "English" },
    translations: {
      en: { word: "bear", phonetic: "bair" },
      nl: { word: "beer", phonetic: "bayr" },
      ru: { word: "медведь", phonetic: "med-VED" },
      zh: { word: "熊", phonetic: "xióng" },
      ja: { word: "くま", phonetic: "ku-ma" },
    },
    facts: ["Many children have a toy bear.", "Real bears have strong noses.", "Some bears sleep through much of winter."],
    art: "bear",
  },
  rain: {
    aliases: ["rain", "regen", "дождь", "dozhd", "雨", "yu", "ame"],
    detected: { word: "rain", language: "English" },
    translations: {
      en: { word: "rain", phonetic: "rayn" },
      nl: { word: "regen", phonetic: "RAY-gun" },
      ru: { word: "дождь", phonetic: "dosht" },
      zh: { word: "雨", phonetic: "yǔ" },
      ja: { word: "雨", phonetic: "a-me" },
    },
    facts: ["Rain helps plants grow.", "Puddles appear after rain.", "Rain sounds can be soft or loud."],
    art: "rain",
  },
  snow: {
    aliases: ["snow", "sneeuw", "снег", "sneg", "雪", "xue", "yuki"],
    detected: { word: "snow", language: "English" },
    translations: {
      en: { word: "snow", phonetic: "snoh" },
      nl: { word: "sneeuw", phonetic: "snayw" },
      ru: { word: "снег", phonetic: "snyek" },
      zh: { word: "雪", phonetic: "xuě" },
      ja: { word: "雪", phonetic: "yu-ki" },
    },
    facts: ["Snowflakes have beautiful shapes.", "Snow is made of tiny ice crystals.", "Fresh snow can make the world very quiet."],
    art: "snow",
  },
  cloud: {
    aliases: ["cloud", "wolk", "облако", "oblako", "云", "yun", "kumo", "雲"],
    detected: { word: "cloud", language: "English" },
    translations: {
      en: { word: "cloud", phonetic: "klowd" },
      nl: { word: "wolk", phonetic: "wolk" },
      ru: { word: "облако", phonetic: "OB-la-ka" },
      zh: { word: "云", phonetic: "yún" },
      ja: { word: "雲", phonetic: "ku-mo" },
    },
    facts: ["Clouds are made of tiny water drops or ice.", "Clouds can look like animals or castles.", "Dark clouds can bring rain."],
    art: "cloud",
  },
  sea: {
    aliases: ["sea", "zee", "море", "more", "海", "hai", "umi"],
    detected: { word: "sea", language: "English" },
    translations: {
      en: { word: "sea", phonetic: "see" },
      nl: { word: "zee", phonetic: "zay" },
      ru: { word: "море", phonetic: "MO-rye" },
      zh: { word: "海", phonetic: "hǎi" },
      ja: { word: "海", phonetic: "u-mi" },
    },
    facts: ["The sea tastes salty.", "Waves move toward the shore.", "Many animals live in the sea."],
    art: "sea",
  },
  mountain: {
    aliases: ["mountain", "berg", "гора", "gora", "山", "shan", "yama"],
    detected: { word: "mountain", language: "English" },
    translations: {
      en: { word: "mountain", phonetic: "MOWN-tin" },
      nl: { word: "berg", phonetic: "berkh" },
      ru: { word: "гора", phonetic: "ga-RA" },
      zh: { word: "山", phonetic: "shān" },
      ja: { word: "山", phonetic: "ya-ma" },
    },
    facts: ["Mountains can be snowy at the top.", "Some mountains are volcanoes.", "Hikers climb mountains step by step."],
    art: "mountain",
  },
  hand: {
    aliases: ["hand", "рука", "ruka", "手", "shou", "te"],
    detected: { word: "hand", language: "English" },
    translations: {
      en: { word: "hand", phonetic: "hand" },
      nl: { word: "hand", phonetic: "hant" },
      ru: { word: "рука", phonetic: "roo-KA" },
      zh: { word: "手", phonetic: "shǒu" },
      ja: { word: "手", phonetic: "te" },
    },
    facts: ["Hands can clap, wave, draw, and build.", "Fingers help us hold tiny things.", "Many songs for children use hand motions."],
    art: "hand",
  },
  eye: {
    aliases: ["eye", "oog", "глаз", "glaz", "眼睛", "yanjing", "me", "目"],
    detected: { word: "eye", language: "English" },
    translations: {
      en: { word: "eye", phonetic: "eye" },
      nl: { word: "oog", phonetic: "ohkh" },
      ru: { word: "глаз", phonetic: "glaz" },
      zh: { word: "眼睛", phonetic: "yǎn jing" },
      ja: { word: "目", phonetic: "me" },
    },
    facts: ["Eyes help us notice colors and shapes.", "Blinking keeps eyes comfortable.", "People can smile with their eyes too."],
    art: "eye",
  },
  shoe: {
    aliases: ["shoe", "schoen", "обувь", "obuv", "鞋", "xie", "kutsu", "靴"],
    detected: { word: "shoe", language: "English" },
    translations: {
      en: { word: "shoe", phonetic: "shoo" },
      nl: { word: "schoen", phonetic: "skhoon" },
      ru: { word: "обувь", phonetic: "O-buv" },
      zh: { word: "鞋", phonetic: "xié" },
      ja: { word: "靴", phonetic: "ku-tsu" },
    },
    facts: ["Shoes protect feet outside.", "Some shoes have laces and some have straps.", "Tiny shoes are often hard to keep track of."],
    art: "shoe",
  },
  hat: {
    aliases: ["hat", "hoed", "шапка", "shapka", "帽子", "maozi", "boushi", "帽子"],
    detected: { word: "hat", language: "English" },
    translations: {
      en: { word: "hat", phonetic: "hat" },
      nl: { word: "hoed", phonetic: "hoot" },
      ru: { word: "шапка", phonetic: "SHAP-ka" },
      zh: { word: "帽子", phonetic: "mào zi" },
      ja: { word: "帽子", phonetic: "boh-shi" },
    },
    facts: ["Hats can keep heads warm or shady.", "Party hats make celebrations feel special.", "Some uniforms include special hats."],
    art: "hat",
  },
  book: {
    aliases: ["book", "boek", "книга", "kniga", "书", "shu", "hon", "本"],
    detected: { word: "book", language: "English" },
    translations: {
      en: { word: "book", phonetic: "book" },
      nl: { word: "boek", phonetic: "book" },
      ru: { word: "книга", phonetic: "KNEE-ga" },
      zh: { word: "书", phonetic: "shū" },
      ja: { word: "本", phonetic: "hon" },
    },
    facts: [
      "Picture books help children connect words and images.",
      "Libraries keep stories in many languages.",
      "Reading the same book in two languages builds family vocabulary.",
    ],
    art: "book",
  },
  basketball: {
    aliases: ["basketball", "basketbal", "баскетбол", "basketbol", "篮球", "lanqiu", "basuketto", "バスケットボール"],
    detected: { word: "basketball", language: "English" },
    translations: {
      en: { word: "basketball", phonetic: "BAS-ket-bawl" },
      nl: { word: "basketbal", phonetic: "BAS-ket-bal" },
      ru: { word: "баскетбол", phonetic: "bas-ket-BOL" },
      zh: { word: "篮球", phonetic: "lán qiú" },
      ja: { word: "バスケットボール", phonetic: "ba-su-ket-to-boh-ru" },
    },
    facts: [
      "Basketball is played with a round orange ball.",
      "Players try to throw the ball through a hoop.",
      "Dribbling means bouncing the ball while moving.",
    ],
    art: "basketball",
  },
  car: {
    aliases: ["car", "auto", "машина", "mashina", "汽车", "qiche", "kuruma", "車"],
    detected: { word: "car", language: "English" },
    translations: {
      en: { word: "car", phonetic: "kar" },
      nl: { word: "auto", phonetic: "OW-toh" },
      ru: { word: "машина", phonetic: "ma-SHEE-na" },
      zh: { word: "汽车", phonetic: "qì chē" },
      ja: { word: "車", phonetic: "ku-ru-ma" },
    },
    facts: [
      "Cars have many tiny parts working together.",
      "Children often learn vehicle words from daily trips.",
      "Road signs use pictures so many people can understand them.",
    ],
    art: "car",
  },
  train: {
    aliases: ["train", "trein", "поезд", "poezd", "火车", "huoche", "densha", "電車"],
    detected: { word: "train", language: "English" },
    translations: {
      en: { word: "train", phonetic: "trayn" },
      nl: { word: "trein", phonetic: "trine" },
      ru: { word: "поезд", phonetic: "PO-yezd" },
      zh: { word: "火车", phonetic: "huǒ chē" },
      ja: { word: "電車", phonetic: "den-sha" },
    },
    facts: [
      "Trains can carry many people at once.",
      "Some trains travel underground in cities.",
      "Train sounds are fun to copy in many languages.",
    ],
    art: "train",
  },
  house: {
    aliases: ["house", "huis", "дом", "dom", "家", "jia", "ie", "家"],
    detected: { word: "house", language: "English" },
    translations: {
      en: { word: "house", phonetic: "hows" },
      nl: { word: "huis", phonetic: "house" },
      ru: { word: "дом", phonetic: "dom" },
      zh: { word: "家", phonetic: "jiā" },
      ja: { word: "家", phonetic: "ee-eh" },
    },
    facts: [
      "A home can sound like many languages in one day.",
      "Houses look different in different climates.",
      "Family words often start at home.",
    ],
    art: "house",
  },
  bed: {
    aliases: ["bed", "кровать", "krovat", "床", "chuang", "beddo", "ベッド"],
    detected: { word: "bed", language: "English" },
    translations: {
      en: { word: "bed", phonetic: "bed" },
      nl: { word: "bed", phonetic: "bet" },
      ru: { word: "кровать", phonetic: "kra-VAT" },
      zh: { word: "床", phonetic: "chuáng" },
      ja: { word: "ベッド", phonetic: "bed-do" },
    },
    facts: [
      "Bedtime words are often said softly.",
      "Many families have bedtime songs in more than one language.",
      "Sleep helps children remember new words.",
    ],
    art: "bed",
  },
  chair: {
    aliases: ["chair", "stoel", "стул", "stul", "椅子", "yizi", "isu", "椅子"],
    detected: { word: "chair", language: "English" },
    translations: {
      en: { word: "chair", phonetic: "chair" },
      nl: { word: "stoel", phonetic: "stool" },
      ru: { word: "стул", phonetic: "stool" },
      zh: { word: "椅子", phonetic: "yǐ zi" },
      ja: { word: "椅子", phonetic: "i-su" },
    },
    facts: ["Chairs help us sit at a table.", "Some chairs rock, roll, or fold.", "Small chairs make playrooms feel just right."],
    art: "chair",
  },
  plate: {
    aliases: ["plate", "bord", "тарелка", "tarelka", "盘子", "panzi", "sara", "皿"],
    detected: { word: "plate", language: "English" },
    translations: {
      en: { word: "plate", phonetic: "playt" },
      nl: { word: "bord", phonetic: "bort" },
      ru: { word: "тарелка", phonetic: "ta-REL-ka" },
      zh: { word: "盘子", phonetic: "pán zi" },
      ja: { word: "皿", phonetic: "sa-ra" },
    },
    facts: ["A plate holds food during a meal.", "Plates can be round, square, big, or small.", "Some plates have colorful patterns."],
    art: "plate",
  },
  door: {
    aliases: ["door", "deur", "дверь", "dver", "门", "men", "doa", "ドア"],
    detected: { word: "door", language: "English" },
    translations: {
      en: { word: "door", phonetic: "dor" },
      nl: { word: "deur", phonetic: "dur" },
      ru: { word: "дверь", phonetic: "dvyer" },
      zh: { word: "门", phonetic: "mén" },
      ja: { word: "ドア", phonetic: "do-a" },
    },
    facts: ["Doors open into new rooms.", "Knocking is a sound children learn quickly.", "Some doors slide instead of swing."],
    art: "door",
  },
  window: {
    aliases: ["window", "raam", "окно", "okno", "窗户", "chuanghu", "mado", "窓"],
    detected: { word: "window", language: "English" },
    translations: {
      en: { word: "window", phonetic: "WIN-doh" },
      nl: { word: "raam", phonetic: "rahm" },
      ru: { word: "окно", phonetic: "ak-NO" },
      zh: { word: "窗户", phonetic: "chuāng hu" },
      ja: { word: "窓", phonetic: "ma-do" },
    },
    facts: ["Windows let light into a room.", "Children can watch weather through windows.", "Some windows open and some stay closed."],
    art: "window",
  },
  lamp: {
    aliases: ["lamp", "лампа", "lampa", "灯", "deng", "ranpu", "ランプ"],
    detected: { word: "lamp", language: "English" },
    translations: {
      en: { word: "lamp", phonetic: "lamp" },
      nl: { word: "lamp", phonetic: "lahmp" },
      ru: { word: "лампа", phonetic: "LAM-pa" },
      zh: { word: "灯", phonetic: "dēng" },
      ja: { word: "ランプ", phonetic: "ran-pu" },
    },
    facts: ["Lamps make cozy light for reading.", "Some lamps are bright and some are soft.", "Turning on a lamp can start bedtime story time."],
    art: "lamp",
  },
  doll: {
    aliases: ["doll", "pop", "кукла", "kukla", "娃娃", "wawa", "ningyou", "人形"],
    detected: { word: "doll", language: "English" },
    translations: {
      en: { word: "doll", phonetic: "dahl" },
      nl: { word: "pop", phonetic: "pop" },
      ru: { word: "кукла", phonetic: "KOOK-la" },
      zh: { word: "娃娃", phonetic: "wá wa" },
      ja: { word: "人形", phonetic: "nin-gyoh" },
    },
    facts: ["Dolls help children practice caring stories.", "Some dolls wear clothes from different cultures.", "Pretend play builds language."],
    art: "doll",
  },
  blocks: {
    aliases: ["blocks", "blokjes", "кубики", "kubiki", "积木", "jimu", "tsumiki", "積み木"],
    detected: { word: "blocks", language: "English" },
    translations: {
      en: { word: "blocks", phonetic: "bloks" },
      nl: { word: "blokjes", phonetic: "BLOK-yus" },
      ru: { word: "кубики", phonetic: "KOO-bee-kee" },
      zh: { word: "积木", phonetic: "jī mù" },
      ja: { word: "積み木", phonetic: "tsu-mi-ki" },
    },
    facts: ["Blocks can become towers, roads, or castles.", "Stacking blocks practices balance.", "Counting blocks is a playful math moment."],
    art: "blocks",
  },
  kite: {
    aliases: ["kite", "vlieger", "воздушный змей", "zmei", "风筝", "fengzheng", "tako", "凧"],
    detected: { word: "kite", language: "English" },
    translations: {
      en: { word: "kite", phonetic: "kite" },
      nl: { word: "vlieger", phonetic: "VLEE-gher" },
      ru: { word: "воздушный змей", phonetic: "vaz-DOOSH-ny zmey" },
      zh: { word: "风筝", phonetic: "fēng zheng" },
      ja: { word: "凧", phonetic: "ta-ko" },
    },
    facts: ["Kites need wind to fly.", "Some kites have long colorful tails.", "Flying a kite teaches patience and timing."],
    art: "kite",
  },
  pencil: {
    aliases: ["pencil", "potlood", "карандаш", "karandash", "铅笔", "qianbi", "enpitsu", "鉛筆"],
    detected: { word: "pencil", language: "English" },
    translations: {
      en: { word: "pencil", phonetic: "PEN-sul" },
      nl: { word: "potlood", phonetic: "POT-loht" },
      ru: { word: "карандаш", phonetic: "ka-ran-DASH" },
      zh: { word: "铅笔", phonetic: "qiān bǐ" },
      ja: { word: "鉛筆", phonetic: "en-pi-tsu" },
    },
    facts: ["Pencils can draw, write, and erase.", "A sharp pencil makes thin lines.", "Children use pencils to turn ideas into marks."],
    art: "pencil",
  },
  bag: {
    aliases: ["bag", "tas", "сумка", "sumka", "包", "bao", "kaban", "かばん"],
    detected: { word: "bag", language: "English" },
    translations: {
      en: { word: "bag", phonetic: "bag" },
      nl: { word: "tas", phonetic: "tahs" },
      ru: { word: "сумка", phonetic: "SOOM-ka" },
      zh: { word: "包", phonetic: "bāo" },
      ja: { word: "かばん", phonetic: "ka-ban" },
    },
    facts: ["Bags carry snacks, books, and treasures.", "School bags can be many colors.", "Packing a bag is a tiny planning job."],
    art: "bag",
  },
  mother: {
    aliases: ["mother", "mom", "mama", "moeder", "мама", "mat", "妈妈", "mama", "okaasan", "お母さん"],
    detected: { word: "mother", language: "English" },
    translations: {
      en: { word: "mother", phonetic: "MUH-ther" },
      nl: { word: "moeder", phonetic: "MOO-der" },
      ru: { word: "мама", phonetic: "MA-ma" },
      zh: { word: "妈妈", phonetic: "mā ma" },
      ja: { word: "お母さん", phonetic: "o-kaa-san" },
    },
    facts: [
      "Many baby words for mother use easy m sounds.",
      "Families often have more than one loving name for a parent.",
      "Parent words can be formal, casual, or cuddly.",
    ],
    art: "mother",
  },
  father: {
    aliases: ["father", "dad", "papa", "vader", "папа", "爸爸", "baba", "otousan", "お父さん"],
    detected: { word: "father", language: "English" },
    translations: {
      en: { word: "father", phonetic: "FAH-ther" },
      nl: { word: "vader", phonetic: "VAH-der" },
      ru: { word: "папа", phonetic: "PA-pa" },
      zh: { word: "爸爸", phonetic: "bà ba" },
      ja: { word: "お父さん", phonetic: "o-toh-san" },
    },
    facts: [
      "Many baby words for father use p or b sounds.",
      "A child may use different parent words in different languages.",
      "Family names carry lots of feeling.",
    ],
    art: "father",
  },
  happy: {
    aliases: ["happy", "blij", "счастливый", "schastlivy", "开心", "kaixin", "ureshii", "嬉しい"],
    detected: { word: "happy", language: "English" },
    translations: {
      en: { word: "happy", phonetic: "HA-pee" },
      nl: { word: "blij", phonetic: "blie" },
      ru: { word: "счастливый", phonetic: "shchas-LEE-vy" },
      zh: { word: "开心", phonetic: "kāi xīn" },
      ja: { word: "嬉しい", phonetic: "u-re-shee" },
    },
    facts: [
      "Feeling words help children name what is happening inside.",
      "A smile can be understood even without words.",
      "Families can ask about feelings in every home language.",
    ],
    art: "happy",
  },
  sad: {
    aliases: ["sad", "verdrietig", "грустный", "grustny", "伤心", "shangxin", "kanashii", "悲しい"],
    detected: { word: "sad", language: "English" },
    translations: {
      en: { word: "sad", phonetic: "sad" },
      nl: { word: "verdrietig", phonetic: "ver-DREE-tukh" },
      ru: { word: "грустный", phonetic: "GROOST-ny" },
      zh: { word: "伤心", phonetic: "shāng xīn" },
      ja: { word: "悲しい", phonetic: "ka-na-shee" },
    },
    facts: ["Sad is a feeling everyone has sometimes.", "Naming a feeling can make it easier to share.", "A hug, rest, or kind words can help."],
    art: "sad",
  },
  sleep: {
    aliases: ["sleep", "slapen", "спать", "spat", "睡觉", "shuijiao", "neru", "寝る"],
    detected: { word: "sleep", language: "English" },
    translations: {
      en: { word: "sleep", phonetic: "sleep" },
      nl: { word: "slapen", phonetic: "SLAH-pun" },
      ru: { word: "спать", phonetic: "spat" },
      zh: { word: "睡觉", phonetic: "shuì jiào" },
      ja: { word: "寝る", phonetic: "ne-ru" },
    },
    facts: ["Sleep helps brains grow and remember.", "Bedtime routines can happen in many languages.", "Dreams can feel like little stories."],
    art: "sleep",
  },
  jump: {
    aliases: ["jump", "springen", "прыгать", "prygat", "跳", "tiao", "tobu", "跳ぶ"],
    detected: { word: "jump", language: "English" },
    translations: {
      en: { word: "jump", phonetic: "jump" },
      nl: { word: "springen", phonetic: "SPRING-un" },
      ru: { word: "прыгать", phonetic: "PRY-gat" },
      zh: { word: "跳", phonetic: "tiào" },
      ja: { word: "跳ぶ", phonetic: "to-bu" },
    },
    facts: ["Jumping uses strong leg muscles.", "Children jump in games, dances, and puddles.", "Action words are fun to learn with movement."],
    art: "jump",
  },
  cow: {
    aliases: ["cow", "koe", "корова", "korova", "牛", "niu", "ushi"],
    detected: { word: "cow", language: "English" },
    translations: { en: { word: "cow", phonetic: "kow" }, nl: { word: "koe", phonetic: "koo" }, ru: { word: "корова", phonetic: "ka-RO-va" }, zh: { word: "牛", phonetic: "niú" }, ja: { word: "牛", phonetic: "u-shi" } },
    facts: ["Cows are farm animals.", "Cows eat grass.", "Many children learn the cow sound early."],
    art: "cow",
  },
  butterfly: {
    aliases: ["butterfly", "vlinder", "бабочка", "babochka", "蝴蝶", "hudie", "chou", "蝶"],
    detected: { word: "butterfly", language: "English" },
    translations: { en: { word: "butterfly", phonetic: "BUH-ter-fly" }, nl: { word: "vlinder", phonetic: "VLIN-der" }, ru: { word: "бабочка", phonetic: "BA-bach-ka" }, zh: { word: "蝴蝶", phonetic: "hú dié" }, ja: { word: "蝶", phonetic: "choh" } },
    facts: ["Butterflies have colorful wings.", "They begin life as caterpillars.", "Butterflies visit flowers."],
    art: "butterfly",
  },
  fire: {
    aliases: ["fire", "vuur", "огонь", "ogon", "火", "huo", "hi"],
    detected: { word: "fire", language: "English" },
    translations: { en: { word: "fire", phonetic: "fire" }, nl: { word: "vuur", phonetic: "vuur" }, ru: { word: "огонь", phonetic: "a-GON" }, zh: { word: "火", phonetic: "huǒ" }, ja: { word: "火", phonetic: "hi" } },
    facts: ["Fire is hot and bright.", "Families use fire carefully.", "A candle flame can be very small."],
    art: "fire",
  },
  rainbow: {
    aliases: ["rainbow", "regenboog", "радуга", "raduga", "彩虹", "caihong", "niji", "虹"],
    detected: { word: "rainbow", language: "English" },
    translations: { en: { word: "rainbow", phonetic: "RAYN-boh" }, nl: { word: "regenboog", phonetic: "RAY-gun-bohkh" }, ru: { word: "радуга", phonetic: "RA-doo-ga" }, zh: { word: "彩虹", phonetic: "cǎi hóng" }, ja: { word: "虹", phonetic: "ni-ji" } },
    facts: ["Rainbows can appear after rain.", "They show many colors.", "A rainbow is made by light and water drops."],
    art: "rainbow",
  },
  strawberry: {
    aliases: ["strawberry", "aardbei", "клубника", "klubnika", "草莓", "caomei", "ichigo", "いちご"],
    detected: { word: "strawberry", language: "English" },
    translations: { en: { word: "strawberry", phonetic: "STRAW-beh-ree" }, nl: { word: "aardbei", phonetic: "AARD-bay" }, ru: { word: "клубника", phonetic: "kloob-NEE-ka" }, zh: { word: "草莓", phonetic: "cǎo méi" }, ja: { word: "いちご", phonetic: "i-chi-go" } },
    facts: ["Strawberries are sweet red fruits.", "Their tiny seeds are on the outside.", "They grow close to the ground."],
    art: "strawberry",
  },
  carrot: {
    aliases: ["carrot", "wortel", "морковь", "morkov", "胡萝卜", "huluobo", "ninjin", "にんじん"],
    detected: { word: "carrot", language: "English" },
    translations: { en: { word: "carrot", phonetic: "KA-ruht" }, nl: { word: "wortel", phonetic: "WOR-tul" }, ru: { word: "морковь", phonetic: "mar-KOF" }, zh: { word: "胡萝卜", phonetic: "hú luó bo" }, ja: { word: "にんじん", phonetic: "nin-jin" } },
    facts: ["Carrots grow underground.", "Many carrots are orange.", "Carrots are crunchy."],
    art: "carrot",
  },
  cake: {
    aliases: ["cake", "taart", "торт", "tort", "蛋糕", "dangao", "keeki", "ケーキ"],
    detected: { word: "cake", language: "English" },
    translations: { en: { word: "cake", phonetic: "kayk" }, nl: { word: "taart", phonetic: "taart" }, ru: { word: "торт", phonetic: "tort" }, zh: { word: "蛋糕", phonetic: "dàn gāo" }, ja: { word: "ケーキ", phonetic: "kay-ki" } },
    facts: ["Cake is often shared at parties.", "Birthday cakes can have candles.", "Cakes come in many flavors."],
    art: "cake",
  },
  juice: {
    aliases: ["juice", "sap", "сок", "sok", "果汁", "guozhi", "juusu", "ジュース"],
    detected: { word: "juice", language: "English" },
    translations: { en: { word: "juice", phonetic: "joos" }, nl: { word: "sap", phonetic: "sahp" }, ru: { word: "сок", phonetic: "sok" }, zh: { word: "果汁", phonetic: "guǒ zhī" }, ja: { word: "ジュース", phonetic: "juu-su" } },
    facts: ["Juice is made from fruit.", "Orange juice is a breakfast drink.", "Juice can be sweet or sour."],
    art: "juice",
  },
  bus: {
    aliases: ["bus", "автобус", "avtobus", "公交车", "gongjiaoche", "basu", "バス"],
    detected: { word: "bus", language: "English" },
    translations: { en: { word: "bus", phonetic: "bus" }, nl: { word: "bus", phonetic: "bus" }, ru: { word: "автобус", phonetic: "av-TO-boos" }, zh: { word: "公交车", phonetic: "gōng jiāo chē" }, ja: { word: "バス", phonetic: "ba-su" } },
    facts: ["Buses carry many people.", "Some children ride a bus to school.", "A bus stops at bus stops."],
    art: "bus",
  },
  bicycle: {
    aliases: ["bicycle", "fiets", "велосипед", "velosiped", "自行车", "zixingche", "jitensha", "自転車"],
    detected: { word: "bicycle", language: "English" },
    translations: { en: { word: "bicycle", phonetic: "BY-si-kul" }, nl: { word: "fiets", phonetic: "feets" }, ru: { word: "велосипед", phonetic: "ve-la-see-PED" }, zh: { word: "自行车", phonetic: "zì xíng chē" }, ja: { word: "自転車", phonetic: "ji-ten-sha" } },
    facts: ["A bicycle has two wheels.", "Helmets help keep riders safe.", "Cycling is common in the Netherlands."],
    art: "bicycle",
  },
  airplane: {
    aliases: ["airplane", "vliegtuig", "самолёт", "samolet", "飞机", "feiji", "hikouki", "飛行機"],
    detected: { word: "airplane", language: "English" },
    translations: { en: { word: "airplane", phonetic: "AIR-playn" }, nl: { word: "vliegtuig", phonetic: "VLEEK-toykh" }, ru: { word: "самолёт", phonetic: "sa-ma-LYOT" }, zh: { word: "飞机", phonetic: "fēi jī" }, ja: { word: "飛行機", phonetic: "hi-koh-ki" } },
    facts: ["Airplanes fly high in the sky.", "They can travel far quickly.", "Airports are places where airplanes land."],
    art: "airplane",
  },
  school: {
    aliases: ["school", "школа", "shkola", "学校", "xuexiao", "gakkou", "学校"],
    detected: { word: "school", language: "English" },
    translations: { en: { word: "school", phonetic: "skool" }, nl: { word: "school", phonetic: "skhool" }, ru: { word: "школа", phonetic: "SHKO-la" }, zh: { word: "学校", phonetic: "xué xiào" }, ja: { word: "学校", phonetic: "gak-koh" } },
    facts: ["School is a place to learn.", "Children meet friends at school.", "Classrooms can have books, pencils, and games."],
    art: "school",
  },
  music: {
    aliases: ["music", "muziek", "музыка", "muzyka", "音乐", "yinyue", "ongaku", "音楽"],
    detected: { word: "music", language: "English" },
    translations: { en: { word: "music", phonetic: "MYOO-zik" }, nl: { word: "muziek", phonetic: "muu-ZEEK" }, ru: { word: "музыка", phonetic: "MOO-zy-ka" }, zh: { word: "音乐", phonetic: "yīn yuè" }, ja: { word: "音楽", phonetic: "on-ga-ku" } },
    facts: ["Music can be fast or slow.", "Families sing songs in many languages.", "Clapping can follow a beat."],
    art: "music",
  },
  painting: {
    aliases: ["painting", "schilderen", "картина", "kartina", "画画", "huahua", "e", "絵"],
    detected: { word: "painting", language: "English" },
    translations: { en: { word: "painting", phonetic: "PAYN-ting" }, nl: { word: "schilderen", phonetic: "SKHIL-duh-run" }, ru: { word: "картина", phonetic: "kar-TEE-na" }, zh: { word: "画画", phonetic: "huà huà" }, ja: { word: "絵", phonetic: "eh" } },
    facts: ["Painting uses colors.", "Brushes make different marks.", "Art can tell a story without words."],
    art: "painting",
  },
  game: {
    aliases: ["game", "spel", "игра", "igra", "游戏", "youxi", "geemu", "ゲーム"],
    detected: { word: "game", language: "English" },
    translations: { en: { word: "game", phonetic: "gaym" }, nl: { word: "spel", phonetic: "spel" }, ru: { word: "игра", phonetic: "ee-GRA" }, zh: { word: "游戏", phonetic: "yóu xì" }, ja: { word: "ゲーム", phonetic: "gay-mu" } },
    facts: ["Games can have rules.", "Some games use cards or dice.", "Playing together practices turn-taking."],
    art: "game",
  },
  swim: {
    aliases: ["swim", "zwemmen", "плавать", "plavat", "游泳", "youyong", "oyogu", "泳ぐ"],
    detected: { word: "swim", language: "English" },
    translations: { en: { word: "swim", phonetic: "swim" }, nl: { word: "zwemmen", phonetic: "ZWEH-mun" }, ru: { word: "плавать", phonetic: "PLA-vat" }, zh: { word: "游泳", phonetic: "yóu yǒng" }, ja: { word: "泳ぐ", phonetic: "o-yo-gu" } },
    facts: ["Swimming happens in water.", "Learning to swim takes practice.", "Pools and beaches can be fun with grown-ups nearby."],
    art: "swim",
  },
  clock: {
    aliases: ["clock", "klok", "часы", "chasy", "钟", "zhong", "tokei", "時計"],
    detected: { word: "clock", language: "English" },
    translations: { en: { word: "clock", phonetic: "klok" }, nl: { word: "klok", phonetic: "klok" }, ru: { word: "часы", phonetic: "cha-SY" }, zh: { word: "钟", phonetic: "zhōng" }, ja: { word: "時計", phonetic: "to-kei" } },
    facts: ["Clocks show time.", "Some clocks tick.", "A clock can help with routines."],
    art: "clock",
  },
  key: {
    aliases: ["key", "sleutel", "ключ", "klyuch", "钥匙", "yaoshi", "kagi", "鍵"],
    detected: { word: "key", language: "English" },
    translations: { en: { word: "key", phonetic: "kee" }, nl: { word: "sleutel", phonetic: "SLUH-tul" }, ru: { word: "ключ", phonetic: "klyooch" }, zh: { word: "钥匙", phonetic: "yào shi" }, ja: { word: "鍵", phonetic: "ka-gi" } },
    facts: ["Keys can open locks.", "Keys are small but important.", "Some doors use cards instead of keys."],
    art: "key",
  },
  phone: {
    aliases: ["phone", "telefoon", "телефон", "telefon", "电话", "dianhua", "denwa", "電話"],
    detected: { word: "phone", language: "English" },
    translations: { en: { word: "phone", phonetic: "fohn" }, nl: { word: "telefoon", phonetic: "tay-luh-FOHN" }, ru: { word: "телефон", phonetic: "te-le-FON" }, zh: { word: "电话", phonetic: "diàn huà" }, ja: { word: "電話", phonetic: "den-wa" } },
    facts: ["Phones help people talk far away.", "Some phones take pictures.", "Video calls can connect families."],
    art: "phone",
  },
  toothbrush: {
    aliases: ["toothbrush", "tandenborstel", "зубная щётка", "zubnaya shchetka", "牙刷", "yashua", "haburashi", "歯ブラシ"],
    detected: { word: "toothbrush", language: "English" },
    translations: { en: { word: "toothbrush", phonetic: "TOOTH-brush" }, nl: { word: "tandenborstel", phonetic: "TAN-dun-bor-stul" }, ru: { word: "зубная щётка", phonetic: "ZOOB-na-ya SHCHOT-ka" }, zh: { word: "牙刷", phonetic: "yá shuā" }, ja: { word: "歯ブラシ", phonetic: "ha-bu-ra-shi" } },
    facts: ["A toothbrush cleans teeth.", "Brushing is part of morning and bedtime.", "Tiny brushes can fit tiny mouths."],
    art: "toothbrush",
  },
  love: {
    aliases: ["love", "liefde", "любовь", "lyubov", "爱", "ai", "ai", "愛"],
    detected: { word: "love", language: "English" },
    translations: { en: { word: "love", phonetic: "luv" }, nl: { word: "liefde", phonetic: "LEEF-duh" }, ru: { word: "любовь", phonetic: "lyoo-BOF" }, zh: { word: "爱", phonetic: "ài" }, ja: { word: "愛", phonetic: "ai" } },
    facts: ["Love is a warm feeling.", "Families show love in many ways.", "Kind words can show love too."],
    art: "love",
  },
  laugh: {
    aliases: ["laugh", "lachen", "смех", "smekh", "笑", "xiao", "warau", "笑う"],
    detected: { word: "laugh", language: "English" },
    translations: { en: { word: "laugh", phonetic: "laf" }, nl: { word: "lachen", phonetic: "LAH-khun" }, ru: { word: "смех", phonetic: "smekh" }, zh: { word: "笑", phonetic: "xiào" }, ja: { word: "笑う", phonetic: "wa-ra-u" } },
    facts: ["Laughing can happen during play.", "A joke can make people laugh.", "Laughter sounds different from person to person."],
    art: "laugh",
  },
  angry: {
    aliases: ["angry", "boos", "злой", "zloy", "生气", "shengqi", "okoru", "怒る"],
    detected: { word: "angry", language: "English" },
    translations: { en: { word: "angry", phonetic: "ANG-gree" }, nl: { word: "boos", phonetic: "bohs" }, ru: { word: "злой", phonetic: "zloy" }, zh: { word: "生气", phonetic: "shēng qì" }, ja: { word: "怒る", phonetic: "o-ko-ru" } },
    facts: ["Angry is a strong feeling.", "Taking breaths can help.", "Words help explain why we feel angry."],
    art: "angry",
  },
  surprised: {
    aliases: ["surprised", "verrast", "удивлённый", "udivlenny", "惊讶", "jingya", "odoroku", "驚く"],
    detected: { word: "surprised", language: "English" },
    translations: { en: { word: "surprised", phonetic: "sur-PRYZD" }, nl: { word: "verrast", phonetic: "ver-RAST" }, ru: { word: "удивлённый", phonetic: "oo-deev-LYON-ny" }, zh: { word: "惊讶", phonetic: "jīng yà" }, ja: { word: "驚く", phonetic: "o-do-ro-ku" } },
    facts: ["Surprise can feel exciting.", "A surprise can make eyes open wide.", "Some surprises are tiny and some are big."],
    art: "surprised",
  },
  lion: {
    aliases: ["lion", "leeuw", "лев", "lev", "狮子", "shizi", "raion", "ライオン"],
    detected: { word: "lion", language: "English" },
    translations: { en: { word: "lion", phonetic: "LY-un" }, nl: { word: "leeuw", phonetic: "layw" }, ru: { word: "лев", phonetic: "lyef" }, zh: { word: "狮子", phonetic: "shī zi" }, ja: { word: "ライオン", phonetic: "ra-i-on" } },
    facts: ["Lions are big cats.", "A lion's mane can look fluffy.", "Lions make loud roars."],
    art: "lion",
  },
  turtle: {
    aliases: ["turtle", "schildpad", "черепаха", "cherepakha", "乌龟", "wugui", "kame", "亀"],
    detected: { word: "turtle", language: "English" },
    translations: { en: { word: "turtle", phonetic: "TUR-tul" }, nl: { word: "schildpad", phonetic: "SKHILT-paht" }, ru: { word: "черепаха", phonetic: "che-re-PA-kha" }, zh: { word: "乌龟", phonetic: "wū guī" }, ja: { word: "亀", phonetic: "ka-me" } },
    facts: ["Turtles have shells.", "Some turtles live in water.", "Turtles move slowly on land."],
    art: "turtle",
  },
  frog: {
    aliases: ["frog", "kikker", "лягушка", "lyagushka", "青蛙", "qingwa", "kaeru", "蛙"],
    detected: { word: "frog", language: "English" },
    translations: { en: { word: "frog", phonetic: "frog" }, nl: { word: "kikker", phonetic: "KIK-er" }, ru: { word: "лягушка", phonetic: "lya-GOOSH-ka" }, zh: { word: "青蛙", phonetic: "qīng wā" }, ja: { word: "蛙", phonetic: "ka-e-ru" } },
    facts: ["Frogs can jump far.", "Frogs begin life as tadpoles.", "Many frogs like wet places."],
    art: "frog",
  },
  mushroom: {
    aliases: ["mushroom", "paddenstoel", "гриб", "grib", "蘑菇", "mogu", "kinoko", "きのこ"],
    detected: { word: "mushroom", language: "English" },
    translations: { en: { word: "mushroom", phonetic: "MUSH-room" }, nl: { word: "paddenstoel", phonetic: "PAH-dun-stool" }, ru: { word: "гриб", phonetic: "greep" }, zh: { word: "蘑菇", phonetic: "mó gu" }, ja: { word: "きのこ", phonetic: "ki-no-ko" } },
    facts: ["Mushrooms can grow after rain.", "Some mushrooms are safe to eat and some are not.", "Mushrooms come in many shapes."],
    art: "mushroom",
  },
  cookie: {
    aliases: ["cookie", "koekje", "печенье", "pechenye", "饼干", "binggan", "kukkii", "クッキー"],
    detected: { word: "cookie", language: "English" },
    translations: { en: { word: "cookie", phonetic: "KOO-kee" }, nl: { word: "koekje", phonetic: "KOOK-yuh" }, ru: { word: "печенье", phonetic: "pe-CHEN-ye" }, zh: { word: "饼干", phonetic: "bǐng gān" }, ja: { word: "クッキー", phonetic: "kuk-kii" } },
    facts: ["Cookies can be crunchy or soft.", "Some cookies have chocolate chips.", "Cookies are often shared as treats."],
    art: "cookie",
  },
  iceCream: {
    aliases: ["ice cream", "ijs", "мороженое", "morozhenoe", "冰淇淋", "bingqilin", "aisu", "アイス"],
    detected: { word: "ice cream", language: "English" },
    translations: { en: { word: "ice cream", phonetic: "ICE-kreem" }, nl: { word: "ijs", phonetic: "ice" }, ru: { word: "мороженое", phonetic: "ma-RO-zhe-na-ye" }, zh: { word: "冰淇淋", phonetic: "bīng qí lín" }, ja: { word: "アイス", phonetic: "ai-su" } },
    facts: ["Ice cream is cold and sweet.", "It can melt quickly.", "Many families choose favorite flavors."],
    art: "iceCream",
  },
  noodles: {
    aliases: ["noodles", "noedels", "лапша", "lapsha", "面条", "miantiao", "men", "麺"],
    detected: { word: "noodles", language: "English" },
    translations: { en: { word: "noodles", phonetic: "NOO-dulz" }, nl: { word: "noedels", phonetic: "NOO-duls" }, ru: { word: "лапша", phonetic: "lap-SHA" }, zh: { word: "面条", phonetic: "miàn tiáo" }, ja: { word: "麺", phonetic: "men" } },
    facts: ["Noodles can be long and wiggly.", "They are eaten in soups and bowls.", "Chopsticks can pick up noodles."],
    art: "noodles",
  },
  pizza: {
    aliases: ["pizza", "пицца", "pitsa", "披萨", "pisa", "piza", "ピザ"],
    detected: { word: "pizza", language: "English" },
    translations: { en: { word: "pizza", phonetic: "PEET-sa" }, nl: { word: "pizza", phonetic: "PEET-sa" }, ru: { word: "пицца", phonetic: "PEET-sa" }, zh: { word: "披萨", phonetic: "pī sà" }, ja: { word: "ピザ", phonetic: "pi-za" } },
    facts: ["Pizza can have many toppings.", "Pizza is often cut into slices.", "Families can make pizza together."],
    art: "pizza",
  },
  boat: {
    aliases: ["boat", "boot", "лодка", "lodka", "船", "chuan", "fune", "船"],
    detected: { word: "boat", language: "English" },
    translations: { en: { word: "boat", phonetic: "boht" }, nl: { word: "boot", phonetic: "boht" }, ru: { word: "лодка", phonetic: "LOT-ka" }, zh: { word: "船", phonetic: "chuán" }, ja: { word: "船", phonetic: "fu-ne" } },
    facts: ["Boats move on water.", "Some boats have sails.", "A small boat can float on a lake."],
    art: "boat",
  },
  rocket: {
    aliases: ["rocket", "raket", "ракета", "raketa", "火箭", "huojian", "roketto", "ロケット"],
    detected: { word: "rocket", language: "English" },
    translations: { en: { word: "rocket", phonetic: "ROK-it" }, nl: { word: "raket", phonetic: "ra-KET" }, ru: { word: "ракета", phonetic: "ra-KYE-ta" }, zh: { word: "火箭", phonetic: "huǒ jiàn" }, ja: { word: "ロケット", phonetic: "ro-ket-to" } },
    facts: ["Rockets can fly into space.", "Rocket launches are very loud.", "Astronauts ride rockets."],
    art: "rocket",
  },
  castle: {
    aliases: ["castle", "kasteel", "замок", "zamok", "城堡", "chengbao", "shiro", "城"],
    detected: { word: "castle", language: "English" },
    translations: { en: { word: "castle", phonetic: "KAS-ul" }, nl: { word: "kasteel", phonetic: "ka-STAYL" }, ru: { word: "замок", phonetic: "ZA-mok" }, zh: { word: "城堡", phonetic: "chéng bǎo" }, ja: { word: "城", phonetic: "shi-ro" } },
    facts: ["Castles can have towers.", "Some castles are very old.", "Stories often include castles."],
    art: "castle",
  },
  camping: {
    aliases: ["camping", "kamperen", "кемпинг", "kemping", "露营", "luying", "kyanpu", "キャンプ"],
    detected: { word: "camping", language: "English" },
    translations: { en: { word: "camping", phonetic: "KAM-ping" }, nl: { word: "kamperen", phonetic: "KAM-puh-run" }, ru: { word: "кемпинг", phonetic: "KEM-ping" }, zh: { word: "露营", phonetic: "lù yíng" }, ja: { word: "キャンプ", phonetic: "kyan-pu" } },
    facts: ["Camping means sleeping outdoors.", "A tent can be a tiny home.", "Camping nights can be full of stars."],
    art: "camping",
  },
  dance: {
    aliases: ["dance", "dansen", "танцевать", "tantsevat", "跳舞", "tiaowu", "odoru", "踊る"],
    detected: { word: "dance", language: "English" },
    translations: { en: { word: "dance", phonetic: "dans" }, nl: { word: "dansen", phonetic: "DAN-sun" }, ru: { word: "танцевать", phonetic: "tan-tse-VAT" }, zh: { word: "跳舞", phonetic: "tiào wǔ" }, ja: { word: "踊る", phonetic: "o-do-ru" } },
    facts: ["Dancing moves with music.", "People dance at celebrations.", "Dancing can be silly or graceful."],
    art: "dance",
  },
  soccer: {
    aliases: ["soccer", "voetbal", "футбол", "futbol", "足球", "zuqiu", "sakkaa", "サッカー"],
    detected: { word: "soccer", language: "English" },
    translations: { en: { word: "soccer", phonetic: "SAH-ker" }, nl: { word: "voetbal", phonetic: "FOOT-bal" }, ru: { word: "футбол", phonetic: "foot-BOL" }, zh: { word: "足球", phonetic: "zú qiú" }, ja: { word: "サッカー", phonetic: "sak-kaa" } },
    facts: ["Soccer uses a ball.", "Players kick the ball with their feet.", "Many children play soccer outside."],
    art: "soccer",
  },
  medal: {
    aliases: ["medal", "medaille", "медаль", "medal", "奖牌", "jiangpai", "medaru", "メダル"],
    detected: { word: "medal", language: "English" },
    translations: { en: { word: "medal", phonetic: "MEH-dul" }, nl: { word: "medaille", phonetic: "meh-DAI-yuh" }, ru: { word: "медаль", phonetic: "me-DAL" }, zh: { word: "奖牌", phonetic: "jiǎng pái" }, ja: { word: "メダル", phonetic: "me-da-ru" } },
    facts: ["A medal can celebrate effort.", "Medals can be gold, silver, or bronze.", "Winning is nice, but trying matters too."],
    art: "medal",
  },
  camera: {
    aliases: ["camera", "camera", "камера", "kamera", "相机", "xiangji", "kamera", "カメラ"],
    detected: { word: "camera", language: "English" },
    translations: { en: { word: "camera", phonetic: "KAM-ruh" }, nl: { word: "camera", phonetic: "KA-muh-ra" }, ru: { word: "камера", phonetic: "KA-me-ra" }, zh: { word: "相机", phonetic: "xiàng jī" }, ja: { word: "カメラ", phonetic: "ka-me-ra" } },
    facts: ["Cameras take pictures.", "Pictures help remember moments.", "Some cameras are inside phones."],
    art: "camera",
  },
  scissors: {
    aliases: ["scissors", "schaar", "ножницы", "nozhnitsy", "剪刀", "jiandao", "hasami", "はさみ"],
    detected: { word: "scissors", language: "English" },
    translations: { en: { word: "scissors", phonetic: "SIH-zurz" }, nl: { word: "schaar", phonetic: "skhaar" }, ru: { word: "ножницы", phonetic: "NOZH-ni-tsy" }, zh: { word: "剪刀", phonetic: "jiǎn dāo" }, ja: { word: "はさみ", phonetic: "ha-sa-mi" } },
    facts: ["Scissors cut paper.", "Children use safety scissors.", "Scissors open and close."],
    art: "scissors",
  },
  umbrella: {
    aliases: ["umbrella", "paraplu", "зонт", "zont", "雨伞", "yusan", "kasa", "傘"],
    detected: { word: "umbrella", language: "English" },
    translations: { en: { word: "umbrella", phonetic: "um-BREL-uh" }, nl: { word: "paraplu", phonetic: "pa-ra-PLUU" }, ru: { word: "зонт", phonetic: "zont" }, zh: { word: "雨伞", phonetic: "yǔ sǎn" }, ja: { word: "傘", phonetic: "ka-sa" } },
    facts: ["Umbrellas help keep rain off.", "Some umbrellas fold up small.", "Umbrellas can be very colorful."],
    art: "umbrella",
  },
  teddy: {
    aliases: ["teddy", "knuffelbeer", "плюшевый мишка", "mishka", "泰迪熊", "taidixiong", "nuigurumi", "ぬいぐるみ"],
    detected: { word: "teddy", language: "English" },
    translations: { en: { word: "teddy", phonetic: "TEH-dee" }, nl: { word: "knuffelbeer", phonetic: "KNUF-ul-bayr" }, ru: { word: "мишка", phonetic: "MEESH-ka" }, zh: { word: "泰迪熊", phonetic: "tài dí xióng" }, ja: { word: "ぬいぐるみ", phonetic: "nu-i-gu-ru-mi" } },
    facts: ["A teddy can be a cozy toy.", "Many children sleep with a soft toy.", "Stuffed toys can join pretend stories."],
    art: "teddy",
  },
  robot: {
    aliases: ["robot", "робот", "机器人", "jiqiren", "robotto", "ロボット"],
    detected: { word: "robot", language: "English" },
    translations: { en: { word: "robot", phonetic: "ROH-bot" }, nl: { word: "robot", phonetic: "ROH-bot" }, ru: { word: "робот", phonetic: "RO-bot" }, zh: { word: "机器人", phonetic: "jī qì rén" }, ja: { word: "ロボット", phonetic: "ro-bot-to" } },
    facts: ["Robots can be real or pretend.", "Some robots help people work.", "Toy robots are fun in stories."],
    art: "robot",
  },
  scarf: {
    aliases: ["scarf", "sjaal", "шарф", "sharf", "围巾", "weijin", "mafuraa", "マフラー"],
    detected: { word: "scarf", language: "English" },
    translations: { en: { word: "scarf", phonetic: "skarf" }, nl: { word: "sjaal", phonetic: "shahl" }, ru: { word: "шарф", phonetic: "sharf" }, zh: { word: "围巾", phonetic: "wéi jīn" }, ja: { word: "マフラー", phonetic: "ma-fu-raa" } },
    facts: ["A scarf is worn around the neck.", "Scarves can help keep people warm.", "Scarves come in many colors."],
    art: "scarf",
  },
  ice: {
    aliases: ["ice", "ijs", "лёд", "led", "冰", "bing", "koori", "氷"],
    detected: { word: "ice", language: "English" },
    translations: { en: { word: "ice", phonetic: "ice" }, nl: { word: "ijs", phonetic: "ice" }, ru: { word: "лёд", phonetic: "lyot" }, zh: { word: "冰", phonetic: "bīng" }, ja: { word: "氷", phonetic: "koo-ree" } },
    facts: ["Ice is frozen water.", "Ice feels cold.", "Ice cubes can melt into water."],
    art: "ice",
  },
  snowman: {
    aliases: ["snowman", "sneeuwpop", "снеговик", "snegovik", "雪人", "xueren", "yukidaruma", "雪だるま"],
    detected: { word: "snowman", language: "English" },
    translations: { en: { word: "snowman", phonetic: "SNOH-man" }, nl: { word: "sneeuwpop", phonetic: "SNAYW-pop" }, ru: { word: "снеговик", phonetic: "sne-ga-VEEK" }, zh: { word: "雪人", phonetic: "xuě rén" }, ja: { word: "雪だるま", phonetic: "yu-ki-da-ru-ma" } },
    facts: ["A snowman is made from snow.", "Snowmen often have round snowballs for a body.", "Some snowmen have carrot noses."],
    art: "snowman",
  },
  quiet: {
    aliases: ["quiet", "stil", "тихий", "tikhiy", "安静", "anjing", "shizuka", "静か"],
    detected: { word: "quiet", language: "English" },
    translations: { en: { word: "quiet", phonetic: "KWY-et" }, nl: { word: "stil", phonetic: "stil" }, ru: { word: "тихий", phonetic: "TEE-khiy" }, zh: { word: "安静", phonetic: "ān jìng" }, ja: { word: "静か", phonetic: "shi-zu-ka" } },
    facts: ["Quiet can help people rest.", "Libraries are often quiet.", "Quiet moments can feel peaceful."],
    art: "quiet",
  },
  park: {
    aliases: ["park", "парк", "公园", "gongyuan", "kouen", "公園"],
    detected: { word: "park", language: "English" },
    translations: { en: { word: "park", phonetic: "park" }, nl: { word: "park", phonetic: "park" }, ru: { word: "парк", phonetic: "park" }, zh: { word: "公园", phonetic: "gōng yuán" }, ja: { word: "公園", phonetic: "koh-en" } },
    facts: ["A park is a place to play outside.", "Parks can have trees and paths.", "Families often walk in parks."],
    art: "park",
  },
  playground: {
    aliases: ["playground", "speeltuin", "площадка", "ploshchadka", "游乐场", "youlechang", "yuuguujou", "遊具場"],
    detected: { word: "playground", language: "English" },
    translations: { en: { word: "playground", phonetic: "PLAY-ground" }, nl: { word: "speeltuin", phonetic: "SPAYL-town" }, ru: { word: "площадка", phonetic: "plosh-CHAD-ka" }, zh: { word: "游乐场", phonetic: "yóu lè chǎng" }, ja: { word: "遊び場", phonetic: "a-so-bi-ba" } },
    facts: ["Playgrounds are made for play.", "Slides and swings are common there.", "Children can practice climbing and balancing."],
    art: "playground",
  },
  soap: {
    aliases: ["soap", "zeep", "мыло", "mylo", "肥皂", "feizao", "sekken", "石鹸"],
    detected: { word: "soap", language: "English" },
    translations: { en: { word: "soap", phonetic: "sohp" }, nl: { word: "zeep", phonetic: "zayp" }, ru: { word: "мыло", phonetic: "MY-la" }, zh: { word: "肥皂", phonetic: "féi zào" }, ja: { word: "石鹸", phonetic: "sek-ken" } },
    facts: ["Soap helps clean hands.", "Soap can make bubbles.", "Handwashing is a healthy habit."],
    art: "soap",
  },
};

const selectedLanguages = new Set(["en", "nl", "ru", "zh", "ja"]);
const expandedVisualCategories = new Set(["emoji-animals"]);
const recognitionApi = window.SpeechRecognition || window.webkitSpeechRecognition;
const whisperEndpoint = "http://localhost:8787/transcribe";
const isLocalPrototype = ["", "localhost", "127.0.0.1"].includes(window.location.hostname);
const languageNames = {
  en: "English",
  nl: "Nederlands",
  ru: "русский",
  zh: "中文",
  ja: "日本語",
};
let availableVoices = [];
let currentResult = null;

const els = {
  languageGrid: document.querySelector("#language-grid"),
  languageCount: document.querySelector("#language-count"),
  textInputForm: document.querySelector("#text-input-form"),
  textWordInput: document.querySelector("#text-word-input"),
  textSubmitButton: document.querySelector("#text-submit-button"),
  listenButton: document.querySelector("#listen-button"),
  listenLabel: document.querySelector("#listen-label"),
  heardText: document.querySelector("#heard-text"),
  voiceOrb: document.querySelector("#voice-orb"),
  resultOverlay: document.querySelector("#result-overlay"),
  resultView: document.querySelector("#result-view"),
  closeResultButton: document.querySelector("#close-result-button"),
  expandResultButton: document.querySelector("#expand-result-button"),
  loadingScene: document.querySelector("#loading-scene"),
  loadingText: document.querySelector("#loading-text"),
  resultTitle: document.querySelector("#result-title"),
  detectedLine: document.querySelector("#detected-line"),
  confidencePill: document.querySelector("#confidence-pill"),
  wordArt: document.querySelector("#word-art"),
  factsList: document.querySelector("#facts-list"),
  translationList: document.querySelector("#translation-list"),
};

function renderLanguages() {
  els.languageGrid.innerHTML = languages
    .map((language) => {
      const isSelected = selectedLanguages.has(language.id);
      return `
        <button class="language-tile" type="button" data-language="${language.id}" aria-pressed="${isSelected}">
          <span class="language-name">
            <span class="flag-dot" style="background:${language.color}"></span>
            <span>${language.name}</span>
          </span>
          <span class="check-mark" aria-hidden="true">${isSelected ? "✓" : "+"}</span>
        </button>
      `;
    })
    .join("");
  els.languageCount.textContent = `${selectedLanguages.size} selected`;
}

function renderQuickWords() {
  document.querySelector(".quick-tries").innerHTML = emojiCategories
    .map((category) => {
      const isExpanded = expandedVisualCategories.has(category.id);
      return `
        <section class="emoji-category" aria-labelledby="${category.id}-heading">
          <h3 id="${category.id}-heading">
            <button
              class="emoji-category-toggle"
              type="button"
              data-category="${category.id}"
              aria-expanded="${isExpanded}"
              aria-controls="${category.id}-grid"
            >
              <span>${category.name}</span>
              <span class="category-chevron" aria-hidden="true">${isExpanded ? "⌄" : "›"}</span>
            </button>
          </h3>
          <div class="emoji-grid" id="${category.id}-grid"${isExpanded ? "" : " hidden"}>
            ${category.words
              .map((key) => {
                const entry = words[key];
                const label = entry.translations.en.word;
                return `<button type="button" data-key="${key}" aria-label="${label}" title="${label}">${artIcons[entry.art]}</button>`;
              })
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function normalizeWord(value) {
  return value.toLowerCase().trim().replace(/[.,!?]/g, "");
}

function findWord(input) {
  const normalized = normalizeWord(input);
  const activeWords = getActiveDictionaryEntries();
  const matches = activeWords
    .flatMap((entry) => entry.aliases.map((alias) => ({ entry, alias: normalizeWord(alias) })))
    .filter(({ alias }) => alias && normalized.includes(alias))
    .sort((first, second) => second.alias.length - first.alias.length);
  return matches[0]?.entry || words.apple;
}

function getActiveDictionaryEntries() {
  return emojiCategories.flatMap((category) => category.words.map((key) => words[key]));
}

function showLoading(message) {
  els.loadingText.textContent = message;
  els.resultOverlay.classList.remove("is-hidden");
  els.resultView.classList.add("is-hidden");
  els.loadingScene.classList.remove("is-hidden");
}

function hideLoading() {
  els.loadingScene.classList.add("is-hidden");
}

function closeResult() {
  els.resultOverlay.classList.add("is-hidden");
  els.resultOverlay.classList.remove("is-expanded");
  els.expandResultButton.setAttribute("aria-pressed", "false");
  els.expandResultButton.setAttribute("aria-label", "Expand result");
  els.expandResultButton.textContent = "⤢";
}

function toggleExpandedResult() {
  const isExpanded = els.resultOverlay.classList.toggle("is-expanded");
  els.expandResultButton.setAttribute("aria-pressed", String(isExpanded));
  els.expandResultButton.setAttribute("aria-label", isExpanded ? "Shrink result" : "Expand result");
  els.expandResultButton.textContent = isExpanded ? "⤡" : "⤢";
}

function speak(text, locale) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = locale;
  utterance.voice = pickVoice(locale);
  utterance.rate = locale.startsWith("en") ? 0.92 : 0.86;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function pickVoice(locale) {
  const voices = availableVoices.length ? availableVoices : window.speechSynthesis.getVoices();
  if (!voices.length) return null;

  if (locale.startsWith("en")) {
    const neutralEnglishNames = ["Samantha", "Alex", "Google US English", "Google UK English Female", "Microsoft Aria"];
    return (
      voices.find((voice) => neutralEnglishNames.some((name) => voice.name.includes(name))) ||
      voices.find((voice) => voice.lang === "en-US" && !/compact|novelty|premium/i.test(voice.name)) ||
      voices.find((voice) => voice.lang.startsWith("en") && !/compact|novelty/i.test(voice.name)) ||
      null
    );
  }

  return voices.find((voice) => voice.lang === locale) || voices.find((voice) => voice.lang.startsWith(locale.slice(0, 2))) || null;
}

function loadVoices() {
  if (!window.speechSynthesis) return;
  availableVoices = window.speechSynthesis.getVoices();
}

function renderResult(entry, heard = entry.detected.word, sourceLanguage = entry.detected.language) {
  currentResult = { entry, heard, sourceLanguage };
  els.resultOverlay.classList.remove("is-hidden");
  els.resultView.classList.remove("is-hidden");
  els.resultTitle.textContent = capitalize(entry.translations.en.word);
  els.detectedLine.textContent = `Recognized “${heard}” from ${sourceLanguage}`;
  els.confidencePill.textContent = `${94 + Math.floor(Math.random() * 5)}%`;
  els.wordArt.setAttribute("aria-label", `Illustration of ${entry.translations.en.word}`);
  els.wordArt.innerHTML = symbolArt(entry.art);

  els.factsList.innerHTML = entry.facts.map((fact) => `<li><span aria-hidden="true">•</span><span>${fact}</span></li>`).join("");

  const selected = languages.filter((language) => selectedLanguages.has(language.id));
  els.translationList.innerHTML = selected
    .map((language) => {
      const translation = entry.translations[language.id];
      return `
        <div class="translation-row">
          <div>
            <div class="translation-word">
              <strong>${translation.word}</strong>
              <span>${language.name}</span>
            </div>
            <div class="phonetic">${translation.phonetic}</div>
          </div>
          <button class="sound-button" type="button" data-speak="${translation.word}" data-locale="${language.locale}" aria-label="Hear ${translation.word} in ${language.name}">▶</button>
        </div>
      `;
    })
    .join("");
}

function handleWord(input, sourceLanguage) {
  const entry = findWord(input);
  els.heardText.textContent = `Looking up “${input}” across your family languages...`;
  showLoading("Mixing sounds, scripts, and a tiny picture...");
  window.setTimeout(() => {
    hideLoading();
    renderResult(entry, input, sourceLanguage || entry.detected.language);
  }, 1150);
}

function handleTextWord(input) {
  const entry = findWord(input);
  els.heardText.textContent = `Looking up “${input}” across your family languages...`;
  showLoading("Reading the word across your family languages...");
  window.setTimeout(() => {
    hideLoading();
    renderResult(entry, input, "text input");
  }, 650);
}

function handleVisualWord(key) {
  const entry = words[key];
  if (!entry) return;
  const label = entry.translations.en.word;
  els.heardText.textContent = `Looking up “${label}” across your family languages...`;
  showLoading("Reading the picture across your family languages...");
  window.setTimeout(() => {
    hideLoading();
    renderResult(entry, label, "visual input");
  }, 650);
}

async function listen() {
  if (!isLocalPrototype) {
    els.listenLabel.textContent = "Voice is local only";
    els.heardText.textContent = "The shared web version can use typing and emoji picking. Whisper voice input runs only on the local prototype.";
    return;
  }

  if (navigator.mediaDevices?.getUserMedia && window.MediaRecorder) {
    await listenWithWhisper();
    return;
  }
  listenWithBrowserRecognition();
}

async function listenWithWhisper() {
  let stream;
  try {
    els.listenLabel.textContent = "Listening...";
    els.heardText.textContent = "Speak one word now.";
    els.voiceOrb.classList.add("is-listening");
    showLoading("Recording a short word for Whisper...");
    els.listenButton.disabled = true;

    stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioBlob = await recordWav(stream, 2600);

    showLoading("Whisper is listening across your family languages...");
    const result = await transcribeWithWhisper(audioBlob);
    const transcript = result.text?.trim();

    if (!transcript) {
      els.listenLabel.textContent = "Try again";
      els.heardText.textContent = "Whisper did not catch a word. Try a little closer to the microphone.";
      hideLoading();
      closeResult();
      return;
    }

    const sourceLanguage = languageNames[result.language] || result.language || "Whisper";
    els.listenLabel.textContent = "Word found";
    handleWord(transcript, sourceLanguage);
  } catch (error) {
    console.warn(error);
    els.listenLabel.textContent = "Whisper not ready";
    els.heardText.textContent = `Could not reach local Whisper. Start the backend, then open http://localhost:4173. (${error.message})`;
    hideLoading();
    closeResult();
  } finally {
    els.voiceOrb.classList.remove("is-listening");
    els.listenButton.disabled = false;
    stream?.getTracks().forEach((track) => track.stop());
  }
}

async function transcribeWithWhisper(audioBlob) {
  const formData = new FormData();
  formData.append("audio", audioBlob, "word.wav");

  const response = await fetch(whisperEndpoint, {
    method: "POST",
    body: formData,
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || "Whisper transcription failed.");
  }
  return payload;
}

function listenWithBrowserRecognition() {
  if (!recognitionApi) {
    handleWord("apple");
    return;
  }

  const recognition = new recognitionApi();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  els.listenLabel.textContent = "Listening...";
  els.voiceOrb.classList.add("is-listening");
  showLoading("Listening for the family word...");

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    els.listenLabel.textContent = "Word found";
    els.voiceOrb.classList.remove("is-listening");
    handleWord(transcript);
  };

  recognition.onerror = () => {
    els.listenLabel.textContent = "Tap a word to try";
    els.voiceOrb.classList.remove("is-listening");
    hideLoading();
    closeResult();
    els.heardText.textContent = "Voice recognition is resting here. Try one of the word buttons.";
  };

  recognition.onend = () => {
    els.voiceOrb.classList.remove("is-listening");
  };

  recognition.start();
}

async function recordWav(stream, durationMs) {
  const audioContext = new AudioContext();
  const source = audioContext.createMediaStreamSource(stream);
  const processor = audioContext.createScriptProcessor(4096, 1, 1);
  const chunks = [];

  processor.onaudioprocess = (event) => {
    chunks.push(new Float32Array(event.inputBuffer.getChannelData(0)));
  };

  source.connect(processor);
  processor.connect(audioContext.destination);
  await wait(durationMs);
  processor.disconnect();
  source.disconnect();
  await audioContext.close();

  return encodeWav(chunks, audioContext.sampleRate);
}

function encodeWav(chunks, sampleRate) {
  const length = chunks.reduce((total, chunk) => total + chunk.length, 0);
  const samples = new Float32Array(length);
  let offset = 0;
  chunks.forEach((chunk) => {
    samples.set(chunk, offset);
    offset += chunk.length;
  });

  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  writeString(view, 0, "RIFF");
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, "data");
  view.setUint32(40, samples.length * 2, true);

  let byteOffset = 44;
  for (const sample of samples) {
    const clamped = Math.max(-1, Math.min(1, sample));
    view.setInt16(byteOffset, clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff, true);
    byteOffset += 2;
  }

  return new Blob([view], { type: "audio/wav" });
}

function writeString(view, offset, string) {
  for (let index = 0; index < string.length; index += 1) {
    view.setUint8(offset + index, string.charCodeAt(index));
  }
}

function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const artIcons = {
  apple: "🍎",
  fruit: "🍌",
  dog: "🐶",
  cat: "🐱",
  bird: "🐦",
  moon: "🌙",
  water: "💧",
  sun: "☀️",
  star: "⭐",
  tree: "🌳",
  flower: "🌸",
  bread: "🍞",
  cheese: "🧀",
  egg: "🥚",
  rice: "🍚",
  soup: "🍲",
  fish: "🐟",
  rabbit: "🐰",
  bear: "🐻",
  rain: "🌧️",
  snow: "❄️",
  cloud: "☁️",
  sea: "🌊",
  mountain: "⛰️",
  hand: "✋",
  eye: "👁️",
  shoe: "👟",
  hat: "🧢",
  book: "📖",
  basketball: "🏀",
  car: "🚗",
  train: "🚆",
  house: "🏠",
  bed: "🛏️",
  chair: "🪑",
  plate: "🍽️",
  door: "🚪",
  window: "🪟",
  lamp: "💡",
  doll: "🪆",
  blocks: "🧱",
  kite: "🪁",
  pencil: "✏️",
  bag: "🎒",
  mother: "👩",
  father: "👨",
  happy: "😊",
  sad: "😢",
  sleep: "💤",
  jump: "🤸",
  cow: "🐄",
  butterfly: "🦋",
  fire: "🔥",
  rainbow: "🌈",
  strawberry: "🍓",
  carrot: "🥕",
  cake: "🍰",
  juice: "🧃",
  bus: "🚌",
  bicycle: "🚲",
  airplane: "✈️",
  school: "🏫",
  music: "🎵",
  painting: "🎨",
  game: "🎲",
  swim: "🏊",
  clock: "🕒",
  key: "🔑",
  phone: "📱",
  toothbrush: "🪥",
  love: "❤️",
  laugh: "😄",
  angry: "😠",
  surprised: "😮",
  lion: "🦁",
  turtle: "🐢",
  frog: "🐸",
  mushroom: "🍄",
  cookie: "🍪",
  iceCream: "🍦",
  noodles: "🍜",
  pizza: "🍕",
  boat: "⛵",
  rocket: "🚀",
  castle: "🏰",
  camping: "⛺",
  dance: "💃",
  soccer: "⚽",
  medal: "🏅",
  camera: "📷",
  scissors: "✂️",
  umbrella: "☂️",
  teddy: "🧸",
  robot: "🤖",
  scarf: "🧣",
  ice: "🧊",
  snowman: "☃️",
  quiet: "🤫",
  park: "🏞️",
  playground: "🛝",
  soap: "🧼",
};

const animalItems = [
  [1, "🐶", "Dog", "Hond", "狗", "Собака", "犬", "inu"],
  [2, "🐱", "Cat", "Kat", "猫", "Кошка", "猫", "neko"],
  [3, "🐹", "Hamster", "Hamster", "仓鼠", "Хомяк", "ハムスター", "hamusutaa"],
  [4, "🐰", "Rabbit", "Konijn", "兔子", "Кролик", "うさぎ", "usagi"],
  [5, "🦊", "Fox", "Vos", "狐狸", "Лиса", "キツネ", "kitsune"],
  [6, "🐻", "Bear", "Beer", "熊", "Медведь", "熊", "kuma"],
  [7, "🐼", "Panda", "Panda", "熊猫", "Панда", "パンダ", "panda"],
  [8, "🐻‍❄️", "Polar bear", "IJsbeer", "北极熊", "Белый медведь", "シロクマ", "shirokuma"],
  [9, "🐨", "Koala", "Koala", "考拉", "Коала", "コアラ", "koara"],
  [10, "🐯", "Tiger", "Tijger", "老虎", "Тигр", "トラ", "tora"],
  [11, "🦁", "Lion", "Leeuw", "狮子", "Лев", "ライオン", "raion"],
  [12, "🐮", "Cow", "Koe", "牛", "Корова", "牛", "ushi"],
  [13, "🐷", "Pig", "Varken", "猪", "Свинья", "豚", "buta"],
  [14, "🐸", "Frog", "Kikker", "青蛙", "Лягушка", "カエル", "kaeru"],
  [15, "🐵", "Monkey", "Aap", "猴子", "Обезьяна", "猿", "saru"],
  [16, "🐔", "Chicken", "Kip", "鸡", "Курица", "鶏", "niwatori"],
  [17, "🐧", "Penguin", "Pinguïn", "企鹅", "Пингвин", "ペンギン", "pengin"],
  [18, "🐦", "Bird", "Vogel", "鸟", "Птица", "鳥", "tori"],
  [19, "🐦‍⬛", "Crow", "Kraai", "乌鸦", "Ворона", "カラス", "karasu"],
  [20, "🐤", "Chick", "Kuiken", "小鸡", "Цыплёнок", "ひよこ", "hiyoko"],
  [21, "🦆", "Duck", "Eend", "鸭子", "Утка", "アヒル", "ahiru"],
  [22, "🦅", "Eagle", "Adelaar", "鹰", "Орёл", "ワシ", "washi"],
  [23, "🦉", "Owl", "Uil", "猫头鹰", "Сова", "フクロウ", "fukurou"],
  [24, "🦇", "Bat", "Vleermuis", "蝙蝠", "Летучая мышь", "コウモリ", "koumori"],
  [25, "🐺", "Wolf", "Wolf", "狼", "Волк", "オオカミ", "ookami"],
  [26, "🐗", "Boar", "Everzwijn", "野猪", "Кабан", "イノシシ", "inoshishi"],
  [27, "🐴", "Horse", "Paard", "马", "Лошадь", "馬", "uma"],
  [28, "🦄", "Unicorn", "Eenhoorn", "独角兽", "Единорог", "ユニコーン", "yunikoon"],
  [29, "🐝", "Bee", "Bij", "蜜蜂", "Пчела", "蜂", "hachi"],
  [30, "🪱", "Worm", "Worm", "虫", "Червь", "ミミズ", "mimizu"],
  [31, "🐛", "Bug", "Insect", "虫子", "Жук", "虫", "mushi"],
  [32, "🦋", "Butterfly", "Vlinder", "蝴蝶", "Бабочка", "蝶", "chou"],
  [33, "🐌", "Snail", "Slak", "蜗牛", "Улитка", "カタツムリ", "katatsumuri"],
  [34, "🐞", "Ladybug", "Lieveheersbeestje", "瓢虫", "Божья коровка", "テントウムシ", "tentoumushi"],
  [35, "🐜", "Ant", "Mier", "蚂蚁", "Муравей", "アリ", "ari"],
  [36, "🪰", "Fly", "Vlieg", "苍蝇", "Муха", "ハエ", "hae"],
  [37, "🪲", "Beetle", "Keerkever", "甲虫", "Жук", "甲虫", "kouchuu"],
  [38, "🪳", "Cockroach", "Kakkerlak", "蟑螂", "Таракан", "ゴキブリ", "gokiburi"],
  [39, "🦟", "Mosquito", "Mug", "蚊子", "Комар", "蚊", "ka"],
  [40, "🦗", "Grasshopper", "Sprinkhaan", "蚱蜢", "Кузнечик", "バッタ", "batta"],
  [41, "🕷", "Spider", "Spin", "蜘蛛", "Паук", "クモ", "kumo"],
  [42, "🦂", "Scorpion", "Schorpioen", "蝎子", "Скорпион", "サソリ", "sasori"],
  [43, "🐢", "Turtle", "Schildpad", "乌龟", "Черепаха", "亀", "kame"],
  [44, "🐍", "Snake", "Slang", "蛇", "Змея", "ヘビ", "hebi"],
  [45, "🦎", "Lizard", "Hagedis", "蜥蜴", "Ящерица", "トカゲ", "tokage"],
  [46, "🦖", "Dinosaur", "Dinosaurus", "恐龙", "Динозавр", "恐竜", "kyouryuu"],
  [47, "🐙", "Octopus", "Octopus", "章鱼", "Осьминог", "タコ", "tako"],
  [48, "🦑", "Squid", "Inktvis", "鱿鱼", "Кальмар", "イカ", "ika"],
  [49, "🦐", "Shrimp", "Garnaal", "虾", "Креветка", "エビ", "ebi"],
  [50, "🐉", "Dragon", "Draak", "龙", "Дракон", "龍", "ryuu"],
  [51, "🦞", "Lobster", "Kreeft", "龙虾", "Омар", "ロブスター", "robusutaa"],
  [52, "🦀", "Crab", "Krab", "螃蟹", "Краб", "カニ", "kani"],
  [53, "🪼", "Jellyfish", "Kwal", "水母", "Медуза", "クラゲ", "kurage"],
  [54, "🪸", "Coral", "Koraal", "珊瑚", "Коралл", "サンゴ", "sango"],
  [55, "🐡", "Puffer fish", "Kogelvis", "河豚", "Иглобрюх", "フグ", "fugu"],
  [56, "🐠", "Tropical fish", "Tropische vis", "热带鱼", "Тропическая рыба", "熱帯魚", "nettaigyo"],
  [57, "🐟", "Fish", "Vis", "鱼", "Рыба", "魚", "sakana"],
  [58, "🐬", "Dolphin", "Dolfijn", "海豚", "Дельфин", "イルカ", "iruka"],
  [59, "🐳", "Whale", "Walvis", "鲸鱼", "Кит", "クジラ", "kujira"],
  [60, "🦈", "Shark", "Haai", "鲨鱼", "Акула", "サメ", "same"],
  [61, "🐊", "Crocodile", "Krokodil", "鳄鱼", "Крокодил", "ワニ", "wani"],
  [62, "🐆", "Leopard", "Luipaard", "豹子", "Леопард", "ヒョウ", "hyou"],
  [63, "🦓", "Zebra", "Zebra", "斑马", "Зебра", "シマウマ", "shimauma"],
  [64, "🫏", "Donkey", "Ezel", "驴", "Осёл", "ロバ", "roba"],
  [65, "🦍", "Gorilla", "Gorilla", "大猩猩", "Горилла", "ゴリラ", "gorira"],
  [66, "🦧", "Orangutan", "Orang-oetan", "猩猩", "Орангутан", "オランウータン", "oran uutan"],
  [67, "🦣", "Mammoth", "Mammoet", "猛犸象", "Мамонт", "マンモス", "manmosu"],
  [68, "🐘", "Elephant", "Olifant", "大象", "Слон", "象", "zou"],
  [69, "🦛", "Hippopotamus", "Nijlpaard", "河马", "Бегемот", "カバ", "kaba"],
  [70, "🦏", "Rhinoceros", "Neushoorn", "犀牛", "Носорог", "サイ", "sai"],
  [71, "🐫", "Camel", "Kameel", "骆驼", "Верблюд", "ラクダ", "rakuda"],
  [72, "🦒", "Giraffe", "Giraffe", "长颈鹿", "Жираф", "キリン", "kirin"],
  [73, "🦘", "Kangaroo", "Kangoeroe", "袋鼠", "Кенгуру", "カンガルー", "kangaruu"],
  [74, "🦬", "Bison", "Bizon", "野牛", "Бизон", "バイソン", "baison"],
  [75, "🐃", "Buffalo", "Buffel", "水牛", "Буйвол", "水牛", "suigyuu"],
  [76, "🐂", "Ox", "Os", "公牛", "Вол", "雄牛", "oushi"],
  [77, "🐑", "Sheep", "Schaap", "羊", "Овца", "羊", "hitsuji"],
  [78, "🦙", "Llama", "Lama", "羊驼", "Лама", "ラマ", "rama"],
  [79, "🐐", "Goat", "Geit", "山羊", "Коза", "ヤギ", "yagi"],
  [80, "🦌", "Deer", "Hert", "鹿", "Олень", "鹿", "shika"],
  [81, "🫎", "Moose", "Eland", "驼鹿", "Лось", "ヘラジカ", "herajika"],
  [82, "🐓", "Rooster", "Haan", "公鸡", "Петух", "雄鶏", "ondori"],
  [83, "🦃", "Turkey", "Kalkoen", "火鸡", "Индейка", "七面鳥", "shichimenchou"],
  [84, "🦤", "Dodo", "Dodo", "渡渡鸟", "Додо", "ドードー", "doodoo"],
  [85, "🦚", "Peacock", "Pauw", "孔雀", "Павлин", "クジャク", "kujaku"],
  [86, "🦜", "Parrot", "Papegaai", "鹦鹉", "Попугай", "オウム", "oumu"],
  [87, "🦢", "Swan", "Zwaan", "天鹅", "Лебедь", "白鳥", "hakuchou"],
  [88, "🪿", "Goose", "Gans", "鹅", "Гусь", "ガチョウ", "gachou"],
  [89, "🦩", "Flamingo", "Flamingo", "火烈鸟", "Фламинго", "フラミンゴ", "furamingo"],
  [90, "🕊", "Dove", "Duif", "鸽子", "Голубь", "ハト", "hato"],
  [91, "🦝", "Raccoon", "Wasbeer", "浣熊", "Енот", "アライグマ", "araiguma"],
  [92, "🦨", "Skunk", "Stinkdier", "臭鼬", "Скунс", "スカンク", "sukanku"],
  [93, "🦡", "Badger", "Das", "獾", "Барсук", "アナグマ", "anaguma"],
  [94, "🦫", "Beaver", "Bever", "海狸", "Бобр", "ビーバー", "biibaa"],
  [95, "🦦", "Otter", "Otter", "水獭", "Выдра", "カワウソ", "kawauso"],
  [96, "🦥", "Sloth", "Luiaard", "树懒", "Ленивец", "ナマケモノ", "namakemono"],
  [97, "🐁", "Mouse", "Muis", "老鼠", "Мышь", "ネズミ", "nezumi"],
  [98, "🐀", "Rat", "Rat", "老鼠", "Крыса", "ラット", "ratto"],
  [99, "🐿", "Chipmunk", "Wangzakeekhoorn", "花栗鼠", "Бурундук", "シマリス", "shimarisu"],
  [100, "🦔", "Hedgehog", "Egel", "刺猬", "Ёж", "ハリネズミ", "harinezumi"],
];

const animalCategoryWords = animalItems.map(([id]) => `animal${id}`);

Object.assign(
  words,
  Object.fromEntries(
    animalItems.map(([id, emoji, english, dutch, chinese, russian, japanese, japanesePhonetic]) => {
      const key = `animal${id}`;
      return [
        key,
        {
          aliases: [english, dutch, chinese, russian, japanese].map((value) => value.toLowerCase()),
          detected: { word: english, language: "English" },
          translations: {
            nl: { word: dutch, phonetic: dutch },
            ru: { word: russian, phonetic: russian },
            zh: { word: chinese, phonetic: chinese },
            en: { word: english, phonetic: english },
            ja: { word: japanese, phonetic: japanesePhonetic },
          },
          facts: [
            `${english} is an animal word.`,
            "This animal appears in the visual word picker.",
            "Families can learn its name in different languages.",
          ],
          art: key,
        },
      ];
    })
  )
);

Object.assign(
  artIcons,
  Object.fromEntries(animalItems.map(([id, emoji]) => [`animal${id}`, emoji]))
);

const emojiCategories = [
  {
    id: "emoji-animals",
    name: "Animals",
    words: animalCategoryWords,
  },
  {
    id: "emoji-nature",
    name: "Nature",
    words: ["moon", "sun", "star", "tree", "flower", "mushroom", "water", "rain", "snow", "cloud", "sea", "mountain", "fire", "rainbow"],
  },
  {
    id: "emoji-food-drink",
    name: "Food and Drink",
    words: ["apple", "banana", "strawberry", "carrot", "bread", "cheese", "egg", "rice", "soup", "cake", "cookie", "iceCream", "noodles", "pizza", "juice"],
  },
  {
    id: "emoji-activities",
    name: "Activity",
    words: ["basketball", "soccer", "kite", "music", "painting", "game", "swim", "dance", "playground", "medal", "jump", "sleep"],
  },
  {
    id: "emoji-travel-places",
    name: "Travel and Places",
    words: ["car", "bus", "bicycle", "train", "airplane", "boat", "rocket", "house", "school", "park", "castle", "camping", "door", "window"],
  },
  {
    id: "emoji-objects",
    name: "Objects",
    words: ["shoe", "hat", "scarf", "book", "bed", "chair", "plate", "lamp", "doll", "teddy", "robot", "blocks", "pencil", "bag", "clock", "key", "phone", "camera", "scissors", "umbrella", "toothbrush", "soap", "ice", "snowman", "hand", "eye"],
  },
  {
    id: "emoji-smileys-emotion",
    name: "Smileys & Emotion",
    words: ["happy", "sad", "love", "laugh", "angry", "surprised", "quiet", "mother", "father"],
  },
];

function symbolArt(key) {
  const symbol = artIcons[key] || "✨";
  return `
    <svg viewBox="0 0 280 240" aria-hidden="true">
      <rect x="28" y="178" width="224" height="28" rx="14" fill="#dceee8"/>
      <circle cx="140" cy="112" r="82" fill="#fff4d6"/>
      <circle cx="92" cy="82" r="28" fill="#f06d5e" opacity=".65"/>
      <circle cx="196" cy="92" r="24" fill="#2f9d74" opacity=".65"/>
      <circle cx="190" cy="166" r="18" fill="#3778c2" opacity=".55"/>
      <text x="140" y="143" text-anchor="middle" font-size="92" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, system-ui, sans-serif">${symbol}</text>
    </svg>
  `;
}

const artTemplates = {
  apple: () => `
    <svg viewBox="0 0 280 240" aria-hidden="true">
      <rect x="18" y="172" width="244" height="28" rx="14" fill="#dceee8"/>
      <path d="M142 70c30-34 88-10 86 52-2 62-39 96-80 76-5-2-11-2-16 0-42 20-78-14-80-76-2-62 56-86 86-52z" fill="#f06d5e"/>
      <path d="M141 72c4-28 18-43 43-48" fill="none" stroke="#7f4b2d" stroke-width="10" stroke-linecap="round"/>
      <path d="M162 42c22-18 48-12 64 7-24 9-47 9-64-7z" fill="#2f9d74"/>
      <circle cx="108" cy="118" r="13" fill="#fff4ef" opacity=".78"/>
    </svg>
  `,
  dog: () => `
    <svg viewBox="0 0 280 240" aria-hidden="true">
      <rect x="28" y="178" width="224" height="28" rx="14" fill="#e6eef7"/>
      <path d="M76 106c2-48 35-74 72-74s70 26 72 74v42c0 41-31 68-72 68s-72-27-72-68z" fill="#ecb15f"/>
      <path d="M80 98c-30-28-42-62-30-76 29 7 50 32 58 70zM200 98c30-28 42-62 30-76-29 7-50 32-58 70z" fill="#8a5b35"/>
      <circle cx="119" cy="112" r="9" fill="#263238"/>
      <circle cx="161" cy="112" r="9" fill="#263238"/>
      <path d="M134 142h28l-14 16z" fill="#263238"/>
      <path d="M124 168c13 12 35 12 48 0" fill="none" stroke="#263238" stroke-width="7" stroke-linecap="round"/>
    </svg>
  `,
  moon: () => `
    <svg viewBox="0 0 280 240" aria-hidden="true">
      <rect x="24" y="24" width="232" height="184" rx="22" fill="#263238"/>
      <circle cx="190" cy="82" r="4" fill="#fffaf0"/>
      <circle cx="72" cy="74" r="3" fill="#fffaf0"/>
      <circle cx="218" cy="144" r="3" fill="#fffaf0"/>
      <circle cx="132" cy="116" r="62" fill="#f6c85f"/>
      <circle cx="158" cy="94" r="62" fill="#263238"/>
      <path d="M72 180c36 14 91 14 136 0" fill="none" stroke="#fffaf0" stroke-width="8" stroke-linecap="round" opacity=".45"/>
    </svg>
  `,
  water: () => `
    <svg viewBox="0 0 280 240" aria-hidden="true">
      <rect x="22" y="168" width="236" height="34" rx="17" fill="#dceee8"/>
      <path d="M140 28c42 54 72 91 72 128 0 42-32 70-72 70s-72-28-72-70c0-37 30-74 72-128z" fill="#3778c2"/>
      <path d="M104 150c0 22 16 38 38 38" fill="none" stroke="#d7efff" stroke-width="12" stroke-linecap="round"/>
      <circle cx="116" cy="118" r="12" fill="#d7efff" opacity=".8"/>
    </svg>
  `,
  window: () => `
    <svg viewBox="0 0 280 240" aria-hidden="true">
      <rect x="40" y="180" width="200" height="24" rx="12" fill="#dceee8"/>
      <rect x="66" y="42" width="148" height="138" rx="12" fill="#3778c2"/>
      <rect x="78" y="54" width="124" height="114" rx="6" fill="#d7efff"/>
      <path d="M140 54v114M78 111h124" stroke="#3778c2" stroke-width="10" stroke-linecap="round"/>
      <circle cx="102" cy="84" r="14" fill="#f6c85f"/>
      <path d="M98 146c20-24 39-24 58 0 15-17 31-17 48 0" fill="none" stroke="#2f9d74" stroke-width="9" stroke-linecap="round"/>
    </svg>
  `,
};

els.languageGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language]");
  if (!button) return;
  const id = button.dataset.language;
  if (selectedLanguages.has(id) && selectedLanguages.size > 1) {
    selectedLanguages.delete(id);
  } else {
    selectedLanguages.add(id);
  }
  renderLanguages();
  if (currentResult && !els.resultOverlay.classList.contains("is-hidden")) {
    renderResult(currentResult.entry, currentResult.heard, currentResult.sourceLanguage);
  }
});

els.listenButton.addEventListener("click", listen);

function submitTextInput() {
  const word = els.textWordInput.value.trim();
  if (!word) return;
  handleTextWord(word);
}

els.textInputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  submitTextInput();
});

els.textSubmitButton.addEventListener("click", submitTextInput);

els.textWordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    submitTextInput();
  }
});

document.querySelector(".quick-tries").addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    const categoryId = categoryButton.dataset.category;
    if (expandedVisualCategories.has(categoryId)) {
      expandedVisualCategories.delete(categoryId);
    } else {
      expandedVisualCategories.clear();
      expandedVisualCategories.add(categoryId);
    }
    renderQuickWords();
    return;
  }

  const button = event.target.closest("[data-key]");
  if (button) handleVisualWord(button.dataset.key);
});

els.closeResultButton.addEventListener("click", closeResult);
els.expandResultButton.addEventListener("click", toggleExpandedResult);

els.resultOverlay.addEventListener("click", (event) => {
  if (event.target === els.resultOverlay) closeResult();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !els.resultOverlay.classList.contains("is-hidden")) {
    closeResult();
  }
});

els.translationList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-speak]");
  if (button) speak(button.dataset.speak, button.dataset.locale);
});

renderLanguages();
renderQuickWords();
loadVoices();
if (!isLocalPrototype) {
  els.listenLabel.textContent = "Voice is local only";
  els.heardText.textContent = "Try typing a word or picking an emoji in the shared web version.";
}
if (window.speechSynthesis) {
  window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
}
