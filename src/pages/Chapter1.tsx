import PageShell, { BulletList, Prose, SubHeading } from "../components/PageShell";
import { MisconceptionVsRealityChart, RelevanceRadar, SearchAlgorithmDiagram } from "../components/Illustrations";

export default function Chapter1() {
  return (
    <>
      <PageShell
        id="page-4"
        pageNumber={4}
        chapterLabel="Chapter 01 · How Fiverr Search Really Works"
        title="How the Fiverr Search & Recommendation Engine Works"
        accent="red"
        illustration={<SearchAlgorithmDiagram />}
        takeaway="Fiverr's engine rewards gigs that are relevant, clicked, and reliably delivered — not gigs that simply 'exist' longer or use more keywords."
        action="List the exact words a buyer would type to search for your service. Compare them honestly with your current gig title."
      >
        <Prose>
          Fiverr's search system works similarly to modern marketplace and e-commerce
          engines: it tries to match buyer queries with the gigs most likely to satisfy
          that specific buyer — then keeps learning from what buyers actually click,
          message, and order.
        </Prose>
        <SubHeading>The three forces behind visibility</SubHeading>
        <BulletList
          items={[
            <><strong className="text-white">Relevance</strong> — how closely your title, category, tags and description match the buyer's search words.</>,
            <><strong className="text-white">Engagement</strong> — whether real buyers click, message, and convert once they see your gig.</>,
            <><strong className="text-white">Reliability</strong> — whether you consistently deliver what you promised, on time, with happy outcomes.</>,
          ]}
        />
        <Prose>
          None of these work alone. A perfectly written title with zero engagement won't
          rank well, and a highly engaging gig with irrelevant keywords won't even be
          shown to the right buyers in the first place.
        </Prose>
      </PageShell>

      <PageShell
        id="page-5"
        pageNumber={5}
        chapterLabel="Chapter 01 · How Fiverr Search Really Works"
        title="Relevance, Buyer Intent & Search Visibility Factors"
        accent="violet"
        illustration={<RelevanceRadar />}
        reverse
        takeaway="Visibility is a moving average of many small signals — treat every one of them as controllable, not random."
        action="Score yourself honestly on each radar point (1–5) and pick the single weakest one to improve this week."
      >
        <SubHeading>What buyer intent really means</SubHeading>
        <Prose>
          A buyer searching "logo design for startup" wants something different from one
          searching "cheap logo design." Fiverr's system tries to detect this intent and
          show gigs that fit it — so your gig should clearly signal who it's built for.
        </Prose>
        <SubHeading>Search visibility factors you can influence</SubHeading>
        <BulletList
          accent="violet"
          items={[
            "Title and category accuracy relative to the search term",
            "Click-through rate from impressions to gig views",
            "Buyer engagement: messages, saves, and order requests",
            "On-time delivery rate and order completion rate",
            "Recency and consistency of positive buyer outcomes",
          ]}
        />
        <Prose>
          These factors interact continuously — improving one (like CTR) often improves
          another (like conversion), because a better-matched gig attracts better-fit buyers.
        </Prose>
      </PageShell>

      <PageShell
        id="page-6"
        pageNumber={6}
        chapterLabel="Chapter 01 · How Fiverr Search Really Works"
        title="Service Quality, Reliability & Common Ranking Myths"
        accent="orange"
        illustration={<MisconceptionVsRealityChart />}
        takeaway="No tactic can guarantee a page-1 spot. Sustainable visibility comes from compounding relevance, engagement, and reliability over time."
        action="Write down one ranking 'shortcut' you've heard about. Replace it with the ethical practice from the chart and commit to it for 30 days."
      >
        <SubHeading>Why service quality drives long-term ranking</SubHeading>
        <Prose>
          Fiverr's system favors sellers who create satisfied repeat buyers, because
          that reduces refunds and complaints on the platform. Fast, honest
          communication and consistent delivery quality are ranking inputs, not just
          "nice to have."
        </Prose>
        <SubHeading>Misconceptions worth unlearning</SubHeading>
        <BulletList
          accent="orange"
          items={[
            <><strong className="text-white">"Stuff keywords everywhere"</strong> — over-repetition looks spammy to buyers and doesn't reflect real relevance.</>,
            <><strong className="text-white">"Stay online 24/7"</strong> — what matters is fast, quality responses, not literal online status.</>,
            <><strong className="text-white">"Buy reviews or clicks"</strong> — this violates Fiverr's terms and creates fragile, short-lived results.</>,
            <><strong className="text-white">"Ranking is permanent"</strong> — visibility is re-evaluated continuously based on recent performance.</>,
          ]}
        />
      </PageShell>
    </>
  );
}
