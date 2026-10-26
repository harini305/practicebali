import { books, journal } from '@/data/people';
import Picture from './Picture';
import SectionHead from './SectionHead';
import styles from './Books.module.css';

export default function Books() {
  return (
    <section id="books" className={`panel ${styles.panel}`} aria-labelledby="books-title">
      <div className={`panel-body ${styles.body}`}>
        <SectionHead id="books" title="Books by Octavio">
          <p>At the studio shop, alongside The Practice merchandise and yoga wear.</p>
        </SectionHead>
        <ul className={styles.list}>
          {books.items.map((b) => (
            <li key={b.title}>
              <span className={styles.title}>{b.title}</span>
              <span className={styles.price}>
                {b.price}
                <span> · {b.usd}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className={styles.note}>
          International shipping on request:{' '}
          <a className="text-link" href={`mailto:${books.email}`}>
            {books.email}
          </a>
        </p>
      </div>

      <div className={styles.side}>
        <div className={`fill ${styles.photo}`}>
          <Picture set="books/books" alt="Five books by Octavio Salvado laid out on a stone surface" sizes="(min-width: 900px) 50vw, 100vw" />
        </div>
        <div className={styles.journal} aria-labelledby="journal-title">
          <h3 id="journal-title">From the journal</h3>
          <ul>
            {journal.map((post) => (
              <li key={post.href}>
                <a href={post.href} target="_blank" rel="noopener noreferrer">
                  <span className={styles.postTitle}>{post.title}</span>
                  <span className={styles.postMeta}>
                    {post.author} · {post.date}
                  </span>
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
