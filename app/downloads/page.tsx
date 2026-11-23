import { PageHero } from "@/components/sections/PageHero";
import { DownloadGrid } from "@/components/sections/DownloadGrid";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Downloads", "Account opening, mandate and transfer forms from Sigma Securities.", "/downloads/");

export default function DownloadsPage() {
  return (
    <>
      <PageHero eyebrow="Downloads" title="Forms and documents" lead="Everything you need to open an account and instruct us." />
      <section className="section-pad">
        <div className="container-x"><DownloadGrid /></div>
      </section>
    </>
  );
}
