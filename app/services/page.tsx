import { PageHero } from "@/components/sections/PageHero";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Services", "Equities trading, NASD OTC, advisory, portfolio management and consulting from Sigma Securities.", "/services/");

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Capital-market services, end to end" lead="From order placement to settlement, and advice in between." image="desk" />
      <section className="section-pad">
        <div className="container-x"><ServicesBento /></div>
      </section>
    </>
  );
}
