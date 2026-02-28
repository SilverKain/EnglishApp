import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          <span className={styles.logoEn}>EN</span>
          <span className={styles.logoTitle}>English 3000</span>
        </div>
        <nav className={styles.nav}>
          <a href="#concept" className={styles.navLink}>Концепция</a>
          <a href="#contents" className={styles.navLink}>Содержание</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
