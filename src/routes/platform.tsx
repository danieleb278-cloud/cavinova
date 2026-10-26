import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Hand, MonitorSmartphone, Nfc, FlaskRound } from "lucide-react";
import { PageHero, Section, Eyebrow, Diagram, diagrams, ConceptLabel, Placeholder, seo } from "@/components/site";

export const Route = createFileRoute("/platform")({
  head: () => seo("Product Concept — Cavinova", "Conceptual Cavinova treatment system: ultrasound handpiece, clinical console, NFC treatment tips and microbubble serum cartridges."),
  component: Platform,
});

const parts = [
  { icon: Hand, t: "Ultrasound Applicator / Handpiece", d: "Ergonomic handpiece housing a piezoelectric transducer assembly at the distal tip, tuned to an optimized resonant frequency. Battery, controls and electronics in the body." },
  { icon: MonitorSmartphone, t: "Smart Touchscreen Console", d: "Pre-programmed clinical protocols, energy regulation, and a controlled dual-fluid auto-mixing system for microbubble cartridges and preapproved ingredient blends." },
  { icon: Nfc, t: "Single-Use Acoustic Treatment Tips", d: "NFC/RFID-authenticated tips designed to support sterility and cross-contamination prevention — and forming the recurring consumable." },
  { icon: FlaskRound, t: "Active Serum Cartridges", d: "Acoustically responsive lipid-shelled microbubbles combined with Hydration, Brightening or Rejuvenation concentrates." },
];

const flow = [
  ["Preparation", "Skin assessment, cleansing, and selection of the ingredient blend."],
  ["Calibration", "Cartridge and NFC tip authenticated; protocol and energy level set."],
  ["Acoustic Infusion", "Handpiece glides over the area as ultrasound activates the microbubbles."],
  ["Post-Treatment Nourishment", "Soothing finish and aftercare guidance."],
];

function Platform() {
  const [a, setA] = useState(0);
  const P = parts[a] ?? parts[0]!;
  return (
    <>
      <PageHero eyebrow="Product Concept" title="A customizable, professional treatment system">
        <div className="space-y-4"><ConceptLabel /><p>No physical working prototype exists and no FDA clearance has been sought or obtained.</p></div>
      </PageHero>

      <Section className="space-y-10">
        <Diagram src={diagrams.handheld} title="A Complete, Customizable Treatment System" caption="Handheld applicator breakdown: handpiece (battery/controls), replaceable serum reservoir, ultrasound transducer in the distal tip, click-in single-use microbubble vial, and Hydration / Brightening / Rejuvenation concentrates, with the 4-step workflow." />
        <Diagram src={diagrams.console} title="A Customizable, Professional Treatment System" caption="Clinical console with touchscreen, controlled dual-fluid auto-mixing of microbubble cartridge + preapproved ingredient blends, and a professional handpiece delivering 0.25–5 MHz acoustic energy per patent embodiments." />
      </Section>

      <Section>
        <Eyebrow>Conceptual architecture</Eyebrow>
        <h2 className="mt-3 text-4xl">Hardware &amp; consumables</h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          <div className="space-y-2">
            {parts.map(({ icon: I, t }, i) => (
              <button key={t} onClick={() => setA(i)} className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition ${a === i ? "border-primary bg-accent" : "bg-card hover:border-rose"}`}>
                <I className="h-5 w-5 shrink-0 text-primary" /><span className="font-medium">{t}</span>
              </button>
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
        <Eyebrow>Treatment workflow</Eyebrow>
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
        <Eyebrow>Design &amp; engineering — planned</Eyebrow>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <Placeholder title="3D Handpiece Render" hint="Drop in a CAD render of the applicator. Planned: acoustic output and thermal testing." />
          <Placeholder title="Transducer Test Data" hint="Add bench-test diagrams. Planned: frequency and intensity verification." />
          <Placeholder title="Biocompatibility Plan" hint="Add ISO 10993 test-plan diagram. Planned: biocompatibility verification of skin-contact parts." />
        </div>
      </Section>
    </>
  );
}
