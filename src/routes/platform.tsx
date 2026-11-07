import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, Eyebrow, seo } from "@/components/site";
import { TechnologySchematic } from "@/components/technology-schematic";

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
      <div className="grid gap-8 md:grid-cols-3">
        {[
          ["Formulation and packaging", "Candidate microbubbles need to be assessed through storage, mixing and dispensing."],
          ["Device and applicator", "Acoustic output needs to be measured for the particular device and applicator used in an evaluation."],
          ["Response to measure", "Bubble response needs to be evaluated with that formulation and acoustic configuration."],
        ].map(([title, description]) => <article key={title} className="border-t pt-5"><h2 className="text-2xl">{title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{description}</p></article>)}
      </div>
      <Link to="/development" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">See development priorities <ArrowRight className="h-4 w-4" /></Link>
    </Section>
  </>;
}
