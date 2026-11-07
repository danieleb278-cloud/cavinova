import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, Eyebrow, Diagram, seo } from "@/components/site";
import { TechnologySchematic } from "@/components/technology-schematic";
import { researchVisuals } from "@/lib/research-visuals";
import { Cite, References } from "@/components/references";

export const Route = createFileRoute("/platform")({
  staticData: { sitemap: true },
  head: () => seo("Technology — Formulation and Ultrasound | Cavinova", "Cavinova’s research-stage concept pairs a candidate microbubble formulation with an ultrasound applicator. Compatibility must be established for each configuration."),
  component: Technology,
});

function Technology() {
  return <>
    <PageHero eyebrow="Technology" title="The formulation and the ultrasound have to work together.">
      The concept pairs a candidate microbubble formulation with an ultrasound applicator.
    </PageHero>
    <Section>
      <Eyebrow>A configuration to investigate</Eyebrow>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">We plan to evaluate how formulation stability, packaging, and the acoustic output of a specific device and applicator affect the bubble response. Compatibility must be established for each configuration.</p>
      <div className="mt-10"><TechnologySchematic /></div>
    </Section>
    <Section className="pt-0">
      <Eyebrow>Concept illustration</Eyebrow>
      <h2 className="mt-3 text-4xl">A proposed applicator design</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">These visual designs explore handling, a cartridge interface and a replaceable tip. They do not establish compatibility, operating settings or performance.</p>
      <div className="mt-8"><Diagram src={researchVisuals.handheld} title="3D handpiece concept" caption="A proposed ergonomic ultrasound applicator featuring integrated controls, a replaceable treatment tip and a cartridge interface." enlarge conceptLabel={false} /></div>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Diagram src={researchVisuals.architecture} title="Applicator architecture concept" caption="Original exploded handpiece artwork, reframed to show the housing, reservoir and tip without the former treatment or delivery claims." enlarge proportionalPreview conceptLabel={false} />
        <Diagram src={researchVisuals.console} title="Console configuration concept" caption="Original console artwork, reframed with a neutral acoustic display. Formulation handling and device controls are design questions, not validated features." enlarge proportionalPreview conceptLabel={false} />
      </div>
      <p className="mt-5 text-sm text-muted-foreground">Shadduck’s published application is a technical reference for the architecture, not evidence of Cavinova performance or rights.<Cite ids={["D"]} /></p>
    </Section>
    <section className="bg-secondary/35"><Section>
      <Eyebrow>Planned evaluation</Eyebrow>
      <h2 className="mt-3 text-4xl">Development &amp; validation questions</h2>
      <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-foreground">Conceptual product designs and proposed validation frameworks. No working prototype, completed testing or commercially available product is represented.</p>
      <div className="mt-8 grid auto-rows-fr gap-8 md:grid-cols-2">
        <Diagram src={researchVisuals.acoustic} title="Planned acoustic performance testing" caption="Proposed bench setup, acoustic-output characterization, thermal review, bubble-response observation and interface evaluation. The waveform and thermal images are illustrations, not experimental data." enlarge proportionalPreview conceptLabel={false} />
        <Diagram src={researchVisuals.safety} title="Planned safety & biocompatibility evaluation" caption="Proposed review of skin-contact materials, formulation compatibility, irritation and sensitization, stability, handling and cleaning. No completed safety testing is represented." enlarge proportionalPreview conceptLabel={false} />
      </div>
    </Section></section>
    <Section className="pt-0">
      <div className="grid gap-8 md:grid-cols-3">
        {[
          ["Formulation and packaging", "Candidate microbubbles need to be assessed through storage, mixing and dispensing."],
          ["Device and applicator", "Acoustic output needs to be measured for the particular device and applicator used in an evaluation."],
          ["Response to measure", "Bubble response needs to be evaluated with that formulation and acoustic configuration."],
        ].map(([title, description]) => <article key={title} className="border-t pt-5"><h2 className="text-2xl">{title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{description}</p></article>)}
      </div>
      <Link to="/development" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">See development priorities <ArrowRight className="h-4 w-4" /></Link>
    </Section>
    <References ids={["D"]} />
  </>;
}
