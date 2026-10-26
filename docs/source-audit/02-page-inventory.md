# 02 — Page & Route Inventory

Captured 2026-10-26. Route sources: XML sitemap (`/wp-sitemap.xml`), WP REST API (`/wp-json/wp/v2/pages`, `/posts`),
header/mobile/footer menus, in-page links, and a set of manual probes.
Status = HTTP status from `curl -L` on 2026-10-26. Page IDs and dates come from the REST API ([data/wp-api-pages.json](data/wp-api-pages.json)).

**Recommendation key:** **Implement** = build in Phase 2 · **Merge** = fold into another page · **Legacy** = keep only as a redirect · **Exclude** = don't build · **Review** = client decision needed

## 1. Route table

### 1.1 Navigation and primary pages

| Route | Title | Type | Status | Linked from | WP template | Created → modified | Recommendation |
|---|---|---|---|---|---|---|---|
| `/` | Welcome to The Practice (`<title>`: "The Practice – The Practice Yoga Institute") | Home | 200 | Logo, mobile menu "Home" | template-banner | 2020-05-13 → 2026-07-16 | **Implement** |
| `/practice-with-us/schedule/` | Schedule | Main nav | 200 | Header (desktop left), mobile menu, home tile, sub-nav | template-sub_pages | 2020-05-22 → 2026-04-08 | **Implement** |
| `/contact/` | Contact | Main nav | 200 | Header (desktop right), mobile menu | template-banner | 2020-05-13 → 2026-04-08 | **Implement** |
| `/practice-with-us/class-descriptions/` | Descriptions | Secondary (studio) | 200 | Studio sub-nav | sub_pages | → 2026-07-22 | **Implement** |
| `/practice-with-us/workshops/` | Workshops | Secondary (studio) | 200 | Studio sub-nav | sub_pages | 2022-01-01 → 2026-09-29 | **Implement** |
| `/practice-with-us/rates/` | Rates | Secondary (studio) | 200 | Studio sub-nav, FAQ | sub_pages | → 2026-09-30 | **Implement** |
| `/practice-with-us/privates/` | Privates | Secondary + enquiry | 200 | Studio sub-nav, hero slide 3 | sub_pages | → 2026-09-14 | **Implement** |
| `/practice-with-us/faq/` | FAQs | Secondary (studio) | 200 | Studio sub-nav, Contact | sub_pages | → 2026-09-14 | **Implement** |
| `/yoga-teacher-training/` | Yoga Teacher Trainings | Listing (programs → Kajabi) | 200 | Home tile 1 | sub_pages | 2021-06-25 → 2026-10-16 | **Implement** |
| `/online-trainings/` | Online Trainings | Listing (programs → Kajabi) | 200 | Home tile 7 | sub_pages | 2020-05-22 → 2026-10-24 | **Implement** |
| `/our-team/` | Our Team | About / people | 200 | Home tile 3 (via `/meet-us/our-team/` redirect) | sub_pages | 2020-05-20 → 2026-08-01 | **Implement** |
| `/books-by-octavio/` | Books by Octavio | Listing (offline sale) | 200 | Home tile 5 | sub_pages | 2023-11-30 → 2026-02-19 | **Implement** |
| `/affiliate-program/` | Affiliate | Partner resource | 200 | Mobile menu "Affiliate" | sub_pages | 2021-09-30 → 2022-12-15 | **Review** (keep as an unlisted utility page) |
| `/privacy-policy/` | Privacy Policy | Legal | 200 | Footer | sub_pages | 2020-05-11 → 2026-04-08 | **Implement** |

### 1.2 Orphan or secondary pages (in the sitemap, not in any menu)

