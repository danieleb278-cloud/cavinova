import { describe, it, expect } from "vitest";
import * as market from "@/lib/market";

describe("illustrative med-spa market scenario", () => {
  it("starts with 10,488 med spas in 2023", () => expect(market.US_MED_SPAS_2023).toBe(10488));
  it("uses 57% hydradermabrasion as a proxy", () => expect(market.HYDRADERMABRASION_SHARE).toBe(0.57));
  it("uses team qualification of 70%", () => expect(market.TEAM_QUALIFICATION_SHARE).toBe(0.70));
  it("uses team serviceability of 40%", () => expect(market.TEAM_SERVICEABILITY_SHARE).toBe(0.40));
  it("uses team capture of 5%", () => expect(market.TEAM_CAPTURE_SHARE).toBe(0.05));
  it("rounds TAM to 4,185", () => expect(market.TAM_LOCATIONS).toBe(4185));
  it("rounds SAM from rounded TAM to 1,674", () => expect(market.SAM_LOCATIONS).toBe(1674));
  it("rounds SOM from rounded SAM to 84", () => expect(market.SOM_LOCATIONS).toBe(84));
  it("values one console per TAM location at $188.325M", () => expect(market.TAM_EQUIPMENT_POTENTIAL).toBe(188325000));
  it("values one console per SAM location at $75.33M", () => expect(market.SAM_EQUIPMENT_POTENTIAL).toBe(75330000));
  it("uses 300 annual kits per location", () => expect(market.ANNUAL_KITS_PER_LOCATION).toBe(300));
  it("uses $10,500 annual kit revenue per location", () => expect(market.ANNUAL_KIT_REVENUE_PER_LOCATION).toBe(10500));
  it("values TAM annual kit scenario at $43.9425M", () => expect(market.TAM_ANNUAL_KIT_SCENARIO).toBe(43942500));
  it("values SAM annual kit scenario at $17.577M", () => expect(market.SAM_ANNUAL_KIT_SCENARIO).toBe(17577000));
});