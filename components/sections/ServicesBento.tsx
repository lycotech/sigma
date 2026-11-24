"use client";

import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { services } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const themes = [
  { tile: "bg-navy-900 text-white", body: "text-white/75", icon: "bg-white/10 text-sky-300", arrow: "bg-white text-navy-900", tag: "border-sky-300/60 text-sky-300", span: "lg:col-span-7 lg:row-span-2" },
  { tile: "bg-paper-2 text-navy-900", body: "text-ink-soft", icon: "bg-white text-brand-500", arrow: "bg-navy-900 text-white", tag: "border-brand-600/50 text-brand-600", span: "lg:col-span-5" },
  { tile: "bg-brand-500 text-white", body: "text-white/80", icon: "bg-white/15 text-white", arrow: "bg-white text-brand-600", tag: "border-white/60 text-white", span: "lg:col-span-5" },
  { tile: "bg-white text-navy-900 border border-line", body: "text-ink-soft", icon: "bg-paper-2 text-brand-500", arrow: "bg-navy-900 text-white", tag: "border-brand-600/50 text-brand-600", span: "lg:col-span-4" },
  { tile: "bg-paper-2 text-navy-900", body: "text-ink-soft", icon: "bg-white text-brand-500", arrow: "bg-navy-900 text-white", tag: "border-brand-600/50 text-brand-600", span: "lg:col-span-4" },
  { tile: "bg-white text-navy-900 border border-line", body: "text-ink-soft", icon: "bg-paper-2 text-brand-500", arrow: "bg-navy-900 text-white", tag: "border-brand-600/50 text-brand-600", span: "lg:col-span-4" },
];

/** Bento grid of the six services. The lead tile (equities) is larger and carries the detail. */
export function ServicesBento() {
  return (
    <RevealGroup className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
      {services.map((s, i) => {
        const t = themes[i];
        const lead = i === 0;
        return (
          <RevealItem key={s.slug} className={t.span}>
            <Link
              href={`/services/${s.slug}/`}
              className={cn(
                "group relative flex h-full min-h-64 flex-col overflow-hidden rounded-[2rem] p-7 transition-transform duration-300 hover:-translate-y-1.5 md:p-9",
                t.tile,
              )}
            >
              <span className={cn("grid size-14 place-items-center rounded-2xl", t.icon)}>
                <Icon name={s.icon} className="size-7" />
              </span>
              <h3 className={cn("mt-6 font-display font-bold", lead ? "text-3xl md:text-4xl" : "text-2xl")}>{s.title}</h3>
              <p className={cn("mt-3 max-w-md", t.body)}>{s.summary}</p>

              {lead && (
                <>
                  <ul className="mt-6 space-y-2.5 text-sm text-white/85">
                    {s.points.slice(0, 3).map((p) => (
                      <li key={p} className="flex gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-sky-300" aria-hidden /> {p}
                      </li>
                    ))}
                  </ul>
                  <svg viewBox="0 0 400 90" className="mt-auto w-full pt-8 opacity-90" fill="none" aria-hidden>
                    <path d="M0 70 L40 62 L80 66 L120 44 L160 50 L200 30 L240 36 L280 18 L320 24 L360 8 L400 12" stroke="#a9b8ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0 70 L40 62 L80 66 L120 44 L160 50 L200 30 L240 36 L280 18 L320 24 L360 8 L400 12 V90 H0Z" fill="#8196f5" fillOpacity="0.15" />
                  </svg>
                </>
              )}

              <span className={cn("absolute right-6 top-6 grid size-11 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45", t.arrow)}>
                <ArrowUpRight className="size-5" />
              </span>
              {s.placeholder && (
                <span className="mt-auto block pt-6">
                  <span className={cn("block w-fit rounded-full border border-dashed px-2.5 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider", t.tag)}>
                    Placeholder copy
                  </span>
                </span>
              )}
            </Link>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
