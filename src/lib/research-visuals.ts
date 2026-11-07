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
  { title: "Topical application", src: step1.url, description: "A candidate serum containing microbubbles would be applied to the skin surface. The skin’s outer barrier limits the passage of many topical ingredients; the formulation and its stability still need to be evaluated.", alt: "Concept illustration of microbubbles in a topical formulation above the skin barrier" },
  { title: "Acoustic exposure", src: step2.url, description: "An ultrasound applicator would transmit acoustic energy into the topical formulation. The device, applicator and operating settings need to be evaluated together to understand how that energy reaches the microbubbles.", alt: "Concept ultrasound applicator above a topical formulation and skin layers" },
  { title: "Oscillation and cavitation", src: step3.url, description: "Under specific ultrasound conditions, microbubbles can expand and contract, and some can collapse — a response called cavitation. This activity may influence skin-barrier permeability, depending on the formulation and acoustic conditions; it has not been established for Cavinova.", alt: "Concept illustration of bubble oscillation and collapse above the skin barrier" },
  { title: "Proposed enhanced permeation", src: step4.url, description: "The hypothesis is that the bubble response could help topical ingredients pass through the skin’s outer barrier. Cavinova would need to compare this approach with topical application alone and ultrasound without microbubbles, while evaluating ingredient delivery and skin safety.", alt: "Hypothetical ingredient movement through skin layers, not a validated outcome" },
] as const;