import { Button } from "@/components/ui/Button";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import recommendations from "@/content/recommendations.json";

export default function HomePage() {
  return (
    <main>
      <section className="grid min-h-[calc(100vh-92px)] grid-cols-2 items-center gap-16 px-[clamp(22px,5vw,72px)] py-20 max-lg:grid-cols-1">
        <div>
          <p className="nf-eyebrow">NorthFound Studio</p>
          <h1 className="nf-display text-[clamp(64px,9vw,138px)]">Your home deserves better systems.</h1>
          <p className="nf-lead mt-8 max-w-[650px]">Organization is not about buying more. It is about making better decisions. NorthFound creates thoughtful collections, practical systems and carefully curated recommendations for calmer everyday living.</p>
          <div className="mt-10 flex flex-wrap gap-4"><Button href="/collections/kitchen">Explore the Collection</Button><Button href="/method" variant="secondary">Our Method</Button></div>
        </div>
        <div className="relative min-h-[640px] overflow-hidden rounded-nfLarge bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(20,20,20,.42)),url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=88')] bg-cover bg-center shadow-nfFloating max-md:min-h-[420px]">
          <div className="absolute bottom-8 left-8 right-8 rounded-[32px] border border-white/50 bg-nf-ivory/90 p-8 backdrop-blur-2xl max-md:bottom-4 max-md:left-4 max-md:right-4 max-md:p-5">
            <span className="text-xs font-black uppercase tracking-[0.17em] text-nf-brass">Featured Collection</span>
            <strong className="mt-3 block font-display text-[clamp(34px,3vw,52px)] leading-[.92] tracking-[-.04em]">The Kitchen Collection</strong>
            <small className="mt-3 block font-bold text-nf-slate">15 storage ideas that actually work.</small>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1180px] px-[clamp(22px,5vw,72px)] py-[clamp(82px,10vw,150px)] text-center">
        <p className="nf-eyebrow">Manifesto</p>
        <h2 className="nf-display text-[clamp(52px,7vw,96px)]">A well-organized home is not about perfection.</h2>
        <p className="mx-auto mt-8 max-w-[860px] text-[clamp(18px,1.4vw,23px)] leading-[1.75] text-nf-slate">It is about creating spaces that are easier to live in. Spaces that reduce friction. Spaces that save time. Spaces that feel calm. We believe you do not need more things. You need better systems.</p>
      </section>
      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(82px,10vw,150px)]">
        <div className="mx-auto mb-12 max-w-[920px] text-center"><p className="nf-eyebrow">Curated by NorthFound</p><h2 className="nf-display text-[clamp(48px,6vw,92px)]">Fewer products. Stronger recommendations.</h2><p className="nf-lead mx-auto mt-8 max-w-[760px]">We do not build endless product lists. We curate practical tools that solve real home organization problems.</p></div>
        <div className="mx-auto grid max-w-[1440px] grid-cols-3 gap-6 max-lg:grid-cols-1">{recommendations.map((item) => <RecommendationCard key={item.slug} item={item} />)}</div>
      </section>
      <section className="border-y border-nf-line bg-nf-white px-[clamp(22px,5vw,72px)] py-16">
        <h2 className="font-display text-[42px] leading-none tracking-[-.04em]">Affiliate Disclosure</h2>
        <p className="mt-6 max-w-[860px] leading-8 text-nf-slate"><strong>As an Amazon Associate, NorthFound earns from qualifying purchases.</strong> This page may contain affiliate links. If you buy through these links, NorthFound may earn a commission at no extra cost to you.</p>
      </section>
    </main>
  );
}
