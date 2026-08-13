import PageShell, { AUTHOR, BulletList, PageBg, PageFooter, Prose, SubHeading, Takeaway } from "../components/PageShell";
import { GrowthRoadmap, Week1Calendar, Weeks234Calendar } from "../components/Illustrations";

export default function Chapter10() {
  return (
    <>
      <PageShell
        id="page-28"
        pageNumber={28}
        chapterLabel="Chapter 10 · The 30-Day Fiverr Page-1 Growth Plan"
        title="Days 1–7: Research, Positioning & Gig Optimization"
        accent="red"
        illustration={<Week1Calendar />}
        takeaway="The first week is foundational — rushing positioning and keyword work makes every later step less effective."
        action="Block time on your calendar for each phase below instead of leaving it as a vague intention."
      >
        <SubHeading>Days 1–3: Research & positioning</SubHeading>
        <BulletList
          items={[
            "Validate demand and competition for your chosen service",
            "Define your ideal buyer and core positioning statement",
            "Study 5–10 top competitor gigs for patterns and gaps",
          ]}
        />
        <SubHeading>Days 4–7: Keyword & gig optimization</SubHeading>
        <BulletList
          items={[
            "Build your keyword map (primary, secondary, long-tail)",
            "Rewrite title, category/tags and opening description lines",
            "Update thumbnail and gallery images for clarity and consistency",
          ]}
        />
      </PageShell>

      <PageShell
        id="page-29"
        pageNumber={29}
        chapterLabel="Chapter 10 · The 30-Day Fiverr Page-1 Growth Plan"
        title="Weeks 2–4: Conversion, Experience & Testing"
        accent="violet"
        illustration={<Weeks234Calendar />}
        reverse
        takeaway="Each week compounds on the last — visuals attract clicks, experience earns trust, and analytics guide what to improve next."
        action="At the end of each week, write 2–3 sentences summarizing what changed and what you'll test next."
      >
        <SubHeading>Week 2: Visual & conversion optimization</SubHeading>
        <BulletList
          accent="violet"
          items={[
            "Refine packages, pricing and FAQ to reduce buyer objections",
            "Strengthen calls to action across your gig page",
          ]}
        />
        <SubHeading>Week 3: Buyer experience & delivery</SubHeading>
        <BulletList
          accent="violet"
          items={[
            "Tighten communication templates and delivery workflow",
            "Focus on flawless delivery for every order this week",
          ]}
        />
        <SubHeading>Week 4: Analytics & testing</SubHeading>
        <BulletList
          accent="violet"
          items={[
            "Review impressions, CTR, conversion and cancellations",
            "Run your first structured, single-variable test",
          ]}
        />
      </PageShell>

      <ClosingPage />
    </>
  );
}

function ClosingPage() {
  return (
    <section id="page-30" className="ebook-page grain flex flex-col">
      <PageBg />
      <div className="relative z-10 flex flex-1 flex-col gap-5 px-6 pt-8 sm:px-10 sm:pt-10">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#ffb27a] sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#fb923c]" />
          Chapter 10 · Long-Term Growth
        </p>
        <h2 className="font-display text-[22px] font-bold leading-tight text-white sm:text-3xl">
          Your Daily/Weekly Checklist & Long-Term Growth Strategy
        </h2>

        <div className="grid flex-1 grid-cols-1 gap-6 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-3">
            <SubHeading>Daily checklist (5–10 minutes)</SubHeading>
            <BulletList
              accent="orange"
              items={[
                "Reply to all inquiries and messages promptly",
                "Check active orders for on-time progress",
                "Note anything buyers ask that you should add to your FAQ",
              ]}
            />
            <SubHeading>Weekly checklist (20–30 minutes)</SubHeading>
            <BulletList
              accent="orange"
              items={[
                "Review impressions, CTR, orders and cancellations",
                "Compare performance against the previous week",
                "Plan and run one small, structured optimization test",
              ]}
            />
            <SubHeading>Long-term growth strategy</SubHeading>
            <Prose>
              Sustainable Fiverr growth comes from compounding small, ethical
              improvements — sharper positioning, clearer messaging, reliable delivery,
              and consistent, honest buyer satisfaction. There is no single switch that
              guarantees page-1 ranking or fixed income; instead, this system steadily
              increases your odds of stronger visibility, more qualified clicks, and
              healthier conversion over time.
            </Prose>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 lg:col-span-2">
            <GrowthRoadmap />
          </div>
        </div>

        <Takeaway accent="orange">
          Consistency compounds. Revisit this ebook monthly, re-run the 30-day plan for
          each new gig, and keep refining based on real data — not guesswork.
        </Takeaway>

        <div className="mt-1 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div>
            <p className="text-sm font-semibold text-white">Thank you for reading.</p>
            <p className="text-[11px] text-white/50">
              Wishing you sustainable, ethical growth on Fiverr — {AUTHOR}
            </p>
          </div>
          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ff3d5a] to-[#8b5cf6] text-xs font-bold text-white sm:flex">
            SA
          </div>
        </div>
      </div>
      <PageFooter pageNumber={30} />
    </section>
  );
}
