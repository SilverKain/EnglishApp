export const module12 = {
  id: 12,
  levelId: 'level-1',
  title: 'Одежда и внешность',
  words: '217–236',
  wordCount: 20,
  totalWords: 3000,

  blocks: [
    // ── БЛОК 1 ── СПИСОК СЛОВ ──────────────────────────────────────────────
    {
      id: 'words',
      type: 'word-list',
      title: 'Блок 1 — Список слов',
      intro: 'Слова 217–236 — одежда, размер и описание внешности.',
      words: [
        { num: 217, word: 'shirt',      tr: '[ʃɜːt]',        ru: 'рубашка',                    ex: 'He always wears a white shirt to work.',         exRu: 'На работу он всегда надевает белую рубашку.' },
        { num: 218, word: 'trousers',   tr: '[ˈtraʊzəz]',    ru: 'брюки',                      ex: 'These trousers are too long for me.',             exRu: 'Эти брюки мне великоваты.' },
        { num: 219, word: 'dress',      tr: '[dres]',         ru: 'платье; одеваться',          ex: 'She wore a beautiful red dress at the party.',    exRu: 'На вечеринке она была в красивом красном платье.' },
        { num: 220, word: 'jacket',     tr: '[ˈdʒækɪt]',     ru: 'куртка; пиджак',             ex: 'Take your jacket — it is cold outside.',          exRu: 'Возьми куртку — на улице холодно.' },
        { num: 221, word: 'coat',       tr: '[kəʊt]',         ru: 'пальто',                     ex: 'I need a warm coat for winter.',                  exRu: 'Мне нужно тёплое пальто на зиму.' },
        { num: 222, word: 'shoes',      tr: '[ʃuːz]',         ru: 'туфли, ботинки',             ex: 'Take off your shoes at the door, please.',        exRu: 'Пожалуйста, снимите ботинки у двери.' },
        { num: 223, word: 'hat',        tr: '[hæt]',          ru: 'шапка; шляпа',               ex: 'She wore a big hat at the beach.',                exRu: 'На пляже она была в большой шляпе.' },
        { num: 224, word: 'scarf',      tr: '[skɑːf]',        ru: 'шарф',                       ex: 'He wrapped a scarf around his neck.',             exRu: 'Он обмотал шарф вокруг шеи.' },
        { num: 225, word: 'wear',       tr: '[weə]',          ru: 'носить (одежду)',             ex: 'She always wears blue — it is her colour.',       exRu: 'Она всегда носит синее — это её цвет.' },
        { num: 226, word: 'put on',     tr: '[pʊt ɒn]',      ru: 'надевать',                   ex: 'Put on your coat before you go out.',             exRu: 'Надень пальто, прежде чем выходить.' },
        { num: 227, word: 'take off',   tr: '[teɪk ɒf]',     ru: 'снимать (одежду)',           ex: 'Take off your shoes and come in.',                exRu: 'Снимай ботинки и заходи.' },
        { num: 228, word: 'size',       tr: '[saɪz]',         ru: 'размер',                     ex: 'What size do you wear?',                          exRu: 'Какой у тебя размер?' },
        { num: 229, word: 'fit',        tr: '[fɪt]',          ru: 'подходить по размеру',       ex: 'This jacket fits you perfectly.',                 exRu: 'Эта куртка сидит на тебе идеально.' },
        { num: 230, word: 'loose',      tr: '[luːs]',         ru: 'свободный, мешковатый',      ex: 'I prefer loose clothes at home.',                 exRu: 'Дома я предпочитаю свободную одежду.' },
        { num: 231, word: 'tight',      tr: '[taɪt]',         ru: 'тесный, облегающий',         ex: 'These shoes are a bit tight.',                    exRu: 'Эти ботинки немного тесноваты.' },
        { num: 232, word: 'tall',       tr: '[tɔːl]',         ru: 'высокий (о людях)',          ex: 'He is very tall — about two metres.',             exRu: 'Он очень высокий — около двух метров.' },
        { num: 233, word: 'thin',       tr: '[θɪn]',          ru: 'худой; тонкий',              ex: 'She looks thin — has she been eating enough?',    exRu: 'Она выглядит худой — она нормально питается?' },
        { num: 234, word: 'beautiful',  tr: '[ˈbjuːtɪfl]',   ru: 'красивый',                   ex: 'What a beautiful sunset!',                        exRu: 'Какой красивый закат!' },
        { num: 235, word: 'ugly',       tr: '[ˈʌɡli]',        ru: 'некрасивый',                 ex: 'The new building is a bit ugly, I think.',        exRu: 'Новое здание, на мой взгляд, немного некрасивое.' },
        { num: 236, word: 'style',      tr: '[staɪl]',        ru: 'стиль',                      ex: 'She has her own style — simple but elegant.',     exRu: 'У неё свой стиль — простой, но элегантный.' },
      ],
      note: {
        title: 'wear / put on / take off',
        lines: [
          'put on — надевать (действие): Put on your jacket!',
          'wear — носить (состояние): She wears glasses.',
          'take off — снимать (действие): He took off his coat.',
          'fit — подходит по размеру; suit — идёт по стилю/цвету.',
        ],
      },
    },

    // ── БЛОК 2 ── ЖИВЫЕ ПРЕДЛОЖЕНИЯ ───────────────────────────────────────
    {
      id: 'sentences',
      type: 'sentences',
      title: 'Блок 2 — Живые предложения',
      intro: 'Примеры из реальной речи — читай и запоминай контекст.',
      items: [
        { num: 1,  en: 'He wears the same blue shirt almost every day — it is his favourite.',        ru: 'Он носит одну и ту же синюю рубашку почти каждый день — она его любимая.', note: '' },
        { num: 2,  en: 'These trousers are old but still fit me well.',                               ru: 'Эти брюки старые, но всё ещё хорошо сидят на мне.', note: '' },
        { num: 3,  en: 'She looked amazing in that dress — everyone noticed her.',                    ru: 'В том платье она выглядела потрясающе — все обратили на неё внимание.', note: 'amazing — потрясающий' },
        { num: 4,  en: "Don't forget your jacket — the weather changes fast here.",                   ru: 'Не забудь куртку — здесь погода меняется быстро.', note: '' },
        { num: 5,  en: 'I bought a new winter coat last week. It is warm and light.',                 ru: 'На прошлой неделе я купил новое зимнее пальто. Оно тёплое и лёгкое.', note: '' },
        { num: 6,  en: 'My shoes are wet — I walked through the puddles.',                           ru: 'Мои ботинки мокрые — я прошёл через лужи.', note: 'puddles — лужи' },
        { num: 7,  en: "She never wears hats — she says they don't suit her.",                       ru: 'Она никогда не носит шапки — говорит, они ей не идут.', note: '' },
        { num: 8,  en: 'I lost my scarf on the bus. It was my favourite one.',                       ru: 'Я потерял шарф в автобусе. Это был мой любимый.', note: '' },
        { num: 9,  en: "Put on something warm — it's going to be cold tonight.",                     ru: 'Надень что-нибудь тёплое — сегодня ночью будет холодно.', note: '' },
        { num: 10, en: 'She took off her coat and put it on the chair.',                             ru: 'Она сняла пальто и положила его на стул.', note: '' },
        { num: 11, en: 'What size do you wear? I want to buy you a shirt for your birthday.',        ru: 'Какой у тебя размер? Я хочу купить тебе рубашку на день рождения.', note: '' },
        { num: 12, en: 'This jacket is too tight under the arms — I need a bigger size.',            ru: 'Эта куртка тесновата под мышками — мне нужен размер побольше.', note: 'under the arms — под мышками' },
        { num: 13, en: 'He is tall and thin, with dark hair and a quiet face.',                      ru: 'Он высокий и худой, с тёмными волосами и спокойным лицом.', note: '' },
        { num: 14, en: 'She is not classically beautiful, but she has a wonderful style.',           ru: 'Она не классически красивая, но у неё прекрасный стиль.', note: '' },
        { num: 15, en: "I don't care much about style — I just want to be comfortable.",             ru: 'Меня не очень волнует стиль — я просто хочу быть в комфорте.', note: "comfortable — комфортный" },
      ],
      note: {
        title: 'Описание внешности — порядок слов',
        lines: [
          'рост → телосложение → волосы → лицо/глаза → одежда.',
          'She is tall and thin, with long dark hair and brown eyes. She usually wears simple clothes.',
        ],
      },
    },

    // ── БЛОК 3 ── МИНИ-ТЕКСТ ──────────────────────────────────────────────
    {
      id: 'text',
      type: 'mini-text',
      title: 'Блок 3 — Мини-текст',
      intro: 'Читай оригинал, потом проверяй себя по переводу.',
      original: [
        "I don't have many clothes. My wardrobe is small: a few shirts, two pairs of trousers, one pair of jeans, a couple of jackets and a winter coat. Some people think this is not enough. I think it is just right.",
        "I have a style, but it is simple. I mostly wear dark colours — navy blue, grey, black. They all go together, so getting dressed in the morning takes me two minutes. I don't stand in front of the wardrobe asking \"What should I wear today?\"",
        "Shoes are different. I have too many shoes. I don't know how that happened. Black shoes for work, trainers for the weekend, old shoes for rainy days, boots for winter. My girlfriend says it is funny — I have almost no clothes but a lot of shoes.",
        "I do care about one thing: how clothes fit. Even a cheap shirt looks good if it fits well. Even an expensive jacket looks wrong if it is too tight or too loose. Fit is everything.",
        "I never follow fashion. But I always look clean and neat. And most days, that is enough.",
      ],
      translation: [
        'У меня немного одежды. Мой гардероб небольшой: несколько рубашек, двое брюк, одни джинсы, пара курток и зимнее пальто. Некоторые думают, что этого недостаточно. Я считаю, что в самый раз.',
        'У меня есть стиль, но он простой. В основном я ношу тёмные цвета — тёмно-синий, серый, чёрный. Они все сочетаются, поэтому одеться утром у меня занимает две минуты. Я не стою перед гардеробом и не думаю «что же надеть сегодня?».',
        'С обувью всё иначе. Обуви у меня слишком много. Не знаю, как так вышло. Чёрные туфли для работы, кроссовки для выходных, старые ботинки для дождливых дней, сапоги для зимы. Моя девушка говорит, что это смешно — одежды почти нет, а обуви полно.',
        'Мне важна одна вещь: как одежда сидит. Даже дешёвая рубашка выглядит хорошо, если хорошо сидит. Даже дорогая куртка смотрится плохо, если она слишком тесная или слишком свободная. Посадка — это всё.',
        'Я никогда не слежу за модой. Но всегда выгляжу аккуратно и чисто. И в большинстве случаев этого достаточно.',
      ],
      vocab: [
        { word: 'wardrobe',  tr: '[ˈwɔːdrəʊb]', ru: 'гардероб, шкаф' },
        { word: 'mostly',    tr: '[ˈməʊstli]',   ru: 'в основном' },
        { word: 'navy blue', tr: '[ˈneɪvi bluː]',ru: 'тёмно-синий' },
        { word: 'trainers',  tr: '[ˈtreɪnəz]',   ru: 'кроссовки (брит.)' },
        { word: 'fashion',   tr: '[ˈfæʃn]',       ru: 'мода' },
        { word: 'neat',      tr: '[niːt]',         ru: 'аккуратный' },
        { word: 'follow',    tr: '[ˈfɒləʊ]',       ru: 'следовать, следить' },
        { word: 'fit (noun)',tr: '[fɪt]',          ru: 'посадка (одежды)' },
      ],
    },

    // ── БЛОК 4 ── ПОНИМАНИЕ СТРУКТУРЫ ─────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Три ключевых паттерна модуля.',
      items: [
        {
          sentence:    'She is wearing a red dress.',
          schema:      'Subject + is/are wearing + [clothes].',
          explanation: 'wear в Present Continuous — то, что надето прямо сейчас. В Present Simple (wear) — привычка: She wears glasses.',
          pattern:     'She is wearing / He wears [одежда].',
          examples:    ['He is wearing a jacket.', 'She always wears blue.', 'I am wearing a coat today.'],
        },
        {
          sentence:    'Put on your coat!',
          schema:      'Put on / Take off + [clothes].',
          explanation: 'put on = надевать (начало), take off = снимать (конец). Оба — фразовые глаголы: дополнение может стоять между частями или после.',
          pattern:     'Put on your [clothes]. / Take off your [clothes].',
          examples:    ['Put on your shoes.', 'Take off your jacket.', 'She put on a scarf.'],
        },
        {
          sentence:    'This jacket fits you perfectly.',
          schema:      'It fits [well / perfectly / too tight].',
          explanation: 'fit описывает посадку одежды по размеру. tight = тесно, loose = свободно/болтается.',
          pattern:     'It fits [well / perfectly]. / It is too [tight / loose].',
          examples:    ['It fits well.', 'These trousers are too loose.', 'The shoes are too tight.'],
        },
      ],
    },

    // ── БЛОК 5 ── МЫСЛИМ НА АНГЛИЙСКОМ ───────────────────────────────────
    {
      id: 'thinking',
      type: 'thinking',
      title: 'Блок 5 — Мыслим на английском',
      intro: 'Упражнения для активного использования языка.',
      sections: [
        {
          type:   'continue',
          title:  '5.1. Продолжи фразу',
          prompt: 'Закончи предложение своими словами на английском:',
          items: [
            'Every day I usually wear…',
            'In winter I always put on…',
            'My favourite piece of clothing is… because…',
            'I prefer… clothes because…',
            'When I was a child, I had to wear…',
          ],
        },
        {
          type:   'questions',
          title:  '5.2. Ответь на вопросы по тексту',
          items: [
            { q: 'How many shirts does the person have?',             hint: 'Сколько у него рубашек?' },
            { q: 'Why does dressing in the morning take two minutes?',hint: 'Почему одеться занимает две минуты?' },
            { q: 'What does he have too many of?',                    hint: 'Чего у него слишком много?' },
            { q: 'What does he care about most with clothes?',        hint: 'Что ему важнее всего в одежде?' },
            { q: 'Does he follow fashion?',                           hint: 'Следит ли он за модой?' },
          ],
        },
        {
          type:   'translate',
          title:  '5.3. Переведи с русского на английский',
          items: [
            { ru: 'Надень куртку — на улице холодно.',                   en: 'Put on your jacket — it is cold outside.' },
            { ru: 'Какой у тебя размер?',                                en: 'What size do you wear?' },
            { ru: 'Эти брюки мне великоваты — мне нужен размер поменьше.', en: 'These trousers are too loose — I need a smaller size.' },
            { ru: 'Она всегда выглядит красиво — у неё прекрасный стиль.', en: 'She always looks beautiful — she has a great style.' },
            { ru: 'Он снял пальто и повесил его на дверь.',              en: 'He took off his coat and hung it on the door.' },
          ],
        },
      ],
    },

    // ── БЛОК 6 ── МИНИ-ПОВТОРЕНИЕ ─────────────────────────────────────────
    {
      id: 'review',
      type: 'review',
      title: 'Блок 6 — Мини-повторение',
      intro: 'Закрепляем пройденное.',
      sections: [
        {
          type:  'fill',
          title: '6.1. Вставь пропущенное слово',
          items: [
            { sentence: 'She always wears a ___ to keep her neck warm in winter.',  answer: 'scarf' },
            { sentence: '___ your shoes before you come in, please.',               answer: 'Take off' },
            { sentence: "This shirt is too ___ — I can't button it.",               answer: 'tight' },
            { sentence: 'What ___ do you wear? Medium or large?',                  answer: 'size' },
            { sentence: 'He is very ___ — almost one metre ninety.',               answer: 'tall' },
            { sentence: 'She looks ___ today — that colour suits her.',            answer: 'beautiful' },
            { sentence: 'I need a warm ___ for the rain.',                         answer: 'coat' },
            { sentence: 'These jeans are ___ — I need a belt.',                   answer: 'loose' },
            { sentence: 'He has his own ___ — always simple and clean.',          answer: 'style' },
            { sentence: '___ your coat before you go out.',                        answer: 'Put on' },
          ],
        },
        {
          type:  'rephrase',
          title: '6.2. Перефразируй предложение',
          items: [
            { original: 'The jacket is not her size — it is too big.',            rephrased: 'The jacket is too loose for her.' },
            { original: 'She has no problems with weight — she is thin.',         rephrased: 'She is thin.' },
            { original: 'He put his shoes on and left.',                          rephrased: 'He put on his shoes and left.' },
            { original: "The trousers don't fit — they are not the right size.",  rephrased: "The trousers don't fit." },
            { original: 'That coat looks good on you.',                           rephrased: 'That coat suits you.' },
          ],
        },
        {
          type:    'reading',
          title:   '6.3. Мини-текст для чтения',
          passage: [
            'Tomorrow I have a job interview. I have been preparing for a week — reading about the company, writing down answers to common questions. But tonight, I have a different problem: I don\'t know what to wear.',
            'I looked in my wardrobe for half an hour. I have a dark blue shirt — clean, fits well. And grey trousers — smart but not too formal. I tried them on together. Not bad.',
            'But my black shoes are a little dirty. I cleaned them with a cloth and put them near the door. I also found my good jacket — the one I wear to important things. It is slightly tight now. I must have put on a bit of weight. I can still wear it. I just won\'t button it.',
            'My mother always said: "In an interview, clean is more important than expensive." I think she is right. A clean shirt, good shoes, neat hair — that is enough.',
            'I laid out all the clothes on the chair. I will wake up early, shower, get dressed and go. No stress about what to wear in the morning.',
            'Now I just need to sleep well. Wish me luck.',
          ],
          translation: [
            'Завтра у меня собеседование. Я готовился целую неделю. Но сегодня вечером у меня другая проблема: я не знаю, что надеть.',
            'Я смотрел в гардероб полчаса. Есть тёмно-синяя рубашка — чистая, хорошо сидит. И серые брюки — строгие, но не слишком официальные. Я примерил их вместе. Неплохо.',
            'Но мои чёрные туфли немного грязные. Я почистил их тряпкой и поставил у двери. Ещё нашёл свой парадный пиджак. Сейчас он немного тесноват. Наверное, я немного поправился. Всё равно можно надеть — просто не буду застёгивать.',
            'Мама всегда говорила: «На собеседовании чистота важнее дорогой одежды». Чистая рубашка, хорошие туфли, аккуратные волосы — этого достаточно.',
            'Я разложил всю одежду на стуле. Утром встану пораньше, приму душ, оденусь и пойду.',
            'Теперь мне просто нужно хорошо выспаться. Пожелайте мне удачи.',
          ],
        },
      ],
    },
  ],

  next: {
    id:      13,
    title:   'Природа и погода',
    preview: ['weather, sun, rain, snow, wind', 'tree, river, sea, mountain, forest', 'hot, cold, warm, season'],
    tip:     'Опиши, что ты сегодня носишь — используй I wear, I put on, It fits, It is too...',
  },
}
