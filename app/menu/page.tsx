import { Suspense } from "react"
import type { Metadata } from "next"
import { ProductCard } from "@/components/ProductCard"
import { MenuFilters } from "@/components/MenuFilters"
import {
  menuItems,
  categories,
  itemsByCategory,
  type MenuCategory,
} from "@/lib/menu"

export const metadata: Metadata = {
  title: "Cardápio — Brew & Co.",
  description:
    "Explore nosso cardápio: espressos de origem única, bebidas geladas, doces artesanais, salgados e sanduíches.",
}

interface MenuPageProps {
  searchParams: Promise<{ categoria?: string }>
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const { categoria } = await searchParams

  const activeCategory =
    categoria && categories.includes(categoria as MenuCategory)
      ? (categoria as MenuCategory)
      : null

  const filteredItems = activeCategory
    ? menuItems.filter((item) => item.categoria === activeCategory)
    : null

  return (
    <>
      {/* Header */}
      <section className="bg-parchment py-16 px-6 md:px-12 border-b border-border">
        <div className="max-w-[80rem] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-3">
            Brew & Co. · Dalston
          </p>
          <h1 className="font-display font-black text-[clamp(2.5rem,5vw,3.75rem)] text-espresso leading-tight tracking-tight mb-4 text-balance">
            Cardápio
          </h1>
          <p className="text-espresso-muted text-lg max-w-xl leading-relaxed">
            Tudo feito com cuidado, na ordem em que você pedir. Grãos de origem
            única, receitas que não pedem desculpas.
          </p>
        </div>
      </section>

      {/* Filters + Items */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-[80rem] mx-auto">
          {/* Filters */}
          <div className="mb-12">
            <Suspense
              fallback={
                <div className="flex gap-6 animate-pulse">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-full bg-parchment" />
                      <div className="w-12 h-3 rounded-full bg-parchment" />
                    </div>
                  ))}
                </div>
              }
            >
              <MenuFilters />
            </Suspense>
          </div>

          {/* Items — filtered view */}
          {filteredItems && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <ProductCard key={item.nome} item={item} variant="grid" />
              ))}
            </div>
          )}

          {/* Items — grouped view (all categories) */}
          {!filteredItems && (
            <div className="flex flex-col gap-16">
              {categories.map((cat) => (
                <div key={cat}>
                  <div className="flex items-baseline gap-4 mb-8">
                    <h2 className="font-display font-bold text-2xl text-espresso">
                      {cat}
                    </h2>
                    <span className="text-sm text-espresso-muted">
                      {itemsByCategory[cat].length} itens
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {itemsByCategory[cat].map((item) => (
                      <ProductCard key={item.nome} item={item} variant="grid" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
