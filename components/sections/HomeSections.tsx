import { Check } from "lucide-react";
import Image from "next/image";
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
import { DeviceMockup } from "@/components/visuals/DeviceMockup";
import { NigeriaMap } from "@/components/visuals/NigeriaMap";
import { ServiceRows } from "./ServiceRows";
import { Timeline } from "./Timeline";

/** Credentials stated on the About page, plus the two trust marks the client supplied. */
export function TrustStrip() {
  return (
    <section aria-label="Credentials" className="border-b border-line bg-white">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-10 gap-y-5 py-6">
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-navy-900">
          {site.trust.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <Check className="size-4 text-brand-500" aria-hidden /> {t}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-5">
          <Image src="/images/ndpr-trustmark.png" alt="NDPR Audit Compliant 2024" width={56} height={56} className="size-14 rounded-md border border-line" />
          <Image src="/images/ngx-ipf.png" alt="Nigerian Exchange Investors' Protection Fund" width={56} height={56} className="size-14 object-contain" />
        </div>
      </div>
    </section>
  );
}

export function Intro() {
  return (
    <section className="section-pad">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-6">
          <p className="mb-3 text-sm font-bold text-brand-600">About Sigma Securities</p>
          <h2 className="t-h2 text-navy-900">Your journey to financial freedom starts with a conversation.</h2>
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-6">
          <p className="t-lead text-ink-soft">
            Sigma Securities Limited was incorporated in Nigeria in 1995 and is registered with the SEC as a broker-dealer. From Lagos, we give a growing client base, at home and abroad, access to the Nigerian capital market.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
            <StatCounter from={1900} to={1995} label="Incorporated" plain />
            <StatCounter from={1900} to={1997} label="Operating since" plain />
            <StatCounter to={3} label="Offices" />
            <StatCounter to={6} label="Services" />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/open-account/">Open an Account</Button>
            <Button href="/about/" variant="ghost">About us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section-pad bg-paper-2">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow="What we do" title="Our services" lead="From order placement to settlement, and advice in between." />
            <Reveal delay={0.1}>
              <Button href="/services/" variant="secondary" className="mt-8">All services</Button>
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-8"><ServiceRows /></div>
      </div>
    </section>
  );
}

/** Photograph band carrying the vision and mission. */
export function VisionBand() {
  return (
    <section className="on-dark relative isolate flex min-h-[min(80svh,46rem)] items-center overflow-hidden text-white">
      <div className="absolute inset-0 -z-20">
        <ParallaxImage src="/images/office-reception.jpg" alt="" className="size-full" travel={8} objectPosition="70% 50%" />
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-950/80" />
      <div className="container-x section-pad">
        <Reveal className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-sm font-bold text-sky-300">Our vision</p>
            <blockquote className="text-[clamp(1.7rem,1.1rem+2.4vw,3rem)] font-bold leading-[1.15] tracking-tight">
              {site.vision}
            </blockquote>
          </div>
          <div className="lg:pt-10">
            <p className="mb-3 text-sm font-bold text-sky-300">Our mission</p>
            <p className="t-lead text-white/85">{site.mission}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function STraderSpotlight() {
  const features = ["Real-time market data", "Portfolio monitoring", "Execute from anywhere"];
  return (
    <section className="on-dark bg-navy-900 text-white section-pad">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading dark eyebrow="Online trading" title="Experience seamless online trading with s-Trader" lead="Trade from anywhere with real-time data, portfolio monitoring and fast execution." />
          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-white/90">
                  <Check className="size-5 text-sky-300" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/s-trader/" variant="white">Explore s-Trader</Button>
              <Button href={site.links.clientLogin} variant="outline-light">Client Login</Button>
            </div>
          </Reveal>
        </div>
        <Reveal className="pb-8 lg:col-span-7"><DeviceMockup /></Reveal>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <SectionHeading eyebrow="Why Sigma" title="Why choose us" />
        <RevealGroup className="mt-12 grid gap-10 md:grid-cols-3">
          {site.pillars.map((p) => (
            <RevealItem key={p.title} className="border-t-2 border-navy-900 pt-6">
              <span className="grid size-12 place-items-center rounded-lg bg-brand-500 text-white">
                <Icon name={p.icon} className="size-6" />
              </span>
              <h3 className="t-h3 mt-5 text-navy-900">{p.title}</h3>
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
    <section className="section-pad bg-paper-2">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow="Our story" title="Established 1995. Operating since 1997." />
            <Reveal delay={0.1} className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image src="/images/office-desk.jpg" alt="Consultation room at Sigma Securities" fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
            </Reveal>
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-4">
          <Timeline />
          <Reveal className="mt-10"><Button href="/about/" variant="secondary">Read our story</Button></Reveal>
        </div>
      </div>
    </section>
  );
}

/** Photo grid of the real offices. */
export function Gallery() {
  return (
    <section className="section-pad overflow-hidden" aria-label="Inside Sigma Securities">
      <div className="container-x">
        <SectionHeading eyebrow="Our offices" title="Where your mandates are handled" />
        <div className="mt-12 grid gap-4 md:grid-cols-12 md:gap-6">
          <ParallaxImage src="/images/office-lobby.jpg" alt="Glass staircase and offices" className="aspect-[4/3] rounded-2xl md:col-span-7" sizes="(min-width:768px) 55vw, 100vw" travel={6} />
          <ParallaxImage src="/images/office-reception.jpg" alt="Reception with illuminated staircase" className="aspect-[4/3] rounded-2xl md:col-span-5" sizes="(min-width:768px) 40vw, 100vw" objectPosition="75% 50%" travel={6} />
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
        <RevealGroup className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {site.steps.map((s, i) => (
            <RevealItem key={s.title}>
              <span className="grid size-11 place-items-center rounded-full bg-navy-900 font-bold text-white">{i + 1}</span>
              <h3 className="mt-5 text-lg font-bold text-navy-900">{s.title}</h3>
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
    <section className="on-dark bg-navy-900 text-white section-pad">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading dark eyebrow="Our footprint" title="Offices in Lagos, Abuja and Jalingo" />
          <RevealGroup className="mt-8 divide-y divide-white/15 border-y border-white/15">
            {offices.map((o) => (
              <RevealItem key={o.city} className="py-5">
                <p className="text-lg font-bold">{o.role}</p>
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
    <section className="border-b border-line py-7" aria-label="Regulators and market bodies">
      <Marquee label="Regulators and market bodies">
        {site.regulators.map((r) => (
          <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-lg font-bold text-navy-900/50 hover:text-brand-600">
            {r.name}
          </a>
        ))}
      </Marquee>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="on-dark bg-brand-600 text-white section-pad">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <SectionHeading dark eyebrow="Stay informed" title="Sign up for alerts, news and Sigma Securities Insights" />
        <Reveal delay={0.1}><NewsletterForm /></Reveal>
      </div>
    </section>
  );
}

export function GetInTouch() {
  return (
    <section className="section-pad">
      <Reveal className="container-x">
        <div className="on-dark flex flex-col items-start justify-between gap-8 rounded-2xl bg-navy-900 p-8 text-white md:flex-row md:items-center md:p-14">
          <div>
            <h2 className="t-h2">Ready to start investing?</h2>
            <p className="t-lead mt-3 max-w-xl text-white/80">Speak to our front desk or visit one of our offices.</p>
            <p className="mt-4 text-white/70">
              <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              {site.phones.map((p) => (
                <span key={p.href}> · <a href={p.href} className="hover:text-white">{p.label}</a></span>
              ))}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/open-account/" variant="white">Open an Account</Button>
            <Button href="/contact/" variant="outline-light">Contact us</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
