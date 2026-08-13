import PageShell, { BulletList, Prose, SubHeading } from "../components/PageShell";
import { GigTitleAnatomy, ThumbnailShowcase, VisualHierarchyDiagram } from "../components/Illustrations";

export default function Chapter4() {
  return (
    <>
      <PageShell
        id="page-13"
        pageNumber={13}
        chapterLabel="Chapter 04 · Build a High-CTR Fiverr Gig"
        title="Writing a Gig Title That Earns the Click"
        accent="red"
        illustration={<GigTitleAnatomy />}
        takeaway="A high-CTR title is specific, benefit-driven, and instantly answers: is this gig for someone like me?"
        action="Rewrite your title using the Service + Specialty + Deliverable + Qualifier structure, then read it aloud as a buyer would."
      >
        <Prose>
          Your title is the first — and sometimes only — chance to earn a click from the
          search results page. It needs to combine your primary keyword with a clear,
          specific benefit.
        </Prose>
        <SubHeading>What makes titles convert</SubHeading>
        <BulletList
          items={[
            "Leads with the core service buyers are searching for",
            "Adds a specific angle (style, platform, or outcome)",
            "Avoids vague buzzwords like 'best' or 'professional' with no proof",
            "Stays readable — not a stuffed list of every keyword you can think of",
          ]}
        />
        <Prose>
          Example: "I will design a minimalist logo for your startup brand" beats
          "I will do professional logo design" because it's specific and benefit-led.
        </Prose>
      </PageShell>

      <PageShell
        id="page-14"
        pageNumber={14}
        chapterLabel="Chapter 04 · Build a High-CTR Fiverr Gig"
        title="Creating an Attention-Grabbing Gig Thumbnail"
        accent="violet"
        illustration={<ThumbnailShowcase />}
        reverse
        takeaway="Thumbnails compete in a visually noisy feed — bold subject, strong contrast, and short readable text win the scroll."
        action="Audit your current thumbnail: can a buyer understand your offer in under 2 seconds at small size?"
      >
        <SubHeading>Principles of a strong thumbnail</SubHeading>
        <BulletList
          accent="violet"
          items={[
            "One clear focal point — not five competing elements",
            "High contrast colors that stand out in a crowded results grid",
            "Minimal, legible text (3–5 words max) reinforcing the benefit",
            "Consistent branding across your gig gallery images",
          ]}
        />
        <Prose>
          Test your thumbnail at actual search-result size, not just full screen —
          details that look great zoomed in often disappear at thumbnail scale.
        </Prose>
      </PageShell>

      <PageShell
        id="page-15"
        pageNumber={15}
        chapterLabel="Chapter 04 · Build a High-CTR Fiverr Gig"
        title="Visual Hierarchy: Aligning Title, Thumbnail & Intent"
        accent="orange"
        illustration={<VisualHierarchyDiagram />}
        takeaway="Every element of your gig — title, thumbnail, gallery, first line — should tell the same consistent story."
        action="Check that your thumbnail's promise, your title's promise, and your first description line all match exactly."
      >
        <SubHeading>Why consistency increases conversion</SubHeading>
        <Prose>
          A mismatch between what a thumbnail implies and what the gig actually delivers
          creates hesitation — and hesitation kills conversion, even after a successful
          click.
        </Prose>
        <SubHeading>Building visual hierarchy</SubHeading>
        <BulletList
          accent="orange"
          items={[
            "Thumbnail sets the first impression and core promise",
            "Title confirms the service and adds a specific benefit",
            "Gallery images provide proof: samples, process, or results",
            "Description expands the promise with detail and reassurance",
          ]}
        />
      </PageShell>
    </>
  );
}
