import Link from "next/link";

export type Recommendation = {
  slug: string;
  name: string;
  tag: string;
  category: string;
  score?: number;
  bestFor: string;
  summary: string;
  why: string;
  pros: string[];
  cons: string[];
  link: string;
  visual: string;
  visualType?: string;
  guide: string;
  collection?: string;
  guideSlug?: string;
  asin?: string;
};

export function RecommendationCard({ item }: { item: Recommendation }) {
  const isProductImage = item.visualType === "product" || item.visual.startsWith("/products/");

  return (
    <article className="overflow-hidden rounded-[34px] border border-nf-line bg-nf-white shadow-nfSoft transition duration-300 hover:-translate-y-1 hover:shadow-nfFloating">
      <Link
        href={`/recommendations/${item.slug}`}
        aria-label={`View details for ${item.name}`}
        className={`relative flex min-h-[310px] items-end overflow-hidden p-6 text-left no-underline ${isProductImage ? "bg-[#f4f1eb]" : ""}`}
        style={isProductImage ? undefined : {
          backgroundImage: `linear-gradient(180deg, rgba(20,20,20,.08), rgba(20,20,20,.62)), url(${item.visual})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {isProductImage && (
          <>
            <img src={item.visual} alt={item.name} loading="lazy" className="absolute inset-0 h-full w-full object-contain p-9" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-transparent" />
          </>
        )}
        <span className="absolute left-5 top-5 rounded-full bg-nf-charcoal px-3 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-white">
          NorthFound Selection
        </span>
        <div className="relative z-10 max-w-[92%]">
          <span className="text-[11px] font-black uppercase tracking-[0.14em] text-white/75">{item.category}</span>
          <h3 className="mt-3 font-display text-[clamp(34px,3vw,52px)] leading-[.9] tracking-[-.04em] text-white">
            {item.bestFor}
          </h3>
        </div>
      </Link>
      <div className="p-7">
        <span className="text-[11px] font-black uppercase tracking-[0.12em] text-nf-brass">{item.tag}</span>
        <h3 className="mt-4 text-2xl font-bold leading-tight tracking-[-0.03em]">{item.name}</h3>
        <p className="mt-4 leading-7 text-nf-slate">{item.summary}</p>
        <div className="mt-5 rounded-[22px] border border-nf-line bg-nf-ivory/65 p-5">
          <span className="text-[10px] font-black uppercase tracking-[0.13em] text-nf-brass">Why it fits the system</span>
          <p className="mt-3 text-sm leading-7 text-nf-slate">{item.why}</p>
        </div>
        <div className="mt-6 grid gap-3">
          <Link href={`/recommendations/${item.slug}`} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-nf-charcoal px-5 text-center text-[11px] font-black uppercase tracking-[0.13em] text-white no-underline">
            View Details
          </Link>
          <a href={item.link} target="_blank" rel="nofollow sponsored noopener" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-nf-line bg-nf-white px-5 text-center text-[11px] font-black uppercase tracking-[0.13em] text-nf-charcoal no-underline">
            View Product
          </a>
        </div>
      </div>
    </article>
  );
}
