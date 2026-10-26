'use client';

import { useState } from 'react';
import { classTypes, levels } from '@/data/classes';
import Picture from './Picture';
import SectionHead from './SectionHead';
import styles from './Classes.module.css';

export default function Classes() {
  const [active, setActive] = useState(0);
  const current = classTypes[active];

  return (
    <section id="classes" className={`panel ${styles.panel}`} aria-labelledby="classes-title">
      <div className={styles.side}>
        <div className={`fill ${styles.photo}`}>
          <Picture
            set="classes/studio"
            alt="Two teachers from The Practice seated on the studio floor"
            sizes="(min-width: 900px) 42vw, 100vw"
          />
        </div>
        <ul className={styles.levels} aria-label="Class levels">
          {levels.map((l) => (
            <li key={l.name}>
              <strong>{l.name}</strong>
              <span>{l.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={`panel-body ${styles.body}`}>
        <SectionHead id="classes" title="Classes at the studio">
          <p>Every class includes Asana, Pranayama &amp; Meditation. Choose a class to learn more.</p>
        </SectionHead>

        <div className={styles.icons} role="group" aria-label="Class types">
          {classTypes.map((c, i) => (
            <button
              key={c.icon}
              type="button"
              className={styles.iconBtn}
              aria-pressed={i === active}
              aria-controls="class-detail"
              onClick={() => setActive(i)}
            >
              <Picture set={`classes/${c.icon}`} alt="" sizes="96px" className={styles.icon} />
              <span>{c.short}</span>
            </button>
          ))}
        </div>

        <div id="class-detail" className={styles.detail} aria-live="polite">
          <h3>{current.name}</h3>
          <p>{current.text}</p>
          <a className="text-link arrow" href="#schedule">
            Find it on the schedule
          </a>
        </div>
      </div>
    </section>
  );
}
