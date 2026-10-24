"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { BrainView, CategoryId } from "@/data";
import { categories, partById } from "@/data";

gsap.registerPlugin(useGSAP);

/* ------------------------------------------------------------------
   Region geometry. The brain faces LEFT. ViewBox is 1000 x 1000.
   Each region knows which category it belongs to and, optionally,
   which single structure (part) it represents, so highlighting is
   driven purely by ids coming from the data layer.
------------------------------------------------------------------- */
type Kind = "lobe" | "deep" | "ghost" | "stroke" | "glyph";
interface Region {
  id: string;
  cat: CategoryId | null;
  part?: string;
  view: BrainView | "both";
  kind: Kind;
  d?: string;
  el?: React.ReactNode;
  dashed?: boolean;
}

const SILHOUETTE =
  "M180 410C185 320 240 230 330 195C370 180 420 172 470 172C560 162 660 165 735 195C752 205 762 222 768 240C820 275 850 320 852 380C854 440 835 500 795 535C760 520 735 505 715 490C700 530 660 565 600 585C540 605 460 610 390 595C330 582 280 545 252 497C215 485 185 455 180 410Z";

const CEREBELLUM =
  "M640 575C690 560 760 540 800 540C840 545 860 585 850 625C840 670 790 700 730 700C670 700 620 670 615 630C612 605 625 585 640 575Z";

const BRAINSTEM =
  "M536 580C560 592 590 594 612 586C620 630 618 690 610 750C606 790 596 825 578 850C560 825 548 790 546 750C542 700 536 640 536 580Z";

