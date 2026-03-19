"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, AlertCircle, CheckCircle2 } from "lucide-react";

export type InputVariant = "default" | "filled" | "underline";
export type InputState = "default" | "error" | "success";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  variant?: InputVariant;
  state?: InputState;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const variantBase: Record<InputVariant, string> = {
  default:
    "border border-outline-soft rounded-xl bg-white px-4 focus:border-cta focus:ring-2 focus:ring-cta/15",
  filled:
    "border border-transparent rounded-xl bg-surface-low px-4 focus:bg-white focus:border-cta focus:ring-2 focus:ring-cta/15",
  underline:
    "border-0 border-b-2 border-outline-soft rounded-none bg-transparent px-0 focus:border-cta",
};

const stateStyles: Record<InputState, string> = {
  default: "",
  error:   "!border-red-400 focus:!ring-red-100 focus:!border-red-500",
  success: "!border-emerald-400 focus:!ring-emerald-100 focus:!border-emerald-500",
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      success,
      variant = "default",
      state,
      leadingIcon,
      trailingIcon,
      type = "text",
      className,
      id,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    const derivedState: InputState =
      state ?? (error ? "error" : success ? "success" : "default");

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

        <div className="relative flex items-center">
          {leadingIcon && (
            <span className="absolute left-3.5 text-neutral pointer-events-none">
              {leadingIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            type={inputType}
            className={cn(
              "w-full h-11 text-sm text-dark placeholder:text-neutral/60",
              "transition-all duration-200 outline-none",
              variantBase[variant],
              stateStyles[derivedState],
              leadingIcon && "pl-10",
              (trailingIcon || isPassword || derivedState !== "default") && "pr-10",
              className
            )}
            {...props}
          />

          {/* Trailing slot: state icon > password toggle > custom icon */}
          <span className="absolute right-3.5 flex items-center gap-1 text-neutral">
            {derivedState === "error" && (
              <AlertCircle className="w-4 h-4 text-red-500" />
            )}
            {derivedState === "success" && (
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            )}
            {derivedState === "default" && isPassword && (
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="text-neutral hover:text-primary transition-colors"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            )}
            {derivedState === "default" && !isPassword && trailingIcon && trailingIcon}
          </span>
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

Input.displayName = "Input";
export default Input;
