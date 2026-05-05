# Xellox Design System

> Bitcoin self-custody, made physical.
> Hardware wallets and steel seed-phrase backups for people who don't trust paper, the cloud, or anyone but themselves.

## Brand at a glance

**Xellox** (xellox.io) is a Bitcoin-only company that makes:

- **Yokis** — the flagship product. A stack of laser-engravable steel plates inside a black anodized housing, used to permanently back up a 24-word BIP-39 seed phrase. Survives fire, water, time. Ships with an engraving pen / scribe.
- **Hardware wallets** — cold-storage devices for actually holding the keys.
- **Future site** — a new xellox.io with a tech-forward look, simple navigation, integrated checkout (BTCPay + Stripe), an interactive 3D-feel Yokis viewer (front/back, floating), and a live social feed (Twitter/Instagram).

Single-letter mark: a stylized **X** (two interlocking chevrons with curved cup-shaped tips, meeting in a central diamond). Always on a near-black field for the primary lockup.

## Sources used

The user provided no Figma file and no codebase access — only product photography, the logo, and a video reference for the Yokis steel plate. References:

| Source | Path | Notes |
|---|---|---|
| Logo | `assets/logo-x-square.webp` | Original raster logo on black, 800×800 |
| Logo (vectorized) | `assets/logo-x.svg` | Hand-traced SVG approximation. **Flag:** swap with the official vector when available. |
| Yokis hero | `assets/yokis-front.png` | Black anodized case, top plate engraved 1–24 with sample seed-row strip overlay |
| Yokis plates | `assets/yokis-plates-trio.webp`, `assets/yokis-plates-fan.jpg` | Three-deep stack, fanned |
| Engraving pen | `assets/engraving-pen.webp` | Knurled steel scribe that ships with Yokis |
| Steel video | `assets/yokis-steel-video.mp4` | Cinematic steel-plate b-roll for hero loop |
| Live site | xellox.io | Could not fetch — used as conceptual reference only |

> **Action for the user:** if you have the Figma file, the existing site's codebase, official vector logos, or product render PSDs, drop them in via the Import menu and I'll re-tighten the system against the source of truth.

---

## Index

| File / folder | What's in it |
|---|---|
| `README.md` | This file. Brand overview, content + visual foundations, iconography. |
| `SKILL.md` | Agent-skill manifest — load this to design with the Xellox brand. |
| `colors_and_type.css` | All design tokens: color scales, semantic vars, type scale, spacing, radii, shadows, motion. Import this in any artifact. |
| `assets/` | Logos (raster + svg), product photography, video b-roll, icon set. |
| `preview/` | Small HTML cards that populate the Design System tab. |
| `ui_kits/website/` | Hi-fi recreation of the new xellox.io marketing + checkout site. |
| `fonts/` | (Empty — both fonts are loaded via Google Fonts; see Type below.) |

---

## Content fundamentals

**Voice.** Confident, plain-spoken, slightly sovereign. The reader is treated as a Bitcoiner who already gets it — we don't re-explain why self-custody matters, we focus on *how ours is harder, simpler, or more permanent*. Avoid "blockchain" jargon and avoid altcoin energy entirely.

**Person.** Second person ("**Your** keys. **Your** coins.") for marketing surfaces; first-person plural ("**We** ship from Europe in 48 hours") for company statements. Never "I".

**Casing.** Sentence case for everything except the wordmark XELLOX (all-caps) and product names (Yokis, Pascal). Headlines do not Title Case Every Word.

**Tone examples** (write copy in this register):

- ✅ "Steel that outlives you."
- ✅ "Engrave 24 words. Forget the cloud."
- ✅ "21,000,000. That's all there'll ever be. Hold yours like it."
- ✅ "Pay in BTC. Or a card if you must."
- ❌ ~~"Revolutionary blockchain technology empowers you to take control of your financial sovereignty"~~

**Sentence shape.** Short. Declarative. Often a fragment. Numbers are exact (24 words, ₿21M, 304 stainless, 1,200°C). When you must say something long, follow it with a one-line summary.

