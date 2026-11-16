import { describe, expect, it } from "vitest";
import { equipmentScenario, illustrativeEquipmentLocations } from "@/lib/opportunity";
import { takeHomePairings } from "@/routes/opportunity";

describe("approved six-state equipment scenario", () => {
  it("uses the team's approximately 1,870 screened med spas", () => expect(equipmentScenario.screenedLocations).toBe(1870));
  it("limits the scenario to the six named states", () => expect(equipmentScenario.states).toEqual(["California", "Florida", "Illinois", "New Jersey", "New York", "Texas"]));
  it("uses a 1% cumulative adoption assumption", () => expect(equipmentScenario.cumulativeAdoption).toBe(0.01));
  it("rounds 18.7 equipment locations to 19 without the retired serviceability input", () => {
    expect(equipmentScenario.screenedLocations * equipmentScenario.cumulativeAdoption).toBeCloseTo(18.7);
    expect(illustrativeEquipmentLocations).toBe(19);
  });
});

describe("take-home pairing lineup", () => {
  it("starts with the three pairings inspired by the in-spa serums", () =>
    expect(
      takeHomePairings.filter((p) => p.stage === "starting").map((p) => p.name),
    ).toEqual(["Hydrate & Glow", "Smooth & Firm", "Brighten & Even Tone"]));
  it("plans exactly two further pairings over time", () =>
    expect(
      takeHomePairings.filter((p) => p.stage === "planned").map((p) => p.name),
    ).toEqual(["Texture & Polish", "Signature Radiance"]));
});