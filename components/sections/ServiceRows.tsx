"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/content/services";
import { ease } from "@/lib/motion";

/** Editorial numbered list of services. Each row fills navy on hover; no boxed cards. */
export function ServiceRows({ dark = false }: { dark?: boolean }) {
  return (
    <ul className={dark ? "border-t border-white/15" : "border-t border-navy-900/20"}>
      {services.map((s, i) => (
        <motion.li
          key={s.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease, delay: i * 0.04 }}
          className={dark ? "border-b border-white/15" : "border-b border-navy-900/20"}
        >
          <Link
            href={`/services/${s.slug}/`}
            className="group relative grid grid-cols-[3rem_1fr_auto] items-center gap-x-4 gap-y-2 overflow-hidden py-7 md:grid-cols-[4rem_1.5fr_1fr_auto] md:gap-x-8 md:py-9"
          >
            {/* hover fill */}
            <span
              aria-hidden
              className="absolute inset-y-0 -inset-x-4 origin-bottom scale-y-0 bg-navy-900 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100 md:-inset-x-8"
            />
            <span className="relative font-display text-xl text-gold-700 transition-colors group-hover:text-gold-400 md:text-2xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="relative font-display text-2xl leading-tight text-navy-900 transition-[color,transform] duration-500 group-hover:translate-x-2 group-hover:text-white md:text-[1.9rem]">
              {s.title}
              {s.placeholder && (
                <span className="mt-2 block w-fit rounded border border-dashed border-gold-700/60 px-1.5 py-0.5 align-middle font-sans text-[0.55rem] font-bold uppercase tracking-wider text-gold-700 group-hover:border-gold-400 group-hover:text-gold-400 ">
                  Placeholder copy
                </span>
              )}
            </span>
            <span className="relative col-span-2 col-start-2 text-ink-soft transition-colors group-hover:text-white/75 md:col-span-1 md:col-start-auto">
              {s.summary}
            </span>
            <span className="relative row-start-1 col-start-3 grid size-12 place-items-center rounded-full border border-navy-900/25 text-navy-900 transition-all duration-500 group-hover:rotate-45 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-navy-950 md:row-start-auto md:col-start-auto md:size-14">
              <ArrowUpRight className="size-5" />
            </span>
          </Link>
        </motion.li>
      ))}
    </ul>
  );
}
