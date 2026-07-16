"use client"

import { cn } from "@/lib/utils"
import type { MenuCategory } from "@/lib/menu"

const colorMap: Record<MenuCategory, string> = {
  "Bebidas com Espresso": "bg-cat-coffee",
  "Bebidas Geladas": "bg-cat-drinks",
  "Doces": "bg-cat-bakery",
  "Salgados": "bg-cat-tea",
  "Sanduíches": "bg-cat-coffee",
}

interface CategoryBadgeProps {
  category: MenuCategory
  label: string
  icon?: React.ReactNode
  active?: boolean
  onClick?: () => void
  size?: "sm" | "md"
  className?: string
}

export function CategoryBadge({
  category,
  label,
  icon,
  active = false,
  onClick,
  size = "md",
  className,
}: CategoryBadgeProps) {
  const circleSize = size === "sm" ? "w-10 h-10 text-lg" : "w-14 h-14 text-2xl"
  const Tag = onClick ? "button" : "div"

  return (
    <Tag
      onClick={onClick}
      className={cn(
        "flex flex-col items-center gap-2 group",
        onClick && "cursor-pointer",
        className
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center rounded-full transition-all duration-[250ms]",
          colorMap[category],
          circleSize,
          active && "ring-2 ring-espresso ring-offset-2",
          onClick && !active && "group-hover:scale-110 group-hover:ring-2 group-hover:ring-espresso/30 group-hover:ring-offset-1"
        )}
      >
        {icon && (
          <span className="text-white select-none leading-none">{icon}</span>
        )}
      </span>
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-widest text-center leading-tight",
          active ? "text-espresso" : "text-espresso-muted",
          onClick && "group-hover:text-espresso"
        )}
      >
        {label}
      </span>
    </Tag>
  )
}
