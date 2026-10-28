import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hand, MonitorSmartphone, Nfc, FlaskRound } from "lucide-react";
import { PageHero, Section, Eyebrow, Diagram, diagrams, ConceptLabel, seo } from "@/components/site";
import { Cite, References } from "@/components/references";
import { Button } from "@/components/ui/button";
import handpiece from "@/assets/handheld.png.asset.json";
import acousticValidation from "@/assets/planned_validation.png.asset.json";
import biocompatibility from "@/assets/biocompatibily.png.asset.json";

export const Route = createFileRoute("/platform")({
  staticData: { sitemap: true },
  head: () => seo("Product Concept — Cavinova", "Conceptual Cavinova treatment system: ultrasound handpiece, clinical console, NFC treatment tips and microbubble serum cartridges."),
  component: Platform,
});

const parts = [
  { icon: Hand, t: "Ultrasound Applicator / Handpiece", d: "Ergonomic handpiece housing a piezoelectric transducer assembly at the distal tip, with operating frequency to be selected through engineering development. Battery, controls and electronics in the body." },
  { icon: MonitorSmartphone, t: "Smart Touchscreen Console", d: "Proposed treatment settings subject to development and validation, energy regulation, and a proposed dual-fluid mixing system for microbubble cartridges and candidate ingredient blends." },
  { icon: Nfc, t: "Single-Use Acoustic Treatment Tips", d: "NFC/RFID identification of compatible single-use tips, proposed as recurring consumables. Identification does not establish sterility; safety and contamination controls require validation." },
  { icon: FlaskRound, t: "Active Serum Cartridges", d: "Acoustically responsive lipid-shelled microbubbles combined with Hydration, Brightening or Rejuvenation concentrates." },
];

const flow = [
  ["Preparation", "Skin assessment, cleansing, and selection of the ingredient blend."],
  ["Calibration", "Compatible cartridge and tip identified; proposed treatment settings selected."],
  ["Acoustic Infusion", "Handpiece would glide over the area to apply ultrasound to the microbubble serum."],
  ["Post-Treatment Nourishment", "Proposed finishing care and aftercare guidance, subject to evaluation."],
];

function Platform() {
  const [a, setA] = useState(0);
  const P = parts[a] ?? parts[0];
  if (!P) return null;
  return (
    <>
      <PageHero eyebrow="Product Concept" title="A customizable, professional treatment system">
        <div className="space-y-4"><ConceptLabel /><p>No physical working prototype exists and no FDA clearance has been sought or obtained.</p></div>
      </PageHero>

      <Section className="space-y-10">
        <Diagram enlarge src={diagrams.handheld} title="A Complete, Customizable Treatment System" caption="Conceptual illustration; proposed features require engineering validation. Depicts a handheld applicator, reservoir, transducer, microbubble vial and candidate ingredient concentrates." />
        <Diagram enlarge src={diagrams.console} title="A Customizable, Professional Treatment System" caption="Conceptual illustration; proposed features require engineering validation. Patent embodiments describe 0.25–5 MHz operation; Cavinova operating parameters are not established." />
      </Section>

      <Section>
        <Eyebrow>Conceptual architecture</Eyebrow>
        <p className="mt-3 text-sm text-muted-foreground">Patent-described embodiments inform the architecture; the hardware and consumable features below are team proposals, not validated specifications.<Cite ids={["D"]} /> Embedded diagram wording about “preapproved” blends or operating frequencies does not establish ingredient approval or Cavinova specifications.</p>
        <h2 className="mt-3 text-4xl">Hardware &amp; consumables</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-2">
            {parts.map(({ icon: I, t }, i) => (
              <Button variant="ghost" aria-pressed={a === i} key={t} onClick={() => setA(i)} className={`flex h-auto w-full whitespace-normal items-center gap-3 rounded-2xl border p-4 text-left transition ${a === i ? "border-primary bg-accent" : "bg-card hover:border-rose"}`}>
                <I className="h-5 w-5 shrink-0 text-primary" /><span className="font-medium">{t}</span>
              </Button>
            ))}
          </div>
          <div className="rounded-3xl border bg-card p-8 shadow-soft">
            <P.icon className="h-8 w-8 text-teal-deep" />
            <h3 className="mt-4 text-3xl">{P.t}</h3>
            <p className="mt-3 text-muted-foreground">{P.d}</p>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Proposed treatment workflow</Eyebrow>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {flow.map(([t, d], i) => (
            <div key={t} className="rounded-3xl border bg-card p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-rosegold font-serif text-lg">{i + 1}</span>
              <h3 className="mt-4 text-2xl">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Development &amp; Validation Roadmap</Eyebrow>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Conceptual product designs and proposed validation frameworks. No working prototype, completed testing, or commercially available product is represented.</p>
        <div className="mt-6 grid auto-rows-fr gap-5 md:grid-cols-3">
          <Diagram enlarge proportionalPreview conceptLabel={false} src={handpiece.url} title="3D Handpiece Render" caption="A proposed ergonomic ultrasound applicator featuring integrated controls, a replaceable treatment tip, and a cartridge interface designed to support Cavinova's customizable skincare delivery system." />
          <Diagram enlarge proportionalPreview conceptLabel={false} src={acousticValidation.url} title="Planned Acoustic Performance Testing" caption="A proposed engineering validation framework evaluating acoustic output, operating frequency, thermal characteristics, microbubble response, and system integration." />
          <Diagram enlarge proportionalPreview conceptLabel={false} src={biocompatibility.url} title="Planned Safety & Biocompatibility Evaluation" caption="A planned safety evaluation strategy addressing skin-contact materials, formulation stability, compatibility, irritation considerations, and device handling." />
        </div>
      </Section>
      <References ids={["D"]} />
    </>
  );
}
