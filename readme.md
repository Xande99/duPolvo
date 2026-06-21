# duPolvo — Design System

> Agência de marketing **criativa e ousada**. Quatro especialidades — Programação, Design, Vídeo/Edição e Tráfego Pago — debaixo do mesmo teto. O símbolo é um **polvo**: muitos braços, uma só estratégia.

This project is the duPolvo brand design system: tokens (color, type, spacing), self-hosted fonts, reusable React components, foundation specimen cards, and a complete marketing **Landing Page** UI kit.

---

## Sources provided
- **Reference sites** (layout/mood only, not duPolvo brands): `uploads/site_referencia1.png` (SafePay — dark hero, glow CTA), `site_referencia2.png` (Fingoals — bold sans, blue accent), `site_referencia3.png` (Niche Geeky — dark, glow cards), `site_referencia4.png` (InstaPrime — dark, neon, phone mock).
- **Mascot**: `uploads/polvo.png` (pink isometric octopus). Background removed → `assets/polvo.png` (transparent).
- **Fonts**: Bricolage Grotesque `.ttf` files (24pt + 36pt optical sizes) → `assets/fonts/`.
- **Brief**: full LP spec + palette + type scale + component list (in Portuguese).

> ⚠️ **Font substitution note:** the brief asked for **36pt ExtraBold**, but only a **24pt ExtraBold** file was supplied. The 800 weight is mapped to `BricolageGrotesque_24pt-ExtraBold.ttf` across all display sizes. If you have the 36pt ExtraBold cut, drop it in `assets/fonts/` and update `tokens/typography.css`.

---

## Brand at a glance
- **Tom de voz:** criativo, ousado, direto — nunca arrogante. Fala "você", usa metáforas de polvo/tentáculos com leveza.
- **Cores:** Navy `#243B67` (autoridade) · Aqua `#21E3C3` (energia) · Paper `#F5F5FD` (fundo) · Ink `#0D0D0D` (texto).
- **Tipo:** Bricolage Grotesque — display 800, headings 700, corpo 400.
- **Símbolo:** polvo sobre halo aqua em seções escuras.

---

## CONTENT FUNDAMENTALS — como a duPolvo escreve

**Voz:** primeira pessoa do plural ("a gente cuida", "a gente mira") combinada com tratamento direto ao leitor ("você"). Soa como um time próximo, não como uma corporação.

**Tom:** confiante e ousado, com humor leve apoiado na metáfora do polvo. Nunca arrogante — vende competência mostrando resultado, não se gabando.

**Casing:** Sentence case em headlines e botões ("Solicitar orçamento", não "SOLICITAR ORÇAMENTO"). UPPERCASE só em overlines/eyebrows curtos e tags (`O QUE FAZEMOS`, `CASES & RESULTADOS`).

**Frases:** curtas, com ritmo. Gosta de contrastes e "viradas" ("Bonito é o mínimo."; "No ar não é fim, é começo."; "Sem letrinha miúda."). Usa travessão para dar respiro.

**Metáfora central:** tentáculos = especialidades. "Quatro tentáculos, uma só estratégia"; "A gente cuida de todos"; "Oito braços, muito resultado". Use com parcimônia — tempero, não muleta.

**Números:** sempre concretos e a favor do cliente (+312% ROAS, R$ 0,38/lead, nota 4,9). Evite stat vazio.

**Emoji:** não. A marca não usa emoji em UI/headlines. (Ícones de linha fazem esse papel.)

**Exemplos reais (deste sistema):**
- Headline hero: *"Sua marca tem muitos braços. A gente cuida de todos."*
- Sub: *"Programação, design, vídeo e tráfego pago sob o mesmo teto."*
- CTA final: *"Bora dar oito braços pro seu marketing?"*
- FAQ: *"Cada projeto é orçado pelo escopo — não vendemos pacote de prateleira."*

---

## VISUAL FOUNDATIONS

**Color vibe.** Two-pole system: deep **navy** for authority/structure and electric **aqua** for energy/CTAs. Paper (`#F5F5FD`, faint lilac-white) is the default page; near-black ink for text. Sections alternate **light → dark** for rhythm; never more than the two brand hues plus neutrals. Aqua is precious — used for accents, CTAs, highlights and glow, never as a large flat background except the deliberate "aqua block".

**Backgrounds.** Light sections are flat paper or `--surface-sunken` (navy-50). Dark sections are flat navy `#0F1A30` with: (1) a faint **dot grid** masked to fade out, and (2) soft **radial aqua glows** blurred behind content. No photographic backgrounds, no busy gradients. The single gradient used is navy-700→navy-900 on the final CTA card.

**Imagery.** The pink octopus mascot is the hero image, floated on a radial aqua halo with a drop shadow. Case covers are abstract navy/aqua compositions (dot grid + blobs + label) — cool-toned, flat, no photography. Avatars are flat initials on brand colors.

**Type.** Bricolage Grotesque throughout — a characterful grotesque that reads "creative" without being decorative. Display/H1 at 800 with tight tracking (−3% / −1.5%) for punch; headings 700; body 400 at 1.6 line-height. Aqua is used inline to highlight a key word in headlines (with a subtle aqua underline bar).

