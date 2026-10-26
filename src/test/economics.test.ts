import { describe, it, expect } from "vitest";
import { providerEconomics } from "@/lib/economics";

describe("provider economics", () => {
  it("5 treatments at $250 earns $1,250", () => expect(providerEconomics(5).revenue).toBe(1250));
  it("50 treatments at $250 earns $12,500", () => expect(providerEconomics(50).revenue).toBe(12500));
  it("kit costs $35 per treatment", () => expect(providerEconomics(10).consumables).toBe(350));
});
