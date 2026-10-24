import type { Part } from "./types";

export const basalParts: Part[] = [
  {
    id: "striatum",
    name: "Striatum",
    latin: "Corpus striatum (caudate & putamen)",
    category: "basal",
    view: "medial",
    pos: { x: 440, y: 392 },
    title: "The Striatum: Habits and Action Selection",
    intro: [
      "The striatum is the input station of the basal ganglia, made of the C-shaped caudate nucleus and the putamen. The two are one structure, split by a band of white matter that gives it a striped look.",
      "The cortex sends it a copy of every intended action; dopamine from the substantia nigra tells it which ones have paid off before. Over time, repeated actions become habits stored here.",
    ],
    functions: [
      "Selecting which movement to release and suppressing competitors.",
      "Learning habits and motor skills through dopamine-driven reinforcement.",
      "Reward prediction: dopamine surges when outcomes beat expectation.",
      "Cognitive flexibility and goal-directed behaviour (caudate).",
    ],
    facts: [
      { label: "Main neuron type", sub: "Medium spiny neurons, share of cells", badge: "~95%", tone: "neutral" },
      { label: "Pathways", sub: "Direct (go) and indirect (no-go)", badge: "2", tone: "neutral" },
      { label: "Huntington's disease", sub: "Caudate atrophy is the hallmark", badge: "Early", tone: "down" },
      { label: "Dopamine receptors", sub: "D1 on direct, D2 on indirect pathway", badge: "D1 / D2", tone: "neutral" },
    ],
    whenDamaged: [
      "Huntington's disease: loss of striatal neurons causes chorea (dancing movements) and cognitive decline.",
      "Obsessive-compulsive disorder involves overactive loops between the orbitofrontal cortex and caudate.",
      "Striatal stroke can cause hemiballismus or dystonia.",
      "Loss of dopamine input (Parkinson's) makes it hard to start movements.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: [
          "Cofactor for DOPA decarboxylase, the enzyme that makes the dopamine the striatum runs on.",
          "Also needed for GABA, the neurotransmitter medium spiny neurons use to signal downstream.",
        ],
      },
      {
        name: "Vitamin B7 (biotin) & B1 (thiamine)",
        dose: "30 µg + 1.2 mg/day",
        bullets: [
          "Biotin-thiamine-responsive basal ganglia disease is a rare genetic condition where high doses of both vitamins reverse striatal swelling.",
        ],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Protects striatal neurons from the oxidative by-products of dopamine metabolism."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Vitamin D boosts tyrosine hydroxylase expression, the rate-limiting enzyme for dopamine."],
      },
    ],
    otherNutrients: [
      {
        name: "Iron",
        dose: "8–18 mg/day",
        bullets: ["Tyrosine hydroxylase is an iron-dependent enzyme; iron deficiency lowers striatal dopamine and contributes to restless legs."],
      },
    ],
  },
  {
    id: "globus-pallidus",
    name: "Globus Pallidus",
    latin: "Globus pallidus",
    category: "basal",
    view: "medial",
    pos: { x: 505, y: 452 },
    title: "The Globus Pallidus: The Brake on Movement",
    intro: [
      "The globus pallidus ('pale globe') lies medial to the putamen. Its internal segment is the main output of the basal ganglia, and it is tonically active, holding the thalamus in check.",
      "Movement happens when the striatum briefly silences the pallidum and releases the thalamus. This is why deep brain stimulation of the pallidum can relieve dystonia and Parkinson's.",
    ],
    functions: [
      "Tonic inhibition of the motor thalamus, preventing unwanted movement.",
      "Releasing the thalamus when the direct pathway fires, allowing a chosen movement.",
      "Scaling the size and speed of movements.",
    ],
    facts: [
      { label: "Segments", sub: "External (GPe) and internal (GPi)", badge: "2", tone: "neutral" },
      { label: "Firing rate", sub: "GPi neurons at rest", badge: "60–80 Hz", tone: "up" },
      { label: "DBS target", sub: "For dystonia and Parkinson's", badge: "GPi", tone: "neutral" },
    ],
    whenDamaged: [
      "Bilateral pallidal damage (carbon monoxide poisoning is the classic cause) produces parkinsonism and apathy.",
      "Overactivity of GPi, as in Parkinson's, locks the thalamus and causes slowness and rigidity.",
      "Underactivity causes excessive movement, as in chorea.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["The pallidum is a GABA-releasing structure; B6 is the cofactor for GABA synthesis."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["The pallidum accumulates iron with age and is prone to oxidative injury that vitamin E helps limit."],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Supports the sustained high-frequency firing of pallidal neurons, which have very high energy demands."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Movement disorders including parkinsonism have been reported with severe B12 deficiency and improve with treatment."],
      },
    ],
  },
  {
    id: "substantia-nigra",
    name: "Substantia Nigra",
    latin: "Substantia nigra",
    category: "basal",
    view: "medial",
    pos: { x: 592, y: 603 },
    title: "The Substantia Nigra & Dopamine",
    intro: [
      "The substantia nigra ('black substance') is a dark band in the midbrain, coloured by neuromelanin in its dopamine neurons. Functionally it belongs to the basal ganglia.",
      "Its compact part supplies dopamine to the striatum; its reticular part is an output nucleus like the pallidum. The loss of the dopamine cells is Parkinson's disease.",
    ],
    functions: [
      "Supplying dopamine to the striatum to enable movement and reinforce actions.",
      "Signalling reward-prediction error: more dopamine when things go better than expected.",
      "Controlling eye movements through its reticular part.",
    ],
    facts: [
      { label: "Dopamine neurons", sub: "In each substantia nigra at birth", badge: "~400,000", tone: "neutral" },
      { label: "Parkinson's threshold", sub: "Symptoms appear after loss of", badge: "~60–80%", tone: "down" },
      { label: "Colour", sub: "From neuromelanin pigment", badge: "Black", tone: "neutral" },
      { label: "Discovered", sub: "Dopamine deficit in Parkinson's", badge: "1960", tone: "neutral" },
    ],
    whenDamaged: [
      "Parkinson's disease: tremor at rest, rigidity, slowness and shuffling gait.",
      "Loss of smell, constipation and REM-sleep behaviour disorder often precede the motor symptoms by years.",
      "MPTP, a contaminant in synthetic drugs, destroys these neurons and causes instant parkinsonism.",
    ],
    vitamins: [
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: [
          "The substantia nigra has one of the highest densities of vitamin D receptors in the brain.",
          "Low vitamin D is consistently associated with Parkinson's risk and severity.",
        ],
      },
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: [
          "Cofactor for the final step of dopamine synthesis.",
          "Caution: high-dose B6 can reduce the effect of levodopa unless it is combined with carbidopa, as modern preparations are.",
        ],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Dietary vitamin E is associated with lower Parkinson's risk; dopamine metabolism produces free radicals that tocopherols quench."],
      },
      {
        name: "Vitamin B3 (niacin)",
        dose: "14–16 mg NE/day",
        bullets: ["Supplies NAD+, which is reduced in nigral neurons in Parkinson's; niacin trials show modest symptom benefit."],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Antioxidant that recycles vitamin E and improves the absorption of levodopa."],
      },
    ],
    otherNutrients: [
      {
        name: "Coenzyme Q10",
        dose: "100–300 mg/day",
        bullets: ["Supports mitochondrial complex I, which is impaired in nigral neurons in Parkinson's disease."],
      },
    ],
  },
  {
    id: "subthalamic-nucleus",
    name: "Subthalamic Nucleus",
    latin: "Nucleus subthalamicus",
    category: "basal",
    view: "medial",
    pos: { x: 572, y: 522 },
    title: "The Subthalamic Nucleus: The Stop Signal",
    intro: [
      "The subthalamic nucleus is a lens-shaped cluster of about half a million neurons below the thalamus. It is the only excitatory nucleus of the basal ganglia.",
      "It acts as a stop signal: when fired by the cortex it boosts the pallidum and halts movement. It is the most common target for deep brain stimulation in Parkinson's disease.",
    ],
    functions: [
      "Rapid braking of movement via the 'hyperdirect' pathway from the frontal cortex.",
      "Increasing the output of the pallidum in the indirect pathway.",
      "Impulse control: it also brakes impulsive decisions.",
    ],
    facts: [
      { label: "Neurons", sub: "Per nucleus", badge: "~550,000", tone: "neutral" },
      { label: "Neurotransmitter", sub: "The only glutamate nucleus in the loop", badge: "Glutamate", tone: "neutral" },
      { label: "DBS target", sub: "First-line in Parkinson's since", badge: "1990s", tone: "neutral" },
    ],
    whenDamaged: [
      "Hemiballismus: violent flinging movements of one side of the body, classically after a small stroke here.",
      "Overactivity in Parkinson's drives rigidity and slowness; stimulation silences it and restores movement.",
      "Stimulation can sometimes cause impulsivity or mood change, showing its non-motor role.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Balances glutamate and GABA; the subthalamic nucleus is tightly controlled by GABA from the external pallidum."],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Supports the high-frequency burst firing of these glutamate neurons."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Part of the overall vitamin D support for the basal ganglia circuit in Parkinson's disease."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Maintains the hyperdirect pathway fibres that bring the cortical stop command."],
      },
    ],
    otherNutrients: [
      {
        name: "Magnesium",
        dose: "310–420 mg/day",
        bullets: ["Natural NMDA-receptor blocker that limits glutamate excitotoxicity in this nucleus."],
      },
    ],
  },
  {
    id: "nucleus-accumbens",
    name: "Nucleus Accumbens",
    latin: "Nucleus accumbens",
    category: "basal",
    view: "medial",
    pos: { x: 395, y: 522 },
    title: "The Nucleus Accumbens & Reward",
    intro: [
      "The nucleus accumbens is the ventral, emotional part of the striatum. It sits where the caudate and putamen meet at the front, close to the septum.",
      "It is the hub of the reward system. Dopamine released here from the midbrain is what makes food, music, social approval and addictive drugs feel worth pursuing.",
    ],
    functions: [
      "Translating motivation into action: 'wanting'.",
      "Reward learning and the anticipation of pleasure.",
      "Linking emotion (from amygdala) and memory (from hippocampus) to goals.",
      "Placebo analgesia and the pleasure of music both involve this nucleus.",
    ],
    facts: [
      { label: "Dopamine source", sub: "Ventral tegmental area", badge: "VTA", tone: "neutral" },
      { label: "Drug effect", sub: "Cocaine raises accumbens dopamine", badge: "× 3–5", tone: "up" },
      { label: "Sub-regions", sub: "Core (action) and shell (motivation)", badge: "2", tone: "neutral" },
    ],
    whenDamaged: [
      "Anhedonia and loss of motivation, seen in depression and after damage to the ventral striatum.",
      "Addiction rewires accumbens synapses so that drug cues dominate other rewards.",
      "Apathy after small strokes in the ventral striatum.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Cofactor for both dopamine and serotonin synthesis, the twin currencies of reward and mood."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Regulates dopamine turnover in the ventral striatum; deficiency is linked to low mood and anhedonia."],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: ["Needed for tetrahydrobiopterin recycling, a cofactor of dopamine synthesis; low folate blunts antidepressant response."],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Modulates dopamine release in the accumbens and may reduce drug reward in animal studies."],
      },
    ],
    otherNutrients: [
      {
        name: "Omega-3 fatty acids",
        dose: "1 g/day",
        bullets: ["Omega-3 deficiency reduces accumbens dopamine signalling and is linked to low motivation."],
      },
    ],
  },
  {
    id: "ventral-tegmental-area",
    name: "Ventral Tegmental Area",
    latin: "Area tegmentalis ventralis (VTA)",
    category: "basal",
    view: "medial",
    pos: { x: 540, y: 660 },
    title: "The VTA: Source of the Reward Signal",
    intro: [
      "The ventral tegmental area is a cluster of dopamine neurons in the midbrain, next to the substantia nigra. Anatomically it is brainstem, but functionally it belongs with the basal ganglia's reward circuit.",
      "Its axons run to the nucleus accumbens (the mesolimbic pathway) and the prefrontal cortex (the mesocortical pathway). Every addictive drug, from nicotine to heroin, ultimately raises dopamine release from VTA neurons.",
    ],
    functions: [
      "Dopamine release that signals reward prediction error: better than expected.",
      "Motivation and effort: deciding whether a goal is worth working for.",
      "Reinforcement learning in the nucleus accumbens.",
      "Supplying dopamine to the prefrontal cortex for working memory.",
      "Social bonding and maternal behaviour, with oxytocin.",
    ],
    facts: [
      { label: "Dopamine neurons", sub: "In the human VTA", badge: "~ 100,000", tone: "neutral" },
      { label: "Pathways", sub: "Mesolimbic and mesocortical", badge: "2", tone: "neutral" },
      { label: "Drugs of abuse", sub: "All raise VTA-driven dopamine", badge: "Common path", tone: "down" },
      { label: "Discovered as reward centre", sub: "Olds & Milner self-stimulation", badge: "1954", tone: "neutral" },
    ],
    whenDamaged: [
      "Loss of motivation and pleasure (apathy, anhedonia).",
      "Addiction rewires VTA synapses so drug cues outcompete natural rewards.",
      "Schizophrenia involves excess mesolimbic dopamine; antipsychotics block its receptors.",
      "Parkinson's disease spares the VTA more than the substantia nigra, but loss here causes depression and apathy.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Cofactor for aromatic amino acid decarboxylase, the final step in making dopamine."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["VTA dopamine neurons express vitamin D receptors; the vitamin regulates tyrosine hydroxylase and protects against dopaminergic toxins in animal models."],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Protects dopamine neurons from the oxidative by-products of dopamine turnover."],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: ["Needed to recycle tetrahydrobiopterin, the cofactor of tyrosine hydroxylase."],
      },
    ],
    otherNutrients: [
      {
        name: "Iron",
        dose: "8–18 mg/day",
        bullets: ["Tyrosine hydroxylase is iron-dependent; iron deficiency blunts dopamine synthesis and motivation."],
      },
    ],
  },
];
