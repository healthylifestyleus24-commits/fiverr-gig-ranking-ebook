import PageShell, { BulletList, Prose, SubHeading } from "../components/PageShell";
import { IntentMap, KeywordFunnel, KeywordMapGrid } from "../components/Illustrations";

export default function Chapter3() {
  return (
    <>
      <PageShell
        id="page-10"
        pageNumber={10}
        chapterLabel="Chapter 03 · Keyword Research & Search Intent"
        title="A Simple Fiverr Keyword Research Method"
        accent="red"
        illustration={<KeywordFunnel />}
        takeaway="Good keyword research isn't about volume of words — it's about finding the exact phrases real buyers already use."
        action="Type your core service into Fiverr's search bar and record every autosuggest phrase that appears."
      >
        <Prose>
          Keyword research on Fiverr starts with listening to buyers, not guessing.
          Fiverr's own search bar, category filters, and top-ranking gig titles all
          reveal the language buyers actually search with.
        </Prose>
        <SubHeading>A repeatable research process</SubHeading>
        <BulletList
          items={[
            "Start with one broad 'seed' term describing your service",
            "Use Fiverr's autosuggest to collect related buyer phrases",
            "Review top 10–15 gigs in your category for repeated title language",
            "Group findings into primary, secondary and long-tail keywords",
          ]}
        />
        <Prose>
          <strong className="text-white">Primary keywords</strong> describe your core
          service (e.g., "logo design"). <strong className="text-white">Secondary keywords</strong> add
          specificity (e.g., "minimalist logo design").
        </Prose>
      </PageShell>

      <PageShell
        id="page-11"
        pageNumber={11}
        chapterLabel="Chapter 03 · Keyword Research & Search Intent"
        title="Long-Tail Keywords, Buyer Intent & Competitor Research"
        accent="violet"
        illustration={<IntentMap />}
        reverse
        takeaway="Long-tail, intent-matched keywords usually bring fewer but far more qualified, ready-to-buy searchers."
        action="Find 3 long-tail phrases with clear buying intent and check whether your gig currently addresses them."
      >
        <SubHeading>Why long-tail keywords matter</SubHeading>
        <Prose>
          Phrases like "minimalist logo design for SaaS startup" attract smaller but
          highly qualified audiences — buyers who already know what they want and are
          closer to ordering.
        </Prose>
        <SubHeading>Matching search intent</SubHeading>
        <BulletList
          accent="violet"
          items={[
            "Informational: still researching, not ready to buy yet",
            "Comparison: evaluating multiple sellers or options",
            "Transactional: ready to hire — your highest-priority intent to target",
          ]}
        />
        <SubHeading>Quick competitor research</SubHeading>
        <Prose>
          Study the titles, tags, and FAQs of top-performing competitor gigs — not to
          copy them, but to understand which keywords and promises already resonate
          with buyers in your niche.
        </Prose>
      </PageShell>

      <PageShell
        id="page-12"
        pageNumber={12}
        chapterLabel="Chapter 03 · Keyword Research & Search Intent"
        title="Building a Keyword Map (Without Keyword Stuffing)"
        accent="orange"
        illustration={<KeywordMapGrid />}
        takeaway="Every keyword should earn its place by matching a real buyer phrase — used naturally, in context, not repeated mechanically."
        action="Assign your top keyword map to specific gig zones: title, category/tags, first two lines, and FAQ section."
      >
        <SubHeading>Creating your keyword map</SubHeading>
        <BulletList
          accent="orange"
          items={[
            "Pick 1 primary keyword for your gig title",
            "Choose 2–3 secondary keywords for tags and subheadings",
            "Reserve 2–4 long-tail keywords for description and FAQ content",
          ]}
        />
        <SubHeading>Using keywords naturally</SubHeading>
        <Prose>
          Write for the buyer first, then check that your priority keywords appear
          naturally in the title, opening lines, and section headers. If a sentence
          sounds robotic or repetitive, rewrite it — search engines and Fiverr both
          favor language real humans would actually read and trust.
        </Prose>
      </PageShell>
    </>
  );
}
