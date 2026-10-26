'use client';

import { useEffect, useRef, useState } from 'react';
import { nav, site } from '@/data/site';
import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on Escape, when resizing to desktop, or clicking outside.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onClick = (e) => {
      if (!panelRef.current?.contains(e.target) && !toggleRef.current?.contains(e.target)) setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 1180px)');
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onClick);
    mq.addEventListener('change', onMq);
    panelRef.current?.querySelector('a')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onClick);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.raised : ''}`}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <img
            src="/images/brand/logo-130.webp"
            srcSet="/images/brand/logo-130.webp 1x, /images/brand/logo-260.webp 2x"
            width={130}
            height={160}
            alt=""
            className={styles.logo}
          />
          <span className={styles.wordmark}>The Practice</span>
        </a>

        <nav aria-label="Main" className={styles.desktopNav}>
          <ul>
            {nav
              .filter((item) => item.primary)
              .map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
          </ul>
        </nav>

        <div className={styles.end}>
          <a className={`btn ${styles.cta}`} href={site.tpopro.href} target="_blank" rel="noopener noreferrer">
            {site.tpopro.label}
            <span className="visually-hidden"> (opens The Practice Online in a new tab)</span>
          </a>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.toggleIcon} aria-hidden="true" />
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={panelRef} className={styles.panel} hidden={!open}>
        <nav aria-label="Main" className="container">
          <ul className={styles.panelList}>
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className={`btn ${styles.panelCta}`} href={site.tpopro.href} target="_blank" rel="noopener noreferrer">
            {site.tpopro.label}
            <span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
