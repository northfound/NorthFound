import recommendations from "@/content/recommendations.json";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "The Laundry Reset | Free Laundry Organization Guide",
  description: "Download The Laundry Reset, a free 15-page guide, and explore 10 carefully curated products for a calmer laundry routine.",
  alternates: { canonical: "/collections/laundry" },
  openGraph: {
    title: "The Laundry Reset | Free Laundry Organization Guide",
    description: "A practical 15-page system for sorting, washing, drying, folding and storing laundry with less friction.",
    url: "https://northfound.netlify.app/collections/laundry",
    siteName: "NorthFound",
    type: "website",
    images: [{ url: "/images/the-laundry-reset-cover.jpg", width: 1024, height: 1536, alt: "The Laundry Reset guide cover" }]
  }
};

const laundry = recommendations.filter((item) => item.collection === "laundry");
const flow = ["Dirty Laundry", "Sorting", "Washing", "Drying", "Folding", "Storage", "Ready to Wear"];
const principles = [
  ["Everything has a home", "Give each everyday item a permanent place that is easy to use and easy to restore."],
  ["Make the next step effortless", "Arrange the room so one stage of the laundry flow naturally leads to the next."],
  ["Remove visual noise", "Keep the working surface calm and group small supplies into clear, intentional zones."],
  ["Reduce decisions", "Pre-sort, keep essentials visible and use repeatable tools so the routine asks less of you."],
  ["Design for real life", "Build a system that recovers quickly after a busy week instead of one that only works when life is perfect."],
  ["Systems beat motivation", "A small routine you can maintain will always outperform an ambitious reset you avoid."],
];
const method = [
  ["01", "Observe", "Notice what piles up, what disappears and where the routine stops moving."],
  ["02", "Clear", "Empty the space and remove products or tools that no longer support the way you live."],
  ["03", "Zone", "Create permanent homes for sorting, washing, drying, folding and storage."],
  ["04", "Simplify", "Choose fewer tools and place them where each action naturally happens."],
  ["05", "Reset", "Finish one load, return supplies immediately and restore the space for five minutes each week."],
];

