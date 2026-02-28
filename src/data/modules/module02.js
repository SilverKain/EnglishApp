export const module02 = {
  id: 2,
  levelId: 'level-1',
  title: 'Мой день и мой дом',
  words: '19–37',
  wordCount: 19,
  totalWords: 3000,

  blocks: [
    // ─────────────────────────────────────────────
    // БЛОК 1 — СПИСОК СЛОВ
    // ─────────────────────────────────────────────
    {
      id: 'words',
      type: 'word-list',
      title: 'Блок 1 — Список слов',
      words: [
        { num: 19, word: 'go',      tr: '[ɡəʊ]',        ru: 'идти, ехать',                                  ex: 'I go to work every day.',          exRu: 'Я иду на работу каждый день.' },
        { num: 20, word: 'come',    tr: '[kʌm]',         ru: 'приходить, приезжать',                         ex: 'She comes home at 6.',             exRu: 'Она приходит домой в 6.' },
        { num: 21, word: 'see',     tr: '[siː]',         ru: 'видеть',                                       ex: 'I see my friend.',                 exRu: 'Я вижу своего друга.' },
        { num: 22, word: 'know',    tr: '[nəʊ]',         ru: 'знать',                                        ex: 'I know this man.',                 exRu: 'Я знаю этого человека.' },
        { num: 23, word: 'eat',     tr: '[iːt]',         ru: 'есть, кушать',                                 ex: 'We eat dinner together.',          exRu: 'Мы едим ужин вместе.' },
        { num: 24, word: 'drink',   tr: '[drɪŋk]',       ru: 'пить',                                         ex: 'He drinks coffee every morning.',  exRu: 'Он пьёт кофе каждое утро.' },
        { num: 25, word: 'sleep',   tr: '[sliːp]',       ru: 'спать',                                        ex: 'She sleeps 8 hours.',              exRu: 'Она спит 8 часов.' },
        { num: 26, word: 'house',   tr: '[haʊs]',        ru: 'дом (здание)',                                 ex: 'They live in a big house.',        exRu: 'Они живут в большом доме.' },
        { num: 27, word: 'room',    tr: '[ruːm]',        ru: 'комната',                                      ex: 'My room is small.',                exRu: 'Моя комната маленькая.' },
        { num: 28, word: 'street',  tr: '[striːt]',      ru: 'улица',                                        ex: 'I walk on the street.',            exRu: 'Я иду по улице.' },
        { num: 29, word: 'morning', tr: '[ˈmɔːnɪŋ]',    ru: 'утро',                                         ex: 'In the morning I drink tea.',      exRu: 'Утром я пью чай.' },
        { num: 30, word: 'evening', tr: '[ˈiːvnɪŋ]',    ru: 'вечер',                                        ex: 'We talk in the evening.',          exRu: 'Мы разговариваем вечером.' },
        { num: 31, word: 'night',   tr: '[naɪt]',        ru: 'ночь',                                         ex: 'At night I sleep well.',           exRu: 'Ночью я сплю хорошо.' },
        { num: 32, word: 'every',   tr: '[ˈevri]',       ru: 'каждый',                                       ex: 'I work every day.',                exRu: 'Я работаю каждый день.' },
        { num: 33, word: 'day',     tr: '[deɪ]',         ru: 'день',                                         ex: 'It is a good day.',                exRu: 'Это хороший день.' },
        { num: 34, word: 'now',     tr: '[naʊ]',         ru: 'сейчас',                                       ex: 'I am at home now.',                exRu: 'Я сейчас дома.' },
        { num: 35, word: 'home',    tr: '[həʊm]',        ru: 'дом (куда возвращаешься); домой',              ex: 'She is at home.',                  exRu: 'Она дома.' },
        { num: 36, word: 'time',    tr: '[taɪm]',        ru: 'время',                                        ex: 'I have no time.',                  exRu: 'У меня нет времени.' },
        { num: 37, word: 'want',    tr: '[wɒnt]',        ru: 'хотеть',                                       ex: 'I want to sleep.',                 exRu: 'Я хочу спать.' },
      ],
      note: {
        title: 'Заметка о разнице house / home',
        lines: [
          'house — физическое здание: a big house (большой дом).',
          'home — место, где ты живёшь и куда возвращаешься: I go home (я иду домой), at home (дома).',
        ],
      },
    },

    // ─────────────────────────────────────────────
    // БЛОК 2 — ЖИВЫЕ ПРЕДЛОЖЕНИЯ
    // ─────────────────────────────────────────────
    {
      id: 'sentences',
      type: 'sentences',
      title: 'Блок 2 — Живые предложения',
      intro: 'Читай каждое предложение вслух. После прочтения — посмотри на перевод.',
      items: [
        { num: 1,  en: 'I go to work every morning.',                   ru: 'Я иду на работу каждое утро.',                  note: 'to work — на работу' },
        { num: 2,  en: 'She comes home at seven in the evening.',       ru: 'Она приходит домой в семь вечера.',              note: 'at seven — в семь часов' },
        { num: 3,  en: 'I eat breakfast in the kitchen every day.',     ru: 'Я ем завтрак на кухне каждый день.',             note: 'breakfast — завтрак; kitchen — кухня' },
        { num: 4,  en: 'He drinks tea in the morning and coffee in the evening.', ru: 'Он пьёт чай утром и кофе вечером.',   note: 'tea — [tiː] — чай' },
        { num: 5,  en: 'I know this street. I live here.',              ru: 'Я знаю эту улицу. Я здесь живу.',               note: null },
        { num: 6,  en: 'Do you see that house?',                        ru: 'Ты видишь тот дом?',                             note: 'that — тот, та, то' },
        { num: 7,  en: 'My room is small but comfortable.',             ru: 'Моя комната маленькая, но уютная.',              note: 'comfortable — удобный, уютный' },
        { num: 8,  en: 'I want to go home now.',                        ru: 'Я хочу пойти домой сейчас.',                     note: null },
        { num: 9,  en: 'At night the street is quiet.',                 ru: 'Ночью улица тихая.',                             note: 'quiet — тихий, спокойный' },
        { num: 10, en: 'Every evening we eat dinner together.',         ru: 'Каждый вечер мы едим ужин вместе.',              note: 'dinner — ужин; together — вместе' },
        { num: 11, en: 'I sleep 7 hours every night.',                  ru: 'Я сплю 7 часов каждую ночь.',                    note: null },
        { num: 12, en: 'She knows a lot of people in this city.',       ru: 'Она знает много людей в этом городе.',           note: 'a lot of — много; people — люди' },
        { num: 13, en: 'I have no time in the morning.',                ru: 'У меня нет времени утром.',                      note: null },
        { num: 14, en: 'He comes to my room and we talk.',              ru: 'Он приходит в мою комнату, и мы разговариваем.', note: null },
        { num: 15, en: "I am at home now. I don't want to go out.",     ru: 'Я сейчас дома. Я не хочу выходить.',             note: "go out — выходить на улицу" },
      ],
      note: {
        title: 'Обрати внимание — конструкция «want to»',
        lines: [
          'I want to + глагол = «я хочу» + что-то сделать',
          'I want to sleep. — Я хочу спать.',
          'She wants to go home. — Она хочет пойти домой.',
          'Запомни: после want to всегда стоит чистый глагол без изменений.',
        ],
      },
    },

    // ─────────────────────────────────────────────
    // БЛОК 3 — МИНИ-ТЕКСТ
    // ─────────────────────────────────────────────
    {
      id: 'text',
      type: 'mini-text',
      title: 'Блок 3 — Мини-текст',
      textTitle: '«Мой обычный день»',
      original: [
        'My day starts early. Every morning I wake up at seven. I go to the kitchen and drink a cup of tea. I don\'t eat much in the morning — just some bread and fruit.',
        'Then I go to work. I walk down my street and take the bus. The bus stop is close to my house. I know some people at the bus stop. We see each other every day.',
        'At work I am busy. But I like my job, so the time goes fast.',
        'In the evening I come home. I eat dinner and watch TV or read. My room is small, but it is my favourite place. It is quiet here at night.',
        'I want to sleep at ten. But sometimes I drink tea and think about my day. What was good? What do I want to do tomorrow?',
        'My day is simple. But I am happy with my life.',
      ],
      translation: [
        'Мой день начинается рано. Каждое утро я просыпаюсь в семь. Я иду на кухню и выпиваю чашку чая. Утром я много не ем — только хлеб и фрукты.',
        'Потом я иду на работу. Я иду по своей улице и сажусь на автобус. Остановка рядом с моим домом. На остановке я знаю некоторых людей. Мы видим друг друга каждый день.',
        'На работе я занят. Но мне нравится моя работа, поэтому время идёт быстро.',
        'Вечером я прихожу домой. Я ужинаю и смотрю телевизор или читаю. Моя комната маленькая, но это моё любимое место. Ночью здесь тихо.',
        'Я хочу спать в десять. Но иногда я пью чай и думаю о своём дне. Что было хорошего? Что я хочу сделать завтра?',
        'Мой день простой. Но я доволен своей жизнью.',
      ],
      vocab: [
        { word: 'starts',    tr: '[stɑːts]',    ru: 'начинается' },
        { word: 'early',     tr: '[ˈɜːli]',     ru: 'рано' },
        { word: 'wake up',   tr: '[weɪk ʌp]',   ru: 'просыпаться' },
        { word: 'cup',       tr: '[kʌp]',        ru: 'чашка' },
        { word: 'much',      tr: '[mʌtʃ]',       ru: 'много (с неисчисляемым)' },
        { word: 'just',      tr: '[dʒʌst]',      ru: 'просто, только' },
        { word: 'bread',     tr: '[bred]',        ru: 'хлеб' },
        { word: 'fruit',     tr: '[fruːt]',       ru: 'фрукт(ы)' },
        { word: 'then',      tr: '[ðen]',         ru: 'затем, потом' },
        { word: 'walk',      tr: '[wɔːk]',        ru: 'идти пешком, гулять' },
        { word: 'bus stop',  tr: '[bʌs stɒp]',   ru: 'автобусная остановка' },
        { word: 'close to',  tr: '[kləʊs tuː]',  ru: 'рядом с' },
        { word: 'busy',      tr: '[ˈbɪzi]',       ru: 'занятой' },
        { word: 'fast',      tr: '[fɑːst]',       ru: 'быстро' },
        { word: 'place',     tr: '[pleɪs]',       ru: 'место' },
        { word: 'sometimes', tr: '[ˈsʌmtaɪmz]',  ru: 'иногда' },
        { word: 'tomorrow',  tr: '[təˈmɒrəʊ]',   ru: 'завтра' },
        { word: 'happy with',tr: '—',             ru: 'доволен чем-то' },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 4 — ПОНИМАНИЕ СТРУКТУРЫ
    // ─────────────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Как строится вопрос и отрицание в английском.',
      items: [
        {
          sentence: 'I go home.  →  Do you go home?',
          schema: 'Do / Does  |  КТО  |  ДЕЙСТВИЕ  |  ЧТО / ГДЕ / КОГДА',
          explanation: [
            'Do — для I / you / we / they',
            'Does — для he / she / it',
            'После does глагол становится «чистым»: Does she drink? (не drinks)',
          ],
          pattern: 'Do/Does + КТО + глагол?',
          examples: [
            'Do you see that house? — Ты видишь тот дом?',
            'Does she drink tea? — Она пьёт чай?',
            'Does he sleep at ten? — Он спит в десять?',
          ],
        },
        {
          sentence: "I go home.  →  I don't go home.",
          schema: "КТО + don't/doesn't + ГЛАГОЛ",
          explanation: [
            "don't = do not (для I / you / we / they)",
            "doesn't = does not (для he / she / it)",
          ],
          pattern: "don't / doesn't + глагол",
          examples: [
            "I don't eat much in the morning. — Я много не ем утром.",
            "She doesn't know this man. — Она не знает этого человека.",
          ],
        },
        {
          sentence: 'I want to sleep.',
          schema: 'КТО  |  want(s) to  |  ГЛАГОЛ (чистый)',
          explanation: [
            'I want to + глагол = я хочу что-то сделать.',
            'She wants to + глагол = она хочет что-то сделать. (wants — с -s для he/she/it)',
          ],
          pattern: 'want to + глагол',
          examples: [
            'I want to go home. — Я хочу пойти домой.',
            'She wants to eat. — Она хочет есть.',
            'Do you want to come? — Ты хочешь прийти?',
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 5 — МЫСЛИМ НА АНГЛИЙСКОМ
    // ─────────────────────────────────────────────
    {
      id: 'thinking',
      type: 'thinking',
      title: 'Блок 5 — Мыслим на английском',
      sections: [
        {
          subtitle: '5.1. Продолжи фразу',
          hint: 'Попробуй продолжить каждую фразу на английском. Нет правильного ответа — важно попробовать.',
          type: 'continue',
          items: [
            'Every morning I...',
            'In the evening I...',
            'I want to...',
            'I go to...',
            'At night I...',
          ],
        },
        {
          subtitle: '5.2. Ответь на вопросы по тексту',
          hint: 'Прочитай вопрос и ответь на него. Можно одним-двумя словами.',
          type: 'questions',
          items: [
            { q: 'What time does the person wake up?',      hint: 'В котором часу он просыпается?' },
            { q: 'How does he get to work?',                hint: 'Как он добирается до работы?' },
            { q: 'Does he eat a big breakfast?',            hint: 'Он плотно завтракает?' },
            { q: 'What does he do in the evening?',         hint: 'Что он делает вечером?' },
            { q: 'What time does he want to sleep?',        hint: 'В котором часу он хочет спать?' },
          ],
        },
        {
          subtitle: '5.3. Переведи с русского на английский',
          hint: 'Попробуй перевести. После каждого предложения — правильный ответ.',
          type: 'translate',
          items: [
            { ru: 'Каждое утро я пью кофе.',             en: 'Every morning I drink coffee.' },
            { ru: 'Я хочу пойти домой.',                 en: 'I want to go home.' },
            { ru: 'Ночью улица тихая.',                  en: 'At night the street is quiet.' },
            { ru: 'Она не знает этого человека.',        en: "She doesn't know this man." },
            { ru: 'Он приходит домой каждый вечер в шесть.', en: 'He comes home every evening at six.' },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 6 — МИНИ-ПОВТОРЕНИЕ
    // ─────────────────────────────────────────────
    {
      id: 'review',
      type: 'review',
      title: 'Блок 6 — Мини-повторение',
      sections: [
        {
          subtitle: '6.1. Вставь пропущенное слово',
          hint: 'Выбери правильное слово из скобок и вставь в предложение.',
          type: 'fill',
          items: [
            { sentence: 'Every ___ I wake up at seven.',     options: 'morning / street / room',    answer: 'morning' },
            { sentence: 'I ___ to work by bus.',             options: 'see / go / know',            answer: 'go' },
            { sentence: 'She ___ home at six in the evening.', options: 'wants / drinks / comes',  answer: 'comes' },
            { sentence: 'Do you ___ this street?',           options: 'know / eat / sleep',         answer: 'know' },
            { sentence: "I ___ want to go out.",             options: 'am / don\'t / does',         answer: "don't" },
            { sentence: 'He ___ tea every morning.',         options: 'drinks / comes / goes',      answer: 'drinks' },
            { sentence: 'My room is small but ___.',         options: 'busy / quiet / fast',        answer: 'quiet' },
            { sentence: 'At ___ I sleep well.',              options: 'day / morning / night',      answer: 'night' },
            { sentence: 'I have no ___ now.',                options: 'home / time / room',         answer: 'time' },
            { sentence: 'She ___ to eat dinner at home.',    options: 'wants / knows / sees',       answer: 'wants' },
          ],
        },
        {
          subtitle: '6.2. Перефразируй предложение',
          hint: 'Скажи то же самое другими словами.',
          type: 'rephrase',
          items: [
            { task: 'I go to bed at ten.',                   answer: 'I sleep at ten.' },
            { task: "She doesn't want to go out.",           answer: 'She wants to stay at home.' },
            { task: 'I take the bus to work every morning.', answer: 'Every morning I go to work by bus.' },
            { task: 'He eats dinner with his family.',       answer: 'He eats dinner together.' },
            { task: 'I live close to the bus stop.',         answer: 'The bus stop is close to my house.' },
          ],
        },
        {
          subtitle: '6.3. Мини-текст для чтения',
          hint: 'Читай медленно. Слова из Модуля 1 и Модуля 2.',
          type: 'reading',
          textTitle: 'A Day in the City',
          original: [
            'My name is Dmitry. I live in a big city. I have a small room in an apartment. My street is quiet at night, but busy in the morning.',
            "Every morning I wake up early and drink coffee. I don't eat much — just fruit. Then I go to work.",
            'In the evening I come home and eat dinner. My friend Ivan sometimes comes to my place. We drink tea and talk. He is a good man. I like spending time with him.',
            'At night I read a little and then sleep. My life is simple. But I know this: I am happy here.',
          ],
          translation: [
            'Меня зовут Дмитрий. Я живу в большом городе. У меня маленькая комната в квартире. Моя улица тихая ночью, но оживлённая утром.',
            'Каждое утро я просыпаюсь рано и пью кофе. Много не ем — только фрукты. Потом иду на работу.',
            'Вечером я прихожу домой и ужинаю. Мой друг Иван иногда приходит ко мне. Мы пьём чай и разговариваем. Он хороший человек. Мне нравится проводить с ним время.',
            'Ночью я немного читаю и потом сплю. Моя жизнь простая. Но я знаю одно: здесь мне хорошо.',
          ],
        },
      ],
    },
  ],

  next: {
    id: 3,
    title: 'Модуль 3 — Люди, общение и действия',
    preview: [
      'say (говорить), tell (рассказывать), ask (спрашивать), think (думать)',
      'people (люди), friend (друг), family (семья), child (ребёнок)',
      'old / young (старый / молодой), new (новый), other (другой)',
      'need (нуждаться), can (мочь, уметь), help (помогать)',
    ],
    tip: 'Опиши свой обычный день на английском — 5–7 предложений. Используй слова из Модуля 1 и Модуля 2. Не ищи новые слова — работай с тем, что уже знаешь.',
  },
}
