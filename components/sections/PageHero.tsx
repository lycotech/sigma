import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

const images = {
  reception: { src: "/images/office-reception.jpg", pos: "70% 50%" },
  executive: { src: "/images/office-executive.jpg", pos: "60% 50%" },
  lobby: { src: "/images/office-lobby.jpg", pos: "50% 40%" },
  desk: { src: "/images/office-desk.jpg", pos: "50% 50%" },
} as const;

/** Navy page header with a real office photograph on the right (desktop). */
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
    <section className="on-dark relative overflow-hidden bg-navy-900 text-white">
      <div className="container-x grid items-center gap-10 py-14 md:py-20 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <p className="mb-4 text-sm font-semibold text-sky-300">{eyebrow}</p>
          <h1 className="t-hero max-w-3xl" style={{ fontSize: "clamp(2.1rem, 1.2rem + 3.4vw, 4rem)" }}>
            {title}
          </h1>
          {lead && <p className="t-lead mt-5 max-w-2xl text-white/80">{lead}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </Reveal>
        <div className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl lg:col-span-5 lg:block">
          <Image
            src={img.src}
            alt=""
            fill
            priority
            sizes="40vw"
            className="object-cover"
            style={{ objectPosition: img.pos }}
          />
        </div>
      </div>
    </section>
  );
}
