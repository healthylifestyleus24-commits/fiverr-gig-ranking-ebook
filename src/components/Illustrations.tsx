import { useId, type ReactNode } from "react";

/* ---------- shared helpers ---------- */

function Frame({
  children,
  h = 260,
  className = "",
}: {
  children: ReactNode;
  h?: number;
  className?: string;
}) {
  return (
    <svg viewBox={`0 0 340 ${h}`} className={`w-full drop-shadow-[0_10px_40px_rgba(139,92,246,0.15)] ${className}`}>
      {children}
    </svg>
  );
}

function CardBg({ id, h = 260 }: { id: string; h?: number }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#171523" />
          <stop offset="100%" stopColor="#0d0c14" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="340" height={h} rx="18" fill={`url(#${id}-bg)`} stroke="#ffffff14" />
    </>
  );
}

function useGradIds(names: string[]) {
  const id = useId();
  return names.reduce<Record<string, string>>((acc, n) => {
    acc[n] = `${id}-${n}`;
    return acc;
  }, {});
}

/* ---------- COVER ---------- */

export function CoverIllustration() {
  const g = useGradIds(["ring", "bar", "glow", "card"]);
  return (
    <svg viewBox="0 0 700 620" className="w-full">
      <defs>
        <radialGradient id={g.glow} cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ff3d5a" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff3d5a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={g.ring} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff5470" />
          <stop offset="50%" stopColor="#b968ff" />
          <stop offset="100%" stopColor="#ff9d5c" />
        </linearGradient>
        <linearGradient id={g.card} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c1a29" />
          <stop offset="100%" stopColor="#100f18" />
        </linearGradient>
      </defs>
      <circle cx="350" cy="230" r="260" fill={`url(#${g.glow})`} />
      {/* orbit rings */}
      <circle cx="350" cy="260" r="220" fill="none" stroke={`url(#${g.ring})`} strokeOpacity="0.25" strokeWidth="1.5" />
      <circle cx="350" cy="260" r="170" fill="none" stroke={`url(#${g.ring})`} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="4 8" />

      {/* floating keyword chips */}
      {[
        { x: 70, y: 120, w: 118, t: "SEO Keywords" },
        { x: 500, y: 90, w: 130, t: "Buyer Intent" },
        { x: 60, y: 420, w: 108, t: "Click-Through" },
        { x: 520, y: 440, w: 120, t: "5-Star Reviews" },
      ].map((c, i) => (
        <g key={i}>
          <rect x={c.x} y={c.y} width={c.w} height="34" rx="17" fill="#ffffff10" stroke="#ffffff22" />
          <text x={c.x + c.w / 2} y={c.y + 22} textAnchor="middle" fontSize="13" fill="#e9e6ff" fontFamily="Sora, sans-serif">
            {c.t}
          </text>
        </g>
      ))}

      {/* upward arrow path from bottom gig card to page-1 badge */}
      <path d="M175 480 C 230 380, 260 300, 350 210" stroke={`url(#${g.ring})`} strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="2 14" />
      <path d="M330 225 L353 205 L365 232" stroke={`url(#${g.ring})`} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* gig card bottom */}
      <g>
        <rect x="95" y="470" width="180" height="110" rx="14" fill={`url(#${g.card})`} stroke="#ffffff1f" />
        <rect x="112" y="486" width="60" height="44" rx="8" fill="#2a2740" />
        <path d="M126 508 l8 8 16 -20" stroke="#ff5470" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="182" y="490" width="76" height="8" rx="4" fill="#ffffff2e" />
        <rect x="182" y="504" width="56" height="7" rx="3.5" fill="#ffffff1c" />
        <rect x="112" y="540" width="146" height="7" rx="3.5" fill="#ffffff1c" />
        <rect x="112" y="555" width="90" height="7" rx="3.5" fill="#ffffff1c" />
      </g>

      {/* page-1 badge top */}
      <g>
        <circle cx="350" cy="190" r="66" fill={`url(#${g.card})`} stroke={`url(#${g.ring})`} strokeWidth="3" />
        <text x="350" y="180" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="Sora, sans-serif">
          1ST
        </text>
        <text x="350" y="203" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffd9a8" fontFamily="Sora, sans-serif">
          PAGE
        </text>
      </g>

      {/* analytics bars right */}
      <g transform="translate(560,300)">
        <rect x="0" y="40" width="14" height="70" rx="4" fill="#ff3d5a" opacity="0.8" />
        <rect x="22" y="20" width="14" height="90" rx="4" fill="#8b5cf6" opacity="0.85" />
        <rect x="44" y="0" width="14" height="110" rx="4" fill="#fb923c" opacity="0.9" />
      </g>
    </svg>
  );
}