| Route | Title | Type | Status | Notes | Recommendation |
|---|---|---|---|---|---|
| `/senior-teachers/` | Senior Teachers | People | 200 | Not in any menu; reached only through the inline "Our senior teachers" link in the Our Team intro (old URL `/meet-us/senior-teachers/`, which redirects). 8 graduate profiles from 2020. **All portraits 404** | **Review** (rebuild only if the client confirms the content is current; images must be re-supplied) |
| `/give-back-to-the-practice/` | Give Back To The Practice | Donation landing | 200 | No donate CTA. The home tile goes straight to Kajabi `/give-back` | **Merge** (short section or page that links to the Kajabi donation page) |
| `/womens-yoga-and-wellness-retreat/` | Women's Yoga and Wellness Retreat | Event detail + booking form | 200 | Event was 6–12 May 2024, **past** | **Review** (archive, or reuse the template for a future retreat) |
| `/womens-yoga-and-wellness-retreat/terms-conditions/` | Terms & Conditions | Legal | 200 | Retreat T&C | Merge into consolidated T&C |
| `/practice-with-us/privates/terms-conditions/` | Terms & Conditions | Legal | 200 | Linked from Privates | **Implement** (or as a section of Privates) |
| `/practice-with-us/workshops/terms-conditions-2/` | Terms & Conditions | Legal | 200 | Not linked from Workshops. Generic course T&C | Merge |
| `/terms-conditions/` | Terms & Conditions | Legal | 200 | Generic course T&C. Its sidebar lists **every page** on the site, including Test and German Subscriber | **Implement** as the single consolidated T&C |
| `/faqs/` | FAQs (TPO) | FAQ | 200 | 3 TPO membership Q&As | Merge into the main FAQ under a "TPO / Online" group |
| `/tpo-pro-2/` | TPO pro | Landing | 200 | Says "Coming Soon!" but TPOpro is live on Kajabi | **Exclude** (header CTA already covers TPOpro) |
| `/home-sliders/` | Home Sliders | Internal content holder | 200 | Feeds the home hero slider | **Exclude** (data only) |
| `/test/` | Test | Draft / test | 200 | Old 2025 YTT dates/prices. Its Kajabi links 404 | **Exclude** |
| `/german-subscriber/` | German Subscriber | Empty | 200 | Title only, no content | **Exclude** |

### 1.3 WooCommerce

