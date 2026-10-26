'use client';

import { useEffect, useMemo, useState } from 'react';
import { CATEGORIES, getScheduleWeeks, SCHEDULE_MONTH } from '@/lib/schedule';
import { goodToKnow, rates, ratesNote } from '@/data/classes';
import { site } from '@/data/site';
import Picture from './Picture';
import styles from './Schedule.module.css';

// Today's date in Bali (UTC+8), as YYYY-MM-DD.
function baliToday() {
  return new Date(Date.now() + 8 * 3600e3).toISOString().slice(0, 10);
}

function firstDayWithClasses(week) {
  return Math.max(0, week.days.findIndex((d) => d.classes.length > 0));
}

function timeRange(c) {
  return `${c.start}${c.startAp === c.end.slice(-2) ? '' : ` ${c.startAp}`} – ${c.end}`;
}

function extras(c) {
  return [c.free && 'Free class', c.maxPeople && `Max ${c.maxPeople}`, c.price].filter(Boolean);
}

/** Compact class card used in the desktop week grid. */
function Chip({ c, dim }) {
  const level = c.level ? c.level.replace('Level ', 'L') : null;
  return (
    <div className={`${styles.chip} ${styles[c.category]} ${dim ? styles.dim : ''}`} title={[c.name, timeRange(c), ...extras(c)].join(' · ')}>
      <p className={styles.chipName}>{c.name}</p>
      <p className={styles.chipMeta}>
        {[c.teacher, level].filter(Boolean).join(' · ')}
        <span className={styles.chipEnd}> · to {c.end.replace(' ', '')}</span>
        {extras(c).length ? <span className={styles.chipExtra}> · {extras(c).join(' · ')}</span> : null}
      </p>
    </div>
  );
}

