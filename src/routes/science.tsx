import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, Eyebrow, seo } from "@/components/site";
import { Cite, References } from "@/components/references";
import { ScienceStepper } from "@/components/science-stepper";

export const Route = createFileRoute("/science")({
  staticData: { sitemap: true },
  head: () => seo("Science — Ultrasound and Microbubbles | Cavinova", "Explore published laboratory research on ultrasound and microbubbles, separate from Cavinova’s untested research-stage concept."),
  component: Science,
});

function Science() {
  return <>
    <PageHero eyebrow="Science" title="How ultrasound and microbubbles interact.">
      The skin’s outer layer helps protect the body and limits the passage of many substances.
    </PageHero>
    <Section>
      <div className="grid gap-10 md:grid-cols-2">
        <div><Eyebrow>The physical response</Eyebrow><h2 className="mt-3 text-4xl">Oscillation and cavitation</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Under specific ultrasound conditions, tiny gas bubbles can oscillate or collapse, a response called cavitation.<Cite ids={["P"]} /></p></div>
        <div><Eyebrow>Published laboratory research</Eyebrow><h2 className="mt-3 text-4xl">What skin samples can tell us</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Published laboratory studies have explored whether that response can change how ingredients move through skin samples. One study measured ingredient delivery in excised porcine skin.<Cite ids={["P"]} /></p>
          <p className="mt-4 leading-relaxed text-muted-foreground">Cavinova’s formulation and proposed use still require testing.</p></div>
      </div>
    </Section>
    <section className="bg-secondary/35"><Section>
      <Eyebrow>Illustrated research concept</Eyebrow>
      <h2 className="mt-3 text-4xl">Exploring an acoustic pathway</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">A conceptual sequence connecting topical application, acoustic exposure and questions about delivery. Published laboratory findings do not validate this Cavinova configuration.<Cite ids={["P"]} /></p>
      <ScienceStepper />
    </Section></section>
    <Section>
      <Eyebrow>Technical reference</Eyebrow>
      <h2 className="mt-3 text-3xl">John H. Shadduck’s published application</h2>
      <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">John H. Shadduck’s published U.S. patent application US20250073439A1 is a technical reference describing ultrasound and responsive carriers.<Cite ids={["D"]} /> Cavinova has not secured ownership or licensing rights to that application.</p>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">This reference informs the concept; it does not demonstrate performance of Cavinova’s formulation or proposed use.</p>
    </Section>
    <Section><Eyebrow>From research to feasibility planning</Eyebrow><h2 className="mt-3 text-3xl">Evaluate the configuration, not just the idea</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Formulation stability, packaging, acoustic output and bubble response need to be considered together. Compatibility must be established for each configuration.</p>
      <Link to="/platform" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Explore the technology <ArrowRight className="h-4 w-4" /></Link>
    </Section>
    <References ids={["P", "D"]} />
  </>;
}
