import { categories, categoryById, partsOf } from "@/data";
import type { Part } from "@/data";

/**
 * Decide which structure the "NEXT" card at the bottom of a story should
 * point to.
 *
 * This is a design decision with real trade-offs, so it lives in its own
 * tiny module where it is easy to change:
 *
 *  - Stay inside the current category until it is exhausted, then jump to
 *    the first structure of the next category (a guided "tour" feel).
 *  - Or jump by relevance (e.g. the hippocampus could lead to the
 *    mammillary bodies because they share the Papez circuit).
 *  - Or loop forever inside one category so a learner can drill a topic.
 *
 * The default below implements the guided tour: it walks every structure
 * in order and wraps around at the very end, so a reader who keeps
 * pressing NEXT sees the entire brain exactly once.
 *
 * TODO (optional): replace the body with your own ordering strategy.
 */
export function getNextPart(current: Part): Part {
  const siblings = partsOf(current.category);
  const index = siblings.findIndex((p) => p.id === current.id);

  if (index < siblings.length - 1) {
    return siblings[index + 1];
  }

  const catIndex = categories.findIndex((c) => c.id === current.category);
  const nextCat = categories[(catIndex + 1) % categories.length];
  return partsOf(nextCat.id)[0];
}

export function getCategoryLabel(part: Part): string {
  return categoryById[part.category].name;
}
