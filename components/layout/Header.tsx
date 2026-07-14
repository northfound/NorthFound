import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/collections/kitchen", label: "Kitchen" },
  { href: "/collections/pantry", label: "Pantry" },
  { href: "/collections/laundry", label: "Laundry" },
  { href: "/recommendations", label: "Selections" },
  { href: "/method", label: "Method" },
  { href: "/journal", label: "Journal" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-nf-line bg-nf-ivory/88 backdrop-blur-2xl">
      <div className="nf-shell grid min-h-[92px] grid-cols-[auto_1fr_auto] items-center gap-8 max-md:min-h-[78px] max-md:grid-cols-[auto_auto]">
        <Link href="/" aria-label="NorthFound home" className="flex items-center">
          <Image src="/northfound-logo.png" alt="NorthFound" width={118} height={118} className="h-auto w-[118px] max-md:w-[90px]" priority />
        </Link>
        <nav className="flex justify-center gap-8 max-lg:gap-5 max-md:hidden" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="relative text-[10px] font-black uppercase tracking-[0.14em] text-nf-charcoal no-underline after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-nf-brass after:transition-all after:duration-300 hover:after:w-full">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/collections/laundry" className="rounded-full bg-nf-charcoal px-5 py-3.5 text-[11px] font-black uppercase tracking-[0.15em] text-white no-underline shadow-[0_18px_48px_rgba(17,17,17,.18)] transition hover:-translate-y-0.5 max-md:px-4 max-md:text-[10px]">
          Free Guide
        </Link>
      </div>
      <nav className="hidden overflow-x-auto border-t border-nf-line px-4 py-3 max-md:flex max-md:gap-5" aria-label="Mobile navigation">
        {nav.slice(0, 5).map((item) => <Link key={item.href} href={item.href} className="whitespace-nowrap text-[9px] font-black uppercase tracking-[.13em] no-underline">{item.label}</Link>)}
      </nav>
    </header>
  );
}
