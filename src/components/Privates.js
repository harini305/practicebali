import { privates, privatesTerms } from '@/data/programs';
import { site } from '@/data/site';
import Carousel from './Carousel';
import Picture from './Picture';
import styles from './Privates.module.css';

function Overlay({ p }) {
  return (
    <div className={styles.overlay}>
      <h3>{p.title}</h3>
      <p className={styles.from}>From {p.from}</p>
      <p className={styles.text}>{p.text}</p>
      <details className={`disclosure ${styles.prices}`}>
        <summary>
          See prices<span className="visually-hidden"> for {p.title}</span>
        </summary>
        <ul className="price-list">
          {p.prices.map(([label, price]) => (
            <li key={label}>
              <span>{label}</span>
              <strong>{price}</strong>
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
}

export default function Privates() {
  return (
    <section id="privates" className={`panel ${styles.panel}`} aria-labelledby="privates-title">
      <div className={styles.head}>
        <div>
          <h2 id="privates-title">Private sessions</h2>
          <p>One-to-one and small groups – at the studio, at home or online.</p>
        </div>
        <div className={styles.headActions}>
          <a className="text-link ext" href={privatesTerms} target="_blank" rel="noopener noreferrer">
            Terms &amp; conditions<span className="visually-hidden"> for private sessions (opens in a new tab)</span>
          </a>
          <a className="btn btn--light" href={site.phone.whatsapp} target="_blank" rel="noopener noreferrer">
            Book on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      {/* Wide screens: four full-height photo columns */}
      <ul className={`${styles.columns} only-wide`}>
        {privates.map((p) => (
          <li key={p.id} className={`fill ${styles.col}`}>
            <Picture set={p.image.set} alt={p.image.alt} sizes="25vw" />
            <Overlay p={p} />
          </li>
        ))}
      </ul>

      {/* Phones: swipeable photo cards */}
      <div className={`${styles.mobile} only-narrow`}>
        <Carousel label="Private sessions">
          {privates.map((p) => (
            <li key={p.id} className={`fill ${styles.col}`}>
              <Picture set={p.image.set} alt={p.image.alt} sizes="80vw" />
              <Overlay p={p} />
            </li>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
