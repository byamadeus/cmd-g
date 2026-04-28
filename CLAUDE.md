# CMD+G — Agency Website

Design agency site for CMD+G, a collective of four designers.

## Stack
- **Vite + React 18** — `npm run dev` (port 5173)
- **Tailwind CSS v3** — utility-first, no component library
- **Fonts** — Inter (sans), JetBrains Mono (mono), loaded via Google Fonts in `index.html`

## Project structure
```
src/
  data.js          ← single source of truth for all content
  App.jsx          ← composes all sections
  index.css        ← Tailwind directives + custom animations (marquee, cursor blink)
  assets/
    logo.svg       ← ⌘G SVG mark, imported as Vite asset
  components/
    Nav.jsx        ← fixed nav, scroll border, ⌘C copy email
    Hero.jsx       ← full-height hero + capabilities grid preview
    Marquee.jsx    ← auto-scrolling client ticker
    Work.jsx       ← case study tiles (large 2-col + small 3-col grid)
    Capabilities.jsx ← sticky left + large scrolling panels with hover state
    Team.jsx       ← 4-up grid linking to individual portfolios
    Footer.jsx     ← ⌘R your life CTA + ⌘C copy email
```

## Content lives in `src/data.js`
All copy, team info, clients, case studies, and the contact email are exported from `data.js`. Touch this file first for any content updates.

Key exports:
- `EMAIL` — group contact email (currently placeholder `hello@cmdg.design`)
- `clients` — marquee ticker list
- `capabilities` — hero grid + Capabilities section
- `caseStudies` — Work section tiles (`span: 'large' | 'small'`)
- `team` — 4 members with name, specialty, url, urlLabel

## Design language
- **Palette** — black bg, white text, neutral scale only. No color accents.
- **⌘ motif** — Apple command symbol used as section marker throughout. Never decorative noise — always tied to a keyboard shortcut pun.
- **Whisper copy** — minimum `text-neutral-500`, minimum `text-xs` (12px). Never go darker.
- **Shortcut copy** — `⌘G` hero, `⌘S` capabilities, `⌘O` work, `⌘R` footer, `⌘C` email CTA.

## Team
| # | Name | URL |
|---|------|-----|
| 01 | Avery Ulanet | averyulanet.com |
| 02 | Ghalib O. | ghalibo.com |
| 03 | Nina Otto | linkedin.com/in/nina-otto |
| 04 | Amadeus Cameron | ux.byamadeus.com |

## Clients
Paramount+, Meta, JPMorgan Chase, Shopmy, Mavely/L8ter, The Film Zone
