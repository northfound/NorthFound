import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="grid grid-cols-[auto_1fr] items-center gap-7 bg-nf-charcoal px-[clamp(22px,5vw,72px)] py-14 text-white max-md:grid-cols-1">
      <Image src="/northfound-logo.png" alt="NorthFound" width={140} height={140} className="h-auto w-[140px]" />
      <div>
        <p className="font-display text-[42px] leading-[.95] tracking-[-.04em]">Organized with intention.</p>
        <div className="mt-6 flex flex-wrap gap-5 text-xs font-bold uppercase tracking-[.14em] text-white/60">
          <Link href="/method">Method</Link><Link href="/recommendations">Recommendations</Link><Link href="/about">About</Link><Link href="/journal">Journal</Link><Link href="/privacy">Privacy</Link><Link href="/affiliate-disclosure">Affiliate</Link>
        </div>
        <small className="mt-6 block text-white/50">© 2026 NorthFound. Premium home organization collections and carefully curated recommendations.</small>
      </div>
    </footer>
  );
}
