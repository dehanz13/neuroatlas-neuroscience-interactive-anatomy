import type { Part } from "./types";

export const cerebellumParts: Part[] = [
  {
    id: "cerebellar-cortex",
    name: "Cerebellar Cortex",
    latin: "Cortex cerebelli",
    category: "cerebellum",
    view: "lateral",
    pos: { x: 778, y: 650 },
    title: "The Cerebellar Cortex & Coordination",
    intro: [
      "The cerebellar cortex is a thin, intensely folded sheet wrapped around the cerebellum. Unfolded it would be about a metre long, and it packs in more than half of all the neurons in your brain.",
      "Its circuit is beautifully regular: tiny granule cells feed parallel fibres across the huge dendritic trees of Purkinje cells, which are the only output. This design lets it learn to predict and correct movement in real time.",
    ],
    functions: [
      "Coordinating the timing and force of movements so they are smooth and accurate.",
      "Motor learning: adapting a movement after an error, such as learning to ride a bike.",
      "Balance and eye–head coordination (the vestibulo-ocular reflex).",
      "Timing and prediction in cognition and language, not only movement.",
    ],
    facts: [
      { label: "Neurons", sub: "Mostly granule cells", badge: "~69 billion", tone: "up" },
      { label: "Share of brain neurons", sub: "Despite only 10% of brain volume", badge: "~80%", tone: "up" },
      { label: "Purkinje cells", sub: "Sole output neuron, with up to", badge: "200,000 synapses", tone: "neutral" },
      { label: "Layers", sub: "Molecular, Purkinje, granular", badge: "3", tone: "neutral" },
    ],
    whenDamaged: [
      "Ataxia: clumsy, wide-based gait and intention tremor that worsens as the hand nears its target.",
      "Dysarthria: slurred, scanning speech.",
      "Nystagmus and poor coordination of eye movements.",
      "Chronic alcohol use and gluten sensitivity are common causes of cerebellar degeneration.",
    ],
    vitamins: [
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: [
          "Ataxia with vitamin E deficiency (AVED) is a genetic disorder in which Purkinje cells degenerate without vitamin E; high-dose supplementation halts it.",
          "Fat-malabsorption syndromes cause the same picture and respond to vitamin E replacement.",
        ],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: [
          "The anterior cerebellar vermis is damaged by thiamine deficiency in alcohol dependence, causing a characteristic unsteady gait.",
        ],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Maintains the spinocerebellar tracts that bring position sense to the cerebellum; deficiency causes sensory ataxia."],
      },
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Purkinje cells are GABA neurons; B6 is needed for GABA synthesis. Paradoxically, chronic megadoses of B6 can cause ataxia."],
      },
    ],
    otherNutrients: [
      {
        name: "Coenzyme Q10",
        dose: "100–300 mg/day",
        bullets: ["Primary CoQ10 deficiency presents with cerebellar ataxia and improves with supplementation."],
      },
    ],
  },
  {
    id: "vermis",
    name: "Vermis",
    latin: "Vermis cerebelli",
    category: "cerebellum",
    view: "lateral",
    pos: { x: 682, y: 592 },
    title: "The Vermis: Balance and Posture",
    intro: [
      "The vermis ('worm') is the narrow midline strip that joins the two cerebellar hemispheres. It is the oldest part of the cerebellum, shared with fish and reptiles.",
      "It receives signals from the inner ear and from the spinal cord about the position of the trunk, and it keeps you upright when you stand, walk or ride a wave.",
    ],
    functions: [
      "Balance and posture of the trunk and proximal limbs.",
      "Controlling eye movements together with the flocculonodular lobe.",
      "Regulating gait, the rhythmic alternation of the legs.",
      "Emotional and autonomic modulation (the 'limbic cerebellum').",
    ],
    facts: [
      { label: "Lobules", sub: "Numbered I–X", badge: "10", tone: "neutral" },
      { label: "Most ancient", sub: "Vestibulocerebellum", badge: "Flocculonodular", tone: "neutral" },
      { label: "Alcohol damage", sub: "Preferential target", badge: "Anterior vermis", tone: "down" },
    ],
    whenDamaged: [
      "Truncal ataxia: unable to sit or stand without swaying, even when limb movements are fine.",
      "Medulloblastoma, the commonest malignant childhood brain tumour, arises in the vermis.",
      "Alcoholic cerebellar degeneration selectively shrinks the anterior vermis.",
      "Dandy–Walker malformation: underdevelopment of the vermis with hydrocephalus.",
    ],
    vitamins: [
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: [
          "The vermis is the cerebellar region most sensitive to thiamine deficiency.",
          "Early thiamine replacement in alcohol misuse can prevent permanent gait ataxia.",
        ],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Protects Purkinje cells throughout the cerebellum including the midline vermis."],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: ["Folate before and during early pregnancy reduces the risk of midline brain malformations including cerebellar defects."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Supports the muscle strength and balance the vermis depends on; deficiency increases falls in older adults."],
      },
    ],
  },
  {
    id: "deep-cerebellar-nuclei",
    name: "Deep Cerebellar Nuclei",
    latin: "Nuclei cerebelli",
    category: "cerebellum",
    view: "lateral",
    pos: { x: 704, y: 695 },
    title: "The Deep Nuclei: The Cerebellum's Output",
    intro: [
      "Buried in the white matter of the cerebellum are four pairs of nuclei: dentate, emboliform, globose and fastigial. All the cerebellar cortex does is sculpt their activity.",
      "The dentate nucleus, largest and most lateral, sends the cerebellum's corrections up through the thalamus to the motor and prefrontal cortex.",
    ],
    functions: [
      "Dentate: planning and timing of skilled limb movements and cognitive tasks.",
      "Interposed nuclei (emboliform, globose): correcting ongoing limb movement.",
      "Fastigial: balance, posture and eye movements, projecting to the vestibular nuclei.",
    ],
    facts: [
      { label: "Nuclei per side", sub: "Dentate, emboliform, globose, fastigial", badge: "4", tone: "neutral" },
      { label: "Dentate shape", sub: "A folded, toothed sheet", badge: "Crinkled", tone: "neutral" },
      { label: "Output route", sub: "Superior cerebellar peduncle to thalamus", badge: "Crosses", tone: "neutral" },
    ],
    whenDamaged: [
      "Severe intention tremor and incoordination when the dentate nucleus or its outflow is injured.",
      "Cerebellar mutism after surgery on childhood tumours near the deep nuclei.",
      "Deep nuclei can be affected in metabolic disorders and in some forms of hereditary ataxia.",
    ],
    vitamins: [
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Protects the large, metabolically active projection neurons of the dentate nucleus."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["The cerebellar peduncles that carry deep-nuclear output are heavily myelinated and need B12 for maintenance."],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["High-frequency firing of the deep nuclei depends on thiamine-driven glucose metabolism."],
      },
      {
        name: "Vitamin B2 (riboflavin)",
        dose: "1.1–1.3 mg/day",
        bullets: ["Riboflavin-responsive disorders of mitochondrial fat metabolism can present with ataxia and improve with high-dose riboflavin."],
      },
    ],
  },
  {
    id: "flocculonodular-lobe",
    name: "Flocculonodular Lobe",
    latin: "Lobus flocculonodularis (vestibulocerebellum)",
    category: "cerebellum",
    view: "lateral",
    pos: { x: 630, y: 655 },
    title: "The Flocculonodular Lobe & Balance",
    intro: [
      "The flocculonodular lobe is the small, oldest part of the cerebellum, tucked underneath at the front. It is wired directly to the balance organs of the inner ear, which is why it is also called the vestibulocerebellum.",
      "It keeps your eyes steady on a target while your head moves, and your body upright while the ground moves. It is also the part that makes you seasick.",
    ],
    functions: [
      "The vestibulo-ocular reflex: keeping vision stable during head movement.",
      "Balance and upright posture from inner-ear signals.",
      "Learning to recalibrate eye movements when vision changes (new glasses, for example).",
      "Motion sickness arises when its inputs from eyes and inner ear disagree.",
    ],
    facts: [
      { label: "Evolutionary age", sub: "The oldest cerebellar division", badge: "Archicerebellum", tone: "neutral" },
      { label: "Input", sub: "Direct from the vestibular nerve", badge: "Inner ear", tone: "neutral" },
      { label: "Medulloblastoma", sub: "Commonest site of this childhood tumour", badge: "Nodulus", tone: "down" },
    ],
    whenDamaged: [
      "Vertigo, nystagmus (jerky eye movements) and a staggering gait.",
      "Children with medulloblastoma present with imbalance and morning vomiting.",
      "Inability to adapt eye movements to new visual conditions.",
    ],
    vitamins: [
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Vestibular nuclei and their cerebellar targets are damaged early in thiamine deficiency, producing the nystagmus and unsteadiness of Wernicke encephalopathy."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Essential for Purkinje cell survival throughout the cerebellum; deficiency ataxia begins with balance and eye-movement problems."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Maintains the vestibular and spinocerebellar pathways; deficiency causes unsteadiness that is worse in the dark."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Low vitamin D is associated with benign positional vertigo recurrence and with falls; supplementation reduced recurrence in a 2020 trial."],
      },
    ],
  },
];
