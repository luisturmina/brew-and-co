"use client"

import { useState } from "react"
import Image from "next/image"
import { ReservationModal } from "@/components/ReservationModal"

const HERO_IMAGE = "/images/pexels-1581554.webp"

export function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section
        id="reserva"
        className="relative h-[85vh] min-h-[600px] overflow-hidden"
      >
        {/* Background image */}
        <Image
          src={HERO_IMAGE}
          alt="Interior aconchegante do Brew & Co em Dalston, Londres"
          fill
          className="object-cover object-center"
          preload={true}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/55 to-espresso/20" />

        {/* Content */}
        <div className="relative z-10 max-w-[80rem] mx-auto px-6 md:px-12 h-full flex items-center">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-5">
              Specialty Coffee · Dalston, London
            </p>

            <h1 className="font-display font-black text-foam leading-tight tracking-tight text-[clamp(2.5rem,5vw,3.75rem)] mb-6 text-balance">
              O café que vale a viagem.
            </h1>

            <p className="text-foam/80 text-lg leading-relaxed mb-10 max-w-md">
              Grãos selecionados de origem única, doces assados na hora e um
              lugar que convida a ficar. No coração de Dalston, seis dias por
              semana.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center h-14 px-8 rounded-full bg-terracotta text-white text-base font-semibold hover:bg-terracotta-dark shadow-[0_4px_16px_rgba(207,94,56,0.45)] transition-colors duration-[250ms]"
              >
                Reserve uma mesa
              </button>
              <a
                href="/menu"
                className="inline-flex items-center h-14 px-8 rounded-full border border-foam/40 text-foam text-base font-semibold hover:border-foam hover:bg-foam/10 transition-all duration-[250ms]"
              >
                Ver cardápio
              </a>
            </div>
          </div>
        </div>
      </section>

      <ReservationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
