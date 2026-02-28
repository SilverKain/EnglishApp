export const module09 = {
  id: 9,
  levelId: 'level-1',
  title: 'Дом: комнаты и мебель',
  words: '157–176',
  wordCount: 20,
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
        { num: 157, word: 'bedroom',     tr: '[ˈbedrʊm]',    ru: 'спальня',             ex: 'My bedroom is on the second floor.',          exRu: 'Моя спальня на втором этаже.' },
        { num: 158, word: 'bathroom',    tr: '[ˈbɑːθrʊm]',   ru: 'ванная комната',      ex: 'The bathroom is next to the bedroom.',        exRu: 'Ванная комната рядом со спальней.' },
        { num: 159, word: 'kitchen',     tr: '[ˈkɪtʃɪn]',    ru: 'кухня',               ex: 'She is cooking in the kitchen.',              exRu: 'Она готовит на кухне.' },
        { num: 160, word: 'living room', tr: '[ˈlɪvɪŋ rʊm]', ru: 'гостиная',            ex: 'We watch TV in the living room.',             exRu: 'Мы смотрим телевизор в гостиной.' },
        { num: 161, word: 'door',        tr: '[dɔː]',         ru: 'дверь',               ex: 'Close the door, please.',                    exRu: 'Закрой, пожалуйста, дверь.' },
        { num: 162, word: 'window',      tr: '[ˈwɪndəʊ]',    ru: 'окно',                ex: 'Open the window — it is hot in here.',        exRu: 'Открой окно — здесь жарко.' },
        { num: 163, word: 'wall',        tr: '[wɔːl]',        ru: 'стена',               ex: 'There is a big painting on the wall.',        exRu: 'На стене висит большая картина.' },
        { num: 164, word: 'floor',       tr: '[flɔː]',        ru: 'пол; этаж',           ex: 'The keys are on the floor.',                 exRu: 'Ключи на полу.' },
        { num: 165, word: 'ceiling',     tr: '[ˈsiːlɪŋ]',    ru: 'потолок',             ex: 'The ceiling in this room is very high.',      exRu: 'В этой комнате очень высокий потолок.' },
        { num: 166, word: 'table',       tr: '[ˈteɪbl]',      ru: 'стол',                ex: 'Put the book on the table.',                 exRu: 'Положи книгу на стол.' },
        { num: 167, word: 'chair',       tr: '[tʃeə]',        ru: 'стул',                ex: 'There are four chairs around the table.',    exRu: 'Вокруг стола стоят четыре стула.' },
        { num: 168, word: 'bed',         tr: '[bed]',          ru: 'кровать',             ex: 'I always make my bed in the morning.',       exRu: 'Я всегда заправляю кровать по утрам.' },
        { num: 169, word: 'sofa',        tr: '[ˈsəʊfə]',      ru: 'диван',               ex: 'He is sleeping on the sofa again.',          exRu: 'Он снова спит на диване.' },
        { num: 170, word: 'shelf',       tr: '[ʃelf]',         ru: 'полка',               ex: 'The books are on the shelf above the desk.', exRu: 'Книги на полке над письменным столом.' },
        { num: 171, word: 'lamp',        tr: '[læmp]',         ru: 'лампа; светильник',   ex: 'Turn on the lamp — it is getting dark.',     exRu: 'Включи лампу — темнеет.' },
        { num: 172, word: 'mirror',      tr: '[ˈmɪrə]',       ru: 'зеркало',             ex: 'She looks in the mirror every morning.',     exRu: 'Каждое утро она смотрится в зеркало.' },
        { num: 173, word: 'carpet',      tr: '[ˈkɑːpɪt]',     ru: 'ковёр',               ex: 'There is a soft carpet on the floor.',       exRu: 'На полу лежит мягкий ковёр.' },
        { num: 174, word: 'curtain',     tr: '[ˈkɜːtn]',      ru: 'штора',               ex: 'Open the curtains and let the light in.',    exRu: 'Раздвинь шторы и впусти свет.' },
        { num: 175, word: 'key',         tr: '[kiː]',          ru: 'ключ',                ex: 'I can\'t find my key — where is it?',        exRu: 'Я не могу найти ключ — где он?' },
        { num: 176, word: 'stairs',      tr: '[steəz]',        ru: 'лестница',            ex: 'She walked up the stairs to the third floor.', exRu: 'Она поднялась по лестнице на третий этаж.' },
      ],
      note: {
        title: 'Заметка о floor и shelf',
        lines: [
          'floor — два значения: пол (поверхность) и этаж.',
          'The cup fell on the floor. — Чашка упала на пол.',
          'I live on the second floor. — Я живу на втором этаже.',
          'shelf → shelves [ʃelvz] — множественное число (та же модель: leaf → leaves).',
          'Предлоги: on the table/floor/shelf, in the kitchen/room, next to the sofa, under the table.',
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
        { num: 1,  en: 'I like my bedroom — it is quiet and not too big.',             ru: 'Мне нравится моя спальня — она тихая и не слишком большая.', note: null },
        { num: 2,  en: 'The bathroom is small, but it has everything I need.',         ru: 'Ванная маленькая, но в ней есть всё необходимое.',            note: null },
        { num: 3,  en: 'My mother spends a lot of time in the kitchen.',               ru: 'Моя мама проводит много времени на кухне.',                  note: null },
        { num: 4,  en: 'After dinner, we all sit in the living room and talk.',        ru: 'После ужина мы все сидим в гостиной и разговариваем.',       note: null },
        { num: 5,  en: 'Please don\'t leave the door open — it is cold outside.',     ru: 'Пожалуйста, не оставляй дверь открытой — на улице холодно.', note: 'outside — снаружи, на улице' },
        { num: 6,  en: 'I opened the window in the morning, and the room felt fresh all day.', ru: 'Утром я открыл окно, и комната весь день казалась свежей.', note: 'fresh — [freʃ] — свежий' },
        { num: 7,  en: 'He painted the walls white and the ceiling grey.',             ru: 'Он покрасил стены в белый цвет, а потолок — в серый.',       note: 'painted — покрасил; grey — серый' },
        { num: 8,  en: 'I dropped my phone — now it is on the floor under the table.', ru: 'Я уронил телефон — теперь он на полу под столом.',          note: 'dropped — уронил' },
        { num: 9,  en: 'There are four chairs at the kitchen table. We all fit.',      ru: 'У кухонного стола стоят четыре стула. Все помещаемся.',      note: 'fit — помещаться' },
        { num: 10, en: 'Her bed is near the window, so she wakes up with the sun.',   ru: 'Её кровать стоит у окна, поэтому она просыпается с солнцем.', note: null },
        { num: 11, en: 'He always falls asleep on the sofa while watching TV.',       ru: 'Он всегда засыпает на диване во время просмотра телевизора.', note: 'falls asleep — засыпает' },
        { num: 12, en: 'I put new shelves in the kitchen for the books and spices.',   ru: 'Я установил на кухне новые полки для книг и специй.',        note: 'spices — [ˈspaɪsɪz] — специи' },
        { num: 13, en: 'The lamp on my desk is old but gives good light.',            ru: 'Лампа на моём столе старая, но даёт хороший свет.',          note: null },
        { num: 14, en: 'I always check the mirror before I leave the house.',         ru: 'Перед тем как выйти из дома, я всегда смотрюсь в зеркало.',  note: null },
        { num: 15, en: 'The cat is sleeping on the carpet next to the sofa, as always.', ru: 'Кошка спит на ковре возле дивана, как всегда.',          note: null },
      ],
      note: {
        title: 'Обрати внимание — предлоги места',
        lines: [
          'on — на поверхности: on the table, on the floor, on the shelf, on the wall.',
          'in — внутри: in the kitchen, in the room, in the house, in the corner.',
          'next to — рядом с: next to the door, next to the window.',
          'above / below — над / под (вертикально): above the desk, below the shelf.',
          'under — под (горизонтально, вплотную): under the table, under the bed.',
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
      textTitle: '«Моё любимое место дома»',
      original: [
        'Every home has a special place. Mine is the living room.',
        'It is not a big room, but it feels comfortable. There is a large sofa near the window — soft and old. I have had it for years. The carpet on the floor is dark red. Two lamps give warm light in the evening. There are no bright, cold lights in my living room — just warm and soft.',
        'One wall is full of shelves. There are books, photos and a few small things I like. Next to the door there is a long mirror — it makes the room look bigger.',
        'The kitchen is right next to the living room. When I cook, I can still hear the TV or talk to someone sitting on the sofa. I like that.',
        'My bedroom is quiet. I keep it simple: just a bed, a small table, a lamp and curtains that block the light well. I sleep better when it is dark and quiet.',
        'But in the evenings I always come back to the living room. I sit on the sofa, turn on the lamp and read, or just think. It is my favourite place in the whole house.',
      ],
      translation: [
        'В каждом доме есть особое место. Моё — гостиная.',
        'Это небольшая комната, но в ней уютно. У окна стоит большой диван — мягкий и старый. Он у меня уже много лет. Ковёр на полу тёмно-красного цвета. Два светильника создают тёплый свет по вечерам. В моей гостиной нет яркого холодного света — только тёплый и мягкий.',
        'Одна стена полностью занята полками. На них книги, фотографии и несколько мелочей, которые мне нравятся. Рядом с дверью стоит длинное зеркало — оно делает комнату визуально больше.',
        'Кухня — прямо рядом с гостиной. Когда я готовлю, всё равно слышу телевизор или могу разговаривать с кем-то, кто сидит на диване. Мне это нравится.',
        'Моя спальня тихая. Я держу её в простоте: только кровать, небольшой стол, лампа и шторы, которые хорошо блокируют свет. Мне лучше спится в темноте и тишине.',
        'Но по вечерам я всегда возвращаюсь в гостиную. Сажусь на диван, включаю лампу и читаю — или просто думаю. Это моё любимое место во всём доме.',
      ],
      vocab: [
        { word: 'comfortable', tr: '[ˈkʌmftəbl]',  ru: 'комфортный, уютный' },
        { word: 'bright',      tr: '[braɪt]',       ru: 'яркий' },
        { word: 'block',       tr: '[blɒk]',        ru: 'блокировать, перекрывать' },
        { word: 'whole',       tr: '[həʊl]',        ru: 'весь, целый' },
        { word: 'simple',      tr: '[ˈsɪmpl]',      ru: 'простой' },
        { word: 'special',     tr: '[ˈspeʃl]',      ru: 'особый' },
        { word: 'still',       tr: '[stɪl]',        ru: 'всё равно; по-прежнему' },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 4 — ПОНИМАНИЕ СТРУКТУРЫ
    // ─────────────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Предлоги места: on, in, under, next to. Конструкция There is / There are.',
      items: [
        {
          sentence: "The book is on the table. The lamp is next to the sofa.",
          schema: 'on / in / under / above / next to — где находится предмет',
          explanation: [
            'on — на горизонтальной поверхности: on the table, on the floor, on the shelf.',
            'in — внутри закрытого пространства: in the kitchen, in the room, in the corner.',
            'under — прямо под чем-то: under the table, under the bed.',
            'above — над (с расстоянием): above the door, above the desk.',
            'next to / near — рядом с: next to the sofa, near the window.',
          ],
          pattern: 'предмет + is/are + предлог + место',
          examples: [
            'The keys are on the table. — Ключи на столе.',
            'She is in the kitchen. — Она на кухне.',
            'The cat is under the bed. — Кошка под кроватью.',
          ],
        },
        {
          sentence: "There is a lamp on the table. There are two chairs in the kitchen.",
          schema: 'There is (ед.ч.) / There are (мн.ч.) — сообщаем о наличии',
          explanation: [
            'There is + ед.ч. или неисчисляемое: There is a lamp. / There is some water.',
            'There are + мн.ч.: There are two chairs.',
            'Отрицание: There is no mirror. / There are no curtains.',
            'Вопрос: Is there a sofa? / Are there any chairs?',
          ],
          pattern: 'There is/are + существительное + место',
          examples: [
            'There is a lamp on the table. — На столе стоит лампа.',
            'There are no curtains on the windows. — На окнах нет штор.',
            'Is there a mirror in your bedroom? — В твоей спальне есть зеркало?',
          ],
        },
        {
          sentence: "I went upstairs. The bathroom is on the first floor.",
          schema: 'floor — пол vs этаж',
          explanation: [
            'floor — пол (поверхность): The book is on the floor.',
            'floor — этаж: I live on the third floor.',
            'В британском английском: ground floor = 1-й этаж, first floor = 2-й этаж.',
            'В американском: first floor = 1-й этаж.',
          ],
          pattern: 'on the [adj] floor',
          examples: [
            'My bedroom is on the second floor. — Моя спальня на втором этаже.',
            'The keys are on the floor. — Ключи на полу.',
            'The bathroom is upstairs. — Ванная наверху.',
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
          hint: 'Попробуй продолжить каждую фразу на английском.',
          type: 'continue',
          items: [
            'In my bedroom there is…',
            'My favourite room is… because…',
            'On the wall in our living room…',
            'I always lose my keys because…',
            'The kitchen in my home…',
          ],
        },
        {
          subtitle: '5.2. Ответь на вопросы по тексту',
          hint: 'Прочитай вопрос и ответь на него.',
          type: 'questions',
          items: [
            { q: 'Where is the sofa in the living room?',            hint: 'Где стоит диван?' },
            { q: 'What is on the wall of shelves?',                  hint: 'Что стоит на полках?' },
            { q: 'What does the mirror do for the room?',            hint: 'Что делает зеркало для комнаты?' },
            { q: 'What does the person keep in the bedroom?',        hint: 'Что в спальне?' },
            { q: 'What does the person do in the living room in the evening?', hint: 'Чем занимается вечером?' },
          ],
        },
        {
          subtitle: '5.3. Переведи с русского на английский',
          hint: 'Попробуй перевести. После каждого предложения — правильный ответ.',
          type: 'translate',
          items: [
            { ru: 'На кухне есть небольшой стол и четыре стула.',   en: 'In the kitchen there is a small table and four chairs.' },
            { ru: 'Моя кровать стоит у окна.',                      en: 'My bed is next to the window.' },
            { ru: 'Шторы закрыты, поэтому в комнате темно.',        en: 'The curtains are closed, so the room is dark.' },
            { ru: 'Я не могу найти ключ — он, наверное, на полу.',  en: 'I can\'t find the key — it is probably on the floor.' },
            { ru: 'В гостиной нет ковра, но есть большой диван.',   en: 'There is no carpet in the living room, but there is a big sofa.' },
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
          hint: 'Выбери правильное слово из скобок.',
          type: 'fill',
          items: [
            { sentence: 'She is cooking in the ___.',                   options: 'bathroom / kitchen / bedroom',  answer: 'kitchen' },
            { sentence: 'I sleep in my ___.',                           options: 'living room / kitchen / bedroom',answer: 'bedroom' },
            { sentence: 'We watch films in the ___ room.',              options: 'living / sleeping / eating',    answer: 'living' },
            { sentence: 'There is a painting on the ___.',              options: 'floor / wall / ceiling',        answer: 'wall' },
            { sentence: 'The cat is sleeping on the ___ near the sofa.',options: 'table / carpet / curtain',      answer: 'carpet' },
            { sentence: 'He forgot his ___ and can\'t open the door.',  options: 'lamp / key / mirror',           answer: 'key' },
            { sentence: 'Open the ___ — it is hot in here.',           options: 'door / window / curtain',       answer: 'window' },
            { sentence: 'The books are on the ___ above the desk.',     options: 'shelf / floor / table',         answer: 'shelf' },
            { sentence: 'Turn on the ___ — it is getting dark.',        options: 'mirror / window / lamp',        answer: 'lamp' },
            { sentence: 'She walked up the ___ to the second floor.',   options: 'wall / stairs / floor',         answer: 'stairs' },
          ],
        },
        {
          subtitle: '6.2. Перефразируй предложение',
          hint: 'Скажи то же самое другими словами.',
          type: 'rephrase',
          items: [
            { task: 'The lamp is on — the room is bright.',               answer: 'The room is bright because the lamp is on.' },
            { task: 'I can\'t open the door — I don\'t have my key.',    answer: 'I left my key at home.' },
            { task: 'The sofa is not in the bedroom — it is in the living room.', answer: 'There is no sofa in the bedroom.' },
            { task: 'The books are not on the floor — they are on the shelf.', answer: 'The books are on the shelf, not on the floor.' },
            { task: 'She looks in the mirror in the morning.',            answer: 'Every morning she checks herself in the mirror.' },
          ],
        },
        {
          subtitle: '6.3. Мини-текст для чтения',
          hint: 'Слова из Модулей 1–9. Читай и понимай смысл.',
          type: 'reading',
          textTitle: 'The New Flat',
          original: [
            'My friend Anna moved into a new flat last week. On Saturday she invited me to see it.',
            'The flat is small but very nice. There is a bedroom, a living room, a kitchen and a bathroom. The walls are white and clean. The floors are light wood — it looks fresh and modern.',
            'In the living room there is a big sofa and a low table. There are no chairs yet — she wants to find the right ones. On the wall there are two shelves with books and a few photos.',
            'The bedroom is simple: just a bed, a lamp and a large mirror next to the door. The curtains are dark blue — they block the light well. "I love sleeping in the dark," she said.',
            'The kitchen is small, but Anna cooks a lot, so she has everything in the right place. There is a table for two near the window.',
            '"I still need a carpet for the living room," she said. "And a good chair for reading. But I already feel at home." I looked around. It was quiet, clean and full of light. I felt happy for her.',
          ],
          translation: [
            'Моя подруга Анна переехала в новую квартиру на прошлой неделе. В субботу она пригласила меня посмотреть на неё.',
            'Квартира небольшая, но очень симпатичная. В ней есть спальня, гостиная, кухня и ванная. Стены белые и чистые. Полы из светлого дерева — выглядит свежо и современно.',
            'В гостиной стоят большой диван и низкий столик. Стульев пока нет — она хочет найти подходящие. На стене — две полки с книгами и несколько фотографий.',
            'Спальня простая: только кровать, лампа и большое зеркало рядом с дверью. Шторы тёмно-синие — хорошо блокируют свет. «Я люблю спать в темноте», — сказала она.',
            'Кухня маленькая, но Анна много готовит, поэтому у неё всё на своём месте. У окна стоит стол на двоих.',
            '«Мне ещё нужен ковёр в гостиную», — сказала она. «И хорошее кресло для чтения. Но я уже чувствую себя как дома». Я огляделся. Тихо, чисто и много света. Я был рад за неё.',
          ],
        },
      ],
    },
  ],

  next: {
    id: 10,
    title: 'Модуль 10 — Семья и родственники',
    preview: [
      'mother, father, sister, brother, son, daughter (мать, отец, сестра, брат, сын, дочь)',
      'husband, wife, parents, grandma, grandpa, aunt, uncle, cousin (муж, жена, родители...)',
      'baby, grow up, love, miss, visit, together (малыш, расти, любить, скучать, навещать, вместе)',
    ],
    tip: 'Опиши свою квартиру или дом на английском — хотя бы 5–7 предложений. Используй there is / there are, предлоги in, on, next to, under. Начни с: In my home there is... Это упражнение хорошо работает — ты говоришь о том, что видишь каждый день.',
  },
}
