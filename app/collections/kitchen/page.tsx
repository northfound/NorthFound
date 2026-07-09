import recommendations from "@/content/recommendations.json";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "The Kitchen Reset",
  description: "The Kitchen Reset by NorthFound: a practical guide with 10 curated products for a calmer, better organized kitchen."
};

const principles = [
  "Visibility beats capacity.",
  "Store by frequency, not by category.",
  "One shelf, one system.",
  "Empty space is functional.",
  "Labels support memory.",
  "The reset should take less than five minutes."
];

export default function KitchenCollectionPage() {
  return (
    <main>
      <section className="px-[clamp(22px,5vw,72px)] py-24">
        <p className="nf-eyebrow">NorthFound Guide 01</p>
        <h1 className="nf-display text-[clamp(64px,9vw,138px)]">The Kitchen Reset</h1>
        <p className="nf-lead mt-8 max-w-[760px]">
          A practical guide to creating a calmer, better organized kitchen — built around simple systems and carefully curated products.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="https://drive.google.com/file/d/1d2wwDpXBULFVaL6QR1g-dhxZV8N9S0EN/view?usp=drivesdk" external>Download Free Guide</Button>
          <Button href="#products" variant="secondary">View Products</Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-[clamp(22px,5vw,72px)] py-16">
        <p className="nf-eyebrow">NorthFound Principles™</p>
        <div className="grid gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p} className="rounded-[28px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
              <span className="text-xs font-black tracking-[.14em] text-nf-brass">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-2xl font-bold">{p}</h3>
              <p className="mt-3 text-nf-slate">Build your kitchen around this principle before buying another organizer.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="px-[clamp(22px,5vw,72px)] py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="nf-eyebrow">Recommended Products From This Guide</p>
          <h2 className="nf-display text-[clamp(48px,6vw,92px)]">10 products that support the reset.</h2>
          <p className="nf-lead mx-auto mt-8 max-w-[760px]">
            Every product below is connected to a specific problem in the guide: food storage, drawer friction, pantry visibility, under-sink chaos, cabinet space or fridge access.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {recommendations.map((item) => (
            <RecommendationCard key={item.slug} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
