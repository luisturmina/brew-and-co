# Spacing & Layout

The layout is 4px-grid-based (Tailwind default). Spacing tokens name the semantic role, not just the size.

---

## Spacing Scale

Tailwind v4 inherits the full default spacing scale (multiples of 0.25rem / 4px). The tokens below add semantic names for the most important distances.

| Token | Value | px | Role |
|---|---|---|---|
| `--spacing-section-y` | `5rem` | 80px | Vertical padding between major page sections |
| `--spacing-card-p` | `1.5rem` | 24px | Internal padding for product cards |
| `--spacing-nav-h` | `4.5rem` | 72px | Navbar height |

For all other spacing, use Tailwind's standard scale directly: `p-4` (16px), `gap-6` (24px), `mb-12` (48px), etc.

---

## Layout Grid

The site uses a single centered container with a 12-column implicit grid where needed.

```
max-width: var(--width-container);   /* 1280px */
padding-inline: var(--spacing-container);  /* 24px on mobile, 48px md+ */
margin-inline: auto;
```

Tailwind equivalent:
```
max-w-[80rem] px-6 md:px-12 mx-auto
```

### Column model (reference)

```
┌──────────────────────────────────────────────────────┐
│  ←24px pad→                              ←24px pad→  │
│  ┌────────────────────────────────────┐              │
│  │        12-col implicit grid        │              │
│  │    col span used per component     │              │
│  └────────────────────────────────────┘              │
│               max 1280px centered                    │
└──────────────────────────────────────────────────────┘
```

Common span patterns:
- Hero headline: `col-span-5` (left half)
- Hero image: `col-span-4` (center)
- Category sidebar: `col-span-2` (right)
- Product card grid: 3 columns (`grid-cols-3 gap-6`)

---

## Breakpoints

Tailwind v4 default breakpoints apply:

| Name | Min-width | Usage |
|---|---|---|
| `sm` | 640px | Two-column layouts begin |
| `md` | 768px | Navigation expands, hero side-by-side |
| `lg` | 1024px | Full layout unlocked |
| `xl` | 1280px | Max container width reached |

---

## Vertical Rhythm

Section spacing follows a loose rhythm of 80px (section-y). Inside sections, use:

- **80px** between sections (`py-[5rem]` or `var(--spacing-section-y)`)
- **48px** between a section title and its content (`mb-12`)
- **24px** between related elements (card grid gap, stacked items)
- **12px** within a component (label to value, icon to text)
- **8px** micro-spacing (button icon gap, inline badge gap)

---

## Max Widths

| Token | Value | Use on |
|---|---|---|
| `--width-container` | `1280px` | Page wrapper |
| `--width-prose` | `768px` | Text blocks, descriptions |

---

## Z-Index Scale

| Value | Use |
|---|---|
| `z-0` | Normal document flow |
| `z-10` | Cards, elevated content |
| `z-20` | Dropdowns, tooltips |
| `z-30` | Modals, overlays |
| `z-50` | Navbar (always on top) |
