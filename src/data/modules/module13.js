export const module13 = {
  id: 13,
  levelId: 'level-1',
  title: 'Природа и погода',
  words: '237–256',
  wordCount: 20,
  totalWords: 3000,

  blocks: [
    // ── БЛОК 1 ── СПИСОК СЛОВ ──────────────────────────────────────────────
    {
      id: 'words',
      type: 'word-list',
      title: 'Блок 1 — Список слов',
      intro: 'Слова 237–256 — природа, погода и времена года.',
      words: [
        { num: 237, word: 'weather',  tr: '[ˈweðə]',      ru: 'погода',                    ex: 'The weather today is perfect for a walk.',        exRu: 'Сегодня погода идеальна для прогулки.' },
        { num: 238, word: 'sun',      tr: '[sʌn]',         ru: 'солнце',                    ex: 'The sun comes out after the rain.',               exRu: 'После дождя выходит солнце.' },
        { num: 239, word: 'rain',     tr: '[reɪn]',        ru: 'дождь; идти (о дожде)',     ex: 'It rains a lot here in autumn.',                  exRu: 'Здесь осенью часто идёт дождь.' },
        { num: 240, word: 'snow',     tr: '[snəʊ]',        ru: 'снег; идти (о снеге)',      ex: 'We woke up to snow this morning.',                exRu: 'Утром мы проснулись и увидели снег.' },
        { num: 241, word: 'wind',     tr: '[wɪnd]',        ru: 'ветер',                     ex: 'The wind is strong today — hold your hat!',       exRu: 'Сегодня сильный ветер — держи шляпу!' },
        { num: 242, word: 'cloud',    tr: '[klaʊd]',       ru: 'облако; туча',              ex: 'Dark clouds mean rain is coming.',                exRu: 'Тёмные тучи — значит, будет дождь.' },
        { num: 243, word: 'sky',      tr: '[skaɪ]',        ru: 'небо',                      ex: 'The sky is clear and very blue today.',           exRu: 'Сегодня небо ясное и очень синее.' },
        { num: 244, word: 'tree',     tr: '[triː]',        ru: 'дерево',                    ex: 'There are old trees in the park near my house.',  exRu: 'В парке рядом с моим домом растут старые деревья.' },
        { num: 245, word: 'river',    tr: '[ˈrɪvə]',       ru: 'река',                      ex: 'We walked along the river for an hour.',          exRu: 'Мы шли вдоль реки около часа.' },
        { num: 246, word: 'sea',      tr: '[siː]',         ru: 'море',                      ex: 'I love the sea — the sound, the smell, the colour.', exRu: 'Я люблю море — его звук, запах, цвет.' },
        { num: 247, word: 'mountain', tr: '[ˈmaʊntɪn]',   ru: 'гора',                      ex: 'She grew up near the mountains.',                 exRu: 'Она выросла рядом с горами.' },
        { num: 248, word: 'forest',   tr: '[ˈfɒrɪst]',    ru: 'лес',                       ex: 'The forest was quiet and dark.',                  exRu: 'Лес был тихим и тёмным.' },
        { num: 249, word: 'field',    tr: '[fiːld]',       ru: 'поле',                      ex: 'There are green fields everywhere in the countryside.', exRu: 'За городом повсюду зелёные поля.' },
        { num: 250, word: 'ground',   tr: '[ɡraʊnd]',      ru: 'земля (поверхность)',       ex: 'The ground was wet after the rain.',              exRu: 'После дождя земля была мокрой.' },
        { num: 251, word: 'hot',      tr: '[hɒt]',         ru: 'жаркий; горячий',           ex: 'It is too hot to go out at noon.',                exRu: 'В полдень слишком жарко, чтобы выходить.' },
        { num: 252, word: 'cold',     tr: '[kəʊld]',       ru: 'холодный; холод',           ex: 'It is cold outside — dress warmly.',              exRu: 'На улице холодно — одевайся тепло.' },
        { num: 253, word: 'warm',     tr: '[wɔːm]',        ru: 'тёплый',                    ex: 'A warm evening in May is my favourite.',          exRu: 'Тёплый майский вечер — моё любимое время.' },
        { num: 254, word: 'wet',      tr: '[wet]',         ru: 'мокрый; влажный',           ex: 'My shoes are wet from walking in the rain.',      exRu: 'Мои ботинки промокли от ходьбы под дождём.' },
        { num: 255, word: 'season',   tr: '[ˈsiːzn]',      ru: 'время года; сезон',         ex: 'What is your favourite season?',                  exRu: 'Какое твоё любимое время года?' },
        { num: 256, word: 'outside',  tr: '[ˌaʊtˈsaɪd]',  ru: 'снаружи; на улице',         ex: "Let's eat outside — the weather is perfect.",     exRu: 'Давайте поедим на улице — погода идеальная.' },
      ],
      note: {
        title: 'rain и snow как глаголы; ground vs earth',
        lines: [
          'rain и snow — и существительные, и глаголы. С глаголом всегда it: It is raining. / It snowed last night.',
          'ground — поверхность под ногами (The ground is wet). earth — планета или почва в широком смысле.',
          'Прилагательные с -y: sun → sunny, wind → windy, cloud → cloudy, rain → rainy.',
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
        { num: 1,  en: 'The weather in this city is unpredictable — it can change three times a day.',   ru: 'Погода в этом городе непредсказуема — она может меняться трижды в день.', note: 'unpredictable — непредсказуемый' },
        { num: 2,  en: 'The sun is so bright today — I need my sunglasses.',                             ru: 'Сегодня такое яркое солнце — мне нужны солнечные очки.', note: '' },
        { num: 3,  en: 'It has been raining for two days. I hope it stops tomorrow.',                    ru: 'Дождь идёт уже два дня. Надеюсь, завтра прекратится.', note: '' },
        { num: 4,  en: 'The first snow of winter always feels magical.',                                 ru: 'Первый снег зимы всегда кажется волшебным.', note: 'magical — волшебный' },
        { num: 5,  en: 'The wind was so strong last night that it broke a tree in the park.',           ru: 'Ночью был такой сильный ветер, что он сломал дерево в парке.', note: '' },
        { num: 6,  en: 'I love watching clouds move across the sky.',                                    ru: 'Я люблю наблюдать, как облака плывут по небу.', note: '' },
        { num: 7,  en: 'Look at the sky — it is completely clear. Not a single cloud.',                 ru: 'Посмотри на небо — оно совершенно чистое. Ни одного облака.', note: 'not a single — ни единого' },
        { num: 8,  en: 'The old tree in our garden fell down last winter.',                              ru: 'Старое дерево в нашем саду упало прошлой зимой.', note: '' },
        { num: 9,  en: 'We sat by the river and watched the water for a long time.',                    ru: 'Мы сидели у реки и долго смотрели на воду.', note: '' },
        { num: 10, en: 'I have always wanted to live by the sea — to hear the waves every day.',        ru: 'Я всегда хотел жить у моря — слышать волны каждый день.', note: '' },
        { num: 11, en: 'The mountains looked pink in the evening light.',                               ru: 'Горы в вечернем свете казались розовыми.', note: '' },
        { num: 12, en: "We walked through the forest and didn't meet anyone for an hour.",              ru: 'Мы шли через лес и час ни с кем не встретились.', note: '' },
        { num: 13, en: 'The fields after the rain smell incredible.',                                   ru: 'После дождя поля пахнут невероятно.', note: 'incredible — невероятный' },
        { num: 14, en: "In summer it gets so hot here that I don't go out between noon and three.",    ru: 'Летом здесь так жарко, что с полудня до трёх я не выхожу.', note: '' },
        { num: 15, en: 'My favourite season is autumn — warm colours, cool air, quiet streets.',        ru: 'Моё любимое время года — осень: тёплые цвета, прохладный воздух, тихие улицы.', note: '' },
      ],
      note: {
        title: 'Описание погоды',
        lines: [
          'It is hot / cold / warm / wet / windy / cloudy / sunny.',
          'It is raining / snowing. (сейчас)',
          'What is the weather like? — Какая погода?',
          'It will be cold tomorrow. / It was windy yesterday.',
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
        'I live in a country with four real seasons. Every three months, the world changes. I love that.',
        'Spring starts slowly. The snow melts. The ground turns wet and dark. The first green appears on the trees. The air smells different — fresh and a little sweet. I open the window in the morning and just breathe.',
        'Summer is warm and sometimes too hot. The sky is bright blue. The sun stays up late. We eat outside, walk outside, sit outside. The sea is not far — we go there on weekends. The water is warm by July.',
        'Autumn is my favourite. The trees turn red, orange and yellow. The air is cool and clean. I walk in the forest and listen to the leaves under my feet. The sky is often grey and cloudy, but that is fine. I don\'t mind.',
        'Winter is cold and quiet. Snow covers the ground, the trees, the rooftops. Everything slows down. I stay inside more. I read, cook and look out of the window at the white world.',
        'Each season teaches you something. Spring — hope. Summer — joy. Autumn — beauty. Winter — patience.',
      ],
      translation: [
        'Я живу в стране с четырьмя настоящими временами года. Каждые три месяца мир меняется. Я люблю это.',
        'Весна начинается медленно. Снег тает. Земля становится влажной и тёмной. На деревьях появляется первая зелень. Воздух пахнет по-другому — свежо и чуть сладко. Утром я открываю окно и просто дышу.',
        'Лето тёплое, а порой слишком жаркое. Небо ярко-синее. Солнце заходит поздно. Едим на улице, гуляем на улице, сидим на улице. Море недалеко — ездим туда на выходных. К июлю вода тёплая.',
        'Осень — моё любимое время года. Деревья становятся красными, оранжевыми и жёлтыми. Воздух прохладный и чистый. Я гуляю в лесу и слушаю, как шуршат листья под ногами. Небо часто серое и облачное, но это ничего. Меня это не беспокоит.',
        'Зима холодная и тихая. Снег покрывает землю, деревья, крыши. Всё замедляется. Я больше сижу дома. Читаю, готовлю и смотрю в окно на белый мир.',
        'Каждый сезон чему-то учит. Весна — надежде. Лето — радости. Осень — красоте. Зима — терпению.',
      ],
      vocab: [
        { word: 'melts',      tr: '[melts]',     ru: 'тает' },
        { word: 'appears',    tr: '[əˈpɪəz]',    ru: 'появляется' },
        { word: 'breathe',    tr: '[briːð]',      ru: 'дышать' },
        { word: 'leaves',     tr: '[liːvz]',      ru: 'листья' },
        { word: 'rooftops',   tr: '[ˈruːftɒps]', ru: 'крыши' },
        { word: 'patience',   tr: '[ˈpeɪʃns]',   ru: 'терпение' },
        { word: "I don't mind", tr: '—',          ru: 'меня это не беспокоит' },
        { word: 'hope',       tr: '[həʊp]',       ru: 'надежда' },
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
          sentence:    'It is raining.',
          schema:      'It is + [weather verb]-ing.',
          explanation: 'Для описания погоды прямо сейчас используем it is + -ing: It is raining / snowing / getting colder.',
          pattern:     'It is [raining / snowing / getting + adj].',
          examples:    ['It is raining outside.', 'It is snowing heavily.', 'It is getting colder.'],
        },
        {
          sentence:    'It rains a lot here.',
          schema:      'It + [weather verb] + adverb / time.',
          explanation: 'Present Simple для привычного или регулярного явления: It rains a lot. / It snows in January. / It gets hot in summer.',
          pattern:     'It [rains / snows / gets] + [часто / осенью / летом].',
          examples:    ['It rains a lot here.', 'It snows in January.', 'It gets very hot in summer.'],
        },
        {
          sentence:    'It is a sunny day.',
          schema:      '[Weather noun] + -y = adjective.',
          explanation: 'Существительные о погоде принимают суффикс -y и становятся прилагательными: sun→sunny, wind→windy, cloud→cloudy, rain→rainy.',
          pattern:     'It is [sunny / windy / cloudy / rainy / snowy].',
          examples:    ['It is a sunny day.', 'It is very windy outside.', 'It was a rainy week.'],
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
            'My favourite season is… because…',
            'When it rains, I usually…',
            'In my city the weather is often…',
            'I love going outside when…',
            'The most beautiful natural place I have ever seen is…',
          ],
        },
        {
          type:   'questions',
          title:  '5.2. Ответь на вопросы по тексту',
          items: [
            { q: 'What happens to the trees in spring?',                   hint: 'Что происходит с деревьями весной?' },
            { q: 'Where do people go on weekends in summer?',             hint: 'Куда ездят на выходных летом?' },
            { q: 'What does the person do in the autumn forest?',         hint: 'Что делает автор в осеннем лесу?' },
            { q: 'What does the person do in winter?',                    hint: 'Чем занимается автор зимой?' },
            { q: 'What does each season teach, according to the text?',   hint: 'Чему учит каждый сезон?' },
          ],
        },
        {
          type:   'translate',
          title:  '5.3. Переведи с русского на английский',
          items: [
            { ru: 'Сегодня холодно и облачно — возьми куртку.',          en: 'It is cold and cloudy today — take your jacket.' },
            { ru: 'Летом здесь очень жарко.',                            en: 'It is very hot here in summer.' },
            { ru: 'Вчера всю ночь шёл снег.',                           en: 'It snowed all night yesterday.' },
            { ru: 'Мне нравится гулять у реки, когда тепло.',           en: 'I like walking by the river when it is warm.' },
            { ru: 'Какая погода будет завтра?',                          en: 'What will the weather be like tomorrow?' },
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
            { sentence: 'Look at those dark ___  — it is going to rain.',           answer: 'clouds' },
            { sentence: 'The ___ is warm today — perfect for the beach.',           answer: 'sea' },
            { sentence: 'I love walking in the ___ — it is always quiet there.',   answer: 'forest' },
            { sentence: 'There was strong ___ last night.',                         answer: 'wind' },
            { sentence: 'My shoes are ___ — I walked through puddles.',            answer: 'wet' },
            { sentence: 'The ___ is bright and blue today.',                       answer: 'sky' },
            { sentence: 'The ___ was covered in snow this morning.',               answer: 'ground' },
            { sentence: 'We could see the ___ from the hotel window.',             answer: 'mountains' },
            { sentence: "It was so ___ that we couldn't go outside.",             answer: 'hot' },
            { sentence: 'What is your favourite ___? Spring or autumn?',           answer: 'season' },
          ],
        },
        {
          type:  'rephrase',
          title: '6.2. Перефразируй предложение',
          items: [
            { original: 'There is rain outside.',           rephrased: 'It is raining.' },
            { original: 'The weather is not warm — it is cold.', rephrased: 'It is cold outside.' },
            { original: 'The sky has no clouds today.',     rephrased: 'The sky is clear today.' },
            { original: 'There was snow last night.',       rephrased: 'It snowed last night.' },
            { original: 'The wind is very strong.',         rephrased: 'It is very windy today.' },
          ],
        },
        {
          type:    'reading',
          title:   '6.3. Мини-текст для чтения',
          passage: [
            "Last Saturday I went for a long walk. I had no plan — I just put on my coat and old shoes and went outside.",
            "The weather was not perfect. It was cloudy and a little cold. But after two days at home, I needed air.",
            "I walked through the park near my house. The trees were bare — just dark branches against the grey sky. A few leaves were still on the ground. The grass was wet from the night rain.",
            "I reached the river after about twenty minutes. The water was dark and moving fast. I stood there for a while, watching. A few birds flew over the water and disappeared into the forest on the other side.",
            "Then the sun came out. Just for a few minutes — through a hole in the clouds. Everything lit up. The river turned silver. The wet ground shone. Even the bare trees looked beautiful.",
            "I stood there and felt very still inside. No phone, no thoughts about work. Just the sky, the river, the cold air and the moment.",
            "I walked home slowly. My shoes were wet and my nose was running. But I felt better than I had in a week.",
            "Nature does not need to be perfect to be good for you.",
          ],
          translation: [
            'В прошлую субботу я пошёл на долгую прогулку. Плана не было — я просто надел пальто и старые ботинки и вышел.',
            'Погода была не идеальной. Облачно и немного холодно. Но после двух дней дома мне нужен был воздух.',
            'Я прошёл через парк. Деревья стояли голые — только тёмные ветки на фоне серого неба. На земле ещё лежало несколько листьев. Трава была мокрой от ночного дождя.',
            'Минут через двадцать я вышел к реке. Вода была тёмной и быстро текла. Я стоял там и смотрел. Несколько птиц скрылось в лесу на другом берегу.',
            'Потом вышло солнце — всего на несколько минут. Всё осветилось. Река стала серебристой. Мокрая земля заблестела. Даже голые деревья выглядели красиво.',
            'Я стоял и чувствовал полную тишину внутри. Только небо, река и холодный воздух.',
            'Домой я шёл медленно. Ботинки промокли, нос потёк. Но я чувствовал себя лучше, чем за всю прошлую неделю.',
            'Природа не обязана быть идеальной, чтобы идти тебе на пользу.',
          ],
        },
      ],
    },
  ],

  next: {
    id:      14,
    title:   'Город и транспорт',
    preview: ['street, road, bridge, corner, station', 'bus, train, car, bike, walk', 'left, right, straight, map'],
    tip:     'Опиши погоду за окном прямо сейчас: It is..., The sky is..., It feels...',
  },
}
