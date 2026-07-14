import recommendations from "@/content/recommendations.json";
import { Button } from "@/components/ui/Button";
import type { Recommendation } from "@/components/ui/RecommendationCard";
import { notFound } from "next/navigation";

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return recommendations.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = recommendations.find((r) => r.slug === slug);
  if (!item) return { title: "Recommendation" };
  return {
    title: item.name,
    description: item.summary,
    alternates: { canonical: `/recommendations/${item.slug}` },
    openGraph: {
      title: `${item.name} | NorthFound Selection`,
      description: item.summary,
      url: `https://northfound.netlify.app/recommendations/${item.slug}`,
      siteName: "NorthFound",
      type: "article",
      images: item.visual.startsWith("http") ? [{ url: item.visual }] : undefined
    }
  };
}

export default async function RecommendationPage({ params }: Props) {
  const { slug } = await params;
  const rawItem = recommendations.find((r) => r.slug === slug);
  if (!rawItem) notFound();
  const item = rawItem as Recommendation;
  const isProductImage = item.visualType === "product" || item.visual.startsWith("/products/");

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: item.name,
    image: item.visual,
    description: item.summary,
    sku: item.asin || item.slug,
    brand: { "@type": "Brand", name: item.name.split(" ")[0] }
  };

  return (
    <main className="px-[clamp(22px,5vw,72px)] py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="nf-shell">
        <p className="nf-eyebrow">NorthFound Selection · {item.category}</p>
        <h1 className="nf-display max-w-[1200px] text-[clamp(58px,8vw,118px)]">{item.name}</h1>
        <p className="nf-lead mt-8 max-w-[780px]">{item.summary}</p>

        <a href={item.link} target="_blank" rel="nofollow sponsored noopener" aria-label={`View ${item.name} on Amazon, paid link`}>
          {isProductImage ? (
            <div className="mt-14 flex min-h-[420px] items-center justify-center overflow-hidden rounded-[42px] bg-[#f4f1eb] p-10 shadow-nfFloating">
              <img src={item.visual} alt={item.name} className="max-h-[470px] w-full object-contain" />
            </div>
          ) : (
            <div
              className="mt-14 min-h-[420px] rounded-[42px] bg-cover bg-center shadow-nfFloating"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,.05), rgba(20,20,20,.38)), url(${item.visual})` }}
            />
          )}
        </a>

        <section className="mt-16 grid gap-5 lg:grid-cols-[.72fr_1.28fr]">
          <div className="rounded-[32px] border border-nf-line bg-nf-charcoal p-8 text-white shadow-nfSoft">
            <p className="text-[10px] font-black uppercase tracking-[0.15em] text-white/55">Best for</p>
            <h2 className="mt-5 font-display text-[clamp(42px,5vw,68px)] leading-[.94] text-white">{item.bestFor}</h2>
            {item.asin && <p className="mt-8 text-xs uppercase tracking-[.13em] text-white/45">Amazon ASIN · {item.asin}</p>}
          </div>

          <div className="rounded-[32px] border border-nf-line bg-nf-white p-8 shadow-nfSoft">
            <p className="nf-eyebrow">Why it fits the system</p>
            <h2 className="font-display text-[clamp(42px,5vw,68px)] leading-none">A useful role, not another object.</h2>
            <p className="mt-7 text-lg leading-9 text-nf-slate">{item.why}</p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-nf-line bg-nf-white p-8">
            <h3 className="font-display text-5xl">Strengths</h3>
            <ul className="mt-6 space-y-3 text-nf-slate">
              {item.pros.map((pro) => <li key={pro} className="flex gap-3 border-b border-nf-line pb-3"><span className="text-nf-brass">✓</span><span>{pro}</span></li>)}
            </ul>
          </div>

          <div className="rounded-[28px] border border-nf-line bg-nf-white p-8">
            <h3 className="font-display text-5xl">Considerations</h3>
            <ul className="mt-6 space-y-3 text-nf-slate">
              {item.cons.map((con) => <li key={con} className="flex gap-3 border-b border-nf-line pb-3"><span className="text-nf-brass">—</span><span>{con}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="mt-16 rounded-[36px] border border-nf-line bg-nf-white p-[clamp(28px,5vw,56px)] shadow-nfSoft">
          <p className="nf-eyebrow">Editorial transparency</p>
          <h2 className="font-display text-[clamp(44px,6vw,82px)] leading-none">Choose with context.</h2>
          <p className="mt-7 max-w-[900px] text-lg leading-9 text-nf-slate">
            This selection is based on the product listing, its practical fit with the {item.guide} system and the role it can play in a calmer home. NorthFound does not present this as laboratory testing or a guarantee that it will suit every household. Measure your space and review the current Amazon listing before purchasing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={item.link} external>View Product</Button>
            <Button href={`/collections/${item.guideSlug || item.collection || "kitchen"}`} variant="secondary">Back to {item.guide}</Button>
          </div>
        </section>
      </div>
    </main>
  );
}
