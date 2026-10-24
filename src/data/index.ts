import { categories, categoryById } from "./categories";
import { cortexParts } from "./parts-cortex";
import { limbicParts } from "./parts-limbic";
import { diencephalonParts } from "./parts-diencephalon";
import { basalParts } from "./parts-basal";
import { brainstemParts } from "./parts-brainstem";
import { cerebellumParts } from "./parts-cerebellum";
import { supportParts } from "./parts-support";
import type { Part } from "./types";

export const parts: Part[] = [
  ...cortexParts,
  ...limbicParts,
  ...diencephalonParts,
  ...basalParts,
  ...brainstemParts,
  ...cerebellumParts,
  ...supportParts,
];

export const partById = Object.fromEntries(parts.map((p) => [p.id, p])) as Record<string, Part>;

export function partsOf(categoryId: string): Part[] {
  const cat = categories.find((c) => c.id === categoryId);
  if (!cat) return [];
  return cat.parts.map((id) => partById[id]).filter(Boolean);
}

export { categories, categoryById };
export type * from "./types";
