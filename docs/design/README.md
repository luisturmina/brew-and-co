# Brew & Co — Design System

A handcrafted identity for an artisanal coffee and beverage brand. Warm, distinctive, never templated.

## What's in here

```
docs/design/
├── README.md                    ← you are here
├── style-guide.md               ← color, typography, spacing all-in-one
├── tokens/
│   ├── design-tokens.css        ← Tailwind v4 @theme tokens (source of truth)
│   ├── colors.md                ← color reference and usage rules
│   ├── typography.md            ← type scale, fonts, weights
│   └── spacing.md               ← spacing scale and layout grid
└── components/
    ├── button.md                ← Button variants and states
    ├── product-card.md          ← ProductCard component spec
    ├── category-badge.md        ← CategoryBadge component spec
    └── navbar.md                ← Navbar component spec
```

## Design principles

**Warmth over sterility.** Every color, spacing choice, and type weight should feel like it came from a place that roasts its own beans — tactile, considered, unhurried.

**The drip circle is the signature.** Circular product showcases with category-coded warm hues are the recurring motif. They're not decorative; they encode meaning (product type) and carry the brand.

**Typography does the heavy lifting.** Fraunces (display) paired with DM Sans (body) creates the tension between warmth and clarity that defines the brand.

## Tech stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Fonts | Google Fonts via `next/font/google` |

## How to use tokens

Import `design-tokens.css` in `globals.css` after the Tailwind import:

```css
@import "tailwindcss";
@import "../docs/design/tokens/design-tokens.css";
```

All `--color-*` tokens become Tailwind utilities automatically in v4:
`bg-cream`, `text-espresso`, `border-terracotta`, etc.

## Brand personality

**Not:** corporate, minimalist, cold, rushed.
**Yes:** handcrafted, warm, precise, a little indulgent.
