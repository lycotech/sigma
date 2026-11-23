import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

const images = {
  reception: { src: "/images/office-reception.jpg", pos: "70% 50%" },
  executive: { src: "/images/office-executive.jpg", pos: "60% 50%" },
  lobby: { src: "/images/office-lobby.jpg", pos: "50% 40%" },
  desk: { src: "/images/office-desk.jpg", pos: "50% 50%" },
} as const;

/** Photographic navy hero used at the top of every inner page. */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  image = "reception",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  image?: keyof typeof images;
}) {
  const img = images[image];
  return (
    <section className="grain relative isolate overflow-hidden bg-navy-950 pb-20 pt-44 text-white md:pb-28 md:pt-56">
      <Image src={img.src} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-60" style={{ objectPosition: img.pos }} />
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,var(--color-navy-950)_10%,rgb(6_15_36/0.8)_50%,rgb(6_15_36/0.35)_100%)]" />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-navy-950/80 to-transparent" />
      <div className="container-x">
        <Reveal>
          <p className="mb-6 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
            <span className="h-px w-12 bg-gold-400" aria-hidden /> {eyebrow}
          </p>
          <h1 className="max-w-4xl font-display text-[clamp(2.6rem,1.2rem+5.6vw,6rem)] font-medium leading-[0.98] tracking-[-0.03em]">{title}</h1>
          {lead && <p className="t-lead mt-7 max-w-2xl text-white/75">{lead}</p>}
          {children && <div className="mt-9 flex flex-wrap gap-4">{children}</div>}
        </Reveal>
      </div>
      <div aria-hidden className="hairline absolute inset-x-0 bottom-0" />
    </section>
  );
}
