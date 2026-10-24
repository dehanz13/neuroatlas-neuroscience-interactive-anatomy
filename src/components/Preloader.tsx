"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { LogoMark } from "./icons";

gsap.registerPlugin(useGSAP);

/**
 * Preloader: a glowing disc with three expanding rings around the logo,
 * exactly as in the reference, then a fade-out that hands control to the
 * intro screen.
 */
export default function Preloader({ onDone }: { onDone: () => void }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      tl.from(".pre-logo", { scale: 0.6, autoAlpha: 0, duration: 0.8 })
        .from(".pre-ring", { scale: 0.4, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, "<0.1")
        .to(".pre-logo", { scale: 1.1, duration: 0.9, yoyo: true, repeat: 1, ease: "sine.inOut" })
        .to(root.current, { autoAlpha: 0, duration: 0.7, ease: "power2.inOut", onComplete: onDone }, "+=0.2");
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      id="preloader"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
      aria-label="Loading"
    >
      <div
        className="absolute h-[90vmin] w-[90vmin] rounded-full"
        style={{
          background: "radial-gradient(circle, #a9dccb 0%, rgba(169,220,203,0.55) 35%, rgba(255,255,255,0) 70%)",
          animation: "pulseBlur 4s ease-in-out infinite",
        }}
      />
      <div className="relative flex h-[180px] w-[180px] items-center justify-center">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="pre-ring absolute inset-0 rounded-full border border-white/70"
            style={{ animation: `pulseLogoBorder 3s linear ${i}s infinite` }}
          />
        ))}
        <div className="pre-logo relative rounded-full bg-white/60 p-6 backdrop-blur">
          <LogoMark size={64} />
        </div>
      </div>
    </div>
  );
}
