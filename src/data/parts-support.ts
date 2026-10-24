import type { Part } from "./types";

export const supportParts: Part[] = [
  {
    id: "neuron",
    name: "Neurons",
    latin: "Neuronum",
    category: "support",
    view: "medial",
    pos: { x: 335, y: 325 },
    title: "The Neuron: The Signalling Cell",
    intro: [
      "A neuron is a cell built to send signals. Branching dendrites collect input, the cell body sums it, and if the sum crosses threshold the axon fires an action potential that races to the synapse.",
      "The adult brain holds about 86 billion neurons, connected by roughly 100 trillion synapses. Learning changes which synapses are strong, not how many neurons there are.",
    ],
    functions: [
      "Receiving chemical signals at dendritic spines.",
      "Integrating thousands of inputs and deciding whether to fire.",
      "Conducting electrical impulses along the axon, at up to 120 m/s when myelinated.",
      "Releasing neurotransmitters (glutamate, GABA, dopamine, serotonin, acetylcholine...) at synapses.",
      "Changing synaptic strength: the basis of memory.",
    ],
    facts: [
      { label: "Neurons in the brain", sub: "Average adult", badge: "86 billion", tone: "neutral" },
      { label: "Synapses", sub: "Approximate total", badge: "100 trillion", tone: "up" },
      { label: "Resting potential", sub: "Inside relative to outside", badge: "−70 mV", tone: "neutral" },
      { label: "Energy use", sub: "Share of body's resting energy by the brain", badge: "~20%", tone: "up" },
    ],
    whenDamaged: [
      "Neurons rarely regrow once lost; stroke, trauma and neurodegeneration cause permanent deficits.",
      "Excitotoxicity: too much glutamate floods cells with calcium and kills them.",
      "Mitochondrial failure starves neurons of ATP, which they cannot store.",
      "Protein misfolding (amyloid, tau, synuclein) underlies the common dementias.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: [
          "Required for the methylation reactions that maintain myelin and neurotransmitter synthesis in every neuron.",
          "Deficiency causes neuropathy, memory loss and depression that reverse if caught early.",
        ],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Neurons burn glucose almost exclusively; thiamine is the cofactor for the enzymes that turn glucose into ATP."],
      },
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["Cofactor for the synthesis of GABA, dopamine, serotonin, noradrenaline and histamine."],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Neurons concentrate vitamin C 10-fold over blood; it protects against oxidative stress and supports neurotransmitter synthesis."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["The main fat-soluble antioxidant in neuronal membranes, which are 60% lipid."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Regulates calcium handling, nerve growth factors and inflammation in neurons."],
      },
    ],
    otherNutrients: [
      {
        name: "Choline",
        dose: "425–550 mg/day",
        bullets: ["Precursor of acetylcholine and of the phosphatidylcholine in every neuronal membrane."],
      },
      {
        name: "Omega-3 DHA",
        dose: "250–500 mg/day",
        bullets: ["Makes up ~15% of the fatty acids in neuronal membranes and keeps them fluid for signalling."],
      },
    ],
  },
  {
    id: "glial-cells",
    name: "Glial Cells",
    latin: "Neuroglia",
    category: "support",
    view: "medial",
    pos: { x: 300, y: 445 },
    title: "Glia: Astrocytes, Oligodendrocytes & Microglia",
    intro: [
      "Glia ('glue') were once dismissed as packing material. They are at least as numerous as neurons and do much of the brain's housekeeping, immune defence and even signalling.",
      "Astrocytes feed neurons and shape synapses; oligodendrocytes wrap axons in myelin; microglia are the brain's resident immune cells, pruning synapses and clearing debris.",
    ],
    functions: [
      "Astrocytes: regulating blood flow, recycling glutamate, forming the blood–brain barrier and buffering potassium.",
      "Oligodendrocytes: producing myelin, which speeds conduction up to 100-fold.",
      "Microglia: immune surveillance, pruning unused synapses, clearing dead cells and amyloid.",
      "Ependymal cells: lining the ventricles and producing cerebrospinal fluid.",
    ],
    facts: [
      { label: "Glia to neuron ratio", sub: "In the whole brain", badge: "~1 : 1", tone: "neutral" },
      { label: "Myelin per oligodendrocyte", sub: "Axon segments wrapped", badge: "up to 50", tone: "neutral" },
      { label: "Microglia", sub: "Share of brain cells", badge: "~10%", tone: "neutral" },
      { label: "Glymphatic clearance", sub: "Waste removal peaks during", badge: "Deep sleep", tone: "up" },
    ],
    whenDamaged: [
      "Multiple sclerosis: the immune system attacks oligodendrocytes and myelin, slowing or blocking signals.",
      "Gliomas, the commonest primary brain tumours, arise from glial cells.",
      "Chronic microglial activation drives neuroinflammation in Alzheimer's and Parkinson's.",
      "Astrocyte failure after stroke worsens excitotoxic damage.",
    ],
    vitamins: [
      {
        name: "Vitamin D",
        dose: "600–800 IU/day (higher in MS)",
        bullets: [
          "Low vitamin D is one of the strongest environmental risk factors for multiple sclerosis.",
          "Vitamin D calms microglial inflammation and supports oligodendrocyte survival.",
        ],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Oligodendrocytes need B12 to make and maintain myelin; deficiency causes demyelination of the spinal cord and optic nerves."],
      },
      {
        name: "Vitamin K",
        dose: "90–120 µg/day",
        bullets: ["Required for synthesising sulfatides and other sphingolipids that make up myelin."],
      },
      {
        name: "Vitamin B7 (biotin)",
        dose: "30 µg/day",
        bullets: ["High-dose biotin has been studied in progressive MS to boost fatty-acid synthesis for myelin repair, with mixed results."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Protects lipid-rich myelin from peroxidation."],
      },
    ],
    otherNutrients: [
      {
        name: "Omega-3 DHA",
        dose: "250–500 mg/day",
        bullets: ["Resolves microglial inflammation via specialised pro-resolving mediators."],
      },
    ],
  },
  {
    id: "corpus-callosum",
    name: "Corpus Callosum",
    latin: "Corpus callosum",
    category: "support",
    view: "medial",
    pos: { x: 500, y: 345 },
    title: "The Corpus Callosum & White Matter",
    intro: [
      "The corpus callosum is a thick arch of about 200 million axons that joins the two hemispheres. It is the largest white-matter tract in the brain and the main reason the two halves act as one mind.",
      "White matter, in general, is the brain's wiring: myelinated axons bundled into tracts that carry signals between regions. It makes up about half of brain volume.",
    ],
    functions: [
      "Transferring sensory, motor and cognitive information between hemispheres.",
      "Coordinating bimanual movements.",
      "Letting the left hemisphere name what the right hemisphere sees.",
      "Other tracts: the internal capsule (motor output), arcuate fasciculus (language), cingulum (memory).",
    ],
    facts: [
      { label: "Axons", sub: "In the corpus callosum", badge: "~200 million", tone: "neutral" },
      { label: "Length", sub: "Front to back", badge: "~10 cm", tone: "neutral" },
      { label: "Myelination", sub: "Continues into the", badge: "40s", tone: "neutral" },
      { label: "White-matter share", sub: "Of brain volume", badge: "~50%", tone: "neutral" },
    ],
    whenDamaged: [
      "Split-brain syndrome after surgical division for epilepsy: each hemisphere can act without the other's knowledge.",
      "Alien hand syndrome, where one hand acts against the person's intentions.",
      "Small-vessel disease damages white matter and causes slowed thinking and gait problems in older adults.",
      "Agenesis of the corpus callosum, a congenital absence, is often surprisingly well tolerated.",
    ],
    vitamins: [
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: [
          "The single most important vitamin for myelin: B12 deficiency causes white-matter lesions visible on MRI that regress with treatment.",
          "Keeps homocysteine low; raised homocysteine damages the small vessels that feed white matter.",
        ],
      },
      {
        name: "Folate (vitamin B9) & B6",
        dose: "400 µg + 1.5 mg/day",
        bullets: ["Work with B12 to clear homocysteine; the combination slowed white-matter decline in trials."],
      },
      {
        name: "Vitamin K",
        dose: "90–120 µg/day",
        bullets: ["Vitamin K-dependent enzymes build the sphingolipids of myelin; higher status is associated with better white-matter integrity."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Low vitamin D is associated with greater white-matter hyperintensity burden on MRI."],
      },
    ],
    otherNutrients: [
      {
        name: "Omega-3 DHA",
        dose: "250–500 mg/day",
        bullets: ["Higher blood DHA correlates with better white-matter microstructure on diffusion MRI."],
      },
    ],
  },
  {
    id: "ventricles-csf",
    name: "Ventricles & CSF",
    latin: "Ventriculi cerebri / liquor cerebrospinalis",
    category: "support",
    view: "medial",
    pos: { x: 575, y: 390 },
    title: "The Ventricles & Cerebrospinal Fluid",
    intro: [
      "Deep inside the brain are four fluid-filled chambers: two lateral ventricles, the third ventricle between the thalami and the fourth between pons and cerebellum.",
      "The choroid plexus in each ventricle makes clear cerebrospinal fluid (CSF) that flows through the system, out around the brain and spinal cord, and back into the blood. The brain floats in it.",
    ],
    functions: [
      "Buoyancy: reducing the brain's effective weight from ~1,400 g to ~50 g.",
      "Cushioning against impact.",
      "Delivering nutrients and hormones and removing waste.",
      "The glymphatic system flushes CSF through brain tissue during sleep to clear amyloid.",
    ],
    facts: [
      { label: "CSF volume", sub: "At any moment", badge: "~150 mL", tone: "neutral" },
      { label: "Daily production", sub: "Replaced about 3–4 times a day", badge: "~500 mL", tone: "neutral" },
      { label: "Pressure", sub: "Normal opening pressure, lying", badge: "10–20 cmH₂O", tone: "neutral" },
      { label: "Ventricles", sub: "Lateral ×2, third, fourth", badge: "4", tone: "neutral" },
    ],
    whenDamaged: [
      "Hydrocephalus: blocked flow raises pressure and enlarges the ventricles; treated with a shunt.",
      "Normal-pressure hydrocephalus in older adults: gait problems, incontinence and dementia, which can be reversed.",
      "Idiopathic intracranial hypertension: headaches and vision loss from high CSF pressure.",
      "Meningitis inflames the CSF spaces; lumbar puncture samples CSF for diagnosis.",
    ],
    vitamins: [
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["The choroid plexus actively pumps vitamin C into CSF, where levels are 3–4 times higher than in blood, to supply neurons."],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: ["Folate is transported into CSF by the choroid plexus; cerebral folate deficiency causes developmental regression and seizures treated with folinic acid."],
      },
      {
        name: "Vitamin A (retinol)",
        dose: "700–900 µg RAE (avoid excess)",
        bullets: ["Excess vitamin A raises CSF pressure and causes idiopathic intracranial hypertension; the dose matters."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Delivered to the brain via CSF; CSF B12 metabolites are used to diagnose deficiency affecting the nervous system."],
      },
    ],
  },
  {
    id: "meninges",
    name: "Meninges",
    latin: "Meninges (dura, arachnoid, pia)",
    category: "support",
    view: "medial",
    pos: { x: 450, y: 165 },
    title: "The Meninges: Three Protective Layers",
    intro: [
      "Between the skull and the brain lie three membranes. The tough outer dura mater is stuck to the bone; the cobweb-like arachnoid lies beneath it; the delicate pia mater hugs every fold of the brain's surface.",
      "CSF flows in the subarachnoid space between arachnoid and pia, and the large venous sinuses run inside the dura, draining blood from the brain.",
    ],
    functions: [
      "Physical protection and anchoring of the brain within the skull.",
      "Containing the CSF that cushions the brain.",
      "Carrying blood vessels to and from the brain surface.",
      "Hosting immune cells and lymphatic vessels that drain the brain.",
    ],
    facts: [
      { label: "Layers", sub: "Dura, arachnoid, pia", badge: "3", tone: "neutral" },
      { label: "Dura thickness", sub: "Approximate", badge: "~0.5 mm", tone: "neutral" },
      { label: "Meningeal lymphatics", sub: "Rediscovered in", badge: "2015", tone: "neutral" },
      { label: "Pain sensitivity", sub: "The brain itself feels no pain; the dura does", badge: "Dura", tone: "neutral" },
    ],
    whenDamaged: [
      "Meningitis: bacterial or viral infection of the meninges with fever, neck stiffness and headache.",
      "Subdural haematoma: bleeding between dura and arachnoid, common after falls in older adults.",
      "Subarachnoid haemorrhage: a ruptured aneurysm bleeds into the CSF, causing a 'thunderclap' headache.",
      "Meningiomas: usually benign tumours arising from arachnoid cells.",
    ],
    vitamins: [
      {
        name: "Vitamin K",
        dose: "90–120 µg/day",
        bullets: [
          "Required for clotting factors; newborns receive vitamin K at birth to prevent intracranial (including subdural) bleeding.",
        ],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Needed for the collagen that gives the dura its toughness and keeps blood vessels in the meninges intact."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Supports immune function; deficiency is associated with higher susceptibility to infections including meningitis."],
      },
      {
        name: "Vitamin A (retinol)",
        dose: "700–900 µg RAE/day",
        bullets: ["Maintains the epithelial barriers of the respiratory tract through which meningitis bacteria enter."],
      },
    ],
  },
  {
    id: "blood-brain-barrier",
    name: "Blood–Brain Barrier",
    latin: "Barriera haematoencephalica",
    category: "support",
    view: "medial",
    pos: { x: 262, y: 528 },
    title: "The Blood–Brain Barrier",
    intro: [
      "The blood–brain barrier is not a wall but a property of the brain's capillaries. Their endothelial cells are sealed by tight junctions, wrapped by pericytes and astrocyte end-feet, and equipped with pumps that eject unwanted molecules.",
      "It lets in glucose, oxygen and amino acids, keeps out most toxins, bacteria and large drugs, and is the main reason brain diseases are hard to treat with medicines.",
    ],
    functions: [
      "Protecting neurons from toxins, pathogens and fluctuating blood chemistry.",
      "Selective transport of glucose (GLUT1), amino acids and vitamins into the brain.",
      "Pumping out waste and drugs via efflux transporters such as P-glycoprotein.",
      "Maintaining the precise ionic environment neurons need to fire.",
    ],
    facts: [
      { label: "Capillary length", sub: "Total in the human brain", badge: "~650 km", tone: "up" },
      { label: "Surface area", sub: "Exchange surface", badge: "~20 m²", tone: "neutral" },
      { label: "Drug penetration", sub: "Small-molecule drugs that cross", badge: "<2%", tone: "down" },
      { label: "Distance to a capillary", sub: "No neuron is further than", badge: "~25 µm", tone: "neutral" },
    ],
    whenDamaged: [
      "Leaky barrier after stroke or trauma lets fluid in, causing brain swelling (oedema).",
      "Multiple sclerosis lesions begin with immune cells crossing a weakened barrier.",
      "Barrier breakdown in the hippocampus is one of the earliest changes in cognitive decline.",
      "High blood pressure and diabetes slowly damage barrier integrity.",
    ],
    vitamins: [
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Transported across the barrier as dehydroascorbate via GLUT1, then regenerated inside; supports endothelial tight junctions."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Strengthens tight-junction proteins and reduces barrier leakiness in inflammation."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Protects endothelial membranes from oxidative stress that opens the barrier."],
      },
      {
        name: "Vitamin B1 (thiamine)",
        dose: "1.1–1.2 mg/day",
        bullets: ["Crosses via a dedicated transporter; thiamine deficiency itself makes the barrier leaky in the thalamus and mammillary bodies."],
      },
      {
        name: "Folate & B12",
        dose: "400 µg + 2.4 µg/day",
        bullets: ["Lower homocysteine, which directly injures endothelial cells and loosens the barrier."],
      },
    ],
    otherNutrients: [
      {
        name: "Omega-3 DHA",
        dose: "250–500 mg/day",
        bullets: ["Enters the brain via the MFSD2A transporter in the barrier and is needed to maintain it."],
      },
    ],
  },
  {
    id: "synapse",
    name: "Synapses",
    latin: "Synapsis",
    category: "support",
    view: "medial",
    pos: { x: 320, y: 390 },
    title: "The Synapse: Where Neurons Talk",
    intro: [
      "A synapse is the 20-nanometre gap where one neuron signals to the next. An electrical impulse arriving at the axon terminal releases packets of neurotransmitter, which cross the gap and bind receptors on the receiving cell.",
      "The brain has roughly 100 trillion synapses, and their strength is adjustable. Strengthening a synapse that is used often (long-term potentiation) is the cellular basis of learning and memory.",
    ],
    functions: [
      "Glutamate: the main excitatory signal, used by ~80% of synapses.",
      "GABA: the main inhibitory signal, the brake on the system.",
      "Dopamine (reward, movement), serotonin (mood, sleep), noradrenaline (alertness), acetylcholine (attention, memory, muscle).",
      "Plasticity: synapses grow, shrink or disappear with experience.",
      "Clearing transmitter after use, via reuptake pumps and enzymes, which many drugs target.",
    ],
    facts: [
      { label: "Synapses", sub: "In the adult brain", badge: "~100 trillion", tone: "up" },
      { label: "Cleft width", sub: "Gap between cells", badge: "~20 nm", tone: "neutral" },
      { label: "Transmission time", sub: "Chemical synapse delay", badge: "~0.5 ms", tone: "neutral" },
      { label: "Pruning", sub: "Synapses lost between age 2 and adulthood", badge: "~50%", tone: "neutral" },
    ],
    whenDamaged: [
      "Synapse loss, not neuron loss, best predicts cognitive decline in Alzheimer's disease.",
      "Myasthenia gravis: antibodies block acetylcholine receptors at the muscle synapse.",
      "Too little GABA relative to glutamate causes seizures; too little dopamine causes Parkinson's.",
      "Botulinum and tetanus toxins act by blocking transmitter release.",
    ],
    vitamins: [
      {
        name: "Vitamin B6 (pyridoxine)",
        dose: "1.3–1.7 mg/day",
        bullets: ["The single most important vitamin for neurotransmitters: cofactor for making GABA, dopamine, serotonin, noradrenaline and histamine."],
      },
      {
        name: "Vitamin B5 (pantothenic acid) & B1",
        dose: "5 mg + 1.2 mg/day",
        bullets: ["Both feed acetyl-CoA, the acetyl donor for acetylcholine, the transmitter of attention and memory."],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Converts dopamine to noradrenaline and is released into the synaptic cleft during activity as an antioxidant."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Regulates calcium channels and the synaptic proteins needed for plasticity."],
      },
      {
        name: "Folate & B12",
        dose: "400 µg + 2.4 µg/day",
        bullets: ["Supply methyl groups for synthesising and recycling monoamine transmitters."],
      },
    ],
    otherNutrients: [
      {
        name: "Choline",
        dose: "425–550 mg/day",
        bullets: ["Direct precursor of acetylcholine; eggs, fish and soy are rich sources."],
      },
      {
        name: "Magnesium & zinc",
        dose: "310–420 mg + 8–11 mg/day",
        bullets: ["Magnesium gates the NMDA receptor that triggers long-term potentiation; zinc is packed into glutamate vesicles."],
      },
    ],
  },
  {
    id: "choroid-plexus",
    name: "Choroid Plexus",
    latin: "Plexus choroideus",
    category: "support",
    view: "medial",
    pos: { x: 600, y: 440 },
    title: "The Choroid Plexus: The Brain's Fluid Factory",
    intro: [
      "The choroid plexus is a frilly, blood-vessel-rich tissue lining each ventricle. Its cells filter blood plasma and secrete about half a litre of cerebrospinal fluid every day.",
      "It is also the blood–CSF barrier and a selective gate: it actively pumps vitamins, hormones and nutrients into the brain and clears waste back out.",
    ],
    functions: [
      "Producing cerebrospinal fluid (~500 mL/day).",
      "Transporting vitamin C, folate, vitamin B12 carriers and thyroid hormone into the CSF.",
      "Secreting transthyretin, which ferries thyroid hormone and vitamin A.",
      "Immune surveillance: a gateway for immune cells entering the brain.",
      "Removing metabolic waste and drugs from CSF.",
    ],
    facts: [
      { label: "CSF output", sub: "Per day", badge: "~500 mL", tone: "neutral" },
      { label: "Vitamin C in CSF", sub: "Relative to blood, thanks to active transport", badge: "× 3–4", tone: "up" },
      { label: "Folate transport", sub: "Via folate receptor alpha", badge: "Active", tone: "neutral" },
    ],
    whenDamaged: [
      "Cerebral folate deficiency: antibodies against the folate receptor block transport, causing developmental regression and seizures treated with folinic acid.",
      "Choroid plexus tumours (papillomas) overproduce CSF and cause hydrocephalus in young children.",
      "In ageing and Alzheimer's the plexus shrinks and CSF turnover slows, reducing waste clearance.",
    ],
    vitamins: [
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["The SVCT2 transporter in choroid plexus cells concentrates vitamin C into CSF to supply neurons."],
      },
      {
        name: "Folate (vitamin B9)",
        dose: "400 µg DFE/day",
        bullets: ["Carried across the plexus by folate receptor alpha; the brain cannot get folate any other way."],
      },
      {
        name: "Vitamin A (retinol)",
        dose: "700–900 µg RAE/day",
        bullets: ["Transported into the brain bound to transthyretin and retinol-binding protein made by the plexus."],
      },
      {
        name: "Vitamin B12 (cobalamin)",
        dose: "2.4 µg/day",
        bullets: ["Delivered to the CSF by transcobalamin receptors on choroid plexus cells."],
      },
    ],
  },
  {
    id: "circle-of-willis",
    name: "Circle of Willis",
    latin: "Circulus arteriosus cerebri",
    category: "support",
    view: "medial",
    pos: { x: 470, y: 650 },
    title: "The Circle of Willis & Brain Blood Supply",
    intro: [
      "The circle of Willis is a ring of arteries at the base of the brain, around the pituitary stalk, where the two internal carotid arteries and the basilar artery join. From it rise the anterior, middle and posterior cerebral arteries.",
      "The ring is a safety loop: if one feeder narrows, blood can flow round the circle to reach its territory. The brain is only 2% of body weight but takes about 15–20% of the heart's output and 20% of its oxygen.",
    ],
    functions: [
      "Distributing blood to every part of the brain through three paired cerebral arteries.",
      "Providing collateral flow when one artery is blocked.",
      "Autoregulation: keeping brain blood flow constant across a wide range of blood pressures.",
      "Neurovascular coupling: sending more blood to whichever region is working hardest (the signal that fMRI measures).",
    ],
    facts: [
      { label: "Cardiac output to brain", sub: "At rest", badge: "15–20%", tone: "up" },
      { label: "Complete ring", sub: "Share of people with the textbook anatomy", badge: "~30%", tone: "neutral" },
      { label: "Aneurysms", sub: "Most arise at circle of Willis branch points", badge: "Berry", tone: "down" },
      { label: "Named for", sub: "Thomas Willis, Oxford", badge: "1664", tone: "neutral" },
    ],
    whenDamaged: [
      "Ischaemic stroke when a cerebral artery is blocked; each artery has a signature deficit.",
      "Subarachnoid haemorrhage from a ruptured berry aneurysm, a sudden 'worst headache of my life'.",
      "Small-vessel disease from high blood pressure and diabetes, causing white-matter damage and vascular dementia.",
      "Moyamoya disease: progressive narrowing of the circle with fragile collateral vessels.",
    ],
    vitamins: [
      {
        name: "Vitamin B12, folate & B6",
        dose: "2.4 µg + 400 µg + 1.5 mg/day",
        bullets: ["Lower homocysteine, an independent risk factor for stroke; folate supplementation reduced first stroke by ~20% in the CSPPT trial."],
      },
      {
        name: "Vitamin K2",
        dose: "90–120 µg/day",
        bullets: ["Activates matrix Gla protein, which prevents calcification of arterial walls. Caution: vitamin K interacts with warfarin."],
      },
      {
        name: "Vitamin C (ascorbic acid)",
        dose: "75–90 mg/day",
        bullets: ["Needed for the collagen that gives arteries their strength; high dietary vitamin C is associated with lower stroke risk."],
      },
      {
        name: "Vitamin D",
        dose: "600–800 IU/day",
        bullets: ["Deficiency is associated with hypertension and stroke; supports endothelial function."],
      },
      {
        name: "Vitamin E (tocopherols)",
        dose: "15 mg/day",
        bullets: ["Antioxidant for the vessel wall; high-dose supplements, however, may raise haemorrhagic stroke risk, so food sources are preferred."],
      },
    ],
    otherNutrients: [
      {
        name: "Potassium & omega-3",
        dose: "3.5 g + 1 g/day",
        bullets: ["Potassium-rich diets lower blood pressure and stroke risk; omega-3 reduces triglycerides and arterial inflammation."],
      },
    ],
  },
];
