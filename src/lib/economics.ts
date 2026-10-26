export const PATIENT_PRICE = 250;
export const KIT_COST = 35;
export const CONSOLE_PRICE = 45000;
export const MONTHLY_LEASE = 900; // illustrative 60-month lease assumption

export function providerEconomics(treatments: number) {
  const revenue = treatments * PATIENT_PRICE;
  const consumables = treatments * KIT_COST;
  const contribution = revenue - consumables - MONTHLY_LEASE;
  const paybackMonths = contribution > 0 ? CONSOLE_PRICE / contribution : Infinity;
  return { revenue, consumables, lease: MONTHLY_LEASE, contribution, paybackMonths };
}
