# CMD+G — Agency Website

Design agency site for CMD+G, a collective of four designers.

## Stack
- **Vite + React 18** — `npm run dev` (port 5173)
- **Tailwind CSS v3** — utility-first, no component library
- **Fonts** — Inter (sans), JetBrains Mono (mono), loaded via Google Fonts in `index.html`

## Branch strategy
| Branch | Purpose |
|--------|---------|
| `main` | **Production** — splash page only. Deploy this to Vercel. |
| `dev`  | **Full site** — all sections, work in progress until case studies ready. |

## Project structure
```
src/
  data.js            ← single source of truth for ALL content — edit here first
  App.jsx            ← main: renders Splash / dev: composes all sections
  index.css          ← Tailwind directives + animations (marquee, cursor-blink, scramble)
  assets/
    logo.svg         ← ⌘G SVG mark, imported as Vite asset
  components/
    Splash.jsx       ← [MAIN] full-height splash, scramble animation, ⌘C CTA, marquee
    Nav.jsx          ← [DEV] fixed nav, scroll border, ⌘C copy email
    Hero.jsx         ← [DEV] full-height hero + 5-col capabilities grid preview
    Marquee.jsx      ← auto-scrolling client ticker (shared)
    Work.jsx         ← [DEV] case study tiles (large 2-col + small 3-col grid)
    Capabilities.jsx ← [DEV] sticky left + large scrolling panels + pricing block
    Team.jsx         ← [DEV] 4-up grid linking to individual portfolios
    Footer.jsx       ← [DEV] ⌘R your life CTA + ⌘C copy email
```

## Content lives in `src/data.js`
All copy, team info, clients, case studies, pricing, and contact email exported from `data.js`. Touch here first for any content updates.

Key exports:
- `EMAIL` — group contact email (placeholder: `hello@cmdg.design`)
- `clients` — marquee ticker list
- `capabilities` — 5 services, each with `id`, `title`, `desc`, `whomst[]`
- `pricing` — `$15K` flat-fee, `4 weeks` timeline, team hrs breakdown
- `caseStudies` — Work tiles (`span: 'large' | 'small'`)
- `team` — 4 members with name, specialty, url, urlLabel

## Splash animation (`src/components/Splash.jsx`)
Editable constants at top of file:
```js
const WORDS       = ['Brand', 'Print', 'Build', 'Deck', 'Market', 'Do']
const SCRAMBLE_MS = 380    // glitch duration
const HOLD_MS     = 1800   // pause between words
```
Headline: **"Four Designers. Any Context. We'll [WORD] it."**
Last line greyed (`text-neutral-500`). Word cycles with scramble/glitch effect.

## Design language
- **Palette** — black bg, white text, neutral scale only. No color accents.
- **⌘ motif** — Apple command symbol tied to keyboard shortcut puns only. Never decorative noise.
- **Whisper copy** — minimum `text-neutral-500`, minimum `text-base` (16px) on splash / `text-xs` (12px) in full site. Never go darker than `neutral-500`.
- **Shortcut copy** — `⌘G` hero, `⌘S` capabilities, `⌘O` work, `⌘R` footer, `⌘C` email CTA.

## Capabilities (services)
| # | Service | Who |
|---|---------|-----|
| 01 | Branding | Avery |
| 02 | Keynote Design | Amadeus, Nina, Avery |
| 03 | Web Design | Amadeus, Nina, Avery |
| 04 | Print Design | Amadeus, Nina, Avery |
| 05 | Marketing Design | Avery |

## Pricing
- **$15K** flat-fee per project
- **4 weeks** per project
- Team commitment: 48 hrs/mo · 10–12 hrs/week · 1–2 hrs/day

## Team
| # | Name | Specialty | URL |
|---|------|-----------|-----|
| 01 | Avery Ulanet | Branding, Visual, OOH | averyulanet.com |
| 02 | Ghalib O. | Strategy, Interaction | ghalibo.com |
| 03 | Nina Otto | Strategy, Interaction | linkedin.com/in/nina-otto |
| 04 | Amadeus Cameron | Systems, Design Strategy | ux.byamadeus.com |

## Clients
Paramount+, Meta, JPMorgan Chase, Shopmy, Mavely/L8ter, The Film Zone

## Vercel deploy
- Connect `main` branch → production
- Connect `dev` branch → preview (optional)
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`
- No env vars needed at launch
