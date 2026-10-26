# 03 — Content Inventory (Preservation Reference)

Source: live site `https://www.thepracticebali.com/`, captured **2026-10-26**.
The full extracted text of every page (headings, paragraphs, lists, image references, forms) is in
[`content-extracts/`](content-extracts/), one Markdown file per route. File names map to routes: `__` stands for `/`
(for example, `practice-with-us__rates.md` is `/practice-with-us/rates/`).

This file pulls out the **facts and content that must survive the rebuild**, with their source location. Text is quoted
as published, including original spelling. Known errors are listed in [08-issues-gaps-questions.md](08-issues-gaps-questions.md)
and are **not** corrected here.

Legend: **[V]** verified on the live page · **[!]** see issues file

---

## 1. Business identity & contact (global)

| Item | Value (verbatim) | Source |
|---|---|---|
| Brand name | The Practice | All pages: `<title>` suffix, footer © |
| Site tagline (header) | The Practice Yoga Institute | Header `.site-description`, every page |
| Legal entity | PT THE PRACTICE BALI (T&C); "PT. The Practice Bali, Jl. Pantai Batu Bolong No.94, Canggu, Bali" (Privacy) **[!]** | /terms-conditions/, /privacy-policy/ |
| Address (footer) | Jalan Batu Bolong 94A, Canggu, Bali, Indonesia | Footer, every page |
| Address (contact) | Jalan Batu Bolong #94A, Canggu, Bali, Indonesia | /contact/ |
| Phone (landline) | P:+62 361 300 3446 | /contact/ only **[!]** (not in footer) |
| Mobile / SMS | M: +62 8123 670 2160 (or SMS) | Footer + /contact/ |
| WhatsApp | +6281236702160 | /practice-with-us/faq/ (Q1) |
| Directions | "about 45 mins to 1 hour (west) from the Denpasar Airport … on Batu Bolong about 300m before the beach on the left hand side and opposite a Mexican restaurant called Lacalita" | /practice-with-us/faq/ |
| Google Maps | `https://www.google.com/maps/place/The+Practice+Bali/@-8.6556253,115.131796,15z/…` (lat -8.6556253, lng 115.131796) | /practice-with-us/faq/ link (no embedded map anywhere) |
| Copyright line | © 2026 The Practice | Footer |
| Credit | Built and maintained by Invisible Resources (invisibleresources.com) | Footer |

### Email addresses and their stated purpose [V]

| Email | Purpose as stated | Where |
|---|---|---|
| reception@thepracticebali.com | "Yoga Daily Class Enquiries … Please use this email address ONLY, for all schedule, information or details." | /contact/ |
| admin@thepracticebali.com | "General Enquiries … All other inquiries not related to yoga class or training." Also: book shipping, selling products in shop, T&C disputes | /contact/, /books-by-octavio/, FAQ, T&Cs |
| training@thepracticebali.com | "Yoga Teacher Training Enquiries … ALL YTT related questions" | /contact/, FAQ, T&Cs |
| membership@thepracticebali.com | "The Practice Online Membership Enquiries … ALL TPO Membership related questions" | /contact/, /faqs/ |
| accounts@thepracticebali.com | Buy passes by online payment/transfer; gift vouchers | /practice-with-us/faq/ |
| office@thepracticebali.com | Merchandise shipping quotes | /practice-with-us/faq/ **[!]** (only place used) |
| manager@thepracticebali.com | Affiliate Program Manager | /affiliate-program/ |
| octavio@thepracticebali.com | mailto link (no visible label) | /books-by-octavio/ |

### Social links (header menu modal + footer)

| Network | URL |
|---|---|
| Instagram | https://www.instagram.com/thepractice.official/ |
| YouTube | https://www.youtube.com/c/ThePracticeYoga |
| MeWe | https://mewe.com/p/thepractice1 |

### Global CTA

- Header button on every page: **"JOIN TPOpro NOW"** → `https://thepracticeonline.mykajabi.com/` (new tab).
- Home popup heading: **"RECEIVE MONTHLY MEDITATIONS AND OTHER TOOLS TO ENRICH YOUR LIFE!"** plus a Kajabi-embedded sign-up form (form id `2149070303`).

