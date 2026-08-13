import PageShell, { BulletList, Prose, SubHeading } from "../components/PageShell";
import { ABTestSplit, OptimizationLoop } from "../components/Illustrations";

export default function Chapter9() {
  return (
    <>
      <PageShell
        id="page-26"
        pageNumber={26}
        chapterLabel="Chapter 09 · Optimization & Testing"
        title="A/B-Style Testing for Titles, Thumbnails & Descriptions"
        accent="red"
        illustration={<ABTestSplit />}
        takeaway="Fiverr doesn't offer native A/B testing tools — so structured, one-change-at-a-time testing is how you create your own."
        action="Choose one element (title or thumbnail) and commit to testing it for at least 2–3 weeks before judging results."
      >
        <Prose>
          Since gigs can't be split-tested simultaneously, apply a "sequential testing"
          approach: change one variable, give it enough time and impressions to gather
          data, then compare against your previous baseline.
        </Prose>
        <SubHeading>What's worth testing</SubHeading>
        <BulletList
          items={[
            "Title phrasing and keyword order",
            "Thumbnail design, color contrast and text overlay",
            "Opening lines of your gig description",
            "Package structure, pricing and included revisions",
          ]}
        />
      </PageShell>

      <PageShell
        id="page-27"
        pageNumber={27}
        chapterLabel="Chapter 09 · Optimization & Testing"
        title="Building a Continuous Optimization System"
        accent="violet"
        illustration={<OptimizationLoop />}
        reverse
        takeaway="Optimization is a disciplined loop, not a one-time fix or a constant stream of random tweaks."
        action="Set a recurring monthly reminder: analyze data, form one hypothesis, make one change, then measure before your next edit."
      >
        <SubHeading>The optimization loop</SubHeading>
        <BulletList
          accent="violet"
          items={[
            "Analyze current performance data honestly",
            "Form a specific hypothesis for one likely improvement",
            "Change exactly one element and document what changed",
            "Measure results over a fair, consistent time window",
            "Decide: keep, revert, or iterate further",
          ]}
        />
        <Prose>
          Avoid the trap of constant, unstructured edits — frequent unrelated changes
          make it impossible to know what actually improved performance.
        </Prose>
      </PageShell>
    </>
  );
}
