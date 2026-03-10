import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import styles from './AuthModal.module.css'

function AuthModal({ onClose }) {
  const { loginWithEmail, registerWithEmail, loginWithGoogle } = useAuth()
  const [mode, setMode] = useState('login') // 'login' | 'register'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      if (mode === 'login') {
        await loginWithEmail(email, password)
      } else {
        await registerWithEmail(email, password)
      }
      onClose()
    } catch (err) {
      setError(getErrorMessage(err.code))
    } finally {
      setLoading(false)
    }
  }

  const handleGoogle = async () => {
    setError('')
    setLoading(true)
    try {
      await loginWithGoogle()
      onClose()
    } catch (err) {
      setError(getErrorMessage(err.code))
    } finally {
      setLoading(false)
    }
  }

  const getErrorMessage = (code) => {
    const messages = {
      'auth/user-not-found': 'Пользователь не найден',
      'auth/wrong-password': 'Неверный пароль',
      'auth/email-already-in-use': 'Email уже используется',
      'auth/weak-password': 'Пароль слишком короткий (минимум 6 символов)',
      'auth/invalid-email': 'Неверный формат email',
      'auth/invalid-credential': 'Неверный email или пароль',
      'auth/popup-closed-by-user': 'Вход отменён',
      'auth/too-many-requests': 'Слишком много попыток. Попробуйте позже',
    }
    return messages[code] || 'Произошла ошибка. Попробуйте ещё раз'
  }

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal} role="dialog" aria-modal="true" aria-label="Авторизация">
        <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">
          ✕
        </button>

        <h2 className={styles.title}>
          {mode === 'login' ? 'Вход в аккаунт' : 'Регистрация'}
        </h2>

        <button
          className={styles.googleBtn}
          onClick={handleGoogle}
          disabled={loading}
          type="button"
        >
          <GoogleIcon />
          Войти через Google
        </button>

        <div className={styles.divider}>
          <span>или</span>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              autoComplete="email"
            />
          </label>

          <label className={styles.label}>
            Пароль
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              minLength={6}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            />
          </label>

          {error && <p className={styles.error}>{error}</p>}

          <button
            className={styles.submitBtn}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Загрузка...' : mode === 'login' ? 'Войти' : 'Создать аккаунт'}
          </button>
        </form>

        <p className={styles.switchText}>
          {mode === 'login' ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}{' '}
          <button
            className={styles.switchBtn}
            onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError('') }}
            type="button"
          >
            {mode === 'login' ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </p>
      </div>
    </div>
  )
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332C2.438 15.983 5.482 18 9 18z" fill="#34A853"/>
      <path d="M3.964 10.71c-.18-.54-.282-1.117-.282-1.71s.102-1.17.282-1.71V4.958H.957C.347 6.173 0 7.548 0 9s.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0 5.482 0 2.438 2.017.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  )
}

export default AuthModal
