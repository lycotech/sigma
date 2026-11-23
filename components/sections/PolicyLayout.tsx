import { policySections, type Policy } from "@/content/policies";
import { PageHero } from "./PageHero";

const id = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

/** Shared policy page layout with a sticky table of contents and clearly marked placeholder body. */
export function PolicyLayout({ policy }: { policy: Policy }) {
  return (
    <>
      <PageHero eyebrow="Policy statement" title={policy.title} lead={policy.summary} />
      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <nav aria-label="On this page" className="lg:col-span-3">
            <ul className="space-y-1 border-l border-line lg:sticky lg:top-28">
              {policySections.map((s) => (
                <li key={s}>
                  <a href={`#${id(s)}`} className="-ml-px block min-h-11 border-l-2 border-transparent py-2.5 pl-4 text-sm text-ink-soft hover:border-gold-500 hover:text-navy-900">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <article className="space-y-12 lg:col-span-9">
            {policySections.map((s) => (
              <section key={s} id={id(s)}>
                <h2 className="t-h3 text-navy-900">{s}</h2>
                <p className="placeholder-tag mt-4 rounded-xl p-4 text-ink-soft">Content to be supplied by Sigma Securities.</p>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
