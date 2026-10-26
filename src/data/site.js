// Business details verified in docs/source-audit/03-content-inventory.md §1.
// Kajabi program URLs change yearly – keep them all in this file and the
// program data files so they can be updated in one place.

export const KAJABI = 'https://thepracticeonline.mykajabi.com';

export const site = {
  name: 'The Practice',
  tagline: 'The Practice Yoga Institute',
  url: 'https://www.thepracticebali.com',
  description:
    'The Practice is a leading institution in lineage-based Traditional Hatha Yoga education in Canggu, Bali: daily classes, teacher trainings in Bali and online, private sessions and online courses.',
  address: {
    lines: ['Jalan Batu Bolong 94A', 'Canggu, Bali, Indonesia'],
    mapUrl:
      'https://www.google.com/maps/place/The+Practice+Bali/@-8.6556253,115.131796,15z/data=!4m5!3m4!1s0x0:0x101ff0ef9d332571!8m2!3d-8.6556253!4d115.131796',
    directions:
      'About 45 minutes to 1 hour west of Denpasar Airport, depending on traffic. The Practice is on Batu Bolong, about 300m before the beach on the left-hand side, opposite a Mexican restaurant called Lacalita.',
  },
  phone: {
    display: '+62 8123 670 2160',
    tel: '+6281236702160',
    whatsapp: 'https://wa.me/6281236702160',
  },
  emails: [
    { purpose: 'Daily classes & schedule', address: 'reception@thepracticebali.com' },
    { purpose: 'Yoga teacher trainings', address: 'training@thepracticebali.com' },
    { purpose: 'The Practice Online membership', address: 'membership@thepracticebali.com' },
    { purpose: 'Class passes & gift vouchers', address: 'accounts@thepracticebali.com' },
    { purpose: 'General enquiries', address: 'admin@thepracticebali.com' },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/thepractice.official/' },
    { label: 'YouTube', href: 'https://www.youtube.com/c/ThePracticeYoga' },
    { label: 'MeWe', href: 'https://mewe.com/p/thepractice1' },
  ],
  legal: [
    { label: 'Privacy policy', href: 'https://www.thepracticebali.com/privacy-policy/' },
    { label: 'Terms & conditions', href: 'https://www.thepracticebali.com/terms-conditions/' },
  ],
  tpopro: { label: 'Join TPOpro', href: `${KAJABI}/` },
};

// In-page sections. `primary` items appear in the desktop header.
export const nav = [
  { id: 'schedule', label: 'Schedule', primary: true },
  { id: 'classes', label: 'Classes', primary: true },
  { id: 'trainings', label: 'Trainings', primary: true },
  { id: 'online', label: 'Online', primary: true },
  { id: 'workshops', label: 'Workshops', primary: true },
  { id: 'privates', label: 'Privates', primary: true },
  { id: 'team', label: 'Team', primary: true },
  { id: 'books', label: 'Books', primary: false },
  { id: 'contact', label: 'Contact', primary: true },
];
