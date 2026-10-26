# 01 — Audit Report: thepracticebali.com (Phase 1)

| | |
|---|---|
| Site | https://www.thepracticebali.com/ ("The Practice", Traditional Hatha Yoga studio and teacher-training school, Canggu, Bali) |
| Audit date | 2026-10-26 (all statuses, prices and dates are as of this day) |
| Workspace at start | `D:\thepracticebali44`, **empty** (no source code, assets or prior evidence) |
| Scope | Research only. No code, redesign, config change, push or deploy |

## 1. Method

1. **Route discovery:** `robots.txt` → `/wp-sitemap.xml` (7 sub-sitemaps) → WP REST API (`/wp-json/wp/v2/pages`, `posts`, `categories`, counts for `media` and `mec-events`) → header, mobile and footer menus → every in-page link → manual probes (`/blog/`, `/practice-with-us/`, `/my-account/`, `/all-events/`, a known-bad URL).
2. **HTML capture:** `curl` download of all 51 sitemap URLs (pages, posts, products, taxonomies, author) plus 5 probes (56 files), stored outside the project.
3. **Structured extraction:** a Python stdlib parser pulled title, meta, canonical, headings, text, lists, images (src/srcset/alt/dims/link), links, iframes and forms from each page's `<main>`. The output is [content-extracts/](content-extracts/) and [data/pages-extract.json](data/pages-extract.json).
4. **CSS analysis:** child and parent theme stylesheets and inline customizer CSS, for fonts and colours.
5. **Browser inspection:** headless Chrome via Playwright-core, run from the scratchpad (not installed in the project). 25 page types at 1440, 768 and 390: full-page screenshots, computed styles, fonts loaded, header position, overflow, image sizes, popup visibility and mobile-menu interaction.
6. **Link and asset verification:** HTTP HEAD/GET on all 124 catalogued images, 19 downloads and every Kajabi/external destination.
7. **Schedule parsing:** the server-rendered October 2026 MEC calendar was turned into JSON (154 entries).

## 2. Coverage record

### 2.1 Fully inspected (HTML extracted + desktop/tablet/mobile screenshots + computed styles)
Home · Schedule · Class Descriptions · Workshops · Rates · Privates · FAQ · Yoga Teacher Trainings · Online Trainings · Our Team · Senior Teachers · Contact · Books by Octavio · Give Back · Affiliate · Women's Retreat · TPO FAQs (`/faqs/`) · TPO pro · Shop · Product (Hatha Yoga Moon) · Blog post (The Howler) · Category archive (Octavio's Articles) · `/all-events/` · single event page · 404 page.

### 2.2 Inspected from HTML only (content extracted, no screenshots)
Privacy Policy · Terms & Conditions (general) · Workshops T&C · Privates T&C · Retreat T&C · Test · German Subscriber · Home Sliders · Cart · Checkout (redirects to Cart) · the other 2 products · `/product-category/uncategorized/` · the 10 remaining blog posts · 5 remaining category archives · author archive · 1 more event page (Nyepi Day).

### 2.3 Partially inspected
- **466 MEC event pages:** 2 sampled. They're thin, and most are expired.
- **Schedule:** only the default month (October 2026) was captured. Other months and the category filter weren't loaded.
- **WooCommerce cart/checkout:** empty-cart state only.

### 2.4 Discovered but inaccessible
- Page **ID 192** `/practice-with-us/` (parent of the studio pages): 404, not public.
- Page **ID 9** (`?page_id=9`, mobile "Blog" link): 404.
- `/the-practice-online/`: 404.
- `/my-account/`: 404.
- Media library: 571 items exist in the API count. Only the 124 actually used on public pages were catalogued.

