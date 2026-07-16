import { ButtonHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "terracotta"
  size?: "sm" | "md" | "lg"
}

const variants = {
  primary:
    "bg-espresso text-foam hover:bg-espresso-muted shadow-[0_2px_8px_rgba(35,26,16,0.22)]",
  secondary:
    "bg-transparent text-espresso border border-border hover:border-espresso-muted hover:bg-parchment",
  ghost:
    "bg-transparent text-espresso-muted hover:text-espresso hover:bg-parchment",
  terracotta:
    "bg-terracotta text-white hover:bg-terracotta-dark shadow-[0_4px_16px_rgba(207,94,56,0.35)]",
}

const sizes = {
  sm: "h-9 px-4 text-xs gap-1.5",
  md: "h-12 px-6 text-sm gap-2",
  lg: "h-14 px-8 text-base gap-2",
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold font-body",
        "transition-all duration-[250ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
