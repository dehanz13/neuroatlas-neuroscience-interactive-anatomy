import type { Part } from "./types";

export const brainstemParts: Part[] = [
  {
    id: "midbrain",
    name: "Midbrain",
    latin: "Mesencephalon",
    category: "brainstem",
    view: "medial",
    pos: { x: 560, y: 625 },
    title: "The Midbrain: Eyes, Ears & Alertness",
    intro: [
      "The midbrain is the shortest segment of the brainstem, joining the diencephalon above to the pons below. The cerebral aqueduct runs through it.",
      "Its roof carries four bumps, the colliculi, which orient the eyes and head toward sights and sounds. Its floor carries the cerebral peduncles, the red nucleus and the substantia nigra.",
    ],
    functions: [
      "Reflex orienting of eyes and head toward sudden sights (superior colliculus) and sounds (inferior colliculus).",
      "Eye movement and pupil control via cranial nerves III and IV.",
      "Housing the dopamine neurons of the substantia nigra and ventral tegmental area.",
      "Pain modulation from the periaqueductal grey, the body's own opioid system.",
      "Arousal, as the upper part of the reticular activating system.",
    ],
    facts: [
      { label: "Length", sub: "Approximate", badge: "~2 cm", tone: "neutral" },
      { label: "Cranial nerves", sub: "Oculomotor (III) and trochlear (IV)", badge: "2", tone: "neutral" },
      { label: "Periaqueductal grey", sub: "Stimulation produces", badge: "Analgesia", tone: "up" },
    ],
    whenDamaged: [
      "Weber syndrome: a midbrain stroke causing a drooping eyelid and dilated pupil on one side with weakness on the other.",
      "Parinaud syndrome: inability to look up, from pressure on the colliculi.",
      "Parkinson's disease, from loss of nigral dopamine neurons.",
      "Severe midbrain injury impairs consciousness.",
    ],
    vitamins: [
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: [
          "The periaqueductal grey and oculomotor nuclei are damaged in Wernicke encephalopathy, causing the characteristic eye-movement paralysis.",
        ],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Supports the midbrain dopamine neurons; deficiency is linked with Parkinson's risk."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Keeps the cerebral peduncles, which carry every descending motor fibre, myelinated."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Antioxidant protection for the iron- and melanin-rich nuclei of the midbrain."],
      },
    ],
  },
  {
    id: "pons",
    name: "Pons",
    latin: "Pons",
    category: "brainstem",
    view: "medial",
    pos: { x: 560, y: 705 },
    title: "The Pons: The Bridge",
    intro: [
      "The pons ('bridge') is the bulging middle segment of the brainstem. Its name comes from the thick band of fibres that crosses its front and connects the cerebrum to the cerebellum.",
      "It carries the nerves of facial sensation, facial movement, hearing and balance, and it contains the circuits that generate REM sleep and set the rhythm of breathing.",
    ],
    functions: [
      "Relaying motor plans from the cortex to the cerebellum via the pontine nuclei.",
      "Facial sensation (V), facial expression (VII), eye abduction (VI), hearing and balance (VIII).",
      "Generating REM sleep and the muscle paralysis that accompanies dreaming.",
      "Fine-tuning the breathing rhythm set by the medulla.",
      "Housing the locus coeruleus, the brain's main source of noradrenaline.",
    ],
    facts: [
      { label: "Pontine nuclei neurons", sub: "Relaying to cerebellum", badge: "~20 million", tone: "neutral" },
      { label: "Locus coeruleus", sub: "Neurons that supply the whole cortex with noradrenaline", badge: "~50,000", tone: "neutral" },
      { label: "Cranial nerves", sub: "V, VI, VII, VIII", badge: "4", tone: "neutral" },
    ],
    whenDamaged: [
      "Locked-in syndrome after a basilar artery stroke: fully conscious but able to move only the eyes.",
      "Central pontine myelinolysis when low sodium is corrected too fast.",
      "Facial weakness, double vision and vertigo from focal lesions.",
      "REM-sleep behaviour disorder, acting out dreams, when the paralysis circuit fails.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["The pons is dense white matter; B12 maintains the myelin that keeps its crossing fibres fast."],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Thiamine deficiency affects pontine vestibular and abducens nuclei, causing the unsteadiness and double vision of Wernicke encephalopathy."],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Essential for the locus coeruleus to convert dopamine into noradrenaline."],
      },
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Cofactor for GABA and glycine signalling that paralyses muscles safely during REM sleep."],
      },
    ],
  },
  {
    id: "medulla-oblongata",
    name: "Medulla Oblongata",
    latin: "Medulla oblongata",
    category: "brainstem",
    view: "medial",
    pos: { x: 575, y: 835 },
    title: "The Medulla: Breathing and Heartbeat",
    intro: [
      "The medulla is the lowest part of the brainstem, continuous with the spinal cord at the foramen magnum. It is about three centimetres long and absolutely essential to life.",
      "It contains the respiratory and cardiovascular centres, the swallowing and vomiting reflexes, and the point where the motor fibres cross over so that each hemisphere controls the opposite side of the body.",
    ],
    functions: [
      "Generating the breathing rhythm in the pre-Bötzinger complex.",
      "Controlling heart rate and blood pressure through the vagus nerve and sympathetic outflow.",
      "Reflexes: swallowing, coughing, sneezing, vomiting, gagging.",
      "Crossing of the corticospinal tracts (pyramidal decussation).",
      "Cranial nerves IX, X, XI and XII: taste, speech, swallowing, tongue movement.",
    ],
    facts: [
      { label: "Resting breathing rate", sub: "Set here", badge: "12–20/min", tone: "neutral" },
      { label: "Pyramidal decussation", sub: "Motor fibres crossing", badge: "~90%", tone: "neutral" },
      { label: "Cranial nerves", sub: "IX, X, XI, XII", badge: "4", tone: "neutral" },
      { label: "Brain death", sub: "Defined by loss of brainstem reflexes", badge: "Medulla", tone: "down" },
    ],
    whenDamaged: [
      "Wallenberg (lateral medullary) syndrome: vertigo, hoarseness, difficulty swallowing and crossed sensory loss.",
      "Respiratory arrest; opioid overdose kills by silencing the medullary breathing centre.",
      "Chiari malformation and tumours at the foramen magnum compress the medulla.",
      "Congenital central hypoventilation: the breathing centre fails during sleep.",
    ],
    vitamins: [
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Supports the ceaseless firing of medullary respiratory neurons; thiamine deficiency can cause fatal cardiovascular collapse (wet beriberi)."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Maintains the myelin of the pyramidal tracts as they cross in the medulla."],
      },
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Required for GABA and glycine, which pattern the breathing rhythm; severe B6 deficiency causes seizures and apnoea in infants."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Supports the vagus-mediated balance of heart rate; deficiency is associated with lower heart-rate variability."],
      },
    ],
  },
  {
    id: "reticular-formation",
    name: "Reticular Formation",
    latin: "Formatio reticularis",
    category: "brainstem",
    view: "medial",
    pos: { x: 580, y: 790 },
    title: "The Reticular Formation & Consciousness",
    intro: [
      "The reticular formation is a loose net of neurons running through the core of the whole brainstem. It is not a single nucleus but a system, and it decides whether you are awake.",
      "Its ascending arm, the reticular activating system, drives the thalamus and cortex into wakefulness; its descending arm tunes muscle tone, posture and pain.",
    ],
    functions: [
      "Arousal and maintaining wakefulness through the ascending reticular activating system.",
      "Sleep–wake switching, together with the hypothalamus.",
      "Regulating muscle tone and posture through reticulospinal tracts.",
      "Filtering sensory input so only novel or important signals reach awareness (habituation).",
      "Housing the serotonin (raphe) and noradrenaline (locus coeruleus) systems.",
    ],
    facts: [
      { label: "Extent", sub: "From midbrain to medulla", badge: "Entire brainstem", tone: "neutral" },
      { label: "Coma", sub: "Results from damage to the", badge: "Upper RAS", tone: "down" },
      { label: "Anaesthesia", sub: "General anaesthetics act partly here", badge: "Target", tone: "neutral" },
    ],
    whenDamaged: [
      "Coma or persistent vegetative state after damage to the upper brainstem.",
      "Narcolepsy involves loss of hypothalamic orexin neurons that normally drive the reticular system.",
      "Spasticity when descending reticulospinal control of muscle tone is lost.",
    ],
    vitamins: [
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["The confusion and reduced consciousness of Wernicke encephalopathy reflect thiamine-starved reticular neurons."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Severe deficiency causes fatigue, lethargy and slowed arousal that resolve with replacement."],
      },
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Cofactor for serotonin synthesis in the raphe nuclei, which regulate sleep, mood and pain."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Low vitamin D is associated with excessive daytime sleepiness and poor sleep quality."],
      },
    ],
    otherNutrients: [
      {
        name: "Iron",
        dose: "8–18 mg/day",
        bullets: ["Iron deficiency causes fatigue and poor concentration partly through reduced monoamine synthesis in brainstem nuclei."],
      },
    ],
  },
  {
    id: "periaqueductal-grey",
    name: "Periaqueductal Grey",
    latin: "Substantia grisea centralis (PAG)",
    category: "brainstem",
    view: "medial",
    pos: { x: 655, y: 585 },
    title: "The Periaqueductal Grey & Pain Control",
    intro: [
      "The periaqueductal grey is a sleeve of grey matter wrapped around the cerebral aqueduct in the midbrain. It is the headquarters of the body's own pain-killing system.",
      "In 1969 David Reynolds showed that stimulating it let rats undergo surgery without anaesthesia. It works by releasing endogenous opioids and by sending descending signals that block pain at the spinal cord.",
    ],
    functions: [
      "Descending pain modulation: dialling pain up or down at the spinal cord.",
      "Releasing endorphins and enkephalins; the target of opioid drugs and of placebo analgesia.",
      "Defensive behaviour: freezing (ventral PAG) or fight-and-flight (dorsal PAG).",
      "Vocalisation, including crying and laughter.",
      "Controlling heart rate and blood pressure during threat.",
    ],
    facts: [
      { label: "Stimulation analgesia", sub: "First shown by Reynolds", badge: "1969", tone: "neutral" },
      { label: "Opioid receptors", sub: "Among the densest in the brain", badge: "µ-receptor", tone: "neutral" },
      { label: "Placebo", sub: "Placebo pain relief is blocked by naloxone, via the PAG", badge: "Real", tone: "up" },
    ],
    whenDamaged: [
      "Damage removes the brain's ability to suppress pain, and can cause chronic central pain.",
      "Involved in migraine: PAG dysfunction is seen between attacks.",
      "Panic attacks can be triggered by dorsal PAG activation.",
      "Lesions in cats and rats abolish defensive responses.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["B12 has analgesic effects in clinical trials of neuropathic and low-back pain, partly through enhancing descending inhibition."],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["The enzyme that activates endorphins and enkephalins (PAM) requires vitamin C; high-dose vitamin C reduced opioid needs after surgery in trials."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Deficiency is common in chronic pain; correcting it improves pain scores in deficient patients."],
      },
      {
        name: "Vitamin B1 & B6",
        dose: "1.2 mg + 1.5 mg/day",
        bullets: ["The classic 'neurotropic' B-vitamin combination with B12 used for painful neuropathies."],
      },
    ],
  },
  {
    id: "locus-coeruleus",
    name: "Locus Coeruleus",
    latin: "Locus caeruleus ('blue spot')",
    category: "brainstem",
    view: "medial",
    pos: { x: 655, y: 655 },
    title: "The Locus Coeruleus & Alertness",
    intro: [
      "The locus coeruleus is a tiny blue-tinged nucleus in the upper pons, named for the pigment in its cells. Only about 50,000 neurons strong, it supplies nearly the whole brain with noradrenaline.",
      "It is the brain's alarm and attention dial: quiet in sleep, steady when calm, and firing in bursts when something new or threatening appears. It is also the very first place where Alzheimer's tau pathology appears, decades before memory loss.",
    ],
    functions: [
      "Arousal and vigilance: waking the cortex up.",
      "Attention: boosting signal-to-noise for important stimuli.",
      "The stress response, together with the hypothalamus and adrenal glands.",
      "Memory consolidation, especially of emotional events.",
      "Pain modulation and control of REM sleep.",
    ],
    facts: [
      { label: "Neurons", sub: "Per locus coeruleus", badge: "~50,000", tone: "neutral" },
      { label: "Targets", sub: "Supplies noradrenaline to the", badge: "Entire cortex", tone: "up" },
      { label: "Alzheimer's", sub: "Earliest tau 'pretangles' appear here", badge: "Decades early", tone: "down" },
      { label: "Pigment", sub: "Neuromelanin, visible on MRI", badge: "Blue-black", tone: "neutral" },
    ],
    whenDamaged: [
      "Loss of neurons is an early event in both Alzheimer's and Parkinson's disease.",
      "Reduced alertness, poor attention and depression.",
      "REM-sleep behaviour disorder when its control of muscle tone fails.",
      "Chronic stress overdrives it, contributing to anxiety and PTSD.",
    ],
    vitamins: [
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Dopamine β-hydroxylase, the enzyme that makes noradrenaline, needs vitamin C as a cofactor; the locus coeruleus keeps very high ascorbate levels."],
      },
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Required upstream to make dopamine, the precursor of noradrenaline."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Protects these pigmented, iron-rich neurons from oxidative stress."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Supports noradrenergic neuron survival and reduces neuroinflammation in animal models."],
      },
    ],
    otherNutrients: [
      {
        name: "Copper",
        dose: "0.9 mg/day",
        bullets: ["Dopamine β-hydroxylase is a copper enzyme; copper deficiency lowers noradrenaline."],
      },
    ],
  },
  {
    id: "raphe-nuclei",
    name: "Raphe Nuclei",
    latin: "Nuclei raphes",
    category: "brainstem",
    view: "medial",
    pos: { x: 655, y: 745 },
    title: "The Raphe Nuclei & Serotonin",
    intro: [
      "The raphe nuclei are a thin chain of cell groups along the midline seam ('raphe') of the brainstem, from midbrain to medulla. They are the brain's main source of serotonin.",
      "The upper raphe sends serotonin up to the whole forebrain, shaping mood, sleep, appetite and impulse control; the lower raphe sends it down to the spinal cord to damp pain. SSRIs work by prolonging the serotonin these neurons release.",
    ],
    functions: [
      "Serotonin supply to the cortex, limbic system and basal ganglia.",
      "Mood regulation and patience: waiting for delayed rewards.",
      "Sleep–wake cycling; raphe neurons fall silent in REM sleep.",
      "Appetite and satiety signalling.",
      "Descending pain suppression at the spinal cord.",
    ],
    facts: [
      { label: "Serotonin neurons", sub: "In the human raphe", badge: "~250,000", tone: "neutral" },
      { label: "Brain's serotonin", sub: "Share made in the raphe", badge: "Nearly all", tone: "neutral" },
      { label: "Body's serotonin", sub: "Made in the gut instead", badge: "~90%", tone: "neutral" },
      { label: "SSRIs", sub: "Act on serotonin released from raphe terminals", badge: "Target", tone: "neutral" },
    ],
    whenDamaged: [
      "Depression and anxiety are associated with altered raphe serotonin signalling.",
      "Loss of raphe neurons in Parkinson's disease contributes to depression and sleep disturbance.",
      "Sudden infant death syndrome has been linked to abnormal medullary serotonin neurons.",
      "Serotonin syndrome occurs when drugs overload the system: agitation, fever, muscle twitching.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Cofactor for converting 5-hydroxytryptophan into serotonin; B6 deficiency lowers serotonin and worsens mood."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Vitamin D switches on the gene for tryptophan hydroxylase 2, the enzyme that starts serotonin synthesis in the brain."],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: ["Maintains tetrahydrobiopterin, the cofactor of tryptophan hydroxylase; folate-deficient patients respond poorly to SSRIs."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Needed for the methylation cycle that supports serotonin turnover; deficiency presents with depression and fatigue."],
      },
    ],
    otherNutrients: [
      {
        name: "Tryptophan & omega-3",
        dose: "Food sources daily",
        bullets: ["Tryptophan is the raw material for serotonin; omega-3 EPA improves serotonin release and receptor function."],
      },
    ],
  },
];