---

## 2. Home page (`/`) [V]

- H1: **WELCOME TO THE PRACTICE**
- H3 (sub-heading): **"The Practice is a leading institution in lineage-based Traditional  Hatha Yoga education. Evolve your practice. Evolve your life."** (the original has a double space before "Hatha")
- Hero slider: 6 banner images, each linking to a program (see [04-assets-manifest.csv](04-assets-manifest.csv), role `hero-slider`):
  1. Octa-kriya-home.jpg → Kajabi `/kriya-meditation`
  2. Meditation-TT-home → Kajabi `/100hr-meditation-teacher-training`
  3. private-yoga → `/practice-with-us/privates/`
  4. 200hr-new-feb27-home → Kajabi `/200hr-traditional-hatha-teacher-training-2027`
  5. ONLINE-Meditation-TT-home → Kajabi `/100hr-online-meditation-teacher-training-`
  6. 300hr-Bali-home2027 → Kajabi `/bali-300hr-advanced-tantric-hatha-yoga-meditation-2027`
- Home tiles: 10 image-only tiles with no HTML text. Labels exist only inside the images.

| # | Tile image | Destination |
|---|---|---|
| 1 | ytt_web.jpg | /yoga-teacher-training/ |
| 2 | studio-schedule.jpg | /practice-with-us/schedule/ |
| 3 | our_team_new.jpg | /meet-us/our-team/ (redirects to /our-team/) |
| 4 | give-back-1.jpg | Kajabi /give-back |
| 5 | home-books.jpg | /books-by-octavio/ |
| 6 | tpopro.jpg | Kajabi home (TPOpro) |
| 7 | online_trainings_web.jpg | /online-trainings/ |
| 8 | kungfu2024.jpg | https://www.dragonsgatekungfu.com/ (external) |
| 9 | the-practice-series.jpg | Kajabi /the-practice-series-123 |
| 10 | MSF.jpg | https://moonsunfire.com/ (external app) |

---

## 3. Studio classes ("Practice with us" section)

### 3.1 Rates (`/practice-with-us/rates/`) [V]

Policy text:
- "For Level 1 classes and Yin Yoga, we welcome students age 12 years and older."
- "For Level 2, Master Classes, Meditation, Qi Gong and 2hr Yin, we welcome students 15 years and older." **[!]** (the FAQ says 10+)
- "Please let your teacher know before class if you are practicing while pregnant, or if you have an injury."
- "Unless specifically stated, you do not need to book to attend a class. Please arrive 10-15 mins before the class begins."
- "Strictly no late entry."

| Item | Price |
|---|---|
| Drop In Classes | Rp 170,000 |
| Meditation Drop In Classes | Rp 150,000 |
| 2HR Master Class | Rp 200,000 |
| 3 Class Pass | Rp 450,000 |
| 10 Class Pass | Rp 1,350,000 |
| Kitas and YTT students | Rp 140,000 |
| Indonesian studets **[!]** (sic) | Rp 90,000 |
| Drop in Kirtan | Rp. 280,000 (Rp. 200,000 concession, only for anyone with The Practice class passes, Kitas and Indonesian. Showing The Practice passes gives a Rp. 80,000 discount) |
| Note | "This passes are not valid for Master classes with Octavio" **[!]** (sic) |

### 3.2 Class levels and descriptions (`/practice-with-us/class-descriptions/`) [V]

Levels:
- **BEGINNERS:** For new students and complete beginners who are interested in learning how to practice Yoga and Meditation correctly.
- **LEVEL 1:** For all levels, including newer students who are ready to embrace Yoga and Meditation as a part of their daily practice.
- **LEVEL 2:** For students with an existing Yoga practice who want to go deeper into Asana, Pranayama and Meditation. Not suitable for newer students.

Class types (each has an image; full text in `content-extracts/practice-with-us__class-descriptions.md`):

