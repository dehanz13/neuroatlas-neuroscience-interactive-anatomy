"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { categoryById } from "@/data";
import type { CategoryId } from "@/data";

gsap.registerPlugin(useGSAP);

/**
 * The reference shows a circular video loop inside the 3D organ. Here the
 * circle holds an animated neuron: signal pulses travel down a myelinated
 * axon, tinted with the category colour.
 */
export default function ZoomWindow({
  visible,
  category,
  partId,
}: {
  visible: boolean;
  category: CategoryId;
  partId: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  const color = categoryById[category].color;

  useGSAP(
    () => {
      gsap.to(root.current, {
        autoAlpha: visible ? 1 : 0,
        scale: visible ? 1 : 0.25,
        duration: 0.7,
        delay: visible ? 0.9 : 0,
        ease: visible ? "back.out(1.4)" : "power2.in",
        overwrite: "auto",
      });
    },
    { dependencies: [visible, partId], scope: root },
  );

  useGSAP(
    () => {
      // Pulses run along the axon forever.
      gsap.utils.toArray<SVGCircleElement>(".pulse").forEach((p, i) => {
        gsap.fromTo(
          p,
          { attr: { cx: 20 }, autoAlpha: 0 },
          {
            attr: { cx: 200 },
            autoAlpha: 1,
            duration: 2.2,
            repeat: -1,
            delay: i * 0.75,
            ease: "none",
            onRepeat: () => gsap.set(p, { autoAlpha: 0 }),
          },
        );
      });
      gsap.to(".dend", { opacity: 0.9, duration: 1.6, stagger: 0.2, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".myelin", { opacity: 1, duration: 1.2, stagger: { each: 0.15, repeat: -1, yoyo: true }, ease: "sine.inOut" });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      className="pointer-events-none flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-full opacity-0"
      style={{ border: "6px solid rgba(255,255,255,0.45)", boxShadow: "0 20px 60px rgba(11,122,106,0.3)" }}
      aria-hidden
    >
      <svg viewBox="0 0 220 220" className="h-full w-full">
        <defs>
          <radialGradient id="zw-bg" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0" stopColor="#123b35" />
            <stop offset="1" stopColor="#061e1a" />
          </radialGradient>
          <linearGradient id="zw-axon" x1="0" x2="1">
            <stop offset="0" stopColor="#7fd6c2" />
            <stop offset="1" stopColor={color} />
          </linearGradient>
        </defs>
        <rect width="220" height="220" fill="url(#zw-bg)" />
        {/* dendrites */}
        <g className="dend" stroke="#7fd6c2" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5">
          <path d="M30 110C20 90 10 80 4 60M30 110C18 120 10 135 6 150M30 110C24 100 18 96 8 96" />
        </g>
        {/* soma */}
        <circle cx="34" cy="110" r="14" fill={color} opacity="0.95" />
        <circle cx="34" cy="110" r="6" fill="#fff" opacity="0.8" />
        {/* axon */}
        <path d="M46 110 H214" stroke="url(#zw-axon)" strokeWidth="4" strokeLinecap="round" />
        {/* myelin segments */}
        {[62, 92, 122, 152, 182].map((x) => (
          <rect key={x} className="myelin" x={x} y="101" width="22" height="18" rx="9" fill={color} opacity="0.55" />
        ))}
        {/* signal pulses */}
        {[0, 1, 2].map((i) => (
          <circle key={i} className="pulse" cx="20" cy="110" r="5" fill="#fff" style={{ filter: "drop-shadow(0 0 6px #fff)" }} />
        ))}
        {/* synapse terminal */}
        <circle cx="212" cy="110" r="7" fill="#fff" opacity="0.9" />
      </svg>
    </div>
  );
}
