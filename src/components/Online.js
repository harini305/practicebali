import { tpopro } from '@/data/programs';
import CourseList from './CourseList';
import Picture from './Picture';
import SectionHead from './SectionHead';
import styles from './Online.module.css';

export default function Online() {
  return (
    <section id="online" className={`panel section--brown ${styles.panel}`} aria-labelledby="online-title">
      <div className={styles.tpo}>
        <div className={`fill ${styles.tpoMedia}`}>
          <Picture
            set="online/tpo"
            alt="The Practice Online app on a phone, beside the words “the practice online”"
            sizes="(min-width: 900px) 30vw, 40vw"
          />
        </div>
        <div className={styles.tpoBody}>
          <h3>{tpopro.title}</h3>
          <p>{tpopro.text}</p>
          <a className="btn btn--light ext" href={tpopro.href} target="_blank" rel="noopener noreferrer">
            Join TPOpro<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
          <a className={styles.mail} href={`mailto:${tpopro.email}`}>
            {tpopro.email}
          </a>
        </div>
      </div>

      <div className={`panel-body ${styles.body}`}>
        <SectionHead id="online" title="Learn online" light>
          <p>Self-paced courses, available all year.</p>
        </SectionHead>
        <CourseList />
      </div>
    </section>
  );
}
