import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

const images = {
  reception: { src: "/images/office-reception.jpg", pos: "70% 50%" },
  executive: { src: "/images/office-executive.jpg", pos: "60% 50%" },
  lobby: { src: "/images/office-lobby.jpg", pos: "50% 40%" },
  desk: { src: "/images/office-desk.jpg", pos: "45% 50%" },
} as const;

/** Bright page header: graph-paper background, navy title, arch-framed office photograph. */
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
    <section className="relative overflow-hidden bg-paper-2">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div className="container-x relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <p className="mb-5 inline-flex rounded-full border border-line bg-white px-4 py-1.5 text-xs font-bold text-brand-600 shadow-card">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-navy-900" style={{ fontSize: "clamp(2.2rem, 1.2rem + 3.6vw, 4.2rem)", lineHeight: 1.05 }}>
            {title}
          </h1>
          {lead && <p className="t-lead mt-5 max-w-2xl text-ink-soft">{lead}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
        <div className="relative hidden aspect-[4/5] w-full max-w-xs overflow-hidden rounded-t-[999px] rounded-b-3xl shadow-lift lg:col-span-4 lg:ml-auto lg:block">
          <Image src={img.src} alt="" fill priority sizes="25vw" className="object-cover" style={{ objectPosition: img.pos }} />
        </div>
      </div>
    </section>
  );
}
