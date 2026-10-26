import { site } from '@/data/site';
import Picture from './Picture';
import SectionHead from './SectionHead';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`panel ${styles.panel}`} aria-labelledby="contact-title">
      <div className={`fill ${styles.media}`}>
        <Picture
          set="contact/founders"
          alt="Octavio and Emma Salvado seated together in the studio"
          sizes="(min-width: 900px) 42vw, 100vw"
        />
      </div>

      <div className={`panel-body ${styles.body}`}>
        <SectionHead id="contact" title="Visit & contact" />
        <address className={styles.address}>{site.address.lines.join(', ')}</address>
        <p className={styles.directions}>
          On Batu Bolong, about 300m before the beach, opposite Lacalita.{' '}
          <a className={`text-link ext ${styles.mapLink}`} href={site.address.mapUrl} target="_blank" rel="noopener noreferrer">
            Map<span className="visually-hidden"> – open in Google Maps (opens in a new tab)</span>
          </a>
        </p>
        <div className="actions">
          <a className="btn" href={site.phone.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp {site.phone.display}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <a className={`btn btn--outline ext ${styles.mapBtn}`} href={site.address.mapUrl} target="_blank" rel="noopener noreferrer">
            Google Maps<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>

        <ul className={styles.emails}>
          {site.emails.map((e) => (
            <li key={e.address}>
              <span className={styles.purpose}>{e.purpose}</span>
              <a href={`mailto:${e.address}`}>{e.address}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
