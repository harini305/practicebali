# 05 — Brand Reference (Typography, Colour, Logo, Visual Identity)

Captured 2026-10-26.
- **[V]** = verified, either from theme CSS (`tp_fxm_twentytwenty/style.css` v1.3.8) or from computed styles in headless Chrome at 1440, 768 and 390 px
- **[E]** = estimate from screenshots

Root font size is 62.5%, so 1rem = 10px (Twenty Twenty convention).

## 1. Typography

### 1.1 Font families found

| Family | Source | Where used | Status |
|---|---|---|---|
| **Nunito** 400, 700, 400 italic | Google Fonts (`css2?family=Nunito:ital,wght@0,400;0,700;1,400`) | **Everything visible:** body, all headings H1–H6, nav, sub-nav, header button, footer, WooCommerce | [V] Primary and only intended brand web font |
| Inter var | Twenty Twenty parent (self-hosted) | `input[type=submit]` (CF7 "SEND", search submit). Also loaded by the Kajabi newsletter embed | [V] Accidental parent-theme leftover |
| Serif fallback stack `NonBreakingSpaceOverride, "Hoefler Text", Garamond, "Times New Roman", serif` | Twenty Twenty parent | Gutenberg buttons (`.wp-block-button__link`: "CLICK HERE TO LEARN MORE", "BOOK NOW", "Visit Us") and the MEC calendar wrapper (`.mec-wrap`) | [V] Accidental. The parent theme's `.entry-content` serif rule wins over the child theme here |
| `-apple-system, BlinkMacSystemFont, "Helvetica Neue"` | Parent theme | Fallbacks | Not visibly used |
| Serif display face **inside images** | Baked into hero banners, home tiles, posters ("yoga teacher trainings", "meditation teacher training") | Images only | [E] A soft old-style serif, mostly lower-case. **Typeface not identifiable from pixels.** Ask the client or designer for the name |
| MEC icon font, slick icon font | Plugins | Icons | Utility |

**Conclusion:** the intended brand typography is **one family, Nunito**, used for both headings and body, with bold uppercase for hierarchy. The serif in the images is the second visual voice of the brand, but it isn't used as web text.

### 1.2 Type scale (computed, desktop 1440) [V]

| Element | Size | Weight | Line height | Letter spacing | Case | Colour |
|---|---|---|---|---|---|---|
| Body (`body`) | 14px | 400 | normal | normal | — | #000 |
| Entry paragraph (`.entry-content p`) | 15px (desktop/tablet), 14px (mobile) | 400 | 22.1px / 19.6px | normal | — | #000 |
| H1 | 32px (30px on some pages) | **800 requested** (only 400/700 loaded, so 700 or synthetic bold renders) | 1.14 (36.4px) | normal | Mostly typed in caps in the content | #000 |
| H2 | 30px (28px mobile) | 700 | 1.25 (37.5px) | normal | Content caps | #000 |
| H3 | 24px | 700 | 30px | normal | Content caps | #000 |
| H4 | 20px | 700 | 25px | normal | — | #000 / #050505 |
| H5 | 18px | 700 | 22.5px | normal | — | #000 |
| H6 | 16px | 700 | — | 0.03125em | uppercase | #000 |
| Primary nav (`.primary-menu a`) | 15px | 700 | 1 | -0.5px | **uppercase** | #000. Current page `#564c44` |
| Sub-pages nav links | 18px (mobile) to 30px (desktop links) [V CSS: `font-size: 3rem` at ≥ breakpoint] | 700 | — | — | uppercase | #000. Active `#564c44`/greyed |
| Header button (`.btn.button`) | 15px | 600 | 1 | +0.5px | uppercase | text `#bdb39b` on `#564c44` |
| Gutenberg button | 15px | 400 | 1 | normal | as typed | text `#bdb39b` on `#564c44`, **serif fallback font** |
| Form inputs | 15px | 400 | 1 | — | — | bg `#bdb39b`, border `#57442c` |
| Site tagline (`.site-description`) | 18px | 500 | — | -0.56px | — | #6d6d6d (hidden visually on desktop) |
| Footer widgets | 13px | 400 | normal | normal | — | #000 |
| Footer credits | 14px | 400 / bold for "© 2026 The Practice" | — | — | — | #000 |
| Schedule event title (MEC) | 13px | 500 | 15.6px | — | — | #000 |

