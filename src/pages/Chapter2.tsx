import PageShell, { BulletList, Prose, SubHeading } from "../components/PageShell";
import { BuyerPersonaCard, CompetitionGauge, NicheFinderMap, PositioningBlueprint } from "../components/Illustrations";

export default function Chapter2() {
  return (
    <>
      <PageShell
        id="page-7"
        pageNumber={7}
        chapterLabel="Chapter 02 · Choose a Searchable, Sellable Gig"
        title="Finding a Profitable, Searchable Fiverr Service"
        accent="red"
        illustration={<NicheFinderMap />}
        takeaway="A great gig sits where genuine buyer demand meets a competition level you can realistically compete in today."
        action="List 5 services you can deliver well. For each, search Fiverr and note roughly how many active sellers and reviews the top results have."
      >
        <Prose>
          Before optimizing anything, confirm that people are actually searching for what
          you plan to sell. A perfectly optimized gig for a service nobody searches for
          will never get meaningful impressions.
        </Prose>
        <SubHeading>How to spot a searchable, sellable service</SubHeading>
        <BulletList
          items={[
            "Search the service on Fiverr and see how many relevant results appear",
            "Check if top gigs have consistent, recent orders and reviews",
            "Look for buyer requests or forum questions mentioning the service",
            "Confirm you can deliver it at a consistent quality level, repeatedly",
          ]}
        />
        <Prose>
          Demand without the ability to deliver quality consistently is just as risky as
          skill without demand — you need both to build a sustainable gig.
        </Prose>
      </PageShell>

      <PageShell
        id="page-8"
        pageNumber={8}
        chapterLabel="Chapter 02 · Choose a Searchable, Sellable Gig"
        title="Understanding Competition & Defining Your Ideal Buyer"
        accent="violet"
        illustration={<CompetitionGauge />}
        reverse
        takeaway="You don't need zero competition — you need a clear reason a specific buyer should pick you over the next ten results."
        action="Write one sentence describing your ideal buyer's goal, budget range, and biggest fear about hiring a freelancer."
      >
        <SubHeading>Reading competition correctly</SubHeading>
        <BulletList
          accent="violet"
          items={[
            "High competition + high demand: possible, but needs sharp positioning",
            "Low competition + real demand: often the best starting point for new sellers",
            "High competition + low demand: usually not worth entering",
          ]}
        />
        <SubHeading>Defining your ideal buyer</SubHeading>
        <Prose>
          New sellers often try to appeal to "everyone." Specific buyer personas convert
          better because your title, images and description can speak directly to their
          exact goal — a startup founder needs different reassurance than an enterprise
          marketing manager.
        </Prose>
        <div className="mt-2">
          <BuyerPersonaCard />
        </div>
      </PageShell>

      <PageShell
        id="page-9"
        pageNumber={9}
        chapterLabel="Chapter 02 · Choose a Searchable, Sellable Gig"
        title="Positioning Your Gig Around a Real Buyer Problem"
        accent="orange"
        illustration={<PositioningBlueprint />}
        takeaway="Strong positioning is a promise: this exact problem, solved this exact way, with this believable outcome."
        action="Rewrite your gig's core promise in one sentence: 'I help [buyer] achieve [outcome] through [your unique approach].'"
      >
        <SubHeading>From generic service to strong offer</SubHeading>
        <Prose>
          Positioning is the bridge between "what you do" and "why a buyer should choose
          you." It should be built on a real, specific problem your ideal buyer already
          has — not a feature list.
        </Prose>
        <SubHeading>Building the offer</SubHeading>
        <BulletList
          accent="orange"
          items={[
            "Identify the painful, recurring problem your service solves",
            "Describe your process in a way that feels lower-risk than competitors",
            "State a clear, honest outcome buyers can expect from working with you",
            "Reflect this positioning consistently in your title, images and description",
          ]}
        />
      </PageShell>
    </>
  );
}
