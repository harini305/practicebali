# 08 — Issues, Gaps, Inconsistencies & Open Questions

Captured 2026-10-26. Nothing here has been "fixed". Each item needs a client decision or a Phase 2 handling choice.
Severity: **H** = blocks or misleads users, or carries legal/factual risk · **M** = quality or credibility · **L** = cosmetic.

## 1. Broken links and assets

| # | Sev | Issue | Location |
|---|---|---|---|
| B1 | H | Mobile menu "Blog" → `/?page_id=9` returns **404** | Mobile menu, every page |
| B2 | H | "Train With Us Today" → `/the-practice-online/` returns **404** | /our-team/ bottom CTA |
| B3 | M | `/practice-with-us/` (parent of all studio pages) returns 404 | URL hierarchy |
| B4 | M | **All 8 Senior Teacher portraits 404** (`/wp-content/uploads/2020/06/*.jpg`) | /senior-teachers/ |
| B5 | L | Home tile "our team" links to the old URL `/meet-us/our-team/`, and the Our Team intro links to `/meet-us/senior-teachers/` (both redirect) | Home, Our Team |
| B6 | L | Affiliate "50hr Hatha" → "SOCIAL MEDIA IMAGES" links to the Key Messages PDF, not a zip | /affiliate-program/ |
| B7 | L | `/test/` Kajabi links (200hr-ytt, 50hr-yin-training, 300hr-2026) all 404 | /test/ (orphan) |
| B8 | M | Raw shortcode `[gs-fb-comments]` printed at the end of all 11 blog posts | Blog |
| B9 | M | First Online Trainings card (50HR Hatha & Ayurveda, "NEW COURSE") has **no CTA link** | /online-trainings/ |
| B10 | L | Privacy and Workshop-T&C pages render an empty banner `<img>` | Legal |

## 2. Outdated content

| # | Sev | Issue | Location |
|---|---|---|---|
| O1 | H | Women's retreat dated **6–12 May 2024**, still published with a live booking form | /womens-yoga-and-wellness-retreat/ |
| O2 | M | Workshops "29 SEPTEMBER 630pm" and "4 OCTOBER 10am-3pm" are past (no year given) | /practice-with-us/workshops/ |
| O3 | M | Kriya workshop (31 Oct – 1 Nov) is days away; it'll be past soon after launch | Workshops, YTT, hero slide 1, product |
| O4 | M | TPO pro page says "Coming Soon!" while TPOpro is live | /tpo-pro-2/ |
| O5 | M | Senior Teachers page dates from 2020 ("soon teaching at…", "almost 3 years ago") | /senior-teachers/ |
| O6 | L | TPO FAQ mentions "swapping over to the new app", which is historical | /faqs/ |
| O7 | L | T&Cs define products that no longer exist ("20Hr The Great Wisdom Tradition", "Chakra Healing") | T&C pages |
| O8 | M | Google Analytics Universal (`UA-…`) tag, sunset in 2023 | All pages |
| O9 | L | Banner file names show reuse from earlier years (e.g. `online-trainng-2022.jpg` on Senior Teachers, `schedule_new.jpg` on Our Team) | Several |

## 3. Factual conflicts (do not resolve without the client)

