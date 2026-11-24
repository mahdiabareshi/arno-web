ARNO Website V4.7 — Luxury Bilingual Static Site (GSAP Edition) + ADMIN PANEL

WHAT CHANGED IN V4.7 (admin panel edition — biggest update)
-----------------------------------------------------------
1) HIDDEN ADMIN PANEL (test edition):
   - Access: 4 quick taps on the ARNO logo (top of every page) → gold ripple →
     PIN lock screen → the admin panel. Default test PIN: 1234
     (the hint is shown on the lock screen; changeable in پنل → تنظیمات).
   - Unlock persists for the browser session; settings persist in localStorage.
2) 82-PAGE LINE-BY-LINE AUDIT (41 fa + 41 en):
   - Every page scanned: titles, meta descriptions, headings, sections,
     images, forms, links. The registry feeds the panel's «صفحات» tab
     (searchable, 82 rows with type badges + size/section/image stats).
   - Audit fixes applied to the site itself: 252 images received meaningful
     alt text (224 empty alts filled + 28 missing alt attributes added) in
     both languages.
3) PANEL SECTIONS (RTL, dark + gold, same luxury DNA as the site):
   - داشبورد: audit summary + live stats + quick switches + recent messages
   - محتوای سایت: phone / email / website / instagram — applied site-wide to
     every tel:, mailto:, footer and contact-page instance; footer note;
     hide the demo form note
   - صفحات: all 82 pages — view, SEO title/description override per page,
     ویرایش زنده (opens the page with live editing enabled)
   - مقالات: 20 articles — show/hide each from the Insights grid (fa+en)
   - پروژه‌ها: 6 projects — show/hide each from the Projects grid
   - پیام‌ها: real inbox — every contact-form submission (fa/en) is captured,
     stored and listed; unread state, delete, CSV export, clear all
   - ظاهر و تم: 6 accent presets (default gold, classic, champagne, bronze,
     copper, silver) + preloader/noise/custom-cursor toggles + hide any of
     the 7 main nav items site-wide
   - تنظیمات: change PIN, JSON backup export/import, clear messages,
     full reset, about/disclaimer
4) LIVE EDITING (ویرایش زنده):
   - From the top bar button (current page) or the «ویرایش زنده» action on any
     page row. Editable regions (hero titles, leads, section headings, CTA,
     footer note) get a dashed gold outline; click → popover editor → save.
     Edits persist across reloads and are re-applied on every page load.
5) Tech: assets/css/admin.css + assets/js/admin.js (self-contained, no
   dependencies); lazy-injected by site.js — loads automatically only when
   saved settings exist or the 4-tap gesture is used; zero impact on the
   public site's appearance and performance.
6) Notes: this is the TEST edition — all changes live in the browser's
   localStorage only (no backend). In production the same panel structure is
   ready to be wired to a real server/CRM.

WHAT CHANGED IN V4.6 (bug-fix round)
------------------------------------
1) FA header nav reverted to the original plain-link style (the v4.5 pill
   chips removed) — identical treatment to the EN nav.
2) Services mega menu restored to its clean original list rows.
3) Academy LEARNING EXPERIENCE: connector line + gray dashed arrows removed;
   the 5 standalone framed boxes remain.
4) Insights «نمایش بیشتر» button: border-radius 3px + animated gold
   fill-sweep hover (color change animation).

WHAT CHANGED IN V4.5
--------------------
1) Academy hero localized (آکادمی آرنو), LEARNING EXPERIENCE as 5 framed
   boxes, ACADEMY TOPICS on a black stage with faint 01-06 index numbers.
2) Articles: insights grid shows 6 cards with a «نمایش بیشتر / کمتر» toggle
   (19→6 initial); article hero moved clear of the fixed header on all
   20 fa + 20 en article pages.
3) Article intro statement in a framed gold box; decision checklist rebuilt
   as icon rows (5 classic line icons per article, both languages).
4) Contact page: 4 channel notes (half-line descriptions) on both languages.

WHAT CHANGED IN V4.4 (client review round)
------------------------------------------
1) Header nav: a small gold caret (downward arrow) is rendered next to «خدمات» /
   Services so visitors can tell the mega menu opens from it; the caret rotates
   180° while the menu is open.
