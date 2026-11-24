import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Dangote Ref IPO", "Subscribe to the Dangote Ref IPO through Sigma Securities.", "/ipo/");

export default function IpoPage() {
  return (
    <>
      <PageHero eyebrow="Dangote Ref IPO" title="Subscribe to the Dangote Ref IPO with Sigma Securities" lead="Use our dedicated subscription portal, or open an account first.">
        <Button href={site.links.ipo} magnetic>Subscribe to IPO</Button>
        <Button href="/open-account/" variant="outline">Open an Account</Button>
      </PageHero>
      <section className="section-pad">
        <Reveal className="container-x max-w-3xl">
          <p className="placeholder-tag rounded-xl p-5 text-ink-soft">
            [Placeholder] Offer details, dates and terms to be supplied and approved by Sigma Securities. Investing in securities involves risk.
          </p>
        </Reveal>
      </section>
    </>
  );
}