const regions: Region[] = [
  /* ---------------- LATERAL (outside) view ---------------- */
  { id: "brainstem-lat", cat: "brainstem", view: "lateral", kind: "deep", d: BRAINSTEM },
  { id: "cerebellum-lat", cat: "cerebellum", view: "lateral", kind: "deep", d: CEREBELLUM },
  {
    id: "vermis-lat",
    cat: "cerebellum",
    part: "vermis",
    view: "lateral",
    kind: "ghost",
    d: "M672 570C690 560 710 560 720 575C722 610 718 650 706 690C690 695 672 690 660 680C656 640 660 600 672 570Z",
  },
  {
    id: "deep-nuclei-lat",
    cat: "cerebellum",
    part: "deep-cerebellar-nuclei",
    view: "lateral",
    kind: "ghost",
    el: <ellipse cx="712" cy="680" rx="26" ry="16" />,
  },
  {
    id: "cerebellar-cortex-lat",
    cat: "cerebellum",
    part: "cerebellar-cortex",
    view: "lateral",
    kind: "ghost",
    d: "M735 560C780 548 830 560 848 600C856 640 826 685 770 695C738 698 718 684 724 660C740 630 742 590 735 560Z",
  },
  {
    id: "frontal",
    cat: "cortex",
    part: "frontal-lobe",
    view: "lateral",
    kind: "lobe",
    d: "M180 410C185 320 240 230 330 195C370 180 420 172 470 172C462 240 450 330 432 442C380 455 320 470 252 497C215 485 185 455 180 410Z",
  },
  {
    id: "parietal",
    cat: "cortex",
    part: "parietal-lobe",
    view: "lateral",
    kind: "lobe",
    d: "M470 172C560 162 660 165 735 195C752 205 762 222 768 240C740 300 710 370 690 440C668 425 640 410 620 403C560 410 500 428 432 442C450 330 462 240 470 172Z",
  },
  {
    id: "occipital",
    cat: "cortex",
    part: "occipital-lobe",
    view: "lateral",
    kind: "lobe",
    d: "M768 240C820 275 850 320 852 380C854 440 835 500 795 535C760 520 735 505 715 490C705 475 698 460 690 440C710 370 740 300 768 240Z",
  },
  {
    id: "temporal",
    cat: "cortex",
    part: "temporal-lobe",
    view: "lateral",
    kind: "lobe",
    d: "M252 497C320 470 380 455 432 442C500 428 560 410 620 403C640 410 668 425 690 440C698 460 705 475 715 490C700 530 660 565 600 585C540 605 460 610 390 595C330 582 280 545 252 497Z",
  },
  {
    id: "prefrontal",
    cat: "cortex",
    part: "prefrontal-cortex",
    view: "lateral",
    kind: "ghost",
    d: "M180 410C185 320 240 230 330 195C345 240 335 320 320 380C300 430 270 470 252 497C215 485 185 455 180 410Z",
  },
  {
    id: "sensorimotor",
    cat: "cortex",
    part: "sensorimotor-cortex",
    view: "lateral",
    kind: "ghost",
    d: "M440 174C462 170 484 170 506 172C498 260 486 350 470 438C456 440 442 441 432 442C450 330 462 240 440 174Z",
  },
  {
    id: "insula",
    cat: "cortex",
    part: "insula",
    view: "lateral",
    kind: "ghost",
    dashed: true,
    el: <ellipse cx="430" cy="470" rx="62" ry="26" transform="rotate(-10 430 470)" />,
  },
  {
    id: "claustrum",
    cat: "cortex",
    part: "claustrum",
    view: "lateral",
    kind: "ghost",
    dashed: true,
    el: <ellipse cx="548" cy="452" rx="9" ry="38" transform="rotate(-18 548 452)" />,
  },
  {
    id: "broca",
    cat: "cortex",
    part: "broca-area",
    view: "lateral",
    kind: "ghost",
    el: <ellipse cx="335" cy="418" rx="42" ry="24" transform="rotate(-12 335 418)" />,
  },
  {
    id: "wernicke",
    cat: "cortex",
    part: "wernicke-area",
    view: "lateral",
    kind: "ghost",
    el: <ellipse cx="640" cy="395" rx="46" ry="22" transform="rotate(-16 640 395)" />,
  },
  {
    id: "flocculonodular",
    cat: "cerebellum",
    part: "flocculonodular-lobe",
    view: "both",
    kind: "ghost",
    el: <ellipse cx="640" cy="652" rx="24" ry="15" transform="rotate(20 640 652)" />,
  },

  /* ---------------- MEDIAL (cut-through) view ---------------- */
  { id: "brainstem-med-base", cat: null, view: "medial", kind: "deep", d: BRAINSTEM },
  { id: "cerebrum-med", cat: "cortex", view: "medial", kind: "lobe", d: SILHOUETTE },
  { id: "cerebellum-med", cat: "cerebellum", view: "medial", kind: "deep", d: CEREBELLUM },
  {
    id: "vermis-med",
    cat: "cerebellum",
    part: "vermis",
    view: "medial",
    kind: "ghost",
    d: "M672 570C690 560 710 560 720 575C722 610 718 650 706 690C690 695 672 690 660 680C656 640 660 600 672 570Z",
  },
  {
    id: "deep-nuclei-med",
    cat: "cerebellum",
    part: "deep-cerebellar-nuclei",
    view: "medial",
    kind: "ghost",
    el: <ellipse cx="712" cy="680" rx="26" ry="16" />,
  },
  {
    id: "cerebellar-cortex-med",
    cat: "cerebellum",
    part: "cerebellar-cortex",
    view: "medial",
    kind: "ghost",
    d: "M735 560C780 548 830 560 848 600C856 640 826 685 770 695C738 698 718 684 724 660C740 630 742 590 735 560Z",
  },
  {
    id: "meninges",
    cat: "support",
    part: "meninges",
    view: "medial",
    kind: "stroke",
    d: SILHOUETTE,
  },
  {
    id: "cingulate",
    cat: "limbic",
    part: "cingulate-gyrus",
    view: "medial",
    kind: "deep",
    d: "M290 420C290 300 400 250 520 250C650 250 735 300 745 400C740 410 730 415 720 410C710 330 640 290 520 290C400 290 330 330 325 420C315 428 300 428 290 420Z",
  },
  {
    id: "corpus-callosum",
    cat: "support",
    part: "corpus-callosum",
    view: "medial",
    kind: "deep",
    d: "M320 400C330 330 420 300 520 300C620 300 690 330 700 390C700 410 690 420 675 420C680 380 640 340 520 340C420 340 370 370 355 400C345 415 335 420 320 400Z",
  },
  {
    id: "ventricles",
    cat: "support",
    part: "ventricles-csf",
    view: "medial",
    kind: "ghost",
    d: "M365 420C390 380 470 365 560 370C620 375 660 395 668 420C640 405 560 395 470 400C420 405 385 415 365 420Z",
  },
  {
    id: "fornix",
    cat: "limbic",
    part: "fornix",
    view: "medial",
    kind: "stroke",
    d: "M352 428C400 372 520 366 600 398",
  },
  {
    id: "entorhinal",
    cat: "limbic",
    part: "entorhinal-cortex",
    view: "medial",
    kind: "ghost",
    el: <ellipse cx="700" cy="566" rx="30" ry="12" transform="rotate(-8 700 566)" />,
  },
  {
    id: "habenula",
    cat: "diencephalon",
    part: "habenula",
    view: "medial",
    kind: "deep",
    el: <ellipse cx="628" cy="470" rx="11" ry="7" />,
  },
  {
    id: "optic-chiasm",
    cat: "diencephalon",
    part: "optic-chiasm",
    view: "medial",
    kind: "stroke",
    d: "M398 546L452 574M452 546L398 574",
  },
  {
    id: "vta",
    cat: "basal",
    part: "ventral-tegmental-area",
    view: "medial",
    kind: "ghost",
    el: <ellipse cx="552" cy="640" rx="14" ry="9" />,
  },
  {
    id: "pag",
    cat: "brainstem",
    part: "periaqueductal-grey",
    view: "medial",
    kind: "stroke",
    el: <circle cx="600" cy="588" r="13" />,
  },
  {
    id: "locus-coeruleus",
    cat: "brainstem",
    part: "locus-coeruleus",
    view: "medial",
    kind: "deep",
    el: <circle cx="612" cy="658" r="7" />,
  },
  {
    id: "raphe",
    cat: "brainstem",
    part: "raphe-nuclei",
    view: "medial",
    kind: "ghost",
    dashed: true,
    el: <ellipse cx="597" cy="705" rx="6" ry="92" />,
  },
  {
    id: "synapse",
    cat: "support",
    part: "synapse",
    view: "medial",
    kind: "glyph",
    el: (
      <g>
        <path d="M296 392C304 382 314 380 322 388" fill="none" strokeWidth="4" strokeLinecap="round" />
        <circle cx="314" cy="394" r="9" />
        <path d="M330 394C332 390 338 390 340 394" fill="none" strokeWidth="3" />
        <circle cx="352" cy="394" r="9" />
        <path d="M361 392C370 382 380 384 386 392" fill="none" strokeWidth="4" strokeLinecap="round" />
      </g>
    ),
  },
  {
    id: "choroid",
    cat: "support",
    part: "choroid-plexus",
    view: "medial",
    kind: "stroke",
    d: "M470 405C488 394 506 412 524 400C542 390 560 408 580 398C590 394 598 398 606 404",
  },
  {
    id: "willis",
    cat: "support",
    part: "circle-of-willis",
    view: "medial",
    kind: "glyph",
    el: (
      <g>
        <circle cx="470" cy="650" r="20" fill="none" strokeWidth="5" />
        <path d="M470 630V612M470 670V690M450 650H432M490 650H508M456 636L444 624M484 636L496 624" fill="none" strokeWidth="4" strokeLinecap="round" />
      </g>
    ),
  },
  {
    id: "caudate",
    cat: "basal",
    part: "striatum",
    view: "medial",
    kind: "ghost",
    d: "M430 372C470 352 540 352 590 392C600 402 592 414 580 410C540 380 480 380 440 396C428 400 420 384 430 372Z",
  },
  {
    id: "putamen",
    cat: "basal",
    part: "striatum",
    view: "medial",
    kind: "ghost",
    el: <ellipse cx="468" cy="470" rx="26" ry="40" transform="rotate(-12 468 470)" />,
  },
  {
    id: "globus-pallidus",
    cat: "basal",
    part: "globus-pallidus",
    view: "medial",
    kind: "ghost",
    el: <ellipse cx="502" cy="472" rx="16" ry="27" transform="rotate(-12 502 472)" />,
  },
  {
    id: "accumbens",
    cat: "basal",
    part: "nucleus-accumbens",
    view: "medial",
    kind: "ghost",
    el: <circle cx="400" cy="505" r="17" />,
  },
  {
    id: "subthalamic",
    cat: "basal",
    part: "subthalamic-nucleus",
    view: "medial",
    kind: "ghost",
    el: <ellipse cx="572" cy="522" rx="15" ry="9" transform="rotate(-15 572 522)" />,
  },
  {
    id: "thalamus",
    cat: "diencephalon",
    part: "thalamus",
    view: "medial",
    kind: "deep",
    el: <ellipse cx="555" cy="440" rx="72" ry="46" />,
  },
  {
    id: "hypothalamus",
    cat: "diencephalon",
    part: "hypothalamus",
    view: "medial",
    kind: "deep",
    d: "M452 470C480 464 512 470 526 492C520 522 494 537 468 536C448 530 438 505 452 470Z",
  },
  {
    id: "mammillary",
    cat: "limbic",
    part: "mammillary-bodies",
    view: "medial",
    kind: "deep",
    el: <circle cx="505" cy="550" r="11" />,
  },
  {
    id: "pituitary-stalk",
    cat: "diencephalon",
    part: "pituitary-gland",
    view: "medial",
    kind: "stroke",
    d: "M470 540C460 558 450 575 444 592",
  },
  {
    id: "pituitary",
    cat: "diencephalon",
    part: "pituitary-gland",
    view: "medial",
    kind: "deep",
    el: <circle cx="440" cy="607" r="17" />,
  },
  {
    id: "pineal",
    cat: "diencephalon",
    part: "pineal-gland",
    view: "medial",
    kind: "deep",
    el: <ellipse cx="655" cy="428" rx="13" ry="9" />,
  },
  {
    id: "hippocampus",
    cat: "limbic",
    part: "hippocampus",
    view: "medial",
    kind: "ghost",
    d: "M580 505C620 488 665 498 692 530C702 550 684 562 662 552C636 536 606 540 586 540C572 535 568 516 580 505Z",
  },
  {
    id: "amygdala",
    cat: "limbic",
    part: "amygdala",
    view: "medial",
    kind: "ghost",
    el: <ellipse cx="560" cy="578" rx="19" ry="14" transform="rotate(-20 560 578)" />,
  },
  {
    id: "olfactory-tract",
    cat: "limbic",
    part: "olfactory-bulb",
    view: "medial",
    kind: "stroke",
    d: "M255 585C280 572 300 562 320 556",
  },
  {
    id: "olfactory",
    cat: "limbic",
    part: "olfactory-bulb",
    view: "medial",
    kind: "deep",
    el: <ellipse cx="232" cy="588" rx="27" ry="9" transform="rotate(-12 232 588)" />,
  },
  {
    id: "midbrain",
    cat: "brainstem",
    part: "midbrain",
    view: "medial",
    kind: "deep",
    d: "M560 560C580 554 612 554 632 566C638 590 634 616 626 640C606 646 580 646 564 640C558 614 556 586 560 560Z",
  },
  {
    id: "substantia-nigra",
    cat: "basal",
    part: "substantia-nigra",
    view: "medial",
    kind: "stroke",
    d: "M570 600C586 612 606 612 622 600",
  },
  {
    id: "pons",
    cat: "brainstem",
    part: "pons",
    view: "medial",
    kind: "deep",
    d: "M556 640C580 646 610 646 632 640C652 662 652 702 632 732C606 742 576 742 556 732C540 702 540 662 556 640Z",
  },
  {
    id: "medulla",
    cat: "brainstem",
    part: "medulla-oblongata",
    view: "medial",
    kind: "deep",
    d: "M558 732C576 740 612 740 630 732C627 782 617 832 602 872C592 882 576 882 568 872C555 832 552 782 558 732Z",
  },
  {
    id: "reticular",
    cat: "brainstem",
    part: "reticular-formation",
    view: "medial",
    kind: "ghost",
    dashed: true,
    el: <ellipse cx="596" cy="700" rx="17" ry="95" />,
  },
  {
    id: "bbb",
    cat: "support",
    part: "blood-brain-barrier",
    view: "medial",
    kind: "glyph",
    el: (
      <g>
        <path d="M230 520C250 510 262 532 282 522C296 514 302 530 316 528" fill="none" strokeWidth="7" strokeLinecap="round" />
        <path d="M262 528L252 548M282 522L290 544M300 526L298 548" fill="none" strokeWidth="3" strokeLinecap="round" />
      </g>
    ),
  },
  {
    id: "neuron",
    cat: "support",
    part: "neuron",
    view: "medial",
    kind: "glyph",
    el: (
      <g>
        <circle cx="335" cy="325" r="13" />
        <path d="M335 338L338 380L352 398M332 380L322 396M324 316L300 300M347 315L372 300M322 332L296 342M349 331L372 344" fill="none" strokeWidth="4" strokeLinecap="round" />
      </g>
    ),
  },
  {
    id: "glia",
    cat: "support",
    part: "glial-cells",
    view: "medial",
    kind: "glyph",
    el: (
      <g>
        <circle cx="300" cy="445" r="10" />
        <path d="M300 435L300 418M300 455L300 472M290 445L272 445M310 445L328 445M292 437L280 425M308 437L320 425M292 453L280 465M308 453L320 465" fill="none" strokeWidth="3.5" strokeLinecap="round" />
      </g>
    ),
  },
];

