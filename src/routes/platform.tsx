import { createFileRoute } from "@tanstack/react-router";
import { Droplets, MonitorSmartphone, Stethoscope } from "lucide-react";
import { PageHero, Section, Eyebrow, Diagram, seo } from "@/components/site";
import { Cite, References } from "@/components/references";
import { researchVisuals } from "@/lib/research-visuals";
import serumPackaging from "@/assets/Cavinova_Dual_Chamber_Serum_Concept.png.asset.json";

export const Route = createFileRoute("/platform")({
  staticData: { sitemap: true },
  head: () => seo("Product Concept — Cavinova", "Explore Cavinova’s proposed manual serum preparation, dual-chamber packaging and device-specific testing, alongside what a future dedicated system could add."),
  component: Platform,
});

const benefits = [
  { icon: Droplets, title: "Less measuring by hand.", description: "We’d test whether measured dispensing helps staff use a consistent amount of serum and leave less unused." },
  { icon: MonitorSmartphone, title: "Clearer steps for staff.", description: "We’d test whether on-screen guidance and preset controls make the process easier to learn and reduce setup mistakes." },
  { icon: Stethoscope, title: "A more consistent routine.", description: "We’d compare preparation time, product use, and consistency across providers to see what a dedicated system adds to the manual approach." },
];

function Platform() {
  return (
    <>
      <PageHero eyebrow="Product Concept" title="How the serum and ultrasound would work together">
        Cavinova is a research-stage capstone concept. The serum, device pairing and proposed system still need to be tested; no working prototype or FDA clearance is represented.
      </PageHero>

      <Section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-4xl">Start with the serum</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">We’d develop a serum for manual application and test it with a specific ultrasound device and applicator already in use. Our two-chamber packaging concept keeps the components separate until preparation. We’d check how well they hold up in storage, how consistently staff can dispense them, and how the serum responds to ultrasound.</p>
        </div>
        <figure>
          <figcaption className="mb-3 text-sm font-semibold text-teal-deep">Packaging concept</figcaption>
          <img src={serumPackaging.url} alt="Cavinova dual-chamber squeeze packet concept for manual application." width={1774} height={887} loading="lazy" className="block h-auto w-full rounded-lg object-contain" />
        </figure>
      </Section>

      <Section>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-4xl">What a dedicated system could add</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">A Cavinova system could guide staff through setup, measure the serum it dispenses, and apply the selected ultrasound settings. The goal is to make the process easier to teach and more consistent from one provider to the next.</p>
            <p className="mt-4 text-xs text-muted-foreground">Patent-described embodiments inform this concept, not validated Cavinova specifications.<Cite ids={["D"]} /></p>
          </div>
          <div>
            <Eyebrow>Concept illustration</Eyebrow>
            <div className="mt-3"><Diagram enlarge conceptLabel={false} src={researchVisuals.console} title="A future dedicated system" caption="Concept illustration — proposed setup, dispensing and acoustic controls require engineering development and testing." /></div>
          </div>
        </div>
        <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-3xl border bg-card p-7 shadow-soft">
              <Icon aria-hidden className="h-6 w-6 text-teal-deep" />
              <h3 className="mt-5 text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>Development &amp; Validation Roadmap</Eyebrow>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">Conceptual product designs and proposed validation frameworks. No working prototype, completed testing, or commercially available product is represented.</p>
        <div className="mt-6 grid auto-rows-fr gap-5 md:grid-cols-3">
          <Diagram enlarge proportionalPreview conceptLabel={false} src={researchVisuals.handheld} title="3D Handpiece Render" caption="A proposed ergonomic ultrasound applicator featuring integrated controls, a replaceable treatment tip, and a cartridge interface designed to support Cavinova's customizable skincare delivery system." />
          <Diagram enlarge proportionalPreview conceptLabel={false} src={researchVisuals.acoustic} title="Planned Acoustic Performance Testing" caption="A proposed engineering validation framework evaluating acoustic output, operating frequency, thermal characteristics, microbubble response, and system integration." />
          <Diagram enlarge proportionalPreview conceptLabel={false} src={researchVisuals.safety} title="Planned Safety & Biocompatibility Evaluation" caption="A planned safety evaluation strategy addressing skin-contact materials, formulation stability, compatibility, irritation considerations, and device handling." />
        </div>
      </Section>
      <References ids={["D"]} />
    </>
  );
}
