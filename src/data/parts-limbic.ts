import type { Part } from "./types";

export const limbicParts: Part[] = [
  {
    id: "hippocampus",
    name: "Hippocampus",
    latin: "Hippocampus",
    category: "limbic",
    view: "medial",
    pos: { x: 660, y: 505 },
    title: "The Hippocampus & Memory Formation",
    intro: [
      "The hippocampus is a seahorse-shaped structure curled inside each temporal lobe. It is the brain's memory encoder: new facts and events pass through it before being filed in the cortex.",
      "It is also one of only two places in the adult brain where new neurons may continue to be born, and it is the first region damaged in Alzheimer's disease.",
    ],
    functions: [
      "Forming new declarative memories (facts and events).",
      "Consolidating memories during sleep, replaying the day's experiences.",
      "Spatial navigation through 'place cells' that fire at specific locations.",
      "Regulating the stress response by feeding back on the hypothalamus.",
    ],
    facts: [
      { label: "Adult neurogenesis", sub: "Dentate gyrus, debated but likely", badge: "~700/day", tone: "up" },
      { label: "Nobel Prize 2014", sub: "Place cells and grid cells", badge: "O'Keefe, Mosers", tone: "neutral" },
      { label: "First hit in Alzheimer's", sub: "Volume loss precedes symptoms by", badge: "Years", tone: "down" },
      { label: "Patient H.M.", sub: "After bilateral removal in 1953", badge: "No new memories", tone: "down" },
    ],
    whenDamaged: [
      "Anterograde amnesia: the inability to form new memories, while old ones survive.",
      "Getting lost in familiar places.",
      "Chronic stress and high cortisol shrink hippocampal dendrites.",
      "Thiamine deficiency and prolonged seizures both injure the hippocampus.",
    ],
    vitamins: [
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: [
          "Vitamin D receptors are dense in the hippocampus, where the vitamin promotes nerve growth factor and neurogenesis.",
          "Deficiency is associated with smaller hippocampal volume and faster memory decline.",
        ],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: [
          "Supplies methyl groups for DNA synthesis in newborn hippocampal neurons.",
          "Low folate and high homocysteine are linked to hippocampal atrophy.",
        ],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: [
          "In the VITACOG trial, B vitamins (B12, B6, folate) slowed grey-matter loss in memory regions in people with raised homocysteine.",
        ],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: [
          "Protects hippocampal membranes from the oxidative stress that accompanies ageing and amyloid.",
          "Mixed tocopherols from food outperform synthetic alpha-tocopherol alone.",
        ],
      },
      {
        name: "Vitamin A (retinoic acid)",
        dose: "700–900 µg RAE/day",
        bullets: ["Retinoic acid signalling is required for long-term potentiation, the synaptic strengthening behind memory."],
      },
    ],
    otherNutrients: [
      {
        name: "Omega-3 DHA",
        dose: "250–500 mg/day",
        bullets: ["Increases hippocampal BDNF and supports the birth of new neurons in the dentate gyrus."],
      },
      {
        name: "Flavonoids",
        dose: "Berries, cocoa daily",
        bullets: ["Anthocyanins and cocoa flavanols improve hippocampal blood flow and memory in trials."],
      },
    ],
  },
  {
    id: "amygdala",
    name: "Amygdala",
    latin: "Corpus amygdaloideum",
    category: "limbic",
    view: "medial",
    pos: { x: 560, y: 612 },
    title: "The Amygdala & the Fear Response",
    intro: [
      "The amygdala is an almond-sized cluster of nuclei in front of the hippocampus, deep in each temporal lobe. It tags experiences with emotional significance, above all threat.",
      "It receives a fast, crude sensory feed from the thalamus and a slower, detailed feed from the cortex, which is why you flinch at a stick on the path before you realise it is not a snake.",
    ],
    functions: [
      "Detecting threat and triggering the fear response via the hypothalamus and brainstem.",
      "Fear conditioning: learning which cues predict danger.",
      "Strengthening emotional memories in the hippocampus through noradrenaline.",
      "Reading facial expressions and social signals.",
      "Processing reward as well as fear; it is not only an alarm.",
    ],
    facts: [
      { label: "Size", sub: "Each amygdala", badge: "~1.2 cm", tone: "neutral" },
      { label: "Fast pathway latency", sub: "Thalamus to amygdala", badge: "~12 ms", tone: "up" },
      { label: "PTSD", sub: "Amygdala reactivity to threat cues", badge: "Increased", tone: "down" },
      { label: "Nuclei", sub: "Distinct sub-nuclei", badge: "13", tone: "neutral" },
    ],
    whenDamaged: [
      "Klüver–Bucy syndrome after bilateral damage: fearlessness, hyperorality and placidity.",
      "Patient S.M., with Urbach–Wiethe disease, feels almost no fear of snakes, spiders or horror films.",
      "Difficulty recognising fear in other people's faces.",
      "Overactivity contributes to anxiety disorders, PTSD and phobias.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: [
          "Cofactor for synthesising GABA and serotonin, the two main brakes on amygdala activity.",
          "Low B6 status is associated with higher anxiety; supplementation reduced self-reported anxiety in a 2022 trial.",
        ],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: [
          "Vitamin D deficiency is associated with higher anxiety and depression scores.",
          "Receptors are expressed in the amygdala and may modulate its reactivity.",
        ],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: [
          "Required for making noradrenaline, the chemical that locks in emotional memories.",
          "Also buffers the oxidative stress of chronic stress hormone exposure.",
        ],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Deficiency can present with anxiety, irritability and panic before any physical sign appears."],
      },
    ],
    otherNutrients: [
      {
        name: "Magnesium",
        dose: "310–420 mg/day",
        bullets: ["Blocks NMDA receptors and dampens amygdala over-excitation; low magnesium is linked with anxiety."],
      },
    ],
  },
  {
    id: "cingulate-gyrus",
    name: "Cingulate Gyrus",
    latin: "Gyrus cinguli",
    category: "limbic",
    view: "medial",
    pos: { x: 480, y: 298 },
    title: "The Cingulate Cortex & Emotional Attention",
    intro: [
      "The cingulate gyrus is a belt of cortex that arches over the corpus callosum on the inner face of each hemisphere. 'Cingulum' is Latin for belt.",
      "Its front portion (anterior cingulate) monitors conflict, error and pain; its back portion (posterior cingulate) is a hub of the brain's default-mode network, active when you daydream or recall the past.",
    ],
    functions: [
      "Error detection and conflict monitoring ('that was wrong, adjust').",
      "The emotional, unpleasant dimension of pain.",
      "Motivation and the effort to persist in a task.",
      "Autonomic control of heart rate and blood pressure during emotion.",
      "Self-referential thought and autobiographical memory (posterior cingulate).",
    ],
    facts: [
      { label: "Posterior cingulate", sub: "Metabolism drops early in Alzheimer's", badge: "Early marker", tone: "down" },
      { label: "Anterior cingulate", sub: "Shared target of pain and social rejection", badge: "Overlap", tone: "neutral" },
      { label: "Von Economo neurons", sub: "Found here and in the insula", badge: "Present", tone: "neutral" },
    ],
    whenDamaged: [
      "Akinetic mutism after bilateral anterior cingulate damage: awake but unmotivated to move or speak.",
      "Reduced emotional reaction to pain after cingulotomy, once used for intractable pain.",
      "Posterior cingulate dysfunction is among the earliest imaging changes in Alzheimer's disease.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: [
          "Maintains the cingulum bundle, the white-matter tract running beneath the cingulate gyrus.",
          "Low B12 is associated with reduced cingulate metabolism and depression in older adults.",
        ],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: [
          "Folate deficiency is one of the best-documented nutritional contributors to depression.",
          "L-methylfolate is used as an add-on for treatment-resistant depression.",
        ],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Supports the glucose metabolism of this highly active cortical hub; posterior cingulate hypometabolism is a hallmark of thiamine-sensitive decline."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Low vitamin D is linked to altered cingulate activity in depression and chronic pain."],
      },
    ],
  },
  {
    id: "mammillary-bodies",
    name: "Mammillary Bodies",
    latin: "Corpora mamillaria",
    category: "limbic",
    view: "medial",
    pos: { x: 478, y: 554 },
    title: "The Mammillary Bodies & the Memory Circuit",
    intro: [
      "The mammillary bodies are two pea-sized bumps on the underside of the hypothalamus. Small as they are, they sit on the main highway of memory.",
      "They receive the fornix from the hippocampus and send fibres to the thalamus, closing the Papez circuit that links memory with emotion.",
    ],
    functions: [
      "Relaying hippocampal output to the anterior thalamus in the Papez circuit.",
      "Supporting recollection of events (episodic memory).",
      "Contributing to spatial memory and head-direction signals.",
    ],
    facts: [
      { label: "Diameter", sub: "Each body", badge: "~5 mm", tone: "neutral" },
      { label: "Papez circuit", sub: "Hippocampus → fornix → mammillary → thalamus → cingulate", badge: "Loop", tone: "neutral" },
      { label: "Wernicke–Korsakoff", sub: "Characteristic MRI finding", badge: "Shrunken", tone: "down" },
    ],
    whenDamaged: [
      "Korsakoff syndrome: profound amnesia with confabulation, classically from thiamine deficiency in alcohol dependence.",
      "Wernicke encephalopathy: confusion, eye-movement paralysis and unsteadiness, a medical emergency treated with IV thiamine.",
      "Memory loss after surgery or tumours near the third ventricle.",
    ],
    vitamins: [
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day (treatment: 500 mg IV)",
        bullets: [
          "The mammillary bodies are the most thiamine-sensitive structure in the brain; deficiency causes haemorrhage and shrinkage within days to weeks.",
          "Thiamine is a cofactor for three enzymes of glucose metabolism; without it these neurons starve.",
          "Any person with alcohol dependence or persistent vomiting should receive thiamine before glucose.",
        ],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Supports the myelinated fornix fibres that deliver hippocampal input to the mammillary bodies."],
      },
      {
        name: "Vitamin B3 (niacin)",
        dose: "14–16 mg NE/day",
        bullets: ["Often deficient alongside thiamine in malnutrition; niacin deficiency adds confusion and memory impairment."],
      },
    ],
    otherNutrients: [
      {
        name: "Magnesium",
        dose: "310–420 mg/day",
        bullets: ["Thiamine-dependent enzymes also require magnesium; low magnesium blunts the response to thiamine treatment."],
      },
    ],
  },
  {
    id: "olfactory-bulb",
    name: "Olfactory Bulb",
    latin: "Bulbus olfactorius",
    category: "limbic",
    view: "medial",
    pos: { x: 232, y: 588 },
    title: "The Olfactory Bulb & the Sense of Smell",
    intro: [
      "The olfactory bulb is a slender structure on the floor of the frontal lobe, directly above the nose. Smell is the only sense that bypasses the thalamus and reaches the limbic system directly.",
      "That direct line to the amygdala and hippocampus is why a smell can summon a decades-old memory with its emotion intact.",
    ],
    functions: [
      "First processing of odour signals from receptor neurons in the nose.",
      "Sending smell information straight to the amygdala, piriform cortex and hippocampus.",
      "Contributing to flavour; most of what we call taste is actually smell.",
      "Olfactory neurons regenerate throughout life, roughly every 1–2 months.",
    ],
    facts: [
      { label: "Odour receptor genes", sub: "Largest gene family in humans", badge: "~400", tone: "neutral" },
      { label: "Distinguishable odours", sub: "Estimated", badge: "1 trillion", tone: "up" },
      { label: "Early loss in Parkinson's", sub: "Smell loss precedes tremor by", badge: "Years", tone: "down" },
    ],
    whenDamaged: [
      "Anosmia after head injury, when the olfactory nerve fibres are sheared at the skull base.",
      "Smell loss is an early sign of Parkinson's and Alzheimer's diseases.",
      "Loss of smell in viral infections, including COVID-19, from damage to supporting cells in the nose.",
      "Loss of smell reduces appetite and enjoyment of food and raises the risk of depression.",
    ],
    vitamins: [
      {
        name: "Vitamin A (retinoic acid)",
        dose: "700–900 µg RAE/day",
        bullets: [
          "Retinoic acid drives the regeneration of olfactory receptor neurons.",
          "Vitamin A has been trialled as a treatment for post-viral smell loss.",
        ],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Deficiency is a recognised, reversible cause of reduced smell and taste."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Low vitamin D is associated with impaired olfaction in older adults."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Antioxidant support for olfactory neurons, which are exposed directly to air and pollutants."],
      },
    ],
    otherNutrients: [
      {
        name: "Zinc",
        dose: "8–11 mg/day",
        bullets: ["Zinc deficiency impairs both smell and taste; replacement restores them when levels are low."],
      },
    ],
  },
  {
    id: "fornix",
    name: "Fornix",
    latin: "Fornix",
    category: "limbic",
    view: "medial",
    pos: { x: 420, y: 400 },
    title: "The Fornix: The Memory Highway",
    intro: [
      "The fornix ('arch') is a C-shaped bundle of about 1.2 million axons that sweeps from the hippocampus forward and down to the mammillary bodies and septal area. It is the main output cable of the hippocampus.",
      "Because it carries the memory circuit's traffic in one tight bundle, a small injury here can cause amnesia as severe as losing the hippocampus itself.",
    ],
    functions: [
      "Carrying hippocampal output to the mammillary bodies, thalamus and hypothalamus.",
      "Returning signals from the septal nuclei, which supply acetylcholine to the hippocampus.",
      "Supporting the formation of new episodic memories.",
      "Coordinating hippocampal theta rhythm during exploration and learning.",
    ],
    facts: [
      { label: "Axons", sub: "In each fornix", badge: "~1.2 million", tone: "neutral" },
      { label: "Shape", sub: "Arches under the corpus callosum", badge: "C-shaped", tone: "neutral" },
      { label: "Deep brain stimulation", sub: "Trialled for Alzheimer's disease", badge: "Phase 2", tone: "neutral" },
      { label: "Atrophy", sub: "Predicts conversion to Alzheimer's", badge: "Early", tone: "down" },
    ],
    whenDamaged: [
      "Anterograde amnesia after surgery for colloid cysts of the third ventricle, which sit right beside the fornix.",
      "Fornix damage contributes to the memory loss of Korsakoff syndrome and of multiple sclerosis.",
      "Fornix volume loss on MRI is one of the earliest predictors of Alzheimer's disease.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["The fornix is pure white matter; B12 keeps its myelin intact and deficiency causes measurable white-matter injury."],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Fornix shrinkage is part of the Wernicke–Korsakoff picture and thiamine replacement halts it."],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: ["With B12 and B6, lowers homocysteine and slowed white-matter loss in the memory circuit in the VITACOG trial."],
      },
      {
        name: "Vitamin K",
        dose: "90–120 µg/day",
        bullets: ["Required to make the sphingolipids that form myelin."],
      },
    ],
  },
  {
    id: "entorhinal-cortex",
    name: "Entorhinal Cortex",
    latin: "Cortex entorhinalis (Area 28)",
    category: "limbic",
    view: "medial",
    pos: { x: 700, y: 560 },
    title: "The Entorhinal Cortex: Gateway to Memory",
    intro: [
      "The entorhinal cortex is the strip of cortex on the inner surface of the temporal lobe that feeds the hippocampus. Nearly everything the hippocampus learns arrives through it.",
      "It contains the famous 'grid cells' that tile space in a hexagonal pattern, and it is the very first place where the tau tangles of Alzheimer's disease appear, years before symptoms.",
    ],
    functions: [
      "Funnelling sensory and association cortex input into the hippocampus (the perforant path).",
      "Grid cells: an internal coordinate system for navigation.",
      "Time cells and object cells that stamp memories with context.",
      "Returning consolidated memories from the hippocampus back to the cortex.",
    ],
    facts: [
      { label: "Grid cells", sub: "Nobel Prize to May-Britt and Edvard Moser", badge: "2014", tone: "neutral" },
      { label: "Alzheimer's", sub: "Braak stage I tangles start here", badge: "First hit", tone: "down" },
      { label: "Layers", sub: "Six-layered but with a distinctive layer II island pattern", badge: "6", tone: "neutral" },
    ],
    whenDamaged: [
      "Early Alzheimer's: losing the way in familiar places and failing to lay down new memories.",
      "Lesions disconnect the hippocampus from the rest of the cortex, producing amnesia.",
      "Temporal lobe epilepsy frequently involves the entorhinal cortex.",
    ],
    vitamins: [
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Low vitamin D is associated with faster medial temporal atrophy and higher dementia incidence."],
      },
      {
        name: "Vitamin B12, folate & B6",
        dose: "2.4 µg + 400 µg + 1.5 mg/day",
        bullets: ["Raised homocysteine accelerates medial temporal lobe atrophy; B-vitamin treatment slowed it in people with low omega-3 intake corrected."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Dietary vitamin E intake is associated with slower cognitive decline in prospective cohorts."],
      },
      {
        name: "Vitamin A (retinoic acid)",
        dose: "700–900 µg RAE/day",
        bullets: ["Retinoid signalling supports entorhinal–hippocampal synaptic plasticity."],
      },
    ],
    otherNutrients: [
      {
        name: "Omega-3 DHA & EPA",
        dose: "1 g/day",
        bullets: ["Higher omega-3 status is linked to larger medial temporal volumes; B-vitamins worked better when omega-3 levels were adequate."],
      },
    ],
  },
];
