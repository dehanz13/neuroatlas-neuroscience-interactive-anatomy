import type { Part } from "./types";

export const cortexParts: Part[] = [
  {
    id: "frontal-lobe",
    name: "Frontal Lobe",
    latin: "Lobus frontalis",
    category: "cortex",
    view: "lateral",
    pos: { x: 290, y: 330 },
    title: "The Frontal Lobe & Executive Control",
    intro: [
      "The frontal lobe is the largest lobe of the human brain, filling the front third of each hemisphere in front of the central sulcus. It is the part of the cortex that expanded most during human evolution.",
      "It is where plans are made, movements are initiated, speech is produced and behaviour is judged against its consequences. It is also the last region to finish maturing, typically in the mid-twenties.",
    ],
    functions: [
      "Voluntary movement, planned and launched from the motor areas at its back edge.",
      "Speech production from Broca's area in the lower left frontal gyrus.",
      "Working memory, attention and the ability to switch between tasks.",
      "Impulse control, judgement and social behaviour.",
      "Motivation and the emotional drive to act.",
    ],
    facts: [
      { label: "Share of cortical surface", sub: "Largest of the four lobes", badge: "~35%", tone: "neutral" },
      { label: "Maturation complete", sub: "Myelination of prefrontal fibres", badge: "~25 yrs", tone: "neutral" },
      { label: "Broca's area", sub: "Speech production, left hemisphere", badge: "Area 44/45", tone: "neutral" },
      { label: "Blood supply", sub: "Anterior and middle cerebral arteries", badge: "ACA / MCA", tone: "neutral" },
    ],
    whenDamaged: [
      "Personality change, apathy or disinhibition, famously seen in railway worker Phineas Gage after an iron rod passed through his frontal lobe in 1848.",
      "Broca's aphasia: the person understands language but struggles to produce fluent speech.",
      "Weakness on the opposite side of the body when the motor strip is involved.",
      "Trouble planning, organising and finishing tasks (dysexecutive syndrome).",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: [
          "Needed to build and maintain the myelin that insulates the long frontal fibre bundles.",
          "Deficiency is a reversible cause of slowed thinking, apathy and poor concentration, especially in older adults and people on plant-based diets or metformin.",
          "Keeps homocysteine low; high homocysteine is linked to frontal white-matter damage.",
        ],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: [
          "Works with B12 in one-carbon metabolism, supplying methyl groups for neurotransmitters and DNA repair in cortical neurons.",
          "Low folate is associated with poorer executive function and with depression that responds less well to treatment.",
        ],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: [
          "Vitamin D receptors are expressed throughout the prefrontal cortex.",
          "Low levels are associated with slower executive performance; correcting deficiency is part of standard cognitive care.",
        ],
      },
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: [
          "Cofactor for making dopamine, the neurotransmitter the frontal lobe relies on for attention and motivation.",
          "Also required for GABA synthesis, which keeps frontal circuits from over-firing.",
        ],
      },
    ],
    otherNutrients: [
      {
        name: "Omega-3 DHA",
        dose: "250–500 mg/day",
        bullets: [
          "DHA is the most abundant fatty acid in prefrontal membranes and supports synaptic flexibility.",
          "Higher intake is associated with better executive function across the lifespan.",
        ],
      },
    ],
  },
  {
    id: "prefrontal-cortex",
    name: "Prefrontal Cortex",
    latin: "Cortex praefrontalis",
    category: "cortex",
    view: "lateral",
    pos: { x: 200, y: 470 },
    title: "The Prefrontal Cortex & Decision-Making",
    intro: [
      "The prefrontal cortex is the very front of the frontal lobe, sitting behind the forehead. It is the brain's chief executive: it holds goals in mind, weighs options and decides what to do next.",
      "Its three main territories each specialise. The dorsolateral part handles reasoning and working memory, the ventromedial part attaches value and emotion to choices, and the orbitofrontal part (above the eye sockets) tracks reward and punishment.",
    ],
    functions: [
      "Working memory: keeping a phone number in mind while you dial it.",
      "Decision-making, weighing risk against reward.",
      "Emotional regulation, through dense connections to the amygdala.",
      "Planning for the future and delaying gratification.",
      "Theory of mind: imagining what other people are thinking.",
    ],
    facts: [
      { label: "Working memory capacity", sub: "Items held at once", badge: "4 ± 1", tone: "neutral" },
      { label: "Dopamine dependence", sub: "D1 receptors tune working memory", badge: "High", tone: "up" },
      { label: "Sleep deprivation effect", sub: "Prefrontal metabolism drops first", badge: "↓ 10–20%", tone: "down" },
      { label: "Last to mature", sub: "Synaptic pruning continues into", badge: "20s", tone: "neutral" },
    ],
    whenDamaged: [
      "Poor judgement and risky choices, even when the person can describe the right choice.",
      "Difficulty regulating emotions and social behaviour.",
      "Perseveration: getting stuck repeating the same response.",
      "Chronic stress, sleep loss and alcohol all temporarily impair prefrontal function before any permanent damage occurs.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: [
          "Required by the enzyme that converts L-DOPA to dopamine, the prefrontal cortex's key signal for working memory.",
          "Low B6 status is associated with poorer attention and mood.",
        ],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: [
          "Neurons hold some of the highest vitamin C concentrations in the body and use it to convert dopamine into noradrenaline.",
          "Noradrenaline sharpens prefrontal signal-to-noise during attention.",
        ],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: [
          "Regulates the expression of genes for nerve growth factors in prefrontal neurons.",
          "Deficiency is linked with slower processing speed and executive deficits in observational studies.",
        ],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: [
          "Protects the fat-rich prefrontal membranes from oxidative damage.",
          "Diets rich in natural vitamin E (nuts, seeds, oils) are associated with slower cognitive decline.",
        ],
      },
    ],
    otherNutrients: [
      {
        name: "Omega-3 DHA & EPA",
        dose: "1 g/day combined",
        bullets: [
          "Membrane DHA supports the rapid remodelling of prefrontal synapses needed for learning.",
          "EPA-rich supplements have modest evidence for mood support.",
        ],
      },
    ],
  },
  {
    id: "sensorimotor-cortex",
    name: "Sensorimotor Cortex",
    latin: "Gyri precentralis et postcentralis",
    category: "cortex",
    view: "lateral",
    pos: { x: 470, y: 230 },
    title: "The Motor & Somatosensory Strips",
    intro: [
      "Two parallel ridges run over the top of the brain either side of the central sulcus. The one in front is the primary motor cortex; the one behind is the primary somatosensory cortex.",
      "Both are organised as a map of the body, the famous 'homunculus'. Body parts with fine control or sensitivity, such as the hands, lips and tongue, take up a disproportionate share of the strip.",
    ],
    functions: [
      "Motor cortex sends commands down the corticospinal tract to move muscles on the opposite side of the body.",
      "Somatosensory cortex receives touch, pressure, temperature, pain and proprioception from the opposite side.",
      "Premotor and supplementary motor areas in front of the strip plan and sequence movements.",
      "Both strips are highly plastic: their maps reorganise with practice, injury or amputation.",
    ],
    facts: [
      { label: "Corticospinal fibres", sub: "Per side, roughly", badge: "1 million", tone: "neutral" },
      { label: "Conduction speed", sub: "Fastest myelinated motor axons", badge: "~70 m/s", tone: "up" },
      { label: "Crossing point", sub: "Pyramidal decussation in the medulla", badge: "~90%", tone: "neutral" },
      { label: "Hand area share", sub: "Of the motor homunculus", badge: "~30%", tone: "neutral" },
    ],
    whenDamaged: [
      "Stroke in the motor strip causes contralateral weakness (hemiparesis), often the face and arm before the leg.",
      "Somatosensory damage causes numbness and loss of position sense on the opposite side.",
      "Focal seizures starting here produce a 'Jacksonian march' of twitching that spreads across the body map.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: [
          "Essential for the myelin sheath on the long corticospinal axons that travel from the motor strip to the spinal cord.",
          "B12 deficiency causes 'subacute combined degeneration', with weakness, clumsiness and loss of position sense.",
        ],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: [
          "Fuels the high glucose demand of large motor neurons via pyruvate dehydrogenase.",
          "Deficiency (beriberi) produces peripheral weakness and sensory loss that mimics cortical disease.",
        ],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: [
          "Supports the muscles the motor cortex drives: deficiency causes proximal weakness and falls.",
          "Vitamin D receptors are found on motor neurons and in muscle fibres.",
        ],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: [
          "Severe deficiency (fat malabsorption, abetalipoproteinaemia) damages large sensory fibres and causes loss of proprioception.",
        ],
      },
    ],
  },
  {
    id: "parietal-lobe",
    name: "Parietal Lobe",
    latin: "Lobus parietalis",
    category: "cortex",
    view: "lateral",
    pos: { x: 620, y: 300 },
    title: "The Parietal Lobe & Spatial Awareness",
    intro: [
      "The parietal lobe sits at the top and back of each hemisphere, behind the central sulcus and above the temporal lobe. It builds a unified picture of your body and the space around it.",
      "It merges touch, vision and proprioception so that you can reach accurately for a cup, read a map or know where your hand is with your eyes closed.",
    ],
    functions: [
      "Integration of touch and body position into a body map.",
      "Spatial attention and navigation ('where' pathway of vision).",
      "Guidance of reaching and grasping.",
      "Number sense and mental arithmetic (intraparietal sulcus).",
      "Reading and writing, via the left angular gyrus.",
    ],
    facts: [
      { label: "Dominant hemisphere", sub: "Language-related parietal functions", badge: "Left", tone: "neutral" },
      { label: "Angular gyrus", sub: "Reading, writing, calculation", badge: "Area 39", tone: "neutral" },
      { label: "Blood supply", sub: "Middle cerebral artery, mostly", badge: "MCA", tone: "neutral" },
    ],
    whenDamaged: [
      "Hemispatial neglect after right-sided damage: the person ignores the left half of the world, even the left half of their own plate.",
      "Gerstmann syndrome after left-sided damage: trouble with writing, calculation, finger naming and left–right confusion.",
      "Apraxia: inability to perform learned skilled movements despite normal strength.",
      "Astereognosis: inability to recognise objects by touch alone.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: [
          "Maintains the white-matter pathways that carry sensory information up to parietal cortex.",
          "Deficiency disrupts proprioception, producing clumsiness and unsteadiness in the dark.",
        ],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: [
          "Supports the heavy energy metabolism of association cortex.",
          "Thiamine-dependent enzymes are reduced in the parietal cortex in Alzheimer's disease.",
        ],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: [
          "Antioxidant protection for lipid-rich cortical membranes.",
          "Parietal hypometabolism is an early sign of Alzheimer's; dietary vitamin E is associated with lower risk.",
        ],
      },
      {
        name: "Vitamin K",
        dose: "90–120 µg/day",
        bullets: [
          "Needed to make sphingolipids, structural fats concentrated in cortical and white-matter membranes.",
          "Higher vitamin K status is associated with better cognitive performance in older adults.",
        ],
      },
    ],
  },
  {
    id: "temporal-lobe",
    name: "Temporal Lobe",
    latin: "Lobus temporalis",
    category: "cortex",
    view: "lateral",
    pos: { x: 470, y: 560 },
    title: "The Temporal Lobe, Hearing & Meaning",
    intro: [
      "The temporal lobe lies beneath the lateral sulcus, roughly behind your temples and ears. Its surface processes sound; its inner edge houses the hippocampus and amygdala.",
      "It is where sounds become words, faces become people and sights become recognisable objects. It is also the lobe most often involved in epilepsy.",
    ],
    functions: [
      "Hearing, in the primary auditory cortex on the superior temporal gyrus.",
      "Language comprehension in Wernicke's area (left hemisphere).",
      "Recognising faces and objects along the inferior surface (the 'what' pathway).",
      "Forming new long-term memories through the medial temporal lobe.",
      "Processing the meaning of words and concepts (semantic memory).",
    ],
    facts: [
      { label: "Wernicke's area", sub: "Language comprehension", badge: "Area 22", tone: "neutral" },
      { label: "Fusiform face area", sub: "Specialised for faces", badge: "Right > Left", tone: "neutral" },
      { label: "Focal epilepsy origin", sub: "Share of adult focal seizures", badge: "~60%", tone: "up" },
    ],
    whenDamaged: [
      "Wernicke's aphasia: fluent but meaningless speech with poor comprehension.",
      "Prosopagnosia: inability to recognise familiar faces.",
      "Temporal lobe seizures with déjà vu, strange smells and automatisms.",
      "Herpes simplex encephalitis targets the temporal lobes and can devastate memory.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: [
          "Low B12 is linked to temporal lobe atrophy and faster memory decline in older adults.",
          "Supplementation slows brain shrinkage in people with raised homocysteine.",
        ],
      },
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: [
          "Cofactor for glutamate decarboxylase, which makes GABA, the brake on temporal lobe excitability.",
          "Pyridoxine-dependent epilepsy is a rare genetic disorder treated with high-dose B6.",
        ],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: [
          "Receptors are dense in the temporal cortex and hippocampus.",
          "Deficiency is common in people with epilepsy and correction may reduce seizure frequency.",
        ],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: [
          "Reduces oxidative stress generated during seizures.",
          "Diets high in natural vitamin E are associated with lower dementia risk.",
        ],
      },
    ],
  },
  {
    id: "occipital-lobe",
    name: "Occipital Lobe",
    latin: "Lobus occipitalis",
    category: "cortex",
    view: "lateral",
    pos: { x: 790, y: 450 },
    title: "The Occipital Lobe & Vision",
    intro: [
      "The occipital lobe is the smallest lobe, at the very back of the brain. Almost all of it is devoted to vision.",
      "Signals from the retina arrive, via the thalamus, at the primary visual cortex around the calcarine sulcus. From there a hierarchy of areas extracts edges, colour, motion and form.",
    ],
    functions: [
      "Primary visual cortex (V1) maps the visual field point by point.",
      "V2–V4 extract shape, orientation and colour.",
      "Area V5/MT detects motion and direction.",
      "Projects forward to the parietal lobe (where) and temporal lobe (what).",
    ],
    facts: [
      { label: "Visual cortex neurons", sub: "In V1 alone", badge: "~140 million", tone: "neutral" },
      { label: "Field representation", sub: "Left visual field is processed on the", badge: "Right side", tone: "neutral" },
      { label: "Fovea magnification", sub: "Central 2° of vision uses", badge: "~25% of V1", tone: "up" },
      { label: "Blood supply", sub: "Posterior cerebral artery", badge: "PCA", tone: "neutral" },
    ],
    whenDamaged: [
      "Cortical blindness after bilateral damage, sometimes with denial of blindness (Anton syndrome).",
      "Hemianopia: loss of one half of the visual field after a one-sided stroke.",
      "Visual agnosia: seeing clearly but failing to recognise what is seen.",
      "Migraine auras of flashing zig-zags arise from a wave of activity spreading across V1.",
    ],
    vitamins: [
      {
        name: "Vitamin A (retinol)",
        dose: "700–900 µg RAE/day",
        bullets: [
          "Retinal, the vitamin A derivative, is the light-catching molecule in every photoreceptor that feeds the occipital lobe.",
          "Deficiency causes night blindness; the visual cortex receives no signal in dim light.",
        ],
      },
      {
        name: "Vitamin B2 (riboflavin)",
        dose: "1.1–1.3 mg/day",
        bullets: [
          "Supports mitochondrial energy in the retina and visual cortex.",
          "400 mg/day riboflavin is an evidence-based migraine preventive; migraine aura originates in the occipital cortex.",
        ],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: [
          "Keeps the optic nerve and optic radiations myelinated.",
          "Deficiency can cause optic neuropathy with blurred central vision.",
        ],
      },
      {
        name: "Vitamin C & E",
        dose: "90 mg + 15 mg/day",
        bullets: [
          "Antioxidant pair used in the AREDS formula to slow age-related macular degeneration, protecting the input to visual cortex.",
        ],
      },
    ],
    otherNutrients: [
      {
        name: "Lutein & zeaxanthin",
        dose: "10 mg + 2 mg/day",
        bullets: ["Carotenoids concentrated in the macula and in visual cortex; higher levels correlate with faster visual processing."],
      },
    ],
  },
  {
    id: "insula",
    name: "Insular Cortex",
    latin: "Insula",
    category: "cortex",
    view: "lateral",
    pos: { x: 440, y: 480 },
    title: "The Insula & Interoception",
    intro: [
      "The insula is a hidden island of cortex folded deep inside the lateral sulcus, covered by the frontal, parietal and temporal lobes. You cannot see it from the outside.",
      "It is the brain's sense of the inside of the body. Heartbeat, breath, hunger, nausea, pain and disgust are all represented here, and that bodily feeling is woven into emotion and self-awareness.",
    ],
    functions: [
      "Interoception: sensing heartbeat, breathing, gut state and temperature.",
      "Taste, in the primary gustatory cortex.",
      "Processing pain and the feeling of disgust.",
      "Craving and addiction; the insula is central to the urge to smoke.",
      "Empathy and awareness of one's own emotions.",
    ],
    facts: [
      { label: "Von Economo neurons", sub: "Large spindle cells unique to a few species", badge: "Present", tone: "neutral" },
      { label: "Taste cortex", sub: "Located in the anterior insula", badge: "Anterior", tone: "neutral" },
      { label: "Smoking cessation", sub: "After insula stroke, quitting became", badge: "Effortless", tone: "up" },
    ],
    whenDamaged: [
      "Loss of taste (ageusia) on one side.",
      "Abrupt loss of cravings after stroke, a key discovery about addiction.",
      "Reduced ability to feel or name emotions (alexithymia).",
      "Autonomic disturbances including blood-pressure instability and arrhythmias.",
    ],
    vitamins: [
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: [
          "The insula is metabolically very active and relies on thiamine-dependent glucose metabolism.",
          "Thiamine deficiency contributes to the taste and appetite loss seen in alcohol misuse.",
        ],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Supports the nerve pathways that carry interoceptive signals from the body to the insula.", "Deficiency causes taste changes and a burning tongue."],
      },
      {
        name: "Vitamin B3 (niacin)",
        dose: "14–16 mg NE/day",
        bullets: [
          "Pellagra, the niacin-deficiency disease, causes dermatitis, diarrhoea and dementia with marked loss of appetite and taste.",
        ],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Involved in regulating pain sensitivity; deficiency is associated with chronic pain syndromes that engage the insula."],
      },
    ],
    otherNutrients: [
      {
        name: "Zinc",
        dose: "8–11 mg/day",
        bullets: ["Required for taste receptor function; zinc deficiency is a classic cause of loss of taste."],
      },
    ],
  },
  {
    id: "broca-area",
    name: "Broca's Area",
    latin: "Area 44 / 45, gyrus frontalis inferior",
    category: "cortex",
    view: "lateral",
    pos: { x: 330, y: 410 },
    title: "Broca's Area & Speech Production",
    intro: [
      "Broca's area sits in the lower back part of the left frontal lobe, just in front of the motor strip for the mouth and tongue. It turns a thought into the motor programme for words.",
      "Paul Broca identified it in 1861 from a patient nicknamed 'Tan', who understood everything but could say only that one syllable. It was the first time a mental ability was tied to a specific patch of cortex.",
    ],
    functions: [
      "Assembling the sequence of sounds and muscle movements that make a word.",
      "Building grammar: ordering words into sentences.",
      "Inner speech and verbal working memory.",
      "Decoding complex sentences, not only producing them.",
      "Producing sign language in deaf signers, which shows it handles language rather than mouth movement.",
    ],
    facts: [
      { label: "Discovered", sub: "Paul Broca, patient 'Tan'", badge: "1861", tone: "neutral" },
      { label: "Lateralisation", sub: "Left hemisphere in right-handers", badge: "~95%", tone: "neutral" },
      { label: "Brodmann areas", sub: "Pars opercularis and triangularis", badge: "44 / 45", tone: "neutral" },
      { label: "Connection to Wernicke's", sub: "Via the arcuate fasciculus", badge: "White matter", tone: "neutral" },
    ],
    whenDamaged: [
      "Broca's (non-fluent) aphasia: slow, effortful, telegraphic speech with intact understanding.",
      "Agrammatism: small words such as 'the' and 'is' are dropped.",
      "Usually caused by a left middle cerebral artery stroke; weakness of the right face and arm often accompanies it.",
      "Recovery depends on the surrounding frontal tissue and on intensive speech therapy.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: [
          "Maintains the myelin of the arcuate fasciculus, the cable that links Broca's and Wernicke's areas.",
          "Deficiency slows word-finding and verbal fluency, which recover with replacement.",
        ],
      },
      {
        name: "Folate (vitamin B9) & B6",
        dose: "400 µg + 1.5 mg/day",
        bullets: [
          "Together with B12 they lower homocysteine, a modifiable risk factor for the strokes that most often damage Broca's area.",
        ],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Low vitamin D is associated with poorer verbal fluency and with worse recovery after stroke."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Antioxidant protection for the dense, fast-firing speech circuitry of the inferior frontal gyrus."],
      },
    ],
  },
  {
    id: "wernicke-area",
    name: "Wernicke's Area",
    latin: "Area 22, gyrus temporalis superior",
    category: "cortex",
    view: "lateral",
    pos: { x: 650, y: 375 },
    title: "Wernicke's Area & Understanding Language",
    intro: [
      "Wernicke's area lies at the back of the left superior temporal gyrus, where it meets the parietal lobe, next to the auditory cortex. It attaches meaning to the sounds of speech.",
      "Carl Wernicke described it in 1874 in patients who spoke fluently but made no sense and could not understand others. With Broca's area it forms the classic language loop.",
    ],
    functions: [
      "Recognising spoken words and retrieving their meaning.",
      "Understanding written language, via the nearby angular gyrus.",
      "Choosing the right words during speech; it feeds Broca's area.",
      "Monitoring your own speech for errors.",
    ],
    facts: [
      { label: "Described", sub: "Carl Wernicke", badge: "1874", tone: "neutral" },
      { label: "Brodmann area", sub: "Posterior superior temporal gyrus", badge: "22", tone: "neutral" },
      { label: "Blood supply", sub: "Inferior division of the middle cerebral artery", badge: "MCA", tone: "neutral" },
    ],
    whenDamaged: [
      "Wernicke's (fluent) aphasia: effortless, grammatical-sounding speech full of wrong or invented words.",
      "Poor comprehension; the person is often unaware that their speech is not making sense.",
      "Reading and writing are usually impaired too.",
      "Conduction aphasia when only the connecting arcuate fasciculus is cut: good understanding and fluent speech but inability to repeat.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Preserves the white-matter links between auditory cortex, Wernicke's area and the angular gyrus."],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["The temporal language cortex is highly glucose-dependent; thiamine-deficient confusion often shows as word-salad speech."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Associated with preserved language comprehension in ageing cohorts."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Protects temporal cortex from oxidative stress; the posterior temporal region is a late target in Alzheimer's disease."],
      },
    ],
    otherNutrients: [
      {
        name: "Omega-3 DHA",
        dose: "250–500 mg/day",
        bullets: ["Supports the rapid synaptic processing needed to decode speech at 3–4 words per second."],
      },
    ],
  },
  {
    id: "claustrum",
    name: "Claustrum",
    latin: "Claustrum",
    category: "cortex",
    view: "lateral",
    pos: { x: 560, y: 430 },
    title: "The Claustrum: Conductor of Consciousness?",
    intro: [
      "The claustrum is a thin sheet of grey matter, a few millimetres thick, hidden between the insula and the putamen. It is connected to almost every area of the cortex, in both directions.",
      "Francis Crick, co-discoverer of DNA, spent his final years arguing that it might bind the brain's separate processes into a single conscious experience, like the conductor of an orchestra. The question is still open.",
    ],
    functions: [
      "Integrating signals from many cortical areas at once.",
      "Switching attention between tasks and suppressing distraction.",
      "Coordinating slow-wave sleep across the cortex (shown in mice).",
      "Possibly binding separate perceptions into one unified experience.",
    ],
    facts: [
      { label: "Thickness", sub: "A sheet, not a blob", badge: "~2 mm", tone: "neutral" },
      { label: "Connectivity", sub: "Reciprocal links with cortical areas", badge: "Nearly all", tone: "up" },
      { label: "Crick & Koch hypothesis", sub: "Published in Phil. Trans. R. Soc.", badge: "2005", tone: "neutral" },
      { label: "Case report", sub: "Stimulation switched consciousness off and on", badge: "2014", tone: "neutral" },
    ],
    whenDamaged: [
      "In a 2014 case, electrical stimulation near the claustrum made a patient stop responding, staring blankly, until the current stopped.",
      "Claustrum lesions have been linked to delirium and impaired attention.",
      "It is one of the first regions to show damage in some autoimmune encephalitides.",
    ],
    vitamins: [
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["No vitamin studies target the claustrum specifically; like all grey matter it depends on thiamine-driven glucose metabolism, and delirium from thiamine deficiency mirrors claustral dysfunction."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Its web of cortical connections is myelinated white matter that needs B12 for maintenance."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Supports the overall cortical network health on which an integrative hub depends."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["General antioxidant protection for lipid-rich neural membranes."],
      },
    ],
  },
];
