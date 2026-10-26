# Source Audit: The Practice Bali (Phase 1)

Research-phase documentation for the frontend rebuild of **https://www.thepracticebali.com/**, captured **2026-10-26**.
This folder is the single reference for Phase 2, so the original site shouldn't need re-auditing.

> **Status:** Phase 1 complete. **Awaiting owner review and explicit approval before Phase 2.**
> No redesign, no project code, no configuration changes, no package installs in the project, no GitHub push, no Vercel deploy.

## Documents

| File | What it answers |
|---|---|
| [01-audit-report.md](01-audit-report.md) | Method, coverage (fully, partially, not inspected), limitations, headline findings |
| [02-page-inventory.md](02-page-inventory.md) | Every route with status, source and recommendation; shared components; page-by-page section order; nav structure |
| [03-content-inventory.md](03-content-inventory.md) | Facts to preserve: contacts, prices, dates, programs, team, FAQs, books, blog list, legal, duplicates |
| [04-assets-manifest.csv](04-assets-manifest.csv) | 124 images: role, pages, link target, URL, HTTP status, bytes, dims, largest original, alt, availability, notes |
| [05-brand-reference.md](05-brand-reference.md) | Fonts, computed type scale, verified HEX palette, contrast, logo, visual language; the two-font rule |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Stack, Kajabi and other integrations, feature matrix with verification level, forms, downloads, SEO |
| [07-responsive-observations.md](07-responsive-observations.md) | 1440 / 768 / 390 behaviour, measured heights, breakpoints, image sizing |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | Broken items, outdated content, factual conflicts, typos, sensitive content, coverage gaps, client questions |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | Mandatory design rules (two fonts, footer, images, `unoptimized: true`), proposed routes and redirects, blocking decisions |

## Raw evidence

| Path | Contents |
|---|---|
| [content-extracts/](content-extracts/) | 51 Markdown files with the full original text of each route, in order (headings match HTML levels, `[IMG]` and `[IFRAME]` references, form fields). File name = route with `/` → `__` |
| [data/pages-extract.json](data/pages-extract.json) | Per page: meta, word count, images, links, iframes, forms (machine-readable) |
| [data/schedule-october-2026.json](data/schedule-october-2026.json) | 154 class occurrences (date, title, time) from the live calendar |
| [data/wp-api-pages.json](data/wp-api-pages.json), [wp-api-posts.json](data/wp-api-posts.json), [wp-api-categories.json](data/wp-api-categories.json) | WordPress REST API snapshots: IDs, parents, templates, created/modified dates |
| [data/sitemap-urls.txt](data/sitemap-urls.txt) | All URLs from the XML sitemaps, including the 466 event URLs |
| [screenshots/](screenshots/) | 84 JPEGs, listed below |

## Key facts at a glance

- **Business:** The Practice, Jalan Batu Bolong 94A, Canggu, Bali · M/SMS/WhatsApp +62 8123 670 2160 · reception@ / admin@ / training@ / membership@thepracticebali.com
- **Platform:** WordPress 7.0.7 + Twenty Twenty child theme + WooCommerce/Xendit + Modern Events Calendar + Contact Form 7. **Trainings, online courses, TPOpro, donations and the newsletter live on Kajabi.**
- **Brand:** Nunito · sand `#bdb39b` · tan `#ae8656` · brown `#564c44` · black text · sacred-heart badge logo (PNG only)
- **Biggest risks:** schedule data source, form backends, baked-in-text imagery, outdated and conflicting content (see 08)

## Screenshots

Captured in headless Chrome. Desktop = 1440×900, tablet = 768×1024, mobile = 390×844 (iPhone UA). Full-page unless the name says `viewport`, `first-view` (home with the newsletter popup) or `menu-open`.