**Numbers and tickers.** ₿ glyph for bitcoin amounts (₿0.0042). Sats spelled out lowercase ("4,200 sats"). USD is `$1,299`. No emoji in product copy. Hex addresses, txids, and seed words always in mono type.

**Disallow list.** Emoji 🚀🔥💎🙌 — never. "Web3", "crypto" (we say "bitcoin"), "DeFi", "NFT", purple gradients, Comic Sans, the word "synergy". No exclamation points outside of error states.

**CTA verbs.** *Order*, *Get yours*, *Pay with bitcoin*, *Specs*, *Compare*, *Add to cart*. Never "Buy now!" with the bang.

---

## Visual foundations

### Color

The brand's centre of gravity is **near-black** with a single load-bearing accent: **bitcoin orange `#f7931a`** (the official Nakamoto orange). Steel grey supports product photography. There is no second hue — no blue, no purple, no green except status. This restraint is deliberate; it reads techy and serious without trying.

- **Default surface is dark.** Marketing, product, and checkout default to `--xlx-bg` (`#0a0a0c`). A bright variant exists (`[data-theme="light"]`) for spec sheets, docs, and data-dense screens — same orange accent over a `#f6f6f7` field.
- **Orange is sparing.** Use it for: primary CTAs, the bitcoin glyph, the active row in a list, the focused seed-word slot, glow accents around the Yokis hero. Never large flat orange fills.
- **No gradients except deliberate orange glow** behind the hero product (`--xlx-glow-orange-soft`). No bluish-purple gradients. No rainbow.

### Type

- **Display + UI: Space Grotesk** (300–700). Geometric, slightly squared, modern-techy without being sci-fi. Tight tracking on display sizes.
- **Mono / data: JetBrains Mono** (400–700). Used for: seed words, hex, txids, serial numbers, eyebrow labels, code blocks.
- Loaded via Google Fonts in `colors_and_type.css`. No local TTFs shipped.

> **Substitution flag:** The user did not provide a brand typeface. Space Grotesk + JetBrains Mono are my pick — please confirm or supply the actual brand font and I will swap the `@import` line.

### Spacing

8px base grid. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128. Marketing sections breathe with 96–128px vertical padding; cards are tight (16–24px).

### Backgrounds

Mostly **flat near-black**. Allowed accents:

- A single **soft orange radial glow** behind the Yokis hero — large, low-opacity, no banding.
- **Subtle 1px grid or dot pattern** (8% opacity white) on technical pages. Optional.
- **Full-bleed product photography** on dark — yes, especially the steel-plate b-roll video on the homepage hero.
- No hand-drawn illustrations. No painterly textures. No noise/grain layers. The product photography is the texture.

### Borders & dividers

- Card border: `1px solid var(--xlx-border)` = `#25252c` on dark, `#e2e2e7` on light.
- Heavy dividers (between checkout sections, table headers): `1px solid var(--xlx-border-2)`.
- Focus ring: `0 0 0 2px var(--xlx-bg), 0 0 0 4px var(--xlx-orange-500)` (offset orange ring).
- Corners: 8 / 12 / 16px for cards; 4px for inputs and small chips; pill (999px) for badges.

### Shadows & glows

- Cards on dark use a soft inset highlight on the top edge (`inset 0 1px 0 rgba(255,255,255,0.04)`) plus a wide outer drop. Cards on light use a soft 8/24px shadow pair.
- The Yokis hero gets a **floating shadow** (`--xlx-shadow-float`) so it reads as elevated off the page.
- Orange glow (`--xlx-glow-orange`) is reserved for: primary CTA hover, the active seed-word slot during checkout, "in stock" indicator dot.
- No drop shadows on text. Ever.

### Motion

