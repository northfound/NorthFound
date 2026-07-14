import recommendations from "@/content/recommendations.json";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Free Kitchen Organization Guide | The Kitchen Reset",
  description:
    "Download The Kitchen Reset by NorthFound: a free kitchen organization guide with 15 practical upgrades and 10 curated product recommendations.",
  openGraph: {
    title: "The Kitchen Reset — Free Kitchen Organization Guide",
    description:
      "15 practical kitchen upgrades, 10 curated products, and a calmer way to organize your home.",
    url: "https://northfound.netlify.app/collections/kitchen",
    siteName: "NorthFound",
    type: "website"
  }
};

const guideLink =
  "https://drive.google.com/file/d/1d2wwDpXBULFVaL6QR1g-dhxZV8N9S0EN/view?usp=drivesdk";

const kitchen = recommendations.filter((item) => item.collection === "kitchen");

const principles = [
  "Visibility beats capacity.",
  "Store by frequency, not by category.",
  "One shelf, one system.",
  "Empty space is functional.",
  "Labels support memory.",
  "The reset should take less than five minutes."
];

const guideSteps = [
  {
    step: "01",
    title: "Start with visible storage",
    text: "Use clear containers for leftovers, dry goods and fridge zones so nothing disappears in the back.",
    product: "Rubbermaid Brilliance Glass"
  },
  {
    step: "02",
    title: "Reset one drawer first",
    text: "A calmer kitchen often starts with the drawer you open every day. Give utensils a dedicated structure.",
    product: "Pipishell Drawer Organizer"
  },
  {
    step: "03",
    title: "Use rotation for deep spaces",
    text: "Deep shelves and awkward corners work better when items rotate toward you instead of hiding behind each other.",
    product: "YouCopia Crazy Susan"
  },
  {
    step: "04",
    title: "Create vertical cabinet space",
    text: "Shelf risers and lid organizers make existing cabinets work harder without adding visual clutter.",
    product: "Amazon Basics Shelf Risers"
  }
];

export default function KitchenCollectionPage() {
  return (
    <main>
      <section className="grid min-h-[calc(100vh-92px)] grid-cols-[1.05fr_.95fr] items-center gap-16 px-[clamp(22px,5vw,72px)] py-20 max-lg:grid-cols-1">
        <div>
          <p className="nf-eyebrow">Free NorthFound Guide</p>
          <h1 className="nf-display text-[clamp(64px,9vw,138px)]">The Kitchen Reset</h1>
          <p className="nf-lead mt-8 max-w-[760px]">
            Transform your kitchen with 15 practical upgrades that make cooking easier,
            storage smarter and everyday life less cluttered.
          </p>

          <div className="mt-8 grid max-w-[680px] gap-3 text-sm font-bold text-nf-slate sm:grid-cols-3">
            <div className="rounded-full border border-nf-line bg-nf-white px-5 py-3">Free PDF Guide</div>
            <div className="rounded-full border border-nf-line bg-nf-white px-5 py-3">15 practical tips</div>
            <div className="rounded-full border border-nf-line bg-nf-white px-5 py-3">10 curated products</div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={guideLink} external>Download Free Guide</Button>
            <Button href="#products" variant="secondary">View Products</Button>
          </div>

          <p className="mt-6 max-w-[620px] text-sm leading-7 text-nf-slate">
            No endless product lists. No sponsored rankings. Just a calmer system and
            practical products we would recommend to people we care about.
          </p>
        </div>

        <div className="relative">
          <div
            className="min-h-[620px] overflow-hidden rounded-nfLarge bg-cover bg-center shadow-nfFloating max-md:min-h-[460px]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,.03), rgba(20,20,20,.50)), url(https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=88)"
            }}
          />

          <div className="absolute -bottom-8 left-8 right-8 rounded-[34px] border border-white/60 bg-nf-ivory/92 p-8 shadow-nfSoft backdrop-blur-2xl max-md:left-4 max-md:right-4 max-md:p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.16em] text-nf-brass">
              PDF Preview
            </p>
            <h2 className="mt-3 font-display text-[clamp(38px,4vw,64px)] leading-none tracking-[-.05em]">
              15 Kitchen Storage Hacks
            </h2>
            <p className="mt-4 leading-7 text-nf-slate">
              A simple, practical guide for turning cluttered kitchen zones into systems
              you can maintain.
            </p>
            <div className="mt-6">
              <Button href={guideLink} external>Open the Guide</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="nf-eyebrow">Use the guide this way</p>
          <h2 className="nf-display text-[clamp(48px,6vw,92px)]">
            One afternoon. Four starting points.
          </h2>
          <p className="nf-lead mx-auto mt-8 max-w-[760px]">
            You do not need to reorganize your entire kitchen at once. Start with one
            zone, solve one problem, then repeat.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {guideSteps.map((item) => (
            <article key={item.step} className="rounded-[32px] border border-nf-line bg-nf-white p-7 shadow-nfSoft">
              <span className="text-xs font-black tracking-[.14em] text-nf-brass">{item.step}</span>
              <h3 className="mt-5 text-2xl font-bold leading-tight tracking-[-.03em]">{item.title}</h3>
              <p className="mt-4 leading-7 text-nf-slate">{item.text}</p>
              <p className="mt-6 text-[11px] font-black uppercase tracking-[0.13em] text-nf-forest">
                Product match: {item.product}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-[clamp(22px,5vw,72px)] py-16">
        <p className="nf-eyebrow">NorthFound Principles™</p>
        <div className="grid gap-5 md:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p} className="rounded-[28px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
              <span className="text-xs font-black tracking-[.14em] text-nf-brass">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl font-bold">{p}</h3>
              <p className="mt-3 text-nf-slate">
                Build your kitchen around this principle before buying another organizer.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="products" className="px-[clamp(22px,5vw,72px)] py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="nf-eyebrow">Recommended Products From This Guide</p>
          <h2 className="nf-display text-[clamp(48px,6vw,92px)]">
            10 products that support the reset.
          </h2>
          <p className="nf-lead mx-auto mt-8 max-w-[760px]">
            Every product below is connected to a specific problem in the guide:
            food storage, drawer friction, pantry visibility, under-sink chaos,
            cabinet space or fridge access.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {kitchen.map((item) => (
            <RecommendationCard key={item.slug} item={item} />
          ))}
        </div>
      </section>

      <section className="border-y border-nf-line bg-nf-white px-[clamp(22px,5vw,72px)] py-20">
        <div className="mx-auto max-w-5xl grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="nf-eyebrow">Why NorthFound?</p>
            <h2 className="font-display text-[clamp(42px,5vw,76px)] leading-none tracking-[-.05em]">
              Fewer products. Better decisions.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-9 text-nf-slate">
            <p>
              We do not recommend hundreds of products just to fill a page.
              Every collection is built around a real home organization problem.
            </p>
            <p>
              If a product does not improve the system, it does not belong in the guide.
              That is the NorthFound standard.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
