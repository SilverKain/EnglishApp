import { useState } from 'react'

const KEY = 'english3000_quiz'

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {} }
  catch { return {} }
}

function save(data) {
  localStorage.setItem(KEY, JSON.stringify(data))
}

/**
 * useQuizResults()
 * returns {
 *   results: { [moduleId]: { learnedCount, totalWords, percent, score, total, date } },
 *   saveResult(moduleId, { learnedCount, totalWords, score, total })
 * }
 */
export function useQuizResults() {
  const [results, setResults] = useState(load)

  const saveResult = (moduleId, payload) => {
    const updated = {
      ...results,
      [moduleId]: {
        ...payload,
        percent: Math.round((payload.learnedCount / payload.totalWords) * 100),
        date: Date.now(),
      },
    }
    setResults(updated)
    save(updated)
  }

  return { results, saveResult }
}
