/** Stylised laptop + phone showing an illustrative trading dashboard. Not a real screenshot; all figures are decorative. */
function Dashboard({ compact }: { compact?: boolean }) {
  const bars = [38, 52, 44, 66, 58, 78, 70, 92];
  return (
    <div className="flex h-full w-full flex-col gap-3 bg-navy-900 p-3 text-[7px] text-white/70 sm:text-[9px]">
      <div className="flex items-center justify-between">
        <span className="font-bold tracking-widest text-sky-300">s-TRADER</span>
        <span className="rounded bg-white/10 px-1.5 py-0.5">Illustrative</span>
      </div>
      <div className="rounded-lg bg-white/5 p-2">
        <p>Portfolio overview</p>
        <svg viewBox="0 0 200 60" className="mt-1 h-auto w-full" fill="none" aria-hidden>
          <path d="M0 48 L25 40 L50 44 L75 28 L100 32 L125 18 L150 22 L175 8 L200 12" stroke="#a9b8ff" strokeWidth="2" />
          <path d="M0 48 L25 40 L50 44 L75 28 L100 32 L125 18 L150 22 L175 8 L200 12 V60 H0Z" fill="#8196f5" fillOpacity="0.18" />
        </svg>
      </div>
      {!compact && (
        <div className="flex flex-1 items-end gap-1.5 rounded-lg bg-white/5 p-2">
          {bars.map((b, i) => (
            <span key={i} className="flex-1 rounded-sm bg-gradient-to-t from-brand-500 to-sky-300" style={{ height: `${b}%` }} />
          ))}
        </div>
      )}
      <div className="grid grid-cols-3 gap-1.5">
        {["Watchlist", "Orders", "Research"].map((l) => (
          <span key={l} className="rounded bg-white/5 py-1.5 text-center">{l}</span>
        ))}
      </div>
    </div>
  );
}

export function DeviceMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl" role="img" aria-label="Illustration of the s-Trader dashboard on a laptop and phone">
      <div className="rounded-t-2xl border-[6px] border-b-0 border-navy-800 bg-navy-950 shadow-lift">
        <div className="aspect-[16/10] overflow-hidden rounded-t-lg">
          <Dashboard />
        </div>
      </div>
      <div className="mx-[-4%] h-3 rounded-b-2xl bg-gradient-to-b from-silver to-navy-700 shadow-lift" />
      <div className="absolute -bottom-6 right-[-2%] w-[26%] rounded-[1.4rem] border-[5px] border-navy-800 bg-navy-950 shadow-lift">
        <div className="aspect-[9/18] overflow-hidden rounded-[1rem]">
          <Dashboard compact />
        </div>
      </div>
    </div>
  );
}
