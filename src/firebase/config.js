import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Замените эти значения на данные вашего Firebase проекта
// Firebase Console → Project Settings → Your apps → Firebase SDK snippet
const firebaseConfig = {
  apiKey: "AIzaSyA9d11yI6c65ldNLNeb-DkWTW-Nvp-4tF8",
  authDomain: "newworkspacess.firebaseapp.com",
  projectId: "newworkspacess",
  storageBucket: "newworkspacess.firebasestorage.app",
  messagingSenderId: "1026061822532",
  appId: "1:1026061822532:web:b067d04ceef5f0f9426a11"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
