import PageShell, { BulletList, Prose, SubHeading } from "../components/PageShell";
import { DescriptionFrameworkDiagram, ObjectionFunnel, PackageTiersChart } from "../components/Illustrations";

export default function Chapter5() {
  return (
    <>
      <PageShell
        id="page-16"
        pageNumber={16}
        chapterLabel="Chapter 05 · Conversion Optimization"
        title="Writing a Persuasive Gig Description"
        accent="red"
        illustration={<DescriptionFrameworkDiagram />}
        takeaway="A description should read like a helpful conversation with the buyer, not a list of features."
        action="Rewrite your opening two lines using a Hook + Problem structure, then read it as if you were the buyer scanning quickly."
      >
        <Prose>
          Buyers skim before they read. Your description needs a structure that keeps
          attention through the first few lines, then builds confidence with detail and
          proof.
        </Prose>
        <SubHeading>The 6-part description framework</SubHeading>
        <BulletList
          items={[
            "Hook — a strong, specific opening line",
            "Problem — the pain point you're solving",
            "Solution — how your service solves it",
            "Process — what working with you looks like",
            "Proof — results, samples, or experience",
            "CTA — a clear next step to message or order",
          ]}
        />
      </PageShell>

      <PageShell
        id="page-17"
        pageNumber={17}
        chapterLabel="Chapter 05 · Conversion Optimization"
        title="Structuring Packages, Pricing, Delivery & FAQs"
        accent="violet"
        illustration={<PackageTiersChart />}
        reverse
        takeaway="Three clear packages reduce decision fatigue and let buyers self-select based on budget and urgency."
        action="Review your 3 packages: does each one offer a clearly different amount of value, not just a different price?"
      >
        <SubHeading>Package structure that works</SubHeading>
        <BulletList
          accent="violet"
          items={[
            "Basic: a genuinely useful entry point, not a bait-and-switch",
            "Standard: your most-recommended, best-value option",
            "Premium: the complete solution for buyers who want more done for them",
          ]}
        />
        <SubHeading>Delivery time, revisions & FAQs</SubHeading>
        <Prose>
          Set delivery times you can consistently beat, not just meet. Offer a
          reasonable number of revisions to reduce buyer anxiety, and use your FAQ
          section to pre-answer the questions that normally arrive in the inbox —
          this reduces friction and speeds up decision-making.
        </Prose>
      </PageShell>

      <PageShell
        id="page-18"
        pageNumber={18}
        chapterLabel="Chapter 05 · Conversion Optimization"
        title="Handling Objections & Turning Clicks Into Orders"
        accent="orange"
        illustration={<ObjectionFunnel />}
        takeaway="Every unaddressed objection is a silent reason buyers leave without ordering — find and answer them proactively."
        action="List the 3 most common doubts buyers might have about your gig, and address each one directly in your FAQ or description."
      >
        <SubHeading>Common buyer objections</SubHeading>
        <BulletList
          accent="orange"
          items={[
            "\u201CWill this actually match my brand or needs?\u201D → show relevant samples",
            "\u201CWhat if I'm not satisfied?\u201D → explain your revision policy clearly",
            "\u201CIs this seller reliable?\u201D → highlight response time and delivery record",
          ]}
        />
        <SubHeading>Strong calls to action</SubHeading>
        <Prose>
          End your description and packages with a clear, low-pressure next step —
          "Message me with your project details" or "Choose the package that fits your
          timeline" — so buyers always know exactly what to do next.
        </Prose>
      </PageShell>
    </>
  );
}
