// Teacher trainings, online courses, TPOpro, workshops and private sessions.
// Sources: content-extracts/yoga-teacher-training.md, online-trainings.md,
// practice-with-us__workshops.md, practice-with-us__privates.md, practice-with-us__faq.md.
// Prices and enrolment for trainings live on Kajabi and are not repeated here.
import { KAJABI } from './site';

export const trainings = {
  featured: {
    title: 'Bali 200 Hour Traditional Hatha Yoga Teacher Training',
    format: 'In Bali',
    dates: '1 – 20 February 2027',
    teachers: 'With Octavio & Emma Salvado and The Practice team',
    text: 'Traditional Hatha Yoga is not an exercise routine. It is the original science of self-excellence, soul remembrance and fearless living.',
    href: `${KAJABI}/200hr-traditional-hatha-teacher-training-2027`,
    image: { set: 'trainings/200hr', alt: 'Octavio and Emma Salvado standing together against a white wall' },
  },
  more: [
    {
      title: 'Bali 100 Hour Meditation Teacher Training',
      format: 'In Bali',
      dates: '3 – 18 January 2027',
      href: `${KAJABI}/100hr-meditation-teacher-training`,
      image: { set: 'trainings/meditation-100hr', alt: 'Octavio Salvado seated cross-legged in meditation' },
    },
    {
      title: 'Online 100 Hour Meditation Teacher Training',
      format: 'Online · 5 weeks',
      dates: '6 March – 10 April 2027',
      href: `${KAJABI}/100hr-online-meditation-teacher-training-`,
      image: { set: 'trainings/online-meditation-100hr', alt: 'Octavio Salvado seated in meditation in a light grey top' },
    },
    {
      title: 'Sadhana Development Program & Online 300hr Advanced Teacher Training',
      format: 'Online · 12 months',
      // End date differs between the page text and the poster (audit follow-up), so only the start is shown.
      dates: 'Starts 24 July 2027',
      href: `${KAJABI}/Sadhana-Development-Program-and-Online-Advanced-300Hr`,
      image: { set: 'trainings/sadhana-300hr', alt: 'Emma and Octavio Salvado seated beneath a Nataraja statue' },
    },
    {
      title: 'Bali 300 Hour Advanced Tantric Hatha Yoga Teacher Training',
      format: 'In Bali',
      dates: '8 November – 10 December 2027',
      href: `${KAJABI}/bali-300hr-advanced-tantric-hatha-yoga-meditation-2027`,
      image: { set: 'trainings/bali-300hr', alt: 'A carved deity statue garlanded with orange marigolds' },
    },
  ],
};

// `href: null` – the original card has no course link (audit 08, B9).
export const onlineCourses = [
  { title: 'Traditional Hatha Yoga & Ayurveda 50hr Immersion', price: 'Rp 9,000,000', usd: 'USD 499', href: null, isNew: true },
  { title: 'Basic Breathwork Course', price: 'Rp 615,000', usd: 'USD 39', href: `${KAJABI}/basic-breathwork` },
  { title: 'Teacher’s Toolbox', price: 'Rp 1,500,000', usd: 'USD 95', href: `${KAJABI}/Teachers-Toolbox` },
  { title: '80 Day Breathwork Program', price: 'Rp 1,800,000', usd: 'USD 108', href: `${KAJABI}/80day-complete-immune-system-repair` },
  { title: 'How to Meditate Correctly', price: 'Rp 3,950,000', usd: 'USD 239', href: `${KAJABI}/how-to-meditate-correctly` },
  { title: 'Yoga Sutra Master Training', price: 'Rp 7,100,000', usd: 'USD 429', href: `${KAJABI}/yoga-sutra-master-training` },
  { title: 'Yantra & You', price: 'Rp 4,900,000', usd: 'USD 299', href: `${KAJABI}/yantra-and-you` },
  { title: 'Online 50hr Training', price: 'Rp 7,450,000', usd: 'USD 449', href: `${KAJABI}/50hr-online-training` },
  { title: '200hr TT Home Study Program', price: 'Rp 21,550,000', usd: 'USD 1,299', href: `${KAJABI}/200hr-hatha-yoga-home-study-program` },
  { title: 'Upskill Your Yoga Teaching', price: 'Rp 4,950,000', usd: 'USD 299', href: `${KAJABI}/upskill` },
  { title: 'Ignite the Sacred Fire', price: 'Rp 5,800,000', usd: 'USD 349', href: `${KAJABI}/ignite-the-sacred-fire-evergreen` },
  { title: 'Your Dharma is Greatness', price: 'Rp 7,100,000', usd: 'USD 429', href: `${KAJABI}/your-dharma-is-greatness-evergreen` },
];

