import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-espresso text-foam/70">
      <div className="max-w-[80rem] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-display font-black text-2xl text-foam tracking-tight mb-3">
              Brew & Co.
            </p>
            <p className="text-sm leading-relaxed max-w-xs">
              Specialty coffee, fresh pastries, and a place worth staying in.
              No to-go rush — pull up a chair.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foam mb-4">
              Navegação
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-foam transition-colors duration-[150ms]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-foam transition-colors duration-[150ms]">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foam transition-colors duration-[150ms]">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foam mb-4">
              Visita
            </p>
            <address className="not-italic text-sm space-y-1">
              <p>14 Ridley Road</p>
              <p>Dalston, London E8 2NP</p>
            </address>
            <div className="mt-4 text-sm space-y-1">
              <p>Seg – Sex: 10h30 – 18h00</p>
              <p>Sáb – Dom: 12h00 – 15h00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-foam/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Brew & Co. All rights reserved.</p>
          <p className="text-foam/40">Specialty Coffee · Dalston, London</p>
        </div>
      </div>
    </footer>
  )
}