export default function LaundryCollectionPage() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Laundry Reset product collection",
    numberOfItems: laundry.length,
    itemListElement: laundry.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://northfound.netlify.app/recommendations/${item.slug}`,
      name: item.name
    }))
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />

      <section className="overflow-hidden px-[clamp(22px,5vw,72px)] py-[clamp(72px,9vw,132px)]">
        <div className="nf-shell grid min-h-[calc(100vh-170px)] grid-cols-[1.05fr_.95fr] items-center gap-16 max-lg:grid-cols-1">
          <div>
            <p className="nf-eyebrow">NorthFound Guide 03 · Free Download</p>
            <h1 className="nf-display max-w-[980px] text-[clamp(72px,11vw,164px)]">The Laundry Reset</h1>
            <p className="nf-lead mt-8 max-w-[780px]">
              A practical 15-page guide to creating a laundry routine that feels calm, effortless and beautifully organized.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/guides/the-laundry-reset.pdf" external>Download the Free Guide</Button>
              <Button href="#products" variant="secondary">Explore the Collection</Button>
            </div>
            <div className="mt-10 grid max-w-[780px] grid-cols-3 gap-3 max-sm:grid-cols-1">
              {["15-page practical guide", "7-stage laundry flow", "10 curated system tools"].map((label) => (
                <div key={label} className="rounded-[20px] border border-nf-line bg-nf-white/75 px-5 py-4 text-center text-[10px] font-black uppercase tracking-[.13em] text-nf-charcoal backdrop-blur-xl">
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -inset-8 rounded-[60px] bg-nf-brass/10 blur-3xl" />
            <a href="/guides/the-laundry-reset.pdf" target="_blank" rel="noopener" aria-label="Open The Laundry Reset PDF" className="relative block overflow-hidden rounded-[44px] border border-white/70 bg-white p-3 shadow-nfFloating transition duration-500 hover:-translate-y-2">
              <img src="/images/the-laundry-reset-cover.jpg" alt="The Laundry Reset guide cover" className="h-auto w-full rounded-[34px]" />
            </a>
            <div className="absolute -bottom-6 -left-6 rounded-[24px] border border-white/70 bg-nf-charcoal px-6 py-5 text-white shadow-nfSoft max-sm:left-3">
              <p className="text-[9px] font-black uppercase tracking-[.16em] text-white/55">Built for real life</p>
              <p className="mt-2 font-display text-3xl text-white">Simple. Beautiful. Intentional.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-nf-line bg-nf-charcoal px-[clamp(22px,5vw,72px)] py-[clamp(70px,8vw,112px)] text-white">
        <div className="nf-shell grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
          <div>
            <p className="nf-eyebrow">The problem is not motivation</p>
            <h2 className="font-display text-[clamp(50px,7vw,104px)] leading-[.9] tracking-[-.055em] text-white">It is the system.</h2>
          </div>
          <div className="space-y-5 text-xl leading-10 text-white/70">
            <p>Laundry feels endless when every load creates the same small decisions again.</p>
            <p>The reset gives those decisions a home: clear zones, visible essentials and a natural path from dirty laundry to ready to wear.</p>
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,144px)]">
        <div className="nf-shell">
          <div className="mx-auto max-w-[920px] text-center">
            <p className="nf-eyebrow">The Laundry Flow</p>
            <h2 className="nf-display text-[clamp(54px,8vw,112px)]">Every step should lead to the next.</h2>
            <p className="nf-lead mx-auto mt-8 max-w-[760px]">When the path is visible, the routine becomes easier to start, finish and restore.</p>
          </div>
          <div className="mt-14 grid grid-cols-7 gap-3 max-lg:grid-cols-4 max-sm:grid-cols-2">
            {flow.map((step, index) => (
              <div key={step} className="relative rounded-[26px] border border-nf-line bg-nf-white p-6 text-center shadow-nfSoft">
                <span className="text-[10px] font-black uppercase tracking-[.15em] text-nf-brass">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-lg font-bold leading-tight">{step}</h3>
                {index < flow.length - 1 && <span className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-nf-charcoal px-2 py-1 text-xs text-white max-lg:hidden">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-nf-line bg-nf-white/48 px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,140px)]">
        <div className="nf-shell">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div>
              <p className="nf-eyebrow">The reset method</p>
              <h2 className="font-display text-[clamp(52px,7vw,100px)] leading-[.9] tracking-[-.055em]">Build the room around the routine.</h2>
            </div>
            <p className="nf-lead max-w-[760px]">Start with how the space actually behaves. Then remove friction before adding anything new.</p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {method.map(([number, title, text]) => (
              <article key={number} className="rounded-[30px] border border-nf-line bg-nf-white p-7 shadow-nfSoft">
                <span className="text-xs font-black tracking-[.16em] text-nf-brass">{number}</span>
                <h3 className="mt-5 font-display text-4xl leading-none">{title}</h3>
                <p className="mt-5 leading-7 text-nf-slate">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,144px)]">
        <div className="nf-shell grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="nf-eyebrow">NorthFound Principles</p>
            <h2 className="font-display text-[clamp(52px,7vw,98px)] leading-[.9] tracking-[-.055em]">Fewer decisions. More calm.</h2>
            <p className="nf-lead mt-8">These are the filters used for both the guide and the products selected below.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map(([title, text], index) => (
              <article key={title} className="rounded-[30px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
                <span className="text-[10px] font-black uppercase tracking-[.16em] text-nf-brass">Principle {String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-display text-4xl leading-none">{title}</h3>
                <p className="mt-5 leading-8 text-nf-slate">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-t border-nf-line bg-nf-paper px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,150px)]">
        <div className="nf-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_.72fr] lg:items-end">
            <div>
              <p className="nf-eyebrow">The NorthFound Laundry Collection</p>
              <h2 className="nf-display text-[clamp(56px,8vw,116px)]">10 tools. One complete flow.</h2>
            </div>
            <div>
              <p className="nf-lead">Each selection supports a specific stage of the system. No price claims, sponsored ranking or endless comparison list.</p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {laundry.map((item) => <RecommendationCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,136px)]">
        <div className="nf-shell overflow-hidden rounded-[44px] bg-nf-charcoal p-[clamp(34px,6vw,72px)] text-white shadow-nfFloating">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="nf-eyebrow">Start without buying anything</p>
              <h2 className="font-display text-[clamp(52px,7vw,104px)] leading-[.9] tracking-[-.055em] text-white">Reset the system first.</h2>
              <p className="mt-8 max-w-[780px] text-xl leading-9 text-white/68">Use the free guide to observe, clear and zone your space. Then choose only the tools that solve a problem you can clearly name.</p>
            </div>
            <div className="lg:text-right"><Button href="/guides/the-laundry-reset.pdf" external>Open the Free PDF</Button></div>
          </div>
        </div>
      </section>
    </main>
  );
}
