"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Logo, LogoMark } from "./icons";
import { parts } from "@/data";

gsap.registerPlugin(useGSAP);

const TITLE = ["Know Your", "Brain"];
const FEATURES = [
  `${parts.length} brain structures`,
  "Lateral (side) & medial (midline) views",
  "Function and failure",
  "Vitamin & nutrient guide",
];
const CTA = "Start Experience";

/**
 * The intro screen: letter-by-letter title reveal, feature bullets sliding
 * in from the right, and the pulsing "Start Experience" button whose letters
 * swap on hover. All timing mirrors the reference (0.9s letter rise, 2.1s
 * delayed CTA).
 */
export default function IntroScreen({ onStart }: { onStart: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const leaving = useRef(false);

  const { contextSafe } = useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".intro-logo", { autoAlpha: 0, y: 20, duration: 0.6 }, 0.2)
        .fromTo(".letter", { y: 90, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.035, ease: "power3.out" }, 0.4)
        .from(".feature", { autoAlpha: 0, x: 40, duration: 0.6, stagger: 0.1 }, 1.0)
        .from(".cta-wrap", { autoAlpha: 0, y: 90, duration: 0.5, ease: "power2.inOut" }, 1.6);
    },
    { scope: root },
  );

  // Wrapped in contextSafe at click time so the exit tweens join the hook's
  // context and are reverted if the component unmounts mid-animation.
  const start = () => {
    if (leaving.current) return;
    leaving.current = true;
    contextSafe(() => {
      gsap
        .timeline({ defaults: { ease: "power2.inOut" }, onComplete: onStart })
        .to(".cta-wrap", { autoAlpha: 0, y: 60, duration: 0.4 })
        .to(".feature", { autoAlpha: 0, x: 40, duration: 0.4, stagger: 0.05 }, "<")
        .to(".letter", { autoAlpha: 0, y: -60, duration: 0.5, stagger: 0.015 }, "<")
        .to(".intro-logo", { autoAlpha: 0, y: -20, duration: 0.4 }, "<0.1");
    })();
  };

  return (
    <div ref={root} className="fixed inset-0 z-40 flex flex-col justify-between px-5 py-5 md:px-10 lg:px-5">
      <div className="flex w-full grow items-center">
        {/* Left: logo + title */}
        <div className="flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-start">
          <div className="intro-logo mb-6 lg:ml-8">
            <Logo light={false} />
          </div>
          <h1 className="text-center text-[48px] font-normal leading-[1] text-white lg:ml-8 lg:text-left lg:text-[80px]" style={{ textShadow: "0 6px 30px rgba(11,122,106,0.25)" }}>
            {TITLE.map((line) => (
              <span key={line} className="block overflow-hidden">
                {line.split("").map((ch, i) => (
                  <span key={i} className="letter opacity-0" style={{ whiteSpace: "pre" }}>
                    {ch}
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        <div className="hidden lg:block lg:w-1/4" />

        {/* Right: feature bullets */}
        <div className="hidden flex-col items-end gap-5 pt-12 lg:flex lg:w-1/4">
          {FEATURES.map((f) => (
            <p key={f} className="feature flex items-center gap-3 text-[18px] font-medium text-white">
              <LogoMark size={18} />
              {f}
            </p>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="cta-wrap flex flex-col items-center gap-5">
        <button
          type="button"
          onClick={start}
          className="start-button hg-host relative flex h-[81px] cursor-pointer items-center rounded-full bg-white/40 px-2 transition-all duration-300 hover:bg-brand-glow/40"
        >
          <span className="pulse" />
          <span className="hover-gradient" />
          <span className="relative flex h-[65px] items-center rounded-full bg-white px-8">
            <span className="relative h-[22px] overflow-hidden text-[16px] font-semibold leading-[22px] text-ink">
              {CTA.split("").map((ch, i) => (
                <span key={i} className="relative inline-block" style={{ whiteSpace: "pre" }}>
                  <span className="main">{ch}</span>
                  <span className="sub">{ch}</span>
                </span>
              ))}
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
