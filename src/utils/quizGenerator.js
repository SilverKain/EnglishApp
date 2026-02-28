/**
 * Generates quiz questions from a word list.
 *
 * Each word → 2 questions:
 *  1. en→ru  : "Что значит слово X?" → pick correct Russian translation
 *  2. context: "Какое слово использовано в примере?" (показывается русское предложение)
 *             → pick correct English word from 4 options
 *
 * A word is "mastered" when BOTH questions for it are answered correctly.
 * percent = mastered / totalWords × 100
 */

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickDistractors(pool, exclude, count, field) {
  return shuffle(pool.filter((w) => w !== exclude))
    .slice(0, count)
    .map((w) => w[field])
}

/**
 * @param {Array} words  — array of { num, word, tr, ru, ex, exRu }
 * @returns {Array}      — shuffled questions array
 */
export function generateQuiz(words) {
  const questions = []

  words.forEach((word) => {
    // ── Question type 1: English word → Russian meaning ──────────────────────
    const ruDistractors = pickDistractors(words, word, 3, 'ru')
    const ruOptions = shuffle([word.ru, ...ruDistractors])
    questions.push({
      id: `${word.num}-en-ru`,
      wordNum: word.num,
      type: 'en-ru',
      prompt: 'Что значит это слово?',
      questionWord: word.word,
      transcription: word.tr,
      options: ruOptions,
      correct: word.ru,
    })

    // ── Question type 2: Context — pick English word by Russian example ───────
    const wordDistractors = pickDistractors(words, word, 3, 'word')
    const wordOptions = shuffle([word.word, ...wordDistractors])
    questions.push({
      id: `${word.num}-context`,
      wordNum: word.num,
      type: 'context',
      prompt: 'Какое слово использовано в этом предложении?',
      contextRu: word.exRu,        // Russian example: "Я счастлив."
      contextEn: word.ex,          // English example: "I am happy."
      options: wordOptions,
      correct: word.word,
    })
  })

  return shuffle(questions)
}

/**
 * Calculates word-level mastery from answers map.
 * A word is mastered when BOTH its questions are correct.
 *
 * @param {Array}  words    — original word list
 * @param {Object} answers  — { questionId: boolean }
 * @returns {{ mastered: number[], total: number, percent: number }}
 */
export function calcMastery(words, answers) {
  const mastered = words.filter((word) => {
    const enRuId = `${word.num}-en-ru`
    const ctxId = `${word.num}-context`
    return answers[enRuId] === true && answers[ctxId] === true
  })

  const percent = Math.round((mastered.length / words.length) * 100)
  return {
    masteredCount: mastered.length,
    totalWords: words.length,
    percent,
  }
}
