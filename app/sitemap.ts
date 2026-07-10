import type { MetadataRoute } from "next";
import recommendations from "@/content/recommendations.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://northfound.netlify.app";
  const staticPages = ["", "/collections/kitchen", "/collections/pantry", "/method", "/recommendations", "/journal", "/about", "/privacy", "/affiliate-disclosure"].map((path) => ({ url: `${base}${path}` }));
  const recommendationPages = recommendations.map((item) => ({ url: `${base}/recommendations/${item.slug}` }));
  return [...staticPages, ...recommendationPages];
}
