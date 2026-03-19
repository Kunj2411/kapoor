import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  as?: "section" | "div";
  bg?: "white" | "surface" | "surface-low" | "dark" | "primary";
}

export default function SectionWrapper({
  as: Tag = "section",
  bg = "white",
  className,
  children,
  ...props
}: SectionWrapperProps) {
  const bgMap = {
    white: "bg-white",
    surface: "bg-surface",
    "surface-low": "bg-surface-low",
    dark: "bg-dark",
    primary: "bg-primary",
  };

  return (
    <Tag
      className={cn("py-24 px-6 lg:px-12", bgMap[bg], className)}
      {...props}
    >
      <div className="max-w-[1400px] mx-auto">{children}</div>
    </Tag>
  );
}
