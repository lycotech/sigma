import { notFound } from "next/navigation";
import { PolicyLayout } from "@/components/sections/PolicyLayout";
import { getPolicy, policies } from "@/content/policies";
import { pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => policies.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props) {
  const p = getPolicy((await params).slug);
  return p ? pageMeta(p.title, p.summary, `/policies/${p.slug}/`) : {};
}

export default async function PolicyPage({ params }: Props) {
  const policy = getPolicy((await params).slug);
  if (!policy) notFound();
  return <PolicyLayout policy={policy} />;
}
