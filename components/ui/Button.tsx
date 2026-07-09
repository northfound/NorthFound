import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", external = false }: ButtonProps) {
  const base =
    "inline-flex min-h-14 items-center justify-center rounded-full px-7 text-[11px] font-black uppercase tracking-[0.15em] no-underline transition duration-300 ease-out";

  const variants = {
    primary:
      "bg-nf-charcoal text-white shadow-[0_22px_60px_rgba(17,17,17,.20)] hover:-translate-y-0.5 hover:shadow-[0_28px_80px_rgba(17,17,17,.25)]",
    secondary:
      "border border-nf-line bg-nf-white/70 text-nf-charcoal backdrop-blur-xl hover:-translate-y-0.5 hover:bg-nf-white",
    ghost:
      "text-nf-charcoal underline decoration-nf-brass/45 underline-offset-[7px] hover:decoration-nf-brass"
  };

  const className = `${base} ${variants[variant]}`;

  if (external) {
    return (
      <a className={className} href={href} target="_blank" rel="nofollow sponsored noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}
