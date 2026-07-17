"use client"

import { useRef, useEffect, useState } from "react"

interface Props {
  open: boolean
  onClose: () => void
}

interface FormState {
  name: string
  guests: string
  date: string
  time: string
}

const timeSlots = Array.from({ length: 27 }, (_, i) => {
  const totalMinutes = 8 * 60 + i * 30
  const h = Math.floor(totalMinutes / 60).toString().padStart(2, "0")
  const m = (totalMinutes % 60).toString().padStart(2, "0")
  return `${h}:${m}`
})

export function ReservationModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>({
    name: "",
    guests: "2",
    date: "",
    time: "10:00",
  })

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      dialog.showModal()
    } else {
      dialog.close()
      // reset after close animation
      const t = setTimeout(() => { setSubmitted(false); setError(null) }, 300)
      return () => clearTimeout(t)
    }
  }, [open])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? "Erro ao confirmar reserva.")
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado. Tente novamente.")
    } finally {
      setLoading(false)
    }
  }

  const todayISO = new Date().toISOString().split("T")[0]

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      onClose={onClose}
      className="m-auto rounded-2xl p-0 w-full max-w-md bg-foam border-0 shadow-[0_24px_80px_rgba(35,26,16,0.25)] open:flex open:flex-col"
      style={{ maxHeight: "90vh" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-terracotta mb-0.5">
            Brew & Co. · Dalston
          </p>
          <h2 className="font-display font-bold text-xl text-espresso leading-tight">
            Reserve uma mesa
          </h2>
        </div>
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="w-9 h-9 rounded-full flex items-center justify-center text-espresso-muted hover:bg-parchment hover:text-espresso transition-colors duration-[150ms] text-xl leading-none"
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div className="px-6 py-6 overflow-y-auto">
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-terracotta-pale flex items-center justify-center mx-auto mb-4 text-3xl">
              ☕
            </div>
            <h3 className="font-display font-bold text-xl text-espresso mb-2">
              Reserva confirmada!
            </h3>
            <p className="text-espresso-muted text-sm leading-relaxed">
              Até logo, <strong className="text-espresso">{form.name}</strong>!
              Esperamos você no dia{" "}
              <strong className="text-espresso">
                {new Date(form.date + "T12:00:00").toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                })}
              </strong>{" "}
              às{" "}
              <strong className="text-espresso">{form.time}</strong> para{" "}
              <strong className="text-espresso">
                {form.guests} {Number(form.guests) === 1 ? "pessoa" : "pessoas"}
              </strong>
              .
            </p>
            <button
              onClick={onClose}
              className="mt-6 inline-flex items-center h-11 px-6 rounded-full bg-espresso text-foam text-sm font-semibold hover:bg-espresso-muted transition-colors duration-[250ms]"
            >
              Fechar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="res-name"
                className="text-xs font-semibold uppercase tracking-widest text-espresso-muted"
              >
                Seu nome
              </label>
              <input
                id="res-name"
                type="text"
                required
                placeholder="Como devemos chamar você?"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="h-11 rounded-xl border border-border bg-cream px-4 text-sm text-espresso placeholder:text-muted focus:outline-none focus:border-espresso transition-colors duration-[150ms]"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="res-guests"
                className="text-xs font-semibold uppercase tracking-widest text-espresso-muted"
              >
                Número de pessoas
              </label>
              <select
                id="res-guests"
                value={form.guests}
                onChange={(e) => setForm((f) => ({ ...f, guests: e.target.value }))}
                className="h-11 rounded-xl border border-border bg-cream px-4 text-sm text-espresso focus:outline-none focus:border-espresso transition-colors duration-[150ms] appearance-none cursor-pointer"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "pessoa" : "pessoas"}
                  </option>
                ))}
              </select>
            </div>

            {/* Date + Time row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="res-date"
                  className="text-xs font-semibold uppercase tracking-widest text-espresso-muted"
                >
                  Data
                </label>
                <input
                  id="res-date"
                  type="date"
                  required
                  min={todayISO}
                  value={form.date}
                  onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                  className="h-11 rounded-xl border border-border bg-cream px-3 text-sm text-espresso focus:outline-none focus:border-espresso transition-colors duration-[150ms]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="res-time"
                  className="text-xs font-semibold uppercase tracking-widest text-espresso-muted"
                >
                  Horário
                </label>
                <select
                  id="res-time"
                  value={form.time}
                  onChange={(e) => setForm((f) => ({ ...f, time: e.target.value }))}
                  className="h-11 rounded-xl border border-border bg-cream px-3 text-sm text-espresso focus:outline-none focus:border-espresso transition-colors duration-[150ms] appearance-none cursor-pointer"
                >
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            {/* Actions */}
            <div className="flex gap-3 pt-1">
              <button
                type="button"
                onClick={onClose}
                disabled={loading}
                className="flex-1 h-11 rounded-full border border-border text-espresso-muted text-sm font-semibold hover:border-espresso-muted hover:text-espresso hover:bg-parchment transition-all duration-[250ms] disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex-1 h-11 rounded-full bg-terracotta text-white text-sm font-semibold hover:bg-terracotta-dark shadow-[0_4px_16px_rgba(207,94,56,0.35)] transition-colors duration-[250ms] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Confirmando…" : "Confirmar reserva"}
              </button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  )
}
