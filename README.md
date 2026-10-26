# The Practice Bali – single-page redesign

Frontend-only Next.js (App Router, JavaScript) rebuild of https://www.thepracticebali.com/ as one page with anchor navigation. The Phase 1 audit lives in [docs/source-audit/](docs/source-audit/README.md) and is reference material only.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
npm run images   # regenerate public/images from assets-src/originals
```

## Where things live

| Path | Contents |
|---|---|
| `src/app/` | `layout.js` (fonts: Nunito + Alegreya, metadata), `page.js` (section order), `globals.css` (design tokens) |
| `src/components/` | One component + CSS Module per section |
| `src/data/site.js` | Address, phone/WhatsApp, emails, social links, navigation, Kajabi base URL |
| `src/data/classes.js` | Levels, class descriptions, rates, practical notes |
| `src/data/programs.js` | Teacher trainings, online courses, TPOpro, workshops, private sessions (Kajabi URLs) |
| `src/data/people.js` | Team, lineage, give back, books, journal links |
| `src/data/schedule-october-2026.json` | Timetable snapshot (copied verbatim from the audit) |
| `src/lib/schedule.js` | Turns the timetable JSON into weeks/days |
| `assets-src/originals/` | Untouched originals downloaded from the live site (not published) |
| `scripts/optimize-images.mjs` | Crops/resizes originals into WebP sets in `public/images/` |

## Updating content

- **Schedule:** replace `src/data/schedule-october-2026.json` with entries of the same shape (`date`, `time`, `title`) and update `SCHEDULE_MONTH` in `src/lib/schedule.js`. There is no live connection to the WordPress calendar.
- **Workshops:** edit `workshops` in `src/data/programs.js`. Each one hides itself after its `endDate`.
- **Yearly Kajabi links:** all program URLs are in `src/data/programs.js` and `src/data/people.js`.

## Not implemented (needs a business decision)

No forms, newsletter sign-up, cart or checkout are built. Enquiries use email, phone and WhatsApp links only. Next.js image optimisation is disabled (`images.unoptimized`), because images are optimised ahead of time.
