import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut
} from 'firebase/auth'
import { auth, googleProvider } from '../firebase/config'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const loginWithEmail = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const registerWithEmail = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const loginWithGoogle = () =>
    signInWithPopup(auth, googleProvider)

  const logout = () => signOut(auth)

  return (
    <AuthContext.Provider value={{ user, loading, loginWithEmail, registerWithEmail, loginWithGoogle, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
