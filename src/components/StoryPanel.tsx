"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { categoryById } from "@/data";
import { viewInfo } from "@/data/categories";
import type { Fact, Nutrient, Part } from "@/data";
import { getNextPart } from "@/lib/nextStory";
import { ChevronRight, DotsBullet } from "./icons";
import { blip } from "@/lib/sound";

gsap.registerPlugin(useGSAP);

export type Tab = "overview" | "nutrition";

interface Props {
  part: Part | null;
  tab: Tab;
  onTab: (t: Tab) => void;
  onNext: (partId: string) => void;
}

/* ---------- Small presentational pieces ---------- */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="relative mb-5 flex items-center gap-3 text-[22px] font-bold text-ink">
      <DotsBullet />
      {children}
    </h3>
  );
}

function Divider() {
  return <div className="story-divider my-8" />;
}

function FactRow({ f }: { f: Fact }) {
  const tone =
    f.tone === "up"
      ? { bg: "var(--accent)", color: "#fff", glyph: "↑" }
      : f.tone === "down"
        ? { bg: "var(--brand)", color: "#fff", glyph: "↓" }
        : { bg: "#dff3ec", color: "var(--brand-ink)", glyph: "•" };
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/60 bg-white/60 px-5 py-4 first:rounded-t-2xl last:rounded-b-2xl last:border-0">
      <div>
        <p className="text-[16px] font-semibold text-ink">{f.label}</p>
        <p className="t-mono-11 mt-1 text-ink/70">{f.sub}</p>
      </div>
      <span
        className="t-mono-12 flex h-10 shrink-0 items-center gap-1 rounded-xl px-3"
        style={{ background: tone.bg, color: tone.color, letterSpacing: "0.06em" }}
      >
        <span>{tone.glyph}</span>
        {f.badge}
      </span>
    </div>
  );
}

