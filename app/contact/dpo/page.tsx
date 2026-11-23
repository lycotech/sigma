import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Data Protection Officer", "Contact the Data Protection Officer at Sigma Securities.", "/contact/dpo/");

export default function DpoPage() {
  return (
    <>
      <PageHero eyebrow="Data protection" title="Data Protection Officer" lead="Questions about how your personal data is handled can be sent to our Data Protection Officer." />
      <section className="section-pad">
        <div className="container-x max-w-3xl space-y-6">
          <p className="placeholder-tag rounded-xl p-5 text-ink-soft">[Placeholder] DPO name and dedicated contact details to be supplied by Sigma Securities.</p>
          <Button href={`mailto:${site.email}`} variant="secondary">Email the front desk</Button>
        </div>
      </section>
    </>
  );
}
