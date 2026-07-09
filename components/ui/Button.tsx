import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = { href: string; children: ReactNode; variant?: "primary" | "secondary"; external?: boolean };

export function Button({ href, children, variant = "primary", external = false }: ButtonProps) {
  const className = variant === "primary"
    ? "inline-flex min-h-14 items-center justify-center rounded-full bg-nf-forest px-7 text-xs font-black uppercase tracking-[0.13em] text-white shadow-[0_18px_42px_rgba(79,102,80,.22)] no-underline"
    : "inline-flex min-h-14 items-center justify-center rounded-full border border-nf-line bg-nf-white/60 px-7 text-xs font-black uppercase tracking-[0.13em] text-nf-charcoal no-underline";
  if (external) return <a className={className} href={href} target="_blank" rel="nofollow sponsored noopener noreferrer">{children}</a>;
  return <Link className={className} href={href}>{children}</Link>;
}
