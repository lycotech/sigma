import { Activity, LineChart, MonitorSmartphone, Zap } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DeviceMockup } from "@/components/visuals/DeviceMockup";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("s-Trader online trading", "Experience seamless online trading with s-Trader from Sigma Securities.", "/s-trader/");

const features = [
  { icon: Activity, title: "Real-time market data", body: "Follow the market as it moves." },
  { icon: LineChart, title: "Portfolio monitoring", body: "See your holdings in one place." },
  { icon: Zap, title: "Fast execution", body: "Place mandates quickly and reliably." },
  { icon: MonitorSmartphone, title: "Trade from anywhere", body: "Desktop or mobile access." },
];
const how = ["Open an account with Sigma Securities", "Sign the Online Trading SLA", "Log in to the client portal", "Trade and monitor your portfolio"];

export default function STraderPage() {
  return (
    <>
      <PageHero eyebrow="s-Trader" title="Experience seamless online trading with s-Trader" lead="Real-time data, portfolio monitoring and execution from anywhere." image="executive">
        <Button href={site.links.clientLogin}>Client Login</Button>
        <Button href="/open-account/" variant="outline">Open an Account</Button>
      </PageHero>
      <section className="section-pad">
        <div className="container-x">
          <div className="mb-20"><DeviceMockup /></div>
          <SectionHeading eyebrow="Features" title="Built for confident trading" />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <RevealItem key={f.title}>
                <div className="h-full rounded-[2rem] border border-line bg-white p-7 shadow-card">
                  <f.icon className="size-8 text-brand-500" aria-hidden />
                  <h3 className="mt-5 font-sans text-lg font-bold text-navy-900">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{f.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <section className="section-pad bg-paper-2">
        <div className="container-x">
          <SectionHeading eyebrow="How it works" title="Get started" lead="Illustrative steps, for client confirmation." />
          <ol className="mt-12 grid gap-6 md:grid-cols-4">
            {how.map((h, i) => (
              <li key={h} className="rounded-2xl bg-white p-6 shadow-card">
                <span className="text-3xl font-bold text-brand-500">{i + 1}</span>
                <p className="mt-2 font-semibold text-navy-900">{h}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
