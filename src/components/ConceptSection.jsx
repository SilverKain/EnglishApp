import { conceptParts } from '../data/conceptData'
import styles from './ConceptSection.module.css'

function renderContent(block, idx) {
  switch (block.type) {
    case 'paragraph':
      return <p key={idx} className={styles.paragraph}>{block.text}</p>
    case 'blockquote':
      return (
        <blockquote key={idx} className={styles.blockquote}>
          {block.lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </blockquote>
      )
    case 'highlight':
      return (
        <div key={idx} className={styles.highlight}>
          {block.text}
        </div>
      )
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
        <div key={idx} className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.headers.map((h, i) => <th key={i}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => <td key={j}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

function ConceptSection() {
  return (
    <section id="concept" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>ЧАСТЬ 1</span>
          <h2 className={styles.sectionTitle}>Концепция курса</h2>
          <p className={styles.sectionSubtitle}>
            Что лежит в основе этого курса и как он устроен
          </p>
        </div>

        <div className={styles.parts}>
          {conceptParts.map((part) => (
            <div key={part.id} className={styles.part}>
              <h3 className={styles.partTitle}>{part.title}</h3>
              <div className={styles.partContent}>
                {part.content.map((block, idx) => renderContent(block, idx))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ConceptSection
