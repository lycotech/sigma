"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/content/site";
import { ease } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { MarketBoard } from "@/components/visuals/MarketBoard";
import { TickerBar } from "@/components/visuals/TickerBar";

/** Bright hero: message on the left, illustrative market board on the right. */
export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.7, ease },
  });

  return (
    <section className="relative overflow-hidden bg-white">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className="container-x relative grid items-center gap-14 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-7">
          <motion.p
            {...rise(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-bold text-brand-600 shadow-card"
          >
            <span className="size-2 rounded-full bg-up" aria-hidden />
            Stockbrokers in Lagos since 1995
          </motion.p>
          <motion.h1
            {...rise(0.08)}
            className="text-navy-900"
            style={{ fontSize: "clamp(2.5rem, 1.2rem + 3.7vw, 4.6rem)", lineHeight: 1.02 }}
          >
            Swift and <span className="text-brand-500">Reliable</span> Mandate Execution
          </motion.h1>
          <motion.p {...rise(0.16)} className="t-lead mt-6 max-w-xl text-ink-soft">
            {site.heroSub}
          </motion.p>
          <motion.div {...rise(0.24)} className="mt-9 flex flex-wrap gap-3">
            <Button href="/open-account/" magnetic className="px-8 py-4">
              Open an Account <ArrowRight className="size-4" />
            </Button>
            <Button href="/account-update/" variant="outline" className="px-8 py-4">
              Account Update Form
            </Button>
          </motion.div>
          <motion.ul {...rise(0.32)} className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-navy-900">
            {["Licensed broker-dealer", "SEC registered"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check className="size-4 text-up" aria-hidden /> {t}
              </li>
            ))}
          </motion.ul>
        </div>
        <div className="lg:col-span-5">
          <MarketBoard />
        </div>
      </div>
      <TickerBar />
    </section>
  );
}
