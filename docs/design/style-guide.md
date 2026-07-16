# Brew & Co — Style Guide

A complete visual reference for the brand. Every decision here has a reason; the reason is documented.

---

## Brand essence

Brew & Co is an artisanal coffee and beverage brand. Its audience is urban adults who treat their morning ritual as a pleasure, not a transaction. The brand tone is warm, unhurried, and knowledgeable without being pretentious.

**Visual character:** handcrafted warmth meeting precise execution. The palette skews peachy-warm rather than the generic coffee-brown. Typography pairs an expressive variable serif (Fraunces) with a humanist sans (DM Sans) — the tension between personal and professional.

**The aesthetic risk:** using Fraunces, a swash-capable optical-size serif, as the display face where the reference image uses a bold rounded sans. This trades the punchy energy of the reference for something slower and more characterful — an editorial quality that suggests coffee is worth lingering over.

---

## Color

### Palette

| Role | Name | Hex | Token |
|---|---|---|---|
| Main background | Cream | `#F0DCCA` | `--color-cream` |
| Surface / cards | Foam | `#FBF5EE` | `--color-foam` |
| Hover / divider | Parchment | `#E8D0B8` | `--color-parchment` |
| Primary text | Espresso | `#231A10` | `--color-espresso` |
| Secondary text | Espresso Muted | `#5C4636` | `--color-espresso-muted` |
| Placeholder / disabled | Muted | `#9B8878` | `--color-muted` |
| Primary action | Terracotta | `#CF5E38` | `--color-terracotta` |
| Terracotta hover | — | `#A84A2A` | `--color-terracotta-dark` |
| Terracotta tint | — | `#F5D9CE` | `--color-terracotta-pale` |
| Featured accent | Caramel | `#C89A3A` | `--color-caramel` |
| Caramel tint | — | `#F5E6C0` | `--color-caramel-pale` |
| Coffee category | Olive | `#7A8B48` | `--color-cat-coffee` |
| Drinks category | Deep Teal | `#2B6B5A` | `--color-cat-drinks` |
| Tea category | Coral | `#D45040` | `--color-cat-tea` |
| Bakery category | Rose | `#C84060` | `--color-cat-bakery` |
| Input borders | — | `#DFC9B4` | `--color-border` |

### Color hierarchy

```
Surfaces: cream (page) → foam (cards) → parchment (hover)
Text:     espresso → espresso-muted → muted
Accent:   terracotta (action) → caramel (warmth)
Category: olive · teal · coral · rose (always paired with white)
```

### Do / Don't

✅ `text-espresso` on `bg-cream` — always warm, never flat  
✅ `text-terracotta` for prices and key CTAs  
✅ White text on all category colors  
❌ Pure black (`#000`) for text — breaks the warmth contract  
❌ Terracotta as a decorative color — reserve for action  
❌ Mixing category hues across product families  

---

## Typography

### Families

**Fraunces Variable** — display, headlines, logo  
*An optical-size variable serif. Set at `opsz: 144, wght: 900` for hero text; drops gracefully to editorial weight at smaller sizes.*

**DM Sans** — body, UI, labels  
*Geometric humanist sans. Warm at small sizes. Use weights 400, 500, 600 only.*

### Scale

| Level | Token | Size | Font | Weight | Use |
|---|---|---|---|---|---|
| Hero | `--text-hero` | clamp(40–60px) | Fraunces | 900 | Page hero headline |
| 2XL | `--text-2xl` | 36px | Fraunces | 700 | Section titles |
| XL | `--text-xl` | 28px | Fraunces | 700 | Card headlines |
| LG | `--text-lg` | 20px | DM Sans | 600 | Pull quotes, lead text |
| MD | `--text-md` | 16px | DM Sans | 400 | Body copy |
| SM | `--text-sm` | 14px | DM Sans | 400 | Captions, metadata |
| XS | `--text-xs` | 12px | DM Sans | 600 | Category labels (uppercase) |

### Line height rules

- Hero (≥36px): `leading-hero` (1.1) with `tracking-tight` (-0.025em)
- Body copy: `leading-body` (1.65)
- Labels and captions: `leading-label` (1.4)

### Typographic moments

**The hero:** Fraunces Black (wght 900), cream background, near-full viewport width. The headline should be bold enough to stop a scroll.

