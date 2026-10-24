"use client";

import { useCallback, useEffect, useState } from "react";
import { categories, categoryById, partById, partsOf } from "@/data";
import type { BrainView, CategoryId } from "@/data";
import { setSound } from "@/lib/sound";
import Background from "./Background";
import BottomBar from "./BottomBar";
import BrainScene from "./BrainScene";
import CategoryPanel from "./CategoryPanel";
import CreatedBy from "./CreatedBy";
import Header from "./Header";
import HoverGradientTracker from "./HoverGradientTracker";
import IntroScreen from "./IntroScreen";
import Preloader from "./Preloader";
import SoundToggle from "./SoundToggle";
import StoryPanel, { type Tab } from "./StoryPanel";

/**
 * The experience is a small state machine, exactly like the reference:
 *
 *   loading → intro → explore ⇄ category ⇄ story
 *
 * Every screen is always mounted (except the intro and preloader) and
 * animates itself in or out with GSAP when `phase` changes. That keeps
 * transitions smooth because nothing re-mounts mid-animation.
 */
export type Phase = "loading" | "intro" | "explore" | "category" | "story";

export default function Experience() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [view, setView] = useState<BrainView>("lateral");
  const [categoryId, setCategoryId] = useState<CategoryId | null>(null);
  const [partId, setPartId] = useState<string | null>(null);
  const [hoverCat, setHoverCat] = useState<CategoryId | null>(null);
  const [tab, setTab] = useState<Tab>("overview");
  const [soundOn, setSoundOn] = useState(false);

  const selectCategory = useCallback((id: CategoryId) => {
    setCategoryId(id);
    setView(categoryById[id].view);
    setHoverCat(null);
    setPartId(null);
    setPhase("category");
  }, []);

  const selectPart = useCallback((id: string) => {
    const part = partById[id];
    setCategoryId(part.category);
    setView(part.view);
    setPartId(id);
    setTab("overview");
    setPhase("story");
  }, []);

  const back = useCallback(() => {
    if (phase === "story") {
      setPartId(null);
      setPhase("category");
    } else if (phase === "category") {
      setCategoryId(null);
      setPhase("explore");
    }
  }, [phase]);

  // Escape walks back one level, like the header's back button.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") back();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [back]);

  const step = useCallback(
    (dir: 1 | -1) => {
      if (!categoryId) return;
      const i = categories.findIndex((c) => c.id === categoryId);
      const next = categories[i + dir];
      if (next) selectCategory(next.id);
    },
    [categoryId, selectCategory],
  );

  const toggleSound = useCallback(() => {
    setSoundOn((on) => {
      setSound(!on);
      return !on;
    });
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <Background />
      <HoverGradientTracker />

      <BrainScene
        phase={phase}
        view={view}
        categoryId={categoryId}
        partId={partId}
        hoverCat={hoverCat}
        onHoverCat={setHoverCat}
        onSelectCategory={selectCategory}
        onSelectPart={selectPart}
      />

      {phase !== "loading" && <Header phase={phase} view={view} onViewChange={setView} onBack={back} />}

      {phase === "intro" && <IntroScreen onStart={() => setPhase("explore")} />}

      <CategoryPanel visible={phase === "explore"} onSelect={selectCategory} onHover={setHoverCat} />

      <BottomBar
        visible={phase === "category"}
        categoryId={categoryId}
        parts={categoryId ? partsOf(categoryId) : []}
        onSelectPart={selectPart}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />

      <StoryPanel part={phase === "story" && partId ? partById[partId] : null} tab={tab} onTab={setTab} onNext={selectPart} />

      {phase !== "loading" && <SoundToggle on={soundOn} onToggle={toggleSound} />}
      <CreatedBy />

      {phase === "loading" && <Preloader onDone={() => setPhase("intro")} />}
    </main>
  );
}
