import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/collections/kitchen", label: "Collections" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/method", label: "Method" },
  { href: "/journal", label: "Journal" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 grid min-h-[92px] grid-cols-[auto_1fr_auto] items-center gap-8 border-b border-nf-line bg-nf-ivory/90 px-[clamp(22px,5vw,72px)] py-4 backdrop-blur-2xl max-md:grid-cols-[auto_auto]">
      <Link href="/" aria-label="NorthFound home">
        <Image src="/northfound-logo.png" alt="NorthFound" width={124} height={124} className="h-auto w-[124px] max-md:w-[94px]" priority />
      </Link>
      <nav className="flex justify-center gap-10 max-md:hidden" aria-label="Primary navigation">
        {nav.map((item) => <Link key={item.href} href={item.href} className="text-xs font-extrabold uppercase tracking-[0.14em] text-nf-charcoal no-underline">{item.label}</Link>)}
      </nav>
      <Link href="/collections/kitchen" className="rounded-full bg-nf-charcoal px-5 py-3.5 text-xs font-extrabold uppercase tracking-[0.14em] text-white no-underline max-md:px-4 max-md:text-[10px]">Start Here</Link>
    </header>
  );
}
