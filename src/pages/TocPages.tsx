import { PageBg, PageFooter } from "../components/PageShell";
import { StatsStripIllustration, TocIllustration } from "../components/Illustrations";
import { tocItems } from "../data/toc";

export default function TocPages() {
  return (
    <>
      <section id="page-2" className="ebook-page grain flex flex-col">
        <PageBg />
        <div className="relative z-10 flex flex-1 flex-col gap-6 px-6 pt-8 sm:px-10 sm:pt-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#ff8ba0]">Contents</p>
            <h2 className="font-display mt-1 text-2xl font-bold text-white sm:text-4xl">Table of Contents</h2>
            <p className="mt-2 max-w-lg text-sm text-white/55">
              Ten chapters. One connected system. Every chapter builds on the last —
              from understanding search, to ranking, to converting clicks into orders.
            </p>
          </div>

          <div className="w-40 sm:w-56">
            <TocIllustration />
          </div>

          <div className="grid gap-2.5">
            {tocItems.slice(0, 5).map((item) => (
              <TocRow key={item.chapter} item={item} />
            ))}
          </div>
        </div>
        <PageFooter pageNumber={2} />
      </section>

      <section id="page-3" className="ebook-page grain flex flex-col">
        <PageBg />
        <div className="relative z-10 flex flex-1 flex-col gap-6 px-6 pt-8 sm:px-10 sm:pt-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#b58bff]">Contents · Continued</p>
            <h2 className="font-display mt-1 text-2xl font-bold text-white sm:text-3xl">Chapters 06&ndash;10 &amp; Bonus</h2>
          </div>

          <div className="grid gap-2.5">
            {tocItems.slice(5, 10).map((item) => (
              <TocRow key={item.chapter} item={item} />
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ffb27a]">Bonus Inside</p>
            <StatsStripIllustration />
          </div>

          <div className="mt-auto rounded-xl border border-dashed border-white/15 bg-black/20 p-4 text-[12px] leading-relaxed text-white/60">
            <span className="font-semibold text-white/80">How to use this ebook: </span>
            Read each chapter in order the first time. Then use it as a reference —
            jump directly to any page while auditing or updating your gig.
          </div>
        </div>
        <PageFooter pageNumber={3} />
      </section>
    </>
  );
}

function TocRow({ item }: { item: (typeof tocItems)[number] }) {
  return (
    <a
      href={`#page-${item.page}`}
      className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:border-[#ff3d5a]/40 hover:bg-white/[0.06] sm:p-4"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff3d5a] to-[#8b5cf6] text-xs font-bold text-white sm:h-12 sm:w-12 sm:text-sm">
        {String(item.page).padStart(2, "0")}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/40">{item.chapter}</p>
        <p className="truncate text-[13px] font-semibold text-white sm:text-sm">{item.title}</p>
        <p className="truncate text-[11px] text-white/45">{item.topics.join(" · ")}</p>
      </div>
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-white/30 transition group-hover:text-[#ff9d5c]" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
