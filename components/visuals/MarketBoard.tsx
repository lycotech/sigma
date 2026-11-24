"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { ease } from "@/lib/motion";

const line = "M0 92 L30 82 L60 88 L90 62 L120 72 L150 48 L180 56 L210 30 L240 40 L270 16 L300 22";

/** A floating card that gently bobs (transform only; static for reduced motion). */
function Float({ children, className, delay = 0, amp = 8 }: { children: React.ReactNode; className: string; delay?: number; amp?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -amp, 0] }}
      transition={
        reduce
          ? { duration: 0.4 }
          : {
              opacity: { delay: 0.6 + delay, duration: 0.6 },
              y: { delay: 0.6 + delay, duration: 5 + delay * 2, repeat: Infinity, ease: "easeInOut" },
            }
      }
    >
      {children}
    </motion.div>
  );
}

/** Hero visual: arch photograph with illustrative market cards. All figures are decorative. */
export function MarketBoard() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-[34rem] lg:ml-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease }}
        className="absolute right-0 top-0 h-[88%] w-[74%] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-paper-2 shadow-lift"
      >
        <Image
          src="/images/office-lobby.jpg"
          alt="Consultation room at Sigma Securities"
          fill
          priority
          sizes="(min-width: 1024px) 30vw, 70vw"
          className="object-cover object-[30%_50%]"
        />
      </motion.div>

      {/* chart card */}
      <Float className="absolute left-0 top-[16%] w-[60%] rounded-3xl border border-line bg-white p-4 shadow-lift sm:p-5">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold text-navy-900 sm:text-sm">Market watch</p>
          <span className="rounded-full bg-paper-2 px-2 py-0.5 text-[0.6rem] font-bold text-ink-soft">Illustrative</span>
        </div>
        <svg viewBox="0 0 300 110" className="mt-3 h-auto w-full" fill="none" aria-hidden>
          {[28, 56, 84].map((y) => (
            <line key={y} x1="0" x2="300" y1={y} y2={y} stroke="#dde1ee" strokeDasharray="3 5" />
          ))}
          <motion.path
            d={`${line} V110 H0Z`}
            fill="#1c35d0"
            fillOpacity="0.08"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          />
          <motion.path
            d={line}
            stroke="#1c35d0"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.8, duration: 2.2, ease }}
          />
        </svg>
        <div className="mt-2 flex gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-up/10 px-2 py-1 text-[0.65rem] font-bold text-up sm:text-xs">
            <ArrowUpRight className="size-3" /> 1.24%
          </span>
          <span className="rounded-full bg-paper-2 px-2 py-1 text-[0.65rem] font-semibold text-ink-soft sm:text-xs">Sample A</span>
        </div>
      </Float>

      {/* order card */}
      <Float delay={0.6} amp={10} className="absolute bottom-[3%] right-[2%] w-[58%] rounded-3xl border border-line bg-white p-4 shadow-lift sm:p-5">
        <div className="flex items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-up/10 text-up sm:size-10">
            <CheckCircle2 className="size-5" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-bold text-navy-900 sm:text-sm">Buy mandate</p>
            <p className="text-[0.65rem] font-semibold text-up sm:text-xs">Executed</p>
          </div>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper-2">
          <motion.div
            className="h-full rounded-full bg-brand-500"
            initial={reduce ? { width: "100%" } : { width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 1.6, ease }}
          />
        </div>
        <p className="mt-2 text-[0.6rem] font-semibold text-ink-soft">Illustrative order status</p>
      </Float>

      {/* rotating badge */}
      <div className="absolute bottom-[6%] left-[2%] grid size-24 place-items-center rounded-full bg-navy-900 text-white shadow-lift sm:size-32">
        <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 size-full" aria-hidden>
          <defs>
            <path id="badge-ring" d="M50 50 m-38 0 a38 38 0 1 1 76 0 a38 38 0 1 1 -76 0" />
          </defs>
          <text fontSize="9.5" fontWeight="700" letterSpacing="2.4" fill="#a9b8ff">
            <textPath href="#badge-ring">SINCE 1995 · LAGOS · STOCKBROKERS ·</textPath>
          </text>
        </svg>
        <span className="font-display text-3xl font-bold sm:text-4xl">Σ</span>
      </div>
    </div>
  );
}
