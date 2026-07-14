export const metadata = { title: "Affiliate Disclosure", description: "How NorthFound uses Amazon affiliate links and keeps product selection editorially independent." };

export default function AffiliateDisclosurePage() {
  return (
    <main className="px-[clamp(22px,5vw,72px)] py-24">
      <div className="nf-shell">
        <p className="nf-eyebrow">Transparency</p>
        <h1 className="nf-display text-[clamp(60px,8vw,120px)]">Affiliate Disclosure</h1>
        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-9 text-nf-slate">
          <p><strong className="text-nf-charcoal">As an Amazon Associate I earn from qualifying purchases.</strong></p>
          <p>Some links on NorthFound are paid affiliate links. If you purchase through one of these links, NorthFound may earn a commission at no additional cost to you.</p>
          <p>Affiliate income does not determine which products are selected. Recommendations are chosen for their practical fit with a NorthFound guide, and a selection may be updated when a better-fitting option becomes available.</p>
          <p>Prices, availability, product details and seller terms can change. Review the current Amazon listing before purchasing.</p>
        </div>
      </div>
    </main>
  );
}
