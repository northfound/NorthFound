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

  const metrics = [["Practicality","99"],["Build Quality","97"],["Longevity","96"],["Visual Harmony","98"],["Space Efficiency","98"],["Value","95"]];

  return (
    <main className="px-[clamp(22px,5vw,72px)] py-24">
      <p className="nf-eyebrow">Recommendation</p>
      <h1 className="nf-display text-[clamp(60px,8vw,120px)]">{item.name}</h1>
      <p className="nf-lead mt-8 max-w-[760px]">{item.summary}</p>

      <div
        className="mt-14 min-h-[420px] rounded-[42px] bg-cover bg-center shadow-nfFloating"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,.05), rgba(20,20,20,.38)), url(https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=88)"
        }}
      />

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        <div className="rounded-[32px] border border-nf-line bg-nf-white p-8 shadow-nfSoft"><h2 className="font-display text-5xl">NorthFound Index™</h2><div className="mt-8 space-y-4">{metrics.map(([k,v])=><div key={k} className="grid grid-cols-[1fr_auto] items-center gap-4"><span className="font-semibold">{k}</span><strong className="text-nf-forest">{v}</strong></div>)}</div></div>
        <div className="rounded-[32px] border border-nf-line bg-nf-white p-8 shadow-nfSoft"><h2 className="font-display text-5xl">Why we chose it</h2><p className="mt-6 text-nf-slate leading-8">It solves a clear storage problem while fitting the NorthFound standard for calm, useful and intentional organization.</p></div>
      </section>
      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-nf-line bg-nf-white p-8"><h3 className="text-2xl font-bold">Best for</h3><p className="mt-5 leading-8 text-nf-slate">{item.bestFor}</p></div>
        <div className="rounded-[28px] border border-nf-line bg-nf-white p-8"><h3 className="text-2xl font-bold">Not ideal for</h3><p className="mt-5 leading-8 text-nf-slate">{item.notIdeal}</p></div>
      </section>
      <section className="mt-16 rounded-[32px] border border-nf-line bg-nf-white p-10"><p className="nf-eyebrow">Editorial transparency</p><p className="nf-lead">If a better option appears, this recommendation can change. The goal is trust, not attachment to old picks.</p><div className="mt-8"><Button href={item.link} external>View Product</Button></div></section>
    </main>
  );
}
