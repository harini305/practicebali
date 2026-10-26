// Turns the captured MEC calendar (src/data/schedule-october-2026.json, copied
// verbatim from docs/source-audit/data) into week/day groups for display.
// To update the timetable, replace the JSON with the same shape:
//   [{ date: 'YYYY-MM-DD', time: '8:00 am - 9:15 am', title: '8am Qi Gong (75min) – Ming' }]
import raw from '@/data/schedule-october-2026.json';

export const SCHEDULE_MONTH = 'October 2026';

// The capture replaced en dashes with U+FFFD, so both are treated as separators.
const DASH = /\s*[–—�]\s*/;
const DAY_NAMES = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Same class published under two spellings (audit 08, C2).
const NAME_ALIASES = { 'Hatha Moon': 'Hatha Yoga Moon' };
// Class titles that carry health claims flagged for review (audit 08, S4)
// are shown by their short name until the business approves the wording.
const SHORT_NAMES = [[/^528Hz Meditation.*/, '528Hz Meditation']];

function parseUTCDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function toISO(date) {
  return date.toISOString().slice(0, 10);
}

function formatTime(t) {
  // '8:00 am' -> '8:00', keeps am/pm for the end time only
  const m = t.trim().match(/^(\d{1,2}):(\d{2})\s*(am|pm)$/i);
  return m ? { hm: `${m[1]}:${m[2]}`, ap: m[3].toLowerCase() } : null;
}

function parseEntry(entry) {
  let title = entry.title.trim();
  let teacher = null;

  const parts = title.split(DASH);
  // Workshops are titled "10am – 3pm: Workshop: Name – Teacher"
  const isWorkshop = /workshop/i.test(title);
  if (parts.length > 1) {
    teacher = parts.pop().trim();
    title = parts.join(' – ');
  }

  // Strip the leading time ("830am", "10am – 3pm:") and "Workshop:" prefixes
  title = title
    .replace(/^\d{1,4}\s*(am|pm)(\s*–\s*\d{1,4}\s*(am|pm))?:?\s*/i, '')
    .replace(/^[\d-]*day workshop:\s*|^workshop:\s*/i, '');

  // Pull facts out of the bracketed notes, e.g. "(Level 1, 90min)", "(Max 12 People)", "(200K)"
  const notes = [...title.matchAll(/\(([^)]*)\)/g)].map((m) => m[1].trim());
  let name = title.replace(/\s*\([^)]*\)/g, '').trim();
  if (teacher) {
    const max = teacher.match(/\(([^)]*)\)/);
    if (max) notes.push(max[1].trim());
    teacher = teacher.replace(/\s*\([^)]*\)/g, '').trim();
  }

  let free = false;
  if (/^free class\s+/i.test(name)) {
    free = true;
    name = name.replace(/^free class\s+/i, '');
  }
  name = NAME_ALIASES[name] || name;
  for (const [pattern, short] of SHORT_NAMES) if (pattern.test(name)) name = short;
  name = name.replace(/\bTo\b/g, 'to');

  let level = null;
  let maxPeople = null;
  let price = null;
  for (const note of notes) {
    const lv = note.match(/level\s*(\d)/i);
    if (lv) level = `Level ${lv[1]}`;
    const mx = note.match(/max\s*(\d+)/i);
    if (mx) maxPeople = Number(mx[1]);
    const pr = note.match(/^(\d{3})k$/i);
    if (pr) price = `Rp ${pr[1]}k`;
  }
  // Durations in titles sometimes disagree with the calendar times (audit 08, C5),
  // so only the calendar start–end time is displayed.
  let [start, end] = entry.time.split(' - ').map(formatTime);
  // The 2-day Kriya workshop end time was captured as "12:00 am"; the title says 7pm.
  const titleRange = entry.title.match(/(\d{1,2})(\d{2})?(am|pm)\s*[–�-]\s*(\d{1,2})(\d{2})?(am|pm)/i);
  if (end && end.hm === '12:00' && end.ap === 'am' && titleRange) {
    end = { hm: `${titleRange[4]}:${titleRange[5] || '00'}`, ap: titleRange[6].toLowerCase() };
  }

  return {
    date: entry.date,
    start: start ? start.hm : '',
    startAp: start ? start.ap : '',
    end: end ? `${end.hm} ${end.ap}` : '',
    sortKey: start ? (Number(start.hm.split(':')[0]) % 12 + (start.ap === 'pm' ? 12 : 0)) * 60 + Number(start.hm.split(':')[1]) : 0,
    name,
    teacher,
    level,
    maxPeople,
    price,
    free,
    isWorkshop,
    ...classify(name, isWorkshop),
  };
}

