export const PATIENT_PRICE = 250;
export const KIT_COST = 35;
export const CONSOLE_PRICE = 45000;
export const MONTHLY_LEASE = 900; // illustrative 60-month lease assumption
export const DEFAULT_MONTHLY_TREATMENTS = 25;

export function providerEconomics(treatments: number) {
  const revenue = treatments * PATIENT_PRICE;
  const consumables = treatments * KIT_COST;
  const contributionBeforeFinancing = revenue - consumables;
  const leaseContribution = contributionBeforeFinancing - MONTHLY_LEASE;
  const purchasePaybackMonths = contributionBeforeFinancing > 0 ? CONSOLE_PRICE / contributionBeforeFinancing : Infinity;
  return { revenue, consumables, lease: MONTHLY_LEASE, contributionBeforeFinancing, leaseContribution, purchasePaybackMonths };
}
