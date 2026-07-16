# Navbar

A minimal horizontal navigation bar. Logo on the left, links centered, search on the right. Below the bar, a full-width hairline divider completes the composition. Sticky on scroll.

---

## Anatomy

```
┌──────────────────────────────────────────────────────────────────┐
│  ☕ brew & co.    Home  Shop  Vendor  Pages  Blog    [  Search ]  │
├──────────────────────────────────────────────────────────────────┤
│ (hairline divider — color: border)                               │
```

---

## Component

```tsx
// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/vendor", label: "Vendor" },
  { href: "/pages", label: "Pages" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-[80rem] mx-auto px-6 md:px-12">
        <nav
          className="flex items-center h-[4.5rem] gap-8"
          aria-label="Main navigation"
        >

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-none
              font-display font-bold text-xl text-espresso tracking-tight
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 rounded"
          >
            <span aria-hidden="true">☕</span>
            <span>brew & co.</span>
          </Link>

          {/* Nav links */}
          <ul
            role="list"
            className="hidden md:flex items-center gap-8 flex-1 justify-center"
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="
                    font-body font-medium text-sm text-espresso-muted tracking-wide
                    transition-colors duration-fast ease-brew
                    hover:text-espresso
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 rounded
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search */}
          <div className="hidden md:flex flex-none">
            <label htmlFor="nav-search" className="sr-only">Search products</label>
            <div className="relative">
              <span
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                aria-hidden="true"
              >
                🔍
              </span>
              <input
                id="nav-search"
                type="search"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="
                  h-10 pl-10 pr-4 rounded-pill
                  bg-foam border border-border
                  font-body text-sm text-espresso placeholder:text-muted
                  transition-all duration-base ease-brew
                  focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta
                  w-40 focus:w-56
                "
              />
            </div>
          </div>

          {/* Mobile menu trigger */}
          <button
            className="md:hidden ml-auto
              flex items-center justify-center w-10 h-10 rounded-md
              text-espresso
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
            aria-label="Open menu"
          >
            ☰
          </button>

        </nav>
      </div>
    </header>
  );
}
```

---

## Visual spec

| Property | Value |
|---|---|
| Height | `4.5rem` / 72px |
| Background | `cream` (#F0DCCA) at 90% opacity + backdrop blur |
| Bottom border | 1px `border` (#DFC9B4) |
| Logo font | Fraunces Bold, 20px, tracking-tight |
| Nav link font | DM Sans Medium, 14px, tracking-wide |
| Nav link color | `espresso-muted` (#5C4636), hover `espresso` |
| Search background | `foam` (#FBF5EE) |
| Search border | `border` (#DFC9B4), focus `terracotta` |
| Search width | 160px default, 224px on focus (animated) |
| Z-index | 50 (always above content) |

---

## Responsive behavior

| Breakpoint | Layout |
|---|---|
| `< md` (< 768px) | Logo + hamburger menu icon only |
| `≥ md` (≥ 768px) | Full layout: logo + links + search |

The mobile drawer (triggered by hamburger) renders nav links vertically with the same typographic treatment, plus a full-width search input at the top.

---

## Active link state

```tsx
// Use Next.js usePathname() to mark the current page
import { usePathname } from "next/navigation";

// Inside the link:
className={`... ${pathname === href ? "text-espresso font-semibold" : "text-espresso-muted"}`}
```

---

## Rules

- Navbar is always `sticky top-0` with `z-50`. Content should never visually overlap it.
- `backdrop-blur-sm` and `bg-cream/90` keep the navbar legible when scrolled over content — never use a fully opaque flat white background.
- Logo text uses Fraunces — it's the only nav element that does. All other text is DM Sans.
- Search expand animation (`w-40 focus:w-56`) uses `transition-all` — this is intentional micro-interaction that adds delight without distraction.
- Navigation labels are sentence-case ("Shop", not "SHOP"). Category labels are the exception that uses uppercase (see CategoryBadge).
