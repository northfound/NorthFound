import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const display = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-body" });

export const metadata: Metadata = {
  title: { default: "NorthFound — Organized with Intention", template: "%s — NorthFound" },
  description: "Premium home organization collections and carefully curated recommendations.",
  metadataBase: new URL("https://northfound.netlify.app"),
  openGraph: { title: "NorthFound — Organized with Intention", description: "Premium home organization collections and carefully curated recommendations.", type: "website" },
  twitter: { card: "summary_large_image", title: "NorthFound — Organized with Intention", description: "Premium home organization collections and carefully curated recommendations." }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body><div className="nf-grain" /><Header />{children}<Footer /></body>
    </html>
  );
}
