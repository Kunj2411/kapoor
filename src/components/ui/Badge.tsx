import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type BadgeVariant =
  | "default"
  | "primary"
  | "cta"
  | "success"
  | "warning"
  | "danger"
  | "neutral"
  | "outline"
  | "dark";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  pulse?: boolean;
}

const variantStyles: Record<BadgeVariant, string> = {
  default:   "bg-primary/10 text-primary border border-primary/20",
  primary:   "bg-primary text-white border border-primary",
  cta:       "bg-cta/15 text-cta-dark border border-cta/30",
  success:   "bg-emerald-50 text-emerald-700 border border-emerald-200",
  warning:   "bg-amber-50 text-amber-700 border border-amber-200",
  danger:    "bg-red-50 text-red-600 border border-red-200",
  neutral:   "bg-neutral/10 text-neutral border border-neutral/20",
  outline:   "bg-transparent text-primary border border-primary/30",
  dark:      "bg-dark text-white border border-dark",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[9px] px-2 py-0.5 gap-1",
  md: "text-[10px] px-2.5 py-1 gap-1.5",
  lg: "text-[11px] px-3 py-1.5 gap-2",
};

export default function Badge({
  variant = "default",
  size = "md",
  dot = false,
  pulse = false,
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-bold uppercase tracking-widest rounded-full",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex shrink-0">
          {pulse && (
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                variant === "success" ? "bg-emerald-400" :
                variant === "danger"  ? "bg-red-400" :
                variant === "cta"     ? "bg-cta" : "bg-primary"
              )}
            />
          )}
          <span
            className={cn(
              "relative inline-flex rounded-full w-1.5 h-1.5",
              variant === "success" ? "bg-emerald-500" :
              variant === "danger"  ? "bg-red-500" :
              variant === "cta"     ? "bg-cta" :
              variant === "warning" ? "bg-amber-500" : "bg-primary"
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
