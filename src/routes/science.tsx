import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";
import { PageHero, Section, Eyebrow, Diagram, diagrams, seo } from "@/components/site";

export const Route = createFileRoute("/science")({
  head: () => seo("Science & Technology — Cavinova", "Stratum corneum physics, sonophoresis and acoustic cavitation behind Cavinova's proposed ultrasound-assisted topical delivery."),
  component: Science,
});

const steps = [
  { t: "Topical Application", d: "A microbubble-infused active serum — hyaluronic acid, antioxidants and peptides — is applied to the treatment area." },
  { t: "Acoustic Activation", d: "A controlled ultrasound handpiece delivers regulated acoustic energy into the serum layer." },
  { t: "Oscillation & Cavitation", d: "Lipid-shelled microbubbles oscillate and cavitate, hypothesized to create transient, reversible micro-pathways in the stratum corneum lipid bilayer." },
  { t: "Enhanced Permeation", d: "Actives are proposed to permeate deeper into viable epidermal layers. The approach is designed to operate within parameters intended to minimize tissue stress and avoid permanent cellular damage, subject to future clinical validation." },
];

function Visual({ step }: { step: number }) {
  return (
    <svg viewBox="0 0 400 260" className="w-full">
      <rect x="0" y="0" width="400" height="260" fill="var(--mist)" />
      {step >= 1 && <rect x="20" y="20" width="360" height="40" rx="10" fill="var(--blush)" opacity=".55" />}
      {step >= 1 && Array.from({ length: 12 }, (_, i) => (
        <circle key={i} cx={40 + i * 29} cy={40} r={step >= 3 ? 9 : 6} fill="none" stroke="var(--rose-deep)" strokeWidth="1.5" opacity={step >= 3 ? 0.4 : 0.9} />
      ))}
      {step >= 2 && [0, 1, 2].map((i) => <path key={i} d={`M 150 ${8 - i * 0} q 25 ${-6 - i * 4} 50 0 t 50 0`} stroke="var(--teal)" strokeWidth="2" fill="none" transform={`translate(0 ${-i * 2})`} />)}
      {Array.from({ length: 9 }, (_, i) => (
        <rect key={i} x={20 + i * 40} y="70" width="34" height="30" rx="4" fill="var(--card)" stroke="var(--border)" />
      ))}
      {step >= 3 && [60, 180, 300].map((x) => <rect key={x} x={x + 14} y="70" width="6" height="30" fill="var(--rose)" opacity=".6" />)}
      <rect x="20" y="110" width="360" height="130" rx="10" fill="var(--mint)" />
      {step >= 4 && Array.from({ length: 14 }, (_, i) => <circle key={i} cx={40 + (i * 53) % 330} cy={130 + ((i * 37) % 95)} r="4" fill="var(--rose-deep)" opacity=".7" />)}
      <text x="24" y="250" fontSize="10" fill="var(--muted-foreground)">Viable epidermis</text>
      <text x="300" y="95" fontSize="10" fill="var(--muted-foreground)">Stratum corneum</text>
    </svg>
  );
}

function Science() {
  const [s, setS] = useState(1);
  return (
    <>
      <PageHero eyebrow="Science & Technology" title={<>The physics of a <em className="text-primary">gentler</em> pathway</>}>
        Low-frequency and focused ultrasound have long been studied for sonophoresis. Cavinova explores pairing them with acoustically responsive microbubbles.
      </PageHero>

      <Section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["Stratum corneum barrier", "10–20 µm of corneocytes in a lamellar lipid matrix — the principal limit on topical penetration."],
          ["Low-frequency / focused ultrasound", "Acoustic energy, typically in the kHz to low-MHz range, transmitted through a coupling medium."],
          ["Sonophoresis", "Ultrasound-enhanced transport of molecules across the skin, documented in the scientific literature."],
          ["Acoustic cavitation", "Formation and oscillation of gas bubbles in an acoustic field, which can transiently disrupt lipid packing."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-3xl border bg-card p-6"><h3 className="text-2xl">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p></div>
        ))}
      </Section>

      <Section>
        <Eyebrow>Interactive mechanism visualizer</Eyebrow>
        <h2 className="mt-3 text-4xl">Four steps, step by step</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            {steps.map((st, i) => (
              <button key={st.t} onClick={() => setS(i + 1)}
                className={`w-full rounded-2xl border p-5 text-left transition ${s === i + 1 ? "border-primary bg-accent" : "bg-card hover:border-rose"}`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-deep">Step {i + 1}</p>
                <p className="mt-1 font-serif text-2xl">{st.t}</p>
                {s === i + 1 && <p className="mt-2 text-sm text-muted-foreground">{st.d}</p>}
              </button>
            ))}
          </div>
          <div className="overflow-hidden rounded-3xl border bg-card p-4 shadow-soft">
            <Visual step={s} />
            <p className="px-2 pt-3 text-xs text-muted-foreground">Schematic illustration — not to scale. Step {s} of 4.</p>
          </div>
        </div>
      </Section>

      <Section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-teal/40 bg-secondary/40 p-7">
          <CheckCircle2 className="h-6 w-6 text-teal-deep" />
          <h3 className="mt-3 text-2xl">Established science</h3>
          <p className="mt-2 text-sm text-muted-foreground">Ultrasound-enhanced skin permeation (sonophoresis) and acoustic cavitation are well-described physical phenomena with a substantial peer-reviewed literature.</p>
        </div>
        <div className="rounded-3xl border border-rose/50 bg-accent/60 p-7">
          <AlertTriangle className="h-6 w-6 text-primary" />
          <h3 className="mt-3 text-2xl">Claimed &amp; under evaluation</h3>
          <p className="mt-2 text-sm text-muted-foreground">The specific lip and skin delivery systems and methods described in U.S. Patent App. Pub. No. US20250073439A1 (John H. Shadduck) are claims in a published application. Their clinical performance has not been validated by Cavinova and remains under evaluation. Cavinova holds no rights to this IP.</p>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Diagram src={diagrams.console} title="Clinical console concept" caption="Professional handpiece concept delivering 0.25–5 MHz acoustic energy per patent embodiments. Conceptual only." />
          <div>
            <Eyebrow>From physics to product</Eyebrow>
            <h2 className="mt-3 text-3xl">How the mechanism maps to hardware</h2>
            <p className="mt-3 text-muted-foreground">The proposed console auto-mixes microbubble cartridges with preapproved ingredient blends and regulates acoustic output.</p>
            <Link to="/platform" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore the product concept <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>
    </>
  );
}
