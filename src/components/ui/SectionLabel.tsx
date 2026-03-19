import { cn } from "@/lib/utils";

interface SectionLabelProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
}

export default function SectionLabel({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  titleClassName,
}: SectionLabelProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      {eyebrow && (
        <span className="text-cta font-black tracking-[0.35em] text-[10px] uppercase">
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "text-4xl md:text-5xl font-black text-dark tracking-tight leading-[1.1]",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-primary/60 text-base leading-relaxed max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
