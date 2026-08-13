export interface TocItem {
  chapter: string;
  title: string;
  page: number;
  topics: string[];
}

export const tocItems: TocItem[] = [
  {
    chapter: "Chapter 01",
    title: "How Fiverr Search Really Works",
    page: 4,
    topics: ["Search & recommendation basics", "Relevance & buyer intent", "Common ranking misconceptions"],
  },
  {
    chapter: "Chapter 02",
    title: "Choose a Searchable, Sellable Gig",
    page: 7,
    topics: ["Finding profitable services", "Competition & ideal buyer", "Offer positioning"],
  },
  {
    chapter: "Chapter 03",
    title: "Keyword Research & Search Intent",
    page: 10,
    topics: ["Keyword methodology", "Long-tail & intent", "Building a keyword map"],
  },
  {
    chapter: "Chapter 04",
    title: "Build a High-CTR Fiverr Gig",
    page: 13,
    topics: ["Compelling titles", "Thumbnails that get clicks", "Visual hierarchy"],
  },
  {
    chapter: "Chapter 05",
    title: "Conversion Optimization",
    page: 16,
    topics: ["Persuasive descriptions", "Packages & pricing", "Objections & CTAs"],
  },
  {
    chapter: "Chapter 06",
    title: "Reviews, Trust & Buyer Experience",
    page: 19,
    topics: ["Building confidence", "Communication strategy", "Ethical review growth"],
  },
  {
    chapter: "Chapter 07",
    title: "Performance & Analytics",
    page: 22,
    topics: ["Impressions, CTR, conversion", "Finding bottlenecks", "Data-driven decisions"],
  },
  {
    chapter: "Chapter 08",
    title: "Competitive Positioning",
    page: 24,
    topics: ["Competitor analysis", "Market gaps", "Unique value proposition"],
  },
  {
    chapter: "Chapter 09",
    title: "Optimization & Testing",
    page: 26,
    topics: ["A/B-style testing", "Package & pricing tests", "Continuous optimization system"],
  },
  {
    chapter: "Chapter 10",
    title: "The 30-Day Fiverr Page-1 Growth Plan",
    page: 28,
    topics: ["Week-by-week roadmap", "Daily/weekly checklist", "Long-term growth strategy"],
  },
];
