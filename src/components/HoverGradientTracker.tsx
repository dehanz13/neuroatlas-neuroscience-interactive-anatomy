"use client";

import { useEffect } from "react";
import gsap from "gsap";

/**
 * The reference moves its blurred iridescent blob under the cursor while
 * hovering a button. One delegated listener does it for every `.hg-host`
 * element that contains a `.hover-gradient` child.
 */
export default function HoverGradientTracker() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const host = (e.target as Element | null)?.closest?.(".hg-host");
      if (!host) return;
      const blob = host.querySelector<HTMLElement>(".hover-gradient");
      if (!blob) return;
      const r = host.getBoundingClientRect();
      gsap.set(blob, { x: e.clientX - r.left - 49, y: e.clientY - r.top - 49 });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return null;
}
