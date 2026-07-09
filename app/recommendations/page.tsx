import recommendations from "@/content/recommendations.json";
import { RecommendationCard } from "@/components/ui/RecommendationCard";

export const metadata = { title: "Recommendations", description: "Curated home organization recommendations by NorthFound." };

export default function RecommendationsPage(){
  return(
    <main className="px-[clamp(22px,5vw,72px)] py-24">
      <p className="nf-eyebrow">Curated by NorthFound</p>
      <h1 className="nf-display text-[clamp(60px,8vw,120px)]">Recommendations</h1>
      <p className="nf-lead mt-8 max-w-[760px]">A curated library of products that have earned a place through the NorthFound Method™.</p>
      <div className="mt-14 grid gap-6 lg:grid-cols-3">{recommendations.map(item=><RecommendationCard key={item.slug} item={item}/>)}</div>
    </main>
  )
}