// TPOpro: the header CTA on every original page links to the live Kajabi
// site. The orphan /tpo-pro-2/ "Coming Soon!" page is not used (audit 08, O4).
export const tpopro = {
  title: 'TPOpro',
  text: 'Our online platform for staying connected to our teachers and teachings, with new classes and meditations uploaded each month.',
  href: `${KAJABI}/`,
  email: 'membership@thepracticebali.com',
};

// Upcoming workshops only. Entries are hidden automatically after `endDate`.
// Past events (29 Sep presentation, 4 Oct Yin workshop) are not listed.
export const workshops = [
  {
    title: 'Introduction to Kriya Meditation',
    format: '2-day workshop with Octavio Salvado',
    when: 'Sat 31 Oct & Sun 1 Nov 2026',
    time: '8:30am – 7pm',
    endDate: '2026-11-01',
    price: 'Rp 3,500,000',
    text: 'Do you find Meditation difficult? Kriya Meditation catches the mind where it’s at – in activity – and guides it towards stillness. Students receive video recordings of all practices.',
    href: `${KAJABI}/kriya-meditation`,
    enquiry: 'reception@thepracticebali.com',
    image: { set: 'workshops/kriya', alt: 'Octavio Salvado with arms folded in front of a Nataraja statue' },
  },
];

export const privates = [
  {
    id: 'hatha',
    title: 'Private Hatha Yoga',
    text: 'At home or at The Practice, for individuals or groups of all levels.',
    from: 'Rp 1,350,000',
    prices: [
      ['1 – 2 people', 'Rp 1,350,000'],
      ['3 – 6 people', 'Rp 1,700,000'],
      ['7 – 10 people', 'Rp 2,000,000'],
      ['11 – 15 people', 'Rp 2,400,000'],
      ['16 – 30 people', 'Rp 3,500,000'],
      ['31 – 50 people', 'Rp 4,200,000'],
    ],
    image: { set: 'privates/lala', alt: 'Lala Sipahutar in a kneeling lunge with arms raised' },
  },
  {
    id: 'personal',
    title: 'Personalised practice',
    text: 'Ten 1-on-1 sessions in person or online, guided by Jason, Lala or Jodie.',
    from: 'Rp 10,000,000',
    prices: [['10 sessions', 'Rp 10,000,000']],
    image: { set: 'privates/jason', alt: 'Jason Winters in a seated forward fold' },
  },
  {
    id: 'ming',
    title: '1-on-1 with Master Ming',
    text: 'Qi Gong, Tai Chi or Kung Fu with Master Ong Wen Ming. Prices per person.',
    from: 'Rp 650,000',
    prices: [
      ['1 private', 'Rp 650,000'],
      ['3 privates', 'Rp 1,700,000'],
      ['5 privates', 'Rp 2,500,000'],
      ['10 privates', 'Rp 4,500,000'],
    ],
    image: { set: 'privates/ming', alt: 'Master Ong Wen Ming in a low Kung Fu stance' },
  },
  {
    id: 'yantra',
    title: 'Yantra Numerology with Jason',
    text: 'Vedic Numerology (Ank Jyotisha) sessions with personalised charts, in person or via Zoom.',
    from: 'Rp 1,888,888',
    prices: [
      ['Single · 60 min', 'Rp 1,888,888'],
      ['Couple · 75–90 min', 'Rp 2,999,999'],
    ],
    image: { set: 'privates/yantra', alt: 'Yantra artwork: a mirrored figure in meditation inside a sacred-geometry mandala' },
  },
];

export const privatesTerms = 'https://www.thepracticebali.com/practice-with-us/privates/terms-conditions/';
