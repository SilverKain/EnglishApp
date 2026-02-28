import { useState, useCallback } from 'react'

function load() {
  try {
    const raw = localStorage.getItem('english3000_read')
    return raw ? new Set(JSON.parse(raw)) : new Set()
  } catch {
    return new Set()
  }
}

function save(set) {
  try {
    localStorage.setItem('english3000_read', JSON.stringify([...set]))
  } catch {}
}

export function useReadModules() {
  const [readSet, setReadSet] = useState(load)

  const isRead = useCallback((id) => readSet.has(id), [readSet])

  const toggleRead = useCallback((id) => {
    setReadSet((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      save(next)
      return next
    })
  }, [])

  const markRead = useCallback((id) => {
    setReadSet((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      save(next)
      return next
    })
  }, [])

  return { isRead, toggleRead, markRead, readSet }
}
