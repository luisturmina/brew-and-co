# Color Tokens

All tokens live in `design-tokens.css` under `@theme`. In Tailwind v4 they resolve automatically to utilities like `bg-cream`, `text-espresso`, `border-terracotta`.

---

## Surfaces

| Token | Hex | Utility | Usage |
|---|---|---|---|
| `--color-cream` | `#F0DCCA` | `bg-cream` | Page background |
| `--color-foam` | `#FBF5EE` | `bg-foam` | Cards, inputs, panels |
| `--color-parchment` | `#E8D0B8` | `bg-parchment` | Hover states, dividers |

The surface stack goes cream → foam → parchment (darkest). Never use pure white for backgrounds; it breaks the warmth contract.

---

## Text

| Token | Hex | Utility | Usage |
|---|---|---|---|
| `--color-espresso` | `#231A10` | `text-espresso` | All primary text |
| `--color-espresso-muted` | `#5C4636` | `text-espresso-muted` | Secondary copy, prices in context |
| `--color-muted` | `#9B8878` | `text-muted` | Placeholders, disabled states |

Use `text-espresso` (not `text-black` or `text-gray-900`) everywhere. The brown undertone keeps text warm and on-brand.

---

## Primary Accent — Terracotta

| Token | Hex | Utility | Usage |
|---|---|---|---|
| `--color-terracotta` | `#CF5E38` | `bg-terracotta` / `text-terracotta` | CTAs, prices, key highlights |
| `--color-terracotta-dark` | `#A84A2A` | `bg-terracotta-dark` | Hover/active on terracotta elements |
| `--color-terracotta-pale` | `#F5D9CE` | `bg-terracotta-pale` | Tinted chip backgrounds, alert banners |

Terracotta is the action color. Reserve it for things the user should notice or interact with. Diluting it on decorative elements reduces its impact.

**Contrast:** `#CF5E38` on `#FBF5EE` (foam) → 3.8:1. Use for large text (≥18px) or interactive elements with additional affordance. For small body copy on terracotta background, use `#FFFFFF`.

---

## Secondary Accent — Caramel

| Token | Hex | Utility | Usage |
|---|---|---|---|
| `--color-caramel` | `#C89A3A` | `bg-caramel` | Featured product circles, warm accents |
| `--color-caramel-pale` | `#F5E6C0` | `bg-caramel-pale` | Soft highlight backgrounds |

Caramel appears on the product showcase drip circles and featured items. It signals "special" or "featured" without the urgency of terracotta.

---

## Category Palette

Each product category has an assigned hue. These appear as the background of drip circles and category badges. The hues are warm and saturated — they carry enough personality to be recognized across the UI.

| Token | Hex | Utility | Category |
|---|---|---|---|
| `--color-cat-coffee` | `#7A8B48` | `bg-cat-coffee` | Coffee |
| `--color-cat-drinks` | `#2B6B5A` | `bg-cat-drinks` | Drinks |
| `--color-cat-tea` | `#D45040` | `bg-cat-tea` | Tea |
| `--color-cat-bakery` | `#C84060` | `bg-cat-bakery` | Bakery |

Always pair category colors with white icons/text (`text-white`). Never swap category colors between product families — recognition depends on consistency.

---

## Utility

| Token | Hex | Utility | Usage |
|---|---|---|---|
| `--color-border` | `#DFC9B4` | `border-border` | Input borders, dividers, hairlines |
| `--color-white` | `#FFFFFF` | `bg-white` / `text-white` | Text on dark/colored backgrounds |
| `--color-black` | `#0A0503` | `text-black` | Extreme contrast only, use sparingly |

---

## Dark Mode

The design reference is light-mode-first. For dark mode, invert the surface stack while keeping accents:

| Light token | Dark equivalent |
|---|---|
| `cream` background | `espresso` (#231A10) background |
| `foam` cards | `#3D2D1E` cards |
| `espresso` text | `foam` (#FBF5EE) text |
| `terracotta` | unchanged |
| Category colors | unchanged |

Define dark variants in `globals.css` using `@media (prefers-color-scheme: dark)`.

---

## Do / Don't

**Do** use `text-espresso` on `bg-cream` or `bg-foam`.  
**Don't** use `text-muted` as a headline color — it fails contrast on cream.  
**Do** restrict terracotta to interactive and price elements.  
**Don't** mix category colors (e.g. coffee olive on a bakery card).  
**Do** test new color combinations at [APCA contrast checker](https://www.myndex.com/APCA/) for WCAG 3.0 compliance.