2) Projects page (fa): filter chips translated to Persian
   (همه · معماری · اجرا · توسعه · بازسازی) — English kept on the EN page.
3) Projects page: every filter chip now carries a visible 2px theme border
   (gold tint, brighter on hover/active).
4) Projects grid: the 6 project cards received the same framed-gold language as
   the services cards (2px outer gold border + 1px inner hairline frame, lift on
   hover) on both languages.
5) Project detail pages (all 6 × fa/en): the PROJECT STORY section is now a black
   stage (.story-dark) instead of the light paper theme; the section image keeps
   a gold double frame (outer + inner hairline) with a soft glow.
6) Project detail pages: under the case-study template note there is now a classic
   line-icon note (blueprint sheet icon) explaining that the fixed structure is
   the frame for the real project documentation.
7) Project detail pages: CASE STUDY STRUCTURE items (زمینه / راهکار طراحی /
   ساخت‌پذیری) are now separate lit boxes with theme glow, gold frame and hover
   elevation; the Academy topics grid keeps its light-paper variant of the same
   boxes.
8) Partnership & Development: the header/mobile-menu link no longer lands on the
   services page. A dedicated standalone page (partnership.html, fa + en) was
   created — mirroring the مشارکت و توسعه service page content — and every
   top-nav/mobile link now points to it. The mega-menu item «مشارکت در ساخت» and
   the footer/CTA service links still point to development.html.
9) sitemap.xml updated with fa/partnership.html + en/partnership.html.

WHAT CHANGED IN V4.3 (services pass)
------------------------------------
1) Header mega menu on «خدمات» (desktop hover): two columns — right column lists
   the 8 services (4 previews + classic «نمایش همه خدمات» toggle, borderless) and
   a left live-preview panel (classic service icon, title, description and a
   «مشاهده خدمات …» link that follows the hovered item); large 20px rounded
   panel, theme colors, gold top hairline.
2) SERVICES grid + service pages: gold framing pass (2px outer border + inner
   hairline), SERVICES heading claim tightened, hero/headings two-tone gradient.
3) Service pages: WHY ARNO block is dark with a classic circular icon note.

WHAT CHANGED IN V4.1 (client review round)
------------------------------------------
1) Persian typography unified on Vazirmatn (variable 100-900 + static weights):
   display AND body now Vazirmatn; Estedad kept only as unused fallback file.
2) Two-tone gold gradient (.duo) applied to the 10 key headings on both languages
   (hero words, About, Selected Studies, Services, Team quote, Academy, Insights,
   Process, Network, Start a Project CTA) with a slow color drift animation.
3) All buttons/controls now have a subtle 1-3px border-radius (buttons, filters,
   lang switcher, contact icon, form fields 2px).
4) Default OS cursor hidden on desktop; the circular custom cursor is the only cursor
   (html.cursor-on). Touch devices keep native behavior.
5) Header: bigger nav links; restyled gold language switcher; new phone icon button
   next to it linking to the Contact page. Mobile menu links enlarged (40px/34px fa).
6) Home page: hero side-rail (phone · instagram) and the 01/05 counter removed;
   hero eyebrow text now inside a bordered gold badge; ABOUT panel image enlarged
   (300px) with architectural corner brackets + caption and a fixed reveal bug
   (image no longer disappears after reveal — .visible state locked + CSS/GSAP
   transition conflict removed via html.gsap-on); Design/Build/Develop/Learn cards
   redesigned with classic line icons + description + footer row; SELECTED STUDIES
   heading reduced (h-sm) to sit beside its label; service cards cleaned (removed
   repeated ARNO index, brighter imagery, refined copy styles); article rows on
   hover: gold title, gold small text, gold underline + small arrow sliding in
   from the reading direction before the thumbnail; OUR PROCESS rebuilt as a
   numbered circular timeline (no day counts) horizontal on desktop / vertical on
   mobile; SPECIALIST NETWORK turned into 6 square cards with light description
   text inside each; footer contact column moved to the first (right side in RTL)
   and instagram handle now links to the real profile.
7) GSAP engine: reveal-image animations lock their final state (fix for images
   fading back), gradient headings skip word-splitting (block entrance instead),
   custom cursor only hides the OS cursor when active.

