# ProductCard

The product card centers on the "drip circle" — a circular product image on a category-colored background. It's the brand's visual signature. The card itself is minimal: name, price, and optionally a quick-add action.

---

## Anatomy

```
┌─────────────────────────────┐
│                             │
│       ╭───────────╮         │
│      ╱  [category  ╲        │
│     │    colored    │       │
│     │   product img │       │
│      ╲             ╱        │
│       ╰───────────╯         │
│                             │
│   Product Name              │
│   $XX.00          [+]       │
│                             │
└─────────────────────────────┘
```

---

## Component

```tsx
// components/ProductCard.tsx
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  category: "coffee" | "drinks" | "tea" | "bakery";
  href?: string;
  onAddToCart?: () => void;
}

const categoryColors: Record<ProductCardProps["category"], string> = {
  coffee:  "bg-cat-coffee",
  drinks:  "bg-cat-drinks",
  tea:     "bg-cat-tea",
  bakery:  "bg-cat-bakery",
};

export function ProductCard({
  name,
  price,
  image,
  imageAlt,
  category,
  onAddToCart,
}: ProductCardProps) {
  const circleBg = categoryColors[category];

  return (
    <article className="
      flex items-center gap-4
      p-4 rounded-lg bg-foam
      shadow-card
      transition-shadow duration-base ease-brew
      hover:shadow-hover
    ">
      {/* Drip circle */}
      <div className={`
        relative flex-none
        w-20 h-20 rounded-full ${circleBg}
        overflow-hidden
      `}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover object-center scale-110"
        />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="
          font-body font-semibold text-md text-espresso
          truncate leading-label
        ">
          {name}
        </p>
        <p className="font-body font-semibold text-md text-terracotta mt-0.5">
          ${price.toFixed(2)}
        </p>
      </div>

      {/* Quick-add */}
      {onAddToCart && (
        <button
          onClick={onAddToCart}
          aria-label={`Add ${name} to cart`}
          className="
            flex-none flex items-center justify-center
            w-9 h-9 rounded-full
            bg-terracotta text-white
            text-lg leading-none
            transition-all duration-fast ease-brew
            hover:bg-terracotta-dark
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2
            active:scale-90
          "
        >
          +
        </button>
      )}
    </article>
  );
}
```

---

## Hero variant (large, centered)

Used in the page hero where the product floats on a colored circle with a drop shadow.

```tsx
// Larger drip circle for hero use
<div className={`
  relative
  w-80 h-80 rounded-full ${circleBg}
  overflow-visible
`}>
  <Image
    src={image}
    alt={imageAlt}
    width={320}
    height={380}
    className="object-contain object-bottom absolute bottom-0 left-1/2 -translate-x-1/2 scale-110"
    priority
  />
</div>
```

The hero product intentionally overflows its circle (scale-110 + overflow-visible) to create the "dripping out" effect from the reference.

---

## Grid layout

```tsx
// Three-column product row
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map((product) => (
    <ProductCard key={product.id} {...product} />
  ))}
</section>
```

---

## Circle size reference

| Context | Circle size | Image scale |
|---|---|---|
| Inline card (list row) | `w-20 h-20` (80px) | `scale-110` |
| Grid card | `w-28 h-28` (112px) | `scale-110` |
| Hero showcase | `w-72 h-72` (288px) | `scale-125`, overflow visible |

---

## Rules

- **Circle background = category color.** Never use terracotta or caramel as a product circle background — those are accent colors, not category identifiers.
- **Images always fill the circle.** Use `object-cover` for photos; `object-contain` for illustrated assets where the full product should be visible.
- The product name uses `truncate` on single-line cards. Two-line names (`line-clamp-2`) are acceptable on grid cards with more vertical space.
- **Price is always terracotta.** It's the quickest signal in a product list.
