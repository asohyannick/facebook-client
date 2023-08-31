import React, {useState} from 'react'
import styles from './Training.module.css';
import ReactMarkdown from 'react-markdown'
const Training = () => {
    const [markdown, setMarkdown] = useState('# markdown preview')

    return (
      <main>
        <section className={styles.markdown}>
          <textarea
            className={styles.input}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
          ></textarea>
          <article className={styles.result}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </article>
        </section>
      </main>
    )
}

export default Training