WHAT CHANGED IN V4
------------------
1) Motion engine rewritten on GSAP 3.12 + ScrollTrigger (local files, no CDN):
   - Cinematic preloader (logo + gold line) synced to real page load, then hero entrance timeline
   - Real 5-slide hero crossfade slider with Ken Burns zoom (V4.1: counter removed by design)
   - ScrollTrigger reveals: blocks, curtain image reveals, staggered grids
   - High-performance parallax (scrub) on hero, page heroes and editorial imagery
   - Word-level masked headline reveals (split is word-based, so Persian letter shaping stays intact)
   - Magnetic buttons and custom cursor driven by gsap.quickTo
   - Lenis smooth scrolling, integrated with ScrollTrigger
   - Soft page-exit transition between pages
   - prefers-reduced-motion fully honored; no-JS fallback shows all content

2) Persian luxury typography (all fonts local woff2):
   - Headings + Body: Vazirmatn (variable, V4.1)
   - English headings: Playfair Display; English body: Inter
   - Removed negative letter-spacing on Persian headings (was breaking letter joins)
   - Minimum font sizes raised from 8–9px to 10.5–12px for readability/accessibility

3) Bug fixes
   - Hero slider counter was hardcoded — now a real slider
   - Custom cursor was misaligned (CSS transform conflict) — fixed
   - Parallax conflicted with CSS zoom animation and caused jitter — rebuilt on ScrollTrigger
   - Menu unreachable between 760–1100px (links hidden, burger hidden) — burger now appears at 980px
   - Form used alert() — replaced with inline validation, error states and animated success panel
   - Lang switcher always went to the homepage — now maps to the same page in the other language
   - Scroll progress bar used layout-reading division — now a GPU-friendly scaleX bar (RTL-aware)
   - Empty alt attributes on meaningful project/article images filled from context
   - Preloader could block content if load event was missed — 3.2s safety timeout
   - Escape key, aria-expanded, focus states and scroll-lock added to mobile menu

4) SEO / performance
   - Canonical, hreflang (fa/en/x-default), Open Graph and Twitter Cards on all 80 pages
   - Favicon set (32px + apple-touch 180px) generated from the gold logo
   - 1200x630 og-cover.jpg generated from the hero image
   - Font preloads (per language) and hero image preload with fetchpriority=high
   - Lazy-loading + async decoding on below-the-fold images
   - Images recompressed: ~5.3MB -> ~2.3MB total, no visible quality loss
   - Logos resized from 1464px to 560px source (used at max 250px display)

STRUCTURE
---------
index.html ............ language auto-detect (navigator.language) with <noscript> links
fa/ ................... 41 pages, RTL, Persian
en/ ................... 41 pages, LTR, English
assets/css/site.css ... single stylesheet (design tokens at :root)
assets/css/admin.css .. admin panel stylesheet (loaded only when needed)
assets/js/site.js ..... GSAP motion engine (vanilla JS, no framework)
assets/js/admin.js .... hidden admin panel (82-page registry + settings engine)
assets/js/vendor/ ..... gsap.min.js, ScrollTrigger.min.js, lenis.min.js (all local)
assets/fonts/ ......... Vazirmatn (variable + statics), Playfair Display, Inter (woff2)
assets/images/ ........ optimized WebP + logos + favicons + og-cover.jpg

CONTACT DATA USED
-----------------
021 7780 5206 | www.arnoarc.com | @arno_civil | info@arnoarc.com
Verify email/address before production.

FORM
----
The contact form validates locally and shows an animated success state, but does not
send data anywhere. In production connect it to your email service or CRM
(e.g. Formspree, a small backend endpoint, or WordPress + Contact Form 7).

DISCLAIMER
----------
Article content is educational/management-oriented. Current regulations, permits,
contracts and statutory responsibilities must be verified per project and per current
local authority requirements. Concept imagery is labeled as "Concept Study" and must be
replaced with verified ARNO project photography before public launch.

PREVIEW / DEPLOY
----------------
Open index.html directly, or serve the folder (recommended so fonts/preloads behave
exactly as in production):
    python3 -m http.server 8000      ->  http://localhost:8000
Deploy by uploading the whole folder to any static host (Netlify, Vercel, cPanel, S3).
Update the canonical/OG base URL (https://www.arnoarc.com) if the domain changes.
