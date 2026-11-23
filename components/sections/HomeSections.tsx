import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { offices } from "@/content/offices";
import { site } from "@/content/site";
import { NewsletterForm } from "@/components/forms/Forms";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";
import { ParallaxImage } from "@/components/ui/ParallaxImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCounter } from "@/components/ui/StatCounter";
import { WordReveal } from "@/components/ui/WordReveal";
import { DeviceMockup } from "@/components/visuals/DeviceMockup";
import { NigeriaMap } from "@/components/visuals/NigeriaMap";
import { ServiceRows } from "./ServiceRows";
import { Timeline } from "./Timeline";

export function TrustStrip() {
  return (
    <section aria-label="Credentials" className="border-b border-white/10 bg-navy-950">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-12 gap-y-3 py-6">
        {site.trust.map((t) => (
          <span key={t} className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            <ShieldCheck className="size-4 text-gold-400" aria-hidden /> {t}
          </span>
        ))}
      </div>
    </section>
  );
}

/** Large scroll-lit statement followed by real figures. */
export function Manifesto() {
  return (
    <section id="intro" className="section-pad relative overflow-hidden">
      <span aria-hidden className="pointer-events-none absolute -right-10 -top-24 select-none font-display text-[34rem] leading-none text-navy-900/[0.04]">Σ</span>
      <div className="container-x relative">
        <p className="mb-10 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.28em] text-gold-700">
          <span className="h-px w-12 bg-gold-500" aria-hidden /> Your journey to financial freedom
        </p>
        <WordReveal
          className="max-w-6xl font-display text-[clamp(2rem,1rem+4.2vw,4.9rem)] leading-[1.12] tracking-[-0.02em] text-navy-900"
          text="A Lagos stockbroking firm, incorporated in 1995, executing mandates swiftly and reliably for investors at home and abroad."
          highlight={["1995,", "swiftly", "reliably"]}
        />
        <Reveal className="mt-20 grid gap-10 border-t border-navy-900/15 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <StatCounter from={1900} to={1995} label="Incorporated" plain />
          <StatCounter from={1900} to={1997} label="Operating since" plain />
          <StatCounter to={3} label="Offices nationwide" />
          <StatCounter to={6} label="Core services" />
        </Reveal>
        <Reveal delay={0.1} className="mt-14 flex flex-wrap gap-4">
          <Button href="/open-account/" variant="secondary" magnetic>Open an Account</Button>
          <Button href="/contact/" variant="ghost">Talk to us</Button>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section-pad bg-paper-2">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow="What we do" title="Six services. One accountable team." lead="From order placement to settlement, and advice in between." />
            <Reveal delay={0.1}>
              <Button href="/services/" variant="secondary" className="mt-10">All services</Button>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8"><ServiceRows /></div>
      </div>
    </section>
  );
}

