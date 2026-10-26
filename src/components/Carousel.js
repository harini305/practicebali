'use client';

import { Children, useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.css';

/**
 * Swipeable row for small screens: native scroll-snap, plus previous/next
 * buttons and a position count so it also works with a mouse or keyboard.
 * Each child should be an <li>.
 */
export default function Carousel({ label, children, className = '' }) {
  const listRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = Children.count(children);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;
    const onScroll = () => {
      const item = list.firstElementChild;
      if (!item) return;
      const step = item.getBoundingClientRect().width + parseFloat(getComputedStyle(list).columnGap || 0);
      setIndex(Math.min(count - 1, Math.round(list.scrollLeft / step)));
    };
    list.addEventListener('scroll', onScroll, { passive: true });
    return () => list.removeEventListener('scroll', onScroll);
  }, [count]);

  const go = (dir) => {
    const list = listRef.current;
    const target = list?.children[Math.max(0, Math.min(count - 1, index + dir))];
    if (target) list.scrollTo({ left: target.offsetLeft - list.offsetLeft - parseFloat(getComputedStyle(list).paddingLeft), behavior: 'smooth' });
  };

  return (
    <div className={className} role="region" aria-roledescription="carousel" aria-label={label}>
      <ul ref={listRef} className="snap" tabIndex={0}>
        {children}
      </ul>
      <div className={styles.controls}>
        <button type="button" onClick={() => go(-1)} disabled={index === 0} aria-label="Previous">
          ←
        </button>
        <span className={styles.count} aria-live="polite">
          {index + 1} / {count}
        </span>
        <button type="button" onClick={() => go(1)} disabled={index >= count - 1} aria-label="Next">
          →
        </button>
      </div>
    </div>
  );
}