/* Sulci decoration strokes for the lateral view (purely cosmetic). */
const lateralSulci = [
  "M230 300C280 290 300 330 350 320",
  "M258 380C310 362 340 402 392 386",
  "M300 240C330 230 352 262 404 250",
  "M500 215C540 205 560 240 610 232",
  "M520 300C565 282 600 322 660 300",
  "M560 360C600 350 630 380 680 365",
  "M740 300C765 320 770 360 760 400",
  "M760 440C790 450 800 490 780 520",
  "M330 520C380 500 420 540 470 520",
  "M480 470C530 455 560 490 610 470",
  "M560 540C600 520 640 550 680 530",
  "M400 560C440 548 470 580 520 565",
  "M210 360C240 350 260 380 300 372",
  "M380 210C420 198 450 222 500 208",
  "M620 220C660 210 690 240 740 232",
  "M700 470C730 462 760 480 800 475",
  "M250 440C280 430 300 452 340 444",
];

/* Gyri hints for the medial surface (cingulate and medial frontal/parietal). */
const medialGyri = [
  "M300 250C360 220 440 212 520 214",
  "M560 214C640 218 700 240 740 280",
  "M250 330C270 300 300 280 340 270",
  "M760 330C780 360 790 400 785 450",
  "M250 470C275 500 310 520 350 540",
  "M650 560C690 540 730 520 770 520",
];

