import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { footerQuickLinks } from "@/content/nav";
import { offices } from "@/content/offices";
import { policies } from "@/content/policies";
import { site } from "@/content/site";
import { Logo } from "@/components/ui/SigmaMark";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white/75">
      <div className="hairline" />
      <div className="container-x grid gap-12 pb-10 pt-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">{site.tagline}. {site.heroSub}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-gold-300">
                <Mail className="size-4 text-gold-500" /> {site.email}
              </a>
            </li>
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="inline-flex items-center gap-2 hover:text-gold-300">
                  <Phone className="size-4 text-gold-500" /> {p.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Offices</h2>
          <ul className="mt-5 space-y-5 text-sm">
            {offices.map((o) => (
              <li key={o.city}>
                <span className="block font-semibold text-white">{o.role}</span>
                {o.address}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Explore</h2>
          <ul className="mt-5 space-y-1 text-sm">
            {footerQuickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="inline-block min-h-8 py-1 hover:text-gold-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-gold-400">Policies</h2>
          <ul className="mt-5 space-y-1 text-sm">
            {policies.map((p) => (
              <li key={p.slug}>
                <Link href={`/policies/${p.slug}/`} className="inline-block min-h-8 py-1 hover:text-gold-300">
                  {p.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact/dpo/" className="inline-block min-h-8 py-1 hover:text-gold-300">
                Data Protection Officer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x pb-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-8 text-xs">
          <span className="font-semibold uppercase tracking-widest text-white/50">Market bodies</span>
          {site.regulators.map((r) => (
            <a
              key={r.name}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-8 items-center hover:text-gold-300"
            >
              {r.name}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <div className="grid size-24 place-items-center rounded-xl bg-white p-1.5">
            <Image
              src="/images/ndpr-trustmark.png"
              alt="NDPR Audit Compliant 2024 trustmark issued by the Nigeria Data Protection Commission"
              width={88}
              height={88}
              className="rounded-lg"
            />
          </div>
          <div className="grid size-24 place-items-center rounded-xl bg-white p-2">
            <Image
              src="/images/ngx-ipf.png"
              alt="Nigerian Exchange Investors' Protection Fund"
              width={80}
              height={80}
            />
          </div>
          <div className="placeholder-tag grid h-24 w-40 place-items-center rounded-xl p-3 text-center text-[0.7rem] text-white/60">
            [Placeholder] NGX membership logo, to be supplied
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-white/50">{site.disclaimer}</p>
        <p className="mt-4 text-xs text-white/50">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
