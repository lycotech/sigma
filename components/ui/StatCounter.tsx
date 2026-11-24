"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  to: number;
  from?: number;
  label: string;
  prefix?: string;
  /** Format without thousands separators (for years). */
  plain?: boolean;
}

/** Counts up to a real figure when scrolled into view. */
export function StatCounter({ to, from = 0, label, prefix, plain }: StatCounterProps) {
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
      <span ref={ref} className="text-4xl font-bold tracking-tight text-navy-900 md:text-5xl">
        {prefix}
        {plain ? value : value.toLocaleString("en-NG")}
      </span>
      <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-ink-soft">{label}</p>
    </div>
  );
}
