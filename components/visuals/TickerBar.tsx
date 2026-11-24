import { ArrowDownRight, ArrowUpRight } from "lucide-react";

/** Placeholder entries. NOT real quotes: the strip is labelled "Illustrative data". */
const items = [
  { sym: "Sample A", chg: 1.24 },
  { sym: "Sample B", chg: -0.62 },
  { sym: "Sample C", chg: 0.48 },
  { sym: "Sample D", chg: 2.05 },
  { sym: "Sample E", chg: -1.1 },
  { sym: "Sample F", chg: 0.31 },
  { sym: "Sample G", chg: 0.9 },
  { sym: "Sample H", chg: -0.27 },
];

/** Decorative market-style strip. Clearly labelled; contains no real prices. */
export function TickerBar() {
  const row = items.map((t) => (
    <span key={t.sym} className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold">
      <span className="text-navy-900">{t.sym}</span>
      <span className={`inline-flex items-center gap-0.5 ${t.chg >= 0 ? "text-up" : "text-down"}`}>
        {t.chg >= 0 ? <ArrowUpRight className="size-4" /> : <ArrowDownRight className="size-4" />}
        {Math.abs(t.chg).toFixed(2)}%
      </span>
    </span>
  ));
  return (
    <div
      className="marquee relative flex items-center overflow-hidden border-y border-line bg-paper-2"
      role="region"
      aria-label="Illustrative market ticker"
    >
      <span className="z-10 shrink-0 bg-navy-900 px-4 py-3 text-xs font-bold text-white">Illustrative data</span>
      <div className="animate-marquee flex w-max gap-12 py-3 pl-8" aria-hidden>
        <div className="flex gap-12">{row}</div>
        <div className="flex gap-12">{row}</div>
      </div>
    </div>
  );
}
