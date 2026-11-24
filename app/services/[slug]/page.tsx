import { Check } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getService, services } from "@/content/services";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => services.map((s) => ({ slug: s.slug }));

export async function generateMetadata({ params }: Props) {
  const s = getService((await params).slug);
  return s ? pageMeta(s.title, s.summary, `/services/${s.slug}/`) : {};
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();
  return (
    <>
      <PageHero eyebrow="Service" title={service.title} lead={service.intro}>
        <Button href="/open-account/">Open an Account</Button>
        <Button href="/contact/" variant="outline">Speak to us</Button>
      </PageHero>
      <section className="section-pad">
        <div className="container-x max-w-3xl">
          {service.placeholder && (
            <p className="placeholder-tag mb-8 rounded-xl p-4 text-sm text-brand-600">
              [Placeholder] This service description is awaiting client review. See CONTENT_TODO.md.
            </p>
          )}
          <Reveal>
            <h2 className="t-h3 text-navy-900">What&apos;s included</h2>
            <ul className="mt-6 space-y-4">
              {service.points.map((p) => (
                <li key={p} className="flex gap-3 text-ink-soft"><Check className="mt-1 size-5 shrink-0 text-brand-500" aria-hidden />{p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
