import PageLayout from '../components/PageLayout'
import { conceptParts } from '../data/conceptData'
import styles from './ConceptPage.module.css'

function renderBlock(block, idx) {
  switch (block.type) {
    case 'paragraph':
      return <p key={idx} className={styles.paragraph}>{block.text}</p>
    case 'blockquote':
      return (
        <blockquote key={idx} className={styles.blockquote}>
          {block.lines.map((line, i) => <p key={i}>{line}</p>)}
        </blockquote>
      )
    case 'highlight':
      return <div key={idx} className={styles.highlight}>{block.text}</div>
    case 'schema':
      return (
        <div key={idx} className={styles.schema}>
          <code>{block.text}</code>
        </div>
      )
    case 'list':
      return (
        <ul key={idx} className={styles.list}>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      )
    case 'ordered-list':
      return (
        <ol key={idx} className={styles.orderedList}>
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ol>
      )
    case 'table':
      return (
        <div key={idx} className={styles.tableOuter}>
          <table className={styles.table}>
            <thead>
              <tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

function ConceptPage() {
  return (
    <PageLayout backLabel="← На главную">
      <div className={styles.pageHeader}>
        <span className={styles.badge}>Часть 1</span>
        <h1 className={styles.title}>Концепция курса</h1>
        <p className={styles.subtitle}>Что лежит в основе этого курса и как он устроен</p>
      </div>

      <div className={styles.parts}>
        {conceptParts.map((part, partIdx) => (
          <div key={part.id} className={styles.part}>
            <div className={styles.partNum}>{String(partIdx + 1).padStart(2, '0')}</div>
            <div className={styles.partBody}>
              <h2 className={styles.partTitle}>{part.title}</h2>
              <div className={styles.partContent}>
                {part.content.map((block, idx) => renderBlock(block, idx))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  )
}

export default ConceptPage
