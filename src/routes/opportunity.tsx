import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ScanLine, Percent, MapPin, Radio, Handshake, FlaskConical } from "lucide-react";
import { PageHero, Section, Eyebrow, Diagram, seo } from "@/components/site";
import { equipmentScenario, illustrativeEquipmentLocations, opportunityPaths } from "@/lib/opportunity";
import { researchVisuals } from "@/lib/research-visuals";
import serumPackaging from "@/assets/Cavinova_Dual_Chamber_Serum_Concept.png.asset.json";

export const Route = createFileRoute("/opportunity")({
  staticData: { sitemap: true },
  head: () => seo("Opportunity — Six-State Planning Scenario | Cavinova", "Explore Cavinova’s illustrative six-state equipment scenario, three paths under consideration and initial serum-feasibility focus. No confirmed customers or partnerships."),
  component: Opportunity,
});

const pathIcons = [Radio, Handshake, FlaskConical];

function Opportunity() {
  return <>
    <PageHero eyebrow="Opportunity" title="Exploring the professional skincare opportunity.">A team-defined market scenario and three possible paths for a research-stage concept.</PageHero>
    <Section>
      <Eyebrow>Six-state planning scenario</Eyebrow>
      <h2 className="mt-3 text-4xl">A screened market. An illustrative assumption.</h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">The team’s market model screens approximately 1,870 medical spas across {equipmentScenario.states.join(", ").replace(", Texas", " and Texas")}. This is a planning base, not established device or formulation compatibility.</p>
      <div className="mt-10 grid auto-rows-fr gap-6 md:grid-cols-3" aria-label="Illustrative equipment market scenario">
        <article className="rounded-3xl border bg-card p-6 shadow-soft md:p-8">
          <ScanLine aria-hidden className="h-7 w-7 text-teal-deep" />
          <h3 className="mt-5 text-xl">Screened med spas</h3>
          <p className="mt-4 text-5xl font-semibold tabular-nums text-teal-deep">≈{equipmentScenario.screenedLocations.toLocaleString("en-US")}</p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Across six states, based on the team’s market model.</p>
        </article>
        <article className="rounded-3xl border bg-accent/60 p-6 shadow-soft md:p-8">
          <Percent aria-hidden className="h-7 w-7 text-primary" />
          <h3 className="mt-5 text-xl">Cumulative adoption assumption</h3>
          <p className="mt-4 text-5xl font-semibold tabular-nums text-primary">{equipmentScenario.cumulativeAdoption * 100}%</p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">An illustrative assumption for the equipment scenarios, not measured adoption.</p>
        </article>
        <article className="rounded-3xl border bg-secondary/50 p-6 shadow-soft md:p-8">
          <MapPin aria-hidden className="h-7 w-7 text-teal-deep" />
          <h3 className="mt-5 text-xl">Illustrative SOM</h3>
          <p className="mt-4 text-5xl font-semibold tabular-nums text-teal-deep">{illustrativeEquipmentLocations}<span className="ml-2 text-base font-normal text-foreground">locations</span></p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">1,870 × 1% = 18.7, rounded to 19 locations for the illustrative equipment scenario.</p>
        </article>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">Source: Cavinova team market model and planning assumptions. Figures are approximate, not independently verified market demand.</p>
      <div className="mt-8 grid gap-6 border-t pt-6 md:grid-cols-2">
        <p className="leading-relaxed text-muted-foreground">The 19 locations are a planning estimate for equipment scenarios; no confirmed customers are implied. The retired serviceability and capture inputs are not used in this calculation.</p>
        <p className="leading-relaxed text-muted-foreground">The serum-only reachable market depends on device-specific compatibility and has yet to be established. The 1% equipment assumption does not apply to the same eligible base for serum only.</p>
      </div>
    </Section>
    <section className="bg-secondary/35"><Section>
      <Eyebrow>Concept illustration</Eyebrow>
      <div className="mt-4"><Diagram src={researchVisuals.handheld} title="A proposed applicator, not an available product" caption="Original handpiece concept artwork. Design, compatibility and performance remain subject to investigation." enlarge conceptLabel={false} /></div>
    </Section></section>
    <Section>
      <Eyebrow>Options to explore</Eyebrow>
      <h2 className="mt-3 text-4xl">Three paths under consideration</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">None is a selected launch route or a partnership in place. Each would depend on feasibility testing, intellectual-property review and applicable regulatory requirements.</p>
      <div className="mt-8 grid auto-rows-fr gap-6 md:grid-cols-3">
        {opportunityPaths.map((path, i) => {
          const Icon = pathIcons[i] ?? FlaskConical;
          return <article key={path.title} className="flex flex-col rounded-3xl border bg-card p-6 shadow-soft md:p-8">
            <Icon aria-hidden className="h-7 w-7 text-primary" />
            <h3 className="mt-5 text-2xl leading-tight">{path.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{path.description}</p>
            {path.title === "Serum only" && <figure className="mt-6">
              <figcaption className="mb-3 text-sm font-semibold text-teal-deep">Packaging concept</figcaption>
              <img src={serumPackaging.url} alt="Cavinova dual-chamber squeeze packet concept for manual application." width={1536} height={768} loading="lazy" className="block h-auto w-full rounded-lg object-contain" />
            </figure>}
          </article>;
        })}
      </div>
    </Section>
    <section className="bg-accent/50"><Section>
      <Eyebrow>Initial development focus</Eyebrow>
      <h2 className="mt-3 text-4xl">Where we’d start</h2>
      <p className="mt-5 max-w-4xl text-lg leading-relaxed text-muted-foreground">Our first opportunity is to test serum feasibility. We plan to evaluate formulation and packaging stability, assess how the serum responds with a specific ultrasound device and applicator, and gather feedback from skincare professionals. Those results will guide which path, if any, we pursue.</p>
      <Link to="/development" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">See development priorities <ArrowRight className="h-4 w-4" /></Link>
    </Section></section>
  </>;
}
