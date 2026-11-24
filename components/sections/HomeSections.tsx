import { Check, Download, FileText, Send, TrendingUp } from "lucide-react";
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
import { ServicesBento } from "./ServicesBento";
import { Timeline } from "./Timeline";

/** Credentials from the About page, plus the two trust marks the client supplied. */
export function TrustStrip() {
  return (
    <section aria-label="Credentials" className="bg-white">
      <div className="container-x flex flex-wrap items-center justify-between gap-x-10 gap-y-5 py-8">
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-navy-900">
          {site.trust.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-full bg-up/15 text-up"><Check className="size-3.5" aria-hidden /></span>
              {t}
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <Image src="/images/ndpr-trustmark.png" alt="NDPR Audit Compliant 2024" width={56} height={56} className="size-14 rounded-xl border border-line" />
          <Image src="/images/ngx-ipf.png" alt="Nigerian Exchange Investors' Protection Fund" width={56} height={56} className="size-14 object-contain" />
        </div>
      </div>
    </section>
  );
}

/** Four coloured stat tiles with real figures. */
export function Intro() {
  const tiles = [
    { to: 1995, label: "Year incorporated", plain: true, from: 1900, tile: "bg-navy-900 text-white", num: "text-white", lab: "text-sky-300" },
    { to: 1997, label: "Operating since", plain: true, from: 1900, tile: "bg-brand-500 text-white", num: "text-white", lab: "text-white/80" },
    { to: 3, label: "Offices nationwide", tile: "bg-paper-2", num: "text-navy-900", lab: "text-ink-soft" },
    { to: 6, label: "Core services", tile: "bg-paper-2", num: "text-navy-900", lab: "text-ink-soft" },
  ];
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <p className="mb-3 text-sm font-bold text-brand-600">About Sigma Securities</p>
            <h2 className="t-h2 text-navy-900">Your journey to financial freedom starts with a conversation.</h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <p className="t-lead text-ink-soft">
              Incorporated in Nigeria in 1995 and registered with the SEC as a broker-dealer, Sigma Securities gives a growing client base, at home and abroad, access to the Nigerian capital market.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/open-account/">Open an Account</Button>
              <Button href="/about/" variant="outline">About us</Button>
            </div>
          </Reveal>
        </div>
        <RevealGroup className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
          {tiles.map((t) => (
            <RevealItem key={t.label} className={`rounded-[2rem] p-7 md:p-9 ${t.tile}`}>
              <StatCounter to={t.to} from={t.from} plain={t.plain} label={t.label} className={t.num} labelClassName={t.lab} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="pb-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="What we do" title="Our services" lead="From order placement to settlement, and advice in between." />
          <Reveal><Button href="/services/" variant="outline">View all services</Button></Reveal>
        </div>
        <div className="mt-12"><ServicesBento /></div>
      </div>
    </section>
  );
}

/** s-Trader product feature inside a rounded silver panel. */
export function STraderSpotlight() {
  const features = ["Real-time market data", "Portfolio monitoring", "Execute from anywhere"];
  return (
    <section className="pb-24">
      <Reveal className="container-x">
        <div className="grid items-center gap-14 rounded-[2.5rem] bg-paper-2 p-8 md:p-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="mb-3 text-sm font-bold text-brand-600">Online trading</p>
            <h2 className="t-h2 text-navy-900">Experience seamless online trading with s-Trader</h2>
            <p className="t-lead mt-4 text-ink-soft">Trade from anywhere with real-time data, portfolio monitoring and fast execution.</p>
            <ul className="mt-7 space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 font-semibold text-navy-900">
                  <span className="grid size-6 place-items-center rounded-full bg-brand-500 text-white"><Check className="size-4" /></span> {f}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/s-trader/">Explore s-Trader</Button>
              <Button href={site.links.clientLogin} variant="outline">Client Login</Button>
            </div>
          </div>
          <div className="pb-6 lg:col-span-7"><DeviceMockup /></div>
        </div>
      </Reveal>
    </section>
  );
}

/** Arch photograph beside the three pillars. */
export function WhyUs() {
  return (
    <section className="pb-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-lift lg:col-span-5 lg:mx-0 lg:max-w-md">
          <Image src="/images/office-executive.jpg" alt="Executive office at Sigma Securities" fill sizes="(min-width:1024px) 35vw, 80vw" className="object-cover object-[55%_50%]" />
        </Reveal>
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Why Sigma" title="Why choose us" />
          <RevealGroup className="mt-10 divide-y divide-line border-y border-line">
            {site.pillars.map((p) => (
              <RevealItem key={p.title} className="flex gap-6 py-7">
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-navy-900 text-sky-300">
                  <Icon name={p.icon} className="size-8" />
                </span>
                <div>
                  <h3 className="t-h3 text-navy-900">{p.title}</h3>
                  <p className="mt-2 text-ink-soft">{p.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

/** Photograph band carrying the vision and mission, in a rounded navy panel. */
export function VisionBand() {
  return (
    <section className="pb-24">
      <Reveal className="container-x">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-navy-900 text-white">
          <div className="absolute inset-0 -z-20">
            <ParallaxImage src="/images/office-reception.jpg" alt="" className="size-full" travel={6} objectPosition="75% 50%" />
          </div>
          <div aria-hidden className="absolute inset-0 -z-10 bg-navy-900/85" />
          <div className="grid gap-12 p-8 md:p-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-3 text-sm font-bold text-sky-300">Our vision</p>
              <blockquote className="font-display text-[clamp(1.7rem,1.1rem+2.4vw,3.1rem)] font-bold leading-[1.12] tracking-tight">
                {site.vision}
              </blockquote>
            </div>
            <div className="lg:pt-10">
              <p className="mb-3 text-sm font-bold text-sky-300">Our mission</p>
              <p className="t-lead text-white/85">{site.mission}</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function StorySection() {
  return (
    <section className="pb-24">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading eyebrow="Our story" title="Established 1995. Operating since 1997." />
            <Reveal delay={0.1} className="mt-8"><Button href="/about/" variant="outline">Read our story</Button></Reveal>
          </div>
        </div>
        <div className="lg:col-span-7"><Timeline /></div>
      </div>
    </section>
  );
}

/** Three arch-framed photographs of the offices. */
export function Gallery() {
  const shots = [
    { src: "/images/office-lobby.jpg", alt: "Glass staircase and offices", pos: "50% 50%", offset: "" },
    { src: "/images/office-desk.jpg", alt: "Consultation room with brass lamp", pos: "45% 50%", offset: "md:mt-14" },
    { src: "/images/office-reception.jpg", alt: "Reception with illuminated staircase", pos: "75% 50%", offset: "" },
  ];
  return (
    <section className="pb-24" aria-label="Inside Sigma Securities">
      <div className="container-x">
        <SectionHeading eyebrow="Our offices" title="Where your mandates are handled" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {shots.map((s) => (
            <ParallaxImage key={s.src} src={s.src} alt={s.alt} objectPosition={s.pos} sizes="(min-width:768px) 30vw, 100vw" travel={5} className={`aspect-[3/4] rounded-t-[999px] rounded-b-[2rem] ${s.offset}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

const stepIcons = [FileText, Download, Send, TrendingUp];

export function HowToStart() {
  return (
    <section className="pb-24">
      <div className="container-x">
        <SectionHeading eyebrow="How to get started" title="Four steps to your first trade" lead="Illustrative process, subject to client confirmation." align="center" />
        <RevealGroup className="relative mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <span aria-hidden className="absolute left-[12%] right-[12%] top-8 hidden border-t-2 border-dashed border-brand-500/30 lg:block" />
          {site.steps.map((s, i) => {
            const StepIcon = stepIcons[i];
            return (
              <RevealItem key={s.title} className="relative text-center">
                <span className="relative mx-auto grid size-16 place-items-center rounded-full bg-brand-500 text-white ring-8 ring-white">
                  <StepIcon className="size-7" aria-hidden />
                </span>
                <p className="mt-5 text-xs font-bold text-brand-600">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-navy-900">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[16rem] text-ink-soft">{s.body}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

export function Footprint() {
  return (
    <section className="pb-24">
      <Reveal className="container-x">
        <div className="grid items-center gap-12 rounded-[2.5rem] bg-navy-900 p-8 text-white md:p-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold text-sky-300">Our footprint</p>
            <h2 className="t-h2">Offices in Lagos, Abuja and Jalingo</h2>
            <ul className="mt-8 divide-y divide-white/15 border-y border-white/15">
              {offices.map((o) => (
                <li key={o.city} className="py-5">
                  <p className="font-display text-lg font-bold">{o.role}</p>
                  <p className="mt-1 text-white/70">{o.address}</p>
                </li>
              ))}
            </ul>
          </div>
          <NigeriaMap />
        </div>
      </Reveal>
    </section>
  );
}

export function RegulatorMarquee() {
  return (
    <section className="pb-24" aria-label="Regulators and market bodies">
      <p className="mb-5 text-center text-sm font-bold text-ink-soft">Regulators and market bodies</p>
      <Marquee label="Regulators and market bodies">
        {site.regulators.map((r) => (
          <a key={r.name} href={r.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full border border-line px-6 text-sm font-bold text-navy-900/70 hover:border-brand-500 hover:text-brand-600">
            {r.name}
          </a>
        ))}
      </Marquee>
    </section>
  );
}

export function NewsletterSection() {
  return (
    <section className="pb-24">
      <Reveal className="container-x">
        <div className="grid items-center gap-10 rounded-[2.5rem] bg-brand-500 p-8 text-white md:p-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold text-white/80">Stay informed</p>
            <h2 className="t-h2">Sign up for alerts, news and Sigma Securities Insights</h2>
          </div>
          <NewsletterForm />
        </div>
      </Reveal>
    </section>
  );
}

export function GetInTouch() {
  return (
    <section className="pb-24">
      <Reveal className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[2.5rem] bg-paper-2 p-8 md:flex-row md:items-center md:p-14">
          <div>
            <h2 className="t-h2 text-navy-900">Ready to start investing?</h2>
            <p className="t-lead mt-3 max-w-xl text-ink-soft">Speak to our front desk or visit one of our offices.</p>
            <p className="mt-4 text-sm font-semibold text-navy-900">
              <a href={`mailto:${site.email}`} className="hover:text-brand-600">{site.email}</a>
              {site.phones.map((p) => (
                <span key={p.href}> · <a href={p.href} className="hover:text-brand-600">{p.label}</a></span>
              ))}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/open-account/" magnetic className="px-8 py-4">Open an Account</Button>
            <Button href="/contact/" variant="outline" className="px-8 py-4">Contact us</Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
