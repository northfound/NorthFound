import Link from "next/link";

export type Recommendation = {
  slug: string; name: string; tag: string; category: string; score: number; bestFor: string; summary: string; link: string;
};

const visualClasses: Record<string, string> = {
  "Kitchen Storage": "from-stone-200 to-amber-100",
  "Drawer Organization": "from-[#E6D7BE] to-[#F8F5EF]",
  "Pantry Storage": "from-[#D7C7AD] to-[#FCFBF8]"
};

export function RecommendationCard({ item }: { item: Recommendation }) {
  return (
    <article className="overflow-hidden rounded-[34px] border border-nf-line bg-nf-white shadow-nfSoft">
      <Link href={`/recommendations/${item.slug}`} className={`relative flex min-h-[270px] items-center justify-center bg-gradient-to-br ${visualClasses[item.category] ?? "from-stone-200 to-stone-50"} p-8 text-center no-underline`}>
        <span className="absolute left-5 top-5 rounded-full bg-nf-charcoal px-3 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-white">Curated by NorthFound</span>
        <span className="font-display text-[clamp(36px,3vw,54px)] leading-[.9] tracking-[-.04em] text-nf-charcoal/45">{item.bestFor}</span>
      </Link>
      <div className="p-7">
        <div className="mb-4 flex items-center justify-between gap-4"><span className="text-[11px] font-black uppercase tracking-[0.12em] text-nf-brass">{item.tag}</span><strong className="font-display text-4xl leading-none text-nf-forest">{item.score}</strong></div>
        <h3 className="text-2xl font-bold leading-tight tracking-[-0.03em]">{item.name}</h3>
        <p className="mt-3 text-xs font-black uppercase tracking-[0.09em] text-nf-forest">{item.category}</p>
        <p className="mt-4 leading-7 text-nf-slate">{item.summary}</p>
        <div className="mt-6 grid gap-3">
          <Link href={`/recommendations/${item.slug}`} className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-nf-charcoal text-[11px] font-black uppercase tracking-[0.13em] text-white no-underline">Read Review</Link>
          <a href={item.link} target="_blank" rel="nofollow sponsored noopener" className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-nf-line bg-nf-white text-[11px] font-black uppercase tracking-[0.13em] text-nf-charcoal no-underline">View Product</a>
        </div>
      </div>
    </article>
  );
}
