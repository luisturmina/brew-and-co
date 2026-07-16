import Image from "next/image"
import type { Event } from "@/data/events"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-foam rounded-[20px] overflow-hidden shadow-[0_4px_24px_rgba(35,26,16,0.09)] hover:shadow-[0_8px_40px_rgba(35,26,16,0.14)] transition-shadow duration-[250ms]">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />

        {/* Day + time badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <span className="inline-flex items-center h-7 px-3 rounded-full bg-terracotta text-white text-xs font-semibold">
            {event.dayOfWeek}
          </span>
          <span className="inline-flex items-center h-7 px-3 rounded-full bg-espresso/80 text-foam text-xs font-semibold">
            {event.time}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-lg text-espresso mb-2 leading-snug">
          {event.title}
        </h3>
        <p className="text-espresso-muted text-sm leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  )
}
