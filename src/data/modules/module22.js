export const module22 = {
  id: 22,
  levelId: 'level-1',
  title: 'Хобби и отдых',
  words: '417–436',
  wordCount: 20,
  totalWords: 3000,

  blocks: [
    // ── БЛОК 1 ── СПИСОК СЛОВ ──────────────────────────────────────────────
    {
      id: 'words',
      type: 'word-list',
      title: 'Блок 1 — Список слов',
      intro: 'Слова 417–436 — хобби, отдых, свободное время.',
      words: [
        { num: 417, word: 'music',     tr: '[ˈmjuːzɪk]',   ru: 'музыка',                             ex: 'She listens to music while she runs — it helps her focus.',              exRu: 'Она слушает музыку во время пробежки — это помогает ей сосредоточиться.' },
        { num: 418, word: 'film',      tr: '[fɪlm]',        ru: 'фильм; кино',                        ex: 'We watched a really good film last night — I cried at the end.',         exRu: 'Вчера вечером мы посмотрели очень хороший фильм — я плакал в конце.' },
        { num: 419, word: 'book',      tr: '[bʊk]',         ru: 'книга; бронировать',                 ex: 'I always have a book with me — you never know when you will have to wait.', exRu: 'У меня всегда есть книга — никогда не знаешь, когда придётся ждать.' },
        { num: 420, word: 'game',      tr: '[ɡeɪm]',        ru: 'игра; матч',                         ex: 'He plays video games in the evenings to relax after work.',               exRu: 'Вечерами он играет в видеоигры, чтобы расслабиться после работы.' },
        { num: 421, word: 'draw',      tr: '[drɔː]',        ru: 'рисовать; ничья',                    ex: 'She draws portraits — she has been doing it since she was a child.',     exRu: 'Она рисует портреты — занимается этим с детства.' },
        { num: 422, word: 'paint',     tr: '[peɪnt]',       ru: 'рисовать красками; краска',          ex: 'He paints landscapes in watercolour on weekends.',                        exRu: 'По выходным он рисует пейзажи акварелью.' },
        { num: 423, word: 'cook',      tr: '[kʊk]',         ru: 'готовить (еду); повар',              ex: 'She loves to cook — she tries a new recipe every Sunday.',               exRu: 'Она любит готовить — каждое воскресенье пробует новый рецепт.' },
        { num: 424, word: 'travel',    tr: '[ˈtrævl]',      ru: 'путешествовать; поездка',            ex: 'He travels for work, but also takes one holiday trip a year just for himself.', exRu: 'Он ездит в командировки, но и один раз в год путешествует только для себя.' },
        { num: 425, word: 'swim',      tr: '[swɪm]',        ru: 'плавать',                            ex: 'She swims three times a week — early in the morning before work.',        exRu: 'Она плавает три раза в неделю — рано утром до работы.' },
        { num: 426, word: 'run',       tr: '[rʌn]',         ru: 'бежать; бегать',                     ex: 'He runs five kilometres every morning, even in winter.',                  exRu: 'Он бегает по пять километров каждое утро, даже зимой.' },
        { num: 427, word: 'dance',     tr: '[dɑːns]',       ru: 'танцевать; танец',                   ex: 'They met at a dance class and have been together ever since.',           exRu: 'Они познакомились на занятии танцами и с тех пор вместе.' },
        { num: 428, word: 'sing',      tr: '[sɪŋ]',         ru: 'петь',                               ex: 'He sings in a small choir on Thursday evenings.',                         exRu: 'По четвергам вечером он поёт в небольшом хоре.' },
        { num: 429, word: 'play',      tr: '[pleɪ]',        ru: 'играть; пьеса',                      ex: 'She plays the piano — she has been learning for three years.',           exRu: 'Она играет на пианино — учится уже три года.' },
        { num: 430, word: 'watch',     tr: '[wɒtʃ]',        ru: 'смотреть; наблюдать; часы',         ex: 'I watch a series in the evenings — one episode, then I go to bed.',      exRu: 'По вечерам я смотрю сериал — одна серия, потом спать.' },
        { num: 431, word: 'listen',    tr: '[ˈlɪsn]',       ru: 'слушать',                            ex: 'She listens to podcasts on the way to work.',                             exRu: 'По дороге на работу она слушает подкасты.' },
        { num: 432, word: 'hobby',     tr: '[ˈhɒbi]',       ru: 'хобби; увлечение',                   ex: 'His hobby is photography — he takes his camera everywhere.',              exRu: 'Его хобби — фотография, он берёт камеру везде.' },
        { num: 433, word: 'relax',     tr: '[rɪˈlæks]',     ru: 'расслабляться; отдыхать',            ex: 'After a long week, I just want to relax at home with a book.',           exRu: 'После долгой недели я просто хочу отдохнуть дома с книгой.' },
        { num: 434, word: 'fun',       tr: '[fʌn]',         ru: 'весело; удовольствие; веселье',     ex: 'That was fun — we should do it again sometime.',                         exRu: 'Было весело — надо повторить как-нибудь.' },
        { num: 435, word: 'interest',  tr: '[ˈɪntrəst]',   ru: 'интерес; интересовать',              ex: 'What are your interests outside of work?',                               exRu: 'Чем ты увлекаешься помимо работы?' },
        { num: 436, word: 'favourite', tr: '[ˈfeɪvərɪt]',  ru: 'любимый; фаворит',                  ex: 'What is your favourite film of all time?',                               exRu: 'Какой твой любимый фильм всех времён?' },
      ],
      note: {
        title: 'play — три правила; fun vs funny',
        lines: [
          'play the piano / guitar — инструмент: артикль THE обязателен.',
          'play football / tennis — спорт: без артикля.',
          'fun — весело, доставляет удовольствие: It was fun. / funny — смешной: That joke was funny.',
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
        { num: 1,  en: 'She plays music at home all day — classical in the morning, jazz in the evening.',                  ru: 'Она слушает музыку весь день дома — классику по утрам, джаз по вечерам.', note: '' },
        { num: 2,  en: 'We went to see a film last Saturday — the cinema was almost full.',                                 ru: 'В прошлую субботу мы ходили в кино — зал был почти полон.', note: 'cinema — [ˈsɪnəmə] — кинотеатр' },
        { num: 3,  en: 'I have read this book three times — each time I notice something new.',                             ru: 'Я читал эту книгу три раза — каждый раз замечаю что-то новое.', note: '' },
        { num: 4,  en: 'They played a board game after dinner — it turned into a two-hour argument.',                      ru: 'После ужина они сыграли в настольную игру — это превратилось в двухчасовой спор.', note: 'board game — настольная игра' },
        { num: 5,  en: 'She draws every evening — just small sketches in a notebook, nothing serious.',                    ru: 'Каждый вечер она рисует — просто небольшие наброски в блокноте, ничего серьёзного.', note: 'sketches — [sketʃɪz] — наброски' },
        { num: 6,  en: 'He painted the walls of his flat himself — it took three weekends but looks great.',               ru: 'Он сам покрасил стены в своей квартире — заняло три выходных, но выглядит отлично.', note: '' },
        { num: 7,  en: 'I love cooking for friends — there is something satisfying about feeding people.',                 ru: 'Я люблю готовить для друзей — в том, чтобы кормить людей, есть что-то приятное.', note: 'satisfying — [ˈsætɪsfaɪɪŋ] — приятный' },
        { num: 8,  en: 'She travelled across four countries last summer with just a backpack.',                             ru: 'Прошлым летом она объездила четыре страны с одним рюкзаком.', note: 'backpack — [ˈbækpæk] — рюкзак' },
        { num: 9,  en: 'I used to swim competitively, but now I just go for the exercise.',                                ru: 'Раньше я плавал на соревнованиях, но теперь хожу просто ради физической нагрузки.', note: 'used to — раньше, бывало' },
        { num: 10, en: 'He started running to lose weight, but now he does it because he enjoys it.',                      ru: 'Он начал бегать, чтобы похудеть, но теперь делает это, потому что ему нравится.', note: 'lose weight — похудеть' },
        { num: 11, en: 'They danced until midnight — nobody wanted to leave first.',                                        ru: 'Они танцевали до полуночи — никто не хотел уходить первым.', note: '' },
        { num: 12, en: 'She sings in the shower every morning — her neighbours have complained twice.',                    ru: 'Каждое утро она поёт в душе — соседи уже дважды жаловались.', note: 'complained — [kəmˈpleɪnd] — пожаловались' },
        { num: 13, en: 'He plays chess online every evening — he has never beaten the top players, but he keeps trying.',  ru: 'Каждый вечер он играет в шахматы онлайн — победить лучших не получается, но он продолжает.', note: '' },
        { num: 14, en: 'I watched three episodes in a row last night — I told myself I would stop after one.',             ru: 'Вчера ночью я посмотрел три серии подряд — говорил себе, что остановлюсь на одной.', note: 'in a row — подряд' },
        { num: 15, en: 'What do you do to relax at the end of a long day?',                                                ru: 'Что ты делаешь, чтобы расслабиться в конце долгого дня?', note: '' },
      ],
      note: {
        title: 'watch vs look at vs see',
        lines: [
          'watch — наблюдать за чем-то в движении, во времени: watch a film, watch TV.',
          'look at — смотреть на что-то статичное: look at a photo, look at the map.',
          'see — видеть случайно: I saw a cat in the garden. — Я увидел кошку в саду.',
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
        'On Sundays, Lara does not plan. She wakes up when she wants, makes coffee and sees what the day brings.',
        'Last Sunday she started by reading. She had a novel she had been carrying around for two weeks without opening. She finally started it — and read for almost two hours without stopping.',
        'After lunch she took out her sketchbook. She had been drawing on and off for years — nothing professional, just a habit she kept for herself. She drew the view from her kitchen window: the building across the street, the tree just beginning to show its first leaves, a cat on a windowsill.',
        'In the evening she cooked something she had never made before — a soup with lentils and spices. She listened to music while she cooked. She burned the onions a little. The soup was still good.',
        'After dinner she watched a film. She didn\'t check her phone for three hours.',
        'When she went to bed, she thought: this was a good day. Not because anything special had happened. Just because it was hers.',
      ],
      translation: [
        'По воскресеньям Лара ничего не планирует. Просыпается когда хочет, готовит кофе и смотрит, что принесёт день.',
        'В прошлое воскресенье она начала с чтения. У неё был роман, который она носила с собой две недели не открывая. Наконец начала — и читала почти два часа без остановки.',
        'После обеда она достала скетчбук. Она рисовала от случая к случаю уже много лет — ничего профессионального, просто привычка для себя. Нарисовала вид из окна кухни: здание напротив, дерево, кошку на подоконнике.',
        'Вечером она приготовила что-то, чего никогда до этого не делала, — суп из чечевицы со специями. Слушала музыку. Немного подгорел лук. Суп всё равно вышел вкусным.',
        'После ужина посмотрела фильм. Три часа не брала телефон.',
        'Когда легла спать, подумала: это был хороший день. Не потому что произошло что-то особенное. Просто потому что он был её.',
      ],
      vocab: [
        { word: 'novel',       tr: '[ˈnɒvl]',         ru: 'роман (книга)' },
        { word: 'sketchbook',  tr: '[ˈsketʃbʊk]',    ru: 'скетчбук, блокнот для рисования' },
        { word: 'on and off',  tr: '—',               ru: 'время от времени, от случая к случаю' },
        { word: 'lentils',     tr: '[ˈlentɪlz]',     ru: 'чечевица' },
        { word: 'spices',      tr: '[ˈspaɪsɪz]',     ru: 'специи' },
        { word: 'burned',      tr: '[bɜːnd]',         ru: 'подгорел, сжёг' },
        { word: 'windowsill',  tr: '[ˈwɪndəʊsɪl]',  ru: 'подоконник' },
      ],
    },

    // ── БЛОК 4 ── ПОНИМАНИЕ СТРУКТУРЫ ─────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Ключевые паттерны модуля.',
      items: [
        {
          sentence:    'play the guitar / play football / play chess',
          schema:      'Три правила глагола play.',
          explanation: 'Музыкальный инструмент: play the guitar (артикль THE обязателен). Вид спорта: play football (без артикля). Игра: play chess, play a board game.',
          pattern:     'play the [instrument]; play [sport]; play [game].',
          examples:    ['She plays the violin.', 'He plays football every weekend.', 'They played chess for two hours.'],
        },
        {
          sentence:    'I like reading. She enjoys cooking.',
          schema:      'I like / enjoy / love + -ing.',
          explanation: 'После like, enjoy, love стоит герундий (-ing): I like reading. She enjoys cooking. He loves travelling. В разговоре также: I like to read. — оба варианта правильны.',
          pattern:     'like / enjoy / love + [doing].',
          examples:    ['I like reading before bed.', 'She enjoys cooking for friends.', 'They love dancing.'],
        },
        {
          sentence:    'I have been playing chess for ten years.',
          schema:      'Present Perfect Continuous — как давно.',
          explanation: 'Для описания хобби, которым занимаешься давно: I have been playing / drawing / running + for + время.',
          pattern:     'I have been [doing] + for [time].',
          examples:    ['I have been playing the piano for three years.', 'She has been running since school.', 'He has been drawing on and off for years.'],
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
            'My favourite way to relax is…',
            'I have been interested in… for…',
            'When I have free time, I usually…',
            'My favourite film / book / song is… because…',
            'One hobby I have always wanted to try is…',
          ],
        },
        {
          type:   'questions',
          title:  '5.2. Ответь на вопросы по тексту',
          items: [
            { q: 'How does Lara usually spend Sundays?',                    hint: 'Как Лара обычно проводит воскресенья?' },
            { q: 'What was the novel about?',                               hint: 'О чём был роман?' },
            { q: 'How long has Lara been drawing?',                         hint: 'Как давно Лара рисует?' },
            { q: 'What did she draw from her kitchen window?',              hint: 'Что она нарисовала из окна кухни?' },
            { q: 'Why did Lara think it was a good day?',                   hint: 'Почему Лара решила, что день был хорошим?' },
          ],
        },
        {
          type:   'translate',
          title:  '5.3. Переведи с русского на английский',
          items: [
            { ru: 'Моё хобби — фотография. Я беру камеру везде, куда иду.',     en: 'My hobby is photography. I take my camera everywhere I go.' },
            { ru: 'Она играет на гитаре уже пять лет — начала в школе.',        en: 'She has been playing the guitar for five years — she started at school.' },
            { ru: 'В свободное время я люблю смотреть фильмы и готовить что-нибудь новое.', en: 'In my free time I like watching films and cooking something new.' },
            { ru: 'Мы сыграли в несколько игр после ужина — было очень весело.', en: 'We played a few games after dinner — it was a lot of fun.' },
            { ru: 'Он путешествует каждый год — ему нравится открывать новые места.', en: 'He travels every year — he likes discovering new places.' },
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
            { sentence: 'My ___ hobby is reading — I always have a book with me.',     answer: 'favourite' },
            { sentence: 'She ___ the violin — she has been learning since she was six.', answer: 'plays' },
            { sentence: 'I need to ___. It has been a very long week.',                 answer: 'relax' },
            { sentence: 'We went to see a ___ last night — it was excellent.',          answer: 'film' },
            { sentence: 'He ___ five kilometres every morning before breakfast.',       answer: 'runs' },
            { sentence: 'What do you do in your free time? — I mostly ___ and draw.',  answer: 'read' },
            { sentence: 'She ___ a different country every summer.',                    answer: 'travels' },
            { sentence: 'They played a board ___ after dinner and argued for an hour.', answer: 'game' },
            { sentence: 'He ___ to podcasts in the evening — it helps him unwind.',    answer: 'listens' },
            { sentence: 'That party was such ___— we should do it again soon.',        answer: 'fun' },
          ],
        },
        {
          type:  'rephrase',
          title: '6.2. Перефразируй предложение',
          items: [
            { original: 'I enjoy reading very much.',                 rephrased: 'Reading is my hobby.' },
            { original: 'She has done yoga for three years.',         rephrased: 'She has been doing yoga for three years.' },
            { original: 'He watches TV to calm down.',                rephrased: 'He watches TV to relax.' },
            { original: 'What is your favourite thing when not working?', rephrased: 'What do you do in your free time?' },
            { original: 'That film made us laugh and was enjoyable.', rephrased: 'That film was funny and a lot of fun.' },
          ],
        },
        {
          type:    'reading',
          title:   '6.3. Мини-текст для чтения',
          passage: [
            'Dan had a guitar he hadn\'t played in four years. It stood in the corner of his bedroom, behind a coat and a box of old books.',
            'One evening he was bored. He had watched two films, read for a while, tried to sleep. Nothing worked. He looked at the guitar.',
            'He took it out, sat on the edge of the bed and played a few chords. His fingers had forgotten most of it. The sound was rough and uneven. But it was something.',
            'He played for about twenty minutes. Simple things — songs he had learned at school. Slowly it started to feel familiar again.',
            'When he put the guitar back, he didn\'t put it behind the coat. He left it where he could see it.',
            'The next evening he played again. Some things don\'t leave you. They just wait.',
          ],
          translation: [
            'У Дэна была гитара, на которой он не играл четыре года. Она стояла в углу спальни, за пальто и коробкой старых книг.',
            'Однажды вечером ему было скучно. Посмотрел два фильма, немного почитал, пробовал заснуть. Ничего не помогало. Он посмотрел на гитару.',
            'Достал её, сел на краю кровати и взял несколько аккордов. Пальцы забыли почти всё. Звук был грубым. Но это было что-то.',
            'Он играл около двадцати минут. Простые вещи — песни, которые учил в школе. Постепенно стало ощущаться знакомым.',
            'Убирая гитару, он не поставил её обратно за пальто. Оставил там, где её видно.',
            'На следующий вечер снова сыграл. Некоторые вещи тебя не оставляют. Они просто ждут.',
          ],
        },
      ],
    },
  ],

  next: {
    id:      23,
    title:   'Телефон и сообщения',
    preview: ['phone, call, message, text, email', 'app, screen, ring, answer, reply', 'send, receive, charge, connect, download'],
    tip:     'Опиши своё любимое хобби по-английски в трёх предложениях. Используй I enjoy…, I have been doing it for…, What I like about it is…',
  },
}
