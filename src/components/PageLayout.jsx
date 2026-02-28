import { Link } from 'react-router-dom'
import styles from './PageLayout.module.css'

function PageLayout({ children, backTo = '/', backLabel = '← На главную' }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoEn}>EN</span>
            <span className={styles.logoTitle}>English 3000</span>
          </Link>
          <Link to={backTo} className={styles.back}>{backLabel}</Link>
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>English 3000 — курс для тех, кто хочет реальную свободу в языке</p>
      </footer>
    </div>
  )
}

export default PageLayout
