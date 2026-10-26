'use client';

import { useState } from 'react';
import { onlineCourses } from '@/data/programs';
import styles from './Online.module.css';

const VISIBLE_ON_PHONES = 5;

/** Course list; on phones only the first few show until "Show all" is pressed. */
export default function CourseList() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.listWrap}>
      <ul id="course-list" className={`${styles.list} ${expanded ? styles.expanded : ''}`}>
        {onlineCourses.map((c, i) => {
          const inner = (
            <>
              <span className={styles.title}>
                {c.title}
                {c.isNew ? <span className={styles.new}>New</span> : null}
              </span>
              <span className={styles.price}>
                {c.price} <span>· {c.usd}</span>
              </span>
            </>
          );
          return (
            <li key={c.title} className={i >= VISIBLE_ON_PHONES ? styles.extra : undefined}>
              {c.href ? (
                <a className={`${styles.row} arrow`} href={c.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              ) : (
                <a className={`${styles.row} arrow`} href="#contact">
                  {inner}
                  <span className="visually-hidden"> – enquire</span>
                </a>
              )}
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className={styles.more}
        aria-expanded={expanded}
        aria-controls="course-list"
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? 'Show fewer courses' : `Show all ${onlineCourses.length} courses`}
      </button>
    </div>
  );
}
