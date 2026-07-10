import recommendations from "@/content/recommendations.json";
import { Button } from "@/components/ui/Button";
import { RecommendationCard } from "@/components/ui/RecommendationCard";

const collections = [
  {
    title: "Kitchen",
    text: "Create calmer drawers, better storage and a kitchen that resets faster.",
    href: "/collections/kitchen",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1600&q=88",
    label: "Guide 01 live"
  },
  {
    title: "Pantry",
    text: "Reduce waste, make staples visible and build a pantry that resets in minutes.",
    href: "/collections/pantry",
    image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=88",
    label: "Guide 02 live"
  },
  {
    title: "Laundry",
    text: "Turn laundry from a recurring mess into a simple weekly system.",
    href: "/collections/kitchen",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1600&q=88",
    label: "Roadmap"
  },
  {
    title: "Closet",
    text: "Reduce decision fatigue and build a wardrobe that is easier to maintain.",
    href: "/collections/kitchen",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=88",
    label: "Roadmap"
  }
];

const principles = ["Buy less.", "Choose better.", "Organize with intention.", "Create calm."];

export default function HomePage() {
  const featured = recommendations.slice(0, 3);

  return (
    <main>
      <section className="relative overflow-hidden px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,150px)]">
        <div className="nf-shell grid min-h-[calc(100vh-180px)] grid-cols-[1.02fr_.98fr] items-center gap-16 max-lg:grid-cols-1">
          <div>
            <p className="nf-eyebrow">NorthFound</p>
            <h1 className="nf-display text-[clamp(72px,11vw,168px)]">Create a home that feels better to live in.</h1>
            <p className="nf-lead mt-8 max-w-[760px]">
              Practical systems, carefully selected products and free guides that help you remove friction from everyday life.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/collections/kitchen">Start Your Home Reset</Button>
              <Button href="/method" variant="secondary">The NorthFound Method</Button>
            </div>
            <div className="mt-12 grid max-w-[720px] grid-cols-4 gap-3 max-sm:grid-cols-2">
              {principles.map((item) => (
                <div key={item} className="rounded-full border border-nf-line bg-nf-white/70 px-4 py-3 text-center text-[11px] font-black uppercase tracking-[0.12em] text-nf-charcoal backdrop-blur-xl">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="min-h-[680px] rounded-[54px] bg-cover bg-center shadow-nfFloating max-md:min-h-[460px]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,.02), rgba(17,17,17,.45)), url(https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1800&q=88)"
              }}
            />
            <div className="absolute bottom-8 left-8 right-8 rounded-[34px] border border-white/60 bg-nf-ivory/90 p-8 shadow-nfSoft backdrop-blur-2xl max-md:bottom-4 max-md:left-4 max-md:right-4 max-md:p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.16em] text-nf-brass">Featured Guide</p>
              <h2 className="mt-3 font-display text-[clamp(38px,4vw,64px)] leading-none tracking-[-.05em]">The Kitchen Reset</h2>
              <p className="mt-4 leading-7 text-nf-slate">
                15 practical kitchen upgrades and 10 curated products to make the busiest room in your home easier to use.
              </p>
              <div className="mt-6"><Button href="/collections/kitchen">Open Guide</Button></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-nf-line bg-nf-white/45 px-[clamp(22px,5vw,72px)] py-20">
        <div className="nf-shell grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="nf-eyebrow">The idea</p>
            <h2 className="font-display text-[clamp(48px,7vw,108px)] leading-[.88] tracking-[-.055em]">
              Better homes are built by better systems.
            </h2>
          </div>
          <p className="nf-lead max-w-[760px]">
            Organization is not about perfection. It is about making daily life easier. NorthFound exists to help you build spaces that are calmer, more useful and easier to maintain.
          </p>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,150px)]">
        <div className="nf-shell">
          <div className="mb-12 max-w-[900px]">
            <p className="nf-eyebrow">Start by room</p>
            <h2 className="nf-display text-[clamp(54px,8vw,118px)]">One reset at a time.</h2>
            <p className="nf-lead mt-8">
              Each collection follows the same NorthFound system: understand the problem, simplify the space, choose fewer products and maintain the result.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {collections.map((item) => (
              <a key={item.title} href={item.href} className="group relative min-h-[460px] overflow-hidden rounded-[42px] border border-nf-line bg-nf-charcoal p-8 text-white no-underline shadow-nfSoft">
                <div className="absolute inset-0 scale-100 bg-cover bg-center opacity-70 transition duration-700 group-hover:scale-105" style={{ backgroundImage: `linear-gradient(180deg, rgba(17,17,17,.05), rgba(17,17,17,.72)), url(${item.image})` }} />
                <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-between">
                  <span className="w-fit rounded-full bg-white/14 px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] backdrop-blur-xl">{item.label}</span>
                  <div>
                    <h3 className="font-display text-[clamp(48px,6vw,86px)] leading-[.88] tracking-[-.055em] text-white">{item.title}</h3>
                    <p className="mt-5 max-w-[560px] text-lg leading-8 text-white/76">{item.text}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-nf-charcoal px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,150px)] text-white">
        <div className="nf-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="nf-eyebrow">Manifesto</p>
            <h2 className="font-display text-[clamp(54px,8vw,118px)] leading-[.88] tracking-[-.055em] text-white">
              Buy less. Choose better. Live lighter.
            </h2>
          </div>
          <div className="space-y-6 text-xl leading-10 text-white/68">
            <p>A calmer home creates a calmer mind.</p>
            <p>Organization is not about owning more containers. It is about removing friction from the way you already live.</p>
            <p>We believe good systems make everyday life feel lighter.</p>
          </div>
        </div>
      </section>

      <section className="px-[clamp(22px,5vw,72px)] py-[clamp(80px,10vw,150px)]">
        <div className="nf-shell">
          <div className="mb-12 max-w-[900px]">
            <p className="nf-eyebrow">NorthFound Approved</p>
            <h2 className="nf-display text-[clamp(54px,8vw,118px)]">Fewer products. Stronger recommendations.</h2>
            <p className="nf-lead mt-8">
              We do not recommend products because they are popular. We recommend them because they solve a real household problem.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {featured.map((item) => <RecommendationCard key={item.slug} item={item} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
