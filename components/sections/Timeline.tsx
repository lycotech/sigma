"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Vertical timeline whose line draws as the section scrolls through the viewport. */
export function Timeline({ dark = false }: { dark?: boolean }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <ol ref={ref} className="relative max-w-3xl space-y-12 pl-10">
      <span aria-hidden className={cn("absolute bottom-2 left-[9px] top-2 w-0.5", dark ? "bg-white/15" : "bg-line")} />
      <motion.span
        aria-hidden
        style={{ scaleY }}
        className="absolute bottom-2 left-[9px] top-2 w-0.5 origin-top bg-brand-500"
      />
      {site.timeline.map((m) => (
        <Reveal as="li" key={m.date} className="relative">
          <span
            className={cn(
              "absolute -left-10 top-1.5 size-5 rounded-full border-4 border-brand-500",
              dark ? "bg-navy-900" : "bg-white",
            )}
          />
          <p className={cn("text-sm font-bold", dark ? "text-sky-300" : "text-brand-600")}>{m.date}</p>
          <h3 className={cn("t-h3 mt-1", dark ? "text-white" : "text-navy-900")}>{m.title}</h3>
          <p className={cn("mt-2", dark ? "text-white/70" : "text-ink-soft")}>{m.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
