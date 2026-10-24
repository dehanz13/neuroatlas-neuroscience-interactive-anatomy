export type BrainView = "lateral" | "medial";

export type CategoryId =
  | "cortex"
  | "limbic"
  | "diencephalon"
  | "basal"
  | "brainstem"
  | "cerebellum"
  | "support";

export type Tone = "up" | "down" | "neutral";

/** A "key fact" row, styled like the biomarker rows on the reference site. */
export interface Fact {
  label: string;
  sub: string;
  badge: string;
  tone: Tone;
}

/** A nutrient card: vitamin (or vitamin-like nutrient) + how it supports this region. */
export interface Nutrient {
  name: string;
  dose: string;
  bullets: string[];
}

export interface Part {
  id: string;
  name: string;
  latin: string;
  category: CategoryId;
  /** Which brain drawing shows this structure best. */
  view: BrainView;
  /** Hotspot position in the 1000x1000 SVG viewBox. */
  pos: { x: number; y: number };
  /** Short story title shown at the top of the detail panel. */
  title: string;
  /** Paragraphs for the "What it is" section. */
  intro: string[];
  /** Bullet list of main jobs. */
  functions: string[];
  /** Key fact rows. */
  facts: Fact[];
  /** What goes wrong when the structure is injured or degenerates. */
  whenDamaged: string[];
  /** Vitamins that support this structure. */
  vitamins: Nutrient[];
  /** Other nutrients (minerals, fatty acids) worth knowing. Optional. */
  otherNutrients?: Nutrient[];
}

export interface Category {
  id: CategoryId;
  name: string;
  /** Used in the "NEXT / PREV" labels and bottom bar. */
  short: string;
  tagline: string;
  description: string;
  /** Hotspot position in the explore view (1000x1000 viewBox). */
  pos: { x: number; y: number };
  /** Where the camera centres when the category opens (defaults to pos). */
  focus?: { x: number; y: number };
  /** Camera zoom when the category opens (defaults to 1.55). */
  zoom?: number;
  /** The brain drawing to switch to when this category opens. */
  view: BrainView;
  /** Highlight colour for the region on the brain drawing. */
  color: string;
  parts: string[];
}
