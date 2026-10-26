# 09 — Phase 2 Recommendations & Mandatory Requirements

This document hands the audit over to the implementation phase. **Nothing here has been implemented.**
Phase 2 starts only after the project owner reviews this audit and gives explicit approval.

## 1. Target stack

- **Next.js (App Router)**, **JavaScript** (not TypeScript), React
- **GSAP + ScrollTrigger** for motion, used only where it serves a clear purpose
- Responsive frontend. The current workspace is empty, so there's no existing config to merge with yet. When a config exists, settings are **merged**, never replaced.

## 2. Mandatory design rules (from the brief, recorded verbatim in intent)

### 2.1 Typography
- [ ] **Exactly two font families across the entire website.** One for headings. One for body text, navigation, buttons, forms, cards, footer and all other UI.
- [ ] Both readable, professional, not fancy or decorative.
- [ ] No third family for decorative headings, special sections, the footer or individual components. This includes inherited fallbacks: the original leaks Inter and a Times-style serif into buttons, inputs and the calendar. Phase 2 must make every element inherit one of the two families.
- [ ] Hierarchy through weight, size, line height and letter spacing only.
- [ ] A consistent, controlled, **responsive (fluid) type scale**. Equivalent components get equivalent sizes on every route.
- [ ] Final fonts are **not chosen in this audit**. Candidates and constraints are in [05 §1.3](05-brand-reference.md#13-two-font-rule-for-phase-2-requirement-no-fonts-selected-yet). Nunito is the existing brand web font.

### 2.2 Visual design
- [ ] Professional, human-designed look. Intentional image/text alignment.
- [ ] Consistent content widths, margins and spacing across routes.
- [ ] No unnecessary decorative numbering, eyebrow text, random symbols, floating badges or ornaments.
- [ ] Avoid repetitive AI-looking layouts and generic template patterns.
- [ ] Effects only with a clear purpose. Respect `prefers-reduced-motion`.
- [ ] Preserve recognisable brand identity: sand `#bdb39b`, tan `#ae8656`, brown `#564c44`, the sacred-heart logo, the warm studio photography, square corners. Fix contrast where the original fails AA (see [05 §2.4](05-brand-reference.md#24-contrast-summary-computed-wcag-2x)).

### 2.3 Content
- [ ] Concise, focused pages. No repeated paragraphs, unnecessary sections or excessive length.
- [ ] Preserve meaningful facts (prices, dates, contacts, policies) exactly as in [03](03-content-inventory.md), unless the client corrects them.
- [ ] **Never invent** claims, testimonials, reviews, FAQs, prices or blog posts. The original has **no testimonials**, so none will be added.
- [ ] Conflicts in [08 §3](08-issues-gaps-questions.md#3-factual-conflicts-do-not-resolve-without-the-client) need client answers. Until then, use the more specific source page and flag it.

### 2.4 Footer
- [ ] Compact and content-driven. Verified info only: logo or name, address, mobile/WhatsApp, key emails if desired, social links, Privacy/Terms, ©.
- [ ] No excessive padding, unnecessary columns, duplicated content or oversized layout.
- [ ] The final content section must be **fully visible above the footer**, with a natural transition into it.
- [ ] No overlap, clipping, excess blank space or fixed-footer interference. Test at 1440, 768 and 390.

### 2.5 Images and performance
- [ ] Prefer the original assets in [04-assets-manifest.csv](04-assets-manifest.csv). No AI-generated, stock or unrelated replacement imagery while suitable originals exist.
- [ ] Plan local resizing and compression. Download each original **once** into the project (e.g. `public/images/<section>/`), choosing the `largest_original_url` column, and convert to WebP/AVIF at sensible sizes (e.g. 640/1024/1600w). Convert PNG photographs (`oasis.png`, `emma-salvado.png`, `oasis-facilities.png`) to JPEG/WebP. Original total is ≈ 43 MB; aim well under 10 MB.
- [ ] Avoid duplicate copies. The same poster appears in 2–4 places (YTT, Workshops, Shop, hero).
- [ ] **Avoid Vercel Image Optimization quota.** Merge `images: { unoptimized: true }` into the existing `next.config` (don't replace other settings). Still deliver responsive images through pre-generated sizes with `srcset`/`sizes`, explicit `width`/`height`, `loading="lazy"` below the fold, and priority for the first hero image only.
- [ ] **Don't change project configuration during the audit** (none was changed).

### 2.6 Blog
- [ ] Low priority. 11 real posts exist ([03 §8](03-content-inventory.md#8-blog--editorial-11-posts-v)). Don't invent posts.
- [ ] If a simple blog index is built, its initial view uses **no more than 10 images** (e.g. show 10 cards, or text-only cards with one featured image) unless the owner asks for more.
- [ ] Don't overbuild: no tags, comments, search or pagination engine for 11 posts.
- [ ] Remove the raw `[gs-fb-comments]` text. Await a client decision on sensitive passages (S1, S3).

## 3. Proposed route map (recommendation, needs approval)

| New route | Source | Notes |
|---|---|---|
| `/` | Home | Real text cards replace the image-only tiles. Hero: current programs (from one data file) |
| `/schedule` | Schedule + /all-events/ | Day-grouped agenda on mobile, week grid on desktop. Data source is TBD (see §4) |
| `/classes` | Class Descriptions | Levels + class cards |
| `/workshops` | Workshops | Upcoming only. Past events hidden by date |
| `/rates` | Rates | Price table + policies. Could merge with `/classes` |
| `/privates` | Privates + its T&C | Offers + booking form + T&C accordion |
| `/faq` | FAQ + TPO FAQs | Grouped accordion, 31 + 3 Q&As |
| `/teacher-trainings` | YTT | Cards → Kajabi |
| `/online` | Online Trainings | Cards → Kajabi, IDR + USD |
| `/about` or `/team` | Our Team (+ Lineage) | Shorter bios with "read more". Lineage section |
| `/books` | Books by Octavio | Interview block pending client decision (S2) |
| `/contact` | Contact | Form + details + map link/embed + WhatsApp link |
| `/blog`, `/blog/[slug]` | 11 posts | Low priority |
| `/affiliate` | Affiliate | Unlisted utility page (footer link) |
| `/give-back` | Give Back | Short page → Kajabi `/give-back`, or a home section only |
| `/privacy`, `/terms` | Legal | Terms consolidated (client sign-off) |
| — | Senior Teachers, Retreat, TPO pro, Test, German Subscriber, Home Sliders, author/category archives, 466 event pages | Exclude or await client decision ([02 §1](02-page-inventory.md)) |

**Redirects (301)** to configure in `next.config` (`redirects()`, merged): `/practice-with-us/:path*` → new studio routes · `/:postSlug/` (11 slugs) → `/blog/:postSlug` · `/meet-us/*` · `/our-team/` · `/yoga-teacher-training/` · `/online-trainings/` · `/books-by-octavio/` · `/affiliate-program/` · `/give-back-to-the-practice/` · `/privacy-policy/` · `/terms-conditions/` and child T&Cs · `/all-events/:path*` → `/schedule` · `/category/:c/` → `/blog` · `/shop/`, `/product/:p/` → depends on the commerce decision.

## 4. Decisions that block or shape implementation

| # | Decision | Options | Default if no answer |
|---|---|---|---|
| D1 | Schedule data | (a) MEC events via the public WP REST API at build time or with ISR · (b) WordPress kept as headless CMS · (c) static JSON edited by staff · (d) external booking platform embed | Build the UI against a JSON shape matching [data/schedule-october-2026.json](data/schedule-october-2026.json) so any source can feed it |
| D2 | Workshop purchase | Keep WooCommerce + Xendit (link out to the existing product URLs) · move to Kajabi · enquiry form | Link "Book now" to the existing WooCommerce product URLs |
| D3 | Forms backend | Route handler + email provider (Resend/SMTP) · form service · keep WP CF7 via its REST endpoint | Build the UI. Wire it to an endpoint the client provides |
| D4 | Newsletter | Kajabi embed (same form `2149070303`) · Kajabi form POST | Kajabi embed in a non-intrusive slot (footer or section), not an auto popup |
| D5 | Fonts | Two families (see 05 §1.3) | Decide at the start of Phase 2 |
| D6 | Content corrections | Spelling list in [08 §4](08-issues-gaps-questions.md#4-spelling-and-typography-errors-documented-not-corrected) | Keep the originals until approved |

## 5. Implementation notes

- **One content layer:** put programs, prices, Kajabi URLs, team, FAQs and contacts in `/content/*.js` or `.json` data files, sourced from [03](03-content-inventory.md) and [content-extracts/](content-extracts/). Yearly Kajabi slugs (`…-2027`) then live in one place.
- **Hero and tiles:** the original banners have text baked in. Use the HTML text from [03](03-content-inventory.md) on top of, or beside, photography, and request text-free versions (08 Q12). Until those arrive, crop originals carefully or use the clean portrait photos (team, portraits, class images) rather than the text posters.
- **Accessibility:** a real H1 per page, logical heading order, alt text written from the manifest roles, AA contrast (darken link and button colours or enlarge them), focus states, a `wa.me` link, and no auto-opening popup.
- **SEO:** metadata API per route, OG images from the originals, LocalBusiness/YogaStudio JSON-LD (address, geo -8.6556253 / 115.131796, phone), sitemap, robots, and the redirects above.
- **Analytics:** GA4 (ask for the property). Don't port the UA tag.
- **Motion (GSAP/ScrollTrigger):** subtle section reveals and image parallax at most. No scroll-jacking. Disable with reduced motion. The original has no scroll animation, so motion is an enhancement, not a brand requirement.
- **Responsive targets:** verify at 1440, 768 and 390 at minimum, with no horizontal overflow, readable schedule on mobile and a compact header.

## 6. Confirmation

- The two-font rule and every mandatory requirement above are documented for Phase 2.
- No redesign, component, layout, package install in the project, configuration change, GitHub push or Vercel deployment was performed in Phase 1.
