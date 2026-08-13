import type { ReactNode } from "react";

export const BRAND = "Fiverr Gig Ranking Mastery";
export const AUTHOR = "SM Anik";
export const TOTAL_PAGES = 30;

type Accent = "red" | "violet" | "orange";

const accentMap: Record<Accent, { text: string; bg: string; ring: string; dot: string }> = {
  red: { text: "text-[#ff5470]", bg: "bg-[#ff3d5a]", ring: "ring-[#ff3d5a]/30", dot: "bg-[#ff3d5a]" },
  violet: { text: "text-[#b58bff]", bg: "bg-[#8b5cf6]", ring: "ring-[#8b5cf6]/30", dot: "bg-[#8b5cf6]" },
  orange: { text: "text-[#ffb27a]", bg: "bg-[#fb923c]", ring: "ring-[#fb923c]/30", dot: "bg-[#fb923c]" },
};

export function PageFooter({ pageNumber }: { pageNumber: number }) {
  return (
    <div className="no-print-inherit relative z-10 mt-auto flex items-center justify-between border-t border-white/10 px-6 py-4 sm:px-10">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 sm:text-xs">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#ff3d5a] to-[#8b5cf6]" />
        {AUTHOR} · {BRAND}
      </div>
      <div className="page-number-badge text-[10px] text-white/40 sm:text-xs">
        {String(pageNumber).padStart(2, "0")} / {TOTAL_PAGES}
      </div>
    </div>
  );
}

export function Eyebrow({ label, accent = "red" }: { label: string; accent?: Accent }) {
  const a = accentMap[accent];
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs ${a.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
      {label}
    </div>
  );
}

export function Takeaway({ children, accent = "red" }: { children: ReactNode; accent?: Accent }) {
  const a = accentMap[accent];
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 ring-1 sm:p-5 ${a.ring}`}>
      <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full ${a.bg} opacity-20 blur-2xl`} />
      <div className="relative flex gap-3">
        <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${a.bg}/20 ring-1 ${a.ring}`}>
          <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 ${a.text}`} fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50 sm:text-[11px]">Key Takeaway</p>
          <p className="mt-1 text-[12.5px] leading-relaxed text-white/85 sm:text-sm">{children}</p>
        </div>
      </div>
    </div>
  );
}

export function ActionStep({ children, accent = "violet" }: { children: ReactNode; accent?: Accent }) {
  const a = accentMap[accent];
  return (
    <div className="relative rounded-2xl border border-dashed border-white/15 bg-black/20 p-4 sm:p-5">
      <p className={`mb-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] sm:text-[11px] ${a.text}`}>
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Action Step
      </p>
      <p className="text-[12.5px] leading-relaxed text-white/80 sm:text-sm">{children}</p>
    </div>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-white/90 sm:text-sm">{children}</h3>;
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className="text-[12.5px] leading-relaxed text-white/65 sm:text-sm">{children}</p>;
}

export function BulletList({ items, accent = "red" }: { items: ReactNode[]; accent?: Accent }) {
  const a = accentMap[accent];
  return (
    <ul className="space-y-1.5">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed text-white/70 sm:text-sm">
          <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function MiniStat({ label, value, accent = "red" }: { label: string; value: string; accent?: Accent }) {
  const a = accentMap[accent];
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-center">
      <p className={`text-base font-extrabold font-display ${a.text}`}>{value}</p>
      <p className="text-[9px] uppercase tracking-widest text-white/45">{label}</p>
    </div>
  );
}

export function PageBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#8b5cf6] opacity-[0.12] blur-[90px]" />
      <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-[#ff3d5a] opacity-[0.10] blur-[100px]" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M 34 0 L 0 0 0 34" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

interface PageShellProps {
  id: string;
  pageNumber: number;
  chapterLabel?: string;
  title: string;
  kicker?: string;
  accent?: Accent;
  illustration?: ReactNode;
  takeaway?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  reverse?: boolean;
}

export default function PageShell({
  id,
  pageNumber,
  chapterLabel,
  title,
  kicker,
  accent = "red",
  illustration,
  takeaway,
  action,
  children,
  reverse,
}: PageShellProps) {
  return (
    <section id={id} className="ebook-page grain flex flex-col">
      <PageBg />
      <div className="relative z-10 flex flex-1 flex-col gap-5 px-6 pt-8 sm:px-10 sm:pt-10 lg:gap-6">
        {chapterLabel && <Eyebrow label={chapterLabel} accent={accent} />}
        <div>
          {kicker && <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40">{kicker}</p>}
          <h2 className="font-display text-[22px] font-bold leading-tight text-white sm:text-3xl lg:text-[34px]">
            {title}
          </h2>
        </div>

        <div className={`grid flex-1 grid-cols-1 items-start gap-6 lg:grid-cols-5 lg:gap-8 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="space-y-4 lg:col-span-3">{children}</div>
          {illustration && (
            <div className="flex items-center justify-center lg:col-span-2">
              <div className="w-full max-w-sm">{illustration}</div>
            </div>
          )}
        </div>

        <div className="grid gap-3 pb-2 sm:grid-cols-2">
          {takeaway && <Takeaway accent={accent}>{takeaway}</Takeaway>}
          {action && <ActionStep accent={accent === "red" ? "violet" : "red"}>{action}</ActionStep>}
        </div>
      </div>
      <PageFooter pageNumber={pageNumber} />
    </section>
  );
}
