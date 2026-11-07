import handheld from "@/assets/handheld.png.asset.json";
import architecture from "@/assets/handpiece-architecture.png.asset.json";
import consoleConcept from "@/assets/console-concept.png.asset.json";
import acoustic from "@/assets/planned_validation-research.png.asset.json";
import safety from "@/assets/biocompatibily-research.png.asset.json";
import step1 from "@/assets/science-concept-1.png.asset.json";
import step2 from "@/assets/science-concept-2.png.asset.json";
import step3 from "@/assets/science-concept-3.png.asset.json";
import step4 from "@/assets/science-concept-4.png.asset.json";

// Only reviewed safe derivatives enter the public visual inventory.
export const researchVisuals = { handheld: handheld.url, architecture: architecture.url, console: consoleConcept.url, acoustic: acoustic.url, safety: safety.url };
export const scienceSteps = [
  { title: "Topical application", src: step1.url, description: "A candidate formulation containing microbubbles is illustrated on the skin surface.", alt: "Concept illustration of microbubbles in a topical formulation above the skin barrier" },
  { title: "Acoustic exposure", src: step2.url, description: "An applicator represents ultrasound exposure. Acoustic output and operating settings would need to be established for a specific configuration.", alt: "Concept ultrasound applicator above a topical formulation and skin layers" },
  { title: "Oscillation and cavitation", src: step3.url, description: "Under specific ultrasound conditions, bubbles can oscillate or collapse. The illustrated response is not a measured Cavinova result.", alt: "Concept illustration of bubble oscillation and collapse above the skin barrier" },
  { title: "Proposed enhanced permeation", src: step4.url, description: "Arrows represent the delivery hypothesis to investigate, not demonstrated ingredient transport or established skin safety.", alt: "Hypothetical ingredient movement through skin layers, not a validated outcome" },
] as const;