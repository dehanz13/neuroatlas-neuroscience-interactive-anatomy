"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { categories, categoryById, partById, partsOf } from "@/data";
import type { BrainView, CategoryId } from "@/data";
import BrainSvg from "./BrainSvg";
import ZoomWindow from "./ZoomWindow";
import { ChevronRight } from "./icons";
import { blip } from "@/lib/sound";
import type { Phase } from "./Experience";

gsap.registerPlugin(useGSAP);

interface Props {
  phase: Phase;
  view: BrainView;
  categoryId: CategoryId | null;
  partId: string | null;
  hoverCat: CategoryId | null;
  onHoverCat: (id: CategoryId | null) => void;
  onSelectCategory: (id: CategoryId) => void;
  onSelectPart: (id: string) => void;
}

const pct = (v: number) => `${v / 10}%`;

/**
 * The "3D scene" of the reference, rebuilt as an SVG brain in a square stage.
 * The stage is scaled / translated with GSAP as the user drills in, and the
 * HTML hotspots inside it are counter-scaled so they keep a constant size.
 */
export default function BrainScene({
  phase,
  view,
  categoryId,
  partId,
  hoverCat,
  onHoverCat,
  onSelectCategory,
  onSelectPart,
}: Props) {
  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const xline = useRef<HTMLDivElement>(null);
  const yline = useRef<HTMLDivElement>(null);

  const highlightCat = phase === "explore" ? hoverCat : categoryId;
  const dim = phase === "category" || phase === "story";

  // Bump a counter on resize so the camera re-fits the new viewport.
  const [viewportTick, setViewportTick] = useState(0);
  useEffect(() => {
    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setViewportTick((t) => t + 1));
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  /* ---------- Camera: zoom / pan the stage per phase ---------- */
  useGSAP(
    () => {
      const el = stage.current;
      if (!el) return;
      const S = el.offsetWidth;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const mobile = vw < 1024;

      let scale = 1;
      let tx = 0;
      let ty = 0;
      let focus: { x: number; y: number } | null = null;

      if (phase === "intro") {
        scale = mobile ? 0.9 : 1;
        ty = mobile ? -vh * 0.12 : S * 0.02;
      } else if (phase === "category" && categoryId) {
        const cat = categoryById[categoryId];
        scale = (cat.zoom ?? 1.55) * (mobile ? 1.1 : 1);
        focus = cat.focus ?? cat.pos;
        ty = mobile ? -vh * 0.16 : -S * 0.06;
      } else if (phase === "story" && partId) {
        const cat = categoryById[partById[partId].category];
        scale = (cat.zoom ?? 1.55) * (mobile ? 0.8 : 1.05);
        focus = cat.focus ?? cat.pos;
        tx = mobile ? 0 : vw * 0.26;
        ty = mobile ? -vh * 0.3 : vh * 0.05;
      }

      if (focus) {
        const px = (focus.x / 1000) * S - S / 2;
        const py = (focus.y / 1000) * S - S / 2;
        tx += -px * scale;
        ty += -py * scale;
      }

      gsap.to(el, {
        x: tx,
        y: ty,
        scale,
        "--inv": 1 / scale,
        duration: 1.1,
        ease: "power3.inOut",
        overwrite: "auto",
      });
    },
    { dependencies: [phase, categoryId, partId, viewportTick], scope: root },
  );

  /* ---------- Mouse tilt: a light 3D parallax while browsing ---------- */
  useGSAP(
    () => {
      const el = stage.current;
      if (!el) return;
      const tilting = phase === "intro" || phase === "explore";
      if (!tilting) {
        gsap.to(el, { rotationX: 0, rotationY: 0, duration: 0.8, ease: "power2.out" });
        return;
      }
      const rotX = gsap.quickTo(el, "rotationX", { duration: 1.2, ease: "power2.out" });
      const rotY = gsap.quickTo(el, "rotationY", { duration: 1.2, ease: "power2.out" });
      const onMove = (e: MouseEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        rotY(nx * 14);
        rotX(-ny * 10);
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      return () => window.removeEventListener("mousemove", onMove);
    },
    { dependencies: [phase], scope: root },
  );

  /* ---------- Hotspot groups appear / disappear ---------- */
  useGSAP(
    () => {
      const exploreOn = phase === "explore";
      const catOn = phase === "category";
      const partEls = gsap.utils.toArray<HTMLElement>(".hs-part", root.current);
      gsap.to(".hs-explore", {
        autoAlpha: exploreOn ? 1 : 0,
        scale: exploreOn ? 1 : 0.6,
        duration: 0.5,
        stagger: exploreOn ? 0.07 : 0,
        delay: exploreOn ? 0.5 : 0,
        ease: exploreOn ? "back.out(1.6)" : "power2.in",
        overwrite: "auto",
        pointerEvents: exploreOn ? "auto" : "none",
      });
      if (!partEls.length) return;
      gsap.to(partEls, {
        autoAlpha: catOn ? 1 : 0,
        x: catOn ? 0 : -16,
        duration: 0.5,
        stagger: catOn ? 0.08 : 0,
        delay: catOn ? 0.8 : 0,
        ease: "power2.out",
        overwrite: "auto",
        pointerEvents: catOn ? "auto" : "none",
      });
    },
    { dependencies: [phase, categoryId], scope: root },
  );

  /* ---------- Crosshair lines follow the focused point ---------- */
  const moveCrosshair = useCallback((clientX: number, clientY: number, show: boolean) => {
    gsap.to(xline.current, { y: clientY, autoAlpha: show ? 1 : 0, duration: 0.5, ease: "power2.out" });
    gsap.to(yline.current, { x: clientX, autoAlpha: show ? 1 : 0, duration: 0.5, ease: "power2.out" });
  }, []);

  useGSAP(
    () => {
      // Snap the crosshair to the active category / part after the camera settles.
      const target =
        phase === "category" && categoryId
          ? `[data-hs-cat="${categoryId}"]`
          : phase === "story" && partId
            ? `[data-hs-part="${partId}"]`
            : null;
      if (!target) {
        if (phase !== "explore") moveCrosshair(0, 0, false);
        return;
      }
      const el = root.current?.querySelector<HTMLElement>(target);
      if (!el) return;
      gsap.delayedCall(1.0, () => {
        const r = el.getBoundingClientRect();
        moveCrosshair(r.left + r.width / 2, r.top + r.height / 2, true);
      });
    },
    { dependencies: [phase, categoryId, partId], scope: root },
  );

  const parts = categoryId ? partsOf(categoryId) : [];

  return (
    <div ref={root} className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden" style={{ perspective: "1600px" }}>
      {/* crosshair */}
      <div ref={xline} className="pointer-events-none fixed left-0 top-0 h-px w-screen bg-white/60 opacity-0" />
      <div ref={yline} className="pointer-events-none fixed left-0 top-0 h-screen w-px bg-white/60 opacity-0" />

      <div
        ref={stage}
        className="relative"
        style={{ height: "min(100vh, 100vw)", aspectRatio: "1 / 1", ["--inv" as string]: 1 }}
      >
        <BrainSvg view={view} highlightCat={highlightCat} activePart={phase === "story" ? partId : null} dim={dim} />

        {/* Explore hotspots: one per category */}
        {categories.map((c) => (
          <div
            key={c.id}
            data-hs-cat={c.id}
            className="hs-explore absolute opacity-0"
            style={{ left: pct(c.pos.x), top: pct(c.pos.y), transform: "translate(-50%,-50%) scale(var(--inv))" }}
          >
            <button
              type="button"
              className="circulo-contenedor"
              aria-label={c.name}
              onMouseEnter={(e) => {
                onHoverCat(c.id);
                const r = e.currentTarget.getBoundingClientRect();
                moveCrosshair(r.left + r.width / 2, r.top + r.height / 2, true);
              }}
              onMouseLeave={() => {
                onHoverCat(null);
                moveCrosshair(0, 0, false);
              }}
              onClick={() => {
                blip(740);
                onSelectCategory(c.id);
              }}
            >
              <span className="glow-bg" style={{ background: `radial-gradient(circle, ${c.color} 0, transparent 70%)` }} />
              <span className="circulo-principal">
                <span className="punto" />
                <span className="punto" />
                <span className="punto" />
              </span>
            </button>
          </div>
        ))}

        {/* Category hotspots: one per structure in the open category */}
        {parts.map((p, i) => (
          <div
            key={p.id}
            data-hs-part={p.id}
            className="hs-part absolute opacity-0"
            style={{ left: pct(p.pos.x), top: pct(p.pos.y), transform: "translate(0,0) scale(var(--inv))", transformOrigin: "28px 0" }}
          >
            <button
              type="button"
              className={`hotspot hg-host ${i % 2 ? "alt" : ""}`}
              onClick={() => {
                blip(980);
                onSelectPart(p.id);
              }}
            >
              <span className="hover-gradient" />
              <span className="circle">
                <span className="vfx" />
              </span>
              <p className="text-ink">{p.name}</p>
              <span className="arrow text-brand">
                <ChevronRight />
              </span>
            </button>
          </div>
        ))}

        {/* Zoom window (story phase): a circular "microscope" over the structure */}
        {partId && (
          <div
            className="absolute hidden lg:block"
            style={{
              left: pct(partById[partId].pos.x),
              top: pct(partById[partId].pos.y),
              transform: "translate(-50%,-50%) scale(var(--inv))",
            }}
          >
            <ZoomWindow visible={phase === "story"} category={partById[partId].category} partId={partId} />
          </div>
        )}
      </div>
    </div>
  );
}
