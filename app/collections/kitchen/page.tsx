import recommendations from "@/content/recommendations.json";
import { RecommendationCard } from "@/components/ui/RecommendationCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "The Kitchen Reset | Free Kitchen Organization Guide",
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

const method = [
  {
    label: "Observe",
    title: "Find the friction",
    text: "Notice where the kitchen slows you down: hidden food, chaotic drawers, awkward cabinets or wasted space."
  },
  {
    label: "Remove",
    title: "Edit before buying",
    text: "Remove what you do not use, duplicates that create clutter and products that only make the system harder to maintain."
  },
  {
    label: "Organize",
    title: "Build simple zones",
    text: "Create visible, repeatable zones for food storage, drawers, pantry shelves, sink storage and fridge items."
  },
  {
    label: "Maintain",
    title: "Make reset easy",
    text: "A good system should take minutes to put back together. If it is too complicated, it will not last."
  }
];

const resetSteps = [
  {
    step: "01",
    title: "Make leftovers visible",
    text: "Choose clear, stackable food storage so cooked food is easy to see and easy to use again.",
    product: "Rubbermaid Brilliance Glass",
    slug: "rubbermaid-brilliance-glass"
  },
  {
    step: "02",
    title: "Create a calm utensil drawer",
    text: "Give everyday tools dedicated spaces so the drawer resets itself after every use.",
    product: "Pipishell Drawer Organizer",
    slug: "pipishell-drawer-organizer"
  },
  {
    step: "03",
    title: "Fix deep cabinet friction",
    text: "Use rotation for oils, sauces, spices and smaller items that usually disappear in the back.",
    product: "YouCopia Crazy Susan",
    slug: "youcopia-crazy-susan"
  },
  {
    step: "04",
    title: "Lift what should not be stacked",
    text: "Use shelf risers and lid organizers to make vertical cabinet space actually usable.",
    product: "Amazon Basics Shelf Risers",
    slug: "amazon-basics-shelf-risers"
  },
  {
    step: "05",
    title: "Give the sink area structure",
    text: "Under-sink storage works best when cleaning products have clear zones and easy access.",
    product: "Simple Houseware Under Sink Organizer",
    slug: "simple-houseware-under-sink"
  },
  {
    step: "06",
    title: "Stop losing food in the fridge",
    text: "Use pull-out fridge zones for items that usually get pushed to the back and forgotten.",
    product: "YouCopia RollOut Fridge Caddy",
    slug: "youcopia-fridge-caddy"
  }
];

const principles = [
  "Visibility beats capacity.",
  "Store by frequency, not by category.",
  "One shelf, one system.",
  "Empty space is functional.",
  "Labels support memory.",
  "The reset should take less than five minutes."
];

function findProduct(slug: string) {
  return recommendations.find((item) => item.slug === slug);
}

