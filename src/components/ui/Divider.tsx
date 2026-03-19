import { cn } from "@/lib/utils";

interface DividerProps {
  label?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function Divider({
  label,
  className,
  orientation = "horizontal",
}: DividerProps) {
  if (orientation === "vertical") {
    return <div className={cn("w-px self-stretch bg-outline-soft", className)} />;
  }

  if (label) {
    return (
      <div className={cn("flex items-center gap-4", className)}>
        <div className="flex-1 h-px bg-outline-soft" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-neutral shrink-0">
          {label}
        </span>
        <div className="flex-1 h-px bg-outline-soft" />
      </div>
    );
  }

  return <div className={cn("h-px w-full bg-outline-soft", className)} />;
}
