"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { viewInfo } from "@/data/categories";
import type { BrainView } from "@/data";

gsap.registerPlugin(useGSAP);

/** Tiny line drawings: a brain from the side, and a brain cut down the middle. */
function LateralGlyph() {
  return (
    <svg viewBox="0 0 64 44" width="64" height="44" aria-hidden>
      <path d="M8 24C8 12 18 6 30 6c14 0 24 6 24 18 0 8-6 14-16 15-6 1-12 0-16-3-6-3-14-5-14-12Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M26 7v26M14 18c6 0 8 4 14 4s8-4 14-4" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <path d="M44 37c0 4-2 6-4 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function MedialGlyph() {
  return (
    <svg viewBox="0 0 64 44" width="64" height="44" aria-hidden>
      <path d="M8 24C8 12 18 6 30 6c14 0 24 6 24 18 0 8-6 14-16 15-6 1-12 0-16-3-6-3-14-5-14-12Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M18 24c0-7 6-11 14-11s14 4 14 11" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.8" />
      <ellipse cx="34" cy="26" rx="6" ry="4" fill="currentColor" opacity="0.6" />
      <path d="M33 31v10" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="46" cy="22" r="2" fill="currentColor" />
    </svg>
  );
}

/**
 * The "?" button beside the LATERAL / MEDIAL switch. Hovering or clicking
 * it opens a glass card that explains the two views; clicking a column
 * switches to that view.
 */
export default function ViewInfo({ view, onViewChange }: { view: BrainView; onViewChange: (v: BrainView) => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useGSAP(
    () => {
      gsap.to(".vi-card", {
        autoAlpha: open ? 1 : 0,
        y: open ? 0 : -10,
        scale: open ? 1 : 0.96,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
        pointerEvents: open ? "auto" : "none",
      });
    },
    { dependencies: [open], scope: root },
  );

  return (
    <div ref={root} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="What is the difference between lateral and medial views?"
        className="pointer-events-auto ml-2 flex h-9 w-9 items-center justify-center rounded-full glass text-[15px] font-bold text-ink transition-colors hover:text-brand"
      >
        ?
      </button>

      <div
        className="vi-card glass-strong pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-[min(92vw,560px)] -translate-x-1/2 rounded-[24px] p-2 opacity-0 lg:left-auto lg:right-0 lg:translate-x-0"
        role="dialog"
      >
        <p className="t-mono-12 px-4 pb-2 pt-3 text-ink/70">Two ways to look at one brain</p>
        <div className="grid gap-2 md:grid-cols-2">
          {(["lateral", "medial"] as BrainView[]).map((v) => {
            const active = v === view;
            return (
              <button
                key={v}
                type="button"
                onClick={() => {
                  onViewChange(v);
                  setOpen(false);
                }}
                className={`flex gap-3 rounded-2xl p-4 text-left transition-colors ${
                  active ? "bg-brand text-white" : "bg-white/70 text-ink hover:bg-white"
                }`}
              >
                <span className={`shrink-0 ${active ? "text-white" : "text-brand"}`}>
                  {v === "lateral" ? <LateralGlyph /> : <MedialGlyph />}
                </span>
                <span>
                  <span className="block text-[15px] font-bold">
                    {viewInfo[v].name} <span className="font-normal opacity-80">· {viewInfo[v].short}</span>
                  </span>
                  <span className={`mt-1 block text-[13px] leading-[1.45] ${active ? "text-white/90" : "text-ink/80"}`}>
                    {viewInfo[v].description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
        <p className="px-4 pb-3 pt-3 text-[12px] leading-[1.4] text-ink/60">
          Anatomists use <strong>lateral</strong> for &ldquo;towards the side&rdquo; and <strong>medial</strong> for
          &ldquo;towards the midline&rdquo;. Surface structures (lobes, cerebellum) live in the lateral view; deep structures (thalamus,
          hypothalamus, brainstem core) only appear when the brain is cut down the middle.
        </p>
      </div>
    </div>
  );
}
