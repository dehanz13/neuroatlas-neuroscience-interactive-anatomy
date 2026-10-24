"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * The reference renders a 3D scene on a canvas; its backdrop is a soft,
 * slowly drifting field of pastel colour with floating specks. We rebuild
 * the backdrop with blurred gradient blobs and GSAP-driven particles.
 */
export default function Background() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        { reduce: "(prefers-reduced-motion: reduce)", ok: "(prefers-reduced-motion: no-preference)" },
        (ctx) => {
          const { reduce } = ctx.conditions as { reduce: boolean };
          if (reduce) return;

          // Blobs drift lazily in big loops.
          gsap.utils.toArray<HTMLElement>(".blob").forEach((el, i) => {
            gsap.to(el, {
              x: () => gsap.utils.random(-140, 140),
              y: () => gsap.utils.random(-120, 120),
              scale: () => gsap.utils.random(0.9, 1.25),
              duration: () => gsap.utils.random(14, 22),
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: i * 0.7,
            });
          });

          // Specks float upward and fade, like the dust motes in the reference.
          gsap.utils.toArray<HTMLElement>(".speck").forEach((el) => {
            const float = () => {
              gsap.set(el, {
                x: gsap.utils.random(0, window.innerWidth),
                y: gsap.utils.random(window.innerHeight * 0.2, window.innerHeight + 40),
                scale: gsap.utils.random(0.4, 1.4),
                autoAlpha: 0,
              });
              gsap
                .timeline({ onComplete: float })
                .to(el, { autoAlpha: gsap.utils.random(0.25, 0.7), duration: 2, ease: "sine.inOut" })
                .to(el, { y: "-=" + gsap.utils.random(120, 320), duration: gsap.utils.random(9, 16), ease: "none" }, 0)
                .to(el, { autoAlpha: 0, duration: 2.5, ease: "sine.inOut" }, "-=2.5");
            };
            gsap.delayedCall(gsap.utils.random(0, 8), float);
          });
        },
      );
    },
    { scope: root },
  );

  return (
    <div ref={root} className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #a8dccb 0%, #b9dfe6 30%, #ffd2bd 62%, #f3e0a4 82%, #b7dccf 100%)",
        }}
      />
      <div className="blob absolute -left-[10%] -top-[15%] h-[75vh] w-[65vw] rounded-full opacity-90 blur-[80px]" style={{ background: "#7fcbb4" }} />
      <div className="blob absolute right-[-10%] top-[0%] h-[65vh] w-[55vw] rounded-full opacity-90 blur-[80px]" style={{ background: "#ffc0a0" }} />
      <div className="blob absolute left-[15%] bottom-[-20%] h-[60vh] w-[60vw] rounded-full opacity-80 blur-[90px]" style={{ background: "#f6d98c" }} />
      <div className="blob absolute right-[10%] bottom-[-5%] h-[50vh] w-[40vw] rounded-full opacity-80 blur-[80px]" style={{ background: "#a7c9ff" }} />
      <div className="blob absolute left-[35%] top-[25%] h-[45vh] w-[35vw] rounded-full opacity-60 blur-[90px]" style={{ background: "#ffd9ea" }} />
      {/* diagonal light streak, echoing the reference's soft beams */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "linear-gradient(115deg, rgba(255,255,255,0) 30%, rgba(255,255,255,0.45) 45%, rgba(255,255,255,0) 60%)",
        }}
      />
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          key={i}
          className="speck absolute left-0 top-0 h-3 w-3 rounded-full bg-white opacity-0"
          style={{ boxShadow: "0 0 10px 2px rgba(255,255,255,0.35)" }}
        />
      ))}
    </div>
  );
}
