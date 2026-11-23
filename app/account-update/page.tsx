import { AccountUpdateForm } from "@/components/forms/Forms";
import { PageHero } from "@/components/sections/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Account Update", "Request an update to your Sigma Securities client records.", "/account-update/");

export default function AccountUpdatePage() {
  return (
    <>
      <PageHero eyebrow="Account update" title="Keep your records up to date" lead="Tell us what has changed and we will take it from there." />
      <section className="section-pad">
        <div className="container-x max-w-2xl"><AccountUpdateForm /></div>
      </section>
    </>
  );
}
