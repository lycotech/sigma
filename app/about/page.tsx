import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Timeline } from "@/components/sections/Timeline";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import { Check } from "lucide-react";

export const metadata = pageMeta("About", "Sigma Securities Limited: a Lagos-based stockbroking firm incorporated in 1995.", "/about/");

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A Lagos stockbroking firm, built on trust since 1995" lead="Sigma Securities Limited is registered with the SEC as a broker-dealer and holds a dealing membership of the Nigerian exchange." image="lobby" />

      <section className="section-pad">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-700">Vision</p>
            <p className="t-h2 mt-4 font-display text-navy-900">{site.vision}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gold-700">Mission</p>
            <p className="t-lead mt-4 text-ink-soft">{site.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-paper-2">
        <div className="container-x">
          <SectionHeading eyebrow="History" title="Our story" align="center" />
          <div className="mt-16"><Timeline /></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-x grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Approach" title="How we work" />
            <RevealGroup className="mt-10 space-y-4">
              {site.approach.map((a) => (
                <RevealItem key={a}>
                  <p className="flex gap-3 text-ink-soft"><Check className="mt-1 size-5 shrink-0 text-gold-500" aria-hidden />{a}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-lift">
            <Image src="/images/office-lobby.jpg" alt="Glass-fronted offices and staircase at Sigma Securities" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-navy-900 text-white">
        <div className="container-x">
          <SectionHeading dark eyebrow="Leadership" title="Leadership and team" lead="[Placeholder] Names and roles to be supplied by Sigma Securities." />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="placeholder-tag rounded-2xl p-6 text-sm text-white/60">[Placeholder] Team member {n}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
