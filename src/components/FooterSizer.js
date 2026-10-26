'use client';

import { useEffect } from 'react';

/**
 * Publishes the footer's height as --footer-h so the last section (Contact)
 * can shrink by that amount: navigating to Contact then shows the whole
 * contact panel and the footer together on one screen.
 */
export default function FooterSizer() {
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return undefined;
    const set = () => document.documentElement.style.setProperty('--footer-h', `${footer.offsetHeight}px`);
    set();
    const ro = new ResizeObserver(set);
    ro.observe(footer);
    return () => ro.disconnect();
  }, []);
  return null;
}
