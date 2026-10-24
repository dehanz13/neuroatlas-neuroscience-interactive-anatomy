"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { categories } from "@/data";
import type { CategoryId } from "@/data";
import { CategoryIcon, ChevronRight } from "./icons";
import { blip } from "@/lib/sound";

gsap.registerPlugin(useGSAP);

interface Props {
  visible: boolean;
  onSelect: (id: CategoryId) => void;
  onHover: (id: CategoryId | null) => void;
}

/** The "Explore categories" glass card on the right of the explore view. */
export default function CategoryPanel({ visible, onSelect, onHover }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mobile = window.innerWidth < 1024;
      gsap.to(root.current, {
        autoAlpha: visible ? 1 : 0,
        x: visible ? 0 : mobile ? 0 : 50,
        y: visible ? 0 : mobile ? 80 : 0,
        duration: 0.5,
        ease: "power2.inOut",
        delay: visible ? 0.6 : 0,
        overwrite: "auto",
        pointerEvents: visible ? "auto" : "none",
      });
      if (visible) {
        gsap.fromTo(
          ".pick-item",
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.06, delay: 0.8, ease: "power2.out", overwrite: true },
        );
      }
    },
    { dependencies: [visible], scope: root },
  );

  return (
    <div
      ref={root}
      className="glass fixed bottom-0 right-0 z-[9] w-full rounded-t-[32px] opacity-0 lg:bottom-[53px] lg:right-5 lg:w-[360px] lg:rounded-[32px]"
    >
      <div className="pb-2 pt-5 lg:pt-[30px]">
        <div className="mb-4 flex justify-center px-5 lg:mb-[30px]">
          <p className="t-mono-13 text-ink" style={{ fontSize: 15 }}>
            Explore categories
          </p>
        </div>
        <div className="flex gap-2 overflow-x-auto px-4 pb-3 no-scrollbar lg:flex-col lg:overflow-visible">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onMouseEnter={() => onHover(c.id)}
              onMouseLeave={() => onHover(null)}
              onClick={() => {
                blip(700);
                onSelect(c.id);
              }}
              className="pick-item hg-host flex h-16 shrink-0 items-center gap-3 rounded-full bg-white/60 px-5 text-left lg:w-full"
            >
              <span className="hover-gradient" />
              <span className="icon relative z-10 text-ink" style={{ color: "var(--ink)" }}>
                <CategoryIcon id={c.id} />
              </span>
              <p className="relative z-10 grow whitespace-nowrap text-[16px] font-semibold text-ink">{c.name}</p>
              <span className="arrow relative z-10 text-ink">
                <ChevronRight />
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
