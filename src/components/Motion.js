'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Restrained motion: a short hero entrance and one-time reveals for
 * elements marked [data-reveal]. Nothing runs when the visitor prefers
 * reduced motion, and content is fully visible without JavaScript.
 * Only opacity/transform are animated, so layout never shifts.
 */
export default function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const heroItems = gsap.utils.toArray('[data-hero] > *');
      gsap.from(heroItems, { autoAlpha: 0, y: 18, duration: 0.8, ease: 'power2.out', stagger: 0.08, delay: 0.1 });
      gsap.from('[data-hero-media] img', { scale: 1.04, duration: 1.4, ease: 'power2.out' });

      const revealItems = gsap.utils.toArray('[data-reveal]').filter((el) => el.getBoundingClientRect().top > window.innerHeight);
      gsap.set(revealItems, { autoAlpha: 0, y: 24 });
      ScrollTrigger.batch(revealItems, {
        start: 'top 88%',
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.08, overwrite: true }),
      });
    });

    return () => mm.revert();
  }, []);

  return null;
}
