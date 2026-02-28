export const module14 = {
  id: 14,
  levelId: 'level-1',
  title: 'Город и транспорт',
  words: '257–276',
  wordCount: 20,
  totalWords: 3000,

  blocks: [
    // ── БЛОК 1 ── СПИСОК СЛОВ ──────────────────────────────────────────────
    {
      id: 'words',
      type: 'word-list',
      title: 'Блок 1 — Список слов',
      intro: 'Слова 257–276 — ориентирование в городе и транспорт.',
      words: [
        { num: 257, word: 'street',   tr: '[striːt]',     ru: 'улица',                       ex: 'Turn left at the next street.',              exRu: 'Поверните налево на следующей улице.' },
        { num: 258, word: 'road',     tr: '[rəʊd]',       ru: 'дорога; шоссе',               ex: 'The road to the city is long and straight.',  exRu: 'Дорога до города длинная и прямая.' },
        { num: 259, word: 'bridge',   tr: '[brɪdʒ]',      ru: 'мост',                        ex: 'We crossed the bridge over the river.',       exRu: 'Мы перешли через мост над рекой.' },
        { num: 260, word: 'corner',   tr: '[ˈkɔːnə]',     ru: 'угол; перекрёсток',           ex: 'Wait for me at the corner of the street.',   exRu: 'Жди меня на углу улицы.' },
        { num: 261, word: 'square',   tr: '[skweə]',      ru: 'площадь',                     ex: 'The main square is full of people on weekends.', exRu: 'В выходные дни главная площадь полна людей.' },
        { num: 262, word: 'building', tr: '[ˈbɪldɪŋ]',   ru: 'здание',                      ex: 'That old building was built two hundred years ago.', exRu: 'Это старое здание было построено двести лет назад.' },
        { num: 263, word: 'station',  tr: '[ˈsteɪʃn]',   ru: 'станция; вокзал',             ex: 'The train station is in the centre of the city.', exRu: 'Железнодорожный вокзал находится в центре города.' },
        { num: 264, word: 'bus',      tr: '[bʌs]',        ru: 'автобус',                     ex: 'I take the bus to work every morning.',       exRu: 'Каждое утро я еду на работу на автобусе.' },
        { num: 265, word: 'train',    tr: '[treɪn]',      ru: 'поезд',                       ex: 'The train leaves at eight fifteen.',           exRu: 'Поезд отправляется в восемь пятнадцать.' },
        { num: 266, word: 'car',      tr: '[kɑː]',        ru: 'машина, автомобиль',          ex: 'She drives to work — her office is far.',     exRu: 'Она ездит на работу на машине — её офис далеко.' },
        { num: 267, word: 'bike',     tr: '[baɪk]',       ru: 'велосипед; мотоцикл',         ex: 'He rides his bike to the park every morning.', exRu: 'Каждое утро он едет в парк на велосипеде.' },
        { num: 268, word: 'walk',     tr: '[wɔːk]',       ru: 'идти пешком; прогулка',       ex: 'I walk to work when the weather is good.',   exRu: 'Когда погода хорошая, я хожу на работу пешком.' },
        { num: 269, word: 'drive',    tr: '[draɪv]',      ru: 'ехать за рулём; водить',      ex: "Can you drive? — Yes, I got my licence last year.", exRu: 'Ты умеешь водить? — Да, я получил права в прошлом году.' },
        { num: 270, word: 'stop',     tr: '[stɒp]',       ru: 'остановка; остановиться',     ex: 'Get off at the next stop.',                   exRu: 'Выходи на следующей остановке.' },
        { num: 271, word: 'ticket',   tr: '[ˈtɪkɪt]',    ru: 'билет',                       ex: 'I bought a return ticket online.',             exRu: 'Я купил билет туда и обратно онлайн.' },
        { num: 272, word: 'left',     tr: '[left]',       ru: 'левый; налево',               ex: 'Turn left at the traffic lights.',             exRu: 'Поверните налево у светофора.' },
        { num: 273, word: 'right',    tr: '[raɪt]',       ru: 'правый; направо; правильный', ex: 'Turn right after the bridge.',                exRu: 'После моста поверните направо.' },
        { num: 274, word: 'straight', tr: '[streɪt]',     ru: 'прямо; прямой',               ex: 'Go straight and you will see the station.',   exRu: 'Идите прямо, и вы увидите вокзал.' },
        { num: 275, word: 'map',      tr: '[mæp]',        ru: 'карта',                       ex: 'I always use a map when I visit a new city.',  exRu: 'Когда я посещаю новый город, всегда пользуюсь картой.' },
        { num: 276, word: 'centre',   tr: '[ˈsentə]',     ru: 'центр',                       ex: 'All the museums are in the city centre.',      exRu: 'Все музеи находятся в центре города.' },
      ],
      note: {
        title: 'right — три значения; транспорт — предлоги',
        lines: [
          'right: направо (Turn right), правый (the right side), правильный (That\'s right!).',
          'straight произносится [streɪt] — gh не читается, как в night, light.',
          'by + транспорт: by bus / by train / by car / by bike. Но: on foot (пешком).',
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
        { num: 1,  en: 'Our street is quiet — not many cars, lots of trees.',                          ru: 'Наша улица тихая — мало машин, много деревьев.', note: '' },
        { num: 2,  en: 'The road to the airport is under repair. Take the side road.',                 ru: 'Дорога в аэропорт на ремонте. Поезжайте по объездной.', note: 'under repair — на ремонте' },
        { num: 3,  en: 'We stopped on the bridge and looked down at the river.',                       ru: 'Мы остановились на мосту и посмотрели вниз на реку.', note: '' },
        { num: 4,  en: 'There is a small café on the corner — I go there every morning.',             ru: 'На углу есть небольшое кафе — я хожу туда каждое утро.', note: '' },
        { num: 5,  en: 'The central square is beautiful in winter — they put up a big tree.',         ru: 'Центральная площадь зимой красивая — там ставят большую ёлку.', note: '' },
        { num: 6,  en: 'That glass building was finished last year. It looks very modern.',            ru: 'То стеклянное здание было достроено в прошлом году. Выглядит очень современно.', note: '' },
        { num: 7,  en: 'I missed my train. The next one is in forty minutes.',                        ru: 'Я опоздал на поезд. Следующий через сорок минут.', note: 'missed — опоздал на' },
        { num: 8,  en: 'The bus is always crowded in the morning. I prefer to walk.',                 ru: 'Автобус утром всегда переполнен. Я предпочитаю ходить пешком.', note: 'crowded — переполненный' },
        { num: 9,  en: 'She drives a small red car. I always recognise it from far away.',            ru: 'Она ездит на маленькой красной машине. Я всегда узнаю её издалека.', note: '' },
        { num: 10, en: 'I ride my bike to the market on Saturdays — it is faster than the bus.',     ru: 'В субботу я езжу на рынок на велосипеде — это быстрее, чем на автобусе.', note: '' },
        { num: 11, en: 'It is only a ten-minute walk from here to the station.',                      ru: 'Отсюда до станции всего десять минут пешком.', note: '' },
        { num: 12, en: 'My ticket was for the wrong day. I had to buy a new one.',                   ru: 'Мой билет был на неверный день. Пришлось купить новый.', note: '' },
        { num: 13, en: 'Turn left at the traffic lights, then go straight for two blocks.',           ru: 'Поверните налево у светофора, затем идите прямо два квартала.', note: 'traffic lights — светофор' },
        { num: 14, en: 'I left my map at the hotel, so I used my phone instead.',                    ru: 'Я оставил карту в гостинице, поэтому пользовался телефоном.', note: '' },
        { num: 15, en: 'Everything I need is in the city centre — shops, cafés, the cinema.',        ru: 'Всё, что мне нужно, находится в центре города — магазины, кафе, кино.', note: '' },
      ],
      note: {
        title: 'Как объяснять дорогу',
        lines: [
          'Turn left / right. Go straight. Take the first street on the left.',
          'It is next to / opposite / behind [ориентир].',
          'It is on the corner of … and …',
          'It is about ten minutes on foot.',
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
        'I arrived in a new city last Friday. I had never been there before. I had a small bag, a phone and no plan.',
        'I left the train station and walked out onto the street. It was wide and busy — lots of cars, buses, people. I stood there for a moment and just looked around.',
        'I opened the map on my phone and found the centre. It was about a twenty-minute walk. I decided to go on foot — I wanted to see the city.',
        'I walked along the main road, then turned left at a big square with a fountain. The streets got narrower and quieter. Old buildings, small shops, a café on every corner.',
        'I stopped at one of the cafés, sat down and ordered coffee. A woman at the next table was looking at a paper map — a real one. I smiled. She smiled back.',
        'I walked for two more hours. I crossed two bridges, got lost twice, and found a beautiful small park near the river. I sat on a bench and watched people walk past.',
        'By evening I felt like I knew the city a little. I didn\'t need a plan. I just walked, and the city showed me itself.',
      ],
      translation: [
        'В прошлую пятницу я приехал в новый город. Я никогда раньше там не был. У меня была небольшая сумка, телефон и никакого плана.',
        'Я вышел с вокзала на улицу. Она была широкой и оживлённой — много машин, автобусов, людей. Я постоял немного и просто огляделся.',
        'Я открыл карту в телефоне и нашёл центр. Примерно двадцать минут пешком. Я решил идти пешком — хотел посмотреть город.',
        'Я шёл по главной дороге, затем повернул налево на большой площади с фонтаном. Улицы становились всё уже и тише. Старые здания, небольшие магазины, кафе на каждом углу.',
        'Я остановился в одном из кафе, сел и заказал кофе. Женщина за соседним столиком смотрела на бумажную карту — настоящую. Я улыбнулся. Она улыбнулась в ответ.',
        'Я ходил ещё два часа. Пересёк два моста, дважды заблудился и нашёл красивый маленький парк у реки. Я сел на скамейку и наблюдал, как мимо проходят люди.',
        'К вечеру я чувствовал, что немного знаю этот город. Никакого плана не требовалось. Я просто шёл, и город сам себя показывал.',
      ],
      vocab: [
        { word: 'arrived',    tr: '[əˈraɪvd]',   ru: 'приехал, прибыл' },
        { word: 'fountain',   tr: '[ˈfaʊntɪn]',  ru: 'фонтан' },
        { word: 'narrower',   tr: '[ˈnærəʊə]',   ru: 'уже (сравн. ст.)' },
        { word: 'ordered',    tr: '[ˈɔːdəd]',    ru: 'заказал' },
        { word: 'got lost',   tr: '—',           ru: 'заблудился' },
        { word: 'bench',      tr: '[bentʃ]',      ru: 'скамейка' },
        { word: 'walked past',tr: '—',           ru: 'проходили мимо' },
        { word: 'showed',     tr: '[ʃəʊd]',       ru: 'показал' },
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
          sentence:    'Turn left at the traffic lights.',
          schema:      'Turn left / right. Go straight. Go past [landmark].',
          explanation: 'Указания на дорогу строятся на повелительном наклонении. Ориентиры вводятся предлогами: at (у), past (мимо), along (вдоль).',
          pattern:     'Turn [left / right]. / Go [straight / past the bridge].',
          examples:    ['Turn right after the bridge.', 'Go straight for two blocks.', 'Go past the station.'],
        },
        {
          sentence:    'It is next to the station.',
          schema:      'It is [next to / opposite / behind] + [place].',
          explanation: 'Предлоги места помогают описать расположение: next to — рядом, opposite — напротив, behind — за, on the corner of — на углу.',
          pattern:     'It is [next to / opposite / behind / on the corner of] …',
          examples:    ['It is next to the park.', 'It is opposite the station.', 'It is on the corner of Park Road and Main Street.'],
        },
        {
          sentence:    'I go to work by bus.',
          schema:      'go / come + by + [transport] / on foot.',
          explanation: 'by + транспорт (без артикля): by bus, by train, by car, by bike. Исключение — пешком: on foot.',
          pattern:     'I go [by bus / by train / by car / on foot].',
          examples:    ['I go to work by bus.', 'She came by train.', 'He walked — he went on foot.'],
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
            'Every morning I go to work by…',
            'The city centre near me has…',
            'When I visit a new city, I always…',
            'I prefer walking to taking the bus because…',
            'The street where I live…',
          ],
        },
        {
          type:   'questions',
          title:  '5.2. Ответь на вопросы по тексту',
          items: [
            { q: 'How did the person get to the new city?',            hint: 'Как он добрался?' },
            { q: 'How did he get from the station to the centre?',     hint: 'Как добрался до центра?' },
            { q: 'Where did the streets get quieter?',                 hint: 'Где улицы стали тише?' },
            { q: 'What did the woman at the café have?',               hint: 'Что было у женщины в кафе?' },
            { q: 'How did the person feel by the evening?',            hint: 'Как он себя чувствовал к вечеру?' },
          ],
        },
        {
          type:   'translate',
          title:  '5.3. Переведи с русского на английский',
          items: [
            { ru: 'Поверните направо у светофора, затем идите прямо.',      en: 'Turn right at the traffic lights, then go straight.' },
            { ru: 'Я каждый день езжу на работу на поезде.',               en: 'I go to work by train every day.' },
            { ru: 'Вокзал находится рядом с центральной площадью.',         en: 'The station is next to the central square.' },
            { ru: 'Отсюда до моста десять минут пешком.',                   en: 'It is a ten-minute walk from here to the bridge.' },
            { ru: 'Я забыл купить билет и опоздал на автобус.',             en: 'I forgot to buy a ticket and missed the bus.' },
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
            { sentence: 'Turn ___ at the corner, then go straight.',          answer: 'left' },
            { sentence: 'The ___ station is in the city centre.',             answer: 'train' },
            { sentence: 'I missed the ___ — next one is in thirty minutes.', answer: 'bus' },
            { sentence: 'Can you show me on the ___? I am lost.',            answer: 'map' },
            { sentence: 'All the main museums are in the city ___.',         answer: 'centre' },
            { sentence: 'Go ___ for two blocks, then turn right.',           answer: 'straight' },
            { sentence: 'I bought a ___ for the wrong day.',                 answer: 'ticket' },
            { sentence: 'The café is on the ___ of the main street.',       answer: 'corner' },
            { sentence: 'It is only a five-minute ___ from here.',          answer: 'walk' },
            { sentence: 'She ___ to work every day — she loves her car.',   answer: 'drives' },
          ],
        },
        {
          type:  'rephrase',
          title: '6.2. Перефразируй предложение',
          items: [
            { original: 'I use the bus to get to work.',             rephrased: 'I go to work by bus.' },
            { original: 'The shop is not far — you can walk there.', rephrased: 'It is a short walk from here.' },
            { original: 'Don\'t turn — keep going in the same direction.', rephrased: 'Go straight.' },
            { original: 'The café is across the road from the station.', rephrased: 'The café is opposite the station.' },
            { original: 'I couldn\'t find my way and had to ask someone.', rephrased: 'I got lost and had to ask for directions.' },
          ],
        },
        {
          type:    'reading',
          title:   '6.3. Мини-текст для чтения',
          passage: [
            "Last weekend I visited my friend Oleg. He lives in another part of the city — not far, but not close either. About forty minutes by public transport.",
            "I usually take the bus, but it was a Saturday and the buses were slow. I decided to go by train instead. I walked to the nearest station — about seven minutes on foot — and bought a ticket at the machine.",
            'The train was on time. I got off at the central station and walked from there. Oleg told me: "Go straight out of the station, cross the square, turn right at the big building, then take the second street on the left. My building is on the corner."',
            "Simple enough. But I went right when I should have gone left. I ended up on the wrong street and had to call him. He laughed and corrected me.",
            "Five minutes later I was at his door. We spent the afternoon together — coffee, food, talking. Outside the window it was grey and cold, but inside it was warm.",
            "On the way back, I checked the map twice. No mistakes this time. I caught the last train and got home just before midnight.",
            "Some days, getting there is half the journey.",
          ],
          translation: [
            'В прошлые выходные я навестил своего друга Олега. Он живёт в другой части города — около сорока минут на общественном транспорте.',
            'Обычно я езжу на автобусе, но была суббота и автобусы шли медленно. Я решил поехать на поезде. Прошёл до ближайшей станции — около семи минут пешком — и купил билет в автомате.',
            'Поезд пришёл вовремя. Я вышел на центральной станции и пошёл оттуда пешком. Олег объяснил: «Выйди прямо со станции, пересеки площадь, поверни направо у большого здания, затем сверни на вторую улицу налево. Моё здание на углу».',
            'Довольно просто. Но я повернул направо, хотя нужно было налево. Оказался не на той улице и пришлось позвонить ему. Он засмеялся и поправил меня.',
            'Через пять минут я был у его двери. Мы провели вместе весь вечер — кофе, еда, разговоры.',
            'На обратном пути я дважды сверился с картой. На этот раз без ошибок. Успел на последний поезд.',
            'Некоторые дни сама дорога — это половина путешествия.',
          ],
        },
      ],
    },
  ],

  next: {
    id:      15,
    title:   'Работа и профессии',
    preview: ['job, work, office, company, meeting', 'doctor, teacher, driver, engineer', 'hire, fire, earn, salary'],
    tip:     'Объясни дорогу от твоего дома до ближайшей остановки по-английски: turn left / right, go straight.',
  },
}