export default function KitchenCollectionPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-[clamp(22px,5vw,72px)] py-[clamp(82px,10vw,150px)]">
        <div className="nf-shell grid min-h-[calc(100vh-180px)] grid-cols-[1.02fr_.98fr] items-center gap-16 max-lg:grid-cols-1">
          <div>
            <p className="nf-eyebrow">NorthFound Guide 01</p>
            <h1 className="nf-display text-[clamp(72px,11vw,168px)]">
              The Kitchen Reset
            </h1>
            <p className="nf-lead mt-8 max-w-[760px]">
              A free kitchen organization guide built to help you create calmer drawers,
              smarter storage and a kitchen that is easier to reset every day.
            </p>

            <div className="mt-8 grid max-w-[720px] gap-3 text-sm font-bold text-nf-slate sm:grid-cols-3">
              <div className="rounded-full border border-nf-line bg-nf-white/70 px-5 py-3">Free PDF guide</div>
              <div className="rounded-full border border-nf-line bg-nf-white/70 px-5 py-3">15 practical upgrades</div>
              <div className="rounded-full border border-nf-line bg-nf-white/70 px-5 py-3">10 curated products</div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={guideLink} external>Download Free Guide</Button>
              <Button href="#products" variant="secondary">View Products</Button>
            </div>

            <p className="mt-6 max-w-[620px] text-sm leading-7 text-nf-slate">
              Pinterest visitors start here. Download the guide, follow the reset steps,
              then use the product list only where it solves a real problem.
            </p>
          </div>

          <div className="relative">
            <div
              className="min-h-[680px] rounded-[54px] bg-cover bg-center shadow-nfFloating max-md:min-h-[460px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,.02), rgba(20,20,20,.48)), url(https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1800&q=88)"
              }}
            />

            <div className="absolute -bottom-8 left-8 right-8 rounded-[34px] border border-white/60 bg-nf-ivory/92 p-8 shadow-nfSoft backdrop-blur-2xl max-md:left-4 max-md:right-4 max-md:p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-nf-brass">PDF Preview</p>
              <h2 className="mt-3 font-display text-[clamp(38px,4vw,64px)] leading-none tracking-[-.05em]">
                15 Kitchen Storage Hacks
              </h2>
              <p className="mt-4 leading-7 text-nf-slate">
                A practical checklist for turning cluttered kitchen zones into systems you can maintain.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={guideLink} external>Open Guide</Button>
                <Button href="#method" variant="secondary">See Method</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav className="sticky top-[92px] z-40 border-y border-nf-line bg-nf-ivory/88 px-[clamp(22px,5vw,72px)] py-4 backdrop-blur-2xl max-md:top-[78px]">
        <div className="nf-shell flex flex-wrap justify-center gap-5 text-[11px] font-black uppercase tracking-[0.15em] text-nf-slate">
          <a href="#method" className="no-underline hover:text-nf-charcoal">Method</a>
          <a href="#reset" className="no-underline hover:text-nf-charcoal">Reset Steps</a>
          <a href="#products" className="no-underline hover:text-nf-charcoal">Products</a>
          <a href="#principles" className="no-underline hover:text-nf-charcoal">Principles</a>
        </div>
      </nav>

      <section id="method" className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,150px)]">
        <div className="nf-shell">
          <div className="mb-14 max-w-[920px]">
            <p className="nf-eyebrow">The NorthFound Method™</p>
            <h2 className="nf-display text-[clamp(54px,8vw,118px)]">
              The system comes before the shopping list.
            </h2>
            <p className="nf-lead mt-8">
              Most kitchens do not need more stuff. They need fewer decisions, clearer zones
              and products that support the way the room is actually used.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-4">
            {method.map((item, index) => (
              <article key={item.label} className="rounded-[34px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
                <span className="text-xs font-black tracking-[.14em] text-nf-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-[11px] font-black uppercase tracking-[0.15em] text-nf-forest">
                  {item.label}
                </p>
                <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-.03em]">{item.title}</h3>
                <p className="mt-4 leading-7 text-nf-slate">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reset" className="bg-nf-charcoal px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,150px)] text-white">
        <div className="nf-shell">
          <div className="mb-14 max-w-[980px]">
            <p className="nf-eyebrow">Interactive Guide</p>
            <h2 className="font-display text-[clamp(54px,8vw,118px)] leading-[.88] tracking-[-.055em] text-white">
              Six places to start your kitchen reset.
            </h2>
            <p className="mt-8 max-w-[760px] text-xl leading-9 text-white/66">
              Use the PDF as the checklist. Use this page to connect each step to the product that solves the problem.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {resetSteps.map((step) => {
              const product = findProduct(step.slug);

              return (
                <article key={step.step} className="rounded-[38px] border border-white/12 bg-white/[0.06] p-7 shadow-nfSoft backdrop-blur-xl">
                  <div className="grid gap-6 md:grid-cols-[1fr_.85fr]">
                    <div>
                      <span className="text-xs font-black tracking-[.16em] text-nf-brass">{step.step}</span>
                      <h3 className="mt-5 font-display text-[clamp(36px,4vw,58px)] leading-[.9] tracking-[-.045em] text-white">
                        {step.title}
                      </h3>
                      <p className="mt-5 leading-8 text-white/68">{step.text}</p>
                    </div>

                    {product ? (
                      <Link
                        href={`/recommendations/${product.slug}`}
                        className="group overflow-hidden rounded-[28px] border border-white/12 bg-nf-ivory text-nf-charcoal no-underline"
                      >
                        <div
                          className="min-h-[180px] bg-cover bg-center transition duration-700 group-hover:scale-105"
                          style={{
                            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,.06), rgba(17,17,17,.32)), url(${product.visual})`
                          }}
                        />
                        <div className="p-5">
                          <p className="text-[10px] font-black uppercase tracking-[0.14em] text-nf-brass">Product match</p>
                          <h4 className="mt-2 text-xl font-bold leading-tight tracking-[-.03em]">{product.name}</h4>
                          <p className="mt-3 text-sm leading-6 text-nf-slate">{product.summary}</p>
                        </div>
                      </Link>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,150px)]">
        <div className="nf-shell">
          <div className="mb-14 max-w-[980px]">
            <p className="nf-eyebrow">Recommended Products From This Guide</p>
            <h2 className="nf-display text-[clamp(54px,8vw,118px)]">
              10 products that support the reset.
            </h2>
            <p className="nf-lead mt-8">
              Every recommendation below is connected to a specific kitchen problem:
              food storage, drawer friction, pantry visibility, under-sink chaos, cabinet space or fridge access.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {recommendations.map((item) => (
              <RecommendationCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="border-y border-nf-line bg-nf-white/55 px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,130px)]">
        <div className="nf-shell">
          <div className="mb-12 max-w-[920px]">
            <p className="nf-eyebrow">NorthFound Principles™</p>
            <h2 className="font-display text-[clamp(48px,7vw,98px)] leading-[.9] tracking-[-.055em]">
              The rules behind a calmer kitchen.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <div key={p} className="rounded-[30px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
                <span className="text-xs font-black tracking-[.14em] text-nf-brass">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-2xl font-bold">{p}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,140px)]">
        <div className="nf-shell grid gap-10 rounded-[46px] border border-nf-line bg-nf-charcoal p-[clamp(32px,6vw,76px)] text-white shadow-nfFloating lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="nf-eyebrow">Why NorthFound?</p>
            <h2 className="font-display text-[clamp(46px,7vw,98px)] leading-[.88] tracking-[-.055em] text-white">
              Fewer products. Better decisions.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-9 text-white/68">
            <p>
              We do not recommend hundreds of products just to fill a page.
              Every collection is built around a real home organization problem.
            </p>
            <p>
              If a product does not improve the system, it does not belong in the guide.
              That is the NorthFound standard.
            </p>
            <div className="pt-4">
              <Button href={guideLink} external>Download Free Guide</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
