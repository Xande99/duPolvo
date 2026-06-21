---
name: dupolvo-design
description: Use this skill to generate well-branded interfaces and assets for duPolvo — a bold, creative Brazilian marketing agency (Programação, Design, Vídeo/Edição, Tráfego Pago; octopus mascot). Contains design guidelines, colors, type, fonts, assets, and UI kit components for landing pages, prototypes and mocks.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick map
- `styles.css` — global entry; link it to get all tokens + fonts (Bricolage Grotesque, self-hosted in `assets/fonts/`).
- `tokens/` — colors (navy `#243B67` / aqua `#21E3C3` / paper `#F5F5FD` / ink `#0D0D0D`), typography, spacing/radius/shadow/motion.
- `components/` — React primitives under `window.DesignSystem_7a6364` (Button, Badge, Tag, Eyebrow, Card/ServiceCard/PortfolioCard/TestimonialCard, Input, Navbar, StatCounter, FaqItem). See each `*.prompt.md`.
- `assets/polvo.png` — octopus mascot (transparent). `assets/cases/`, `assets/avatars/` — placeholder imagery.
- `ui_kits/landing/` — full marketing landing page to copy/adapt.

## Brand rules (short)
- Tone: criativo, ousado, direto — "a gente" + "você". Sentence case. **No emoji.** Octopus/tentáculo metaphor as light seasoning.
- Two hues only: navy (authority) + aqua (energy), plus neutrals. Aqua is precious — accents, CTAs, glow.
- Bricolage Grotesque: 800 display, 700 headings, 400 body. Highlight a key headline word in aqua.
- Pill buttons & chips, 24px cards, soft cool shadows, line icons (2px rounded), dark sections with dot-grid + aqua glow.
- Motion: ease-out 160–320ms; scroll-reveal, hover lift, count-up, mascot float. Keep content visible by default.