**Spacing.** 4-based scale (4→96). Section vertical rhythm via `--section-y` (64→128 fluid). Generous whitespace; content max-width 1200px.

**Corners & cards.** Cards: 24px radius (`--radius-card`), 1px subtle border, soft cool-tinted shadow (`--shadow-sm`). Buttons & chips are **fully pill** (999px). Icons sit in 16px-radius rounded squares. The overall feel is rounded and friendly, never sharp.

**Shadows.** Soft, cool, navy-tinted (`rgba(15,26,48,…)`). Elevation scale xs→xl. Hover uses `--shadow-hover` (deeper, navy-tinted). Aqua CTAs carry a colored glow `--shadow-accent`. No hard/black shadows.

**Borders.** Hairline neutrals on light; `--border-dark` (navy-700) on dark surfaces; aqua border for active/focus.

**Animation & easing.** Everything `ease-out` (`cubic-bezier(.22,.61,.36,1)`), 160–320ms. Patterns: **scroll-reveal** (rise + fade, 0.7s, staggered d1–d4); **hover lift** on cards (translateY −6px + deeper shadow + aqua border); **icon tilt** on service-card hover; **count-up** stats on scroll; **float** loop on the hero mascot and chips. All entrance/scroll animation is gated so content is **visible by default** and only animates when a live animation clock is detected (robust in headless/preview contexts).

**Hover / press.** Hover = lift + color shift toward aqua (links → aqua-400) or darker brand (primary button → navy-700). Press = settle back to translateY(0). Focus = 2px aqua outline / 4px aqua glow ring on inputs.

**Transparency & blur.** Used sparingly and purposefully: the navbar turns to **navy glass** (blur 18px + 72% navy) on scroll; floating hero chips and the "why" badge use blurred translucent navy panels. Glow halos are blurred radial gradients.

**Layout rules.** Fixed navbar (transparent over hero, glass on scroll). 12-col-ish feel via CSS grid. Mobile breakpoint 768px; an intermediate 860px stacks the hero/why two-column layouts.

---

## ICONOGRAPHY
- **Style:** consistent **line icons, 2px stroke, rounded caps/joins** (Lucide-style geometry), drawn inline as React SVG components in the landing app (`ui_kits/landing/app-top.jsx`, object `I`). Service icons: code `< >`, pen/design, video, trending-up.
- **Containers:** icons live in 60px rounded-square tiles (`--radius-md`) with aqua-100 bg / navy-600 stroke; on hover the tile fills aqua and the icon tilts.
- **Social:** Instagram, LinkedIn, YouTube, WhatsApp — inline SVG (brand-neutral line/solid mix) in the footer.
- **No emoji**, no icon font, no PNG icons. If you need a wider set, use **Lucide** (CDN) to stay on-style (same 2px rounded geometry) and flag any additions.
- **Mascot** (`assets/polvo.png`) is illustration, not an icon — reserve for hero/why/CTA/brand moments.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry (only `@import`s). Consumers link this.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill manifest.

**`tokens/`** — `colors.css` · `typography.css` (+ `@font-face`) · `spacing.css` (spacing/radius/shadow/motion/layout) · `base.css` (reset + element defaults).

**`assets/`** — `polvo.png` (mascot, bg removed) · `fonts/` (Bricolage Grotesque ttf) · `cases/` (6 abstract case covers) · `avatars/` (3 initial avatars).

**`components/`** — reusable React primitives (namespace `window.DesignSystem_7a6364`):
| Group | Components |
|---|---|
| `buttons/` | `Button` (primary · accent · outline · ghost; sm/md/lg; onDark; disabled) |
| `indicators/` | `Badge`, `Tag`, `Eyebrow` |
| `cards/` | `Card`, `ServiceCard`, `PortfolioCard`, `TestimonialCard` |
| `forms/` | `Input` (+ multiline textarea) |
| `navigation/` | `Navbar` (fixed, scroll-blur) |
| `data/` | `StatCounter` (scroll count-up) |
| `feedback/` | `FaqItem` (accordion) |

**`guidelines/cards/`** — foundation specimen cards for the Design System tab (Colors, Type, Spacing, Brand).

**`ui_kits/landing/`** — the complete duPolvo **Landing Page**: `index.html` + `landing.css` + `app-top.jsx` + `app-bottom.jsx`. Sections: Hero · Serviços · Por que a duPolvo · Cases · Números (stats) · Processo · FAQ · CTA final · Rodapé. Also registered as a **Starting Point** ("Pages").

---

## Using the system
- **Tokens/fonts:** link `styles.css`, use CSS custom properties (`var(--navy-600)`, `var(--font-display)`, `var(--space-8)`, …).
- **Components:** load `_ds_bundle.js` (compiled automatically) and read from `window.DesignSystem_7a6364`. Each `components/<group>/<Name>.prompt.md` shows usage.
- **Landing page:** open `ui_kits/landing/index.html`.
