"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { site } from "@/content/site";
import { ease } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { HeroChart } from "@/components/visuals/HeroChart";
import { TickerBar } from "@/components/visuals/TickerBar";

const lines = [["Swift", "and", "Reliable"], ["Mandate", "Execution"]];

/** Full-bleed photographic hero: parallax office image, navy veil, masked headline reveal, glass panel. */
export function Hero() {
  const reduce = useReducedMotion();
  const d = reduce ? 0 : 1;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  let n = 0;
  return (
    <section ref={ref} className="grain relative isolate overflow-hidden bg-navy-950 text-white">
      <motion.div aria-hidden style={reduce ? undefined : { y: imgY }} className="absolute inset-x-0 -top-[6%] -bottom-[6%] -z-20">
        <Image
          src="/images/office-reception.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_50%] opacity-70"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,var(--color-navy-950)_8%,rgb(6_15_36/0.82)_42%,rgb(6_15_36/0.25)_100%)]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-navy-950 to-transparent" />
      <div aria-hidden className="absolute inset-x-0 bottom-10 -z-10 h-[38%] opacity-60">
        <HeroChart className="size-full" />
      </div>

      <motion.div style={reduce ? undefined : { y: textY, opacity: fade }} className="container-x relative flex min-h-[min(100svh,60rem)] flex-col justify-center pb-36 pt-32">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 * d, duration: 0.8, ease }}
          className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.28em] text-gold-300"
        >
          <span className="h-px w-12 bg-gold-400" aria-hidden />
          Stockbrokers · Lagos · Since 1995
        </motion.p>

        <h1 className="font-display text-[clamp(2.9rem,1rem+6.4vw,7.4rem)] font-medium leading-[0.94] tracking-[-0.03em]" aria-label={site.tagline}>
          {lines.map((line, li) => (
            <span key={li} className="block overflow-hidden pb-[0.1em]" aria-hidden>
              {line.map((w) => {
                const idx = n++;
                return (
                  <motion.span
                    key={w}
                    className={`mr-[0.22em] inline-block ${w === "Reliable" ? "text-gold-gradient italic" : ""}`}
                    initial={{ y: reduce ? 0 : "115%", opacity: reduce ? 0 : 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: (0.9 + idx * 0.1) * d, duration: 1, ease }}
                  >
                    {w}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 * d, duration: 0.8, ease }}
          className="t-lead mt-8 max-w-lg text-white/75"
        >
          {site.heroSub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 * d, duration: 0.8, ease }}
          className="mt-9 flex flex-wrap gap-4"
        >
          <Button href="/open-account/" magnetic className="px-9 py-4 text-base">
            Open an Account <ArrowRight className="size-4" />
          </Button>
          <Button href="/account-update/" variant="outline-light" className="px-9 py-4 text-base">
            Account Update Form
          </Button>
        </motion.div>

        {/* Glass panel */}
        <motion.aside
          aria-label="Online trading with s-Trader"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1 * d, duration: 1, ease }}
          className="absolute bottom-28 right-[clamp(1.25rem,4vw,2.5rem)] hidden w-72 rounded-3xl border border-white/20 bg-white/10 p-6 shadow-lift backdrop-blur-xl xl:block"
        >
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.25em] text-gold-300">Online trading</p>
          <p className="mt-3 font-display text-2xl leading-snug">Trade from anywhere with s-Trader</p>
          <Link href="/s-trader/" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-400">
            Explore <ArrowRight className="size-4" />
          </Link>
        </motion.aside>

        <motion.a
          href="#intro"
          aria-label="Scroll to content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 * d }}
          className="absolute bottom-24 left-[clamp(1.25rem,4vw,2.5rem)] hidden size-12 place-items-center rounded-full border border-white/30 sm:grid"
        >
          <ArrowDown className="size-5 animate-bounce" />
        </motion.a>
      </motion.div>

      <div className="absolute inset-x-0 bottom-0">
        <TickerBar />
      </div>
    </section>
  );
}
