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

/** Small label + title + lead block used at the top of most sections. */
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
      <p className={cn("mb-3 text-sm font-bold", dark ? "text-sky-300" : "text-brand-600")}>
        {eyebrow}
      </p>
      <h2 className={cn("t-h2", dark ? "text-white" : "text-navy-900")}>{title}</h2>
      {lead && (
        <p className={cn("t-lead mt-4", dark ? "text-white/75" : "text-ink-soft")}>{lead}</p>
      )}
    </Reveal>
  );
}
