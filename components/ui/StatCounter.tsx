"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCounterProps {
  to: number;
  from?: number;
  label: string;
  /** Format without thousands separators (for years). */
  plain?: boolean;
  className?: string;
  labelClassName?: string;
}

/** Counts up to a real figure when scrolled into view. */
export function StatCounter({ to, from = 0, label, plain, className, labelClassName }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : from);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(from, to, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, from, to]);

  return (
    <div>
      <span ref={ref} className={cn("font-display text-5xl font-bold tracking-tight md:text-6xl", className)}>
        {plain ? value : value.toLocaleString("en-NG")}
      </span>
      <p className={cn("mt-2 text-sm font-semibold", labelClassName)}>{label}</p>
    </div>
  );
}
