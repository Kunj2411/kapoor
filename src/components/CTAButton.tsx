"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface CTAButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant = "primary", size = "md", children, href, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-bold uppercase tracking-widest transition-all duration-300 rounded-lg cursor-pointer";

    const variants = {
      primary: "bg-cta text-white hover:bg-cta-dark hover:-translate-y-0.5 shadow-md hover:shadow-lg",
      secondary: "bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 shadow-md",
      ghost: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20",
    };

    const sizes = {
      sm: "text-[11px] px-6 py-2.5",
      md: "text-[12px] px-8 py-3.5",
      lg: "text-[13px] px-10 py-5",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";
export default CTAButton;