Typography observations:
- Hierarchy relies almost entirely on **uppercase + bold**. Many headings are typed in capitals in the content itself (e.g. "OUR TEAM", "YOGA PRICES"), not set through CSS.
- Content is **centre-aligned** on most pages (Rates, Contact, intros), including long paragraphs.
- Sizes barely change between desktop and mobile (H1 stays 32px at 390px).

### 1.3 Two-font rule for Phase 2 (requirement, no fonts selected yet)

The redesign must use **exactly two font families** sitewide: one for headings, one for body, UI, nav, buttons, forms, cards and footer. No third family anywhere. Options to evaluate in Phase 2 (not decided here):
- **Keep Nunito** as the UI/body family. It's the strongest typographic link to the current brand, and it's open-source on Google Fonts.
- Pair it with **one readable heading family** that echoes the serif used in the brand imagery and logo, so web headings and baked-in banner text feel related. Alternatively, use Nunito for everything plus one serif for headings only.
- Load only the weights actually used. The original requests 800 without loading it.
- Make sure buttons, form inputs and calendar/schedule components inherit the chosen family. The original leaks Inter and a Times-style serif into these.

## 2. Colour

### 2.1 Brand palette (verified from child-theme CSS and computed styles)

| Role | HEX | Where | Notes |
|---|---|---|---|
| **Sand (primary background)** | `#bdb39b` | `html, body` background, header, mobile menu modal, form inputs, select2 dropdown. Also WP customizer "background" | [V] The dominant brand colour |
| **Tan / ochre (secondary)** | `#ae8656` | Footer (both bands), sub-pages nav strip, page-banner fill, contact form band, section-heading underline, WooCommerce accents, sale badge | [V] |
| **Dark warm brown (action)** | `#564c44` | Buttons (bg + border), links, active nav item, slider arrow/dot hover, header CTA | [V] Primary action colour |
| Button text | `#bdb39b` | Text on brown buttons | [V] Contrast 4.01:1 |
| Button hover | `#5a5a59` | Button hover/focus bg; also `.color-accent` | [V] Neutral grey (hover loses the warm tone) |
| Gold rule | `#b18c60` | `hr` separators (4px) | [V] |
| Input border | `#57442c` | Form field borders | [V] |
| Text | `#000000` | Body and headings | [V] |
| Subtle background | `#a59778` | WP customizer preset | [V] defined, not observed in use |
| Secondary dark | `#403c34` | WP customizer preset "secondary" | [V] defined, not observed |
| Footer text on tan | `#000` on `#ae8656` | Footer | [V] 6.34:1 |

### 2.2 Incidental, non-brand colours (don't carry forward)

| HEX | Origin |
|---|---|
| `#8b0d2e` | Twenty Twenty customizer "accent" preset (default theme value, not used visibly) |
| `#d41010`, `#b40513`, `#b22222` | CF7 validation error box, required-field asterisks |
| `#fff` | CF7 error tips (white on sand, contrast 2.08:1, which is a problem) |
| `#626262`, `#656262`, `#696464`, `#6d6d6d` | MEC/WooCommerce/greys |
| `#abb8c3`, `#f78da7`, `#cf2e2e`, … | WordPress core block presets |
| Popup tan (≈ `#a5835a` [E]) | Popup Maker theme. Close to `#ae8656` |
| Red/gold of the Dragon's Gate Kung Fu badge | Third-party logo in a home tile |
| Neon pink "pro" | Baked into the TPOpro tile image |

### 2.3 Colour in photography [E]

