# CategoryBadge

Circular icon containers that identify product families. They appear in the hero sidebar navigation and anywhere categories need visual representation. Each badge has a category-specific background color and a white icon.

---

## Anatomy

```
       ╭─────╮
      │  ico  │   ← category-colored circle
       ╰─────╯
     CATEGORY     ← uppercase label, text-xs, tracking-widest
```

---

## Component

```tsx
// components/CategoryBadge.tsx

type Category = "coffee" | "drinks" | "tea" | "bakery";

interface CategoryBadgeProps {
  category: Category;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  size?: "sm" | "md";
}

const categoryColors: Record<Category, string> = {
  coffee:  "bg-cat-coffee",
  drinks:  "bg-cat-drinks",
  tea:     "bg-cat-tea",
  bakery:  "bg-cat-bakery",
};

export function CategoryBadge({
  category,
  icon,
  label,
  active = false,
  onClick,
  size = "md",
}: CategoryBadgeProps) {
  const circleBg = categoryColors[category];
  const circleSize = size === "sm" ? "w-10 h-10" : "w-14 h-14";
  const iconSize = size === "sm" ? "w-5 h-5" : "w-7 h-7";

  return (
    <button
      onClick={onClick}
      className={`
        flex flex-col items-center gap-2
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2
        rounded-lg p-1
        transition-transform duration-fast ease-brew
        hover:scale-105 active:scale-95
        ${active ? "opacity-100" : "opacity-70 hover:opacity-100"}
      `}
    >
      <span className={`
        flex items-center justify-center
        ${circleSize} rounded-full ${circleBg}
        shadow-sm
        transition-shadow duration-base ease-brew
        ${active ? "shadow-card" : ""}
      `}>
        <span className={`${iconSize} text-white`}>
          {icon}
        </span>
      </span>

      <span className="
        font-body font-semibold text-xs
        tracking-widest uppercase
        text-espresso
        leading-label
      ">
        {label}
      </span>
    </button>
  );
}
```

---

## Sizes

| Size | Circle | Icon | Use |
|---|---|---|---|
| `sm` | `w-10 h-10` (40px) | `w-5 h-5` | Compact navigation, mobile |
| `md` (default) | `w-14 h-14` (56px) | `w-7 h-7` | Hero sidebar, featured categories |

---

## States

| State | Visual |
|---|---|
| Default | `opacity-70` — present but not selected |
| Active | `opacity-100` + `shadow-card` on circle |
| Hover | `opacity-100` + `scale-105` |
| Focus | Terracotta ring |
| Active press | `scale-95` |

---

## Category grid layout

```tsx
// Side-by-side category navigation (as in reference)
<nav aria-label="Product categories" className="flex flex-col gap-6">
  <CategoryBadge category="coffee" label="Coffee" icon={<CoffeeIcon />} />
  <CategoryBadge category="drinks" label="Drinks" icon={<DrinksIcon />} />
  <CategoryBadge category="tea"    label="Tea"    icon={<TeaIcon />} />
  <CategoryBadge category="bakery" label="Bakery" icon={<BakeryIcon />} active />
</nav>
```

---

## Rules

- Circle background is always the category color. Never use a neutral background.
- Icon is always white (`text-white`). Colored icons on colored circles create illegibility.
- Label is always uppercase with widest letter spacing — it reads as a system label, not prose.
- Only one category is `active` at a time. Multiple active badges break the selection paradigm.
- Icon should represent the actual product family clearly. If an icon is ambiguous, prioritize clarity over style.
