"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { useState } from "react";
import { downloadCategories, downloads } from "@/content/downloads";
import { cn } from "@/lib/utils";

/** Filterable card grid of forms. */
export function DownloadGrid() {
  const [cat, setCat] = useState<(typeof downloadCategories)[number]>("All");
  const items = downloads.filter((d) => cat === "All" || d.category === cat);
  return (
    <>
      <div role="group" aria-label="Filter downloads" className="flex flex-wrap gap-3">
        {downloadCategories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={cat === c}
            onClick={() => setCat(c)}
            className={cn(
              "min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors",
              cat === c ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-white text-navy-900 hover:border-brand-500",
            )}
          >
            {c}
          </button>
        ))}
      </div>
      <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((d) => (
            <motion.li
              key={d.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
            >
              <a
                href={d.href}
                {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex h-full flex-col rounded-[2rem] border border-line bg-white p-7 shadow-card transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-brand-500"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-brand-600">{d.category}</span>
                <h3 className="mt-3 font-sans text-lg font-bold text-navy-900">{d.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ink-soft">{d.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900">
                  {d.external ? <ExternalLink className="size-4" /> : <Download className="size-4" />}
                  {d.external ? "Open page" : "Download"}
                </span>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  );
}