- **Easing default: `cubic-bezier(0.22, 1, 0.36, 1)`** — fast leave, soft land. Spring (`0.34, 1.56, 0.64, 1`) only on the Yokis flip / scale interactions.
- Durations: 140ms (taps, micro), 220ms (most), 420ms (cards expanding, scenes).
- Yokis 3D-feel viewer: continuous slow Y-rotation (~24s/turn) with mouse parallax + tap-to-flip. Drag to spin. The plate "floats" on a slow vertical bob (3–4px, 4s, ease-in-out).
- Page entrances: 12px upward fade-in, staggered 40ms. No bounces, no slides, no parallax scrolling beyond the hero.
- Reduced motion: drop the bob and parallax, keep flips at 0.1× speed.

### Hover & press states

- **Buttons (primary):** background `--xlx-orange-500` → `--xlx-orange-400` on hover; press shrinks to `scale(0.98)` and shifts to `--xlx-orange-600`. Cursor: `pointer`.
- **Buttons (ghost):** transparent → `rgba(255,255,255,0.06)` on hover; border brightens from `--xlx-border` to `--xlx-border-2`.
- **Links:** orange underline on hover; never colored body text.
- **Cards (clickable):** lift `translateY(-2px)` + brighten border to `--xlx-border-2` + soft orange ring `0 0 0 1px rgba(247,147,26,0.25)`.
- **Inputs:** focus ring is the offset orange ring (above). Errors: 1px `--xlx-danger` border + small inline message in `--xlx-danger`.

### Transparency & blur

Used sparingly:

- **Sticky header**: `rgba(10,10,12,0.7)` + `backdrop-filter: blur(16px)` over a dark page; switches to `rgba(255,255,255,0.7) + blur` in light mode.
- **Modal scrim**: `rgba(0,0,0,0.7)` + `blur(8px)`.
- **Card glassmorphism is forbidden.** Cards are solid surfaces.

### Imagery rules

- Product photography is **shot on true black** with a single hard rim-light from the upper right. Cool-toned. Steel reads silver-grey, not warm.
- No people in product shots (yet). Lifestyle imagery is wide architectural / minimal — concrete, glass, dark wood. Cool, slightly underexposed.
- No stock photography. No emoji-based "illustrations". No isometric vector scenes.

### Layout rules

- Marketing max width: **1280px** content, **1440px** hero. Side gutters scale with viewport (24 / 48 / 80 / 96).
- Top header is **fixed**, 64px tall. Footer is large (4 columns + a wide bottom row).
- Checkout is **single column, 480–560px wide**, centered. No multi-step bars — show all sections stacked, clearly separated.
- Mobile: header collapses to logo + cart icon + menu trigger; hero text first, product after.

---

## Iconography

The user did not provide a custom icon set or icon font.

- **System chosen: [Lucide](https://lucide.dev/)** (the open-source fork of Feather). Stroke-based, 1.75–2px weight, matches the techy/clean aesthetic and pairs cleanly with Space Grotesk. **This is a substitution — flag it for the user.**
- Loaded via CDN: `<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>` then `lucide.createIcons()`.
- Default size 20px in UI, 24px in nav, 16px inline with body text. Color inherits `currentColor`.

**Brand-specific glyphs** that aren't in any icon set are kept as inline SVG in `assets/`:

- `assets/logo-x.svg` — the X monogram.
- `assets/icon-bitcoin.svg` — the ₿ symbol drawn as a filled circle (for chips and price displays).
- `assets/icon-shield-key.svg` — small composite for "self-custody" callouts.

**No emoji** in product chrome. Unicode symbols **₿ × ⌘ ↗ →** are allowed inline in text. Status uses Lucide icons (`check-circle`, `alert-triangle`, `info`), never emoji.

---

## Substitutions to confirm

I made three educated guesses. Please confirm or replace:

1. **Logo vector** — hand-traced from the raster. Send the official SVG.
2. **Typeface** — Space Grotesk + JetBrains Mono. Replace the `@import` in `colors_and_type.css` if you have a brand font (drop TTF/WOFF2 into `fonts/`).
3. **Icon set** — Lucide via CDN. Swap to your own set if you have one.
