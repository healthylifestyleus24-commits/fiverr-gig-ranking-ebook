import PageShell, { BulletList, MiniStat, Prose, SubHeading } from "../components/PageShell";
import { AnalyticsDashboard, FunnelBottleneckDiagram } from "../components/Illustrations";

export default function Chapter7() {
  return (
    <>
      <PageShell
        id="page-22"
        pageNumber={22}
        chapterLabel="Chapter 07 · Performance & Analytics"
        title="Understanding Impressions, Clicks, CTR & Conversion"
        accent="red"
        illustration={<AnalyticsDashboard />}
        takeaway="Every metric answers a different question — read them together, not in isolation, to understand your gig's real health."
        action="Check your gig analytics weekly at the same time and log impressions, clicks, CTR and orders in a simple spreadsheet."
      >
        <Prose>
          Fiverr's analytics tab gives you a direct window into how your gig performs
          at each stage of the buyer journey. Learning to read it correctly is one of
          the highest-leverage skills for sustainable growth.
        </Prose>
        <SubHeading>Core metrics explained</SubHeading>
        <BulletList
          items={[
            <><strong className="text-white">Impressions</strong> — how often your gig appears in search results.</>,
            <><strong className="text-white">Clicks &amp; CTR</strong> — how compelling your title and thumbnail are.</>,
            <><strong className="text-white">Inquiries &amp; orders</strong> — how persuasive your gig page is.</>,
            <><strong className="text-white">Conversion rate</strong> — orders divided by clicks or views.</>,
          ]}
        />
        <div className="mt-2 grid grid-cols-3 gap-2">
          <MiniStat label="Impressions" value="12.4K" accent="violet" />
          <MiniStat label="CTR" value="5.0%" accent="red" />
          <MiniStat label="Conversion" value="6.1%" accent="orange" />
        </div>
      </PageShell>

      <PageShell
        id="page-23"
        pageNumber={23}
        chapterLabel="Chapter 07 · Performance & Analytics"
        title="Finding Bottlenecks & Diagnosing Slow Growth"
        accent="violet"
        illustration={<FunnelBottleneckDiagram />}
        reverse
        takeaway="Growth problems are almost always isolated to one funnel stage — find it before changing anything else."
        action="Identify your weakest funnel stage this month and choose one focused change to test against it."
      >
        <SubHeading>Diagnosing common problems</SubHeading>
        <BulletList
          accent="violet"
          items={[
            <><strong className="text-white">Low impressions</strong> → relevance issue: revisit title, category and tags.</>,
            <><strong className="text-white">Low CTR</strong> → thumbnail or title isn't compelling enough for the audience seeing it.</>,
            <><strong className="text-white">Low conversion</strong> → description, pricing or trust signals need work.</>,
            <><strong className="text-white">High cancellations</strong> → expectations or scope aren't being set clearly enough.</>,
          ]}
        />
        <Prose>
          Use this data to make decisions, not guesses — small, targeted changes based
          on real numbers consistently outperform broad, random edits.
        </Prose>
      </PageShell>
    </>
  );
}
