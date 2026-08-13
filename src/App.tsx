import { useEffect, useState } from "react";
import CoverPage from "./pages/CoverPage";
import TocPages from "./pages/TocPages";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
import Chapter3 from "./pages/Chapter3";
import Chapter4 from "./pages/Chapter4";
import Chapter5 from "./pages/Chapter5";
import Chapter6 from "./pages/Chapter6";
import Chapter7 from "./pages/Chapter7";
import Chapter8 from "./pages/Chapter8";
import Chapter9 from "./pages/Chapter9";
import Chapter10 from "./pages/Chapter10";
import { tocItems } from "./data/toc";
import { AUTHOR, TOTAL_PAGES } from "./components/PageShell";

export default function App() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 900);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050409]">
      <Toolbar />

      <main className="ebook-shell mx-auto flex max-w-4xl flex-col gap-8 px-3 py-8 sm:gap-10 sm:px-6 sm:py-12">
        <CoverPage />
        <TocPages />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <Chapter5 />
        <Chapter6 />
        <Chapter7 />
        <Chapter8 />
        <Chapter9 />
        <Chapter10 />
      </main>

      <footer className="no-print mx-auto max-w-4xl px-6 pb-16 pt-4 text-center text-[11px] text-white/30">
        © {new Date().getFullYear()} {AUTHOR} · How to Rank Your Fiverr Gig on the 1st Page &amp; Get More Orders
      </footer>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="no-print fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white shadow-lg backdrop-blur transition hover:border-[#ff3d5a]/50 sm:bottom-8 sm:right-8"
          aria-label="Back to top"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}

function Toolbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-white/10 bg-[#050409]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#ff3d5a] to-[#8b5cf6] text-[11px] font-extrabold text-white">
            SA
          </div>
          <div className="leading-tight">
            <p className="text-[12px] font-bold text-white sm:text-sm">Fiverr Page-1 Playbook</p>
            <p className="hidden text-[10px] text-white/40 sm:block">{TOTAL_PAGES} pages · by {AUTHOR}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-[11px] font-semibold text-white/80 transition hover:bg-white/10 sm:text-xs"
            >
              Contents
              <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-white/10 bg-[#0d0c14] p-2 shadow-2xl">
                <a
                  href="#page-1"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[12px] text-white/70 hover:bg-white/5 hover:text-white"
                >
                  Cover
                </a>
                <a
                  href="#page-2"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-[12px] text-white/70 hover:bg-white/5 hover:text-white"
                >
                  Table of Contents
                </a>
                <div className="my-1 h-px bg-white/10" />
                {tocItems.map((item) => (
                  <a
                    key={item.chapter}
                    href={`#page-${item.page}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-lg px-3 py-2 text-[12px] text-white/70 hover:bg-white/5 hover:text-white"
                  >
                    <span className="truncate">{item.title}</span>
                    <span className="ml-2 shrink-0 text-white/35">p{item.page}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#ff3d5a] to-[#8b5cf6] px-3 py-2 text-[11px] font-semibold text-white shadow-lg shadow-[#ff3d5a]/20 transition hover:opacity-90 sm:text-xs"
          >
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Save as PDF
          </button>
        </div>
      </div>
    </header>
  );
}
