"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { BrainView } from "@/data";
import { ChevronLeft, GenderLikeIcon, Logo } from "./icons";
import ViewInfo from "./ViewInfo";
import type { Phase } from "./Experience";

gsap.registerPlugin(useGSAP);

interface Props {
  phase: Phase;
  view: BrainView;
  onViewChange: (v: BrainView) => void;
  onBack: () => void;
}

/**
 * Fixed header: back button (left), view switcher (centre), logo (right).
 * Mirrors the reference's FEMALE / MALE pill, which here becomes a
 * LATERAL / MEDIAL (outside / cut-through) brain switcher.
 */
export default function Header({ phase, view, onViewChange, onBack }: Props) {
  const root = useRef<HTMLElement>(null);
  const showBack = phase === "category" || phase === "story";
  const showSwitcher = phase === "intro" || phase === "explore" || phase === "category";
  const logoRight = phase !== "intro";

  useGSAP(
    () => {
      gsap.to(".hdr-back", {
        autoAlpha: showBack ? 1 : 0,
        x: showBack ? 0 : -20,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(".hdr-switch", {
        autoAlpha: showSwitcher ? 1 : 0,
        y: showSwitcher ? 0 : -40,
        duration: 0.5,
        ease: "power2.inOut",
        overwrite: "auto",
      });
      gsap.to(".hdr-logo", {
        autoAlpha: logoRight ? 1 : 0,
        y: logoRight ? 0 : -30,
        duration: 0.5,
        ease: "power2.inOut",
        overwrite: "auto",
      });
    },
    { dependencies: [showBack, showSwitcher, logoRight], scope: root },
  );

  useGSAP(
    () => {
      // Entrance, mirrors the reference's delayed header slide-in.
      gsap.from(root.current, { y: -90, autoAlpha: 0, duration: 0.6, ease: "power2.inOut", delay: 0.4 });
    },
    { scope: root },
  );

  return (
    <header ref={root} className="pointer-events-none fixed left-0 top-0 z-[41] w-full">
      <div className="flex items-center justify-between px-5 pt-5">
        <div className="flex flex-1 items-center">
          <button
            type="button"
            onClick={onBack}
            className="hdr-back circle-button pointer-events-auto h-8 w-8 opacity-0"
            aria-label="Back"
          >
            <span className="absolute h-full w-full scale-[1.4] rounded-full bg-white/40" />
            <span className="relative flex h-full w-full items-center justify-center rounded-full bg-white text-ink">
              <ChevronLeft />
            </span>
          </button>
        </div>

        <div className="hdr-switch flex flex-1 items-center justify-center">
          <div className="hg-host pointer-events-auto relative flex h-12 items-center overflow-hidden rounded-full glass p-1">
            <span className="hover-gradient" />
            {(["lateral", "medial"] as BrainView[]).map((v) => {
              const active = v === view;
              return (
                <button
                  key={v}
                  type="button"
                  onClick={() => onViewChange(v)}
                  className={`relative z-10 flex h-10 items-center gap-2 rounded-full px-5 transition-all duration-500 ${
                    active ? "bg-brand text-white shadow-md" : "text-ink hover:text-brand"
                  }`}
                  aria-pressed={active}
                >
                  <span className="t-mono-13">{v}</span>
                  <GenderLikeIcon kind={v} />
                </button>
              );
            })}
          </div>
          <ViewInfo view={view} onViewChange={onViewChange} />
        </div>

        <div className="hdr-logo flex flex-1 justify-end opacity-0">
          <span className="pointer-events-auto">
            <Logo />
          </span>
        </div>
      </div>
    </header>
  );
}