| Class | Image | Summary |
|---|---|---|
| Hatha Yoga – Moon | moon22.jpg | Purify/activate Ida Nadi; clear, calm, stable mind |
| Hatha Yoga – Sun | sun22.jpg | Purify/activate Pingala Nadi; vitalise body, connect to Prana |
| Hatha Yoga – Fire & Hatha Yoga – Masterclass | fire22.jpg | Unite solar/lunar energies at Manipura; Kundalini |
| Beginners Hatha Yoga | morning.jpg | Fundamentals of Hatha Yoga |
| Yin Yoga | yin.jpg | Meditative, deep-tissue, long-held floor postures |
| Meditation | vital22.jpg | Traditional Yogic meditation and Pranayama. All welcome |
| Raja Yoga Meditation | kundalini22.jpg | "Yoga's most treasured Meditation technique." Some experience encouraged |
| Bhakti Yoga | kirtan22.jpg | Devotional group mantra chanting. All levels |
| Qi Gong | qi-gong.jpg | Grounding, Rooting, Centering; energy sensitivity |
| Jianfa | wing-chu.jpg | Kung Fu double-edge sword method |

Classes on the live schedule that have **no** description: "Yang to Yin", "852Hz Meditation to activate the 3rd Eye", "528Hz Meditation for DNA repair & physical healing". **[!]**

### 3.3 Schedule (`/practice-with-us/schedule/`) [V for October 2026]

- A Modern Events Calendar (MEC) monthly calendar with month navigation (September ← **October 2026** → November) and a "Category" filter.
- **154 class occurrences** in October 2026. The structured data is in [`data/schedule-october-2026.json`](data/schedule-october-2026.json).
- Teachers on the schedule: Jodie (31), Lala (31), Jason (27), Ming (26), Ela (25), Octavio (12), Ellen (2). **[!]** Ela and Ellen have no profile on /our-team/.
- Typical weekday pattern (week of 12–18 Oct 2026): 8:00 Qi Gong (Ming, Mon–Fri) · 8:30 Hatha Sun/Moon · (Thu 9:30 Jianfa) · 10:00 Hatha / Yang to Yin · 11:30 Beginners Hatha or Octavio's Meditation (Rp 150k) · 15:00 Yin / Hatha Moon / Beginners · (Wed 16:30 Raja Yoga Meditation) · occasional 18:30 Bhakti Yoga (Ellen).
- Class titles carry facts inline, for example "(Level 1, 90min)", "(Max 12 People)", "(200K)", "(150k)".
- Footnote under the calendar: **"All classes include Asana, Pranayama & Meditation."** / **"Strictly no late entry."**

### 3.4 Workshops (`/practice-with-us/workshops/`) [V]

Heading: **WORKSHOPS & FREE PRESENTATIONS**

| Event | Format / teacher | Date & time | Price | CTA |
|---|---|---|---|---|
| KNOW YOUR ENERGY & ENRICH YOUR LIFE | FREE 60min PRESENTATION WITH JODIE CURTIS | 29 SEPTEMBER 630pm **[!]** (past, no year) | Free | none |
| AN INTRODUCTION TO YIN YOGA | HALF DAY WORKSHOP WITH JODIE CURTIS | 4 OCTOBER 10am-3pm **[!]** (past) | Rp 500,000 | BOOK NOW → /product/an-introduction-to-yin-yoga/ |
| INTRODUCTION TO KRIYA MEDITATION | 2 DAY WORKSHOP WITH OCTAVIO SALVADO | 31 OCTOBER – 1 NOVEMBER 830am-7pm | Rp 3,500,000 | BOOK NOW → /product/introduction-to-kriya-meditation/ |

Yin workshop schedule: 10am–11.30am An overview of Yin Yoga · 11.30am–12.30pm Break · 12.30pm–3pm Two and a half hour Yin masterclass.
Kriya workshop: long sales copy (about 400 words). Students receive video recordings of all practices.

### 3.5 Privates (`/practice-with-us/privates/`) [V]

**Private Hatha Yoga** ("either at home or at The Practice"):