| Page | Route | Files |
|---|---|---|
| home | `/` | [desktop-1440](screenshots/home__desktop-1440.jpg) · [desktop-1440__first-view](screenshots/home__desktop-1440__first-view.jpg) · [mobile-390](screenshots/home__mobile-390.jpg) · [mobile-390__first-view](screenshots/home__mobile-390__first-view.jpg) · [mobile-390__menu-open](screenshots/home__mobile-390__menu-open.jpg) · [mobile-390__viewport](screenshots/home__mobile-390__viewport.jpg) · [tablet-768](screenshots/home__tablet-768.jpg) · [tablet-768__first-view](screenshots/home__tablet-768__first-view.jpg) · [tablet-768__menu-open](screenshots/home__tablet-768__menu-open.jpg) |
| schedule | `/practice-with-us/schedule/` | [desktop-1440](screenshots/schedule__desktop-1440.jpg) · [mobile-390](screenshots/schedule__mobile-390.jpg) · [mobile-390__viewport](screenshots/schedule__mobile-390__viewport.jpg) · [tablet-768](screenshots/schedule__tablet-768.jpg) |
| class-descriptions | `/practice-with-us/class-descriptions/` | [desktop-1440](screenshots/class-descriptions__desktop-1440.jpg) · [mobile-390](screenshots/class-descriptions__mobile-390.jpg) · [tablet-768](screenshots/class-descriptions__tablet-768.jpg) |
| rates | `/practice-with-us/rates/` | [desktop-1440](screenshots/rates__desktop-1440.jpg) · [mobile-390](screenshots/rates__mobile-390.jpg) · [tablet-768](screenshots/rates__tablet-768.jpg) |
| privates | `/practice-with-us/privates/` | [desktop-1440](screenshots/privates__desktop-1440.jpg) · [mobile-390](screenshots/privates__mobile-390.jpg) · [tablet-768](screenshots/privates__tablet-768.jpg) |
| workshops | `/practice-with-us/workshops/` | [desktop-1440](screenshots/workshops__desktop-1440.jpg) · [mobile-390](screenshots/workshops__mobile-390.jpg) · [tablet-768](screenshots/workshops__tablet-768.jpg) |
| faq | `/practice-with-us/faq/` | [desktop-1440](screenshots/faq__desktop-1440.jpg) · [mobile-390](screenshots/faq__mobile-390.jpg) · [tablet-768](screenshots/faq__tablet-768.jpg) |
| yoga-teacher-training | `/yoga-teacher-training/` | [desktop-1440](screenshots/yoga-teacher-training__desktop-1440.jpg) · [mobile-390](screenshots/yoga-teacher-training__mobile-390.jpg) · [mobile-390__viewport](screenshots/yoga-teacher-training__mobile-390__viewport.jpg) · [tablet-768](screenshots/yoga-teacher-training__tablet-768.jpg) |
| online-trainings | `/online-trainings/` | [desktop-1440](screenshots/online-trainings__desktop-1440.jpg) · [mobile-390](screenshots/online-trainings__mobile-390.jpg) · [tablet-768](screenshots/online-trainings__tablet-768.jpg) |
| our-team | `/our-team/` | [desktop-1440](screenshots/our-team__desktop-1440.jpg) · [mobile-390](screenshots/our-team__mobile-390.jpg) · [mobile-390__viewport](screenshots/our-team__mobile-390__viewport.jpg) · [tablet-768](screenshots/our-team__tablet-768.jpg) |
| senior-teachers | `/senior-teachers/` | [desktop-1440](screenshots/senior-teachers__desktop-1440.jpg) · [mobile-390](screenshots/senior-teachers__mobile-390.jpg) · [tablet-768](screenshots/senior-teachers__tablet-768.jpg) |
| contact | `/contact/` | [desktop-1440](screenshots/contact__desktop-1440.jpg) · [mobile-390](screenshots/contact__mobile-390.jpg) · [tablet-768](screenshots/contact__tablet-768.jpg) |
| books-by-octavio | `/books-by-octavio/` | [desktop-1440](screenshots/books-by-octavio__desktop-1440.jpg) · [mobile-390](screenshots/books-by-octavio__mobile-390.jpg) · [tablet-768](screenshots/books-by-octavio__tablet-768.jpg) |
| give-back | `/give-back-to-the-practice/` | [desktop-1440](screenshots/give-back__desktop-1440.jpg) · [mobile-390](screenshots/give-back__mobile-390.jpg) · [tablet-768](screenshots/give-back__tablet-768.jpg) |
| affiliate | `/affiliate-program/` | [desktop-1440](screenshots/affiliate__desktop-1440.jpg) · [mobile-390](screenshots/affiliate__mobile-390.jpg) · [tablet-768](screenshots/affiliate__tablet-768.jpg) |
| womens-retreat | `/womens-yoga-and-wellness-retreat/` | [desktop-1440](screenshots/womens-retreat__desktop-1440.jpg) · [mobile-390](screenshots/womens-retreat__mobile-390.jpg) · [tablet-768](screenshots/womens-retreat__tablet-768.jpg) |
| shop | `/shop/` | [desktop-1440](screenshots/shop__desktop-1440.jpg) · [mobile-390](screenshots/shop__mobile-390.jpg) · [tablet-768](screenshots/shop__tablet-768.jpg) |
| product-hatha-yoga-moon | `/product/hatha-yoga-moon/` | [desktop-1440](screenshots/product-hatha-yoga-moon__desktop-1440.jpg) · [mobile-390](screenshots/product-hatha-yoga-moon__mobile-390.jpg) · [tablet-768](screenshots/product-hatha-yoga-moon__tablet-768.jpg) |
| blog-post-the-howler | `/the-howler/` | [desktop-1440](screenshots/blog-post-the-howler__desktop-1440.jpg) · [mobile-390](screenshots/blog-post-the-howler__mobile-390.jpg) · [tablet-768](screenshots/blog-post-the-howler__tablet-768.jpg) |
| category-octavios-articles | `/category/octavios-articles/` | [desktop-1440](screenshots/category-octavios-articles__desktop-1440.jpg) · [mobile-390](screenshots/category-octavios-articles__mobile-390.jpg) · [tablet-768](screenshots/category-octavios-articles__tablet-768.jpg) |
| all-events | `/all-events/` | [desktop-1440](screenshots/all-events__desktop-1440.jpg) · [mobile-390](screenshots/all-events__mobile-390.jpg) · [tablet-768](screenshots/all-events__tablet-768.jpg) |
| 404 | `/blog/ (404)` | [desktop-1440](screenshots/404__desktop-1440.jpg) · [mobile-390](screenshots/404__mobile-390.jpg) · [tablet-768](screenshots/404__tablet-768.jpg) |
| event-single | `/all-events/8am-qi-gong-ming-75min/` | [desktop-1440](screenshots/event-single__desktop-1440.jpg) · [mobile-390](screenshots/event-single__mobile-390.jpg) · [tablet-768](screenshots/event-single__tablet-768.jpg) |
| faqs | `/faqs/` | [desktop-1440](screenshots/faqs__desktop-1440.jpg) · [mobile-390](screenshots/faqs__mobile-390.jpg) · [tablet-768](screenshots/faqs__tablet-768.jpg) |
| tpo-pro-2 | `/tpo-pro-2/` | [desktop-1440](screenshots/tpo-pro-2__desktop-1440.jpg) · [mobile-390](screenshots/tpo-pro-2__mobile-390.jpg) · [tablet-768](screenshots/tpo-pro-2__tablet-768.jpg) |