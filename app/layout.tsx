import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "NorthFound - Organized with Intention", template: "%s - NorthFound" },
  description: "Premium home organization guides and carefully curated recommendations.",
  metadataBase: new URL("https://northfound.netlify.app"),
  openGraph: {
    title: "NorthFound - Organized with Intention",
    description: "Premium home organization guides and carefully curated recommendations.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "NorthFound - Organized with Intention",
    description: "Premium home organization guides and carefully curated recommendations."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><div className="nf-grain" /><Header />{children}<Footer /></body>
    </html>
  );
}
