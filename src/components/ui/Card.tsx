"use client";

import { forwardRef, HTMLAttributes } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export type CardVariant = "default" | "elevated" | "outlined" | "filled" | "glass" | "dark";

export interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  variant?: CardVariant;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  children?: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default:
    "bg-white border border-outline-soft shadow-ambient",
  elevated:
    "bg-white shadow-ambient-lg border border-outline-soft/50",
  outlined:
    "bg-white border border-primary/20",
  filled:
    "bg-surface-low border border-outline-soft",
  glass:
    "bg-white/60 backdrop-blur-xl border border-white/40 shadow-ambient",
  dark:
    "bg-dark border border-white/8 text-white",
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", hover = true, padding = "lg", className, children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { scale: 1.02, y: -4 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className={cn(
          "rounded-2xl overflow-hidden",
          variantStyles[variant],
          paddingStyles[padding],
          hover && "cursor-default",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

// Sub-components
export const CardHeader = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-4", className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn("text-xl font-black text-dark tracking-tight leading-tight", className)}
    {...props}
  >
    {children}
  </h3>
);

export const CardDescription = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn("text-sm text-primary/60 leading-relaxed mt-1.5", className)}
    {...props}
  >
    {children}
  </p>
);

export const CardContent = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("", className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-6 pt-6 border-t border-outline-soft flex items-center gap-3", className)}
    {...props}
  >
    {children}
  </div>
);

export default Card;
