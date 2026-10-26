import { onlineCourses, trainings } from '@/data/programs';
import { site } from '@/data/site';
import Picture from './Picture';
import styles from './Hero.module.css';

// Quick routes into the main offerings (counts come from the data files)
const ROUTES = [
  { href: '#schedule', label: 'Daily classes', note: 'Studio in Canggu' },
  { href: '#trainings', label: 'Teacher trainings', note: `${trainings.more.length + 1} programs · Bali & online` },
  { href: '#online', label: 'Online courses', note: `${onlineCourses.length} courses · all year` },
  { href: '#privates', label: 'Private sessions', note: 'Studio, home or online' },
];

export default function Hero() {
  return (
    <section className={`panel ${styles.hero}`} aria-labelledby="hero-title">
      <div className={`fill ${styles.photo}`} data-hero-media>
        <Picture
          set="hero/studio"
          alt="Three teachers from The Practice in black, standing against a warm studio wall"
          sizes="1487px"
          priority
        />
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.copy} data-hero>
          <h1 id="hero-title">
            Welcome to
            <span>The Practice</span>
          </h1>
          <p className={styles.lead}>
            A leading institution in lineage-based Traditional Hatha Yoga education.
            <em>Evolve your practice. Evolve your life.</em>
          </p>
          <div className="actions">
            <a className="btn btn--light" href="#schedule">
              View the class schedule
            </a>
            <a className={`btn ${styles.ghost}`} href={site.phone.whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp us<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>

      <nav className={styles.routes} aria-label="Explore The Practice">
        {ROUTES.map((r) => (
          <a key={r.href} href={r.href} className={styles.route}>
            <span className={styles.routeLabel}>{r.label}</span>
            <span className={styles.routeNote}>{r.note}</span>
            <span className={`${styles.routeGo} arrow`} aria-hidden="true" />
          </a>
        ))}
      </nav>
    </section>
  );
}
