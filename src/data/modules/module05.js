export const module05 = {
  id: 5,
  levelId: 'level-1',
  title: 'Еда и напитки',
  words: '77–96',
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
        { num: 77, word: 'food',        tr: '[fuːd]',          ru: 'еда, продукты питания',                  ex: 'I like simple food.',              exRu: 'Мне нравится простая еда.' },
        { num: 78, word: 'water',       tr: '[ˈwɔːtə]',        ru: 'вода',                                    ex: 'I drink a lot of water.',          exRu: 'Я пью много воды.' },
        { num: 79, word: 'bread',       tr: '[bred]',           ru: 'хлеб',                                    ex: 'We always have bread at home.',    exRu: 'У нас дома всегда есть хлеб.' },
        { num: 80, word: 'milk',        tr: '[mɪlk]',           ru: 'молоко',                                  ex: 'She drinks milk every morning.',   exRu: 'Она пьёт молоко каждое утро.' },
        { num: 81, word: 'meat',        tr: '[miːt]',           ru: 'мясо',                                    ex: "He doesn't eat meat.",             exRu: 'Он не ест мясо.' },
        { num: 82, word: 'fruit',       tr: '[fruːt]',          ru: 'фрукт(ы)',                                ex: 'Fruit is good for you.',           exRu: 'Фрукты полезны для тебя.' },
        { num: 83, word: 'buy',         tr: '[baɪ]',            ru: 'покупать',                                ex: 'I buy food every week.',           exRu: 'Я покупаю продукты каждую неделю.' },
        { num: 84, word: 'pay',         tr: '[peɪ]',            ru: 'платить',                                 ex: 'How do you want to pay?',          exRu: 'Как ты хочешь заплатить?' },
        { num: 85, word: 'cost',        tr: '[kɒst]',           ru: 'стоить',                                  ex: 'How much does it cost?',           exRu: 'Сколько это стоит?' },
        { num: 86, word: 'price',       tr: '[praɪs]',          ru: 'цена',                                    ex: 'The price is too high.',           exRu: 'Цена слишком высокая.' },
        { num: 87, word: 'shop',        tr: '[ʃɒp]',            ru: 'магазин; делать покупки',                 ex: 'I go to the shop after work.',     exRu: 'После работы я иду в магазин.' },
        { num: 88, word: 'hungry',      tr: '[ˈhʌŋɡri]',        ru: 'голодный',                                ex: 'I am very hungry right now.',      exRu: 'Я сейчас очень голоден.' },
        { num: 89, word: 'thirsty',     tr: '[ˈθɜːsti]',        ru: 'хотеть пить, жаждущий',                  ex: "Are you thirsty? I'll get some water.", exRu: 'Ты хочешь пить? Я принесу воды.' },
        { num: 90, word: 'cook',        tr: '[kʊk]',            ru: 'готовить (еду); повар',                   ex: 'I cook dinner every evening.',     exRu: 'Я готовлю ужин каждый вечер.' },
        { num: 91, word: 'ready',       tr: '[ˈredi]',          ru: 'готовый',                                 ex: 'Dinner is ready. Come and eat.',   exRu: 'Ужин готов. Иди есть.' },
        { num: 92, word: 'more',        tr: '[mɔː]',            ru: 'больше, ещё',                             ex: 'Can I have more coffee?',          exRu: 'Можно мне ещё кофе?' },
        { num: 93, word: 'only',        tr: '[ˈəʊnli]',         ru: 'только, лишь',                            ex: 'I only eat fish, not meat.',       exRu: 'Я ем только рыбу, не мясо.' },
        { num: 94, word: 'much / many', tr: '[mʌtʃ / ˈmeni]',  ru: 'много',                                   ex: "I don't eat much sugar.",          exRu: 'Я не ем много сахара.' },
        { num: 95, word: 'enough',      tr: '[ɪˈnʌf]',          ru: 'достаточно',                              ex: 'I have enough food for everyone.', exRu: 'У меня достаточно еды для всех.' },
        { num: 96, word: 'too',         tr: '[tuː]',            ru: 'тоже; слишком',                           ex: 'This soup is too hot.',            exRu: 'Этот суп слишком горячий.' },
      ],
      note: {
        title: 'Заметка о much / many и too / enough',
        lines: [
          'much — с неисчисляемыми: much water, much food, much time',
          'many — с исчисляемыми: many people, many shops, many days',
          'a lot of работает везде: a lot of water, a lot of people',
          'too стоит ПЕРЕД прилагательным: too hot',
          'enough стоит ПОСЛЕ прилагательного: hot enough',
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
        { num: 1,  en: "I'm hungry. Is there any food at home?",           ru: 'Я голоден. Дома есть какая-нибудь еда?',        note: 'Is there any... — есть ли какой-нибудь...' },
        { num: 2,  en: 'This bread is fresh. I bought it this morning.',   ru: 'Этот хлеб свежий. Я купил его сегодня утром.',   note: 'fresh — [freʃ] — свежий' },
        { num: 3,  en: 'How much does this cost?',                          ru: 'Сколько это стоит?',                              note: null },
        { num: 4,  en: "The price is too high. I won't buy it.",           ru: 'Цена слишком высокая. Я не буду это покупать.',   note: null },
        { num: 5,  en: "She doesn't drink milk — only water and tea.",     ru: 'Она не пьёт молоко — только воду и чай.',         note: null },
        { num: 6,  en: "I need to go to the shop. We have no food.",       ru: 'Мне нужно пойти в магазин. У нас нет еды.',       note: null },
        { num: 7,  en: 'Dinner is almost ready. Five more minutes.',       ru: 'Ужин почти готов. Ещё пять минут.',               note: 'almost — [ˈɔːlməʊst] — почти' },
        { num: 8,  en: 'He eats too much meat and not enough fruit.',      ru: 'Он ест слишком много мяса и недостаточно фруктов.', note: null },
        { num: 9,  en: 'I cook at home every day. I never eat at a restaurant.', ru: 'Я готовлю дома каждый день. Я никогда не ем в ресторане.', note: 'restaurant — ресторан' },
        { num: 10, en: 'Can I pay by card?',                               ru: 'Можно заплатить картой?',                         note: 'by card — картой; cash — наличными' },
        { num: 11, en: "I'm not thirsty, but I'll drink some water anyway.", ru: 'Я не хочу пить, но всё равно выпью немного воды.', note: 'anyway — всё равно, в любом случае' },
        { num: 12, en: "Do you want more? There's enough for everyone.",   ru: 'Ты хочешь ещё? Всем хватит.',                     note: null },
        { num: 13, en: 'I only buy food that I really need.',              ru: 'Я покупаю только ту еду, которая мне действительно нужна.', note: null },
        { num: 14, en: 'How many people are coming? I need to know how much food to cook.', ru: 'Сколько людей придёт? Мне нужно знать, сколько еды готовить.', note: null },
        { num: 15, en: 'The soup is good, but a little too salty for me.', ru: 'Суп хороший, но для меня чуть слишком солёный.',  note: 'salty — [ˈsɔːlti] — солёный' },
      ],
      note: {
        title: 'Обрати внимание — конструкция How much does it cost?',
        lines: [
          'How much does it cost? — Сколько это стоит?',
          'How much is it? — то же самое, короче.',
          'It costs five pounds. — Это стоит пять фунтов.',
          'The price is ten euros. — Цена — десять евро.',
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
      textTitle: '«Поход в магазин»',
      original: [
        'On Saturday morning I always go to the shop. I like to go early — before it gets too busy.',
        "I make a list before I leave home. This week I need bread, milk, fruit, and some vegetables. I don't buy much meat — maybe once a week. I think it's enough for me.",
        "At the shop the prices are good. Not too high, not too cheap. I pay by card — I never carry much cash.",
        'I usually buy food for five or six days. I cook at home almost every day. It takes about 30 minutes to make a simple dinner. I like cooking. It\'s quiet and I can think.',
        'When I get home, I put everything in the kitchen. I make tea and sit down for a moment. I feel ready for the rest of the day.',
        "Buying food and cooking it yourself — it's one of the best things you can do. You know exactly what you eat. And it doesn't cost much.",
      ],
      translation: [
        'По субботам утром я всегда хожу в магазин. Мне нравится идти рано — пока не стало слишком людно.',
        'Я составляю список, прежде чем уйти из дома. На этой неделе мне нужны хлеб, молоко, фрукты и немного овощей. Я не покупаю много мяса — может быть, раз в неделю. Думаю, мне этого достаточно.',
        'В магазине цены хорошие. Не слишком высокие, не слишком низкие. Я плачу картой — с собой я никогда не ношу много наличных.',
        'Обычно я покупаю еду на пять-шесть дней. Я готовлю дома почти каждый день. Простой ужин занимает около 30 минут. Мне нравится готовить. Это тихо, и можно подумать.',
        'Когда я прихожу домой, я раскладываю всё по кухне. Я делаю чай и на минуту присаживаюсь. Я чувствую себя готовым к остатку дня.',
        'Покупать еду и самому её готовить — это одно из лучших дел, которое ты можешь делать. Ты точно знаешь, что ешь. И это не стоит много.',
      ],
      vocab: [
        { word: 'Saturday',      tr: '[ˈsætədeɪ]', ru: 'суббота' },
        { word: 'early',         tr: '[ˈɜːli]',     ru: 'рано' },
        { word: 'list',          tr: '[lɪst]',       ru: 'список' },
        { word: 'vegetables',    tr: '[ˈvedʒtəblz]', ru: 'овощи' },
        { word: 'once a week',   tr: '—',            ru: 'раз в неделю' },
        { word: 'carry',         tr: '[ˈkæri]',      ru: 'носить с собой' },
        { word: 'cash',          tr: '[kæʃ]',        ru: 'наличные' },
        { word: 'usually',       tr: '[ˈjuːʒuəli]',  ru: 'обычно' },
        { word: 'simple',        tr: '[ˈsɪmpl]',     ru: 'простой' },
        { word: 'exactly',       tr: '[ɪɡˈzæktli]',  ru: 'именно, точно' },
      ],
    },

    // ─────────────────────────────────────────────
    // БЛОК 4 — ПОНИМАНИЕ СТРУКТУРЫ
    // ─────────────────────────────────────────────
    {
      id: 'structure',
      type: 'structure',
      title: 'Блок 4 — Понимание структуры',
      intro: 'Much / many / a lot of, конструкция too / enough, и there is / there are.',
      items: [
        {
          sentence: "I don't eat much meat. There aren't many shops here.",
          schema: 'much (неисчисляемое) / many (исчисляемое) / a lot of (любое)',
          explanation: [
            'much — нельзя сосчитать: much water, much food, much time, much money',
            'many — можно сосчитать: many people, many days, many shops',
            'a lot of — работает везде: a lot of water, a lot of people',
            'В вопросах и отрицаниях — much/many. В утверждениях — a lot of.',
          ],
          pattern: 'much/many/a lot of',
          examples: [
            "I don't have much time. — У меня мало времени.",
            "There aren't many people here. — Здесь немного людей.",
            'I drink a lot of water. — Я пью много воды.',
          ],
        },
        {
          sentence: 'The soup is too hot. The soup is hot enough.',
          schema: 'too + прилагательное / прилагательное + enough',
          explanation: [
            'too + прилагательное = слишком (это проблема): too hot, too expensive',
            'прилагательное + enough = достаточно (всё в порядке): hot enough, good enough',
            'Запомни: too стоит ДО прилагательного, enough — ПОСЛЕ.',
          ],
          pattern: 'too [adj] / [adj] enough',
          examples: [
            'The price is too high. — Цена слишком высокая.',
            'Is it good enough? — Это достаточно хорошо?',
            "It's too far. — Это слишком далеко.",
          ],
        },
        {
          sentence: 'There is some bread. There are many shops.',
          schema: 'There is (единственное) / There are (множественное)',
          explanation: [
            'There is + ед.ч. или неисчисляемое: There is some bread.',
            'There are + мн.ч.: There are many shops here.',
            'Отрицание: There is no milk. There are no vegetables.',
            'Вопрос: Is there any food? Are there any shops?',
          ],
          pattern: 'There is/are + существительное',
          examples: [
            "There is no milk. — Молока нет.",
            'Are there any shops nearby? — Есть ли поблизости магазины?',
            'There is enough food for everyone. — Еды достаточно для всех.',
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
            "I'm hungry. I want to eat...",
            'At the shop I always buy...',
            "I don't eat much...",
            'The price is too...',
            'I cook...',
          ],
        },
        {
          subtitle: '5.2. Ответь на вопросы по тексту',
          hint: 'Прочитай вопрос и ответь на него.',
          type: 'questions',
          items: [
            { q: 'When does the person go to the shop?',         hint: 'Когда он ходит в магазин?' },
            { q: 'What does he buy this week?',                  hint: 'Что он покупает на этой неделе?' },
            { q: 'How does he pay?',                             hint: 'Как он платит?' },
            { q: 'How long does it take to cook dinner?',        hint: 'Сколько времени уходит на ужин?' },
            { q: 'Why does he like cooking at home?',            hint: 'Почему ему нравится готовить дома?' },
          ],
        },
        {
          subtitle: '5.3. Переведи с русского на английский',
          hint: 'Попробуй перевести. После каждого предложения — правильный ответ.',
          type: 'translate',
          items: [
            { ru: 'Сколько это стоит?',                     en: 'How much does it cost?' },
            { ru: 'Цена слишком высокая.',                  en: 'The price is too high.' },
            { ru: 'У меня достаточно еды для всех.',        en: 'I have enough food for everyone.' },
            { ru: 'Он не ест много мяса.',                  en: "He doesn't eat much meat." },
            { ru: 'Ужин готов. Иди есть.',                  en: 'Dinner is ready. Come and eat.' },
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
            { sentence: "I'm ___. Let's eat something.",               options: 'thirsty / hungry / ready',   answer: 'hungry' },
            { sentence: 'How much does it ___?',                       options: 'pay / cost / price',         answer: 'cost' },
            { sentence: "The soup is ___ hot. I can't eat it.",        options: 'enough / too / only',        answer: 'too' },
            { sentence: 'She ___ food for the whole week on Saturday.', options: 'pays / buys / costs',      answer: 'buys' },
            { sentence: "Is there ___ water? I'm very thirsty.",       options: 'any / many / much',          answer: 'any' },
            { sentence: 'Dinner is ___. Come to the table.',           options: 'cook / hungry / ready',      answer: 'ready' },
            { sentence: 'He eats ___ fruit every day.',                options: 'much / a lot of / many',     answer: 'a lot of' },
            { sentence: "I don't have ___ money right now.",           options: 'many / much / a lot',        answer: 'much' },
            { sentence: 'Can I pay by ___?',                           options: 'price / card / shop',        answer: 'card' },
            { sentence: 'I ___ drink coffee, not tea.',                options: 'only / too / enough',        answer: 'only' },
          ],
        },
        {
          subtitle: '6.2. Перефразируй предложение',
          hint: 'Скажи то же самое другими словами.',
          type: 'rephrase',
          items: [
            { task: "The coffee is very hot. I can't drink it.", answer: 'The coffee is too hot to drink.' },
            { task: "I don't have a lot of time.",              answer: "I don't have much time." },
            { task: "I want to eat something. I haven't eaten since morning.", answer: "I'm very hungry." },
            { task: 'There is no food at home. I need to go to the shop.', answer: 'I need to buy some food.' },
            { task: 'Is the portion big enough for you?',      answer: 'Do you have enough?' },
          ],
        },
        {
          subtitle: '6.3. Мини-текст для чтения',
          hint: 'Слова из Модулей 1–5. Читай и понимай смысл.',
          type: 'reading',
          textTitle: 'Dinner at Home',
          original: [
            'My friend Oleg always cooks at home. He says it\'s cheaper and better than restaurant food. I think he is right.',
            'Last week he invited me for dinner. I came at seven. The food was already ready — soup, bread, and some vegetables. He also made tea.',
            'I was very hungry when I arrived. I ate a lot — maybe too much. But everything was so good.',
            '«How long did it take?» I asked. «About 40 minutes,» he said. «It\'s not hard. Just buy good food and don\'t cook it too long.»',
            'I paid nothing — he said it was his present. But next time, I will cook for him.',
          ],
          translation: [
            'Мой друг Олег всегда готовит дома. Он говорит, что это дешевле и лучше, чем еда в ресторане. Я думаю, он прав.',
            'На прошлой неделе он пригласил меня на ужин. Я пришёл в семь. Еда была уже готова — суп, хлеб и немного овощей. Он также приготовил чай.',
            'Когда я пришёл, я был очень голоден. Я съел много — может быть, слишком много. Но всё было так вкусно.',
            '«Сколько времени это заняло?» — спросил я. «Около 40 минут, — сказал он. — Это не сложно. Просто купи хорошие продукты и не готовь слишком долго».',
            'Я ничего не платил — он сказал, что это его подарок. Но в следующий раз я приготовлю для него.',
          ],
        },
      ],
    },
  ],

  next: {
    id: 6,
    title: 'Модуль 6 — Числа и количество',
    preview: [
      'one, two, three... hundred, thousand (один, два, три... сто, тысяча)',
      'first, second, third (первый, второй, третий)',
      'half (половина), quarter (четверть), double (двойной)',
      'count (считать), number (число), add (добавлять), total (итого)',
    ],
    tip: 'Напиши список того, что ты обычно покупаешь в магазине — на английском. Хотя бы 7–10 продуктов. Потом составь из них 3 предложения, используя much, many, enough, too.',
  },
}
