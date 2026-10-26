'use client';

import { useEffect, useState } from 'react';
import { workshops } from '@/data/programs';
import { site } from '@/data/site';
import Picture from './Picture';
import styles from './Workshops.module.css';

const baliToday = () => new Date(Date.now() + 8 * 3600e3).toISOString().slice(0, 10);

export default function Workshops() {
  // Server render uses the build date; the client re-checks on mount and
  // hides workshops whose last day has passed.
  const [today, setToday] = useState(baliToday);
  useEffect(() => setToday(baliToday()), []);
  const w = workshops.find((item) => item.endDate >= today);

  return (
    <section id="workshops" className={`panel ${styles.panel}`} aria-labelledby="workshops-title">
      <div className={`fill ${styles.media}`}>
        {w ? (
          <Picture set={w.image.set} alt={w.image.alt} sizes="(min-width: 900px) 42vw, 100vw" />
        ) : (
          <Picture set="classes/studio" alt="Two teachers from The Practice seated on the studio floor" sizes="42vw" />
        )}
      </div>

      <div className={`panel-body ${styles.body}`}>
        <h2 id="workshops-title" className={styles.kicker}>
          Workshops
        </h2>
        {w ? (
          <>
            <p className={styles.format}>{w.format}</p>
            <h3 className={styles.title}>{w.title}</h3>
            <dl className={styles.facts}>
              <div>
                <dt>Dates</dt>
                <dd>{w.when}</dd>
              </div>
              <div>
                <dt>Time</dt>
                <dd>{w.time}</dd>
              </div>
              <div>
                <dt>Price</dt>
                <dd>{w.price}</dd>
              </div>
            </dl>
            <p className={styles.text}>{w.text}</p>
            <div className="actions">
              <a className="btn ext" href={w.href} target="_blank" rel="noopener noreferrer">
                Details<span className="visually-hidden"> about the workshop (opens in a new tab)</span>
              </a>
              <a className="btn btn--outline" href={`mailto:${w.enquiry}?subject=${encodeURIComponent(w.title)}`}>
                Enquire by email
              </a>
            </div>
            <p className={styles.free}>Free presentations need no sign-up – register at the front desk 15 minutes before.</p>
          </>
        ) : (
          <p className={styles.text}>
            No upcoming workshops are listed right now. Ask{' '}
            <a href="mailto:reception@thepracticebali.com">reception@thepracticebali.com</a> or follow{' '}
            <a href={site.social[0].href} target="_blank" rel="noopener noreferrer">
              The Practice on Instagram
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
