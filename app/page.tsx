import Link from "next/link"
import { HeroSection } from "@/components/HeroSection"
import { ProductCard } from "@/components/ProductCard"
import { EventCard } from "@/components/EventCard"
import { popularItems } from "@/lib/menu"
import { events } from "@/data/events"

export default function HomePage() {
  const featured = popularItems.slice(0, 6)

  return (
    <>
      <HeroSection />

      {/* Popular Items */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[80rem] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-3">
                Os favoritos
              </p>
              <h2 className="font-display font-black text-[clamp(2rem,4vw,2.75rem)] text-espresso leading-tight tracking-tight text-balance">
                Os Queridinhos
              </h2>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center h-11 px-6 rounded-full border border-border text-espresso-muted text-sm font-semibold hover:border-espresso hover:text-espresso hover:bg-parchment transition-all duration-[250ms] shrink-0"
            >
              Ver cardápio completo →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((item) => (
              <ProductCard key={item.nome} item={item} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[80rem] mx-auto px-6 md:px-12">
        <hr className="border-border" />
      </div>

      {/* Events */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-[80rem] mx-auto">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-3">
              Agenda semanal
            </p>
            <h2 className="font-display font-black text-[clamp(2rem,4vw,2.75rem)] text-espresso leading-tight tracking-tight text-balance">
              Esta Semana no Brew & Co
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <p className="mt-8 text-sm text-espresso-muted text-center">
            Entrada gratuita. Reservas recomendadas para a degustação —{" "}
            <a
              href="mailto:ola@brewandco.co.uk"
              className="text-terracotta hover:underline"
            >
              ola@brewandco.co.uk
            </a>
          </p>
        </div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-espresso py-16 px-6 md:px-12">
        <div className="max-w-[80rem] mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-4">
            Vem nos visitar
          </p>
          <h2 className="font-display font-black text-[clamp(1.75rem,3.5vw,2.5rem)] text-foam leading-tight tracking-tight mb-3 text-balance">
            14 Ridley Road, Dalston E8 2NP
          </h2>
          <p className="text-foam/60 text-sm mb-8">
            Seg – Sex 7h30–20h00 · Sáb – Dom 8h00–19h00
          </p>
          <Link
            href="/about"
            className="inline-flex items-center h-12 px-7 rounded-full border border-foam/30 text-foam text-sm font-semibold hover:border-foam hover:bg-foam/10 transition-all duration-[250ms]"
          >
            Nossa história →
          </Link>
        </div>
      </section>
    </>
  )
}
