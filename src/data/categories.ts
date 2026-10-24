import type { Category } from "./types";

/**
 * The seven "categories" of the brain tour. They mirror the seven health
 * categories of the reference experience (Neurology, Cardiovascular, ...),
 * but every one of them is a division of the human brain.
 */
export const categories: Category[] = [
  {
    id: "cortex",
    name: "Cerebral Cortex",
    short: "Cortex",
    tagline: "The thinking surface",
    description:
      "The wrinkled outer layer of the cerebrum. Four lobes plus the hidden insula handle perception, movement, language and reasoning.",
    pos: { x: 300, y: 320 },
    focus: { x: 515, y: 400 },
    zoom: 1.3,
    view: "lateral",
    color: "#ff8a5c",
    parts: [
      "frontal-lobe",
      "prefrontal-cortex",
      "broca-area",
      "sensorimotor-cortex",
      "parietal-lobe",
      "temporal-lobe",
      "wernicke-area",
      "occipital-lobe",
      "insula",
      "claustrum",
    ],
  },
  {
    id: "limbic",
    name: "Limbic System",
    short: "Limbic",
    tagline: "Memory and emotion",
    description:
      "A ring of structures beneath the cortex that stores memories, colours experience with emotion and links smell to feeling.",
    pos: { x: 610, y: 520 },
    focus: { x: 500, y: 450 },
    zoom: 1.35,
    view: "medial",
    color: "#f2b04b",
    parts: [
      "hippocampus",
      "entorhinal-cortex",
      "amygdala",
      "fornix",
      "cingulate-gyrus",
      "mammillary-bodies",
      "olfactory-bulb",
    ],
  },
  {
    id: "diencephalon",
    name: "Diencephalon",
    short: "Diencephalon",
    tagline: "The relay and the regulator",
    description:
      "The central core of the forebrain: a sensory relay station, the master regulator of hunger, sleep and temperature, and two tiny glands.",
    pos: { x: 515, y: 440 },
    focus: { x: 540, y: 505 },
    zoom: 1.6,
    view: "medial",
    color: "#ffd166",
    parts: ["thalamus", "hypothalamus", "pituitary-gland", "pineal-gland", "habenula", "optic-chiasm"],
  },
  {
    id: "basal",
    name: "Basal Ganglia",
    short: "Basal Ganglia",
    tagline: "Movement, habits, reward",
    description:
      "Deep nuclei that select which movements and habits to release and which to hold back. Dopamine is their currency.",
    pos: { x: 420, y: 425 },
    focus: { x: 500, y: 500 },
    zoom: 1.6,
    view: "medial",
    color: "#c084fc",
    parts: [
      "striatum",
      "globus-pallidus",
      "nucleus-accumbens",
      "subthalamic-nucleus",
      "substantia-nigra",
      "ventral-tegmental-area",
    ],
  },
  {
    id: "brainstem",
    name: "Brainstem",
    short: "Brainstem",
    tagline: "Life support",
    description:
      "The stalk that joins brain to spinal cord. It keeps you breathing, keeps your heart beating and keeps you awake.",
    pos: { x: 570, y: 700 },
    focus: { x: 600, y: 705 },
    zoom: 1.5,
    view: "medial",
    color: "#f87171",
    parts: [
      "midbrain",
      "periaqueductal-grey",
      "locus-coeruleus",
      "pons",
      "raphe-nuclei",
      "reticular-formation",
      "medulla-oblongata",
    ],
  },
  {
    id: "cerebellum",
    name: "Cerebellum",
    short: "Cerebellum",
    tagline: "Balance and precision",
    description:
      "The 'little brain' tucked under the back of the cerebrum. It holds more than half of all your neurons and makes movement smooth.",
    pos: { x: 740, y: 640 },
    focus: { x: 725, y: 640 },
    zoom: 1.6,
    view: "lateral",
    color: "#34d399",
    parts: ["cerebellar-cortex", "vermis", "flocculonodular-lobe", "deep-cerebellar-nuclei"],
  },
  {
    id: "support",
    name: "Cells & Support",
    short: "Cells",
    tagline: "The hardware",
    description:
      "Neurons, synapses, glia, white-matter cables, protective membranes, fluid, blood vessels and the barrier that guards the brain's blood supply.",
    pos: { x: 470, y: 225 },
    focus: { x: 470, y: 420 },
    zoom: 1.3,
    view: "medial",
    color: "#60a5fa",
    parts: [
      "neuron",
      "synapse",
      "glial-cells",
      "corpus-callosum",
      "ventricles-csf",
      "choroid-plexus",
      "meninges",
      "blood-brain-barrier",
      "circle-of-willis",
    ],
  },
];

export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c])) as Record<
  Category["id"],
  Category
>;

/** Plain-language explanation of the two brain views, used by the UI. */
export const viewInfo = {
  lateral: {
    name: "Lateral view",
    short: "the brain seen from the side",
    description:
      "The outside of the left hemisphere, as a surgeon or an MRI slice from the side would see it. You see the four lobes, the folds (gyri and sulci), the cerebellum and the brainstem. Everything hidden inside stays out of sight.",
  },
  medial: {
    name: "Medial view",
    short: "a cut straight down the middle",
    description:
      "The brain sliced in half between the hemispheres and viewed from the inside. This exposes the deep structures the lateral view hides: the corpus callosum, thalamus, hypothalamus, pituitary, pineal gland, brainstem and the fluid-filled ventricles.",
  },
} as const;
