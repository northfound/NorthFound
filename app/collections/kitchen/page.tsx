import recommendations from "@/content/recommendations.json";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import { Button } from "@/components/ui/Button";

const principles = ["Visibility beats capacity.", "Store by frequency, not by category.", "One shelf, one system.", "Empty space is functional.", "Labels support memory.", "The reset should take less than five minutes."];

export const metadata = { title: "The Kitchen Collection", description: "Kitchen organization principles, storage systems and curated recommendations by NorthFound." };

export default function KitchenCollectionPage() {
  return (
    <main>
      <section className="px-[clamp(22px,5vw,72px)] py-24">
        <p className="nf-eyebrow">NorthFound Collection</p>
        <h1 className="nf-display text-[clamp(64px,9vw,138px)]">The Kitchen Collection</h1>
        <p className="nf-lead mt-8 max-w-[760px]">Most kitchens are not too small. They simply ask too much from systems that were never designed to stay organized.</p>
        <div className="mt-10"><Button href="/method">Understand Our Method</Button></div>
      </section>
      <section className="mx-auto max-w-6xl px-[clamp(22px,5vw,72px)] py-16">
        <p className="nf-eyebrow">NorthFound Principles™</p>
        <div className="grid gap-5 md:grid-cols-2">{principles.map((p,i)=><div key={p} className="rounded-[28px] border border-nf-line bg-nf-white p-8 shadow-nfSoft"><span className="text-xs font-black tracking-[.14em] text-nf-brass">{String(i+1).padStart(2,"0")}</span><h3 className="mt-4 text-2xl font-bold">{p}</h3><p className="mt-3 text-nf-slate">Build your kitchen around this principle before buying another organizer.</p></div>)}</div>
      </section>
      <section className="bg-nf-white px-[clamp(22px,5vw,72px)] py-20"><div className="mx-auto max-w-3xl"><p className="nf-eyebrow">System Before Products</p><h2 className="nf-display text-[clamp(48px,6vw,92px)]">Buy less. Decide better.</h2><p className="nf-lead mt-6">The best kitchen systems begin with workflow, not shopping. Edit first. Measure second. Buy only what solves a specific problem.</p></div></section>
      <section className="px-[clamp(22px,5vw,72px)] py-24"><div className="mx-auto max-w-3xl text-center"><p className="nf-eyebrow">Curated by NorthFound</p><h2 className="nf-display text-[clamp(48px,6vw,92px)]">Our starting recommendations.</h2></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{recommendations.map((r)=><RecommendationCard key={r.slug} item={r} />)}</div></section>
    </main>
  );
}
