Prompt: Redesign sigmasecuritiesltd.com.ng in Next.js

Paste this whole file into Claude Code (or any coding agent) at the root of an empty folder. Goal: a pitch-winning, front-end-only redesign of the Sigma Securities Limited website. It has to look like a premium Nigerian capital-markets brand, not a WordPress template.

1. Role and goal

You are a senior front-end engineer and UI designer. Rebuild the website of Sigma Securities Limited, a Lagos-based stockbroking and investment firm, as a modern Next.js site.

This is a contract-winning demo. The client will compare it against their current WordPress/Elementor site, so the quality jump must be obvious in the first five seconds. Priorities, in order:

Elegant, trustworthy, premium look (this is a financial firm; it must feel safe and established).
Smooth, tasteful animation and micro-interactions (never gimmicky, never janky).
Fully responsive, from 360px phones to 1920px+ screens.
Clean, maintainable code that the client's team could take over.

No backend for now. Everything is static or client-side. Forms validate on the client and show a success state; they do not send anywhere yet. Structure the code so a real API can be plugged in later (see section 9).

2. What the current site is (source of truth for content)

Current site: WordPress + Elementor, single-column, template-looking. Use the real content below. Do not invent statistics, client counts, awards, names or quotes. Where content is missing, use clearly marked placeholders (see section 10).

Brand and positioning
Company: Sigma Securities Limited
Hero headline (existing): "Swift and Reliable Mandate Execution"
Hero subtext (existing): "Start your investment journey with Sigma Securities. Access the Nigerian capital market with confidence."
Vision: "To be the undisputed leading and dominant full services stock-broking firm in Nigeria."
Mission: Provide reliable, first-class services through well-trained, motivated staff and strong technology, with high standards of integrity, ethics and transparency.
Why choose us (3 pillars): State-of-the-art technology · Competent and well-motivated staff · Foreign partnership
Approach (from About): client-centred service and consistent performance; profitable partnership between clients, shareholders and employees; value investing with risk matched to return; fast, efficient trade execution; flexible, negotiable fees; online trading access.
Online trading product: s-Trader ("Experience Seamless Online Trading with s-Trader").
Company history (About page)
Incorporated 30 May 1995 as a limited liability company in Nigeria.
Registered with the Securities and Exchange Commission (SEC) as a broker-dealer.
Granted a Dealing Membership licence by the Nigerian Stock Exchange on 26 July 1995.
Began operations on 1 April 1997.
Lagos roots, growing international client base.
No leadership or team names are published. Use placeholders only.
Services (6)
Equities Trading: order placement, trade execution and settlement on the Nigerian exchange; online trading platform with real-time market data, portfolio monitoring and execution from anywhere; real-time insights from the firm's traders; research and analysis on listed companies; tailored advice to meet goals and manage risk.
NASD (OTC Trading)
Investment Advisory Services
Portfolio Management
Consulting
Others

The existing copy for services 2 to 6 is thin or wrong (Portfolio Management and Consulting currently contain leftover construction-industry template text). Write short, sensible, accurate placeholder descriptions for those, and flag them for client review (section 10).

Contact
Email: frontdesk@sigmasecurities.com.ng
Phones: +234-8163343578 · +234-9083606969
Head Office: 18, St Gregory College Road, Ikoyi, Lagos
Abuja Office: No 10 Nairobi Street, Wuse-2, Abuja
Taraba Office: Investment House No. 134, Hammaruwa Way, Jalingo, Taraba State
Office hours are not published. Do not invent them.
Existing links to preserve (use as real external links)
Client Login: https://app.sigmasecurities.com.ng
Dangote Ref IPO subscription: https://invest.sigmasecuritiesltd.com.ng/
Regulators and market bodies (footer): nse.com.ng · nasdng.com · sec.gov.ng · cenbank.org · pencom.gov.ng · amcon.com.ng
Downloads (10 items)

