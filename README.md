# NeuroAtlas

An interactive, animated tour of the human brain, built with **React (Next.js App Router)**, **Tailwind CSS v4** and the **GSAP core library**. The UI/UX, screen flow and animations follow the Vibrant Wellness interactive experience; the content is 100% neuroscience.

## What is inside

| Screen | What it does |
| --- | --- |
| Preloader | Pulsing logo with three expanding rings, then fades out. |
| Intro | Letter-by-letter title reveal, feature bullets, pulsing "Start Experience" button with letter-swap hover. |
| Explore | SVG brain (lateral or medial view) with seven glowing hotspots and the "Explore categories" glass panel. Hovering a hotspot glows the region and shows crosshair lines. |
| Category | The camera zooms to the region, every structure gets a labelled hotspot, and the bottom bar steps PREV / NEXT through categories. |
| Story | A scrolling glass panel with two tabs: **Overview** (what it is, key facts, functions, what goes wrong) and **Vitamins & Nutrition** (vitamin cards with doses and the specific job each one does for that structure). A circular animated neuron window sits over the structure. |

### Brain coverage (49 structures)

- **Cerebral cortex**: frontal lobe, prefrontal cortex, Broca's area, sensorimotor cortex, parietal lobe, temporal lobe, Wernicke's area, occipital lobe, insula, claustrum
- **Limbic system**: hippocampus, entorhinal cortex, amygdala, fornix, cingulate gyrus, mammillary bodies, olfactory bulb
- **Diencephalon**: thalamus, hypothalamus, pituitary gland, pineal gland (the "third eye"), habenula, optic chiasm
- **Basal ganglia**: striatum, globus pallidus, nucleus accumbens, subthalamic nucleus, substantia nigra, ventral tegmental area
- **Brainstem**: midbrain, periaqueductal grey, locus coeruleus, pons, raphe nuclei, reticular formation, medulla oblongata
- **Cerebellum**: cerebellar cortex, vermis, flocculonodular lobe, deep cerebellar nuclei
- **Cells & support**: neurons, synapses & neurotransmitters, glial cells, corpus callosum (white matter), ventricles & CSF, choroid plexus, meninges, blood–brain barrier, circle of Willis

### Lateral vs medial

The header switch (and the **?** button beside it) explains the two drawings: **lateral** is the brain seen from the side (lobes, folds, cerebellum), **medial** is a cut straight down the midline that exposes the deep structures. Every story also states which view its structure is seen in.

Every structure lists the vitamins that support it (B1, B2, B3, B6, B7, B9, B12, A, C, D, E, K) plus a few vitamin-like nutrients (choline, omega-3 DHA, magnesium, zinc, iron, iodine, CoQ10, lutein).

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # production build
```

## Project layout

```
src/
  app/            layout, globals.css (design tokens, keyframes, component CSS)
  components/     Experience (state machine) + one component per screen element
  data/           categories.ts + one parts-*.ts file per brain division
  lib/            nextStory.ts (NEXT-card ordering), sound.ts (Web Audio ambience)
```

## Changing the content

- Add a structure: append a `Part` object to the matching `src/data/parts-*.ts` file and list its id in `src/data/categories.ts`. Its `pos` is in the 1000×1000 SVG viewBox of `BrainSvg.tsx`.
- Change the tour order: edit `getNextPart` in `src/lib/nextStory.ts`.
- Change the colours: edit the tokens at the top of `src/app/globals.css` and the per-category `color` in `categories.ts`.

Educational content only; doses are general adult reference values and not medical advice.
