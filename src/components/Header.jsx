import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import AuthModal from './AuthModal'
import styles from './Header.module.css'

function Header() {
  const { user, logout } = useAuth()
  const [showModal, setShowModal] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const avatarLetter = user?.displayName
    ? user.displayName[0].toUpperCase()
    : user?.email
    ? user.email[0].toUpperCase()
    : '?'

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <div className={styles.logo}>
            <span className={styles.logoEn}>EN</span>
            <span className={styles.logoTitle}>English 3000</span>
          </div>

          <div className={styles.right}>
            <nav className={styles.nav}>
              <Link to="/concept" className={styles.navLink}>Концепция</Link>
              <button
                className={styles.navLink}
                onClick={() => document.getElementById('contents')?.scrollIntoView({ behavior: 'smooth' })}
              >Содержание</button>
            </nav>

            {user ? (
              <div className={styles.userMenu}>
                <button
                  className={styles.avatar}
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  aria-label="Меню пользователя"
                  aria-expanded={showUserMenu}
                >
                  {user.photoURL
                    ? <img src={user.photoURL} alt="" className={styles.avatarImg} referrerPolicy="no-referrer" />
                    : avatarLetter
                  }
                </button>
                {showUserMenu && (
                  <div className={styles.dropdown}>
                    <p className={styles.dropdownEmail}>{user.displayName || user.email}</p>
                    <button
                      className={styles.logoutBtn}
                      onClick={() => { logout(); setShowUserMenu(false) }}
                    >
                      Выйти
                    </button>
                  </div>
                )}
                {showUserMenu && (
                  <div className={styles.dropdownOverlay} onClick={() => setShowUserMenu(false)} />
                )}
              </div>
            ) : (
              <button
                className={styles.loginBtn}
                onClick={() => setShowModal(true)}
              >
                Войти
              </button>
            )}
          </div>
        </div>
      </header>

      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  )
}

export default Header
