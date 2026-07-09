import recommendations from "@/content/recommendations.json";
import { Button } from "@/components/ui/Button";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return recommendations.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props) {
  const item = recommendations.find((r) => r.slug === params.slug);
  if (!item) return { title: "Recommendation" };

  return {
    title: `${item.name} Review`,
    description: item.summary,
    openGraph: {
      title: `${item.name} — NorthFound Recommendation`,
      description: item.summary,
      url: `https://northfound.netlify.app/recommendations/${item.slug}`,
      siteName: "NorthFound",
      type: "article"
    }
  };
}

function getRelatedProducts(slug: string) {
  return recommendations.filter((item) => item.slug !== slug).slice(0, 3);
}

export default function RecommendationPage({ params }: Props) {
  const item = recommendations.find((r) => r.slug === params.slug);
  if (!item) notFound();

  const related = getRelatedProducts(item.slug);

  const metrics = [
    ["Organization Impact", item.score],
    ["Build Quality", Math.max(item.score - 2, 90)],
    ["Visual Harmony", Math.max(item.score - 1, 90)],
    ["Ease of Maintenance", Math.max(item.score - 3, 88)],
    ["Value", Math.max(item.score - 4, 86)]
  ];

  return (
    <main>
      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(82px,10vw,150px)]">
        <div className="nf-shell grid min-h-[calc(100vh-180px)] grid-cols-[1fr_.95fr] items-center gap-16 max-lg:grid-cols-1">
          <div>
            <p className="nf-eyebrow">NorthFound Recommendation</p>
            <h1 className="nf-display text-[clamp(64px,9vw,146px)]">{item.name}</h1>
            <p className="nf-lead mt-8 max-w-[760px]">{item.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-nf-line bg-nf-white/70 px-5 py-3 text-[11px] font-black uppercase tracking-[0.13em] text-nf-brass">
                {item.tag}
              </span>
              <span className="rounded-full border border-nf-line bg-nf-white/70 px-5 py-3 text-[11px] font-black uppercase tracking-[0.13em] text-nf-forest">
                Score {item.score}
              </span>
              <span className="rounded-full border border-nf-line bg-nf-white/70 px-5 py-3 text-[11px] font-black uppercase tracking-[0.13em] text-nf-slate">
                {item.category}
              </span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={item.link} external>See Recommendation</Button>
              <Button href="/collections/kitchen" variant="secondary">Back to Kitchen Reset</Button>
            </div>
          </div>

          <div className="relative">
            <div
              className="min-h-[660px] rounded-[54px] bg-cover bg-center shadow-nfFloating max-md:min-h-[420px]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255,255,255,.02), rgba(17,17,17,.46)), url(${item.visual})`
              }}
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-[34px] border border-white/60 bg-nf-ivory/92 p-8 shadow-nfSoft backdrop-blur-2xl max-md:bottom-4 max-md:left-4 max-md:right-4 max-md:p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-nf-brass">
                Quick Verdict
              </p>
              <h2 className="mt-3 font-display text-[clamp(38px,4vw,62px)] leading-none tracking-[-.05em]">
                Best for {item.bestFor.toLowerCase()}.
              </h2>
              <p className="mt-4 leading-7 text-nf-slate">{item.why}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-nf-line bg-nf-charcoal px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,130px)] text-white">
        <div className="nf-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="nf-eyebrow">NorthFound Score™</p>
            <h2 className="font-display text-[clamp(56px,9vw,136px)] leading-[.82] tracking-[-.06em] text-white">
              {item.score}
            </h2>
            <p className="mt-5 max-w-[520px] text-lg leading-8 text-white/62">
              A category score based on usefulness, maintenance, value and whether the product supports a calmer home system.
            </p>
          </div>

          <div className="space-y-5">
            {metrics.map(([label, value]) => (
              <div key={String(label)}>
                <div className="mb-2 flex items-center justify-between gap-4 text-[11px] font-black uppercase tracking-[0.14em] text-white/68">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/12">
                  <div
                    className="h-full rounded-full bg-nf-brass"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,140px)]">
        <div className="nf-shell grid gap-6 lg:grid-cols-2">
          <article className="rounded-[38px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
            <p className="nf-eyebrow">Why we chose it</p>
            <h2 className="font-display text-[clamp(42px,5vw,76px)] leading-none tracking-[-.05em]">
              It solves a real kitchen problem.
            </h2>
            <p className="mt-6 text-lg leading-9 text-nf-slate">{item.why}</p>
          </article>

          <article className="rounded-[38px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
            <p className="nf-eyebrow">Best for</p>
            <h2 className="font-display text-[clamp(42px,5vw,76px)] leading-none tracking-[-.05em]">
              {item.bestFor}
            </h2>
            <p className="mt-6 text-lg leading-9 text-nf-slate">
              This recommendation belongs to {item.guide}, where it supports one specific part of the kitchen reset system.
            </p>
          </article>

          <article className="rounded-[38px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
            <p className="nf-eyebrow">Pros</p>
            <ul className="mt-4 space-y-4 text-lg leading-8 text-nf-slate">
              {item.pros.map((pro) => (
                <li key={pro} className="flex gap-3">
                  <span className="mt-1 text-nf-brass">✓</span>
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[38px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
            <p className="nf-eyebrow">Consider before buying</p>
            <ul className="mt-4 space-y-4 text-lg leading-8 text-nf-slate">
              {item.cons.map((con) => (
                <li key={con} className="flex gap-3">
                  <span className="mt-1 text-nf-brass">•</span>
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="bg-nf-white/55 px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,130px)]">
        <div className="nf-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <p className="nf-eyebrow">System Match™</p>
            <h2 className="font-display text-[clamp(46px,7vw,98px)] leading-[.88] tracking-[-.055em]">
              Works inside The Kitchen Reset.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {["Visible storage", "Lower friction", "Easier reset", "Better daily flow"].map((match) => (
              <div key={match} className="rounded-full border border-nf-line bg-nf-white px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-nf-charcoal shadow-nfSoft">
                {match}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,140px)]">
        <div className="nf-shell">
          <div className="mb-12 max-w-[900px]">
            <p className="nf-eyebrow">Related recommendations</p>
            <h2 className="nf-display text-[clamp(54px,8vw,118px)]">
              Build the system around it.
            </h2>
            <p className="nf-lead mt-8">
              A single product rarely fixes a kitchen. Better systems are built from a few useful pieces that work together.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {related.map((relatedItem) => (
              <RecommendationCard key={relatedItem.slug} item={relatedItem} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] pb-[clamp(80px,10vw,140px)]">
        <div className="nf-shell rounded-[46px] border border-nf-line bg-nf-charcoal p-[clamp(32px,6vw,76px)] text-white shadow-nfFloating">
          <p className="nf-eyebrow">Editorial transparency</p>
          <h2 className="font-display text-[clamp(46px,7vw,98px)] leading-[.88] tracking-[-.055em] text-white">
            Recommendations can change.
          </h2>
          <p className="mt-8 max-w-[820px] text-lg leading-9 text-white/68">
            If a better product appears, this recommendation can be replaced. The goal is not to defend old picks. The goal is to help people make better decisions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={item.link} external>See Recommendation</Button>
            <Button href="/collections/kitchen" variant="secondary">Back to The Kitchen Reset</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
