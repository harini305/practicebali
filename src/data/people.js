// Team, lineage, books and journal. Sources: content-extracts/our-team.md,
// books-by-octavio.md, give-back-to-the-practice.md and the blog posts.
// Senior Teachers (2020 content, all portraits 404) and profiles for Ela and
// Ellen (on the schedule, no published bio) are pending the business.
import { KAJABI } from './site';

export const teamIntro = 'A world-class team committed to the Sri Vidya Traditional lineage.';

export const team = [
  { name: 'Octavio Salvado', role: 'Co-founder & principal teacher', image: 'team/octavio', link: { label: 'MoonSunFire app', href: 'https://moonsunfire.com/' } },
  { name: 'Emma Salvado', role: 'Co-owner & YTT manager', image: 'team/emma' },
  { name: 'Jason Winters', role: 'Senior yoga teacher', image: 'team/jason' },
  { name: 'Lala Sipahutar', role: 'Yoga teacher', image: 'team/lala' },
  { name: 'Jodie Curtis', role: 'Yoga teacher', image: 'team/jodie' },
  { name: 'Ong Wen Ming', role: 'Kung Fu master', image: 'team/ming', link: { label: 'Dragon’s Gate Kung Fu', href: 'https://www.dragonsgatekungfu.com/' } },
];

export const giveBack = {
  text: 'Donations help keep traditional Yoga alive.',
  href: `${KAJABI}/give-back`,
};

export const books = {
  email: 'admin@thepracticebali.com',
  items: [
    { title: 'Moon Sun Fire: Traditional Hatha Yoga', price: 'Rp 650,000', usd: 'US$ 40' },
    { title: 'Good Lizard – The Yoga Sutra', price: 'Rp 550,000', usd: 'US$ 35' },
    { title: 'Stoke the Sacred Fire – Tantra', price: 'Rp 550,000', usd: 'US$ 35' },
    { title: 'Your Dharma is Greatness – Bhagavad Gita', price: 'Rp 550,000', usd: 'US$ 35' },
    { title: 'Remember Who You Are – for children', price: 'Rp 450,000', usd: 'US$ 25' },
  ],
};

// Text-only links to the original posts (no images, no new routes).
export const journal = [
  {
    title: 'Why is it better to hold asana poses instead of constantly moving through them?',
    author: 'Jason Winters',
    date: 'Sep 2023',
    href: 'https://www.thepracticebali.com/why-is-it-better-to-hold-asana-poses-instead-of-constantly-moving-through-them-in-a-yoga-class/',
  },
  {
    title: 'Vedic mantra and Kirtan: what’s the difference?',
    author: 'Ellen Arthur',
    date: 'Apr 2021',
    href: 'https://www.thepracticebali.com/vedic-mantra-and-kirtan-whats-the-difference/',
  },
  {
    title: 'Journaling',
    author: 'Emma Salvado',
    date: 'Nov 2020',
    href: 'https://www.thepracticebali.com/journaling/',
  },
];
