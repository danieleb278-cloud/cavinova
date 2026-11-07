import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldAlert, Waves, Cpu, Droplets, Stethoscope } from "lucide-react";
import { Section, Eyebrow, Diagram, seo } from "@/components/site";
import { researchVisuals } from "@/lib/research-visuals";
import { Cite, References } from "@/components/references";
import wordmark from "@/assets/cavinova_wordmark.png.asset.json";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => seo("Cavinova — Advanced Acoustic Aesthetics", "A conceptual Rutgers MBS Capstone venture exploring ultrasound-assisted topical skincare delivery with acoustically responsive microbubbles."),
  component: Home,
});

const btn = "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition";

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:py-28">
          <div>
            <span className="inline-block rounded-full border border-teal/50 bg-card px-4 py-1.5 text-xs font-semibold tracking-wide text-teal-deep">
              Conceptual Venture • Rutgers MBS Capstone
            </span>
            <h1 className="mt-6 text-5xl leading-[1.05] md:text-7xl">
              Sound, tuned to <em className="text-primary">unlock</em> the skin barrier.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              The skin barrier limits the penetration of many topical ingredients. Cavinova is a proposed professional
              skincare platform pairing ultrasound with acoustically responsive microbubble serums — exploring a non-invasive,
              needle-free way to help targeted actives move beyond the stratum corneum, with tolerability and recovery time requiring future evaluation.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-teal-deep">Science in Harmony with Skin</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/science" className={`${btn} bg-primary text-primary-foreground hover:opacity-90`}>Explore the science <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/opportunity" className={`${btn} border bg-card hover:border-primary`}>View the opportunity</Link>
            </div>
          </div>
          <div className="relative order-first mx-auto w-full max-w-2xl md:order-none">
            <span aria-hidden className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-blush/30 blur-3xl" />
            <figure className="glass relative overflow-hidden rounded-[2.25rem] p-6 shadow-soft ring-1 ring-rose/20 md:p-9">
              <span aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-2/3 w-2/3 rounded-full bg-mint/60 blur-3xl" />
              <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-1/2 w-1/2 rounded-full bg-accent blur-3xl" />
              <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-card/80 to-transparent" />
              <img
                src={wordmark.url}
                alt="Cavinova — Advanced Acoustic Aesthetics"
                width={1686}
                height={722}
                className="relative h-auto w-full"
              />
              <figcaption className="relative mt-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-teal-deep">
                Science in Harmony with Skin
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Section className="grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border bg-card p-8">
          <Eyebrow>The core challenge</Eyebrow>
          <h2 className="mt-3 text-3xl">The skin barrier limits topical delivery.</h2>
          <p className="mt-4 text-muted-foreground">
            The skin's outermost layer — tightly packed corneocytes in a lipid matrix — is an effective barrier. Penetration of topical ingredients, including larger molecules such as hyaluronic acid and peptides, depends on molecular properties, formulation and skin condition.<Cite ids={["A"]} />
          </p>
        </div>
        <div className="rounded-3xl border bg-secondary/50 p-8">
          <Eyebrow>The proposed solution</Eyebrow>
          <h2 className="mt-3 text-3xl">Sonophoresis meets acoustic cavitation.</h2>
          <p className="mt-4 text-muted-foreground">
            Ultrasound-assisted delivery and microbubble effects have been studied in experimental models. Cavinova proposes pairing ultrasound with microbubble serums; microbubble activity may alter barrier permeability depending on formulation and acoustic settings. This has not been established for Cavinova.<Cite ids={["A", "C"]} />
          </p>
        </div>
      </Section>

      <Section>
        <Eyebrow>Our direction</Eyebrow>
        <h2 className="mt-3 text-4xl">What we’re building toward</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">Our long-term goal is a Cavinova-developed ultrasound system paired with a serum we develop ourselves. We’d start with the serum and test it using a specific ultrasound device and applicator already in use. What we learn will help us decide whether developing a dedicated system is worth pursuing.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: Droplets, t: "The serum", d: "Develop a candidate microbubble serum and evaluate how well it holds up in storage, mixing, and dispensing." },
            { icon: Cpu, t: "The ultrasound", d: "Test how the serum responds to a specific device and applicator. Use those results to understand what a dedicated Cavinova system would need to do." },
            { icon: Stethoscope, t: "The professional workflow", d: "Learn how skincare professionals would prepare and apply the serum, and what would make the process practical in their day-to-day work." },
          ].map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-3xl border bg-card p-7 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary"><I className="h-5 w-5" /></span>
              <h3 className="mt-5 text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Product concept preview</Eyebrow>
            <h3 className="mt-3 text-3xl">A future Cavinova system</h3>
            <Link to="/platform" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">See the full product concept <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <Diagram src={researchVisuals.handheld} title="Concept illustration of a future Cavinova system" caption="Concept illustration of a future Cavinova system." />
        </div>
      </Section>

      <Section className="grid gap-5 md:grid-cols-3">
        {([["/science", "Science & Technology", "How sonophoresis and cavitation work."], ["/platform", "Product Concept", "Hardware, consumables and workflow."], ["/opportunity", "Commercial Opportunity", "An illustrative market scenario and paths under consideration."]] as const).map(([to, t, d]) => (
          <Link key={to} to={to} className="group rounded-3xl border bg-card p-7 transition hover:border-primary">
            <Waves className="h-5 w-5 text-teal" />
            <h3 className="mt-4 text-2xl">{t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Explore <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </Section>

      <Section className="pt-0">
        <p className="flex items-start gap-3 rounded-2xl border border-dashed border-rose/50 bg-accent/50 p-5 text-sm text-muted-foreground">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          Cavinova is a hypothetical, pre-commercial academic venture. Products have not been launched, and the team has not secured ownership or licensing rights to the underlying patent application.
        </p>
      </Section>
      <References ids={["A", "C"]} />
    </>
  );
}