### 2.5 Broken routes and assets
See [08 §1](08-issues-gaps-questions.md#1-broken-links-and-assets). Highlights: the mobile "Blog" link, the "Train With Us Today" button, 8 Senior Teacher portraits, and 3 Kajabi links on `/test/`.

### 2.6 Interactive states not verified
Form submissions (3 CF7 forms, Kajabi newsletter), add to cart and checkout (Xendit), MEC month navigation and event modal, slider autoplay timing, hover and focus states, YouTube playback, search results beyond one query. These were deliberately not submitted, because doing so would send real enquiries or create orders.

### 2.7 Limitations
- Headless Chrome on Windows, not real mobile devices. Three widths only, plus CSS breakpoints.
- Lazy-loaded images occasionally didn't render in full-page captures (noted in [07](07-responsive-observations.md)).
- Kajabi pages (where YTT prices and curricula live) were checked for HTTP status only.
- Original high-resolution or text-free artwork isn't reachable from the public site.
- Content was captured on a single day. The schedule and workshops change frequently.

## 3. Summary of findings

### 3.1 What the site is
A WordPress 7.0.7 site on a Twenty Twenty child theme. It acts as a **portal**: studio information (schedule, classes, rates, privates, FAQ, workshops) lives on WordPress, while **teacher trainings, online courses, TPOpro membership, donations and the newsletter run on Kajabi** (`thepracticeonline.mykajabi.com`). WooCommerce sells three workshop/class tickets. Modern Events Calendar drives the schedule. Contact Form 7 handles enquiries.

### 3.2 Routes
29 published pages, 11 posts, 3 products, 6 categories, 466 event occurrences. Recommended to implement: **about 15 core routes** plus a low-priority blog. Everything else consolidates, redirects or is excluded ([02](02-page-inventory.md)).

### 3.3 Content
Rich and factual: about 30 price points, 6 YTT programs with 2027 dates, 12 online courses with IDR/USD prices, 6 team bios, 31 FAQs, 5 books, 11 articles, 8 contact emails with stated purposes, and full T&Cs. Main problems: **outdated items** (May 2024 retreat, past workshops, "Coming Soon" TPO pro), **conflicting facts** (minimum ages, class names, room counts) and **typos**. Everything is logged and nothing was corrected ([03](03-content-inventory.md), [08](08-issues-gaps-questions.md)).

### 3.4 Assets
124 images catalogued with page, role, link, size and status ([04](04-assets-manifest.csv)). 116 load, **8 are 404**. Hero slides, home tiles and program posters carry **baked-in text**. The logo exists only as a 260×320 PNG. The largest originals total ≈ 43 MB. **Nothing has been downloaded into the project.** The workspace contained no local assets.

### 3.5 Brand
One web font, **Nunito** (plus accidental Inter and serif fallbacks in buttons and forms). Palette: **sand `#bdb39b`, tan `#ae8656`, brown `#564c44`**, black text. Sacred-heart engraved badge logo, square corners, flat colour blocks, warm off-white studio photography with black clothing ([05](05-brand-reference.md)).

### 3.6 Functionality and dependencies
Kajabi is the main dependency (25 distinct URLs, 22 live, 3 broken on `/test/` only). The others are WooCommerce + Xendit, CF7 + reCAPTCHA v3, MEC, Popup Maker, slick, and a defunct UA analytics tag. The key Phase 2 decision is the **schedule data source** ([06](06-functionality-and-dependencies.md)).

### 3.7 Responsive behaviour
No horizontal page overflow at any width. Mobile problems: the schedule grid shows only 3 of 7 days without inner scrolling, the stacked sub-nav fills the first screen, baked-in banner text becomes unreadable, H1 doesn't scale down, and tablet pages run 2–2.4× longer than desktop ([07](07-responsive-observations.md)).

## 4. Fact vs. estimate conventions used across the documents
- **Verified [V]:** read from HTML/CSS/API, computed in a browser, or confirmed by HTTP status.
- **Estimate [E]:** judged from screenshots (e.g. photography tones, typeface in images).
- **Unverified:** behaviour not exercised, stated as such.
- **[!]:** a fact as published that conflicts with something else or contains an error. See 08.
