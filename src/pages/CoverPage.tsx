import { CoverIllustration } from "../components/Illustrations";
import { AUTHOR } from "../components/PageShell";

export default function CoverPage() {
  return (
    <section id="page-1" className="ebook-page grain flex flex-col items-center justify-between overflow-hidden bg-[#07060c] px-6 py-10 sm:px-12 sm:py-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#8b5cf6] opacity-20 blur-[110px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#ff3d5a] opacity-20 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#fb923c] opacity-[0.15] blur-[100px]" />
      </div>

      <div className="relative z-10 flex w-full items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/50 sm:text-xs">
        <span>Premium Digital Marketing Ebook</span>
        <span>2026 Edition</span>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <CoverIllustration />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ffb27a] backdrop-blur">
          Fiverr Growth &amp; SEO Playbook
        </div>
        <h1 className="font-display text-3xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          HOW TO RANK YOUR{" "}
          <span className="text-gradient-brand">FIVERR GIG</span>
          <br />
          ON THE 1ST PAGE
          <br />
          <span className="text-gradient-brand">&amp; GET MORE ORDERS</span>
        </h1>
        <p className="max-w-md text-sm text-white/60 sm:text-base">
          A practical, ethical, step-by-step system to increase visibility, clicks and
          conversions for your Fiverr gig — without shortcuts or empty promises.
        </p>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-3">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">
          By {AUTHOR}
        </p>
        <p className="text-[11px] text-white/40">Fiverr Gig Ranking Mastery · 30 Pages · 10 Chapters</p>
      </div>
    </section>
  );
}
