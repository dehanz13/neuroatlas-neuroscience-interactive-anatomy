import type { CategoryId } from "@/data";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Three-dot glyph used as the NeuroAtlas logo mark and section bullet. */
export function LogoMark({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden>
      <defs>
        <linearGradient id="lm" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#0b7a6a" />
          <stop offset="1" stopColor="#7fd6c2" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="8" r="4.2" fill="url(#lm)" />
      <circle cx="8.5" cy="22" r="4.2" fill="url(#lm)" />
      <circle cx="23.5" cy="22" r="4.2" fill="url(#lm)" />
      <path d="M16 8 L8.5 22 M16 8 L23.5 22 M8.5 22 L23.5 22" stroke="url(#lm)" strokeWidth="1.6" fill="none" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <LogoMark size={30} />
      <span className={`hidden text-[22px] leading-none tracking-tight sm:inline ${light ? "text-white" : "text-ink"}`}>
        <span className="font-bold">Neuro</span>
        <span className="font-normal">Atlas</span>
      </span>
    </div>
  );
}

export function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg width="9" height="14" viewBox="0 0 9 14" className={className} aria-hidden>
      <path d="M1.5 1.5 L7 7 L1.5 12.5" {...stroke} strokeWidth={2} />
    </svg>
  );
}

export function ChevronLeft({ className = "" }: { className?: string }) {
  return (
    <svg width="9" height="14" viewBox="0 0 9 14" className={className} aria-hidden>
      <path d="M7.5 1.5 L2 7 L7.5 12.5" {...stroke} strokeWidth={2} />
    </svg>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className={className} aria-hidden>
      <path d="M2 7 H12 M8 3 L12 7 L8 11" {...stroke} strokeWidth={1.8} />
    </svg>
  );
}

export function DotsBullet({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className={className} aria-hidden>
      <circle cx="7" cy="3" r="1.8" fill="#0b7a6a" />
      <circle cx="3.5" cy="10" r="1.8" fill="#f2843b" />
      <circle cx="10.5" cy="10" r="1.8" fill="#7fd6c2" />
    </svg>
  );
}

export function GenderLikeIcon({ kind }: { kind: "lateral" | "medial" }) {
  // Lateral = whole-brain outline, Medial = brain cut in half.
  return kind === "lateral" ? (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
      <path d="M3 8c0-3 2-5 5-5s5 2 5 5-2 5-5 5-5-2-5-5Z" {...stroke} />
      <path d="M8 3v10" {...stroke} strokeDasharray="1.5 1.5" />
    </svg>
  ) : (
    <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
      <path d="M8 3c3 0 5 2 5 5s-2 5-5 5" {...stroke} />
      <path d="M8 3v10" {...stroke} />
      <circle cx="10" cy="8" r="1.4" {...stroke} />
    </svg>
  );
}

export function SoundShape({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="12" viewBox="0 0 14 12" className={className} aria-hidden>
      <path d="M1 4.5h2.5L7 1.5v9L3.5 7.5H1z" fill="currentColor" />
      <path d="M9.5 3.5c1 1 1 4 0 5M11.5 2c1.7 2 1.7 6 0 8" {...stroke} strokeWidth={1.2} />
    </svg>
  );
}

/* ---------- Category icons (line icons, 28x28) ---------- */
function Cortex() {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" className="icon" aria-hidden>
      <path d="M9 21c-3 0-5-2-5-5 0-2 1-3 2-4-1-3 1-6 4-6 1-2 3-3 5-2 2-1 4 0 5 2 3 0 5 3 4 6 1 1 2 2 2 4 0 3-2 5-5 5" {...stroke} />
      <path d="M14 4v17M9 10c2 0 3 1 5 1s3-1 5-1M8 16c2 0 4 1 6 1s4-1 6-1" {...stroke} />
      <path d="M12 24h4" {...stroke} />
    </svg>
  );
}
function Limbic() {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" className="icon" aria-hidden>
      <path d="M6 15c0-5 4-9 8-9s8 4 8 9c0 3-2 5-4 6l-4 2-4-2c-2-1-4-3-4-6Z" {...stroke} />
      <path d="M10 14c0-2 2-3 4-3s4 1 4 3-2 4-4 5c-2-1-4-3-4-5Z" {...stroke} />
      <circle cx="14" cy="14" r="1.2" fill="currentColor" />
    </svg>
  );
}
function Diencephalon() {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" className="icon" aria-hidden>
      <ellipse cx="14" cy="12" rx="7" ry="5" {...stroke} />
      <path d="M14 17v4M11 24h6M9 12h10" {...stroke} />
      <circle cx="21" cy="9" r="1.5" {...stroke} />
    </svg>
  );
}
function Basal() {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" className="icon" aria-hidden>
      <path d="M8 9c2-3 6-4 10-2 3 2 4 5 3 8" {...stroke} />
      <ellipse cx="11" cy="16" rx="4" ry="5" {...stroke} />
      <circle cx="18" cy="18" r="3" {...stroke} />
      <circle cx="8" cy="7" r="1.3" fill="currentColor" />
    </svg>
  );
}
function Brainstem() {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" className="icon" aria-hidden>
      <path d="M11 4h6v5c2 1 3 3 3 5 0 2-1 3-2 4v6h-8v-6c-1-1-2-2-2-4 0-2 1-4 3-5V4Z" {...stroke} />
      <path d="M11 14h6M11 18h6" {...stroke} />
    </svg>
  );
}
function Cerebellum() {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" className="icon" aria-hidden>
      <path d="M5 14c0-4 4-7 9-7s9 3 9 7-4 7-9 7-9-3-9-7Z" {...stroke} />
      <path d="M8 11c3 1 5 1 6 3 1-2 3-2 6-3M8 17c3-1 5-1 6-3 1 2 3 2 6 3" {...stroke} />
    </svg>
  );
}
function Support() {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" className="icon" aria-hidden>
      <circle cx="14" cy="13" r="4" {...stroke} />
      <path d="M14 17v7M10.5 10.5 6 6M17.5 10.5 22 6M10 14H4M18 14h6" {...stroke} />
      <circle cx="14" cy="13" r="1.2" fill="currentColor" />
    </svg>
  );
}

export const categoryIcons: Record<CategoryId, () => React.JSX.Element> = {
  cortex: Cortex,
  limbic: Limbic,
  diencephalon: Diencephalon,
  basal: Basal,
  brainstem: Brainstem,
  cerebellum: Cerebellum,
  support: Support,
};

export function CategoryIcon({ id, className = "" }: { id: CategoryId; className?: string }) {
  const Icon = categoryIcons[id];
  return (
    <span className={`inline-flex ${className}`}>
      <Icon />
    </span>
  );
}