| Group size | Price |
|---|---|
| 1 – 2 people | Rp 1.350.000* |
| 3 – 6 people | Rp 1.700.000* |
| 7 – 10 people | Rp 2.000.000* |
| 11 – 15 people | Rp 2.400.000* |
| 16 – 30 people | Rp. 3.500.000* |
| 31 – 50 people | Rp.4.200.000* |

The asterisk is never explained on the page. **[!]**

**"DEVELOPED A PERSONALIZED YOGA PRACTICE"** **[!]** (sic): 10 personalised 1-on-1 sessions, in person or online, with senior teachers Jason, Lala and Jodie. **10 sessions for Rp 10.000.000**.

**1 ON 1 TRAINING WITH MASTER MING** (Qi Gong, Tai Chi, Kung Fu):

| Package | Price per person |
|---|---|
| 1 x private | 650,000 |
| 3 x private | 1,700,000 |
| 5 x private | 2,500,000 |
| 10 x private | 4,500,000 |

**YANTRA NUMEROLOGY WITH JASON** (Vedic numerology / Ank Jyotisha):
- SINGLE Session (1 Person): Rp 1,888,888, 60 minutes (printed & digital materials included)
- COUPLE Session (2 Persons): Rp 2,999,999, 75–90 minutes
- Gift options in person or via ZOOM. Discounts for The Practice YTT graduates on request.

**Booking form** "USE THE FORM BELOW TO BOOK". See [06](06-functionality-and-dependencies.md) for its fields.

**Private T&Cs** (`/practice-with-us/privates/terms-conditions/`): payment due 72 h before; no cancellation within 48 h (no refund); 72–48 h = 50% refund; more than 72 h = full refund (minus fees); extra rules for groups of 10+ (one change allowed up to 48 h before).

### 3.6 FAQ (`/practice-with-us/faq/`) [V]

31 Q&A pairs. The full text is in `content-extracts/practice-with-us__faq.md`. Facts worth keeping:
- Drop-in: come 15 min early; "limited to 12 pax" classes: come early or WhatsApp.
- All props provided (bolsters, mats, blocks, straps, hand towels, eye pillow).
- Durations: Qigong 75 min; regular 75 and 90 min; Master classes and Sunday Yin 120 min; Kirtan 90–120 min.
- Credit cards accepted. Showers available (bring a towel). CCTV in storage areas.
- Passes honoured for up to 2 years, no refunds; Unlimited Pass not transferable or freezable **[!]** (no Unlimited Pass is listed on Rates).
- No photos or video in class. Onsite shop sells yoga wear and merchandise; shipping from Bali on request.
- Pregnancy: Restorative Hatha, Beginners Hatha or Moon Hatha recommended **[!]** ("Restorative Hatha" is not on the current schedule).
- Kids: Beginners/Restorative 10+; Intermediate, Master Class and 2hr Yin 15+ **[!]** (conflicts with Rates).
- Hiring: priority to 200h/300h YTT graduates; "at this stage we do not have any teaching positions available."
- No day care.
- "What is TPOpro?" explains the online platform (monthly classes, recorded free Tuesday-night presentations).

### 3.7 TPO FAQs (`/faqs/`) [V]

Three Q&As about TPO membership (Kajabi). It mentions "36 new practices from Octavio including an 18-class Kundalini series and a 6-class Yoga Sutra series" and "swapping over to the new app". It's an orphan page, not linked from any menu.

---

## 4. Teacher trainings (`/yoga-teacher-training/`) [V]

Heading: **YOGA TEACHER TRAININGS**. Six cards. Every CTA is "CLICK HERE TO LEARN MORE" and goes to Kajabi.

