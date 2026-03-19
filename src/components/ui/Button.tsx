"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "disabled" | "type" | "form"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-cta text-white border border-cta hover:bg-cta-dark hover:border-cta-dark shadow-[0_4px_14px_0_rgba(216,144,66,0.25)] hover:shadow-[0_6px_20px_0_rgba(216,144,66,0.35)]",
  secondary:
    "bg-primary text-white border border-primary hover:bg-primary-dark hover:border-primary-dark shadow-[0_4px_14px_0_rgba(73,93,110,0.2)] hover:shadow-[0_6px_20px_0_rgba(73,93,110,0.3)]",
  ghost:
    "bg-transparent text-primary border border-transparent hover:bg-primary/6 hover:border-primary/10",
  outline:
    "bg-transparent text-primary border border-primary/30 hover:border-primary hover:bg-primary/5",
  danger:
    "bg-red-500 text-white border border-red-500 hover:bg-red-600 hover:border-red-600 shadow-[0_4px_14px_0_rgba(239,68,68,0.2)]",
};

const sizeStyles: Record<ButtonSize, string> = {
  xs: "h-7 px-3 text-[10px] gap-1.5 rounded-md",
  sm: "h-9 px-4 text-[11px] gap-2 rounded-lg",
  md: "h-11 px-6 text-[12px] gap-2 rounded-lg",
  lg: "h-13 px-8 text-[13px] gap-2.5 rounded-xl",
  xl: "h-16 px-10 text-sm gap-3 rounded-xl",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <motion.button
        ref={ref}
        whileHover={isDisabled ? {} : { scale: 1.02, y: -1 }}
        whileTap={isDisabled ? {} : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        disabled={isDisabled}
        className={cn(
          // base
          "relative inline-flex items-center justify-center font-bold uppercase tracking-widest",
          "transition-colors duration-200 cursor-pointer select-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading && (
          <Loader2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin w-4 h-4" />
        )}
        <span className={cn("inline-flex items-center gap-[inherit]", loading && "opacity-0")}>
          {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
          {children}
          {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
export default Button;
