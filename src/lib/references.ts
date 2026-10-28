export const references = {
  A: { number: 1, url: "https://pubmed.ncbi.nlm.nih.gov/7638603/", label: "Mitragotri et al. (1995). Ultrasound-mediated transdermal protein delivery." },
  B: { number: 2, url: "https://pubmed.ncbi.nlm.nih.gov/7562407/", label: "Mitragotri et al. (1995). Mechanistic study of ultrasound-mediated transdermal delivery." },
  C: { number: 3, url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0138500", label: "Liao et al. (2015). Microbubble study in experimental models; not Cavinova clinical validation." },
  D: { number: 4, url: "https://patents.google.com/patent/US20250073439A1/en", label: "Shadduck. U.S. Patent Application Publication US20250073439A1. Described embodiments, not clinical proof." },
  E: { number: 5, url: "https://www.americanmedspa.org/news/2024-medical-spa-state-of-the-industry-executive-report-recap/", label: "AmSpa (2024). Medical Spa State of the Industry executive report recap: 10,488 U.S. med spas in 2023." },
  F: { number: 6, url: "https://www.americanmedspa.org/news/aestheticians-skin-health-at-the-heart-of-safe-medical-spas/", label: "AmSpa. Aestheticians: Skin health at the heart of safe medical spas. Hydradermabrasion: 57%." },
} as const;

export type ReferenceId = keyof typeof references;