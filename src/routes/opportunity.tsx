import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ScanLine, Percent, MapPin, Radio, Handshake, FlaskConical, Users } from "lucide-react";
import { PageHero, Section, Eyebrow, seo } from "@/components/site";
import { equipmentScenario, illustrativeEquipmentLocations, opportunityPaths } from "@/lib/opportunity";
import serumPackaging from "@/assets/Cavinova_Dual_Chamber_Serum_Concept.png.asset.json";

export const Route = createFileRoute("/opportunity")({
  staticData: { sitemap: true },
  head: () => seo("The Opportunity for Cavinova | Serum First, System Later", "Why Cavinova starts with a microbubble serum concept, what would justify a dedicated system, an illustrative six-state scenario and three paths under consideration."),
  component: Opportunity,
});

const pathIcons = [Radio, Handshake, FlaskConical];
const sequence = [
  { title: "Test the serum", icon: FlaskConical },
  { title: "Assess practice demand", icon: Users },
  { title: "Decide whether to build a system", icon: Radio },
];

function Opportunity() {
  const ext = "underline underline-offset-2 hover:text-primary";
  return <>
    <PageHero eyebrow="Opportunity" title="The opportunity for Cavinova">Cavinova is developing a microbubble serum concept for professional ultrasound-assisted skincare. We see an opportunity to pair the serum with a process that’s easier for practices to teach and repeat. Our first step is to find out whether the serum adds enough value on equipment already in use to justify developing a dedicated system.</PageHero>
    <Section>
      <Eyebrow>The gap</Eyebrow>
      <h2 className="mt-3 text-4xl">Where Cavinova sees a gap</h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Topical products rely on ingredients moving through the skin’s outer barrier (<Link to="/science" className={ext}>see the science</Link>). Microneedling uses small needles to puncture the skin,<sup className="ml-0.5 text-xs"><a href="https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/microneedling-devices" target="_blank" rel="noreferrer" aria-label="Source: U.S. FDA, Microneedling Devices" className={ext}>FDA</a></sup> while ultrasound facial tools already offer a way to apply sound energy at the surface.<sup className="ml-0.5 text-xs"><a href="https://zemits.com/collections/ultrasound-facial" target="_blank" rel="noreferrer" aria-label="Example of existing ultrasound facial tools" className={ext}>example</a></sup> The question we’re investigating is whether a serum designed for a specific ultrasound setup can improve ingredient delivery and fit into a repeatable professional routine.</p>
    </Section>
    <section className="bg-accent/50"><Section>
      <Eyebrow>Initial development focus</Eyebrow>
      <h2 className="mt-3 text-4xl">Start with the serum. Test the case for the system.</h2>
      <div className="mt-6 grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">We’d develop a two-chamber, single-use pack for manual application and test it with one specific ultrasound device and applicator. Keeping the microbubble component separate until use could help it stay stable in storage. A premeasured pack could also simplify preparation and reduce leftover serum. Early work would test those benefits, measure ingredient delivery against comparison setups, and find out whether practices see enough value to adopt it.</p>
        <figure>
          <figcaption className="mb-3 text-sm font-semibold text-teal-deep">Packaging concept</figcaption>
          <img src={serumPackaging.url} alt="Cavinova dual-chamber squeeze packet concept for manual application." width={1774} height={887} loading="lazy" className="block h-auto w-full rounded-lg object-contain" />
        </figure>
      </div>
    </Section></section>
    <Section>
      <Eyebrow>The case for a system</Eyebrow>
      <h2 className="mt-3 text-4xl">What would make a dedicated system worth buying?</h2>
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">A Cavinova system could recognize a cartridge, load the corresponding settings, and dispense a measured amount of serum. For a practice, that could mean fewer manual steps, easier training, and more consistent product use across staff. For Cavinova, the question is whether those advantages are valuable enough to justify building dedicated equipment.</p>
      <ol className="mt-10 flex flex-col items-stretch gap-3 md:flex-row md:items-center" aria-label="Planned decision sequence">
        {sequence.map((s, i) => <li key={s.title} className="contents">
          <div className="flex-1 rounded-3xl border bg-card p-6 shadow-soft">
            <s.icon aria-hidden className="h-7 w-7 text-primary" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-teal-deep">Step {i + 1}</p>
            <h3 className="mt-1 text-xl leading-tight">{s.title}</h3>
          </div>
          {i < sequence.length - 1 && <ArrowRight aria-hidden className="h-6 w-6 shrink-0 self-center rotate-90 text-teal-deep md:rotate-0" />}
        </li>)}
      </ol>
    </Section>
    <section className="bg-secondary/35"><Section>
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
    </Section></section>
    <Section>
      <Eyebrow>Options to explore</Eyebrow>
      <h2 className="mt-3 text-4xl">Three paths under consideration</h2>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Results from the serum work would inform which of these paths, if any, we pursue. None is a selected launch route or a partnership in place. Each would depend on feasibility testing, intellectual-property review and applicable regulatory requirements.</p>
      <div className="mt-8 grid auto-rows-fr gap-6 md:grid-cols-3">
        {opportunityPaths.map((path, i) => {
          const Icon = pathIcons[i] ?? FlaskConical;
          return <article key={path.title} className="flex flex-col rounded-3xl border bg-card p-6 shadow-soft md:p-8">
            <Icon aria-hidden className="h-7 w-7 text-primary" />
            <h3 className="mt-5 text-2xl leading-tight">{path.title}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{path.description}</p>
          </article>;
        })}
      </div>
    </Section>
    <section className="bg-accent/50"><Section className="text-center">
      <h2 className="text-3xl">Talk with the Cavinova team about the next stage of development</h2>
      <Link to="/contact" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">Contact the team <ArrowRight className="h-4 w-4" /></Link>
    </Section></section>
  </>;
}