Account Opening Form (Individual) · Estate Account Opening Form · Shares Transfer Form · Buy Mandate Form · FGN Savings Bond Form · Account Opening Form (Corporate) · Minor Account Opening Form · Online Trading SLA · Sell Mandate Form · e-Dividend Mandate Forms (the last one links to an SEC notice page, not a file). Build the Downloads page as a clean, filterable card grid. Use # hrefs with a TODO comment where the real file isn't available, except the e-Dividend item which goes to sec.gov.ng.

Policy pages (placeholder pages with a shared layout)

Data Subject Access Request Policy · Data Privacy Policy · Website Policy · Privacy Notice · Data Breach Policy · Data Protection Policy · plus a DPO page under Contact. Use one reusable PolicyLayout with a sticky table of contents and clearly marked placeholder body text ("Content to be supplied by Sigma Securities").

Trust marks (footer)

NGX membership logo and an NDPC audit/compliance trustmark appear on the current site. Reserve slots for them in the footer using placeholders; the real logos will be supplied by the client.

3. Stack (fixed)
Next.js (latest stable) with the App Router and TypeScript, strict on.
Tailwind CSS for styling, with design tokens in the Tailwind config / CSS variables.
Framer Motion (motion) for animation. Optionally Lenis for smooth scrolling. Keep it subtle.
lucide-react for icons.
next/font for fonts (no external font CSS requests).
react-hook-form + zod for form validation.
next/image for every image; sharp-friendly sizes.
No backend, database, auth, CMS or API routes in this phase.
Static export friendly (output: 'export' must work), so it can be hosted on Vercel, Netlify or any static host.
Package manager: npm or pnpm. Provide README.md with run/build steps.
4. Design direction

Mood: private-bank meets modern fintech. Confident, calm, precise. Lots of whitespace, strong typography, restrained colour, real depth. Think "established since 1995" and "modern execution" at the same time.

Palette (adjust to the real logo): if a logo file is supplied, extract the brand colours from it and use them. Otherwise start with:

