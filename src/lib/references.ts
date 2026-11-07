export const references = {
  A: {
    number: 1,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC19831/",
    label:
      "Pirot et al. (1997). Characterization of the permeability barrier of human skin in vivo. Proceedings of the National Academy of Sciences, 94, 1562–1567. doi:10.1073/pnas.94.4.1562.",
  },
  B: {
    number: 2,
    url: "https://pubmed.ncbi.nlm.nih.gov/7562407/",
    label:
      "Mitragotri, Edwards, Blankschtein, & Langer. (1995). A mechanistic study of ultrasonically-enhanced transdermal drug delivery. Journal of Pharmaceutical Sciences, 84, 697–706. doi:10.1002/jps.2600840607.",
  },
  C: {
    number: 3,
    url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0138500",
    label:
      "Liao et al. (2015). Effects of microbubble size on ultrasound-induced transdermal delivery of high-molecular-weight drugs. PLOS ONE, 10, e0138500. doi:10.1371/journal.pone.0138500.",
  },
  D: {
    number: 4,
    url: "https://patentimages.storage.googleapis.com/68/05/7f/961b236c96d327/US20250073439A1.pdf",
    label:
      "Shadduck, J. H. (2025, March 6). Systems and methods for treating lips and skin. U.S. patent application publication US20250073439A1.",
  },
  F: {
    number: 6,
    url: "https://www.americanmedspa.org/news/aestheticians-skin-health-at-the-heart-of-safe-medical-spas/",
    label:
      "Moeller, M. (2025). Aestheticians: Skin health at the heart of safe medical spas. American Med Spa Association.",
  },
  P: {
    number: 7,
    url: "https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0157707",
    label:
      "Park et al. (2016). Sonophoresis using ultrasound contrast agents: Dependence on concentration. PLOS ONE, 11, e0157707. doi:10.1371/journal.pone.0157707.",
  },
  H: {
    number: 8,
    url: "https://www.hydrafacial.com/pages/the-treatment",
    label: "Hydrafacial. (n.d.). The treatment. Manufacturer treatment overview.",
  },
  M: {
    number: 9,
    url: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/microneedling-devices",
    label: "U.S. Food and Drug Administration. (2025). Microneedling devices.",
  },
  U: {
    number: 10,
    url: "https://ultherapy.com/app/uploads/2023/08/1015107IFU-Rev-D.pdf",
    label:
      "Ulthera, Inc. (2023). Ulthera System instructions for use (1015107IFU Rev. D, section 2.1).",
  },
  G: {
    number: 11,
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2713370/",
    label:
      "Gupta & Prausnitz. (2009). Recovery of skin barrier properties after sonication in human subjects. Ultrasound in Medicine & Biology, 35, 1405–1408.",
  },
  K: {
    number: 12,
    url: "https://pubmed.ncbi.nlm.nih.gov/1608900/",
    label:
      "Potts & Guy. (1992). Predicting skin permeability. Pharmaceutical Research, 9, 663–669. doi:10.1023/A:1015810312465.",
  },
} as const;

export type ReferenceId = keyof typeof references;
