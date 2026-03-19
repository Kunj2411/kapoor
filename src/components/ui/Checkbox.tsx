"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  description?: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, className, id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={inputId} className="flex items-start gap-3 cursor-pointer group">
          <div className="relative mt-0.5 shrink-0">
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
              className="peer sr-only"
              {...props}
            />
            <div
              className={cn(
                "w-5 h-5 rounded-md border-2 border-outline-soft bg-white",
                "transition-all duration-200",
                "peer-checked:bg-cta peer-checked:border-cta",
                "peer-focus-visible:ring-2 peer-focus-visible:ring-cta/30 peer-focus-visible:ring-offset-1",
                "group-hover:border-cta/50",
                error && "border-red-400",
                className
              )}
            />
            <Check
              className="absolute inset-0 w-full h-full p-0.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
              strokeWidth={3}
            />
          </div>
          <div>
            {label && (
              <span className="text-sm font-semibold text-dark leading-tight">{label}</span>
            )}
            {description && (
              <p className="text-[11px] text-neutral mt-0.5 leading-relaxed">{description}</p>
            )}
          </div>
        </label>
        {error && <p className="text-[11px] text-red-500 ml-8">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
export default Checkbox;
