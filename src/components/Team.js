import { giveBack, team, teamIntro } from '@/data/people';
import Picture from './Picture';
import styles from './Team.module.css';

export default function Team() {
  return (
    <section id="team" className={`panel ${styles.panel}`} aria-labelledby="team-title">
      {/* Group photo band with the heading on the empty studio wall */}
      <div className={`fill ${styles.band}`}>
        <Picture set="team/group" alt="The Practice teaching team standing together in the studio" sizes="100vw" />
        <div className={styles.intro}>
          <h2 id="team-title">Our team</h2>
          <p>{teamIntro}</p>
          <p className={styles.give}>
            {giveBack.text}{' '}
            <a className="text-link ext" href={giveBack.href} target="_blank" rel="noopener noreferrer">
              Give back<span className="visually-hidden"> – donate on The Practice Online (opens in a new tab)</span>
            </a>
          </p>
        </div>
      </div>

      <ul className={styles.people}>
        {team.map((p) => (
          <li key={p.name} className={styles.person}>
            <Picture set={p.image} alt={`Portrait of ${p.name}`} sizes="(min-width: 900px) 120px, 30vw" className={styles.portrait} />
            <div>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.role}>{p.role}</p>
              {p.link ? (
                <a className={styles.link} href={p.link.href} target="_blank" rel="noopener noreferrer">
                  {p.link.label}
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
