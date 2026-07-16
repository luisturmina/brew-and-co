"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { categories, categoryColorClass, type MenuCategory } from "@/lib/menu"

const CATEGORY_ICONS: Record<MenuCategory, string> = {
  "Bebidas com Espresso": "☕",
  "Bebidas Geladas": "🧊",
  "Doces": "🥐",
  "Salgados": "🧀",
  "Sanduíches": "🥪",
}

const CATEGORY_SHORT: Record<MenuCategory, string> = {
  "Bebidas com Espresso": "Espresso",
  "Bebidas Geladas": "Geladas",
  "Doces": "Doces",
  "Salgados": "Salgados",
  "Sanduíches": "Sanduíches",
}

export function MenuFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const activeCategory = searchParams.get("categoria")

  const handleFilter = (cat: string | null) => {
    if (cat) {
      router.push(`/menu?categoria=${encodeURIComponent(cat)}`)
    } else {
      router.push("/menu")
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-6 overflow-x-auto pb-2">
      {/* All */}
      <button
        onClick={() => handleFilter(null)}
        className={cn(
          "flex flex-col items-center gap-2 group shrink-0"
        )}
      >
        <span
          className={cn(
            "flex items-center justify-center w-14 h-14 rounded-full transition-all duration-[250ms] text-2xl",
            "bg-parchment",
            !activeCategory
              ? "ring-2 ring-espresso ring-offset-2"
              : "group-hover:ring-2 group-hover:ring-espresso/30 group-hover:ring-offset-1 group-hover:scale-110"
          )}
        >
          <span className="text-espresso leading-none select-none">✦</span>
        </span>
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-widest",
            !activeCategory ? "text-espresso" : "text-espresso-muted group-hover:text-espresso"
          )}
        >
          Todos
        </span>
      </button>

      {/* Category filters */}
      {categories.map((cat) => {
        const isActive = activeCategory === cat
        return (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className="flex flex-col items-center gap-2 group shrink-0"
          >
            <span
              className={cn(
                "flex items-center justify-center w-14 h-14 rounded-full transition-all duration-[250ms] text-2xl",
                categoryColorClass[cat],
                isActive
                  ? "ring-2 ring-espresso ring-offset-2"
                  : "group-hover:ring-2 group-hover:ring-espresso/30 group-hover:ring-offset-1 group-hover:scale-110"
              )}
            >
              <span className="text-white leading-none select-none">
                {CATEGORY_ICONS[cat]}
              </span>
            </span>
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-widest text-center leading-tight",
                isActive ? "text-espresso" : "text-espresso-muted group-hover:text-espresso"
              )}
            >
              {CATEGORY_SHORT[cat]}
            </span>
          </button>
        )
      })}
    </div>
  )
}
