import { useState, useEffect, useRef } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase/config'

const LS_KEY = 'english3000_quiz'

function loadFromLS() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || {} }
  catch { return {} }
}

function saveToLS(data) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(data)) } catch {}
}

/**
 * useQuizResults()
 * returns {
 *   results: { [moduleId]: { learnedCount, totalWords, percent, score, total, date } },
 *   saveResult(moduleId, { learnedCount, totalWords, score, total })
 * }
 */
export function useQuizResults() {
  const { user } = useAuth()
  const userRef = useRef(user)
  useEffect(() => { userRef.current = user }, [user])

  const [results, setResults] = useState(loadFromLS)

  useEffect(() => {
    if (!user) {
      setResults(loadFromLS())
      return
    }
    const ref = doc(db, 'users', user.uid)
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data()
        setResults(data.quizResults || {})
      }
    })
    return unsub
  }, [user])

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
    const u = userRef.current
    if (u) {
      setDoc(doc(db, 'users', u.uid), { quizResults: updated }, { merge: true })
    } else {
      saveToLS(updated)
    }
  }

  return { results, saveResult }
}