| Route | Status | Notes | Recommendation |
|---|---|---|---|
| `/shop/` | 200 | 3 products, sort dropdown | **Review** (workshop booking path, see 06) |
| `/product/an-introduction-to-yin-yoga/` | 200 | Rp500.000. Target of "BOOK NOW" on Workshops | Review |
| `/product/hatha-yoga-moon/` | 200 | Rp300.000. Not promoted on any page | Review |
| `/product/introduction-to-kriya-meditation/` | 200 | Rp3.500.000. Target of "BOOK NOW" on Workshops | Review |
| `/product-category/uncategorized/` | 200 | Same as shop | Exclude |
| `/cart/` | 200 | Empty cart | Depends on commerce decision |
| `/checkout/` | 200 → **redirects to /cart/** when the cart is empty | | Depends on commerce decision |
| `/my-account/` | **404** | No account page is published | Exclude |

### 1.4 Blog / editorial

| Route | Status | Notes | Recommendation |
|---|---|---|---|
| 11 post routes at the root, e.g. `/the-howler/` (full list in [03 §8](03-content-inventory.md#8-blog--editorial-11-posts-v)) | 200 | Twenty Twenty single template | **Implement** as `/blog/<slug>` with redirects from the old root slugs (low priority) |
| `/category/{octavios,ellens,amis,emmas,jasons}-articles/`, `/category/uncategorized/` | 200 | Author-as-category archives | **Legacy** (redirect to the blog index, or filter by author) |
| `/author/0a5a4awtdiz1cclktgiby0m07hy2/` | 200 | `tp_admin` author archive exposing an obfuscated username | **Exclude** |
| `/blog/` | **404** | No blog index exists | Create in Phase 2 if the blog is kept |
| `/?page_id=9` (mobile-menu "Blog") | **404** | Broken menu link | Fix by pointing to a new `/blog` |
| `/feed/` | 200 | RSS | Optional |
| `/?s=…` | 200 | WordPress search, opened from the header search modal | Optional (low value; see 06) |

### 1.5 Events (Modern Events Calendar)

| Route | Status | Notes | Recommendation |
|---|---|---|---|
| `/all-events/` | 200 | MEC archive: the same monthly calendar as Schedule, without the banner/sub-nav. No canonical tag | **Legacy** → redirect to `/schedule` |
| `/all-events/<slug>/` × **466** | 200 (sampled 2) | One thin page per class occurrence: date, time, title, often "Expired!" | **Legacy / Exclude** (don't generate pages; the schedule view shows the data) |

### 1.6 Broken, missing or uncertain routes

| Route | Status | Where it's referenced |
|---|---|---|
| `/practice-with-us/` | 404 | Parent of all studio pages (page ID 192, not public) |
| `/the-practice-online/` | 404 | Our Team, "Train With Us Today" button |
| `/?page_id=9` | 404 | Mobile menu "Blog" |
| `/meet-us/our-team/` | 301 → `/our-team/` | Home tile "our team" |
| Kajabi `/200hr-ytt`, `/50hr-yin-training`, `/bali-300hr-…-2026` | 404 (Kajabi) | `/test/` only |
| `/wp-content/uploads/2020/06/*.jpg` (8 portraits) | 404 | `/senior-teachers/` |

---

## 2. Shared layout and components

| Component | Description | Appears on |
|---|---|---|
| **Header** (desktop ≥1000px) | Sand `#bdb39b` bar. Centred circular logo badge overlapping the bottom edge. "SCHEDULE" on the left and "CONTACT" on the right of the logo (uppercase, bold). "JOIN TPOpro NOW" button far right (brown `#564c44`). Search toggle is hidden on desktop | All |
| **Header** (mobile/tablet) | "Search" and "Menu" toggles with the centred logo. The menu opens a full-screen sand modal | All |
| **Mobile menu modal** | Two menus: an "expanded" menu (Contact) and a mobile menu (Home, Contact, Schedule, Blog, Affiliate), Instagram/YouTube/MeWe icons and the JOIN TPOpro button | All |
| **Search modal** | WordPress search form | All |
| **Page banner** | A full-width photographic strip (1487×588 source) on most sub-pages (e.g. `rates2024.jpg`: three teachers against a plain wall). **No text in the banner**; the page title sits below the sub-nav | All sub-pages except Give Back, Test, German Subscriber, Privacy (empty img), Workshop T&C (empty img) |
| **Sub-pages nav** | Tan `#ae8656` strip: "Back To Homepage" plus links to sibling pages (Schedule · Descriptions · Workshops · Rates · Privates · FAQs). On `/terms-conditions/` (3-level template) it lists **all** site pages | `template-sub_pages*` pages |
| **Content column** | Twenty Twenty `.entry-content` narrow column (about 58rem wide) with Gutenberg blocks: columns, images, headings, paragraphs, buttons, separators | All |
| **Program card** | Portrait image (819×1024 or 1024×1024 IG-style poster) + H3 title (H2 on Workshops) + date/price lines + paragraph + "CLICK HERE …" button | YTT, Online Trainings, Workshops, Books, Test |
| **Profile block** | Image beside H3 name, H5 role/location, then bio | Our Team, Senior Teachers |
| **Footer widgets** | Tan `#ae8656`. Social icons + Privacy Policy link + address + mobile number | All |
| **Footer credits** | © 2026 The Practice · "Built and maintained by Invisible Resources" · "To the top ↑" | All |
| **Home popup** | Popup Maker #10898: auto-opens after 500 ms, Kajabi newsletter form, "X" close, cookie set for 1 month on close | Home only |
| **reCAPTCHA v3 badge** | Fixed bottom-right badge | All pages (CF7 loads it globally) |

---

## 3. Page-by-page section inventory

Sections are listed in their original top-to-bottom order. Text, images and CTAs are documented in [03](03-content-inventory.md). Screenshots are in [`screenshots/`](screenshots/) (`<page>__<viewport>-<width>.jpg`).

### Home `/`
1. Header · 2. **Hero slider** (6 slides, 1024×405 / 2023×800, arrows + dots, slick.js; text baked into images) · 3. Intro: H1 "WELCOME TO THE PRACTICE" + H3 strapline, centred · 4. **Two-column tile grid** of 10 linked images, 507×340, image-only, no HTML text · 5. Footer · 6. Newsletter popup.
- *Purpose:* a portal to everything else. *Interactive:* slider and popup. *SEO:* no meta description, no OG tags. The H1 is generic.
- *Risks:* every label and date sits inside images, so it isn't accessible or indexable, and the alt text is empty. Two external destinations (Dragon's Gate Kung Fu, MoonSunFire).
- *Phase 2:* replace the image-only tiles with real text cards built from the same photography. Keep a hero carousel of current programs, or a single hero with an "Upcoming trainings" list.

### Schedule `/practice-with-us/schedule/`
1. Banner `schedule_new.jpg` · 2. Sub-nav · 3. H2 "SCHEDULE" (no H1) · 4. **MEC monthly calendar**: category select, prev/next month (AJAX), 7-column grid, each event showing title + time, with a tooltip/modal on click · 5. Footer.
- *Data:* 154 entries in Oct 2026 ([data/schedule-october-2026.json](data/schedule-october-2026.json)).
- *Risks:* the MEC data lives in WordPress. Phase 2 needs a data source (see 06). The monthly grid is hard to read on mobile.
- *Phase 2:* a weekly list or agenda view grouped by day, with level, duration, teacher, capacity tags and price badges.

### Class Descriptions `/practice-with-us/class-descriptions/`
1. Banner · 2. Sub-nav · 3. H2 "CLASS DESCRIPTIONS" (no H1) · 4. Level definitions (Beginners / Level 1 / Level 2) · 5. 10 class blocks (image + H3 + paragraph).
- *Phase 2:* class cards. Consider linking each card to the schedule filtered by class.

### Workshops `/practice-with-us/workshops/`
1. Banner · 2. Sub-nav · 3. H2 "WORKSHOPS & FREE PRESENTATIONS" (no H1) · 4. Three event blocks (poster image + H2 + teacher line + date + price + copy + BOOK NOW).
- *Risks:* two events are past. The booking runs through WooCommerce products.

### Rates `/practice-with-us/rates/`
1. Banner · 2. Sub-nav · 3. H2 "RATES" (no H1) + policy paragraphs · 4. H2 "YOGA PRICES" + price lines (plain paragraphs, not a table).
- *Phase 2:* a clear price table. Keep the age, late-entry and booking policies close to it.

### Privates `/practice-with-us/privates/`
1. Banner · 2. Sub-nav · 3. H1 "PRIVATES" + H4 link "TERMS & CONDITIONS" · 4. Four offering blocks (portrait 819×1024 + H2 + copy + price list): Private Hatha, 10-session personalised, Master Ming 1-on-1, Yantra Numerology · 5. H3 "USE THE FORM BELOW TO BOOK" + CF7 booking form (11 fields).

### FAQ `/practice-with-us/faq/`
1. Banner `schedule-new.jpg` (reused) · 2. Sub-nav · 3. H1 "FREQUENTLY ASKED QUESTIONS" · 4. 31 Q&As. Each question is an H5 and the answer follows as paragraphs. **Not an accordion**: everything is expanded.
- *Phase 2:* a grouped accordion (Classes, Practicalities, Payments, Pregnancy & Kids, Teacher Training, TPO).

### Yoga Teacher Trainings `/yoga-teacher-training/`
1. Banner · 2. "Back To Homepage" (no sibling links) · 3. H2 heading (no H1) · 4. 6 program rows stacked vertically (poster about 300px wide on the left; H3, dates, copy and CTA → Kajabi on the right), separated by 4px tan `#b18c60` rules.

### Online Trainings `/online-trainings/`
1. Banner · 2. Back link · 3. H2 heading (no H1) · 4. 12 program cards (poster + H3 + availability + IDR/USD price + teacher line + copy + CTA → Kajabi). Card 1 has no CTA.

### Our Team `/our-team/`
1. Banner `schedule_new.jpg` (reused, mismatched) · 2. Back link · 3. H1 "OUR TEAM" + H2 intro + 2 paragraphs · 4. Six profiles (portrait + H3 name + H5 role + long bio) · 5. **second H1** "OUR LINEAGE" + H3 + paragraph · 6. H2 "MOON SUN FIRE" + 3 paragraphs + "OM TAT SAT." · 7. CTA pair "Visit Us" / "OR" / "Train With Us Today" (the second one is broken).
- *Phase 2:* shorter bios with an expandable "read more". Split the lineage section into its own clear block.

### Senior Teachers `/senior-teachers/`
1. Banner `online-trainng-2022.jpg` (mismatched) · 2. Back link · 3. H2 heading (no H1) · 4. Eight profiles (broken image + H3 + H5 location + "Currently teaching at" + social links + bio).

### Contact `/contact/`
1. Banner `contact-2022.jpg` · 2. H2 "CONTACT" (no H1) + "Please fill in form below to contact us" · 3. Full-width **tan `#ae8656` band** with a centred single-column CF7 form (Name*, Email*, Message, SEND button right-aligned under the field) · 4. Centred text block on sand: address, phone/mobile, FAQ pointer, 4 email addresses with purposes · 5. Footer. **There's no map embed** even though the FAQ says the map is on the Contact page.

### Books by Octavio `/books-by-octavio/`
1. Banner · 2. Back link · 3. H2 heading · 4. Five book blocks (cover + H3 + subtitle + price + copy + "AVAILABLE AT THE STUDIO" + shipping note) · 5. **H1** (the page's only H1) "ICKE/SALVADO TRUTH WARRIORS INTERVIEW" + linked video thumbnail.

### Affiliate `/affiliate-program/`
1. Banner · 2. Back link · 3. H1 "AFFILIATE PROGRAM" + intro + PDF link + contact · 4. YouTube embed · 5. second H1 "DOWNLOAD ASSETS" · 6. Six program image cards, each with 4 download links.

### Give Back `/give-back-to-the-practice/`
1. Page title H1 (default template, no banner) · 2. H2 + paragraphs · 3. Collage image (656×1024).

### Women's Retreat `/womens-yoga-and-wellness-retreat/`
1. Banner · 2. Back link + T&C link · 3. H1 "SVASTHA" + subtitle · 4. H2 title/teacher/dates/location · 5. Long intro · 6. Teacher bio + photo · 7. Location + photo · 8. Accommodation + 4 room cards (250×300 thumbnails) · 9. Facilities + photo · 10. Highlights / Included / Not included · 11. Closing copy · 12. CF7 booking form.

### TPO FAQs `/faqs/`, TPO pro `/tpo-pro-2/`, Test `/test/`, German Subscriber, Home Sliders
See 1.2. These are short or legacy pages.

### Legal pages
Banner + sub-nav (3-level) + H2 + H5 sub-headings + bullet lists (no H1). Privacy is generic TermsFeed text.

### Shop / Product / Cart
WooCommerce defaults on Twenty Twenty: breadcrumb, H1 "Shop", "Showing all 3 results", sort select, 3-column product grid (300×300 thumbnails), "Add to cart". The product page has a gallery (600×750, lightbox to the full image), price, quantity input, Add to cart, a Description tab and Related products.

### Blog post (e.g. `/the-howler/`)
Twenty Twenty single: category label, H1 title, meta list ("Post author By tp_admin" · "Post date January 27, 2021" · "No Comments on …"), featured image, content starting with a "By <Author>." line, prev/next post navigation, then the **raw shortcode text `[gs-fb-comments]`** printed on the page (a deactivated Facebook-comments plugin). Category archives: H1 "Category: …" + a stack of full posts (not excerpts).

### 404
"Page Not Found" heading, "The page you were looking for could not be found…" + search form.

---

## 4. Navigation structure (as built)

```
Desktop header:  SCHEDULE · [LOGO] · CONTACT · [JOIN TPOpro NOW]
Mobile menu:     Home · Contact · Schedule · Blog(404) · Affiliate · [social] · [JOIN TPOpro NOW]
Studio sub-nav:  Back To Homepage | Schedule | Descriptions | Workshops | Rates | Privates | FAQs
Footer:          [IG] [YT] [MeWe] · Privacy Policy · address · mobile
Home tiles:      YTT · Schedule · Team · Give back(Kajabi) · Books · TPOpro(Kajabi) · Online · Kung Fu(ext) · Practice Series(Kajabi) · MoonSunFire(ext)
```

Key finding: the global navigation exposes only **Schedule** and **Contact** on desktop. Yoga Teacher Trainings, Online Trainings, Our Team and the rest are reachable **only through image tiles on the home page**. A visitor who lands on any interior page can't reach YTT or Online Trainings without going back home.

Proposed Phase 2 IA, for discussion only:
`Studio (Schedule · Classes · Workshops · Rates · Privates · FAQ)` · `Teacher Trainings` · `Online` · `About (Team · Lineage · Books)` · `Contact` + `JOIN TPOpro` CTA. Footer: Blog, Affiliate, Give Back, Privacy, Terms.