Deep navy / midnight (#0A1B3D-ish) as the primary dark.
A warm gold or champagne accent (#C9A24B-ish) used sparingly for CTAs, rules, and highlights.
Soft off-white (#F7F5F0-ish) and cool grey neutrals for sections.
A positive green and a negative red used only inside market/ticker UI. Define everything as tokens (--color-*) so the palette can be swapped in minutes. Check WCAG AA contrast.

Typography: a refined serif for display headings (e.g. Fraunces, Playfair Display or Cormorant) paired with a clean sans for body/UI (e.g. Inter, Plus Jakarta Sans or Manrope). Fluid type scale with clamp(). Tabular numerals for any numbers.

Layout language: 12-column grid, generous section padding (96-160px desktop), large asymmetrical hero, subtle grain or gradient mesh backgrounds, thin gold hairline dividers, rounded-2xl cards with soft layered shadows, optional glassmorphism on the navbar only. Avoid stock-template clichés (no carousels of tiny logos, no cluttered widgets).

Imagery: no copyrighted photos. Use abstract SVG/CSS art: animated line charts, candlestick motifs, subtle sigma (Σ) watermark, gradient orbs. Placeholder photography slots should be clearly labelled and swappable.

5. Animation and interaction spec

Keep motion purposeful. Everything must respect prefers-reduced-motion (disable parallax/large movement, keep simple fades).

Page load: short branded intro (logo fade/scale, 600-900ms max), then hero staggered reveal (headline word-by-word or line mask reveal, subtext, CTAs).
Hero: animated background (slow drifting gradient mesh plus a live-feeling line/candlestick chart drawing itself with SVG path animation). Magnetic hover on the primary CTA.
Scroll reveals: fade-up + slight blur-in on sections via whileInView (once), with stagger on card grids.
Navbar: transparent at top, becomes blurred/solid with a subtle shadow after scroll; hides on scroll down, shows on scroll up; animated underline on links; smooth dropdowns (Policy statement, Contact Us); animated mobile drawer with staggered links.
Cards (services): hover lift, gold border glow, icon micro-animation, arrow slides in. Optional 3D tilt on desktop only.
Numbers: count-up animation for any figures (use only real ones: e.g. "Since 1995", "Operating since 1997").
Timeline (About): vertical timeline with line that draws as you scroll (1995, 1995, 1997 milestones).
Marquee: slow, pausable marquee for regulator/market-body links.
Ticker bar (decorative): a market-style ticker strip clearly labelled "Illustrative data". Never present fake prices as real.
Page transitions: soft cross-fade between routes.
Cursor/scroll polish: scroll progress bar at the top, smooth anchor scrolling, custom focus rings.
Performance budget: animate only transform and opacity; no layout thrash; lazy-load heavy visuals; target Lighthouse 90+ on Performance, 100 on Accessibility/Best Practices/SEO.
6. Sitemap and pages
/                       Home
/about                  About (history timeline, vision, mission, approach, trust marks)
/services               Services overview (6 cards)
/services/[slug]        Service detail: equities-trading, nasd-otc-trading,
                        investment-advisory-services, portfolio-management,
                        consulting, others
/s-trader               Online trading product page (features, how it works, CTA to client login)
/open-account           Account-opening hub (choose Individual / Corporate / Estate / Minor,
                        shows required documents checklist, links to downloads and to the form)
/account-update         Client account update form (client-side only)
/downloads              Forms and documents (filterable grid)
/ipo                    Promo landing for the Dangote Ref IPO (links out to invest.sigmasecuritiesltd.com.ng)
/contact                Contact: form, three office cards, map embed placeholder
/contact/dpo            Data Protection Officer page
/policies/[slug]        data-subject-access-request, data-privacy, website,
                        privacy-notice, data-breach, data-protection
404                     Branded not-found page

Navigation (desktop): Home · About · Services · Downloads · Policy statement ▾ · Contact Us ▾ · Client Login (button, external) · Open an Account (primary CTA).

7. Home page sections (in order)
Hero: "Swift and Reliable Mandate Execution", subtext, CTAs: Open an Account (primary), Account Update Form (secondary). Animated chart background.
Announcement band: Dangote Ref IPO promo (dismissible, remembers dismissal in localStorage), buttons: Subscribe to IPO / Open an Account. Replace the current vague "Open Dialogue for Investment Business" banner with clearer copy.
Trust strip: "Licensed broker-dealer · SEC registered · NGX dealing member · Since 1995" (only claims from the About page).
Your journey to financial freedom: short value statement, two CTAs, supporting visual.
Our services: 6 animated cards linking to detail pages. Delete the leftover "Busico / we build your dream" construction block entirely.
s-Trader spotlight: device mockup (CSS/SVG phone + laptop) showing a stylised trading dashboard; feature bullets; CTA.
Why choose us: the three pillars with animated icons.
Our story timeline: 1995 → 1997 → today (real dates only).
Vision and Mission: large typographic section (fix the "VISSION" typo).
How to get started: 3 or 4 step process (Choose account type → Download/complete forms → Submit with documents → Start trading). Mark as illustrative and for client confirmation.
Our footprint: Lagos, Abuja, Jalingo offices on a stylised Nigeria map (SVG) with animated pins.
Newsletter / alerts sign-up: "Sign up for alerts, news and Sigma Securities Insights" (client-side validation, success toast, no sending).
Get in touch CTA band.
Footer: office addresses, phones, email, quick links, regulator links, trust-mark slots, policy links, copyright © {year} Sigma Securities Limited.
8. Components to build (reusable)

Navbar, MobileDrawer, Footer, Button (primary/secondary/ghost, magnetic option), SectionHeading (eyebrow + title + lead), Reveal (scroll wrapper), ServiceCard, FeatureCard, Timeline, StatCounter, Marquee, TickerBar, HeroChart (SVG animated), DeviceMockup, OfficeCard, NigeriaMap, DownloadCard, PolicyLayout, FormField / Input / Select / Textarea / Checkbox, Toast, Accordion (FAQ), ScrollProgress, PageTransition, Seo helpers.

Keep content in typed data files (/content/*.ts): site.ts, services.ts, downloads.ts, offices.ts, policies.ts, nav.ts. Components must not hard-code copy.

9. Forms (client-side only, backend-ready)

Forms: Contact, Newsletter/alerts, Account update, Open-account enquiry.

Validate with zod; accessible inline errors; disabled/loading states; success state with animation.
Submission goes through a single lib/submitForm.ts that currently resolves after a short delay and logs to the console. Add a clear // TODO: replace with API call so wiring a backend later means editing one file.
Use the visible company email (frontdesk@sigmasecurities.com.ng) and real phone numbers in mailto: / tel: links. (The current site's links point to hello@gmail.com and a placeholder phone; do not copy those mistakes.)
Never collect or store sensitive data (BVN, bank, ID numbers) in this demo. Add a visible note that the form is for demonstration.
10. Content rules and placeholders
Use only facts from section 2. Anything else is placeholder, visibly styled (dashed outline or [Placeholder] tag) and listed in CONTENT_TODO.md at the repo root so the client can supply or approve it.
Do not invent: leadership names, testimonials, client numbers, AUM, returns, awards, fees, prices, office hours, regulatory claims beyond those listed.
Financial-site hygiene: add a footer disclaimer ("Investing in securities involves risk...") marked for compliance review; no promises of returns.
Use "Nigerian Exchange (NGX)" where the exchange is named, but flag in CONTENT_TODO.md that the current site still says "Nigerian Stock Exchange" in places, for the client to confirm wording.
Nigerian English spelling where relevant; currency as ₦.
11. Quality bar
Responsive: test at 360, 390, 768, 1024, 1280, 1536, 1920. No horizontal scroll, tap targets at least 44px.
Accessibility: semantic landmarks, skip link, keyboard-navigable menus, visible focus, alt text, reduced-motion support, AA contrast, labelled form controls.
SEO: per-page metadata (title, description, OpenGraph, Twitter), sitemap.ts, robots.ts, JSON-LD FinancialService/Organization with the real address and phones, canonical URLs, proper heading hierarchy.
Performance: fonts via next/font, images optimised, route-level code splitting, no unused heavy libraries, Lighthouse targets in section 5.
Code quality: TypeScript strict, ESLint + Prettier clean, no any, no dead code, components small and documented.
Dark mode: optional; if added, it must be polished, not an afterthought. Light theme is the priority.
12. Suggested folder structure
/app
  layout.tsx  page.tsx  not-found.tsx  sitemap.ts  robots.ts
  about/  services/  services/[slug]/  s-trader/  open-account/
  account-update/  downloads/  ipo/  contact/  contact/dpo/  policies/[slug]/
/components
  layout/  sections/  ui/  forms/  visuals/
/content        site.ts  services.ts  downloads.ts  offices.ts  policies.ts  nav.ts
/lib            submitForm.ts  utils.ts  motion.ts  seo.ts
/public         logo placeholder, og-image, icons
CONTENT_TODO.md  README.md
13. How to work
Scaffold the project and set up tokens, fonts, layout, navbar and footer first.
Build the home page completely, with animation, before touching inner pages. Show me a running preview when it's done so I can review the look.
Then build the inner pages using the shared components.
Finish with SEO, accessibility, performance and responsive passes; run npm run build and npm run lint and fix everything.
Report: what was built, what is placeholder (CONTENT_TODO.md), and any assumptions you made.
14. Definition of done
npm run build succeeds with no errors or warnings; static export works.
Every page in the sitemap exists and is reachable from navigation.
No leftover template/construction text anywhere.
All animation respects reduced-motion.
All external links (Client Login, IPO, regulators) work and open correctly.
A first-time visitor on a phone gets a fast, smooth, premium experience and can find "Open an Account" within two taps.