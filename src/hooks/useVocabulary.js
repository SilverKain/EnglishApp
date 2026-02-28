import { useState, useCallback } from 'react'

const VOCAB_KEY = 'english3000_vocabulary'

function loadVocab() {
  try {
    return JSON.parse(localStorage.getItem(VOCAB_KEY)) || []
  } catch {
    return []
  }
}

function persistVocab(words) {
  localStorage.setItem(VOCAB_KEY, JSON.stringify(words))
}

/**
 * useVocabulary()
 * Manages the personal vocabulary (wrong-answer words).
 *
 * returns {
 *   vocabulary: Array<Word>,
 *   addWordsToVocab(words: Word[])       — adds words not already in vocab
 *   removeMasteredWords(nums: number[])  — removes words by their `num`
 * }
 */
export function useVocabulary() {
  const [vocabulary, setVocabulary] = useState(loadVocab)

  const addWordsToVocab = useCallback((newWords) => {
    setVocabulary((prev) => {
      const existingNums = new Set(prev.map((w) => w.num))
      const toAdd = newWords.filter((w) => !existingNums.has(w.num))
      if (toAdd.length === 0) return prev
      const updated = [...prev, ...toAdd]
      persistVocab(updated)
      return updated
    })
  }, [])

  const removeMasteredWords = useCallback((nums) => {
    const numsSet = new Set(nums)
    setVocabulary((prev) => {
      const updated = prev.filter((w) => !numsSet.has(w.num))
      persistVocab(updated)
      return updated
    })
  }, [])

  return { vocabulary, addWordsToVocab, removeMasteredWords }
}
