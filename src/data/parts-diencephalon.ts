import type { Part } from "./types";

export const diencephalonParts: Part[] = [
  {
    id: "thalamus",
    name: "Thalamus",
    latin: "Thalamus",
    category: "diencephalon",
    view: "medial",
    pos: { x: 520, y: 445 },
    title: "The Thalamus: Gateway to the Cortex",
    intro: [
      "The thalamus is a pair of egg-shaped masses at the very centre of the brain. Almost every sensory signal (except smell) must pass through it on the way to the cortex.",
      "It is far more than a relay. Its nuclei filter, amplify and time-stamp information, and its loops with the cortex generate the rhythms of sleep and attention.",
    ],
    functions: [
      "Relaying vision, hearing, touch and taste to the correct cortical area.",
      "Gating which signals reach consciousness; attention is partly thalamic.",
      "Relaying motor plans from the basal ganglia and cerebellum back to the cortex.",
      "Generating sleep spindles and the slow rhythms of deep sleep.",
      "Maintaining arousal and consciousness together with the brainstem.",
    ],
    facts: [
      { label: "Nuclei", sub: "Distinct thalamic nuclei", badge: "~60", tone: "neutral" },
      { label: "Length", sub: "Each thalamus", badge: "~3 cm", tone: "neutral" },
      { label: "Exception", sub: "The one sense that skips the thalamus", badge: "Smell", tone: "neutral" },
      { label: "Sleep spindles", sub: "Thalamo-cortical rhythm", badge: "11–15 Hz", tone: "neutral" },
    ],
    whenDamaged: [
      "Thalamic stroke causes loss of sensation on the opposite side, sometimes followed by severe central pain (Dejerine–Roussy syndrome).",
      "Fatal familial insomnia, a prion disease, destroys thalamic nuclei and abolishes sleep.",
      "Bilateral thalamic injury can produce coma or persistent unawareness.",
      "Thiamine deficiency damages the medial thalamus, causing the amnesia of Korsakoff syndrome.",
    ],
    vitamins: [
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: [
          "The medial thalamus is, with the mammillary bodies, the structure most vulnerable to thiamine deficiency.",
          "Wernicke encephalopathy shows up on MRI as symmetrical swelling of the thalamus around the third ventricle.",
        ],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Keeps the thalamo-cortical radiations myelinated so sensory signals arrive on time."],
      },
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Needed to make GABA, which thalamic reticular neurons use to gate sensory traffic and create sleep spindles."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Vitamin D status is associated with sleep quality; receptors are present in thalamic nuclei."],
      },
    ],
  },
  {
    id: "hypothalamus",
    name: "Hypothalamus",
    latin: "Hypothalamus",
    category: "diencephalon",
    view: "medial",
    pos: { x: 462, y: 515 },
    title: "The Hypothalamus & Homeostasis",
    intro: [
      "The hypothalamus is a sugar-cube-sized region beneath the thalamus. It is the brain's thermostat, clock and hormone master switch rolled into one.",
      "It monitors blood temperature, salt, sugar and hormones directly, and answers through the autonomic nervous system and the pituitary gland.",
    ],
    functions: [
      "Body temperature regulation (shivering, sweating, fever).",
      "Hunger and satiety, via leptin and ghrelin signalling in the arcuate nucleus.",
      "Thirst and water balance through vasopressin.",
      "The 24-hour circadian clock in the suprachiasmatic nucleus.",
      "Controlling the pituitary, and so stress, growth, thyroid and reproductive hormones.",
      "Sexual behaviour, parenting and the fight-or-flight response.",
    ],
    facts: [
      { label: "Weight", sub: "Of total brain weight", badge: "<1%", tone: "neutral" },
      { label: "Master clock", sub: "Suprachiasmatic nucleus, neurons", badge: "~20,000", tone: "neutral" },
      { label: "Set point", sub: "Core temperature defended at", badge: "37 °C", tone: "neutral" },
      { label: "Hormones controlled", sub: "Pituitary axes", badge: "6+", tone: "neutral" },
    ],
    whenDamaged: [
      "Uncontrolled appetite and obesity, or the opposite, after tumour or surgery.",
      "Diabetes insipidus: litres of dilute urine when vasopressin is lost.",
      "Disrupted sleep–wake cycles and temperature control.",
      "Hypothalamic amenorrhoea in athletes and people with eating disorders, when energy is scarce.",
    ],
    vitamins: [
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: [
          "Vitamin D receptors are expressed in the hypothalamus and influence appetite and circadian signalling.",
          "Deficiency is associated with poor sleep and fatigue.",
        ],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Hypothalamic nuclei are damaged in Wernicke encephalopathy, producing hypothermia and low blood pressure."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["B12 influences melatonin rhythms; deficiency can disturb sleep–wake timing."],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Required to make the hormones of the stress axis the hypothalamus commands, including noradrenaline and cortisol."],
      },
    ],
    otherNutrients: [
      {
        name: "Iodine",
        dose: "150 µg/day",
        bullets: ["The hypothalamus–pituitary–thyroid axis needs iodine to make thyroid hormone, which sets metabolic rate."],
      },
      {
        name: "Omega-3 fatty acids",
        dose: "250–500 mg/day",
        bullets: ["Reduce hypothalamic inflammation that drives leptin resistance in obesity."],
      },
    ],
  },
  {
    id: "pituitary-gland",
    name: "Pituitary Gland",
    latin: "Hypophysis",
    category: "diencephalon",
    view: "medial",
    pos: { x: 440, y: 615 },
    title: "The Pituitary: The Master Gland",
    intro: [
      "The pituitary hangs from the hypothalamus by a thin stalk and rests in a bony saddle at the base of the skull. It is the size of a pea and weighs about half a gram.",
      "Its front lobe makes six major hormones on the hypothalamus's orders; its back lobe stores two hormones made in the hypothalamus itself.",
    ],
    functions: [
      "Growth hormone: growth in childhood, metabolism and repair in adults.",
      "ACTH: tells the adrenal glands to release cortisol.",
      "TSH: drives the thyroid gland.",
      "FSH and LH: control the ovaries and testes.",
      "Prolactin: milk production.",
      "Posterior lobe: oxytocin (bonding, labour) and vasopressin (water balance).",
    ],
    facts: [
      { label: "Weight", sub: "Adult pituitary", badge: "~0.5 g", tone: "neutral" },
      { label: "Hormones", sub: "Anterior + posterior lobes", badge: "8", tone: "neutral" },
      { label: "Pituitary adenoma", sub: "Found incidentally on imaging", badge: "~10% of adults", tone: "neutral" },
      { label: "Location", sub: "Sella turcica of the sphenoid bone", badge: "Skull base", tone: "neutral" },
    ],
    whenDamaged: [
      "Hypopituitarism: fatigue, low blood pressure, infertility and low thyroid function.",
      "Pituitary tumours can press on the optic chiasm and cause loss of peripheral vision.",
      "Acromegaly or gigantism from excess growth hormone.",
      "Sheehan syndrome: pituitary infarction after severe blood loss in childbirth.",
    ],
    vitamins: [
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: [
          "The pituitary has one of the highest vitamin C concentrations of any organ.",
          "Ascorbate is a cofactor for the enzyme that activates oxytocin and vasopressin (peptidylglycine α-amidating monooxygenase).",
        ],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Vitamin D is itself a hormone and interacts with the pituitary–adrenal and pituitary–gonadal axes."],
      },
      {
        name: "Vitamin A (retinol)",
        dose: "700–900 µg RAE/day",
        bullets: ["Retinoic acid regulates the development and hormone output of pituitary cells."],
      },
      {
        name: "Vitamin B12 & folate",
        dose: "2.4 µg + 400 µg/day",
        bullets: ["Support the rapid turnover of hormone-secreting cells; deficiency is associated with low thyroid and reproductive hormone output."],
      },
    ],
    otherNutrients: [
      {
        name: "Iodine",
        dose: "150 µg/day",
        bullets: ["Without iodine the thyroid cannot answer TSH, and the pituitary enlarges trying to compensate."],
      },
    ],
  },
  {
    id: "pineal-gland",
    name: "Pineal Gland (Third Eye)",
    latin: "Glandula pinealis · epiphysis cerebri",
    category: "diencephalon",
    view: "medial",
    pos: { x: 660, y: 402 },
    title: "The Pineal Gland: The 'Third Eye'",
    intro: [
      "The pineal gland is a rice-grain-sized cone at the back of the third ventricle. Descartes called it the seat of the soul; many traditions call it the 'third eye'. In fact it is the body's night signal: in darkness it secretes melatonin, telling every tissue what time it is.",
      "The 'third eye' name is older than it sounds. In lizards, frogs and some fish the pineal is literally a light-sensing organ (the parietal eye) with a lens and retina-like cells, poking through the top of the skull. In mammals it sank deep into the brain and lost its own light sensors; instead it hears about daylight through the eyes, the hypothalamic clock and a sympathetic nerve loop that runs down to the neck and back up. Its cells still carry some of the same genes as retinal photoreceptors.",
      "Claims that the pineal is a gateway to intuition or produces psychedelic DMT in meaningful amounts are not supported by evidence; trace DMT has been found in rodent pineal tissue, but not at active levels in humans.",
    ],
    functions: [
      "Melatonin secretion at night, under control of the hypothalamic clock.",
      "Signalling day length to the body, which in many animals times the breeding season.",
      "Supporting sleep onset and the stability of the circadian rhythm.",
      "Acting as a light-detecting 'third eye' in reptiles and amphibians; in humans the light signal comes indirectly from the retina.",
    ],
    facts: [
      { label: "Weight", sub: "Adult pineal", badge: "~0.1 g", tone: "neutral" },
      { label: "Melatonin peak", sub: "Typical timing", badge: "2–4 am", tone: "neutral" },
      { label: "Parietal 'third eye'", sub: "Present in lizards, tuatara, frogs, lampreys", badge: "Light-sensing", tone: "neutral" },
      { label: "Calcification", sub: "Seen on CT in adults", badge: "Common", tone: "neutral" },
      { label: "Light suppression", sub: "Blue-enriched screen light at night", badge: "↓ melatonin", tone: "down" },
    ],
    whenDamaged: [
      "Pineal tumours block the cerebral aqueduct, causing hydrocephalus and upward-gaze paralysis (Parinaud syndrome).",
      "Loss of melatonin rhythm disrupts sleep and may affect mood.",
      "Shift work and night-time light exposure flatten the melatonin rhythm.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: [
          "Cofactor in converting tryptophan to serotonin, the direct precursor of melatonin.",
          "Pyridoxine deficiency lowers melatonin output and disturbs sleep.",
        ],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: ["Folate supplies the methyl group that converts N-acetylserotonin into melatonin."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Supports the methylation step of melatonin synthesis; B12 has been used to help re-entrain shifted sleep rhythms."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Vitamin D and melatonin are both light-dependent signals; low vitamin D is associated with poor sleep quality."],
      },
    ],
    otherNutrients: [
      {
        name: "Magnesium",
        dose: "310–420 mg/day",
        bullets: ["Supports melatonin synthesis and has modest evidence for improving sleep in older adults."],
      },
    ],
  },
  {
    id: "habenula",
    name: "Habenula",
    latin: "Habenula (epithalamus)",
    category: "diencephalon",
    view: "medial",
    pos: { x: 630, y: 488 },
    title: "The Habenula: The Disappointment Centre",
    intro: [
      "The habenula is a pair of tiny nuclei in the epithalamus, just in front of the pineal gland. It is the brain's 'anti-reward' centre: it fires when things turn out worse than expected.",
      "Its lateral part switches off the midbrain dopamine neurons, so a missed reward or a punishment is felt as a dip in motivation. Overactivity of the habenula is one of the best-supported circuit findings in depression.",
    ],
    functions: [
      "Signalling negative prediction error: 'that was worse than I expected'.",
      "Suppressing dopamine and serotonin release after disappointment or punishment.",
      "Avoidance learning: steering behaviour away from bad outcomes.",
      "Regulating sleep and circadian rhythm together with the pineal gland.",
    ],
    facts: [
      { label: "Size", sub: "Each habenula", badge: "~5 mm", tone: "neutral" },
      { label: "Depression", sub: "Burst firing drives depressive behaviour in animals", badge: "Overactive", tone: "down" },
      { label: "Ketamine", sub: "Blocks habenula bursting within hours (Nature, 2018)", badge: "Rapid", tone: "up" },
    ],
    whenDamaged: [
      "Overactivity is linked with depression, anhedonia and treatment resistance; deep brain stimulation of the habenula is being trialled.",
      "Nicotine withdrawal symptoms arise partly from the medial habenula.",
      "Lesions impair the ability to learn from punishment.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Cofactor for the serotonin and dopamine synthesis the habenula gates; low B6 is linked with depressive symptoms."],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: ["Folate deficiency is one of the strongest nutritional correlates of depression; methylfolate augments antidepressants."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Low vitamin D status is associated with depression; supplementation modestly improves mood in deficient people."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Low B12 predicts poorer antidepressant response; replacement is routine in depression work-up."],
      },
    ],
    otherNutrients: [
      {
        name: "Omega-3 EPA",
        dose: "1–2 g/day",
        bullets: ["EPA-predominant omega-3 has consistent, modest antidepressant evidence in meta-analyses."],
      },
    ],
  },
  {
    id: "optic-chiasm",
    name: "Optic Chiasm",
    latin: "Chiasma opticum",
    category: "diencephalon",
    view: "medial",
    pos: { x: 415, y: 560 },
    title: "The Optic Chiasm: Where Vision Crosses",
    intro: [
      "The optic chiasm is the X-shaped crossing of the two optic nerves on the underside of the brain, directly above the pituitary gland and in front of the hypothalamus.",
      "Fibres from the inner (nasal) half of each retina cross to the other side; fibres from the outer half stay. The result is that each hemisphere receives the opposite half of the visual world from both eyes.",
    ],
    functions: [
      "Sorting retinal fibres so each hemisphere sees the opposite visual field.",
      "Enabling binocular depth perception by combining both eyes' views in one hemisphere.",
      "Sending a side branch to the hypothalamic clock (the retinohypothalamic tract) that sets circadian rhythm.",
      "Relaying pupil-reflex signals to the midbrain.",
    ],
    facts: [
      { label: "Crossing fibres", sub: "Share of optic nerve axons that decussate", badge: "~53%", tone: "neutral" },
      { label: "Axons per optic nerve", sub: "Approximate", badge: "1.2 million", tone: "neutral" },
      { label: "Neighbour below", sub: "Pituitary tumours press on it from beneath", badge: "Pituitary", tone: "neutral" },
    ],
    whenDamaged: [
      "Bitemporal hemianopia: loss of both outer visual fields, the classic sign of a pituitary tumour pressing on the chiasm.",
      "Optic neuritis and multiple sclerosis can inflame the chiasm.",
      "Albinism causes too many fibres to cross, impairing binocular vision.",
    ],
    vitamins: [
      {
        name: "Vitamin A (retinol)",
        dose: "700–900 µg RAE/day",
        bullets: ["Every signal through the chiasm starts with retinal, the vitamin A molecule that captures light; deficiency is the leading preventable cause of blindness worldwide."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["B12 deficiency causes optic neuropathy with central vision loss that is reversible if treated early."],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Nutritional optic neuropathy (historically 'tobacco-alcohol amblyopia') responds to thiamine and B-complex replacement."],
      },
      {
        name: "Vitamin B2 (riboflavin) & folate",
        dose: "1.3 mg + 400 µg/day",
        bullets: ["Both are implicated in nutritional optic neuropathies; folate deficiency alone can cause reversible optic nerve dysfunction."],
      },
    ],
  },
];
