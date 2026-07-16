# Button

Buttons use a pill shape exclusively (`border-radius: 9999px`). There are three variants: Primary, Secondary, and Ghost. Rounded pills reinforce the soft, approachable warmth of the brand.

---

## Variants

### Primary

The default action button. Dark espresso background with white text. Used for the main CTA on any view.

```tsx
// components/ui/Button.tsx
<button className="
  inline-flex items-center gap-2
  h-12 px-6 rounded-pill
  bg-espresso text-white
  font-body font-medium text-sm tracking-wide
  shadow-cta
  transition-all duration-base ease-brew
  hover:bg-espresso-muted hover:shadow-hover
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2
  active:scale-[0.97]
">
  Get Promo
</button>
```

Visual spec:
- Height: 48px
- Horizontal padding: 24px
- Background: `espresso` (#231A10)
- Text: white, DM Sans 500, 14px, tracking-wide
- Hover: `espresso-muted` (#5C4636) background
- Focus: 2px terracotta ring with 2px offset
- Active: scale 97%

### Primary with Icon

Same as Primary but includes a terracotta icon circle on the right (pattern from the reference).

```tsx
<button className="inline-flex items-center gap-3 h-12 pl-6 pr-2 rounded-pill bg-espresso text-white font-body font-medium text-sm tracking-wide transition-all duration-base ease-brew hover:shadow-hover">
  Get Promo
  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-terracotta">
    {/* Play icon SVG */}
  </span>
</button>
```

### Secondary (Outline)

Outlined pill for secondary actions. Uses border + transparent background.

```tsx
<button className="
  inline-flex items-center justify-center
  h-12 px-6 rounded-pill
  border border-border bg-transparent
  text-espresso font-body font-medium text-sm tracking-wide
  transition-all duration-base ease-brew
  hover:border-espresso hover:bg-parchment
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2
  active:scale-[0.97]
">
  Learn More
</button>
```

### Ghost

No border, transparent. For low-emphasis actions inside panels or next to Primary buttons.

```tsx
<button className="
  inline-flex items-center gap-1
  h-10 px-4 rounded-pill
  bg-transparent text-espresso-muted
  font-body font-medium text-sm
  transition-all duration-base ease-brew
  hover:text-espresso hover:bg-parchment
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-1
">
  View all →
</button>
```

### Terracotta (Accent)

For promotional or pricing-related CTAs where terracotta is contextually appropriate.

```tsx
<button className="
  inline-flex items-center justify-center
  h-12 px-6 rounded-pill
  bg-terracotta text-white
  font-body font-medium text-sm tracking-wide
  shadow-cta
  transition-all duration-base ease-brew
  hover:bg-terracotta-dark
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2
  active:scale-[0.97]
">
  Order Now
</button>
```

---

## Sizes

| Size | Class | Height | Padding | Font |
|---|---|---|---|---|
| `sm` | `h-9 px-4 text-xs` | 36px | 16px | 12px |
| `md` (default) | `h-12 px-6 text-sm` | 48px | 24px | 14px |
| `lg` | `h-14 px-8 text-md` | 56px | 32px | 16px |

---

## States

| State | Visual |
|---|---|
| Default | Full opacity, shadow-cta on Primary |
| Hover | Background shift, shadow-hover |
| Focus | Terracotta ring (2px, 2px offset) |
| Active | `scale-[0.97]` |
| Disabled | `opacity-50 pointer-events-none` |
| Loading | Replace text with spinner, same dimensions |

---

## TypeScript component interface

```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "terracotta";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  loading?: boolean;
}
```

---

## Rules

- **Never** use square or lightly-rounded buttons — the pill is a brand constraint, not an option.
- **One Primary per view.** Multiple primary buttons dilute hierarchy.
- **Ghost buttons** need surrounding context — don't use them in isolation where the interaction isn't already clear.
- Always use `focus-visible` (not `:focus`) to avoid focus rings on mouse click.
