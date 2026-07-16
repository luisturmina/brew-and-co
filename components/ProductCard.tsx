import Image from "next/image"
import { cn } from "@/lib/utils"
import { categoryColorClass, type MenuItem } from "@/lib/menu"

const LABEL_STYLES = {
  popular: "bg-caramel-pale text-caramel",
  "favorito da casa": "bg-terracotta-pale text-terracotta",
  novo: "bg-parchment text-espresso-muted",
  "": "",
}

interface ProductCardProps {
  item: MenuItem
  variant?: "grid" | "inline"
  className?: string
}

export function ProductCard({
  item,
  variant = "grid",
  className,
}: ProductCardProps) {
  const isGrid = variant === "grid"
  const circleSize = isGrid ? "w-28 h-28" : "w-20 h-20"

  return (
    <div
      className={cn(
        "bg-foam rounded-[20px] p-6 shadow-[0_4px_24px_rgba(35,26,16,0.09)]",
        "hover:shadow-[0_8px_40px_rgba(35,26,16,0.14)] transition-shadow duration-[250ms]",
        isGrid ? "flex flex-col gap-4" : "flex items-center gap-4",
        className
      )}
    >
      {/* Drip circle */}
      <div
        className={cn(
          "rounded-full shrink-0 overflow-hidden relative",
          categoryColorClass[item.categoria],
          circleSize
        )}
      >
        <Image
          src={item.imageUrl}
          alt={item.imageAlt}
          fill
          className="object-cover"
          sizes={isGrid ? "112px" : "80px"}
        />
      </div>

      {/* Content */}
      <div className={cn("flex flex-col", isGrid ? "gap-2" : "gap-1 min-w-0")}>
        {/* Label badge */}
        {item.etiqueta && (
          <span
            className={cn(
              "self-start text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full",
              LABEL_STYLES[item.etiqueta]
            )}
          >
            {item.etiqueta}
          </span>
        )}

        {/* Name */}
        <p
          className={cn(
            "font-display font-bold text-espresso leading-tight",
            isGrid ? "text-lg" : "text-base line-clamp-1"
          )}
        >
          {item.nome}
        </p>

        {/* Description */}
        <p
          className={cn(
            "text-espresso-muted text-sm leading-relaxed",
            isGrid ? "line-clamp-2" : "line-clamp-1"
          )}
        >
          {item.descricao}
        </p>

        {/* Price */}
        <p className="font-semibold text-terracotta text-base mt-auto">
          £{item.preco.toFixed(2)}
        </p>
      </div>
    </div>
  )
}
