import { useState, useCallback, useEffect, useRef } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase/config'

const VOCAB_KEY = 'english3000_vocabulary'

function loadFromLS() {
  try {
    return JSON.parse(localStorage.getItem(VOCAB_KEY)) || []
  } catch {
    return []
  }
}

function saveToLS(words) {
  try { localStorage.setItem(VOCAB_KEY, JSON.stringify(words)) } catch {}
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
  const { user } = useAuth()
  const userRef = useRef(user)
  useEffect(() => { userRef.current = user }, [user])

  const [vocabulary, setVocabulary] = useState(loadFromLS)

  useEffect(() => {
    if (!user) {
      setVocabulary(loadFromLS())
      return
    }
    const ref = doc(db, 'users', user.uid)
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data()
        setVocabulary(data.vocabulary || [])
      }
    })
    return unsub
  }, [user])

  const addWordsToVocab = useCallback((newWords) => {
    setVocabulary((prev) => {
      const existingNums = new Set(prev.map((w) => w.num))
      const toAdd = newWords.filter((w) => !existingNums.has(w.num))
      if (toAdd.length === 0) return prev
      const updated = [...prev, ...toAdd]
      const u = userRef.current
      if (u) {
        setDoc(doc(db, 'users', u.uid), { vocabulary: updated }, { merge: true })
      } else {
        saveToLS(updated)
      }
      return updated
    })
  }, [])

  const removeMasteredWords = useCallback((nums) => {
    const numsSet = new Set(nums)
    setVocabulary((prev) => {
      const updated = prev.filter((w) => !numsSet.has(w.num))
      const u = userRef.current
      if (u) {
        setDoc(doc(db, 'users', u.uid), { vocabulary: updated }, { merge: true })
      } else {
        saveToLS(updated)
      }
      return updated
    })
  }, [])

  return { vocabulary, addWordsToVocab, removeMasteredWords }
}
