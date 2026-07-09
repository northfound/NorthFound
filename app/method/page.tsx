export const metadata = { title: "Our Method", description: "How NorthFound evaluates and curates recommendations." };

const steps=[["01","Identify the problem","Start with friction, not products."],["02","Research","Understand the category."],["03","Compare","Evaluate realistic alternatives."],["04","Quality","Assess build quality and longevity."],["05","Visual Fit","Must suit a calm timeless home."],["06","Curate","Only the strongest recommendations remain."]];

export default function MethodPage(){
  return(
    <main className="px-[clamp(22px,5vw,72px)] py-24">
      <p className="nf-eyebrow">The NorthFound Method™</p>
      <h1 className="nf-display text-[clamp(60px,8vw,120px)]">Trust should be earned, not assumed.</h1>
      <p className="nf-lead mt-8 max-w-[760px]">Every recommendation follows the same editorial process. We explain how we choose, what we reject and why.</p>
      <div className="mt-16 grid gap-5 md:grid-cols-3">{steps.map(([n,t,d])=><div key={n} className="rounded-[28px] border border-nf-line bg-nf-white p-8 shadow-nfSoft"><span className="text-xs font-black tracking-[.15em] text-nf-brass">{n}</span><h3 className="mt-4 text-2xl font-bold">{t}</h3><p className="mt-3 text-nf-slate">{d}</p></div>)}</div>
    </main>
  )
}
