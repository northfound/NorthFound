import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/collections/kitchen", label: "Kitchen" },
  { href: "/recommendations", label: "Recommendations" },
  { href: "/method", label: "Method" },
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/affiliate-disclosure", label: "Affiliate" }
];

export function Footer() {
  return (
    <footer className="bg-nf-charcoal px-0 py-16 text-white">
      <div className="nf-shell grid grid-cols-[auto_1fr] items-center gap-10 max-md:grid-cols-1">
        <Image src="/northfound-logo.png" alt="NorthFound" width={138} height={138} className="h-auto w-[138px]" />

        <div>
          <p className="font-display text-[clamp(38px,5vw,74px)] leading-[0.88] tracking-[-0.055em] text-white">
            Buy less. Choose better. Organize with intention.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 text-[11px] font-black uppercase tracking-[0.15em] text-white/58">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="no-underline transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>

          <p className="mt-8 max-w-[760px] text-sm leading-7 text-white/48">
            As an Amazon Associate, NorthFound earns from qualifying purchases. We only recommend products that support calmer, more useful home systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