function NutrientCard({ n }: { n: Nutrient }) {
  return (
    <div className="story-block mb-4 rounded-2xl bg-white/60 p-[10px]">
      <div className="supp-head flex items-center justify-between rounded-xl px-4 py-3">
        <p className="text-[16px] font-semibold text-brand">{n.name}</p>
        <p className="text-[15px] font-semibold text-brand">{n.dose}</p>
      </div>
      <ul className="list-disc space-y-3 px-9 pb-4 pt-5 text-[16px] leading-[1.5] text-ink">
        {n.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function NextCard({ part, onNext }: { part: Part; onNext: (id: string) => void }) {
  const next = getNextPart(part);
  return (
    <button
      type="button"
      onClick={() => {
        blip(880);
        onNext(next.id);
      }}
      className="next-story flex h-[100px] w-full cursor-pointer items-center justify-between rounded-[44px] pl-9 pr-[6px] text-left backdrop-blur"
    >
      <span className="grad" />
      <span className="text-place relative z-10 pr-4">
        <span className="t-mono-11 block text-ink/70" style={{ fontWeight: 700 }}>
          Next
        </span>
        <p className="line-clamp-2 text-[18px] font-semibold text-ink">{next.title}</p>
      </span>
      <span className="relative z-10 flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full bg-white text-ink">
        <ChevronRight className="scale-125" />
      </span>
    </button>
  );
}

/* ---------- Tab contents ---------- */
function Overview({ part, onNext }: { part: Part; onNext: (id: string) => void }) {
  return (
    <>
      <div className="story-block">
        <h2 className="mb-6 text-[32px] font-bold leading-[1.15] text-ink lg:text-[42px]">{part.title}</h2>
        <p className="t-mono-12 text-ink/60">{part.latin}</p>
        <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-[13px] text-ink/80">
          <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: categoryById[part.category].color }} />
          <span>
            Seen in the <strong className="text-ink">{viewInfo[part.view].name.toLowerCase()}</strong>,{" "}
            {viewInfo[part.view].short}
          </span>
        </p>
      </div>
      <Divider />
      <div className="story-block">
        <SectionTitle>What it is</SectionTitle>
        {part.intro.map((p) => (
          <p key={p} className="mb-6 text-[16px] leading-[1.5] text-ink">
            {p}
          </p>
        ))}
      </div>
      <Divider />
      <div className="story-block">
        <SectionTitle>Key facts</SectionTitle>
        <div className="overflow-hidden rounded-2xl">
          {part.facts.map((f) => (
            <FactRow key={f.label} f={f} />
          ))}
        </div>
      </div>
      <Divider />
      <div className="story-block">
        <SectionTitle>What it does</SectionTitle>
        <ul className="list-disc space-y-3 pl-5 text-[16px] leading-[1.5] text-ink">
          {part.functions.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      <Divider />
      <div className="story-block">
        <SectionTitle>When it goes wrong</SectionTitle>
        <ul className="list-disc space-y-3 pl-5 text-[16px] leading-[1.5] text-ink">
          {part.whenDamaged.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      <Divider />
      <div className="story-block pb-[104px]">
        <NextCard part={part} onNext={onNext} />
      </div>
    </>
  );
}

function Nutrition({ part, onNext }: { part: Part; onNext: (id: string) => void }) {
  return (
    <>
      <div className="story-block">
        <h2 className="mb-6 text-[32px] font-bold leading-[1.15] text-ink lg:text-[42px]">Vitamins for the {part.name}</h2>
        <p className="text-[16px] leading-[1.5] text-ink">
          Each card names a vitamin, the typical adult daily amount (RDA or the dose used in studies) and the specific job
          it does for this structure. Food first; supplements only fill a proven gap.
        </p>
      </div>
      <Divider />
      <div className="story-block">
        <SectionTitle>Vitamins that support it</SectionTitle>
        {part.vitamins.map((n) => (
          <NutrientCard key={n.name} n={n} />
        ))}
      </div>
      {part.otherNutrients && part.otherNutrients.length > 0 && (
        <>
          <Divider />
          <div className="story-block">
            <SectionTitle>Other key nutrients</SectionTitle>
            {part.otherNutrients.map((n) => (
              <NutrientCard key={n.name} n={n} />
            ))}
          </div>
        </>
      )}
      <Divider />
      <div className="story-block">
        <p className="t-mono-11 text-ink/60">
          Educational content only. Doses are general adult reference values and are not medical advice. Talk to a
          clinician before starting high-dose supplements, especially vitamins A, B6, D and E.
        </p>
      </div>
      <Divider />
      <div className="story-block pb-[104px]">
        <NextCard part={part} onNext={onNext} />
      </div>
    </>
  );
}

/**
 * The scrolling story panel. It is kept mounted while a story is open or
 * closing so the exit animation can play; `shown` holds the last part.
 */
export default function StoryPanel({ part, tab, onTab, onNext }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<Part | null>(part);
  const prevPart = useRef<Part | null>(null);

  // Derived state: while a part is open it is always the one shown. When it
  // closes we keep the old one until the exit animation finishes.
  if (part && part !== shown) setShown(part);

  useGSAP(
    () => {
      const opening = !!part && !prevPart.current;
      const closing = !part && !!prevPart.current;
      const switching = !!part && !!prevPart.current && part.id !== prevPart.current.id;
      prevPart.current = part;

      if (opening) {
        gsap.set(root.current, { pointerEvents: "auto" });
        gsap
          .timeline({ defaults: { ease: "power2.inOut" } })
          .fromTo(".story-header", { autoAlpha: 0, y: -50 }, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.3)
          .fromTo(".story-sheet", { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.1)
          .fromTo(".story-block", { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.06, ease: "power2.out" }, 0.7);
      } else if (closing) {
        gsap.set(root.current, { pointerEvents: "none" });
        gsap
          .timeline({ defaults: { ease: "power2.inOut" }, onComplete: () => setShown(null) })
          .to(".story-header", { autoAlpha: 0, y: -50, duration: 0.4 }, 0)
          .to(".story-sheet", { autoAlpha: 0, y: 100, duration: 0.5 }, 0);
      } else if (switching) {
        // Content swap: fade the blocks out, let React swap, fade back in.
        scroller.current?.scrollTo({ top: 0, behavior: "smooth" });
        gsap.fromTo(".story-block", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.05, ease: "power2.out", delay: 0.1 });
      }
    },
    { dependencies: [part?.id], scope: root },
  );

  useGSAP(
    () => {
      if (!shown) return;
      scroller.current?.scrollTo({ top: 0 });
      gsap.fromTo(".story-block", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.05, ease: "power2.out" });
    },
    { dependencies: [tab], scope: root },
  );

  if (!shown) return null;
  const cat = categoryById[shown.category];

  const tabs: { id: Tab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "nutrition", label: "Vitamins & Nutrition" },
  ];

  return (
    <div ref={root} className="fixed inset-0 z-[12] pointer-events-none">
      {/* Header pill (desktop: top centre; mobile: bottom tab bar) */}
      <div className="story-header fixed bottom-0 left-1/2 z-[42] w-screen -translate-x-1/2 opacity-0 lg:bottom-auto lg:top-[22px] lg:w-auto">
        <div className="glass hg-host relative flex h-[67px] items-center justify-around gap-2 rounded-t-2xl bg-white px-2 lg:h-12 lg:justify-between lg:rounded-full lg:bg-transparent">
          <span className="hover-gradient" />
          <div className="text-gradient mx-4 hidden whitespace-nowrap text-[14px] font-semibold lg:block">{cat.name}:</div>
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => onTab(t.id)}
                className={`relative z-10 h-10 whitespace-nowrap rounded-full px-5 text-[16px] font-semibold transition-all duration-400 lg:text-[14px] ${
                  active ? "bg-brand text-white shadow" : "text-ink hover:text-brand"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Scrolling sheet */}
      <div
        ref={scroller}
        className="story-sheet glass-strong story-sheet-mobile fixed left-0 top-[88px] h-[calc(100svh-88px)] w-full overflow-y-auto rounded-tr-[24px] opacity-0 no-scrollbar lg:w-6/11"
        style={{ borderTopLeftRadius: 0 }}
      >
        <div className="mx-auto w-full px-5 pt-[120px] md:px-10 lg:w-[444px] lg:px-0 lg:pt-[130px] 2xl:w-[560px]">
          {tab === "overview" ? <Overview part={shown} onNext={onNext} /> : <Nutrition part={shown} onNext={onNext} />}
        </div>
      </div>
    </div>
  );
}