// Class family (for colour and filtering) and the original class icon to show.
export const CATEGORIES = [
  { id: 'hatha', label: 'Hatha' },
  { id: 'yin', label: 'Yin' },
  { id: 'meditation', label: 'Meditation & Bhakti', short: 'Meditation' },
  { id: 'qigong', label: 'Qi Gong & Kung Fu', short: 'Qi Gong' },
  { id: 'workshop', label: 'Workshops' },
];

function classify(name, isWorkshop) {
  const n = name.toLowerCase();
  if (isWorkshop) return { category: 'workshop', icon: n.includes('yin') ? 'yin' : 'raja' };
  if (n.includes('qi gong')) return { category: 'qigong', icon: 'qi-gong' };
  if (n.includes('jianfa')) return { category: 'qigong', icon: 'jianfa' };
  if (n.includes('yin')) return { category: 'yin', icon: 'yin' };
  if (n.includes('bhakti')) return { category: 'meditation', icon: 'bhakti' };
  if (n.includes('raja')) return { category: 'meditation', icon: 'raja' };
  if (n.includes('meditation')) return { category: 'meditation', icon: 'meditation' };
  if (n.includes('beginners')) return { category: 'hatha', icon: 'beginners' };
  if (n.includes('sun')) return { category: 'hatha', icon: 'sun' };
  if (n.includes('fire') || n.includes('master')) return { category: 'hatha', icon: 'fire' };
  return { category: 'hatha', icon: 'moon' };
}

function slotLabel(e) {
  return `${e.start} ${e.startAp}`;
}

/** Monday-start weeks covering the captured month, each with 7 days. */
export function getScheduleWeeks() {
  const entries = raw.map(parseEntry);
  const byDate = new Map();
  for (const e of entries) {
    if (!byDate.has(e.date)) byDate.set(e.date, []);
    byDate.get(e.date).push(e);
  }
  for (const list of byDate.values()) list.sort((a, b) => a.sortKey - b.sortKey);

  const dates = [...byDate.keys()].sort();
  const first = parseUTCDate(dates[0]);
  const last = parseUTCDate(dates[dates.length - 1]);
  const monday = new Date(first);
  monday.setUTCDate(first.getUTCDate() - ((first.getUTCDay() + 6) % 7));

  const weeks = [];
  for (let start = monday; start <= last; start = new Date(start.getTime() + 7 * 864e5)) {
    const days = DAY_NAMES.map((dayName, i) => {
      const d = new Date(start.getTime() + i * 864e5);
      const iso = toISO(d);
      return {
        iso,
        dayName,
        short: dayName.slice(0, 3),
        label: `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`,
        inSnapshot: d >= first && d <= last,
        classes: byDate.get(iso) || [],
      };
    });
    const inRange = days.filter((d) => d.inSnapshot);
    const [a, b] = [inRange[0].label.split(' '), inRange[inRange.length - 1].label.split(' ')];
    // Start times used this week, for the rows of the week grid
    const slotMap = new Map();
    for (const d of days) for (const c of d.classes) slotMap.set(c.sortKey, slotLabel(c));
    const slots = [...slotMap.entries()].sort((x, y) => x[0] - y[0]).map(([key, label]) => ({ key, label }));
    weeks.push({
      id: days[0].iso,
      // "1–4 Oct", or "28 Sep – 4 Oct" when a week spans two months
      label: a[1] === b[1] ? `${a[0]}–${b[0]} ${b[1]}` : `${a.join(' ')} – ${b.join(' ')}`,
      days,
      slots,
    });
  }
  return weeks;
}
