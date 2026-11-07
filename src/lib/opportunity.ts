// Team planning scenario for equipment paths only; not a serum compatibility base.
export const equipmentScenario = {
  states: ["California", "Florida", "Illinois", "New Jersey", "New York", "Texas"],
  screenedLocations: 1870,
  cumulativeAdoption: 0.01,
} as const;
export const illustrativeEquipmentLocations = Math.round(equipmentScenario.screenedLocations * equipmentScenario.cumulativeAdoption);
export const opportunityPaths = [
  { title: "Develop our own device", description: "Explore a Cavinova ultrasound device paired with a candidate serum" },
  { title: "Work with an established equipment partner", description: "Explore whether an existing manufacturer could help adapt a device for use with the formulation" },
  { title: "Serum only", description: "Evaluate whether a standalone serum could work with a specific existing device and applicator" },
] as const;