export default function Schedule() {
  const weeks = useMemo(() => getScheduleWeeks(), []);
  const [weekIndex, setWeekIndex] = useState(1);
  const [dayIndex, setDayIndex] = useState(() => firstDayWithClasses(weeks[1]));
  const [filter, setFilter] = useState('all');
  const [ratesOpen, setRatesOpen] = useState(false);
  const [today, setToday] = useState(null);

  // After mount, jump to the current week/day if it falls inside the snapshot.
  useEffect(() => {
    const iso = baliToday();
    setToday(iso);
    const w = weeks.findIndex((wk) => wk.days.some((d) => d.iso === iso && d.inSnapshot));
    if (w >= 0) {
      setWeekIndex(w);
      setDayIndex(weeks[w].days.findIndex((d) => d.iso === iso));
    }
  }, [weeks]);

  const week = weeks[weekIndex];
  const day = week.days[dayIndex];
  const present = new Set(week.days.flatMap((d) => d.classes.map((c) => c.category)));
  const filters = CATEGORIES.filter((c) => present.has(c.id));
  const matches = (c) => filter === 'all' || c.category === filter;
  const dayClasses = day.classes.filter(matches);

  return (
    <section id="schedule" className={`panel section--linen ${styles.section}`} aria-labelledby="schedule-title">
      <div className={`panel-body ${styles.body}`}>
        <div className={styles.head}>
          <div>
            <h2 id="schedule-title">Class schedule</h2>
            <p className={styles.intro}>{SCHEDULE_MONTH} timetable – classes can change, please check with reception.</p>
          </div>
          <label className={styles.weekSelect}>
            <span className="visually-hidden">Choose a week</span>
            <select
              value={weekIndex}
              onChange={(e) => {
                const i = Number(e.target.value);
                setWeekIndex(i);
                setDayIndex(firstDayWithClasses(weeks[i]));
              }}
            >
              {weeks.map((wk, i) => (
                <option key={wk.id} value={i}>
                  Week of {wk.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.filters} role="group" aria-label="Filter by class type">
          <button type="button" aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>
            All
          </button>
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className={styles[f.id]}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              <span className={styles.swatch} aria-hidden="true" />
              {f.short ? (
                <>
                  <span className={styles.long}>{f.label}</span>
                  <span className={styles.short} aria-hidden="true">
                    {f.short}
                  </span>
                </>
              ) : (
                f.label
              )}
            </button>
          ))}
        </div>

        <div className={styles.main}>
          <div className={styles.board}>
            {/* Desktop: the whole week as a timetable grid that fills the panel */}
            <div className={`${styles.week} ${week.slots.length > 6 ? styles.dense : ''}`} role="table" aria-label={`Timetable, week of ${week.label}`}>
              <div className={`${styles.weekRow} ${styles.headRow}`} role="row">
                <span className={styles.corner} role="columnheader">
                  <span className="visually-hidden">Time</span>
                </span>
                {week.days.map((d) => (
                  <span
                    key={d.iso}
                    role="columnheader"
                    className={`${styles.dayHead} ${d.iso === today ? styles.isToday : ''} ${d.inSnapshot ? '' : styles.out}`}
                  >
                    <strong>{d.short}</strong> {d.label}
                    {d.iso === today ? <em>Today</em> : null}
                  </span>
                ))}
              </div>
              {week.slots.map((slot) => (
                <div key={slot.key} className={styles.weekRow} role="row">
                  <span className={styles.slot} role="rowheader">
                    {slot.label}
                  </span>
                  {week.days.map((d) => (
                    <div key={d.iso} role="cell" className={`${styles.cell} ${d.iso === today ? styles.todayCol : ''}`}>
                      {d.classes
                        .filter((c) => c.sortKey === slot.key)
                        .map((c, i) => (
                          <Chip key={i} c={c} dim={!matches(c)} />
                        ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Phones & tablets: one day at a time as a timeline */}
            <div className={styles.dayView}>
              <div className={styles.days} role="group" aria-label="Choose a day">
                {week.days.map((d, i) => (
                  <button
                    key={d.iso}
                    type="button"
                    aria-pressed={i === dayIndex}
                    className={d.iso === today ? styles.isToday : ''}
                    disabled={!d.inSnapshot}
                    onClick={() => setDayIndex(i)}
                  >
                    <span>{d.short}</span>
                    <strong>{d.label.split(' ')[0]}</strong>
                    {d.iso === today ? <span className="visually-hidden"> (today)</span> : null}
                  </button>
                ))}
              </div>
              <h3 className={styles.dayTitle}>
                {day.dayName} {day.label}
                {day.iso === today ? <em>Today</em> : null}
              </h3>
              {dayClasses.length === 0 ? (
                <p className={styles.empty}>No matching classes on this day.</p>
              ) : (
                <ol className={styles.timeline}>
                  {dayClasses.map((c, i) => (
                    <li key={i} className={styles.tlItem}>
                      <span className={styles.tlTime}>
                        {c.start} {c.startAp}
                        <span>to {c.end}</span>
                      </span>
                      <div className={`${styles.tlCard} ${styles[c.category]}`}>
                        <Picture set={`classes/${c.icon}`} alt="" sizes="44px" className={styles.tlIcon} />
                        <div>
                          <p className={styles.chipName}>{c.name}</p>
                          <p className={styles.chipMeta}>{[c.teacher, c.level].filter(Boolean).join(' · ')}</p>
                          {extras(c).length || c.isWorkshop ? (
                            <p className={styles.tags}>
                              {c.isWorkshop ? <span>Workshop</span> : null}
                              {extras(c).map((t) => (
                                <span key={t}>{t}</span>
                              ))}
                            </p>
                          ) : null}
                          <span className="visually-hidden">{timeRange(c)}</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </div>

            <p className={styles.note}>
              L1 / L2 = Level 1 / Level 2. Max 12 classes fill up – arrive early or{' '}
              <a href={site.phone.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
              .
            </p>
            <button
              type="button"
              className={styles.ratesToggle}
              aria-expanded={ratesOpen}
              aria-controls="rates"
              onClick={() => setRatesOpen((v) => !v)}
            >
              {ratesOpen ? 'Hide rates' : 'Rates & good to know'}
            </button>
          </div>

          {/* Rates: a column beside the timetable on desktop, a toggle on smaller screens */}
          <aside id="rates" className={`${styles.rates} ${ratesOpen ? styles.open : ''}`} aria-labelledby="rates-title">
            <h3 id="rates-title">Rates</h3>
            <ul className={styles.rateList}>
              {rates.map((r) => (
                <li key={r.item}>
                  <span>{r.item}</span>
                  <strong>{r.price}</strong>
                </li>
              ))}
            </ul>
            <p className={styles.small}>{ratesNote}</p>
            <ul className={styles.know} aria-label="Good to know">
              {goodToKnow.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
