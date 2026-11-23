"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";

function Word({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="mr-[0.28em] inline-block">
      <motion.span style={{ opacity }} className="inline-block">
        {word}
      </motion.span>
    </span>
  );
}

/** Large statement whose words light up one by one as it scrolls through the viewport. */
export function WordReveal({ text, className, highlight = [] }: { text: string; className?: string; highlight?: string[] }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");

  if (reduce) return <p className={className}>{text}</p>;

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1.5 / words.length;
        const gold = highlight.includes(w.replace(/[.,]/g, ""));
        return (
          <span key={i} aria-hidden className={gold ? "text-gold-500" : undefined}>
            <Word word={w} range={[start, Math.min(end, 1)]} progress={scrollYProgress} />
          </span>
        );
      })}
    </p>
  );
}
