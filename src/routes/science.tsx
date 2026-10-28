import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { PageHero, Section, Eyebrow, Diagram, diagrams, seo } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Cite, References } from "@/components/references";
import stepOne from "@/assets/science-step-1.png.asset.json";
import stepTwo from "@/assets/science-step-2.png.asset.json";
import stepThree from "@/assets/science-step-3.png.asset.json";
import stepFour from "@/assets/science-step-4.png.asset.json";

export const Route = createFileRoute("/science")({
  staticData: { sitemap: true },
  head: () => seo("Science & Technology — Cavinova", "Explore published sonophoresis and microbubble research alongside the unvalidated Cavinova acoustic topical-delivery concept."),
  component: Science,
});

const steps = [
  { t: "Topical Application", d: "A microbubble-infused active serum — hyaluronic acid, antioxidants and peptides — is applied to the treatment area." },
  { t: "Acoustic Activation", d: "A controlled ultrasound handpiece delivers regulated acoustic energy into the serum layer." },
  { t: "Oscillation & Cavitation", d: "Microbubble activity may alter barrier permeability depending on formulation and acoustic settings; this mechanism has not been established for Cavinova." },
  { t: "Proposed Enhanced Permeation", d: "Enhanced ingredient permeation is proposed, not established for Cavinova. Formulation, acoustic settings, tolerability and recovery time require future evaluation." },
];

const stepImages = [
  { src: stepOne.url, alt: "Topical application concept: microbubble serum above the stratum corneum and viable epidermis." },
  { src: stepTwo.url, alt: "Acoustic activation concept: an ultrasound handpiece directs regulated acoustic energy toward the serum layer." },
  { src: stepThree.url, alt: "Oscillation and cavitation concept: acoustically activated microbubbles at the skin barrier." },
  { src: stepFour.url, alt: "Enhanced permeation concept: arrows depict proposed transport through the stratum corneum toward viable epidermis." },
];

function Visual({ step }: { step: number }) {
  const image = stepImages[step - 1] ?? stepImages[0];
  if (!image) return null;
  return <img src={image.src} alt={image.alt} width={1448} height={1086} className="block aspect-[4/3] w-full object-contain" />;
}

function Science() {
  const [s, setS] = useState(1);
  return (
    <>
      <PageHero eyebrow="Science & Technology" title="Exploring an acoustic pathway">
        Low-frequency ultrasound has been studied for sonophoresis. Frequency and beam focusing are different characteristics; this literature does not establish performance of Cavinova’s proposed system.<Cite ids={["A", "B"]} />
      </PageHero>

      <Section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { t: "Stratum corneum barrier", d: "Corneocytes in a lamellar lipid matrix form a principal barrier to topical penetration.", ids: ["A"] as const },
          { t: "Frequency & beam focusing", d: "Frequency describes acoustic oscillation rate; focusing describes beam geometry. Low-frequency sonophoresis and the proposed low-MHz patent embodiments are not interchangeable.", ids: ["A", "B", "D"] as const },
          { t: "Sonophoresis", d: "Ultrasound-enhanced molecular transport across skin is documented in published research.", ids: ["A", "B"] as const },
          { t: "Acoustic cavitation", d: "Bubble activity can affect barrier permeability in experimental models; effects depend on formulation and acoustic settings.", ids: ["B", "C"] as const },
        ].map(({ t, d, ids }) => (
          <div key={t} className="rounded-3xl border bg-card p-6"><h3 className="text-2xl">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}<Cite ids={[...ids]} /></p></div>
        ))}
      </Section>

      <Section>
        <Eyebrow>Interactive mechanism visualizer</Eyebrow>
        <h2 className="mt-3 text-4xl">Four steps, step by step</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            {steps.map((st, i) => (
              <Button variant="ghost" key={st.t} onClick={() => setS(i + 1)} aria-pressed={s === i + 1} aria-controls="mechanism-image"
                className={`block h-auto w-full whitespace-normal rounded-2xl border p-5 text-left transition ${s === i + 1 ? "border-primary bg-accent" : "bg-card hover:border-rose"}`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-deep">Step {i + 1}</p>
                <p className="mt-1 font-serif text-2xl">{st.t}</p>
                {s === i + 1 && <p className="mt-2 text-sm text-muted-foreground">{st.d}{i === 2 || i === 3 ? <Cite ids={["C"]} /> : null}</p>}
              </Button>
            ))}
          </div>
          <div id="mechanism-image" className="self-start overflow-hidden rounded-3xl border bg-card p-4 shadow-soft">
            <Visual step={s} />
            <p className="px-2 pt-3 text-xs text-muted-foreground">Conceptual mechanism illustration — not to scale; proposed effects have not been validated by Cavinova. Step {s} of 4.</p>
          </div>
        </div>
      </Section>

      <Section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-teal/40 bg-secondary/40 p-7">
          <CheckCircle2 className="h-6 w-6 text-teal-deep" />
          <h3 className="mt-3 text-2xl">Established science</h3>
          <p className="mt-2 text-sm text-muted-foreground">Ultrasound-enhanced skin permeation (sonophoresis) and acoustic cavitation are well-described physical phenomena with a substantial peer-reviewed literature.<Cite ids={["A", "B", "C"]} /></p>
        </div>
        <div className="rounded-3xl border border-rose/50 bg-accent/60 p-7">
          <AlertTriangle className="h-6 w-6 text-primary" />
          <h3 className="mt-3 text-2xl">Claimed &amp; under evaluation</h3>
          <p className="mt-2 text-sm text-muted-foreground">The specific lip and skin delivery systems and methods described in U.S. Patent App. Pub. No. US20250073439A1 (John H. Shadduck) are claims in a published application. Their clinical performance has not been validated by Cavinova and remains under evaluation. Cavinova holds no rights to this IP.<Cite ids={["D"]} /></p>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Diagram src={diagrams.console} title="Clinical console concept" caption="Concept informed by patent embodiments describing 0.25–5 MHz operation; Cavinova operating parameters are not established. Conceptual illustration; proposed features require engineering validation." />
          <div>
            <Eyebrow>From physics to product</Eyebrow>
            <h2 className="mt-3 text-3xl">How the mechanism maps to hardware</h2>
            <p className="mt-3 text-muted-foreground">The team proposes a console combining microbubble cartridges with candidate ingredient blends and controlled acoustic output, informed by the patent’s described embodiments.<Cite ids={["D"]} /></p>
            <Link to="/platform" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore the product concept <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>
      <References ids={["A", "B", "C", "D"]} />
    </>
  );
}
