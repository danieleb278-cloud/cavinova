import { describe, expect, it } from "vitest";
import { researchVisuals, scienceSteps } from "@/lib/research-visuals";
import original1 from "@/assets/science-step-1.png.asset.json";
import original2 from "@/assets/science-step-2.png.asset.json";
import original3 from "@/assets/science-step-3.png.asset.json";
import original4 from "@/assets/science-step-4.png.asset.json";
import originalHandpiece from "@/assets/Cavinova_Customizable_Treatment_System.png.asset.json";
import originalConsole from "@/assets/Cavinova_Customizable_Treatment_System_1.png.asset.json";

describe("public research artwork safety", () => {
  it("never exposes unredacted mechanism and treatment-system artwork through the public inventory", () => {
    const unsafe = [original1.url, original2.url, original3.url, original4.url, originalHandpiece.url, originalConsole.url];
    const publicUrls = [...Object.values(researchVisuals), ...scienceSteps.map((step) => step.src)];
    expect(publicUrls.filter((url) => unsafe.includes(url))).toEqual([]);
    expect(new Set(scienceSteps.map((step) => step.src)).size).toBe(4);
  });
});