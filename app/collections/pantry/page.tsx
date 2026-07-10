import recommendations from "@/content/recommendations.json";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "The Pantry Reset | Free Pantry Organization Guide",
  description: "Download The Pantry Reset and explore 10 carefully curated pantry organization products selected by NorthFound.",
  openGraph: {
    title: "The Pantry Reset - Free Pantry Organization Guide",
    description: "A practical 17-page pantry reset guide with 10 curated products for a calmer, more functional pantry.",
    url: "https://northfound.netlify.app/collections/pantry",
    siteName: "NorthFound",
    type: "website"
  }
};

const pantry = recommendations.filter((item) => item.collection === "pantry");
const method = [
  ["01", "Remove", "Clear the pantry completely so you can see what you own and what no longer belongs."],
  ["02", "Reset", "Clean the shelves, protect breathing room and assign every area a clear purpose."],
  ["03", "Organize", "Build visible zones for staples, snacks, cans, bottles, baking and seasonal items."],
  ["04", "Maintain", "Use a five-minute weekly reset so the system recovers quickly when real life gets busy."]
];

export default function PantryCollectionPage() {
  return (
    <main>
      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(82px,10vw,150px)]">
        <div className="nf-shell grid min-h-[calc(100vh-180px)] grid-cols-[1.02fr_.98fr] items-center gap-16 max-lg:grid-cols-1">
          <div>
            <p className="nf-eyebrow">NorthFound Guide 02</p>
            <h1 className="nf-display text-[clamp(72px,11vw,168px)]">The Pantry Reset</h1>
            <p className="nf-lead mt-8 max-w-[760px]">A calm, practical guide to building a pantry that saves time, reduces waste and stays easier to maintain.</p>
            <div className="mt-8 grid max-w-[720px] gap-3 text-sm font-bold text-nf-slate sm:grid-cols-3">
              <div className="rounded-full border border-nf-line bg-nf-white/70 px-5 py-3">Free 17-page PDF</div>
              <div className="rounded-full border border-nf-line bg-nf-white/70 px-5 py-3">The NorthFound Method</div>
              <div className="rounded-full border border-nf-line bg-nf-white/70 px-5 py-3">10 curated products</div>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/guides/the-pantry-reset.pdf" external>Download Free Guide</Button>
              <Button href="#products" variant="secondary">Explore the Collection</Button>
            </div>
            <p className="mt-6 max-w-[650px] text-sm leading-7 text-nf-slate">Start with the guide. Live with the new system. Then choose only the products that solve a problem your pantry has already proven it needs.</p>
          </div>
          <div className="relative">
            <div className="min-h-[680px] rounded-[54px] bg-cover bg-center shadow-nfFloating max-md:min-h-[460px]" style={{backgroundImage:"linear-gradient(180deg, rgba(255,255,255,.02), rgba(17,17,17,.42)), url(https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1800&q=88)"}} />
            <div className="absolute bottom-8 left-8 right-8 rounded-[34px] border border-white/60 bg-nf-ivory/92 p-8 shadow-nfSoft backdrop-blur-2xl max-md:bottom-4 max-md:left-4 max-md:right-4 max-md:p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-nf-brass">Free Guide</p>
              <h2 className="mt-3 font-display text-[clamp(38px,4vw,64px)] leading-none tracking-[-.05em]">Better systems. Less pantry friction.</h2>
              <p className="mt-4 leading-7 text-nf-slate">17 pages of practical guidance, checklists and principles designed for real homes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-nf-charcoal px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,140px)] text-white">
        <div className="nf-shell">
          <div className="mb-14 max-w-[930px]">
            <p className="nf-eyebrow">The NorthFound Method</p>
            <h2 className="font-display text-[clamp(54px,8vw,118px)] leading-[.88] tracking-[-.055em] text-white">The system comes before the shopping list.</h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-4">{method.map(([n,t,d])=><article key={n} className="rounded-[34px] border border-white/12 bg-white/[.06] p-8"><span className="text-xs font-black tracking-[.14em] text-nf-brass">{n}</span><h3 className="mt-5 text-2xl font-bold text-white">{t}</h3><p className="mt-4 leading-7 text-white/65">{d}</p></article>)}</div>
        </div>
      </section>

      <section id="products" className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,150px)]">
        <div className="nf-shell">
          <div className="mb-14 max-w-[980px]">
            <p className="nf-eyebrow">The Pantry Reset Collection</p>
            <h2 className="nf-display text-[clamp(54px,8vw,118px)]">10 products. 10 different problems solved.</h2>
            <p className="nf-lead mt-8">No duplicates from The Kitchen Reset. Each recommendation adds a different function: visible zones, airtight storage, cans, bottles, vertical space, deep shelves, door storage and more.</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">{pantry.map((item)=><RecommendationCard key={item.slug} item={item} />)}</div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] pb-[clamp(80px,10vw,140px)]">
        <div className="nf-shell grid gap-10 rounded-[46px] border border-nf-line bg-nf-charcoal p-[clamp(32px,6vw,76px)] text-white shadow-nfFloating lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div><p className="nf-eyebrow">NorthFound Standard</p><h2 className="font-display text-[clamp(46px,7vw,98px)] leading-[.88] tracking-[-.055em] text-white">Buy slowly. Choose what earns its place.</h2></div>
          <div><p className="text-lg leading-9 text-white/68">Affiliate links help support NorthFound at no additional cost to you. Rankings are editorial and can change whenever a better product earns the recommendation.</p><div className="mt-8 flex flex-wrap gap-4"><Button href="/guides/the-pantry-reset.pdf" external>Download the Guide</Button><Button href="/collections/kitchen" variant="secondary">Explore Kitchen</Button></div></div>
        </div>
      </section>
    </main>
  );
}