Studio photography is shot against a **warm off-white/blush wall** (≈ `#ead9cc`–`#f1e6dc`). Teachers wear **black**. Skin tones and tattoos add warmth. Posters use soft cream backgrounds with brown/gold serif text (≈ `#9c7a4f`). This warm-neutral, black-accented look is consistent across all 2024–2026 assets and is the most recognisable brand trait after the logo.

### 2.4 Contrast summary (computed, WCAG 2.x)

| Pair | Ratio | AA normal text |
|---|---|---|
| #000 on #bdb39b | 10.09 | Pass |
| #000 on #ae8656 | 6.34 | Pass |
| #564c44 on #bdb39b (links) | 4.01 | **Fail** (pass for large text) |
| #bdb39b on #564c44 (buttons) | 4.01 | **Fail** (pass for large text) |
| #5a5a59 on #bdb39b | 3.32 | Fail |
| #fff on #ae8656 | 3.31 | Fail |
| #fff on #bdb39b | 2.08 | Fail |

## 3. Logo

| Item | Detail |
|---|---|
| Mark | Vintage engraved **sacred heart with flames**, inside an arched/oval badge, flanked by two birds and two crosses. Ring text: "the practice" (top) · "temple of traditional yoga" (around the bottom). Black line art on a cream fill |
| File | `wp-content/uploads/2023/05/tp_logo_new.png`, **260×320 PNG**, 141 KB, the only version found. Favicons: `2023/06/tp_logo_new-100x100.png`, `-260x260.png` |
| Placement | Desktop: **centred** in the header between "SCHEDULE" and "CONTACT", rendered at about 160×197, **overlapping** the bottom edge of the header into the banner. Mobile/tablet: top-left, about 100×123, also overlapping the banner |
| Variants | **None** (no horizontal lockup, no mono or reversed version, no SVG) |
| Wordmark | No separate wordmark. The brand name appears in HTML only as the hidden tagline "The Practice Yoga Institute" and in page titles |
| Phase 2 need | Ask for a **vector (SVG/AI)** logo. The 260px PNG will look soft on retina headers above about 130 CSS px |

## 4. Other visual identity elements

| Element | Observation |
|---|---|
| Shape language | **Square corners everywhere**: `border-radius: 0` on buttons and selects. Only YouTube play buttons have 6px |
| Shadows | Essentially none. Flat colour blocks |
| Dividers | 4px tan rules (`#b18c60`) between program rows. 4px `#ae8656` underline on section headings |
| Image treatment | Full-bleed photographic banners (≈2.5:1). Portrait posters 4:5 (819×1024) and squares (1024×1024) in Instagram format. No rounded corners, filters or overlays. Hero/tile images have **text baked in** |
| Icon style | Twenty Twenty's default social SVG glyphs (solid black). MEC line icons in the calendar |
| Decorative motifs | Sacred heart / flame (logo, "Ignite the Sacred Fire"), Moon-Sun-Fire triad (class names), the Sri Vidya lineage. No ornaments on the web pages themselves |
| Backgrounds | Solid sand for the page, tan bands for the footer and sub-nav. No textures or patterns (the Contact banner's kilim rug photo is the only pattern) |
| Layout | Narrow centred column (~580–700px of text) on a full-width sand field, centred text, stacked blocks, generous vertical gaps |
| Tone | Earthy, devotional, traditional, warm. Copy is direct and passionate (capitalised emphasis, imperatives) |

## 5. Keep vs. leave behind

**Keep (recognisable identity):** the sand/tan/brown palette, the sacred-heart badge logo, the warm off-white studio photography with black clothing, Nunito, square corners and flat blocks, the uppercase-bold label voice used sparingly.

**Leave behind:** text baked into images, the 2-link nav, the full-screen stacked sub-nav on mobile, centre-aligned long paragraphs, accidental Inter and Times fonts, grey button hover, sub-AA link and button contrast, the auto popup on load, the reCAPTCHA badge over content.