| Program | Dates (verbatim) | Kajabi slug |
|---|---|---|
| INTRODUCTION TO KRIYA MEDITATION | OCTOBER 31 – NOVEMBER 1 | /kriya-meditation |
| BALI 200 HOUR TRADITIONAL HATHA YOGA TEACHER TRAINING | FEBRUARY 1 – 20, 2027 | /200hr-traditional-hatha-teacher-training-2027 |
| BALI 100 HOUR MEDITATION TEACHER TRAINING | JANUARY 3- 18, 2027 | /100hr-meditation-teacher-training |
| ONLINE 100 HOUR MEDITATION TEACHER TRAINING | MARCH 6 – APRIL 10, 2027 (5-week online format) | /100hr-online-meditation-teacher-training- |
| ONE YEAR SADHANA DEVELOPMENT PROGRAM & ONLINE 300HR ADVANCED TEACHER TRAINING | JULY 24. 2027 – JUNE 26, 2028 (12 months, 1 weekend a month) | /Sadhana-Development-Program-and-Online-Advanced-300Hr |
| BALI 300 HOUR ADVANCED TANTRIC HATHA YOGA TEACHER TRAINING 2027 | NOVEMBER 8 – DECEMBER 10, 2027 | /bali-300hr-advanced-tantric-hatha-yoga-meditation-2027 |

No YTT prices appear on this page; pricing lives on Kajabi. Card body copy is in `content-extracts/yoga-teacher-training.md`.

---

## 5. Online trainings (`/online-trainings/`) [V]

Heading: **ONLINE TRAININGS**. 12 cards, all "AVAILABLE ALL YEAR", with IDR and USD prices:

| Program | Price | Teacher line | CTA → Kajabi |
|---|---|---|---|
| TRADITIONAL HATHA YOGA & AYURVEDA 50HR PRACTICE & STUDY IMMERSION (NEW COURSE) | Rp 9,000,000 (USD 499) | ONLINE STUDY COURSE WITH OCTAVIO & EMMA SALVADO | **no CTA link** **[!]** |
| BASIC BREATHWORK COURSE TO DE-STRESS & RE-BALANCE | Rp 615,000 (USD 39) | WITH OCTAVIO SALVADO | /basic-breathwork |
| TEACHER'S TOOLBOX | Rp 1,500,000 (USD 95) | WITH OCTAVIO SALVADO | /Teachers-Toolbox |
| 80DAY BREATHWORK PROGRAM | Rp 1,800,000 (USD 108) | IMMUNE SYSTEM REPAIR WITH OCTAVIO SALVADO | /80day-complete-immune-system-repair |
| ONLINE HOW TO MEDITATE CORRECTLY | Rp 3,950,000 (USD 239) | — | /how-to-meditate-correctly |
| YOGA SUTRA MASTER TRAINING | Rp 7,100,000 (USD 429) | MASTER TRAINING WITH OCTAVIO SALVADO | /yoga-sutra-master-training |
| YANTRA & YOU | Rp 4,900,000 (USD 299) | ONLINE TRAINING WITH JASON WINTERS | /yantra-and-you |
| ONLINE 50Hr TRAINING | Rp 7,450,000 (USD 449) | INTENSIVE TRAINING WITH OCTAVIO SALVADO | /50hr-online-training |
| 200Hr TT HOME STUDY PROGRAM | Rp 21,550,000 (USD 1299) | — | /200hr-hatha-yoga-home-study-program |
| UPSKILL YOUR YOGA TEACHING | Rp 4,950,000 (USD 299) | — | /upskill |
| IGNITE THE SACRED FIRE | Rp 5,800,000 (USD 349) | TEACHINGS ON KUNDALINI WITH OCTAVIO SALVADO | /ignite-the-sacred-fire-evergreen |
| YOUR DHARMA IS GREATNESS | Rp 7,100,000 (USD 429) | BHAGAVAD GITA TRAINING WITH OCTAVIO SALVADO | /your-dharma-is-greatness-evergreen |

All 11 linked Kajabi pages returned HTTP 200 on 2026-10-26.

---

## 6. People

### 6.1 Our Team (`/our-team/`) [V]

Intro H1 "OUR TEAM" and H2 "We are a world-class team of teachers who are all committed to the Sri Vidya Traditional lineage." followed by two intro paragraphs.

