export const module23 = {
  id: 23,
  levelId: 'level-1',
  title: 'Телефон и сообщения',
  words: '437–456',
  wordCount: 20,
  totalWords: 3000,

  blocks: [
    // ── БЛОК 1 ── СПИСОК СЛОВ ──────────────────────────────────────────────
    {
      id: 'words',
      type: 'word-list',
      title: 'Блок 1 — Список слов',
      intro: 'Слова 437–456 — телефон, связь, сообщения.',
      words: [
        { num: 437, word: 'phone',    tr: '[fəʊn]',        ru: 'телефон; звонить',                   ex: 'My phone died in the middle of the call.',                               exRu: 'Мой телефон разрядился в середине разговора.' },
        { num: 438, word: 'call',     tr: '[kɔːl]',        ru: 'звонить; звонок; звать',              ex: 'I will call you when I arrive — don\'t worry.',                          exRu: 'Я позвоню тебе, когда приеду — не беспокойся.' },
        { num: 439, word: 'message',  tr: '[ˈmesɪdʒ]',    ru: 'сообщение; написать',                ex: 'She sent me a message saying she would be late.',                        exRu: 'Она прислала мне сообщение, что опоздает.' },
        { num: 440, word: 'text',     tr: '[tekst]',       ru: 'текстовое сообщение; писать (смс)',  ex: 'He texted me the address so I wouldn\'t forget it.',                     exRu: 'Он написал мне адрес в сообщении, чтобы я не забыл.' },
        { num: 441, word: 'email',    tr: '[ˈiːmeɪl]',    ru: 'электронное письмо; написать имейл', ex: 'Send me an email with the details — I will look at it tonight.',          exRu: 'Отправь мне имейл с деталями — посмотрю сегодня вечером.' },
        { num: 442, word: 'app',      tr: '[æp]',          ru: 'приложение',                         ex: 'There is an app for everything now — maps, food, language learning.',     exRu: 'Сейчас есть приложение для всего — карты, еда, изучение языков.' },
        { num: 443, word: 'screen',   tr: '[skriːn]',      ru: 'экран',                              ex: 'The screen cracked when I dropped it on the pavement.',                  exRu: 'Экран треснул, когда я уронил телефон на тротуар.' },
        { num: 444, word: 'ring',     tr: '[rɪŋ]',         ru: 'звонить (о телефоне); кольцо',      ex: 'My phone rang in the middle of the meeting — very embarrassing.',        exRu: 'Мой телефон зазвонил в середине совещания — очень неловко.' },
        { num: 445, word: 'answer',   tr: '[ˈɑːnsə]',      ru: 'отвечать (на звонок); ответ',       ex: 'She didn\'t answer — maybe she was driving.',                            exRu: 'Она не ответила — может, была за рулём.' },
        { num: 446, word: 'reply',    tr: '[rɪˈplaɪ]',    ru: 'отвечать (на сообщение); ответ',    ex: 'He takes hours to reply to messages — it drives me crazy.',               exRu: 'Он часами не отвечает на сообщения — это меня бесит.' },
        { num: 447, word: 'send',     tr: '[send]',        ru: 'отправлять',                         ex: 'Can you send me the photo? I want to show it to my sister.',             exRu: 'Можешь прислать мне фото? Хочу показать сестре.' },
        { num: 448, word: 'receive',  tr: '[rɪˈsiːv]',    ru: 'получать',                           ex: 'I received an email from the company this morning — they want an interview.', exRu: 'Утром я получил имейл от компании — они хотят провести собеседование.' },
        { num: 449, word: 'charge',   tr: '[tʃɑːdʒ]',     ru: 'заряжать; плата; обвинение',        ex: 'My phone is almost dead — I need to charge it.',                         exRu: 'Мой телефон почти разрядился — нужно зарядить.' },
        { num: 450, word: 'connect',  tr: '[kəˈnekt]',    ru: 'подключать; соединять',              ex: 'I can\'t connect to the Wi-Fi — the password is wrong.',                 exRu: 'Не могу подключиться к Wi-Fi — неверный пароль.' },
        { num: 451, word: 'download', tr: '[ˈdaʊnləʊd]',  ru: 'скачивать; загружать',               ex: 'Download the app and I will send you the link.',                         exRu: 'Скачай приложение — я пришлю тебе ссылку.' },
        { num: 452, word: 'contact',  tr: '[ˈkɒntækt]',   ru: 'контакт; связываться',               ex: 'His number is in my contacts — I will find it.',                         exRu: 'Его номер у меня в контактах — найду.' },
        { num: 453, word: 'number',   tr: '[ˈnʌmbə]',     ru: 'номер; число',                       ex: 'Can I have your number? I will text you the details.',                  exRu: 'Можно твой номер? Напишу детали в сообщении.' },
        { num: 454, word: 'voice',    tr: '[vɔɪs]',        ru: 'голос',                              ex: 'She left a voice message — her voice sounded tired.',                    exRu: 'Она оставила голосовое сообщение — её голос звучал устало.' },
        { num: 455, word: 'network',  tr: '[ˈnetwɜːk]',   ru: 'сеть; сигнал',                       ex: 'There is no network here — we will have to wait until we get back.',     exRu: 'Здесь нет сети — придётся подождать, пока не вернёмся.' },
        { num: 456, word: 'loud',     tr: '[laʊd]',        ru: 'громкий; громко',                    ex: 'Can you turn it down? The music is too loud.',                           exRu: 'Можешь убавить? Музыка слишком громкая.' },
      ],
      note: {
        title: 'call vs ring vs phone; answer vs reply',
        lines: [
          'call — самый универсальный: Call me later. ring — акцент на звонке: I rang him three times. phone — разговорное (брит.): Phone me when you arrive.',
          'answer — ответить на звонок или вопрос: Answer the phone. / Answer my question.',
          'reply — ответить на сообщение, имейл: Reply to my email. / He replied to her text.',
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
        { num: 1,  en: 'My phone battery died on the way home — I had to find the address from memory.',                    ru: 'Батарея телефона разрядилась по дороге домой — пришлось вспоминать адрес по памяти.', note: 'battery — [ˈbætəri] — батарея' },
        { num: 2,  en: 'I called her three times but she didn\'t pick up — I hope she is okay.',                           ru: 'Я звонил ей три раза, но она не взяла трубку — надеюсь, всё в порядке.', note: 'pick up — взять трубку' },
        { num: 3,  en: 'She sent me a long message explaining why she couldn\'t come. I read it twice.',                   ru: 'Она написала мне длинное сообщение, объясняя, почему не сможет прийти. Я прочёл его дважды.', note: '' },
        { num: 4,  en: 'He never texts back quickly — sometimes I wait two days for a reply.',                             ru: 'Он никогда не отвечает на сообщения быстро — иногда я жду ответа два дня.', note: '' },
        { num: 5,  en: 'Please send me the document by email — I need it before the meeting tomorrow.',                    ru: 'Пожалуйста, отправь мне документ по имейлу — он нужен мне до завтрашнего совещания.', note: '' },
        { num: 6,  en: 'There is an app she uses to practise English every morning — ten minutes before coffee.',          ru: 'Есть приложение, которым она пользуется для практики английского каждое утро — десять минут до кофе.', note: '' },
        { num: 7,  en: 'He dropped his phone and the screen cracked right down the middle.',                               ru: 'Он уронил телефон, и экран треснул прямо посередине.', note: 'right down the middle — прямо посередине' },
        { num: 8,  en: 'My phone rang during the film — I forgot to put it on silent.',                                    ru: 'Мой телефон зазвонил во время фильма — я забыл перевести его в беззвучный режим.', note: 'on silent — в беззвучном режиме' },
        { num: 9,  en: 'I answered the call without looking at the number — it was a wrong number.',                      ru: 'Я ответил на звонок, не глядя на номер — это был ошибочный номер.', note: 'wrong number — ошибочный номер' },
        { num: 10, en: 'She replied to the email in five minutes — which surprised everyone.',                             ru: 'Она ответила на имейл за пять минут — это удивило всех.', note: '' },
        { num: 11, en: 'I need to charge my phone before we go out — it is at eight percent.',                             ru: 'Мне нужно зарядить телефон перед тем, как мы выйдем — заряд восемь процентов.', note: '' },
        { num: 12, en: 'I tried to connect to the hotel Wi-Fi for twenty minutes — it never worked.',                     ru: 'Я пытался подключиться к Wi-Fi в гостинице двадцать минут — так и не получилось.', note: '' },
        { num: 13, en: 'Download the map before you leave — there is no network in the mountains.',                       ru: 'Скачай карту перед отъездом — в горах нет сети.', note: '' },
        { num: 14, en: 'I lost her contact when I changed my phone — now I have no way to reach her.',                   ru: 'Я потерял её контакт, когда менял телефон — теперь не знаю, как с ней связаться.', note: 'reach — связаться, найти' },
        { num: 15, en: 'Can you turn down the volume? Your music is too loud — I can hear it from the next room.',        ru: 'Можешь убавить звук? Твоя музыка слишком громкая — я слышу её из соседней комнаты.', note: '' },
      ],
      note: {
        title: 'Фразовые глаголы с call',
        lines: [
          'call back — перезвонить: I will call you back in ten minutes.',
          'call off — отменить: They called off the meeting. — Они отменили совещание.',
          'pick up (телефон) — взять трубку: He didn\'t pick up. — Он не взял трубку.',
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
        'Sam had three missed calls from his mother. He saw them when he came out of the underground — he had been in the tunnel for forty minutes without a network.',
        'He called her back immediately.',
        '"Where were you?" she said. Her voice was calm, but he knew that tone.',
        '"On the train. No signal. Is everything okay?"',
        '"Your father is in hospital," she said. "Nothing serious — he fell and hurt his shoulder. But he asked for you."',
        'Sam stood on the street, people walking past him on every side. He opened the train app on his phone and checked the times. The next one was in eighteen minutes.',
        '"I am coming," he said. "I will send you a message when I am on the train."',
        'He charged his phone at a café while he waited. He texted his colleague to say he wouldn\'t be in tomorrow. He replied to three emails he had been avoiding. Then he sat quietly and watched the screen.',
        'When the train came, he was the first one on.',
      ],
      translation: [
        'У Сэма было три пропущенных звонка от мамы. Он увидел их, выйдя из метро — сорок минут он был в тоннеле без сети.',
        'Он сразу же перезвонил.',
        '— Где ты был? — сказала она. Голос спокойный, но он знал этот тон.',
        '— В поезде. Не было сигнала. Всё в порядке?',
        '— Папа в больнице, — сказала она. — Ничего серьёзного — упал, ушиб плечо. Но он спрашивал о тебе.',
        'Сэм стоял на улице, люди шли мимо со всех сторон. Он открыл приложение поездов и проверил расписание. Следующий — через восемнадцать минут.',
        '— Я еду, — сказал он. — Напишу, когда буду в поезде.',
        'Пока ждал, зарядил телефон в кафе. Написал коллеге, что завтра не выйдет. Ответил на три имейла, которые откладывал. Потом тихо сидел и смотрел в экран.',
        'Когда пришёл поезд, он был первым в вагоне.',
      ],
      vocab: [
        { word: 'missed calls',  tr: '—',                   ru: 'пропущенные звонки' },
        { word: 'underground',   tr: '[ˈʌndəɡraʊnd]',      ru: 'метро' },
        { word: 'immediately',   tr: '[ɪˈmiːdiətli]',      ru: 'немедленно, сразу' },
        { word: 'signal',        tr: '[ˈsɪɡnl]',           ru: 'сигнал' },
        { word: 'shoulder',      tr: '[ˈʃəʊldə]',          ru: 'плечо' },
        { word: 'avoiding',      tr: '[əˈvɔɪdɪŋ]',        ru: 'избегая, откладывая' },
        { word: 'tone',          tr: '[təʊn]',              ru: 'тон (голоса)' },
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
          sentence:    'Call me. Ring me. Text me. Phone me.',
          schema:      'Глаголы звонить и писать — выбор правильного.',
          explanation: 'call — универсальный. ring — акцент на звонке телефона. text — написать смс-сообщение. phone — разговорное (британский английский). answer — телефон и вопросы. reply — сообщения и письма.',
          pattern:     'call / ring / phone + [person]; text + [person]; answer + phone/question; reply to + message/email.',
          examples:    ['Call me when you arrive.', 'She texted him the address.', 'Please reply to my email.', 'Answer the phone — it might be important.'],
        },
        {
          sentence:    'She said she would be late.',
          schema:      'Косвенная речь — сказал, что…',
          explanation: 'При пересказе время «смещается назад»: "I am busy" → She said she was busy. "I will call" → He said he would call. "I texted you" → She said she had texted.',
          pattern:     '[Subject] said (that) [subject] + [past tense].',
          examples:    ['She said she would be late.', 'He texted me that the meeting was cancelled.', 'She replied that she didn\'t understand.'],
        },
        {
          sentence:    'I need to charge my phone.',
          schema:      'Глагол need to + инфинитив.',
          explanation: 'need to + do — нужно что-то сделать: I need to charge my phone. She needs to download the app. He needed to call back.',
          pattern:     '[Subject] need(s) to + [do].',
          examples:    ['I need to charge my phone.', 'You need to download the app first.', 'She needs to reply to that email.'],
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
            'I usually check my phone when…',
            'The last message I received was…',
            'I prefer calling / texting because…',
            'When my phone has no battery, I feel…',
            'The person I text most often is…',
          ],
        },
        {
          type:   'questions',
          title:  '5.2. Ответь на вопросы по тексту',
          items: [
            { q: 'Why had Sam missed his mother\'s calls?',                      hint: 'Почему Сэм пропустил звонки мамы?' },
            { q: 'What had happened to his father?',                             hint: 'Что случилось с его отцом?' },
            { q: 'What did Sam do while waiting for the train?',                 hint: 'Что Сэм делал, ожидая поезд?' },
            { q: 'What did he text his colleague about?',                        hint: 'Что он написал коллеге?' },
            { q: 'What does "he was the first one on" tell us about Sam\'s mood?', hint: 'Что говорит о настроении Сэма фраза «он был первым в вагоне»?' },
          ],
        },
        {
          type:   'translate',
          title:  '5.3. Переведи с русского на английский',
          items: [
            { ru: 'Я звонил тебе три раза — почему ты не взял трубку?',         en: 'I called you three times — why didn\'t you pick up?' },
            { ru: 'Отправь мне имейл с деталями — я отвечу сегодня вечером.',   en: 'Send me an email with the details — I will reply this evening.' },
            { ru: 'Мне нужно зарядить телефон — он почти разрядился.',          en: 'I need to charge my phone — it is almost dead.' },
            { ru: 'Там не было сети, поэтому я не получил твоё сообщение.',     en: 'There was no network there, so I didn\'t receive your message.' },
            { ru: 'Скачай это приложение — оно очень помогает с произношением.', en: 'Download this app — it really helps with pronunciation.' },
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
            { sentence: 'I have three ___ calls — I need to call back.',        answer: 'missed' },
            { sentence: 'Can you turn down the music? It is too ___.',          answer: 'loud' },
            { sentence: 'She didn\'t ___ the phone — maybe she was busy.',      answer: 'answer' },
            { sentence: 'My ___ cracked when I dropped my phone on the floor.', answer: 'screen' },
            { sentence: 'He ___ me the address — I saved it in my notes.',      answer: 'texted' },
            { sentence: 'I need to ___ my phone before we leave — it is at five percent.', answer: 'charge' },
            { sentence: 'There is no ___ in this area — we cannot connect.',    answer: 'network' },
            { sentence: 'She ___ to my email in less than a minute.',           answer: 'replied' },
            { sentence: 'I ___ a message from the bank this morning.',          answer: 'received' },
            { sentence: '___ the app first, then create an account.',           answer: 'Download' },
          ],
        },
        {
          type:  'rephrase',
          title: '6.2. Перефразируй предложение',
          items: [
            { original: 'I telephoned her but she didn\'t pick up.',   rephrased: 'I called her but she didn\'t answer.' },
            { original: 'He responded to my message after two hours.', rephrased: 'He replied to my message after two hours.' },
            { original: 'The phone started ringing in my pocket.',     rephrased: 'My phone rang in my pocket.' },
            { original: 'The battery is very low.',                    rephrased: 'I need to charge my phone.' },
            { original: 'I got an email from her this morning.',       rephrased: 'She sent me an email this morning.' },
          ],
        },
        {
          type:    'reading',
          title:   '6.3. Мини-текст для чтения',
          passage: [
            'On Friday evening, Mia decided to leave her phone at home. She had been feeling tired all week — from the constant noise of messages, emails, apps updating.',
            'She went for a walk. No phone, no earphones, no podcast. Just the street, the cold air and her own thoughts.',
            'At first it felt strange. She kept reaching for her pocket. It took about twenty minutes before that feeling faded.',
            'Then she noticed things she usually walked past without seeing — a dog watching people from a window, two old men playing chess outside a café.',
            'She walked for two hours. When she got home, she picked up her phone. Fourteen messages. Three missed calls. One email that could wait.',
            'She replied to two of the most important ones and left the rest until morning. It had been a long time since she had felt so calm.',
          ],
          translation: [
            'В пятницу вечером Миа решила оставить телефон дома. Всю неделю она чувствовала усталость — от постоянного шума сообщений, имейлов, обновляющихся приложений.',
            'Она пошла гулять. Без телефона, без наушников, без подкастов. Только улица, холодный воздух и собственные мысли.',
            'Поначалу было странно. Она постоянно тянулась к кармашку. Прошло около двадцати минут, прежде чем это ощущение прошло.',
            'Потом она начала замечать то, мимо чего обычно проходила не глядя — собака у окна, двое пожилых мужчин за шахматами у кафе.',
            'Она гуляла два часа. Когда вернулась домой. Четырнадцать сообщений. Три пропущенных звонка. Один имейл, который мог подождать.',
            'Она ответила на два самых важных и оставила остальное до утра. Давно она не чувствовала себя такой спокойной.',
          ],
        },
      ],
    },
  ],

  next: {
    id:      24,
    title:   'Качества и характеристики',
    preview: ['big, small, long, short, high, low', 'fast, slow, strong, weak, heavy, light', 'clean, dirty, full, empty, safe, dangerous'],
    tip:     'Напиши три предложения о своих привычках с телефоном по-английски. Например: I check my phone too often. / I usually reply to messages in the evening.',
  },
}
