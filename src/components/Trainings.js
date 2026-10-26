import { trainings } from '@/data/programs';
import Carousel from './Carousel';
import Picture from './Picture';
import SectionHead from './SectionHead';
import styles from './Trainings.module.css';

const NEW_TAB = <span className="visually-hidden"> (opens The Practice Online in a new tab)</span>;

export default function Trainings() {
  const { featured, more } = trainings;
  const all = [featured, ...more];
  return (
    <section id="trainings" className={`panel ${styles.panel}`} aria-labelledby="trainings-title">
      <div className={`panel-body ${styles.body}`}>
        <SectionHead
          id="trainings"
          title="Teacher trainings"
          aside={
            <a className={`text-link ${styles.email}`} href="mailto:training@thepracticebali.com">
              training@thepracticebali.com
            </a>
          }
        >
          <p>In Bali and online. Prices and enrolment on The Practice Online.</p>
        </SectionHead>

        {/* Wide screens: the other trainings as rows that fill the column */}
        <ul className={`${styles.list} only-wide`}>
          {more.map((t) => (
            <li key={t.title}>
              <a className={styles.item} href={t.href} target="_blank" rel="noopener noreferrer">
                <span className={`fill ${styles.thumb}`}>
                  <Picture set={t.image.set} alt={t.image.alt} sizes="200px" />
                </span>
                <span className={styles.itemBody}>
                  <span className={styles.format}>{t.format}</span>
                  <span className={styles.itemTitle}>{t.title}</span>
                  <span className={styles.dates}>{t.dates}</span>
                </span>
                <span className={`${styles.go} arrow`} aria-hidden="true" />
                {NEW_TAB}
              </a>
            </li>
          ))}
        </ul>

        {/* Phones: all five trainings as swipeable cards */}
        <Carousel label="Teacher trainings" className="only-narrow">
          {all.map((t) => (
            <li key={t.title}>
              <a className={styles.card} href={t.href} target="_blank" rel="noopener noreferrer">
                <Picture set={t.image.set} alt={t.image.alt} sizes="80vw" className={styles.cardImg} />
                <span className={styles.cardBody}>
                  <span className={styles.format}>
                    {t.format} · {t.dates}
                  </span>
                  <span className={styles.itemTitle}>{t.title}</span>
                  <span className={`${styles.cardCta} arrow`}>Dates &amp; enrolment</span>
                </span>
                {NEW_TAB}
              </a>
            </li>
          ))}
        </Carousel>
      </div>

      {/* Wide screens: featured training as a full-height photo */}
      <a className={`fill ${styles.featured} only-wide`} href={featured.href} target="_blank" rel="noopener noreferrer">
        <Picture set={featured.image.set} alt={featured.image.alt} sizes="50vw" />
        <span className={styles.overlay}>
          <span className={styles.badge}>200hr YTT</span>
          <span className={styles.featuredTitle}>{featured.title}</span>
          <span className={styles.featuredMeta}>
            {featured.format} · {featured.dates}
          </span>
          <span className={styles.featuredMeta}>{featured.teachers}</span>
          <span className={`${styles.featuredCta} arrow`}>Dates &amp; enrolment</span>
        </span>
        {NEW_TAB}
      </a>
    </section>
  );
}