| Name | Role (verbatim) | Portrait |
|---|---|---|
| OCTAVIO SALVADO | CO-FOUNDER, CO-OWNER, PRINCIPLE YOGA TEACHER **[!]** ("Principle") | 2026/07/octa-profile.jpg |
| EMMA SALVADO | C0-OWNER, YTT MANAGER, SENIOR YOGA TEACHER **[!]** (zero instead of the letter O) | 2021/01/emma-s-profile.jpg |
| ONG WEN MING | KUNG FU MASTER | 2024/01/ming.jpg |
| JASON WINTERS | SENIOR YOGA TEACHER | 2023/01/jason-2023.jpg |
| LALA SIPAHUTAR | YOGA TEACHER | 2024/10/lala.jpg |
| JODIE CURTIS | YOGA TEACHER | 2026/07/jodie-profile.jpg |

Bios run from about 150 to 450 words each. Full text is in `content-extracts/our-team.md`. Verified facts: Octavio has taught since 2006 and was initiated into Kriya Yoga at 27 in Northern India. Ming was born in 1971 in Madiun, East Java, has 40+ years of martial arts, teaches full time in Bali for 27+ years, and is a 20th-generation Chen style Taijiquan disciple (2018). Lala was born in Jakarta in 1992 and did her 200hr at The Practice in 2023. Jodie started in 2022 and has taught at The Practice since 2025. Jason did his 200hr at The Practice in 2018 and his 300hr in 2021.

Section **OUR LINEAGE** (a second H1): Parampara, then sub-section **MOON SUN FIRE** (H2), ending "OM TAT SAT." CTAs: "Visit Us" → /practice-with-us/schedule/ · "OR" · "Train With Us Today" → `/the-practice-online/` **[!] 404**.

### 6.2 Senior Teachers (`/senior-teachers/`) [V]

Heading: **PRACTICE SENIOR CERTIFIED TEACHERS**. Eight graduate teachers with location, current studio and social links:
Maria Holgersson (Gothenburg, Sweden) · Dr. Nora Jacob (Munich, Germany) · Joseph Clifford (Melbourne, Australia) · Martina Wegscheider ("Rode Island" **[!]**, Indonesia) · Martyna Tetera (Sumba Island, Indonesia) · Amy Bassett (Byron Bay, Australia) · Sara Levi (Italy, France & Bali) · Jane Corban (Australia).
**All 8 portrait images return 404** **[!]**. The page is in no menu. It's reached only through the inline "Our senior teachers" link in the Our Team intro (`/meet-us/senior-teachers/` → redirect). Content dates from 2020 (page created 2020-05-21) and may be stale.

---

## 7. Other offerings

### 7.1 Books by Octavio (`/books-by-octavio/`) [V]

