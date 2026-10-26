# 07 — Responsive Observations

**Method:** headless Chrome (Playwright-core 1.49.1 driving the installed Chrome), 2026-10-26.

| Viewport | Size | Device emulation |
|---|---|---|
| Desktop | 1440×900 | DPR 1 |
| Tablet | 768×1024 | touch |
| Mobile | 390×844 | iPhone UA, `isMobile`, touch |

**Coverage:** 25 page types × 3 viewports = 75 full-page captures, plus 4 mobile first-viewport shots, the home first view with the popup, and the mobile and tablet menus open. Files are in [`screenshots/`](screenshots/), named `<page>__<viewport>-<width>[__variant].jpg` (index in [README](README.md#screenshots)).

**Measured per capture:** document height, horizontal overflow (`scrollWidth > clientWidth`), header position and height, loaded fonts, computed type styles, and image natural vs. rendered size.

**Not tested:** widths other than these three (breakpoints below come from CSS), landscape orientation, real iOS/Android browsers, hover states.

**Capture limitations:**
- Some lazy-loaded images (e.g. two posters on `yoga-teacher-training__tablet-768.jpg`, the lower home tiles on early desktop runs) didn't finish loading before the full-page capture, even with a scroll pass. Those blanks are capture artifacts, not site defects.
- The newsletter popup was hidden before the full-page captures. It's shown in `home__desktop-1440__first-view.jpg`.

## 1. Breakpoints (from theme CSS)

Child theme media queries: `max-width 490`, `540`, `max-width 699`, `700`, `768`, `800`, `900`, **`1000`** (desktop header and nav appear), `1032`, `1168`, `1220`. Twenty Twenty parent breakpoints are `700` and `1000`/`1220`. The 768px tablet capture therefore gets the **mobile header**.

## 2. Measured page heights (px)

| Page | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| Home | 3,209 | 6,333 | 4,037 |
| Schedule | 3,592 | 4,358 | 4,433 |
| Class Descriptions | 5,855 | **11,700** | 8,274 |
| Workshops | 3,847 | 6,441 | 5,345 |
| Rates | 1,888 | 1,828 | 1,982 |
| Privates | 5,085 | 8,517 | 7,626 |
| FAQ | 5,777 | 6,414 | 8,412 |
| Yoga Teacher Trainings | 4,313 | 9,092 | 6,400 |
| Online Trainings | 6,858 | **16,121** | 11,576 |
| Our Team | 7,793 | 10,401 | **12,082** |
| Senior Teachers | 7,570 | 8,073 | 9,116 |
| Contact | 1,824 | 1,656 | 1,763 |
| Books | 4,147 | 7,906 | 6,315 |
| Women's Retreat | 9,759 | 9,867 | 10,829 |
| Blog post (The Howler) | 3,286 | 3,875 | 5,389 |
| Category archive (Octavio) | 5,549 | 6,484 | 8,658 |
| Shop | 1,134 | 1,707 | 2,316 |

**Horizontal page overflow:** none at any viewport on any page (`hOverflow = false` for all 75). The schedule calendar scrolls horizontally **inside its own container** on mobile (see §4).

## 3. Global components

| Component | Desktop 1440 | Tablet 768 | Mobile 390 |
|---|---|---|---|
| Header | 161px tall, `position: relative` (**not sticky**). "SCHEDULE" · centred logo (160×197, overflowing into the banner) · "CONTACT" · "JOIN TPOpro NOW" right | 76px. Logo top-left (overflows), "Menu" (⋯) toggle right. **Search toggle hidden** | 93px. Same as tablet. Logo about 100×123 |
| Header on WooCommerce, blog and archive templates | 253px (taller variant) | 199px | 216px |
| Mobile menu | n/a | Full-screen sand modal: dark "Close Menu ✕" bar; Home, Contact, Schedule, Blog, Affiliate as large rows with dividers; social icons; JOIN TPOpro button at the bottom | Same |
| Page banner | 1440×569 full-bleed photo | 768×≈304 | 390×154 (a thin strip; subjects cropped small) |
| Studio sub-nav | Tan strip: "BACK TO HOMEPAGE" small, then **30px** uppercase links in one row separated by black rules (wraps to 2 lines: "FAQS" drops) | Stacked vertically, 18px | **Stacked vertically, about 340px tall**, filling most of the first screen below the banner before any content (`schedule__mobile-390__viewport.jpg`) |
| Content width | ≈ 580–700px centred text column; image rows up to ≈ 1000px | ≈ 690px | 350px (20px gutters) |
| Footer | Two tan bands. Left-aligned, content starts at x≈204 (aligned to the 1032 container). Social + Privacy on one line, address, mobile, then © / credit / "To the top ↑" | Same, narrower | Stacked; "To the top" becomes "Up ↑" |
| reCAPTCHA badge | Fixed right edge, about y=826–886 | Fixed, overlaps content | Fixed bottom-right, **overlaps text and the calendar** |
| Popup (home) | Centred 834px tan box over the hero | Present (`popupVisibleOnLoad: true`) | Present at all viewports (`mobile_disabled: null`) |

## 4. Page-level responsive behaviour

| Page | Desktop | Tablet / Mobile |
|---|---|---|
| **Home** | Hero 1440×570 (slick, arrows at the edges, dots below). Tile grid: 2 columns of 507×340 tiles, max width about 1000px | **Tablet: tiles collapse to 1 column** at about 700px wide, a stack of 10 tall image tiles (6,333px page). The slider is mis-positioned: part of the previous slide shows on the left (`home__tablet-768.jpg`). Mobile: 1 column, 350px tiles. Hero 390×154 makes the baked-in text **too small to read** (about 6–8px equivalent) |
| **Schedule** | 7-column MEC month grid, readable, with titles and times in each cell | **Mobile: the grid keeps 7 fixed-width columns. Only MO–WE are visible**, the rest scroll horizontally inside the calendar. Month label "OCTOBER 2026" is clipped behind the reCAPTCHA badge. Cell text wraps to 1–2 words per line, making the page 4,433px |
| **Program listings** (YTT, Online, Workshops, Books) | Row layout: poster ≈300px left, text right | Poster goes **full width** (≈690px tablet / 350px mobile) above its text. Tablet pages become 2–2.4× taller than desktop (Online Trainings 16,121px) |
| **Class Descriptions** | Image + text rows | Same stacking. Tablet 11,700px |
| **Our Team** | Portrait beside long bio | Portrait stacked above the bio. Mobile 12,082px; H2 intro at 28px takes about 270px of height |
| **Privates** | Portrait + offer + prices | Stacked. Booking form full width |
| **FAQ** | 31 open Q&As (H5 18px questions) | Same, 8,412px on mobile. No accordion |
| **Rates** | Centred lines | Centred lines wrap (the long Kirtan sentence becomes 6–7 centred lines on mobile) |
| **Contact** | Tan band with a 580px form, centred details below | Form full width; details centred |
| **Shop** | 3-column product grid | Mobile: 1 column, centred poster + title + price + ADD TO CART (verified). Tablet: see `shop__tablet-768.jpg`. On WooCommerce templates the **mobile logo is centred** (other templates put it top-left) |
| **Blog post** | Twenty Twenty single, narrow column, featured image | Body text drops to 14px. Long posts reach 5,389px |

## 5. Typography changes across viewports [V computed]

| Element | 1440 | 768 | 390 |
|---|---|---|---|
| Entry paragraph | 15px / 22.1 | 15px / 22.1 | 14px / 19.6 |
| H1 | 32px | 32px | 32px (**no reduction**) |
| H2 | 30px | 30px | 28px |
| H3–H5 | 24 / 20 / 18 | same | same |
| Nav (mobile modal items) | — | ≈ 18px bold | ≈ 18px bold |

## 6. Responsive images

- WordPress `srcset` is present on content images, but banners are served at **1487×588 to 390px screens** (≈ 3.8× too wide). The logo is served at 260×320 for a 100px display. In total, 42 image instances on mobile were served at more than 2.5× their rendered width.
- Sum of the largest available originals across the 124 catalogued images is **≈ 43 MB**. The largest are `2026/02/collage.jpg` (2.2 MB), `2022/11/oasis.png` (1.1 MB), `2025/02/200hr-new.jpg` (1.0 MB) and `2022/11/emma-salvado.png` (0.98 MB). PNG photographs should be converted.
- Below-the-fold images use `loading="lazy"`.

## 7. What Phase 2 should not copy

- Image-only home tiles and slides whose text becomes unreadable on mobile.
- A month-grid schedule on mobile. Use a day-grouped list.
- The full-screen stacked sub-nav pushing content below the fold.
- H1 sizes that don't scale down. Use a fluid type scale.
- Tablet using single-column full-width posters, which doubles page length. A 2-column card grid suits 768px.
- Non-sticky header with no way to reach other sections from deep in long pages (a compact sticky header is reasonable).
