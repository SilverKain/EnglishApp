import { useState, useCallback, useEffect, useRef } from 'react'
import { doc, onSnapshot, setDoc } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext'
import { db } from '../firebase/config'

const LS_KEY = 'english3000_read'

function loadFromLS() {
  try {
    const raw = localStorage.getItem(LS_KEY)
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function saveToLS(set) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify([...set]))
  } catch {}
}

export function useReadModules() {
  const { user } = useAuth()
  const userRef = useRef(user)
  useEffect(() => { userRef.current = user }, [user])

  const [readSet, setReadSet] = useState(loadFromLS)

  useEffect(() => {
    if (!user) {
      setReadSet(loadFromLS())
      return
    }
    const ref = doc(db, 'users', user.uid)
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data()
        setReadSet(new Set(data.readModules || []))
      }
    })
    return unsub
  }, [user])

  const isRead = useCallback((id) => readSet.has(id), [readSet])

  const toggleRead = useCallback((id) => {
    setReadSet((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      const u = userRef.current
      if (u) {
        setDoc(doc(db, 'users', u.uid), { readModules: [...next] }, { merge: true })
      } else {
        saveToLS(next)
      }
      return next
    })
  }, [])

  const markRead = useCallback((id) => {
    setReadSet((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      const u = userRef.current
      if (u) {
        setDoc(doc(db, 'users', u.uid), { readModules: [...next] }, { merge: true })
      } else {
        saveToLS(next)
      }
      return next
    })
  }, [])

  return { isRead, toggleRead, markRead, readSet }
}
