import Link from "next/link";

export type Recommendation = {
  slug: string;
  name: string;
  tag: string;
  category: string;
  score: number;
  bestFor: string;
  summary: string;
  why: string;
  pros: string[];
  cons: string[];
  link: string;
  visual: string;
  guide: string;
};

export function RecommendationCard({ item }: { item: Recommendation }) {
  return (
    <article className="overflow-hidden rounded-[34px] border border-nf-line bg-nf-white shadow-nfSoft">
      <Link
        href={`/recommendations/${item.slug}`}
        className="relative flex min-h-[310px] items-end overflow-hidden p-6 text-left no-underline"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(20,20,20,.08), rgba(20,20,20,.62)), url(${item.visual})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <span className="absolute left-5 top-5 rounded-full bg-nf-charcoal px-3 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-white">
          NorthFound Approved
        </span>
        <div className="relative z-10 max-w-[92%]">
          <span className="text-[11px] font-black uppercase tracking-[0.14em] text-white/75">{item.category}</span>
          <h3 className="mt-3 font-display text-[clamp(34px,3vw,52px)] leading-[.9] tracking-[-.04em] text-white">
            {item.bestFor}
          </h3>
        </div>
      </Link>
      <div className="p-7">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="text-[11px] font-black uppercase tracking-[0.12em] text-nf-brass">{item.tag}</span>
          <strong className="font-display text-4xl leading-none text-nf-forest">{item.score}</strong>
        </div>
        <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em]">{item.name}</h3>
        <p className="mt-4 leading-7 text-nf-slate">{item.summary}</p>
        <div className="mt-5 rounded-[22px] border border-nf-line bg-nf-ivory/65 p-5">
          <span className="text-[10px] font-black uppercase tracking-[0.13em] text-nf-brass">Why we chose it</span>
          <p className="mt-3 text-sm leading-7 text-nf-slate">{item.why}</p>
        </div>
        <div className="mt-6 grid gap-3">
          <Link href={`/recommendations/${item.slug}`} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-nf-charcoal text-[11px] font-black uppercase tracking-[0.13em] text-white no-underline">
            Read Review
          </Link>
          <a href={item.link} target="_blank" rel="nofollow sponsored noopener" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-nf-line bg-nf-white text-[11px] font-black uppercase tracking-[0.13em] text-nf-charcoal no-underline">
            View on Amazon
          </a>
        </div>
      </div>
    </article>
  );
}
