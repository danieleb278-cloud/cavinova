export const references = {
  P: { number: 1, url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0157707", label: "Park et al. (2016). Sonophoresis using ultrasound contrast agents: dependence on concentration. PLOS ONE; laboratory study using excised porcine skin." },
  D: { number: 2, url: "https://patents.google.com/patent/US20250073439A1/en", label: "John H. Shadduck. Published U.S. patent application US20250073439A1. Technical reference; Cavinova has not secured ownership or licensing rights." },
} as const;

export type ReferenceId = keyof typeof references;