| Title | Subtitle | Price |
|---|---|---|
| MOON SUN FIRE TRADITIONAL HATHA YOGA | THE ORIGINAL SCIENCE OF SELF EXCELLENCE & SOUL REMEMBRANCE | Rp 650,000 (US$ 40) |
| GOOD LIZARD | EPISODE 1: THE YOGA SUTRA: AN OFFERING OF HOPE TP **[!]** A PERCEPTUALLY ENSLAVED HUMANITY FROM THE SERPENT KING, PATANJALI | Rp 550,000 (US$ 35) |
| STOKE THE SACRED FIRE | EPISODE 2: THE TRUTH AND LIES ABOUT TANTRA | Rp 550,000 (US$ 35) |
| YOUR DHARMA IS GREATNESS | EPISODE 3: CULTIVATING SELF EXCELLENCE THROUGH THE LENS OF THE BHAGAVAD GITA | Rp 550,000 (US$ 35) |
| REMEMBER WHO YOU ARE | (children's guide to Samkhya philosophy) | Rp 450.000 (US$ 25) |

Each book says: "AVAILABLE AT THE STUDIO" and "Additional Fee for International Shipping, Please email admin@thepracticebali.com". There's no online purchase.
Section **ICKE/SALVADO TRUTH WARRIORS INTERVIEW**, "FILMED LIVE AT LIGHTHOUSE STUDIO, BALI. FEB 27TH 2023": a thumbnail image linking to Kajabi `/icke-salvado`. **[!]** This is potentially sensitive content; flag it for client review.

### 7.2 Give Back (`/give-back-to-the-practice/`) [V]

H2 "GIVE BACK TO THE PRACTICE" · "Charitable Donations that will go towards truly changing lives." · "SHARING TRADITIONAL YOGA AND TRANSFORMING LIVES." · ends "Be a part of the impact. WE are The Practice." A collage image. **There's no donate button on this page.** The home tile links straight to Kajabi `/give-back`. **[!]** The page isn't linked from any navigation.

### 7.3 Women's Yoga & Wellness Retreat "SVASTHA" (`/womens-yoga-and-wellness-retreat/`) [V] — **outdated**

With Emma Salvado, **6th – 12th MAY 2024**, Canggu, Bali. The event is in the past. **[!]** Venue: "Oasis" eco retreat centre, 2000 sqm, 500 m from Nelayan Beach.

| Room | Price per person (USD, all-inclusive) |
|---|---|
| 4 Bungalows | $ 4000 (Single Occupancy) |
| 6 King Suites | $3500 (Single Occupancy) |
| 3 Shared Suites **[!]** (the room card says "2 Available") | $3000 (Double Occupancy) |
| 1 Quad Room | $2500 (Quadruple Occupancy) |

The page also has highlights, what's included and not included, a facilities list and a booking form. It isn't linked from any navigation.

### 7.4 Affiliate Program (`/affiliate-program/`) [V]

A welcome video (YouTube `1JXTWBUmQHU`) and an Affiliate PDF. Download assets for 6 programs: Home Study, Yoga Sutra, 50hr Hatha, Kundalini, YDIG, Immune Repair. Each has SOCIAL MEDIA IMAGES (zip), KEY MESSAGES (pdf), SOCIAL MEDIA POST TEMPLATE (pdf) and VIDEO YOUTUBE LINK. Contact: manager@thepracticebali.com. Linked from the mobile menu ("Affiliate"). All 19 downloads returned 200. The full list is in [04-assets-manifest.csv](04-assets-manifest.csv) under the "Downloads" note in [06](06-functionality-and-dependencies.md).

### 7.5 TPO pro (`/tpo-pro-2/`) [V]

"Get Ready for The Next Level in Dedicated Home Practice", a YouTube video `z67NROET_fc` and a description (8 live-stream classes per month, monthly Zoom calls, a catalogue of hundreds of practices). It ends "**Coming Soon!**" **[!]** (TPOpro is already live on Kajabi). It's an orphan page.

### 7.6 Shop / WooCommerce (`/shop/`, `/product/*`) [V]

| Product | Price | Description (short) |
|---|---|---|
| An Introduction to Yin Yoga | Rp500.000 | Jodie half-day workshop |
| Hatha Yoga Moon | Rp300.000 | "comprehensive 3-hour class … activate your parasympathetic nervous system" **[!]** (not on Workshops page) |
| Introduction to Kriya Meditation | Rp3.500.000 | Octavio 2-day workshop |

All three are in category "Uncategorized".

---

## 8. Blog / editorial (11 posts) [V]

There's no blog index page. The "Blog" menu item points to `?page_id=9`, which returns **404** **[!]**. Posts are reachable only by direct URL, category archives, search and the RSS feed. The author account on every post is `tp_admin`. The real author is written as the first line "By …".

| Published | Title | Author (byline) | Category | Words | Image |
|---|---|---|---|---|---|
| 2020-10-26 | Fall in love with taking care of yourself = Yoga | Amy Effendy **[!]** | Uncategorized | ~930 | 2020/10/i-love-me.jpg |
| 2020-11-28 | Journaling | Emma Salvado | Emma's Articles | ~1170 | 2020/11/Journaling.jpg |
| 2020-12-18 | The Hanumān Chālīsa | Ellen Arthur | Ellen's Articles | ~640 | 2020/12/hanuman.jpg |
| 2021-01-27 | The Howler | Octavio Salvado | Octavio's Articles | ~1050 | 2021/01/the-howler.jpg |
| 2021-03-01 | Healing The Feminine | Emma Salvado | Emma's Articles | ~830 | 2021/03/Healing-The-Feminine.jpg |
| 2021-04-05 | Sankalpa Shakti – The power within you | Amy Effendy **[!]** | Ami's Articles | ~1510 | 2021/04/Sankalpa-Shakt.jpg |
| 2021-04-26 | Vedic mantra and Kirtan what's the difference? | Ellen Arthur | Ellen's Articles | ~800 | 2021/04/Vedic-mantra-and-Kirtan.jpg |
| 2021-06-07 | Anandamayi Ma – The Bliss Permeated Mother | Emma Salvado | Emma's Articles | ~1050 | 2021/06/Anandamayi-Ma-…jpg |
| 2021-07-04 | Tantra is Not About Sex. Don't Get Distracted. | Octavio Salvado | Octavio's Articles | ~720 | 2021/07/Tantra-is-Not-About-Sex…jpg |
| 2021-09-08 | Breathe | Ami Effendy | Ami's Articles | ~1190 | 2021/09/breathe-blog.jpg |
| 2023-09-21 | Why is It Better to HOLD Asana Poses Instead of Constantly Moving Through Them in a Yoga Class? | Jason Winters | Jason's Articles | ~380 | 2023/09/jason.jpg |

Categories: Uncategorized (1), Octavio's Articles (2), Ellen's Articles (2), Ami's Articles (2), Emma's Articles (3), Jason's Articles (1).
Full article text is in `content-extracts/<slug>.md`. 11 posts with 11 unique feature images fits the Phase 2 limit of 10 images on the blog index if the index shows 10 or fewer, or uses text-only cards (see [09](09-phase-2-recommendations.md)).

---

## 9. Legal

| Page | Notes |
|---|---|
| /privacy-policy/ | Generic TermsFeed template (about 2,100 words). It names "PT. The Practice Bali, Jl. Pantai Batu Bolong No.94". The only legal link in the footer. |
| /terms-conditions/ | General T&C for online courses. It defines "20Hr The Great Wisdom Tradition" **[!]**, which no longer appears as a product. Payment via PayPal. 48 h cooling-off, then 100% non-refundable. |
| /practice-with-us/workshops/terms-conditions-2/ | Near-duplicate of the T&C above. Defines "Chakra Healing" **[!]**. Not linked from the Workshops page. |
| /practice-with-us/privates/terms-conditions/ | Specific private-session terms (see 3.5). Linked from Privates. |
| /womens-yoga-and-wellness-retreat/terms-conditions/ | Near-duplicate T&C adapted for the retreat (transfer up to 30 days before). |

---

## 10. Duplicate, repetitive, outdated or low-priority content

| Content | Where it repeats | Recommendation |
|---|---|---|
| Emma Salvado bio | /our-team/ and /womens-yoga-and-wellness-retreat/ (rewritten version) | Keep one canonical bio |
| Generic T&C body | 3 near-identical pages | Consolidate into one T&C page with sections for courses, workshops, privates and retreats (needs client legal sign-off) |
| Hero slider banners | Same images as the YTT page cards (different crops) | Use once per context |
| "Back To Homepage" + sub-nav | Every sub-page | Replace with proper global navigation |
| Kriya Meditation workshop | /yoga-teacher-training/, /practice-with-us/workshops/, product page, hero slide | Keep one canonical detail with a single booking path |
| Workshops dated 29 Sep and 4 Oct | /practice-with-us/workshops/ | Past events, so confirm with client |
| Retreat May 2024 | /womens-yoga-and-wellness-retreat/ | Outdated. Archive, or ask client |
| /test/ (2025 YTT dates and prices) | Orphan page | Exclude. Legacy test page, and its Kajabi links 404 |
| /tpo-pro-2/ "Coming Soon!" | Orphan page | Exclude or replace with a Kajabi link |
| /home-sliders/ | Internal content source for the hero slider | Not a public route |
| /german-subscriber/ | Empty page (title only) | Exclude |
| Senior Teachers | 2020 content with broken images | Review with client |
| 466 MEC event pages | /all-events/<slug>/ | Thin, mostly expired. Don't rebuild as individual pages |