/* ---------- TOC ---------- */

export function TocIllustration() {
  const g = useGradIds(["line"]);
  return (
    <Frame h={200}>
      <CardBg id={g.line} h={200} />
      <defs>
        <linearGradient id={g.line} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff3d5a" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <path d="M20 160 Q 90 40, 170 100 T 320 40" stroke={`url(#${g.line})`} strokeWidth="4" fill="none" strokeLinecap="round" />
      {[
        [20, 160],
        [90, 90],
        [170, 100],
        [245, 60],
        [320, 40],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="6" fill="#0d0c14" stroke="#ff9d5c" strokeWidth="3" />
      ))}
      <text x="20" y="190" fontSize="12" fill="#ffffff88" fontFamily="Manrope, sans-serif">
        10 Chapters
      </text>
      <text x="230" y="190" fontSize="12" fill="#ffffff88" fontFamily="Manrope, sans-serif">
        30 Action Pages
      </text>
    </Frame>
  );
}

export function StatsStripIllustration() {
  const stats = [
    { label: "Chapters", value: "10" },
    { label: "Pages", value: "30" },
    { label: "Checklists", value: "12+" },
    { label: "Day Plan", value: "30" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((s, i) => (
        <div key={i} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
          <p className="text-2xl font-extrabold text-gradient-brand font-display">{s.value}</p>
          <p className="mt-1 text-[10px] uppercase tracking-widest text-white/50">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------- CH1 ---------- */

export function SearchAlgorithmDiagram() {
  const g = useGradIds(["bg", "pulse"]);
  return (
    <Frame>
      <CardBg id={g.bg} />
      <circle cx="170" cy="120" r="46" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.5" />
      <circle cx="170" cy="120" r="30" fill="#8b5cf633" stroke="#b58bff" strokeWidth="2" />
      <text x="170" y="115" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="Sora">Fiverr</text>
      <text x="170" y="130" textAnchor="middle" fontSize="11" fill="#fff" fontFamily="Sora">Engine</text>
      {[
        { x: 60, y: 40, t: "Buyer Query" },
        { x: 280, y: 40, t: "Relevance" },
        { x: 60, y: 200, t: "Engagement" },
        { x: 280, y: 200, t: "Reliability" },
      ].map((n, i) => (
        <g key={i}>
          <line x1={170} y1={120} x2={n.x} y2={n.y} stroke="#ff3d5a" strokeOpacity="0.5" strokeWidth="1.5" />
          <rect x={n.x - 46} y={n.y - 16} width="92" height="30" rx="8" fill="#ffffff0d" stroke="#ffffff22" />
          <text x={n.x} y={n.y + 3} textAnchor="middle" fontSize="10.5" fill="#f0eefc" fontFamily="Manrope">{n.t}</text>
        </g>
      ))}
    </Frame>
  );
}

export function RelevanceRadar() {
  const g = useGradIds(["bg", "fill"]);
  const points = [
    [170, 30], [255, 80], [255, 165], [170, 215], [85, 165], [85, 80],
  ];
  const dataPts = [
    [170, 55], [225, 90], [220, 150], [170, 190], [115, 145], [120, 95],
  ];
  const poly = (pts: number[][]) => pts.map((p) => p.join(",")).join(" ");
  return (
    <Frame>
      <CardBg id={g.bg} />
      <defs>
        <linearGradient id={g.fill} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff3d5a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <polygon points={poly(points)} fill="none" stroke="#ffffff33" strokeWidth="1.5" />
      <polygon points={poly(dataPts)} fill={`url(#${g.fill})`} stroke="#ff9d5c" strokeWidth="2" />
      {["Title Match", "CTR", "Ratings", "On-time", "Response", "Sales Vol."].map((t, i) => (
        <text key={i} x={points[i][0]} y={points[i][1] + (points[i][1] < 120 ? -8 : 18)} textAnchor="middle" fontSize="9.5" fill="#e9e6ff" fontFamily="Manrope">
          {t}
        </text>
      ))}
    </Frame>
  );
}

export function MisconceptionVsRealityChart() {
  const g = useGradIds(["bg"]);
  const rows = [
    { myth: "Keywords 50x", real: "Natural relevance" },
    { myth: "Online 24/7", real: "Fast, honest replies" },
    { myth: "Buy reviews", real: "Earned trust" },
  ];
  return (
    <Frame h={230}>
      <CardBg id={g.bg} h={230} />
      <text x="70" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="#ff8ba0" fontFamily="Sora">MYTH</text>
      <text x="270" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fill="#8be0b0" fontFamily="Sora">REALITY</text>
      <line x1="170" y1="15" x2="170" y2="215" stroke="#ffffff22" />
      {rows.map((r, i) => (
        <g key={i} transform={`translate(0, ${50 + i * 55})`}>
          <rect x="20" y="0" width="100" height="38" rx="8" fill="#ff3d5a1a" stroke="#ff3d5a44" />
          <text x="70" y="24" textAnchor="middle" fontSize="9.5" fill="#ffd6dc" fontFamily="Manrope">{r.myth}</text>
          <rect x="220" y="0" width="100" height="38" rx="8" fill="#22c55e1a" stroke="#22c55e44" />
          <text x="270" y="24" textAnchor="middle" fontSize="9.5" fill="#c9f5d9" fontFamily="Manrope">{r.real}</text>
          <path d="M124 19 h90" stroke="#ffffff33" strokeDasharray="2 4" />
        </g>
      ))}
    </Frame>
  );
}

/* ---------- CH2 ---------- */

export function NicheFinderMap() {
  const g = useGradIds(["bg"]);
  const bubbles = [
    { x: 90, y: 80, r: 34, t: "Logo Design", c: "#ff3d5a" },
    { x: 210, y: 60, r: 22, t: "Voice Over", c: "#8b5cf6" },
    { x: 250, y: 150, r: 40, t: "SEO Writing", c: "#fb923c" },
    { x: 110, y: 180, r: 26, t: "Shopify", c: "#8b5cf6" },
  ];
  return (
    <Frame>
      <CardBg id={g.bg} />
      {bubbles.map((b, i) => (
        <g key={i}>
          <circle cx={b.x} cy={b.y} r={b.r} fill={`${b.c}2e`} stroke={b.c} strokeWidth="1.5" />
          <text x={b.x} y={b.y + 4} textAnchor="middle" fontSize="9.5" fill="#fff" fontFamily="Manrope">{b.t}</text>
        </g>
      ))}
      <text x="170" y="235" textAnchor="middle" fontSize="10" fill="#ffffff70" fontFamily="Manrope">Bubble size = demand vs. competition</text>
    </Frame>
  );
}

export function CompetitionGauge() {
  const g = useGradIds(["bg", "arc"]);
  return (
    <Frame>
      <CardBg id={g.bg} />
      <defs>
        <linearGradient id={g.arc} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#ff3d5a" />
        </linearGradient>
      </defs>
      <path d="M 60 170 A 110 110 0 0 1 280 170" fill="none" stroke="#ffffff22" strokeWidth="16" strokeLinecap="round" />
      <path d="M 60 170 A 110 110 0 0 1 230 90" fill="none" stroke={`url(#${g.arc})`} strokeWidth="16" strokeLinecap="round" />
      <line x1="170" y1="170" x2="215" y2="100" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="170" cy="170" r="8" fill="#fff" />
      <text x="170" y="205" textAnchor="middle" fontSize="11" fill="#ffffffaa" fontFamily="Manrope">Competition Level</text>
      <text x="60" y="195" fontSize="9.5" fill="#8be0b0">Low</text>
      <text x="255" y="195" fontSize="9.5" fill="#ff9caa">High</text>
    </Frame>
  );
}

export function BuyerPersonaCard() {
  const g = useGradIds(["bg"]);
  return (
    <Frame h={250}>
      <CardBg id={g.bg} h={250} />
      <circle cx="80" cy="70" r="34" fill="#8b5cf633" stroke="#b58bff" strokeWidth="2" />
      <circle cx="80" cy="58" r="13" fill="#b58bff" />
      <path d="M55 92 q25 -22 50 0" fill="#b58bff" />
      {[
        "Goal: Fast, reliable delivery",
        "Budget: Mid-range, value-driven",
        "Fear: Missed deadlines",
        "Trigger: Clear samples & reviews",
      ].map((t, i) => (
        <g key={i} transform={`translate(130, ${35 + i * 40})`}>
          <circle cx="0" cy="0" r="3" fill="#ff9d5c" />
          <text x="12" y="4" fontSize="10" fill="#f0eefc" fontFamily="Manrope">{t}</text>
        </g>
      ))}
    </Frame>
  );
}

export function PositioningBlueprint() {
  const g = useGradIds(["bg"]);
  return (
    <Frame>
      <CardBg id={g.bg} />
      <rect x="30" y="30" width="280" height="46" rx="10" fill="#ff3d5a1f" stroke="#ff3d5a55" />
      <text x="170" y="58" textAnchor="middle" fontSize="10.5" fill="#ffd6dc" fontFamily="Manrope">Buyer Problem</text>
      <path d="M170 76 v20" stroke="#ffffff44" />
      <rect x="30" y="96" width="280" height="46" rx="10" fill="#8b5cf61f" stroke="#8b5cf655" />
      <text x="170" y="124" textAnchor="middle" fontSize="10.5" fill="#e6dcff" fontFamily="Manrope">Your Unique Approach</text>
      <path d="M170 142 v20" stroke="#ffffff44" />
      <rect x="30" y="162" width="280" height="46" rx="10" fill="#fb923c1f" stroke="#fb923c55" />
      <text x="170" y="190" textAnchor="middle" fontSize="10.5" fill="#ffe3c2" fontFamily="Manrope">Clear, Believable Outcome</text>
    </Frame>
  );
}

/* ---------- CH3 ---------- */

export function KeywordFunnel() {
  const g = useGradIds(["bg"]);
  const rows = [
    { w: 260, t: "Seed Keyword", c: "#ff3d5a" },
    { w: 200, t: "Primary Keywords", c: "#fb923c" },
    { w: 140, t: "Secondary", c: "#8b5cf6" },
    { w: 90, t: "Long-tail", c: "#22c55e" },
  ];
  return (
    <Frame>
      <CardBg id={g.bg} />
      {rows.map((r, i) => (
        <g key={i} transform={`translate(${170 - r.w / 2}, ${25 + i * 52})`}>
          <rect width={r.w} height="38" rx="9" fill={`${r.c}26`} stroke={r.c} strokeWidth="1.5" />
          <text x={r.w / 2} y="24" textAnchor="middle" fontSize="10.5" fill="#fff" fontFamily="Manrope">{r.t}</text>
        </g>
      ))}
    </Frame>
  );
}

export function IntentMap() {
  const g = useGradIds(["bg"]);
  const cats = [
    { t: "Informational", ex: "\u201Cwhat is logo design\u201D", c: "#8b5cf6" },
    { t: "Comparison", ex: "\u201Cbest logo designer\u201D", c: "#fb923c" },
    { t: "Transactional", ex: "\u201Chire logo designer\u201D", c: "#ff3d5a" },
  ];
  return (
    <Frame h={230}>
      <CardBg id={g.bg} h={230} />
      {cats.map((c, i) => (
        <g key={i} transform={`translate(20, ${20 + i * 65})`}>
          <rect width="300" height="52" rx="10" fill={`${c.c}22`} stroke={c.c} strokeWidth="1.4" />
          <text x="14" y="21" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Sora">{c.t}</text>
          <text x="14" y="39" fontSize="9.5" fill="#ffffffaa" fontFamily="Manrope">{c.ex}</text>
        </g>
      ))}
    </Frame>
  );
}

export function KeywordMapGrid() {
  const g = useGradIds(["bg"]);
  const cells = [
    "logo design", "minimalist logo", "brand identity", "logo for startup",
    "vector logo", "logo revisions", "3D logo", "logo & business card",
  ];
  return (
    <Frame h={230}>
      <CardBg id={g.bg} h={230} />
      {cells.map((c, i) => {
        const x = 20 + (i % 2) * 155;
        const y = 20 + Math.floor(i / 2) * 48;
        const colors = ["#ff3d5a", "#8b5cf6", "#fb923c", "#22c55e"];
        const col = colors[i % 4];
        return (
          <g key={i} transform={`translate(${x},${y})`}>
            <rect width="140" height="36" rx="8" fill={`${col}22`} stroke={col} strokeWidth="1.2" />
            <text x="70" y="22" textAnchor="middle" fontSize="9.5" fill="#fff" fontFamily="Manrope">{c}</text>
          </g>
        );
      })}
    </Frame>
  );
}

/* ---------- CH4 ---------- */

export function GigTitleAnatomy() {
  const g = useGradIds(["bg"]);
  const parts = [
    { t: "Service", c: "#ff3d5a", ex: "I will design" },
    { t: "Specialty", c: "#8b5cf6", ex: "a minimalist" },
    { t: "Deliverable", c: "#fb923c", ex: "logo design" },
    { t: "Qualifier", c: "#22c55e", ex: "for your brand" },
  ];
  return (
    <Frame h={230}>
      <CardBg id={g.bg} h={230} />
      {parts.map((p, i) => (
        <g key={i} transform={`translate(20, ${18 + i * 50})`}>
          <rect width="300" height="38" rx="9" fill={`${p.c}20`} stroke={p.c} strokeWidth="1.4" />
          <text x="12" y="24" fontSize="10.5" fill="#fff" fontFamily="Manrope">"{p.ex}"</text>
          <text x="288" y="24" textAnchor="end" fontSize="8.5" fill="#ffffff90" fontFamily="Manrope">{p.t}</text>
        </g>
      ))}
    </Frame>
  );
}

export function ThumbnailShowcase() {
  const g = useGradIds(["bg", "img1", "img2"]);
  return (
    <Frame>
      <CardBg id={g.bg} />
      <defs>
        <linearGradient id={g.img1} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3a3550" />
          <stop offset="100%" stopColor="#211f30" />
        </linearGradient>
        <linearGradient id={g.img2} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff3d5a" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="25" y="30" width="130" height="90" rx="10" fill={`url(#${g.img1})`} stroke="#ffffff22" />
      <text x="90" y="80" textAnchor="middle" fontSize="9" fill="#ffffff80" fontFamily="Manrope">Cluttered / Low CTR</text>
      <rect x="185" y="24" width="130" height="102" rx="10" fill={`url(#${g.img2})`} stroke="#fff" strokeWidth="2" />
      <circle cx="250" cy="60" r="18" fill="#ffffff33" />
      <path d="M242 60 l6 6 12 -14" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="250" y="100" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff" fontFamily="Sora">Clear / High CTR</text>
      <path d="M160 75 h20" stroke="#ffffff55" strokeDasharray="3 4" />
      <g transform="translate(70,150)">
        <rect width="200" height="60" rx="10" fill="#ffffff0d" stroke="#ffffff22" />
        <text x="100" y="26" textAnchor="middle" fontSize="9.5" fill="#fff" fontFamily="Manrope">Bold subject + contrast</text>
        <text x="100" y="44" textAnchor="middle" fontSize="9.5" fill="#fff" fontFamily="Manrope">+ short readable text</text>
      </g>
    </Frame>
  );
}

export function VisualHierarchyDiagram() {
  const g = useGradIds(["bg"]);
  const rows = [
    { w: 250, h: 22, t: "Thumbnail", c: "#ff3d5a" },
    { w: 210, h: 18, t: "Title", c: "#fb923c" },
    { w: 170, h: 16, t: "Gallery Images", c: "#8b5cf6" },
    { w: 130, h: 14, t: "Description", c: "#22c55e" },
  ];
  return (
    <Frame>
      <CardBg id={g.bg} />
      {rows.map((r, i) => (
        <g key={i} transform={`translate(${170 - r.w / 2}, ${30 + i * 48})`}>
          <rect width={r.w} height={r.h} rx="6" fill={`${r.c}33`} stroke={r.c} strokeWidth="1.2" />
          <text x={r.w / 2} y={r.h / 2 + 4} textAnchor="middle" fontSize="9" fill="#fff" fontFamily="Manrope">{r.t}</text>
        </g>
      ))}
      <text x="170" y="240" textAnchor="middle" fontSize="9.5" fill="#ffffff70" fontFamily="Manrope">Biggest visual weight → most important element</text>
    </Frame>
  );
}

/* ---------- CH5 ---------- */

export function DescriptionFrameworkDiagram() {
  const g = useGradIds(["bg"]);
  const steps = ["Hook", "Problem", "Solution", "Process", "Proof", "CTA"];
  return (
    <Frame h={230}>
      <CardBg id={g.bg} h={230} />
      {steps.map((s, i) => {
        const x = 30 + (i % 3) * 100;
        const y = 30 + Math.floor(i / 3) * 90;
        return (
          <g key={i} transform={`translate(${x},${y})`}>
            <circle cx="34" cy="34" r="30" fill="#ffffff0d" stroke="#ff9d5c" strokeWidth="1.6" />
            <text x="34" y="30" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff" fontFamily="Sora">{i + 1}</text>
            <text x="34" y="46" textAnchor="middle" fontSize="9" fill="#ffffffaa" fontFamily="Manrope">{s}</text>
          </g>
        );
      })}
    </Frame>
  );
}

export function PackageTiersChart() {
  const g = useGradIds(["bg"]);
  const tiers = [
    { t: "Basic", h: 60, c: "#8b5cf6" },
    { t: "Standard", h: 90, c: "#ff3d5a" },
    { t: "Premium", h: 120, c: "#fb923c" },
  ];
  return (
    <Frame>
      <CardBg id={g.bg} />
      {tiers.map((t, i) => (
        <g key={i} transform={`translate(${60 + i * 80}, 0)`}>
          <rect x="0" y={190 - t.h} width="56" height={t.h} rx="8" fill={`${t.c}33`} stroke={t.c} strokeWidth="1.5" />
          <text x="28" y="205" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Manrope">{t.t}</text>
        </g>
      ))}
      <line x1="30" y1="190" x2="300" y2="190" stroke="#ffffff33" />
      <text x="170" y="230" textAnchor="middle" fontSize="9.5" fill="#ffffff70" fontFamily="Manrope">Good · Better · Best packaging</text>
    </Frame>
  );
}

export function ObjectionFunnel() {
  const g = useGradIds(["bg"]);
  const stages = [
    { t: "Click", w: 260, c: "#8b5cf6" },
    { t: "Read & Compare", w: 210, c: "#fb923c" },
    { t: "Resolve Objections", w: 160, c: "#ff3d5a" },
    { t: "Order", w: 110, c: "#22c55e" },
  ];
  return (
    <Frame>
      <CardBg id={g.bg} />
      {stages.map((s, i) => (
        <g key={i} transform={`translate(${170 - s.w / 2}, ${20 + i * 52})`}>
          <rect width={s.w} height="38" rx="9" fill={`${s.c}26`} stroke={s.c} strokeWidth="1.5" />
          <text x={s.w / 2} y="24" textAnchor="middle" fontSize="10" fill="#fff" fontFamily="Manrope">{s.t}</text>
        </g>
      ))}
    </Frame>
  );
}

/* ---------- CH6 ---------- */

export function TrustShieldDiagram() {
  const g = useGradIds(["bg"]);
  return (
    <Frame>
      <CardBg id={g.bg} />
      <path d="M170 30 L235 55 V115 C235 160 205 190 170 205 C135 190 105 160 105 115 V55 Z" fill="#8b5cf620" stroke="#b58bff" strokeWidth="2" />
      <path d="M145 118 l18 18 34 -40" stroke="#ff9d5c" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="170" y="230" textAnchor="middle" fontSize="10" fill="#ffffff80" fontFamily="Manrope">Trust = Delivery + Communication + Consistency</text>
    </Frame>
  );
}

export function CommunicationTimeline() {
  const g = useGradIds(["bg"]);
  const steps = ["Inquiry Reply", "Order Confirmation", "Progress Update", "Delivery Note", "Follow-up"];
  return (
    <Frame h={230}>
      <CardBg id={g.bg} h={230} />
      <line x1="30" y1="115" x2="310" y2="115" stroke="#ffffff33" strokeWidth="2" />
      {steps.map((s, i) => (
        <g key={i} transform={`translate(${30 + i * 68}, 115)`}>
          <circle r="8" fill="#0d0c14" stroke="#ff3d5a" strokeWidth="2.5" />
          <text x="0" y={i % 2 === 0 ? -20 : 34} textAnchor="middle" fontSize="8" fill="#f0eefc" fontFamily="Manrope">{s}</text>
        </g>
      ))}
    </Frame>
  );
}

export function ReviewsEthicsBalance() {
  const g = useGradIds(["bg"]);
  return (
    <Frame>
      <CardBg id={g.bg} />
      <line x1="170" y1="40" x2="170" y2="90" stroke="#ffffff55" strokeWidth="3" />
      <line x1="70" y1="90" x2="270" y2="90" stroke="#ffffff55" strokeWidth="3" />
      <line x1="70" y1="90" x2="70" y2="140" stroke="#ffffff55" strokeWidth="2" />
      <line x1="270" y1="90" x2="270" y2="140" stroke="#ffffff55" strokeWidth="2" />
      <rect x="20" y="140" width="100" height="50" rx="10" fill="#22c55e22" stroke="#22c55e" strokeWidth="1.5" />
      <text x="70" y="162" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c9f5d9" fontFamily="Sora">Earned</text>
      <text x="70" y="178" textAnchor="middle" fontSize="8" fill="#c9f5d9" fontFamily="Manrope">Genuine feedback</text>
      <rect x="220" y="140" width="100" height="50" rx="10" fill="#ff3d5a22" stroke="#ff3d5a" strokeWidth="1.5" />
      <text x="270" y="162" textAnchor="middle" fontSize="9" fontWeight="700" fill="#ffd6dc" fontFamily="Sora">Risky</text>
      <text x="270" y="178" textAnchor="middle" fontSize="8" fill="#ffd6dc" fontFamily="Manrope">Fake / bought reviews</text>
      <circle cx="170" cy="30" r="14" fill="#8b5cf633" stroke="#b58bff" strokeWidth="2" />
    </Frame>
  );
}

/* ---------- CH7 ---------- */

export function AnalyticsDashboard() {
  const g = useGradIds(["bg", "bar"]);
  const bars = [40, 70, 50, 90, 60, 100, 80];
  return (
    <Frame>
      <CardBg id={g.bg} />
      <defs>
        <linearGradient id={g.bar} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff3d5a" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <rect key={i} x={30 + i * 40} y={180 - h} width="22" height={h} rx="5" fill={`url(#${g.bar})`} />
      ))}
      <line x1="20" y1="180" x2="310" y2="180" stroke="#ffffff44" />
      <text x="170" y="205" textAnchor="middle" fontSize="10" fill="#ffffff80" fontFamily="Manrope">Impressions → Clicks → Orders (weekly)</text>
      <g transform="translate(20,15)">
        <circle r="4" fill="#ff3d5a" />
        <text x="10" y="4" fontSize="8.5" fill="#fff" fontFamily="Manrope">Weekly volume trend</text>
      </g>
    </Frame>
  );
}

export function FunnelBottleneckDiagram() {
  const g = useGradIds(["bg"]);
  const stages = [
    { t: "Impressions", v: "12,400", c: "#8b5cf6", w: 270 },
    { t: "Clicks", v: "620 (5.0% CTR)", c: "#fb923c", w: 210 },
    { t: "Inquiries/Orders", v: "38 (6.1%)", c: "#ff3d5a", w: 150 },
    { t: "Cancellations", v: "2 (5.3%)", c: "#ef4444", w: 90 },
  ];
  return (
    <Frame h={240}>
      <CardBg id={g.bg} h={240} />
      {stages.map((s, i) => (
        <g key={i} transform={`translate(${170 - s.w / 2}, ${20 + i * 52})`}>
          <rect width={s.w} height="40" rx="9" fill={`${s.c}26`} stroke={s.c} strokeWidth="1.5" />
          <text x="10" y="17" fontSize="9.5" fontWeight="700" fill="#fff" fontFamily="Sora">{s.t}</text>
          <text x="10" y="32" fontSize="8.5" fill="#ffffffaa" fontFamily="Manrope">{s.v}</text>
        </g>
      ))}
    </Frame>
  );
}

/* ---------- CH8 ---------- */

export function CompetitorGrid() {
  const g = useGradIds(["bg"]);
  const rows = [
    { t: "Response time", you: 5, them: 3 },
    { t: "Portfolio depth", you: 4, them: 4 },
    { t: "Price clarity", you: 5, them: 2 },
    { t: "Review recency", you: 4, them: 3 },
  ];
  return (
    <Frame h={240}>
      <CardBg id={g.bg} h={240} />
      <text x="230" y="24" fontSize="9.5" fill="#ff9d5c" fontFamily="Manrope">You</text>
      <text x="290" y="24" fontSize="9.5" fill="#b58bff" fontFamily="Manrope">Them</text>
      {rows.map((r, i) => (
        <g key={i} transform={`translate(20, ${40 + i * 46})`}>
          <text x="0" y="14" fontSize="9.5" fill="#f0eefc" fontFamily="Manrope">{r.t}</text>
          <rect x="200" y="0" width={r.you * 10} height="10" rx="4" fill="#ff9d5c" />
          <rect x="260" y="0" width={r.them * 10} height="10" rx="4" fill="#b58bff" />
        </g>
      ))}
    </Frame>
  );
}

export function ProofPositioningBoard() {
  const g = useGradIds(["bg"]);
  return (
    <Frame>
      <CardBg id={g.bg} />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${30 + i * 100}, 30)`}>
          <rect width="80" height="60" rx="8" fill="#ffffff0d" stroke="#ffffff22" />
          <circle cx="40" cy="24" r="12" fill="#8b5cf640" />
          <rect x="18" y="42" width="44" height="6" rx="3" fill="#ffffff30" />
        </g>
      ))}
      <text x="170" y="115" textAnchor="middle" fontSize="10" fill="#ffffffaa" fontFamily="Manrope">Case studies + before/after proof</text>
      <rect x="60" y="140" width="220" height="60" rx="10" fill="#ff3d5a1a" stroke="#ff3d5a55" />
      <text x="170" y="165" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffd6dc" fontFamily="Sora">Unique Value Proposition</text>
      <text x="170" y="183" textAnchor="middle" fontSize="8.5" fill="#ffffffaa" fontFamily="Manrope">What only YOU credibly offer</text>
    </Frame>
  );
}

/* ---------- CH9 ---------- */

export function ABTestSplit() {
  const g = useGradIds(["bg"]);
  return (
    <Frame>
      <CardBg id={g.bg} />
      <rect x="25" y="30" width="120" height="150" rx="10" fill="#8b5cf61a" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="85" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="#b58bff" fontFamily="Sora">Version A</text>
      <rect x="195" y="30" width="120" height="150" rx="10" fill="#ff3d5a1a" stroke="#ff3d5a" strokeWidth="1.5" />
      <text x="255" y="20" textAnchor="middle" fontSize="10" fontWeight="700" fill="#ff9caa" fontFamily="Sora">Version B</text>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="40" y={55 + i * 35} width="90" height="16" rx="4" fill="#ffffff22" />
          <rect x="210" y={55 + i * 35} width="90" height="16" rx="4" fill="#ffffff22" />
        </g>
      ))}
      <path d="M145 105 h50" stroke="#ffffff55" strokeDasharray="3 4" />
      <text x="170" y="102" textAnchor="middle" fontSize="14" fill="#ffffff77">VS</text>
      <text x="170" y="205" textAnchor="middle" fontSize="9.5" fill="#ffffff80" fontFamily="Manrope">Change ONE element at a time</text>
    </Frame>
  );
}

export function OptimizationLoop() {
  const g = useGradIds(["bg"]);
  const steps = ["Analyze", "Hypothesize", "Change 1 thing", "Measure", "Decide"];
  const R = 80;
  return (
    <Frame>
      <CardBg id={g.bg} />
      {steps.map((s, i) => {
        const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
        const x = 170 + R * Math.cos(angle);
        const y = 125 + R * Math.sin(angle);
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="30" fill="#ffffff0d" stroke="#ff9d5c" strokeWidth="1.5" />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="8.5" fill="#fff" fontFamily="Manrope">{s}</text>
          </g>
        );
      })}
      <circle cx="170" cy="125" r="80" fill="none" stroke="#ffffff22" strokeDasharray="4 6" />
    </Frame>
  );
}

/* ---------- CH10 ---------- */

export function Week1Calendar() {
  const g = useGradIds(["bg"]);
  const days = [
    { d: "1-3", t: "Research & Positioning", c: "#8b5cf6" },
    { d: "4-5", t: "Keyword Mapping", c: "#ff3d5a" },
    { d: "6-7", t: "Gig Optimization", c: "#fb923c" },
  ];
  return (
    <Frame h={230}>
      <CardBg id={g.bg} h={230} />
      {days.map((d, i) => (
        <g key={i} transform={`translate(20, ${20 + i * 65})`}>
          <rect width="60" height="52" rx="8" fill={`${d.c}33`} stroke={d.c} strokeWidth="1.5" />
          <text x="30" y="31" textAnchor="middle" fontSize="11" fontWeight="700" fill="#fff" fontFamily="Sora">Day {d.d}</text>
          <rect x="72" y="10" width="230" height="32" rx="8" fill="#ffffff0d" stroke="#ffffff22" />
          <text x="87" y="30" fontSize="10" fill="#f0eefc" fontFamily="Manrope">{d.t}</text>
        </g>
      ))}
    </Frame>
  );
}

export function Weeks234Calendar() {
  const g = useGradIds(["bg"]);
  const weeks = [
    { w: "Week 2", t: "Visual & Conversion", c: "#ff3d5a" },
    { w: "Week 3", t: "Buyer Experience", c: "#8b5cf6" },
    { w: "Week 4", t: "Analytics & Testing", c: "#fb923c" },
  ];
  return (
    <Frame h={230}>
      <CardBg id={g.bg} h={230} />
      {weeks.map((w, i) => (
        <g key={i} transform={`translate(20, ${20 + i * 65})`}>
          <rect width="290" height="50" rx="10" fill={`${w.c}22`} stroke={w.c} strokeWidth="1.5" />
          <text x="16" y="22" fontSize="10.5" fontWeight="700" fill="#fff" fontFamily="Sora">{w.w}</text>
          <text x="16" y="39" fontSize="9.5" fill="#ffffffaa" fontFamily="Manrope">{w.t}</text>
        </g>
      ))}
    </Frame>
  );
}

export function GrowthRoadmap() {
  const g = useGradIds(["bg", "line"]);
  return (
    <Frame h={240}>
      <CardBg id={g.bg} h={240} />
      <defs>
        <linearGradient id={g.line} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ff3d5a" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
      </defs>
      <path d="M20 200 L100 150 L180 165 L260 90 L320 60" fill="none" stroke={`url(#${g.line})`} strokeWidth="4" strokeLinecap="round" />
      {[
        [20, 200, "Day 1"],
        [100, 150, "Day 7"],
        [180, 165, "Day 14"],
        [260, 90, "Day 21"],
        [320, 60, "Day 30+"],
      ].map(([x, y, t], i) => (
        <g key={i}>
          <circle cx={x as number} cy={y as number} r="6" fill="#0d0c14" stroke="#ffd9a8" strokeWidth="3" />
          <text x={x as number} y={(y as number) - 12} textAnchor="middle" fontSize="9" fill="#ffffffaa" fontFamily="Manrope">{t}</text>
        </g>
      ))}
      <text x="170" y="230" textAnchor="middle" fontSize="9.5" fill="#ffffff70" fontFamily="Manrope">Sustainable growth, not overnight guarantees</text>
    </Frame>
  );
}
