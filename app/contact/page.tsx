import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/Forms";
import { PageHero } from "@/components/sections/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { offices } from "@/content/offices";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact", "Contact Sigma Securities Limited in Lagos, Abuja or Jalingo.", "/contact/");

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="We'd love to hear from you" lead="Reach the front desk by phone or email, or visit one of our offices." />
      <section className="section-pad">
        <div className="container-x grid gap-16 lg:grid-cols-5">
          <Reveal className="lg:col-span-3"><ContactForm /></Reveal>
          <Reveal delay={0.1} className="space-y-4 lg:col-span-2">
            <a href={`mailto:${site.email}`} className="flex min-h-11 items-center gap-3 text-navy-900 hover:text-gold-700"><Mail className="size-5 text-gold-500" />{site.email}</a>
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="flex min-h-11 items-center gap-3 text-navy-900 hover:text-gold-700"><Phone className="size-5 text-gold-500" />{p.label}</a>
            ))}
            <p className="text-sm text-ink-soft">Office hours: [Placeholder] to be supplied.</p>
          </Reveal>
        </div>
      </section>
      <section className="section-pad bg-paper-2">
        <div className="container-x">
          <RevealGroup className="grid gap-6 md:grid-cols-3">
            {offices.map((o) => (
              <RevealItem key={o.city}>
                <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-card">
                  <MapPin className="size-6 text-gold-500" aria-hidden />
                  <h3 className="t-h3 mt-4 text-navy-900">{o.role}</h3>
                  <p className="mt-2 text-ink-soft">{o.address}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
          <div className="placeholder-tag mt-10 grid h-72 place-items-center rounded-2xl text-sm text-ink-soft">
            [Placeholder] Map embed, to be added
          </div>
        </div>
      </section>
    </>
  );
}
