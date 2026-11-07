import { describe, it, expect } from "vitest";
import { CONSOLE_PRICE, DEFAULT_MONTHLY_TREATMENTS, PATIENT_PRICE, providerEconomics } from "@/lib/economics";

describe("provider economics", () => {
  it("5 treatments at $250 earns $1,250", () => expect(providerEconomics(5).revenue).toBe(1250));
  it("50 treatments at $250 earns $12,500", () => expect(providerEconomics(50).revenue).toBe(12500));
  it("kit costs $35 per treatment", () => expect(providerEconomics(10).consumables).toBe(350));
  it("illustrative lease is $900/month", () => expect(providerEconomics(10).lease).toBe(900));
  it("illustrative console purchase costs $45,000", () => expect(CONSOLE_PRICE).toBe(45000));
  it("illustrative patient fee is $250", () => expect(PATIENT_PRICE).toBe(250));
  it("default team scenario is 25 monthly treatments", () => expect(DEFAULT_MONTHLY_TREATMENTS).toBe(25));
  it("25 treatments yields $5,375 before equipment financing", () =>
    expect(providerEconomics(25).contributionBeforeFinancing).toBe(5375));
  it("25 treatments yields $4,475 in the lease scenario", () =>
    expect(providerEconomics(25).leaseContribution).toBe(4475));
  it("purchase payback uses $5,375, not lease-adjusted contribution", () =>
    expect(providerEconomics(25).purchasePaybackMonths).toBeCloseTo(45000 / 5375, 8));
  it("5 treatments separates $1,075 purchase contribution from $175 leased contribution", () => {
    const result = providerEconomics(5);
    expect(result.contributionBeforeFinancing).toBe(1075);
    expect(result.leaseContribution).toBe(175);
    expect(result.purchasePaybackMonths).toBeCloseTo(45000 / 1075, 8);
  });
  it("zero treatments has no finite purchase payback", () => expect(providerEconomics(0).purchasePaybackMonths).toBe(Infinity));
});
