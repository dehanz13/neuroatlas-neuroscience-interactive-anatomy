"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { categories, categoryById } from "@/data";
import type { CategoryId, Part } from "@/data";
import { CategoryIcon, ChevronLeft, ChevronRight } from "./icons";
import { blip } from "@/lib/sound";

gsap.registerPlugin(useGSAP);

interface Props {
  visible: boolean;
  categoryId: CategoryId | null;
  parts: Part[];
  onSelectPart: (id: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

/**
 * The bottom pill bar of the category view: current category on the left
 * (title swaps with a slide animation), PREV / NEXT circle buttons on the
 * right with the neighbouring category names above them.
 */
export default function BottomBar({ visible, categoryId, parts, onSelectPart, onPrev, onNext }: Props) {
  const root = useRef<HTMLDivElement>(null);
  const index = categoryId ? categories.findIndex((c) => c.id === categoryId) : -1;
  const prev = index > 0 ? categories[index - 1] : null;
  const next = index >= 0 && index < categories.length - 1 ? categories[index + 1] : null;
  const current = categoryId ? categoryById[categoryId] : null;

  useGSAP(
    () => {
      gsap.to(root.current, {
        autoAlpha: visible ? 1 : 0,
        y: visible ? 0 : 80,
        duration: 0.5,
        ease: "power2.inOut",
        delay: visible ? 0.5 : 0,
        overwrite: "auto",
        pointerEvents: visible ? "auto" : "none",
      });
    },
    { dependencies: [visible], scope: root },
  );

  useGSAP(
    () => {
      if (!current) return;
      gsap.fromTo(
        ".bar-title",
        { x: -30, autoAlpha: 0, scale: 0.9 },
        { x: 0, autoAlpha: 1, scale: 1, duration: 0.6, delay: 0.3, ease: "power3.out", overwrite: "auto" },
      );
      gsap.fromTo(".bar-neighbour", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.4, delay: 0.4, stagger: 0.05 });
    },
    { dependencies: [categoryId], scope: root },
  );

  return (
    <div ref={root} className="fixed bottom-5 left-0 z-10 w-full px-4 opacity-0 lg:px-[15vw]">
      {/* Phone-only: structure chips, since labels are hidden on the small brain */}
      <div className="mb-3 flex gap-2 overflow-x-auto px-1 pb-1 no-scrollbar lg:hidden">
        {parts.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => {
              blip(980);
              onSelectPart(p.id);
            }}
            className="glass-strong shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-semibold text-ink"
            style={{ borderColor: current?.color }}
          >
            {p.name}
          </button>
        ))}
      </div>
      <div className="relative h-[90px] lg:h-[106px]">
        <div className="glass flex h-full w-full items-center justify-between rounded-full px-2 py-2">
          <div className="flex h-full min-w-0 flex-1 items-center overflow-hidden rounded-full bg-white px-4 lg:flex-none lg:pl-[22px] lg:pr-[35px]">
            {current && (
              <div className="bar-title flex min-w-0 items-center gap-3 lg:gap-4">
                <span className="shrink-0 text-ink">
                  <CategoryIcon id={current.id} />
                </span>
                <p className="truncate text-[20px] font-semibold text-ink md:text-[26px] lg:text-[35px]">{current.name}</p>
              </div>
            )}
          </div>

          <div className="relative ml-2 flex h-full shrink-0 items-center gap-2 lg:gap-3">
            <div className="relative">
              {prev && (
                <div className="bar-neighbour pointer-events-none absolute bottom-full right-6 mb-2 hidden whitespace-nowrap text-right lg:block">
                  <p className="text-[13px] uppercase text-ink opacity-50">Prev</p>
                  <p className="h-[31px] text-[20px] font-semibold text-ink">{prev.short}</p>
                </div>
              )}
              <button
                type="button"
                disabled={!prev}
                onClick={onPrev}
                className="circle-button h-[74px] w-[64px] shrink-0 rounded-full bg-white/40 text-ink md:w-[100px] lg:h-[88px] lg:w-[120px]"
                aria-label="Previous category"
              >
                <ChevronLeft className="scale-125" />
              </button>
            </div>
            <div className="relative">
              {next && (
                <div className="bar-neighbour pointer-events-none absolute bottom-full left-0 mb-2 hidden whitespace-nowrap lg:block">
                  <p className="text-[13px] uppercase text-ink opacity-50">Next</p>
                  <p className="h-[31px] text-[20px] font-semibold text-ink">{next.short}</p>
                </div>
              )}
              <button
                type="button"
                disabled={!next}
                onClick={onNext}
                className="circle-button h-[74px] w-[64px] shrink-0 rounded-full bg-white text-ink md:w-[100px] lg:h-[88px] lg:w-[120px]"
                aria-label="Next category"
              >
                <ChevronRight className="scale-125" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
