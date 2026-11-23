"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { site } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/** Vertical timeline whose gold line draws as the section scrolls through the viewport. */
export function Timeline({ dark = false }: { dark?: boolean }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <ol ref={ref} className="relative max-w-3xl space-y-16 pl-10 md:pl-16">
      <span aria-hidden className={cn("absolute bottom-2 left-[11px] top-2 w-px md:left-[19px]", dark ? "bg-white/15" : "bg-line")} />
      <motion.span
        aria-hidden
        style={{ scaleY }}
        className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-gradient-to-b from-gold-500 to-gold-300 md:left-[19px]"
      />
      {site.timeline.map((m) => (
        <Reveal as="li" key={m.date} className="relative">
          <span
            className={cn(
              "absolute -left-10 top-2 grid size-6 place-items-center rounded-full border-2 border-gold-500 md:-left-16 md:size-10",
              dark ? "bg-navy-950" : "bg-paper",
            )}
          >
            <span className="size-2 rounded-full bg-gold-500 md:size-3" />
          </span>
          <p className="font-display text-[clamp(2.4rem,1.4rem+3.4vw,4.2rem)] leading-none text-gold-gradient">{m.date}</p>
          <h3 className={cn("t-h3 mt-4", dark ? "text-white" : "text-navy-900")}>{m.title}</h3>
          <p className={cn("mt-2", dark ? "text-white/70" : "text-ink-soft")}>{m.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