/** Full-bleed photographic band carrying the vision statement. */
export function VisionBand() {
  return (
    <section className="relative isolate flex min-h-[min(85svh,50rem)] items-center overflow-hidden text-white">
      <div className="absolute inset-0 -z-20"><ParallaxImage src="/images/office-executive.jpg" alt="" className="size-full" travel={10} /></div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/30" />
      <div className="container-x section-pad">
        <Reveal>
          <p className="mb-8 flex items-center gap-4 text-xs font-bold uppercase tracking-[0.28em] text-gold-300">
            <span className="h-px w-12 bg-gold-400" aria-hidden /> Our vision
          </p>
          <blockquote className="max-w-4xl font-display text-[clamp(2.1rem,1rem+4.5vw,5.2rem)] leading-[1.06] tracking-[-0.02em]">
            To be the <span className="text-gold-gradient italic">undisputed leading</span> and dominant full services stock-broking firm in Nigeria.
          </blockquote>
        </Reveal>
        <Reveal delay={0.15} className="mt-14 max-w-xl border-l-2 border-gold-500 pl-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-300">Our mission</p>
          <p className="mt-3 text-lg leading-relaxed text-white/80">{site.mission}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function STraderSpotlight() {
  const features = ["Real-time market data", "Portfolio monitoring", "Execute from anywhere"];
  return (
    <section className="grain relative overflow-hidden bg-navy-900 text-white section-pad">
      <div aria-hidden className="absolute -right-40 top-0 size-[44rem] rounded-full bg-brand/30 blur-[130px]" />
      <div aria-hidden className="absolute -bottom-40 -left-40 size-[34rem] rounded-full bg-gold-500/10 blur-[120px]" />
      <div className="container-x relative grid items-center gap-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading dark eyebrow="Online trading" title="Experience seamless online trading with s-Trader" lead="Trade from anywhere with real-time data, portfolio monitoring and fast execution." />
          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-white/85">
                  <span className="grid size-6 place-items-center rounded-full bg-gold-500/20 text-gold-300"><Check className="size-4" /></span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/s-trader/" magnetic>Explore s-Trader</Button>
              <Button href={site.links.clientLogin} variant="outline-light">Client Login</Button>
            </div>
          </Reveal>
        </div>
        <Reveal className="pb-8 lg:col-span-7"><DeviceMockup /></Reveal>
      </div>
    </section>
  );
}

/** Three pillars separated by hairlines. No boxes. */
export function WhyUs() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading eyebrow="Why Sigma" title="Why choose us" />
        <RevealGroup className="mt-20 grid md:grid-cols-3 md:divide-x md:divide-navy-900/15">
          {site.pillars.map((p, i) => (
            <RevealItem key={p.title} className="group border-t border-navy-900/15 py-10 md:border-t-0 md:px-10 md:first:pl-0 md:last:pr-0">
              <span className="font-display text-8xl leading-none text-transparent [-webkit-text-stroke:1px_var(--color-gold-500)] transition-colors duration-500 group-hover:text-gold-500/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon name={p.icon} className="mt-8 size-8 text-navy-900 transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-gold-700" />
              <h3 className="t-h3 mt-4 text-navy-900">{p.title}</h3>
              <p className="mt-3 text-ink-soft">{p.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section className="section-pad bg-navy-950 text-white">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading dark eyebrow="Our story" title="Established 1995. Operating since 1997." />
            <Reveal delay={0.1} className="relative mt-10 aspect-[4/3] overflow-hidden rounded-3xl">
              <Image src="/images/office-lobby.jpg" alt="Glass-fronted offices and staircase at Sigma Securities" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-6">
          <Timeline dark />
          <Reveal className="mt-14"><Button href="/about/" variant="outline-light">Read our story</Button></Reveal>
        </div>
      </div>
    </section>
  );
}

/** Asymmetric photo collage of the real offices. */
export function Gallery() {
  return (
    <section className="section-pad overflow-hidden" aria-label="Inside Sigma Securities">
      <div className="container-x">
        <SectionHeading eyebrow="Inside Sigma" title="Where your mandates are handled" />
        <div className="mt-16 grid gap-4 md:grid-cols-12 md:gap-6">
          <ParallaxImage src="/images/office-desk.jpg" alt="Walnut-panelled consultation room with brass lamp" className="aspect-[4/5] rounded-3xl md:col-span-5 md:mt-16" sizes="(min-width:768px) 40vw, 100vw" travel={8} />
          <ParallaxImage src="/images/office-lobby.jpg" alt="Glass staircase and offices" className="aspect-[4/5] rounded-3xl md:col-span-4" sizes="(min-width:768px) 33vw, 100vw" travel={8} />
          <ParallaxImage src="/images/office-reception.jpg" alt="Reception with illuminated staircase" className="aspect-[4/5] rounded-3xl md:col-span-3 md:mt-32" sizes="(min-width:768px) 25vw, 100vw" objectPosition="75% 50%" travel={8} />
        </div>
      </div>
    </section>
  );
}

export function HowToStart() {
  return (
    <section className="section-pad bg-paper-2">
      <div className="container-x">
        <SectionHeading eyebrow="How to get started" title="Four steps to your first trade" lead="Illustrative process, subject to client confirmation." />
        <RevealGroup className="relative mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <span aria-hidden className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-gold-500 via-gold-500/40 to-transparent lg:block" />
          {site.steps.map((s, i) => (
            <RevealItem key={s.title} className="relative">
              <span className="relative grid size-14 place-items-center rounded-full bg-navy-900 font-display text-xl text-gold-300 ring-8 ring-paper-2">{i + 1}</span>
              <h3 className="mt-6 font-display text-2xl text-navy-900">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function Footprint() {
  return (
    <section className="section-pad bg-navy-900 text-white">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2">
        <div>
          <SectionHeading dark eyebrow="Our footprint" title="Offices in Lagos, Abuja and Jalingo" />
          <RevealGroup className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {offices.map((o) => (
              <RevealItem key={o.city} className="py-5">
                <p className="font-display text-2xl text-gold-300">{o.role}</p>
                <p className="mt-1 text-white/70">{o.address}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
        <Reveal><NigeriaMap /></Reveal>
      </div>
    </section>
  );
}

export function RegulatorMarquee() {
  return (
    <section className="border-b border-line py-8" aria-label="Regulators and market bodies">
      <Marquee label="Regulators and market bodies">
        {site.regulators.map((r) => (
          <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-display text-2xl text-navy-900/60 hover:text-gold-700">
            {r.name}
          </a>
        ))}
      </Marquee>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="section-pad bg-navy-800 text-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <SectionHeading dark eyebrow="Stay informed" title="Sign up for alerts, news and Sigma Securities Insights" />
        <Reveal delay={0.1}><NewsletterForm /></Reveal>
      </div>
    </section>
  );
}

/** Giant closing call to action. */
export function GetInTouch() {
  return (
    <section className="grain relative overflow-hidden bg-navy-950 text-white section-pad">
      <div aria-hidden className="absolute left-1/2 top-0 size-[50rem] -translate-x-1/2 rounded-full bg-brand/25 blur-[140px]" />
      <Reveal className="container-x relative">
        <Link href="/contact/" className="group block">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold-400">Ready to start?</p>
          <span className="mt-6 flex items-end justify-between gap-6">
            <span className="font-display text-[clamp(3.2rem,1rem+11vw,12rem)] leading-[0.9] tracking-[-0.04em] transition-transform duration-700 group-hover:translate-x-3">
              Let&apos;s <span className="text-gold-gradient italic">talk.</span>
            </span>
            <span className="mb-4 grid size-16 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-950 transition-transform duration-500 group-hover:rotate-45 md:size-28">
              <ArrowUpRight className="size-8 md:size-12" />
            </span>
          </span>
        </Link>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-white/15 pt-8 text-white/75">
          <a href={`mailto:${site.email}`} className="inline-flex min-h-11 items-center hover:text-gold-300">{site.email}</a>
          {site.phones.map((p) => (
            <a key={p.href} href={p.href} className="inline-flex min-h-11 items-center hover:text-gold-300">{p.label}</a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
