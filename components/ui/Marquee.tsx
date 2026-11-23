import type { ReactNode } from "react";

/** Slow, pausable marquee (pauses on hover and keyboard focus). Content is duplicated for a seamless loop. */
export function Marquee({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="marquee relative overflow-hidden" role="region" aria-label={label}>
      <div className="animate-marquee flex w-max gap-12 py-2">
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden>
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent" />
    </div>
  );
}
