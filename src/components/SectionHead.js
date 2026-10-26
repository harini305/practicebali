import styles from './SectionHead.module.css';

/** Consistent section heading: serif H2, optional intro paragraph and side slot.
 * The anchor id lives on the <section>; the heading gets `${id}-title`. */
export default function SectionHead({ id, title, children, aside, light = false, introClassName = '' }) {
  return (
    <div className={`${styles.head} ${light ? styles.light : ''}`} data-reveal>
      <div className={styles.text}>
        <h2 id={`${id}-title`}>{title}</h2>
        {children ? <div className={`${styles.intro} ${introClassName}`}>{children}</div> : null}
      </div>
      {aside ? <div className={styles.aside}>{aside}</div> : null}
    </div>
  );
}
