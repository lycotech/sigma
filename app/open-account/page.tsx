import { FileText } from "lucide-react";
import { OpenAccountForm } from "@/components/forms/Forms";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Open an Account", "Choose an account type and start investing with Sigma Securities.", "/open-account/");

const types = ["Individual", "Corporate", "Estate", "Minor"];
// [Placeholder] Required documents are illustrative and must be confirmed by Sigma Securities.
const docs = ["[Placeholder] Completed account opening form", "[Placeholder] Valid means of identification", "[Placeholder] Passport photograph", "[Placeholder] Proof of address"];

export default function OpenAccountPage() {
  return (
    <>
      <PageHero eyebrow="Open an account" title="Open an account in four simple steps" lead="Choose your account type, complete the form and submit it with your documents." />
      <section className="section-pad">
        <div className="container-x">
          <SectionHeading eyebrow="Step 1" title="Choose an account type" />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {types.map((t) => (
              <RevealItem key={t}>
                <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-7 shadow-card">
                  <FileText className="size-8 text-brand-500" aria-hidden />
                  <h3 className="t-h3 mt-5 text-navy-900">{t}</h3>
                  <Button href="/downloads/" variant="ghost" className="mt-auto -ml-4 self-start">Get the form</Button>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
      <section className="section-pad bg-paper-2">
        <div className="container-x grid gap-16 lg:grid-cols-2">
          <Reveal>
            <h2 className="t-h2 text-navy-900">Documents checklist</h2>
            <ul className="mt-8 space-y-3">
              {docs.map((d) => (
                <li key={d} className="placeholder-tag rounded-xl bg-white p-4 text-sm text-ink-soft">{d}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="t-h2 text-navy-900">Request a call back</h2>
            <div className="mt-8"><OpenAccountForm /></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
