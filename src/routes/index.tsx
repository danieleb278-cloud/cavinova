import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow, Diagram, seo } from "@/components/site";
import { Button } from "@/components/ui/button";
import { developmentPriorities } from "@/lib/development";
import wordmark from "@/assets/cavinova_wordmark.png.asset.json";
import { researchVisuals } from "@/lib/research-visuals";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => seo("Cavinova — Exploring Ultrasound-Assisted Skincare", "A Rutgers Master of Business and Science capstone exploring ultrasound and acoustically responsive formulations at the concept and feasibility-planning stage."),
  component: Home,
});

function Home() {
  return <>
    <section className="bg-hero">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-20">
        <div>
          <Eyebrow>Rutgers MBS Capstone · Research-stage concept</Eyebrow>
          <h1 className="mt-5 text-5xl leading-tight md:text-6xl">Exploring ultrasound-assisted skincare.</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">Cavinova is a Rutgers Master of Business and Science capstone project exploring how ultrasound and acoustically responsive formulations might influence topical ingredient delivery. Our work is at the concept and feasibility-planning stage.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="h-auto whitespace-normal rounded-full px-6 py-3"><Link to="/science">Explore the science <ArrowRight /></Link></Button>
            <Button asChild variant="outline" className="h-auto whitespace-normal rounded-full px-6 py-3"><Link to="/development">See development priorities</Link></Button>
          </div>
        </div>
        <figure className="glass order-first overflow-hidden rounded-3xl p-6 shadow-soft md:order-none md:p-9">
          <img src={wordmark.url} alt="Cavinova — Advanced Acoustic Aesthetics" width={1686} height={722} className="h-auto w-full" />
          <figcaption className="mt-5 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Science in Harmony with Skin</figcaption>
        </figure>
      </div>
    </section>
    <Section>
      <Eyebrow>Our research focus</Eyebrow>
      <div className="mt-4 grid gap-8 md:grid-cols-2">
        <h2 className="text-4xl leading-tight">A formulation. An applicator. Questions to investigate.</h2>
        <div><p className="text-lg leading-relaxed text-muted-foreground">The concept pairs a candidate microbubble formulation with an ultrasound applicator. Understanding their interaction means evaluating the formulation and acoustic output together, not assuming that one configuration works with another.</p>
        <Link to="/platform" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Explore the technology <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
      <div className="mt-10">
        <Eyebrow>Concept illustration</Eyebrow>
        <div className="mt-4"><Diagram src={researchVisuals.handheld} title="3D handpiece concept" caption="A proposed ergonomic ultrasound applicator with integrated controls, a replaceable tip and a cartridge interface. An illustration, not a working prototype." enlarge conceptLabel={false} /></div>
      </div>
    </Section>
    <section className="bg-secondary/35">
      <Section>
        <Eyebrow>Development priorities</Eyebrow>
        <h2 className="mt-3 text-4xl">What we need to learn next</h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {developmentPriorities.map((priority, i) => <article key={priority.title} className="border-t pt-5">
            <p className="text-xs font-semibold text-muted-foreground">0{i + 1} · Planned area</p><h3 className="mt-2 text-2xl">{priority.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{priority.description}</p>
          </article>)}
        </div>
        <Link to="/development" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary">See development priorities <ArrowRight className="h-4 w-4" /></Link>
        <div><Link to="/opportunity" className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">Explore the opportunity <ArrowRight className="h-4 w-4" /></Link></div>
      </Section>
    </section>
  </>;
}
