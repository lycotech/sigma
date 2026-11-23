import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

/** Eyebrow + title + lead block used at the top of most sections. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  dark,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      <p
        className={cn(
          "mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em]",
          dark ? "text-gold-400" : "text-gold-700",
        )}
      >
        <span className="h-px w-8 bg-current" aria-hidden />
        {eyebrow}
      </p>
      <h2 className={cn("t-h2", dark ? "text-white" : "text-navy-900")}>{title}</h2>
      {lead && (
        <p className={cn("t-lead mt-5", dark ? "text-white/70" : "text-ink-soft")}>{lead}</p>
      )}
    </Reveal>
  );
}
