import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/**
 * FormField — layout wrapper for a label + control + hint row.
 * Use this to compose Input / Select / Textarea inside a <form>.
 */
export interface FormFieldProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  htmlFor?: string;
  required?: boolean;
  hint?: string;
  error?: string;
}

export default function FormField({
  label,
  htmlFor,
  required,
  hint,
  error,
  className,
  children,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-[11px] font-bold uppercase tracking-widest text-primary/70"
        >
          {label}
          {required && <span className="text-cta ml-1">*</span>}
        </label>
      )}
      {children}
      {(hint || error) && (
        <p className={cn("text-[11px] leading-relaxed", error ? "text-red-500" : "text-neutral")}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
