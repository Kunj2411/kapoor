"use client";

import { forwardRef, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, AlertCircle } from "lucide-react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, hint, error, options, placeholder, className, id, ...props }, ref) => {
    const hasError = Boolean(error);
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-[11px] font-bold uppercase tracking-widest text-primary/70"
          >
            {label}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={inputId}
            className={cn(
              "w-full h-11 pl-4 pr-10 text-sm text-dark appearance-none",
              "border border-outline-soft rounded-xl bg-white",
              "transition-all duration-200 outline-none cursor-pointer",
              "focus:border-cta focus:ring-2 focus:ring-cta/15",
              hasError && "!border-red-400 focus:!ring-red-100",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-1">
            {hasError && <AlertCircle className="w-4 h-4 text-red-500" />}
            <ChevronDown className="w-4 h-4 text-neutral" />
          </span>
        </div>

        {(hint || error) && (
          <p className={cn("text-[11px] leading-relaxed", hasError ? "text-red-500" : "text-neutral")}>
            {error ?? hint}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