**Prices:** DM Sans SemiBold in terracotta. The color + weight combination draws the eye without a label.

**Category overlines:** 12px DM Sans SemiBold, uppercase, tracking-widest (0.14em), white on category color. These encode information — don't use the treatment for anything that isn't literally a category.

---

## Spacing

Base unit: **4px**. All spacing is a multiple of this unit.

| Distance | Value | Role |
|---|---|---|
| 4px | `p-1` | Icon-to-text gap |
| 8px | `p-2` | Inline element spacing |
| 12px | `p-3` | Within-component spacing |
| 16px | `p-4` | Internal card padding (compact) |
| 24px | `p-6` | Internal card padding (default), grid gap |
| 32px | `p-8` | Section inner padding |
| 48px | `mb-12` | Title-to-content gap |
| 80px | `py-20` | Between major sections |

---

## Border Radius

| Token | Value | Use |
|---|---|---|
| `--radius-sm` | 6px | Tags, inline chips |
| `--radius-md` | 12px | Inputs, small panels |
| `--radius-lg` | 20px | Product cards |
| `--radius-xl` | 32px | Feature panels, hero container |
| `--radius-pill` | 9999px | All buttons, search bar |
| `--radius-circle` | 50% | Category badges, drip circles |

---

## Shadows

| Token | Value | Use |
|---|---|---|
| `--shadow-sm` | `0 1px 4px rgba(35,26,16,.07)` | Subtle lift |
| `--shadow-card` | `0 4px 24px rgba(35,26,16,.09)` | Default card |
| `--shadow-hover` | `0 8px 40px rgba(35,26,16,.15)` | Card hover state |
| `--shadow-cta` | `0 4px 16px rgba(207,94,56,.35)` | Primary button |

Shadows use the espresso base color (not black) so they feel warm rather than cold.

---

## Motion

Interactions are quick and purposeful. No decorative animation.

| Token | Value | Use |
|---|---|---|
| `--duration-fast` | `150ms` | Hover color transitions |
| `--duration-base` | `250ms` | Size/shadow changes, expand |
| `--duration-slow` | `400ms` | Page transitions, reveals |
| `--ease-brew` | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` | All transitions |

Always honor `prefers-reduced-motion`. The tokens CSS file includes a blanket override.

---

## Iconography

Icons are outline-style, monochromatic. On colored category circles, icons are always white. In body context, icons match the surrounding text color.

Recommended library: **Lucide React** (MIT, tree-shakeable, consistent stroke weight).

```tsx
import { Coffee, Droplets, Leaf, Cookie } from "lucide-react";
```

Icon sizes follow text scale:
- Inline with `text-sm`: `w-4 h-4`
- Inline with `text-md`: `w-5 h-5`
- Category badge (md): `w-7 h-7`
- Hero accent: `w-10 h-10`

---

## Imagery

Product photography or illustration should:
- Feature the product in the foreground, overflowing its container slightly
- Use warm, natural lighting — no cold blue-white studio backgrounds
- Pair with a category-colored circle background, never white or transparent

Illustrated assets (as in the reference) read as artisanal and handcrafted. Prefer illustration over flat photography where budget allows.

---

## Page structure

```
┌────────────────────────────────┐
│  Navbar (sticky, z-50)         │
├────────────────────────────────┤
│  Hero section                  │
│    Headline + subtitle + CTA   │
│    Product drip circle         │
│    Category sidebar            │
├────────────────────────────────┤
│  Featured products row         │
│    3 × ProductCard             │
├────────────────────────────────┤
│  Category section (optional)   │
├────────────────────────────────┤
│  Footer                        │
└────────────────────────────────┘
```

Each section has `py-[var(--spacing-section-y)]` (80px) vertical padding and lives inside the `max-w-[80rem] mx-auto px-6 md:px-12` container wrapper.

---

## Accessibility

- Minimum contrast for body text on cream: ≥ 4.5:1 (`text-espresso` on `bg-cream` is ~12:1 ✅)
- Minimum contrast for terracotta on foam: 3.8:1 — use only at ≥18px bold or with additional affordance
- All interactive elements have `focus-visible` rings in terracotta
- Category badges include `aria-label` on their buttons
- All `<Image />` components require descriptive `alt` text
- Reduced motion supported via `@media (prefers-reduced-motion: reduce)`
