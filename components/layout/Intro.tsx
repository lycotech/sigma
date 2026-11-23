"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoImage } from "@/components/ui/SigmaMark";

/** Short branded intro (about 0.9s). Shown once per session; skipped for reduced motion. */
export function Intro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("sigma-intro") === "1";
      sessionStorage.setItem("sigma-intro", "1");
    } catch {
      /* storage unavailable: show intro */
    }
    if (seen || reduce) return;
    const on = window.setTimeout(() => setShow(true), 0);
    const off = window.setTimeout(() => setShow(false), 1000);
    return () => {
      window.clearTimeout(on);
      window.clearTimeout(off);
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[90] grid place-items-center bg-navy-950"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <LogoImage className="h-24" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
