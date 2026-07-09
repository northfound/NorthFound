import recommendations from "@/content/recommendations.json";
import { Button } from "@/components/ui/Button";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return recommendations.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props) {
  const item = recommendations.find((r) => r.slug === params.slug);
  if (!item) return { title: "Recommendation" };
  return { title: item.name, description: item.summary };
}

export default function RecommendationPage({ params }: Props) {
  const item = recommendations.find((r) => r.slug === params.slug);
  if (!item) notFound();

  const metrics = [
    ["Practicality", item.score],
    ["Build Quality", Math.max(item.score - 2, 90)],
    ["Longevity", Math.max(item.score - 3, 90)],
    ["Visual Harmony", Math.max(item.score - 1, 90)],
    ["Space Efficiency", Math.max(item.score - 1, 90)],
    ["Value", Math.max(item.score - 4, 88)]
  ];

  return (
    <main className="px-[clamp(22px,5vw,72px)] py-24">
      <p className="nf-eyebrow">Recommendation</p>
      <h1 className="nf-display text-[clamp(60px,8vw,120px)]">{item.name}</h1>
      <p className="nf-lead mt-8 max-w-[760px]">{item.summary}</p>

      <div
        className="mt-14 min-h-[420px] rounded-[42px] bg-cover bg-center shadow-nfFloating"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,.05), rgba(20,20,20,.38)), url(${item.visual})` }}
      />

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        <div className="rounded-[32px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
          <h2 className="font-display text-5xl">NorthFound Index™</h2>
          <div className="mt-8 space-y-4">
            {metrics.map(([k, v]) => (
              <div key={String(k)} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-nf-line pb-3">
                <span className="font-semibold">{k}</span>
                <strong className="text-nf-forest">{v}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
          <h2 className="font-display text-5xl">Why we chose it</h2>
          <p className="mt-6 text-nf-slate leading-8">{item.why}</p>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-nf-line bg-nf-white p-8">
          <h3 className="text-2xl font-bold">Pros</h3>
          <ul className="mt-5 list-disc pl-5 leading-8 text-nf-slate">
            {item.pros.map((pro) => <li key={pro}>{pro}</li>)}
          </ul>
        </div>

        <div className="rounded-[28px] border border-nf-line bg-nf-white p-8">
          <h3 className="text-2xl font-bold">Cons</h3>
          <ul className="mt-5 list-disc pl-5 leading-8 text-nf-slate">
            {item.cons.map((con) => <li key={con}>{con}</li>)}
          </ul>
        </div>
      </section>

      <section className="mt-16 rounded-[32px] border border-nf-line bg-nf-white p-10">
        <p className="nf-eyebrow">Editorial transparency</p>
        <p className="nf-lead">If a better option appears, this recommendation can change. The goal is trust, not attachment to old picks.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={item.link} external>View on Amazon</Button>
          <Button href="/collections/kitchen" variant="secondary">Back to Guide</Button>
        </div>
      </section>
    </main>
  );
}
