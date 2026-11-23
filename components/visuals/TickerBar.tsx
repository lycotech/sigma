import { ArrowDownRight, ArrowUpRight } from "lucide-react";

/** Placeholder tickers. NOT real quotes: labelled "Illustrative data" in the UI. */
const items = [
  { sym: "SAMPLE-A", chg: 1.24 },
  { sym: "SAMPLE-B", chg: -0.62 },
  { sym: "SAMPLE-C", chg: 0.48 },
  { sym: "SAMPLE-D", chg: 2.05 },
  { sym: "SAMPLE-E", chg: -1.1 },
  { sym: "SAMPLE-F", chg: 0.31 },
  { sym: "SAMPLE-G", chg: 0.9 },
  { sym: "SAMPLE-H", chg: -0.27 },
];

/** Decorative market-style strip. Clearly labelled; contains no real prices. */
export function TickerBar() {
  const row = items.map((t) => (
    <span key={t.sym} className="flex items-center gap-2 whitespace-nowrap text-xs font-semibold">
      <span className="text-white/80">{t.sym}</span>
      <span className={t.chg >= 0 ? "text-up" : "text-down"}>
        {t.chg >= 0 ? <ArrowUpRight className="inline size-3.5" /> : <ArrowDownRight className="inline size-3.5" />}
        {Math.abs(t.chg).toFixed(2)}%
      </span>
    </span>
  ));
  return (
    <div className="marquee relative flex items-center overflow-hidden border-y border-white/10 bg-navy-950/70 backdrop-blur" role="region" aria-label="Illustrative market ticker">
      <span className="z-10 shrink-0 bg-gold-500 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-widest text-navy-950">
        Illustrative data
      </span>
      <div className="animate-marquee flex w-max gap-10 py-2 pl-6" aria-hidden>
        <div className="flex gap-10">{row}</div>
        <div className="flex gap-10">{row}</div>
      </div>
    </div>
  );
}
