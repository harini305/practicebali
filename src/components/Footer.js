import { nav, site } from '@/data/site';
import styles from './Footer.module.css';

const NEW_TAB = <span className="visually-hidden"> (opens in a new tab)</span>;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brand}>
          <img src="/images/brand/logo-130.webp" width={130} height={160} alt="" className={styles.logo} loading="lazy" />
          <div>
            <p className={styles.name}>{site.name}</p>
            <p className={styles.small}>
              {site.address.lines.join(', ')}
              <br />
              <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
            </p>
          </div>
        </div>

        <nav aria-label="Footer" className={styles.nav}>
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className={styles.bottomLinks}>
          <ul aria-label="Social media">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  {NEW_TAB}
                </a>
              </li>
            ))}
          </ul>
          <ul aria-label="Legal">
            {site.legal.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  {l.label}
                  {NEW_TAB}
                </a>
              </li>
            ))}
            <li>
              <a href="#top">Back to top</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
