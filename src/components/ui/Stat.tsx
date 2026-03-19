"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StatProps {
  value: string;
  label: string;
  description?: string;
  accent?: "cta" | "primary" | "success" | "neutral";
  className?: string;
}

const accentStyles = {
  cta:     "text-cta",
  primary: "text-primary",
  success: "text-emerald-600",
  neutral: "text-neutral",
};

export default function Stat({
  value,
  label,
  description,
  accent = "primary",
  className,
}: StatProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className={cn(
        "flex flex-col gap-1 p-8 bg-white rounded-2xl border border-outline-soft shadow-ambient",
        className
      )}
    >
      <span className={cn("text-5xl font-black tracking-tight leading-none", accentStyles[accent])}>
        {value}
      </span>
      <span className="text-[11px] font-bold uppercase tracking-widest text-primary/60 mt-2">
        {label}
      </span>
      {description && (
        <p className="text-xs text-neutral leading-relaxed mt-1">{description}</p>
      )}
    </motion.div>
  );
}
