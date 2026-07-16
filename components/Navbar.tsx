"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Cardápio" },
  { href: "/about", label: "Sobre Nós" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 h-[4.5rem] bg-cream/90 backdrop-blur-sm border-b border-border">
        <nav className="max-w-[80rem] mx-auto px-6 md:px-12 h-full flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-black text-xl text-espresso tracking-tight shrink-0 hover:text-terracotta transition-colors duration-[150ms]"
          >
            Brew & Co.
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href)
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "text-sm font-semibold transition-colors duration-[150ms] relative",
                      "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:bg-terracotta after:transition-all after:duration-[250ms]",
                      isActive
                        ? "text-espresso after:w-full"
                        : "text-espresso-muted hover:text-espresso after:w-0 hover:after:w-full"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Reserve CTA — desktop */}
          <Link
            href="/#reserva"
            className="hidden md:inline-flex items-center h-10 px-5 rounded-full bg-terracotta text-white text-sm font-semibold hover:bg-terracotta-dark transition-colors duration-[250ms] shrink-0"
          >
            Reserve uma mesa
          </Link>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 shrink-0"
          >
            <span className="block w-6 h-0.5 bg-espresso rounded-full" />
            <span className="block w-4 h-0.5 bg-espresso rounded-full" />
            <span className="block w-6 h-0.5 bg-espresso rounded-full" />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] bg-espresso/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-72 bg-cream shadow-[4px_0_32px_rgba(35,26,16,0.15)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 h-[4.5rem] border-b border-border">
              <span className="font-display font-black text-xl text-espresso">
                Brew & Co.
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
                className="w-8 h-8 flex items-center justify-center text-espresso-muted hover:text-espresso"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>

            {/* Drawer links */}
            <ul className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map(({ href, label }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href)
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block py-3 text-lg font-semibold border-b border-border/50 transition-colors duration-[150ms]",
                        isActive
                          ? "text-espresso"
                          : "text-espresso-muted hover:text-espresso"
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="px-6 mt-auto mb-8">
              <Link
                href="/#reserva"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center h-12 rounded-full bg-terracotta text-white font-semibold hover:bg-terracotta-dark transition-colors duration-[250ms]"
              >
                Reserve uma mesa
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
