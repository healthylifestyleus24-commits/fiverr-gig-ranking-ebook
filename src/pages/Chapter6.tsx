import PageShell, { BulletList, Prose, SubHeading } from "../components/PageShell";
import { CommunicationTimeline, ReviewsEthicsBalance, TrustShieldDiagram } from "../components/Illustrations";

export default function Chapter6() {
  return (
    <>
      <PageShell
        id="page-19"
        pageNumber={19}
        chapterLabel="Chapter 06 · Reviews, Trust & Buyer Experience"
        title="Building Buyer Confidence Through Delivery"
        accent="red"
        illustration={<TrustShieldDiagram />}
        takeaway="Trust is built delivery by delivery — it's the most durable ranking and conversion advantage you can create."
        action="Create a simple delivery checklist so every order meets the same quality bar, regardless of how busy you are."
      >
        <Prose>
          Buyer trust compounds. Every on-time, high-quality delivery makes the next
          sale easier — through reviews, repeat orders, and referrals that no amount of
          keyword optimization can replace.
        </Prose>
        <SubHeading>Core trust builders</SubHeading>
        <BulletList
          items={[
            "Deliver on or before the promised deadline",
            "Match the quality shown in your samples and gallery",
            "Confirm requirements clearly before starting work",
            "Follow up after delivery to confirm satisfaction",
          ]}
        />
      </PageShell>

      <PageShell
        id="page-20"
        pageNumber={20}
        chapterLabel="Chapter 06 · Reviews, Trust & Buyer Experience"
        title="Communication Strategy & Managing Expectations"
        accent="violet"
        illustration={<CommunicationTimeline />}
        reverse
        takeaway="Most cancellations and low ratings come from unclear expectations, not poor skill — communicate early and often."
        action="Draft 3 reusable message templates: inquiry reply, order confirmation, and delivery note."
      >
        <SubHeading>A simple communication rhythm</SubHeading>
        <BulletList
          accent="violet"
          items={[
            "Reply to inquiries quickly with a helpful, specific answer",
            "Confirm scope, timeline and deliverables at order start",
            "Send a brief progress update on longer projects",
            "Explain deliverables clearly at handoff, with next steps",
          ]}
        />
        <Prose>
          Setting realistic expectations up front — about timelines, revisions, and
          scope — prevents the misunderstandings that lead to disappointed buyers.
        </Prose>
      </PageShell>

      <PageShell
        id="page-21"
        pageNumber={21}
        chapterLabel="Chapter 06 · Reviews, Trust & Buyer Experience"
        title="Earning Reviews & Repeat Customers Ethically"
        accent="orange"
        illustration={<ReviewsEthicsBalance />}
        takeaway="Genuine reviews and repeat buyers are slower to build but far more valuable — and far safer — than shortcuts."
        action="After your next 3 deliveries, politely ask satisfied buyers if they'd be willing to share feedback on their experience."
      >
        <SubHeading>Encouraging legitimate feedback</SubHeading>
        <BulletList
          accent="orange"
          items={[
            "Deliver genuine value before ever mentioning reviews",
            "Ask politely, once, without pressuring or incentivizing buyers",
            "Make it easy: summarize what was delivered in your final message",
          ]}
        />
        <SubHeading>Avoid unethical tactics</SubHeading>
        <Prose>
          Buying reviews, using fake accounts, or offering discounts explicitly for
          reviews violates Fiverr's policies and can suspend your account — jeopardizing
          everything you've built. Sustainable growth always outperforms shortcuts.
        </Prose>
      </PageShell>
    </>
  );
}