| # | Sev | Conflict | Sources |
|---|---|---|---|
| C1 | H | **Minimum age.** Rates: Level 1 and Yin 12+; Level 2, Master, Meditation, Qi Gong, 2hr Yin 15+. FAQ: Beginners and Restorative 10+; Intermediate, Master, 2hr Yin 15+ | /rates/ vs /faq/ |
| C2 | M | **Class naming.** Schedule uses Beginners / Level 1 / Level 2 plus "Yang to Yin" and Hz meditations. FAQ and Rates refer to "Intermediate", "Restorative Hatha", "Fire Class", "Sunday Yin", "Unlimited Pass", none of which appear on the current schedule or rates | /schedule/, /faq/, /rates/ |
| C3 | M | **Unlimited Pass** is mentioned in the FAQ refund answer but isn't on the Rates page | /faq/ |
| C4 | M | **Retreat rooms.** Price list says "3 Shared Suites"; the room card says "Shared Suites (2 Available)"; total "13 rooms" ≠ 4+6+3+1 = 14 (or 13 if 2 shared) | Retreat |
| C5 | M | **Schedule durations.** Some titles don't match their times, e.g. "1130am Beginners Hatha Yoga (90min) – Jason" runs 11:30–12:45 (75 min); "3pm Hatha Moon (Level 1, 90min) – Ela" runs 15:00–16:15 | October 2026 schedule |
| C6 | M | **Teachers.** "Ela" (25 classes in October) and "Ellen" (Bhakti, blog author Ellen Arthur) teach but have no Our Team profile. The Privates page names "Jason, Lala and Jodie" as senior teachers, while Our Team lists Lala and Jodie as "YOGA TEACHER" | /schedule/, /privates/, /our-team/ |
| C7 | M | **Author name.** "Amy Effendy" (2 posts) vs "Ami Effendy" (1 post, category "Ami's Articles") | Blog |
| C8 | L | **Address format.** "Jalan Batu Bolong 94A" (footer), "#94A" (contact), "Jl. Pantai Batu Bolong No.94" (privacy) | Footer, Contact, Privacy |
| C9 | L | **Phones.** Landline +62 361 300 3446 appears only on Contact. Email for merchandise shipping is office@ (FAQ) but shipping for books is admin@ | Contact, FAQ, Books |
| C10 | L | **Meditation teacher training dates.** The Kajabi slug says "100hr-meditation-teacher-training" and the card says "JANUARY 3- 18, 2027"; the hero banner image says "3 - 18 january 2027". These agree, but confirm they're current | YTT, hero |
| C11 | M | **"Hatha Yoga Moon" product** (Rp300.000, "3-hour class") is still purchasable, but its poster says **"29 August 1130am – 230pm"** (past), and it isn't announced on Workshops or Schedule | /product/hatha-yoga-moon/ |
| C12 | L | **Prices format** mixes `Rp 170,000`, `Rp 1.350.000`, `Rp.4.200.000`, `Rp500.000`, `650,000` (no Rp) | Rates, Privates, Shop |
| C13 | M | **Map.** FAQ says the map is "on the Contact Page", but Contact has no map | /faq/, /contact/ |

## 4. Spelling and typography errors (documented, not corrected)

| Text as published | Location | Likely intended |
|---|---|---|
| "Indonesian studets" | Rates | students |
| "This passes are not valid…" | Rates | These passes |
| "PRINCIPLE YOGA TEACHER" | Our Team, Octavio | Principal |
| "C0-OWNER" (zero) | Our Team, Emma | CO-OWNER |
| "DEVELOPED A PERSONALIZED YOGA PRACTICE" | Privates | Develop a… |
| "AN OFFERING OF HOPE TP A PERCEPTUALLY…" | Books, Good Lizard | TO |
| "Rode Island, Indonesia" | Senior Teachers | Rote Island? (studio "Boa Vida", boavidarote.com) |
| "Minng become an official…" | Our Team, Ming | Ming became |
| "please let me low if I can apply" | FAQ | know |
| "120x200m" | Retreat, Shared Suites | 120x200cm |
| "Bikrim Yoga" | Our Team, Jason | Bikram |
| "But were he listening?" / "as he enters into my 25th year" | Our Team, Jason | mixed 1st/3rd person |
| "I truely believe…", "suppose to be" | Our Team, Jodie | truly / supposed |
| "Changes to Terms and Cnditions" | Workshop T&C | Conditions |
| "online-trainng-2022.jpg" | file name | (asset only) |
| "Sankalpa-Shakt.jpg" | file name | (asset only) |
| Double space "Traditional  Hatha" | Home H3 | single space |
| "JULY 24. 2027" | YTT | JULY 24, 2027 |

## 5. Sensitive content that needs client review

| # | Item | Location |
|---|---|---|
| S1 | Profanity in the closing line of the blog post "The Howler" ("Ignite the whole f***ing world with your brilliance.") | /the-howler/ |
| S2 | "ICKE/SALVADO TRUTH WARRIORS INTERVIEW" section with video link, a potentially controversial association | /books-by-octavio/ |
| S3 | Strongly worded claims ("charismatic perverts", "destroying Yoga", "no magic pills or peptides") in posts and workshop copy | Tantra post, Kriya workshop |
| S4 | Health-adjacent claims ("DNA repair & physical healing", "Immune System Repair", "10% of their lung capacity") | Schedule titles, Online Trainings |
| S5 | Senior Teachers contains personal email and Facebook links of third parties (2020) | /senior-teachers/ |