const cerebellumFolia = [
  "M640 600C690 590 750 592 820 600",
  "M630 630C690 620 760 622 840 630",
  "M640 660C690 652 760 655 830 660",
  "M670 685C720 680 770 682 810 686",
];

/* Arbor vitae for the medial cerebellum. */
const arborVitae = (
  <g fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="3" strokeLinecap="round" clipPath="url(#clip-cerebellum)">
    <path d="M700 690C705 650 715 620 735 600" />
    <path d="M722 640C745 630 760 615 790 615M724 655C750 650 770 650 815 655M716 670C740 672 765 680 800 686M714 625C700 610 680 600 660 598M716 648C695 645 668 650 645 660" />
  </g>
);

interface Props {
  view: BrainView;
  highlightCat: CategoryId | null;
  activePart: string | null;
  dim: boolean;
}

const catColor = Object.fromEntries(categories.map((c) => [c.id, c.color])) as Record<CategoryId, string>;

export default function BrainSvg({ view, highlightCat, activePart, dim }: Props) {
  const root = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const show = view === "lateral" ? ".view-lateral" : ".view-medial";
      const hide = view === "lateral" ? ".view-medial" : ".view-lateral";
      gsap.to(hide, { autoAlpha: 0, scale: 0.97, transformOrigin: "50% 50%", duration: 0.45, ease: "power2.in" });
      gsap.to(show, { autoAlpha: 1, scale: 1, transformOrigin: "50% 50%", duration: 0.7, ease: "power2.out", delay: 0.25 });
    },
    { dependencies: [view], scope: root },
  );

  useGSAP(
    () => {
      // Gentle idle "breathing" of the whole brain, like the slowly turning 3D body.
      gsap.to(".brain-breathe", { y: -8, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1 });
    },
    { scope: root },
  );

  const active = activePart ? partById[activePart] : null;

  useGSAP(
    () => {
      if (!active) return;
      // A soft pulsing halo around the structure the story is about.
      const origin = `${active.pos.x} ${active.pos.y}`;
      gsap.fromTo(
        ".halo-ring",
        { scale: 0.5, opacity: 0.9 },
        { scale: 2.2, opacity: 0, duration: 2, repeat: -1, ease: "power1.out", svgOrigin: origin, stagger: 0.7 },
      );
      gsap.fromTo(
        ".halo-core",
        { scale: 0.9, opacity: 0.45 },
        { scale: 1.15, opacity: 0.2, duration: 1.4, repeat: -1, yoyo: true, ease: "sine.inOut", svgOrigin: origin },
      );
    },
    { dependencies: [activePart], scope: root, revertOnUpdate: true },
  );

  const styleFor = (r: Region): React.CSSProperties => {
    const inCat = highlightCat !== null && r.cat === highlightCat;
    const isPart = activePart !== null && r.part === activePart;
    const color = r.cat ? catColor[r.cat] : "#ffffff";
    const base: React.CSSProperties = {
      transition: "fill 0.6s ease, stroke 0.6s ease, opacity 0.6s ease, filter 0.6s ease",
    };

    if (r.kind === "stroke") {
      return {
        ...base,
        fill: "none",
        stroke: inCat ? color : "rgba(255,255,255,0.7)",
        strokeWidth: isPart ? 12 : inCat ? 9 : 6,
        opacity: dim && !inCat ? 0.35 : 0.9,
        filter: inCat ? `url(#glow-${r.cat})` : undefined,
      };
    }
    if (r.kind === "glyph") {
      return {
        ...base,
        fill: inCat ? color : "rgba(255,255,255,0.75)",
        stroke: inCat ? color : "rgba(255,255,255,0.75)",
        opacity: inCat ? 1 : dim ? 0.3 : 0.75,
        filter: inCat ? `url(#glow-${r.cat})` : undefined,
      };
    }
    if (r.kind === "ghost") {
      return {
        ...base,
        fill: isPart ? color : inCat ? `${color}99` : "rgba(255,255,255,0.22)",
        stroke: inCat ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)",
        strokeWidth: 2,
        strokeDasharray: r.dashed ? "8 6" : undefined,
        opacity: inCat ? 1 : dim ? 0.3 : 0.9,
        filter: isPart ? `url(#glow-${r.cat})` : undefined,
      };
    }
    // lobe / deep
    return {
      ...base,
      fill: isPart ? color : inCat ? `${color}cc` : r.kind === "deep" ? "url(#deepFill)" : "url(#brainFill)",
      stroke: "rgba(255,255,255,0.85)",
      strokeWidth: 2.5,
      opacity: dim && !inCat ? 0.5 : 1,
      filter: inCat ? `url(#glow-${r.cat})` : undefined,
    };
  };

  const render = (r: Region) => {
    const style = styleFor(r);
    const common = { "data-region": r.id, style } as const;
    if (r.el) {
      return (
        <g key={r.id} {...common}>
          {r.el}
        </g>
      );
    }
    return <path key={r.id} d={r.d} {...common} />;
  };

  const lateral = regions.filter((r) => r.view === "lateral" || r.view === "both");
  const medial = regions.filter((r) => r.view === "medial" || r.view === "both");

  return (
    <svg
      ref={root}
      viewBox="0 0 1000 1000"
      className="h-full w-full overflow-visible"
      role="img"
      aria-label={`Human brain, ${view} view`}
    >
      <defs>
        <linearGradient id="brainFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="0.45" stopColor="#e6f4ee" stopOpacity="0.9" />
          <stop offset="1" stopColor="#bfe0d4" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id="deepFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3faf7" stopOpacity="0.95" />
          <stop offset="1" stopColor="#cfe8de" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="gloss" cx="0.3" cy="0.22" r="0.7">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.15" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="specular" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="shade" cx="0.6" cy="0.85" r="0.7">
          <stop offset="0" stopColor="#0b7a6a" stopOpacity="0.28" />
          <stop offset="0.6" stopColor="#0b7a6a" stopOpacity="0.06" />
          <stop offset="1" stopColor="#0b7a6a" stopOpacity="0" />
        </radialGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="22" floodColor="#0b7a6a" floodOpacity="0.22" />
        </filter>
        {categories.map((c) => (
          <filter key={c.id} id={`glow-${c.id}`} x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor={c.color} floodOpacity="0.85" />
          </filter>
        ))}
        <clipPath id="clip-cerebrum">
          <path d={SILHOUETTE} />
        </clipPath>
        <clipPath id="clip-cerebellum">
          <path d={CEREBELLUM} />
        </clipPath>
      </defs>

      <g className="brain-breathe">
        {/* ---------- LATERAL ---------- */}
        <g className="view-lateral" filter="url(#softShadow)" style={{ opacity: view === "lateral" ? 1 : 0 }}>
          {lateral.map(render)}
          <g fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" pointerEvents="none" clipPath="url(#clip-cerebrum)">
            {lateralSulci.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          <g fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="3" strokeLinecap="round" pointerEvents="none" clipPath="url(#clip-cerebellum)">
            {cerebellumFolia.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          <path d={SILHOUETTE} fill="url(#gloss)" pointerEvents="none" style={{ mixBlendMode: "screen" }} />
          <path d={SILHOUETTE} fill="url(#shade)" pointerEvents="none" />
          <ellipse cx="360" cy="260" rx="120" ry="55" fill="url(#specular)" pointerEvents="none" transform="rotate(-18 360 260)" opacity="0.8" />
          <path d={CEREBELLUM} fill="url(#gloss)" pointerEvents="none" opacity="0.6" />
        </g>

        {/* ---------- MEDIAL ---------- */}
        <g className="view-medial" filter="url(#softShadow)" style={{ opacity: view === "medial" ? 1 : 0 }}>
          {medial.map(render)}
          {arborVitae}
          <g fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="3" strokeLinecap="round" pointerEvents="none" clipPath="url(#clip-cerebrum)">
            {medialGyri.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
          <path d={SILHOUETTE} fill="url(#gloss)" pointerEvents="none" style={{ mixBlendMode: "screen" }} opacity="0.7" />
          <path d={SILHOUETTE} fill="url(#shade)" pointerEvents="none" opacity="0.6" />
          <ellipse cx="360" cy="260" rx="120" ry="55" fill="url(#specular)" pointerEvents="none" transform="rotate(-18 360 260)" opacity="0.6" />
        </g>

        {/* Pulsing halo around the active structure (story phase) */}
        {active && (
          <g pointerEvents="none">
            <circle className="halo-core" cx={active.pos.x} cy={active.pos.y} r="34" fill={catColor[active.category]} opacity="0.35" style={{ filter: "blur(6px)" }} />
            <circle className="halo-ring" cx={active.pos.x} cy={active.pos.y} r="30" fill="none" stroke={catColor[active.category]} strokeWidth="3" />
            <circle className="halo-ring" cx={active.pos.x} cy={active.pos.y} r="30" fill="none" stroke="#ffffff" strokeWidth="2" />
          </g>
        )}
      </g>
    </svg>
  );
}
