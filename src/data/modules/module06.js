export const module06 = {
  id: 6,
  levelId: 'level-1',
  title: 'Числа и количество',
  words: '97–116',
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
        { num: 97,  word: 'one',    tr: '[wʌn]',         ru: 'один',                                   ex: 'I have one brother.',                   exRu: 'У меня один брат.' },
        { num: 98,  word: 'two',    tr: '[tuː]',         ru: 'два',                                    ex: 'She has two cats.',                     exRu: 'У неё две кошки.' },
        { num: 99,  word: 'three',  tr: '[θriː]',        ru: 'три',                                    ex: 'We waited three hours.',                exRu: 'Мы ждали три часа.' },
        { num: 100, word: 'ten',    tr: '[ten]',         ru: 'десять',                                 ex: 'I need ten minutes.',                   exRu: 'Мне нужно десять минут.' },
        { num: 101, word: 'hundred',tr: '[ˈhʌndrəd]',   ru: 'сто',                                    ex: 'There are a hundred people here.',      exRu: 'Здесь сто человек.' },
        { num: 102, word: 'thousand',tr:'[ˈθaʊzənd]',   ru: 'тысяча',                                 ex: 'It costs three thousand.',              exRu: 'Это стоит три тысячи.' },
        { num: 103, word: 'number', tr: '[ˈnʌmbə]',     ru: 'число, номер',                           ex: 'What is your phone number?',            exRu: 'Какой у тебя номер телефона?' },
        { num: 104, word: 'count',  tr: '[kaʊnt]',      ru: 'считать',                                ex: 'Count to ten.',                         exRu: 'Считай до десяти.' },
        { num: 105, word: 'half',   tr: '[hɑːf]',       ru: 'половина',                               ex: 'I ate half of it.',                     exRu: 'Я съел половину.' },
        { num: 106, word: 'both',   tr: '[bəʊθ]',       ru: 'оба, обе',                               ex: 'Both of them are ready.',               exRu: 'Оба готовы.' },
        { num: 107, word: 'all',    tr: '[ɔːl]',        ru: 'все, весь, вся',                         ex: 'All my friends live here.',             exRu: 'Все мои друзья живут здесь.' },
        { num: 108, word: 'some',   tr: '[sʌm]',        ru: 'немного, несколько, какой-то',           ex: 'I need some help.',                     exRu: 'Мне нужна немного помощи.' },
        { num: 109, word: 'any',    tr: '[ˈeni]',       ru: 'какой-нибудь, никакой',                  ex: 'Is there any food?',                    exRu: 'Есть какая-нибудь еда?' },
        { num: 110, word: 'few',    tr: '[fjuː]',       ru: 'мало, несколько (исчисляемые)',          ex: 'I have a few friends here.',            exRu: 'У меня здесь несколько друзей.' },
        { num: 111, word: 'little', tr: '[ˈlɪtl]',     ru: 'мало (неисчисляемые); маленький',       ex: 'I have a little time.',                 exRu: 'У меня немного времени.' },
        { num: 112, word: 'lot',    tr: '[lɒt]',        ru: 'много (a lot of)',                       ex: 'I have a lot of work today.',           exRu: 'У меня сегодня много работы.' },
        { num: 113, word: 'most',   tr: '[məʊst]',      ru: 'большинство, наибольший',               ex: 'Most people like music.',               exRu: 'Большинство людей любят музыку.' },
        { num: 114, word: 'least',  tr: '[liːst]',      ru: 'наименьший, меньше всего',              ex: 'At least one person knows.',            exRu: 'По крайней мере один человек знает.' },
        { num: 115, word: 'add',    tr: '[æd]',         ru: 'добавлять',                              ex: 'Add some salt to the soup.',            exRu: 'Добавь немного соли в суп.' },
        { num: 116, word: 'total',  tr: '[ˈtəʊtl]',    ru: 'итого, общий',                          ex: 'The total is fifty euros.',             exRu: 'Итого пятьдесят евро.' },
      ],
      note: {
        title: 'Заметка о few / little и some / any',
        lines: [
          'a few — несколько (немного, но есть): I have a few friends. ✓ (хорошо)',
          'few — мало (почти нет, это проблема): I have few friends. (плохо)',
          'a little — немного (есть): I have a little time. (могу помочь)',
          'little — мало (почти нет): I have little time. (не смогу)',
          'some — в утверждениях: I have some money.',
          'any — в вопросах и отрицаниях: Do you have any money? / I don\'t have any money.',
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
        { num: 1,  en: 'I have two sisters and one brother.',                       ru: 'У меня две сестры и один брат.',                            note: null },
        { num: 2,  en: 'I need a few minutes. I\'m almost ready.',                  ru: 'Мне нужно несколько минут. Я почти готов.',                  note: 'almost — [ˈɔːlməʊst] — почти' },
        { num: 3,  en: 'Most of my friends live in the same city.',                 ru: 'Большинство моих друзей живут в том же городе.',             note: null },
        { num: 4,  en: 'Can I have some more water, please?',                       ru: 'Можно мне ещё немного воды, пожалуйста?',                    note: null },
        { num: 5,  en: 'Both ideas are good. I can\'t choose.',                     ru: 'Обе идеи хороши. Я не могу выбрать.',                        note: 'choose — [tʃuːz] — выбирать' },
        { num: 6,  en: 'I eat three meals a day — breakfast, lunch, and dinner.',   ru: 'Я ем три раза в день — завтрак, обед и ужин.',               note: 'meals — [miːlz] — приёмы пищи; lunch — обед' },
        { num: 7,  en: 'Do you have any questions?',                                ru: 'У тебя есть какие-нибудь вопросы?',                          note: null },
        { num: 8,  en: 'I spent half my salary on rent this month.',                ru: 'В этом месяце я потратил половину зарплаты на аренду.',      note: 'spent — потратил; salary — [ˈsæləri] — зарплата' },
        { num: 9,  en: 'There are a hundred people at the event.',                  ru: 'На мероприятии сто человек.',                                note: 'event — [ɪˈvent] — мероприятие' },
        { num: 10, en: 'I know a little English, but not enough to have a conversation.', ru: 'Я знаю немного английского, но недостаточно для разговора.', note: 'conversation — [ˌkɒnvəˈseɪʃn] — разговор' },
        { num: 11, en: 'All the tickets are sold. There are none left.',            ru: 'Все билеты проданы. Не осталось ни одного.',                 note: 'none — [nʌn] — ни одного' },
        { num: 12, en: 'Add the numbers and tell me the total.',                    ru: 'Сложи числа и скажи мне итог.',                             note: null },
        { num: 13, en: 'At least call me if you can\'t come.',                      ru: 'По крайней мере позвони мне, если не можешь прийти.',        note: null },
        { num: 14, en: 'I counted — there are thirty-seven people in the room.',    ru: 'Я посчитал — в комнате тридцать семь человек.',              note: null },
        { num: 15, en: 'I don\'t have much money, but I have a little. It\'s enough.', ru: 'У меня не много денег, но немного есть. Этого достаточно.', note: null },
      ],
      note: {
        title: 'Обрати внимание — числа в английском',
        lines: [
          '11 — eleven, 12 — twelve, 13 — thirteen, 20 — twenty, 30 — thirty',
          '21 — twenty-one, 35 — thirty-five, 100 — a hundred, 1000 — a thousand',
          'После hundred и thousand не нужно добавлять «-s»: two hundred ✓ (не two hundreds)',
          'five thousand ✓ (не five thousands)',
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
      textTitle: '«Сколько нужно?»',
      original: [
        'People often ask: how much money do you need to be happy?',
        "I think about this sometimes. I don't have a lot. Maybe two or three thousand a month — not more. But I have enough.",
        'I spend a little on food, some on transport, and most of it on rent. At the end of the month I usually have a little left. Not much — a hundred or two. But it\'s something.',
        'Both my friends earn more than me. One of them has a big apartment and a new car. The other travels to other countries every year. I like their lives — but I don\'t want to count every euro they spend or compare myself to them.',
        'I know a few people who have a lot of money but are not happy. And I know some people with very little who smile every day.',
        'Most people need enough — not all. A little warmth, a few good friends, some quiet time. That\'s the total that matters.',
      ],
      translation: [
        'Люди часто спрашивают: сколько денег нужно, чтобы быть счастливым?',
        'Я иногда думаю об этом. У меня немного. Может быть, две или три тысячи в месяц — не больше. Но мне достаточно.',
        'Немного я трачу на еду, немного на транспорт, большую часть — на аренду. В конце месяца у меня обычно немного остаётся. Немного — сотня-другая. Но это хоть что-то.',
        'Оба моих друга зарабатывают больше меня. У одного большая квартира и новая машина. Другой каждый год ездит в другие страны. Мне нравится их жизнь — но я не хочу считать каждый евро, который они тратят, или сравнивать себя с ними.',
        'Я знаю нескольких людей, у которых много денег, но они несчастны. И знаю некоторых с очень малым, кто улыбается каждый день.',
        'Большинству людей нужно достаточно — не всё. Немного тепла, несколько хороших друзей, немного тишины. Вот итог, который важен.',
      ],
      vocab: [
        { word: 'spend',     tr: '[spend]',       ru: 'тратить' },
        { word: 'transport', tr: '[ˈtrænspɔːt]',  ru: 'транспорт' },
        { word: 'rent',      tr: '[rent]',         ru: 'аренда' },
        { word: 'earn',      tr: '[ɜːn]',          ru: 'зарабатывать' },
        { word: 'compare',   tr: '[kəmˈpeə]',      ru: 'сравнивать' },
        { word: 'warmth',    tr: '[wɔːmθ]',        ru: 'тепло' },
        { word: 'quiet',     tr: '[ˈkwaɪət]',      ru: 'тихий; тишина' },
        { word: 'matter',    tr: '[ˈmætə]',        ru: 'иметь значение' },
        { word: 'smile',     tr: '[smaɪl]',        ru: 'улыбаться' },
        { word: 'left',      tr: '[left]',         ru: 'оставшийся, оставшееся' },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 4 — ПОНИМАНИЕ СТРУКТУРЫ
    // ─────────────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Some, any, no — когда что использовать. All, most, both, half — как использовать.',
      items: [
        {
          sentence: "I have some money. Do you have any money? I have no money.",
          schema: 'some (утверждение) / any (вопрос/отрицание) / no (ничего нет)',
          explanation: [
            'some — в утверждениях: I have some money. / I need some help.',
            'any — в вопросах и отрицаниях: Do you have any? / I don\'t have any.',
            'no — жёсткое отрицание: I have no money. = I don\'t have any money.',
            'Исключение: some в вопросе-просьбе (ожидаем «да»): Can I have some water?',
          ],
          pattern: 'some / any / no',
          examples: [
            'I have some friends. — У меня есть друзья.',
            'Do you have any friends? — У тебя есть друзья?',
            'I have no friends here. — У меня здесь нет друзей.',
          ],
        },
        {
          sentence: "All my friends live here. Most people like weekends. Both ideas are good. I ate half of it.",
          schema: 'all (все) / most (большинство) / both (оба) / half (половина)',
          explanation: [
            'all — все без исключения: All my friends live here.',
            'most — большинство (не все): Most people like weekends.',
            'both — оба (только когда их два): Both ideas are good.',
            'half — ровно половина: I ate half of it.',
          ],
          pattern: 'all / most / both / half',
          examples: [
            'All the tickets are sold. — Все билеты проданы.',
            'Most people live in cities. — Большинство людей живут в городах.',
            'Both options are good. — Оба варианта хороши.',
          ],
        },
        {
          sentence: "I have a few friends. I have a little time.",
          schema: 'a few (исчисляемые) / a little (неисчисляемые)',
          explanation: [
            'a few + исчисляемые (можно посчитать): a few friends, a few minutes, a few people',
            'a little + неисчисляемые (нельзя посчитать): a little time, a little money, a little water',
            'Без артикля: few / little = мало, почти нет (негативный оттенок)',
            'С артиклем: a few / a little = немного, но есть (нейтрально/позитивно)',
          ],
          pattern: 'a few / a little',
          examples: [
            'I have a few questions. — У меня есть несколько вопросов.',
            'I have a little time. — У меня немного времени.',
            'I have little time. — У меня мало времени. (почти нет)',
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
            'I have a few...',
            'Most of my friends...',
            'I spend a little...',
            'Both...',
            'At least...',
          ],
        },
        {
          subtitle: '5.2. Ответь на вопросы по тексту',
          hint: 'Прочитай вопрос и ответь на него.',
          type: 'questions',
          items: [
            { q: 'How much money does the person have each month?',        hint: 'Сколько денег у него каждый месяц?' },
            { q: 'What does he spend most of his money on?',               hint: 'На что он тратит большую часть денег?' },
            { q: 'What do his friends have that he doesn\'t?',             hint: 'Что есть у его друзей, чего нет у него?' },
            { q: 'Does he want to be like his friends?',                   hint: 'Он хочет быть как его друзья?' },
            { q: 'What three things does he say most people need?',        hint: 'Какие три вещи нужны большинству людей?' },
          ],
        },
        {
          subtitle: '5.3. Переведи с русского на английский',
          hint: 'Попробуй перевести. После каждого предложения — правильный ответ.',
          type: 'translate',
          items: [
            { ru: 'У меня есть несколько вопросов.',      en: 'I have a few questions.' },
            { ru: 'Большинство людей живут в городах.',   en: 'Most people live in cities.' },
            { ru: 'Есть ли у тебя немного времени?',      en: 'Do you have any time?' },
            { ru: 'Оба варианта хороши.',                 en: 'Both options are good.' },
            { ru: 'По крайней мере позвони мне.',         en: 'At least call me.' },
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
            { sentence: 'I have ___ friends here — maybe three or four.',      options: 'some / a few / all',     answer: 'a few' },
            { sentence: 'Do you have ___ questions?',                          options: 'some / any / few',       answer: 'any' },
            { sentence: '___ my friends live in Moscow.',                      options: 'Most / Half / Least',    answer: 'Most' },
            { sentence: 'I have ___ time. I need to go.',                      options: 'little / few / any',     answer: 'little' },
            { sentence: '___ of them are good. I can\'t decide.',              options: 'Both / All / Total',     answer: 'Both' },
            { sentence: 'The ___ is 200 euros, please.',                       options: 'count / number / total', answer: 'total' },
            { sentence: 'She spent ___ of her money on clothes.',              options: 'half / all / both',      answer: 'half' },
            { sentence: 'At ___ call me if you can\'t come.',                  options: 'any / least / most',     answer: 'least' },
            { sentence: 'I have ___ money — maybe fifty euros.',               options: 'a little / a few / any', answer: 'a little' },
            { sentence: '___ people came — at least a hundred.',               options: 'A lot of / Both / Least',answer: 'A lot of' },
          ],
        },
        {
          subtitle: '6.2. Перефразируй предложение',
          hint: 'Скажи то же самое другими словами.',
          type: 'rephrase',
          items: [
            { task: 'Almost everyone likes this film.',        answer: 'Most people like this film.' },
            { task: 'There is not much food left.',            answer: 'There is only a little food left.' },
            { task: 'I chose the first and the second option.',answer: 'I chose both options.' },
            { task: 'What is the sum of all the numbers?',     answer: 'What is the total?' },
            { task: 'He has almost no money.',                 answer: 'He has very little money.' },
          ],
        },
        {
          subtitle: '6.3. Мини-текст для чтения',
          hint: 'Слова из Модулей 1–6. Читай и понимай смысл.',
          type: 'reading',
          textTitle: 'Sunday Morning',
          original: [
            'Sunday is my favourite day of the week. I have no work, no rush, no plans — just a little time for myself.',
            'I wake up late — sometimes at nine, sometimes at ten. I make a big breakfast: two eggs, some bread, and a cup of coffee. I eat slowly and don\'t count the minutes.',
            'After breakfast I go for a walk. I usually go to the park near my house. Most people there are quiet — some read, some just sit. A few walk their dogs. I like to watch them.',
            'I spend the whole morning outside. When I come home, half the day is already gone. But I feel good.',
            'In the afternoon I cook lunch and call my mother. We talk for a little while. She always asks how I am — not just one or two questions, but many. I like that.',
            'Sunday doesn\'t need to be big. Most of the time, a little of everything is enough.',
          ],
          translation: [
            'Воскресенье — мой любимый день недели. Нет работы, нет спешки, нет планов — только немного времени для себя.',
            'Я просыпаюсь поздно — иногда в девять, иногда в десять. Я готовлю большой завтрак: два яйца, немного хлеба и чашку кофе. Я ем медленно и не считаю минуты.',
            'После завтрака я иду на прогулку. Обычно хожу в парк рядом с домом. Большинство людей там спокойны — одни читают, другие просто сидят. Несколько человек выгуливают собак. Мне нравится за ними наблюдать.',
            'Я провожу всё утро на улице. Когда прихожу домой, половина дня уже прошла. Но мне хорошо.',
            'После полудня я готовлю обед и звоню маме. Мы разговариваем немного. Она всегда спрашивает, как я, — не один-два вопроса, а много. Мне это нравится.',
            'Воскресенье не обязано быть грандиозным. Чаще всего немного всего — достаточно.',
          ],
        },
      ],
    },
  ],

  next: {
    id: 7,
    title: 'Модуль 7 — Цвета и описания предметов',
    preview: [
      'white, black, red, blue, green (белый, чёрный, красный, синий, зелёный)',
      'big / small, long / short, heavy / light (большой / маленький, длинный / короткий)',
      'clean / dirty, old / new, fast / slow (чистый / грязный, старый / новый, быстрый / медленный)',
      'look (выглядеть), feel (чувствовать), seem (казаться)',
    ],
    tip: 'Посмотри вокруг себя и опиши 5 предметов на английском — используй числа и слова some, a few, a lot of. Например: I have three books on my desk. There is some water on the table.',
  },
}