These are reproduced faithfully in the content files. Whether to republish them is a business decision.

## 6. Accessibility and UX problems in the original (don't carry forward)

- All promotional text on the hero slides, home tiles and program posters is **baked into images** with **empty alt text**. Sub-page banners are plain photos, but they're also unlabelled.
- Ten sub-pages have no H1, two have two H1s, and Books' only H1 is a secondary section. Heading levels skip (H1 → H5 on FAQ, H2 → H5 on legal pages).
- Global nav shows only 2 links. YTT and Online Trainings are reachable only through home tiles.
- FAQ: 31 fully expanded Q&As with H5 questions.
- The popup auto-opens 500 ms after landing and covers the hero.
- The schedule uses a dense monthly calendar grid that's hard to read on mobile (see 07).
- The reCAPTCHA badge floats over content on every page.
- CF7 validation tips are white text (`#fff`) on a sand background (`#bdb39b`), which gives poor contrast.
- Body text: black on `#bdb39b`. Button text: `#bdb39b` on `#564c44` is 4.01:1 (computed), just under WCAG AA 4.5:1 for normal text. Link colour `#564c44` on `#bdb39b` is also 4.01:1. White CF7 tips on sand are 2.08:1.
- No `wa.me` link even though WhatsApp is the stated booking channel.

## 7. Coverage gaps (what this audit could not verify)

| Gap | Why |
|---|---|
| Form submission, email delivery, PDF generation | Not submitted (would send real enquiries) |
| WooCommerce add-to-cart → Xendit checkout | Not exercised (would create orders) |
| Kajabi newsletter submission | Not submitted |
| MEC month navigation, category filter, event modal | Not clicked. Only the server-rendered month was captured |
| Slider autoplay timing, hover states | Read from CSS/config only |
| Members area (WooCommerce Memberships, Firebase UI) | No public UI found |
| Draft, private or password-protected pages (e.g. page 192 "practice-with-us", 9 "blog") | Not public. Only their IDs are inferable |
| 464 of 466 MEC event pages | Sampled 2. Treated as legacy |
| Kajabi page contents (YTT prices, curricula) | Out of scope (separate platform). Only HTTP status was checked |
| Original high-resolution / RAW photography | Only web-published sizes are reachable |
| Font licence files | Nunito and Inter are open-source (OFL). No other fonts found |

## 8. Questions for the client

1. **Schedule:** Where should class data come from after the rebuild: WordPress/MEC kept headless, a hand-maintained file, or a booking platform (e.g. Momence, Mindbody)?
2. **Workshops and booking:** Keep WooCommerce + Xendit, move to Kajabi, or use enquiry and payment links?
3. **Forms:** Which inbox receives Contact and Privates enquiries? Is the PDF copy required?
4. Which **minimum ages** are correct (C1)? Which **class names and passes** are current (C2, C3)?
5. Should **Ela** and **Ellen** get team profiles? Supply bios and photos if so.
6. **Senior Teachers:** keep, update (new photos needed), or remove?
7. **Retreat:** is a new retreat planned (reuse the template), or should the page be archived?
8. **Blog:** keep all 11 posts? Approve S1–S3? Settle the author name (C7)?
9. **Give Back:** is Kajabi `/give-back` the correct donation destination?
10. **TPO FAQs, TPO pro, Test, German Subscriber, Home Sliders:** confirm they can be dropped.
11. **Legal:** can the 4 T&C pages be consolidated into one? Who approves legal text?
12. Can the client supply **higher-resolution, text-free versions** of the hero banners and poster images? The current ones have text baked in.
13. **Analytics:** GA4 property ID, if any?
14. Should Kajabi program URLs (which change yearly, e.g. `…-2027`) be maintained in one editable config?
15. Is the **landline** (+62 361 300 3446) still active? Should WhatsApp get a direct link?
