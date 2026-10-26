import { describe, it, expect } from "vitest";
import { providerEconomics } from "@/lib/economics";

describe("provider economics", () => {
  it("5 treatments at $250 earns $1,250", () => expect(providerEconomics(5).revenue).toBe(1250));
  it("50 treatments at $250 earns $12,500", () => expect(providerEconomics(50).revenue).toBe(12500));
  it("kit costs $35 per treatment", () => expect(providerEconomics(10).consumables).toBe(350));
  it("illustrative lease is $900/month", () => expect(providerEconomics(10).lease).toBe(900));
  it("25 treatments yields $4,475 gross contribution after lease", () =>
    expect(providerEconomics(25).contribution).toBe(6250 - 875 - 900));
});
