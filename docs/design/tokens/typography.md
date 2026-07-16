# Typography

Two fonts, one tension: Fraunces (display) brings warmth and personality; DM Sans (body) delivers clarity and speed. Together they feel handcrafted but precise.

---

## Font Families

### Fraunces Variable — Display

A variable optical-size serif with pronounced personality. At large sizes its swash characteristics read as bold and inviting; at smaller sizes it shifts toward classical elegance.

- **Role:** Headlines, hero copy, section titles, price emphasis
- **Variable axes:** weight (`wght` 100–900), optical size (`opsz` 9–144), softness (`SOFT`), wonk (`WONK`)
- **Recommended settings at hero size:** `wght: 900`, `opsz: 144`, `SOFT: 0`, `WONK: 0`
- **Google Fonts import name:** `Fraunces`

```tsx
// app/layout.tsx
import { Fraunces, DM_Sans } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  weight: ["400", "600", "700", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
```

### DM Sans — Body

A geometric humanist sans-serif. Warm but structured. Highly legible at small sizes, unobtrusive in running text.

- **Role:** Body copy, navigation, labels, captions, UI strings
- **Weights in use:** 400 (regular), 500 (medium), 600 (semibold)

---

## Type Scale

All values defined as `--text-*` tokens. Use the semantic names; avoid arbitrary sizes.

| Token | Value | px equiv | Role |
|---|---|---|---|
| `--text-hero` | `clamp(2.5rem, 5vw, 3.75rem)` | 40–60px | Hero headline |
| `--text-2xl` | `2.25rem` | 36px | Section titles |
| `--text-xl` | `1.75rem` | 28px | Card headlines, sub-sections |
| `--text-lg` | `1.25rem` | 20px | Featured text, pull quotes |
| `--text-md` | `1rem` | 16px | Body copy (default) |
| `--text-sm` | `0.875rem` | 14px | Captions, metadata |
| `--text-xs` | `0.75rem` | 12px | Category labels, overlines |

---

## Weights

| Token | Value | When to use |
|---|---|---|
| `--font-weight-regular` | 400 | Body copy, nav links |
| `--font-weight-medium` | 500 | Secondary labels, button text |
| `--font-weight-semibold` | 600 | Product names, prices |
| `--font-weight-bold` | 700 | Sub-headings |
| `--font-weight-black` | 900 | Hero headlines (Fraunces only) |

---

## Line Heights

| Token | Value | Use on |
|---|---|---|
| `--leading-hero` | `1.1` | Hero headlines at `text-hero` |
| `--leading-heading` | `1.25` | `text-2xl` and `text-xl` |
| `--leading-body` | `1.65` | All body copy at `text-md` |
| `--leading-label` | `1.4` | Labels, captions, nav items |

---

## Letter Spacing

| Token | Value | Use on |
|---|---|---|
| `--tracking-tight` | `-0.025em` | `text-hero` and `text-2xl` Fraunces headlines |
| `--tracking-normal` | `0em` | Body text, most UI |
| `--tracking-wide` | `0.06em` | Navigation links |
| `--tracking-widest` | `0.14em` | Category overlines, eyebrows (uppercase) |

---

## Combinations (paired settings)

### Hero headline

```css
font-family: var(--font-display);
font-size: var(--text-hero);
font-weight: 900;
line-height: var(--leading-hero);
letter-spacing: var(--tracking-tight);
color: var(--color-espresso);
```

Tailwind classes: `font-display text-hero font-black leading-hero tracking-tight text-espresso`

### Section title

```css
font-family: var(--font-display);
font-size: var(--text-2xl);
font-weight: 700;
line-height: var(--leading-heading);
letter-spacing: var(--tracking-tight);
```

### Body copy

```css
font-family: var(--font-body);
font-size: var(--text-md);
font-weight: 400;
line-height: var(--leading-body);
color: var(--color-espresso-muted);
```

### Price

```css
font-family: var(--font-body);
font-size: var(--text-md);
font-weight: 600;
color: var(--color-terracotta);
```

### Category label (overline)

```css
font-family: var(--font-body);
font-size: var(--text-xs);
font-weight: 600;
letter-spacing: var(--tracking-widest);
text-transform: uppercase;
color: var(--color-white);
```

---

## Rules

- **Never** set body copy in Fraunces — it reads as costume rather than clothing at paragraph sizes.
- **Always** apply `--tracking-tight` to Fraunces headlines above 28px; the default spacing is designed for smaller optical sizes.
- **Maximum line length** for body copy: 70 characters (`max-w-prose`). Beyond that, reading speed slows measurably.
- **Minimum font size:** 12px (text-xs). Nothing smaller in the UI; reduce information density instead.
