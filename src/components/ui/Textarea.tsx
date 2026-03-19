"use client";

import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  resize?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, hint, error, success, resize = false, className, id, ...props }, ref) => {
    const derivedState = error ? "error" : success ? "success" : "default";
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
          <textarea
            ref={ref}
            id={inputId}
            className={cn(
              "w-full min-h-[120px] px-4 py-3 text-sm text-dark placeholder:text-neutral/60",
              "border border-outline-soft rounded-xl bg-white",
              "transition-all duration-200 outline-none",
              "focus:border-cta focus:ring-2 focus:ring-cta/15",
              derivedState === "error"   && "!border-red-400 focus:!ring-red-100",
              derivedState === "success" && "!border-emerald-400 focus:!ring-emerald-100",
              !resize && "resize-none",
              className
            )}
            {...props}
          />
          {derivedState !== "default" && (
            <span className="absolute top-3 right-3.5">
              {derivedState === "error" && <AlertCircle className="w-4 h-4 text-red-500" />}
              {derivedState === "success" && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
            </span>
          )}
        </div>

        {(hint || error || success) && (
          <p
            className={cn(
              "text-[11px] leading-relaxed",
              derivedState === "error"   && "text-red-500",
              derivedState === "success" && "text-emerald-600",
              derivedState === "default" && "text-neutral"
            )}
          >
            {error ?? success ?? hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
