import PageShell, { BulletList, Prose, SubHeading } from "../components/PageShell";
import { CompetitorGrid, ProofPositioningBoard } from "../components/Illustrations";

export default function Chapter8() {
  return (
    <>
      <PageShell
        id="page-24"
        pageNumber={24}
        chapterLabel="Chapter 08 · Competitive Positioning"
        title="Competitor Analysis & Finding Market Gaps"
        accent="red"
        illustration={<CompetitorGrid />}
        takeaway="The goal of competitor research is insight, not imitation — find what's missing, not just what's popular."
        action="Score yourself against 2 top competitors on response time, portfolio depth, price clarity and review recency."
      >
        <Prose>
          Studying competitors helps you understand the baseline buyers already expect
          — and reveals the gaps you can fill better than anyone currently ranking.
        </Prose>
        <SubHeading>What to analyze</SubHeading>
        <BulletList
          items={[
            "Titles, thumbnails and pricing of top-ranking gigs",
            "Common promises and guarantees being made",
            "Gaps in their FAQ, packages, or turnaround time",
            "Patterns in their negative reviews — problems buyers still face",
          ]}
        />
      </PageShell>

      <PageShell
        id="page-25"
        pageNumber={25}
        chapterLabel="Chapter 08 · Competitive Positioning"
        title="Your Unique Value Proposition & Proof"
        accent="orange"
        illustration={<ProofPositioningBoard />}
        reverse
        takeaway="A UVP without proof is just a claim — pair every differentiator with visible evidence buyers can verify."
        action="Write your UVP in one sentence, then list 2 portfolio pieces or testimonials that prove it's true."
      >
        <SubHeading>Differentiating against established sellers</SubHeading>
        <BulletList
          accent="orange"
          items={[
            "Specialize where larger sellers stay generic",
            "Offer clearer communication and faster response as a real edge",
            "Use niche-specific portfolio pieces instead of broad samples",
            "Highlight process transparency — how you work, not just results",
          ]}
        />
        <SubHeading>A note on ethics</SubHeading>
        <Prose>
          Study competitors for insight, never copy their descriptions, images or
          portfolio work directly — this can violate platform policy and damages the
          long-term credibility you're trying to build.
        </Prose>
      </PageShell>
    </>
  );
}
