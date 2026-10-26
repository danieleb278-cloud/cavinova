import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldAlert, Waves, Cpu, Droplets, Stethoscope } from "lucide-react";
import { Section, Eyebrow, Waveform, Diagram, diagrams, seo } from "@/components/site";

export const Route = createFileRoute("/")({
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
              Most topical actives never make it past the skin's protective barrier. Cavinova is a proposed professional
              skincare platform pairing ultrasound with acoustically responsive microbubble serums — exploring a non-invasive,
              needle-free way to help targeted actives move beyond the stratum corneum, with no downtime for clients.
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.35em] text-teal-deep">Science in Harmony with Skin</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/science" className={`${btn} bg-primary text-primary-foreground hover:opacity-90`}>Explore the science <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/opportunity" className={`${btn} border bg-card hover:border-primary`}>View the opportunity</Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <span aria-hidden className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-blush/30 blur-3xl" />
            <figure className="glass relative overflow-hidden rounded-[2.25rem] p-6 shadow-soft ring-1 ring-rose/20 md:p-9">
              <span aria-hidden className="pointer-events-none absolute -bottom-10 -left-10 h-2/3 w-2/3 rounded-full bg-mint/60 blur-3xl" />
              <span aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-1/2 w-1/2 rounded-full bg-accent blur-3xl" />
              <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-card/80 to-transparent" />
              <img
                src={emblem.url}
                alt="Cavinova emblem — a rose letter C crossed by a teal acoustic waveform"
                width={863}
                height={588}
                className="relative h-auto w-full"
              />
              <figcaption className="relative mt-4 text-center text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-teal-deep">
                Advanced Acoustic Aesthetics
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <Section className="grid gap-10 md:grid-cols-2">
        <div className="rounded-3xl border bg-card p-8">
          <Eyebrow>The core challenge</Eyebrow>
          <h2 className="mt-3 text-3xl">The stratum corneum keeps most actives out.</h2>
          <p className="mt-4 text-muted-foreground">
            The skin's outermost layer — tightly packed corneocytes in a lipid matrix — is an effective barrier. Many
            conventional topicals, especially larger molecules like hyaluronic acid and peptides, remain largely at the surface,
            limiting what providers can achieve with creams and serums alone.
          </p>
        </div>
        <div className="rounded-3xl border bg-secondary/50 p-8">
          <Eyebrow>The proposed solution</Eyebrow>
          <h2 className="mt-3 text-3xl">Sonophoresis meets acoustic cavitation.</h2>
          <p className="mt-4 text-muted-foreground">
            Controlled ultrasound energy activates lipid-shelled microbubbles in the serum. Their oscillation is proposed to
            create transient, reversible micro-pathways that may enhance active permeation — a differentiated, non-invasive
            modality for professional aesthetic providers, subject to future clinical validation.
          </p>
        </div>
      </Section>

      <Section>
        <Eyebrow>Three-pillar synergy</Eyebrow>
        <h2 className="mt-3 text-4xl">One integrated treatment system</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: Cpu, t: "Advanced Ultrasound Applicator", d: "Piezoelectric handpiece and console delivering regulated acoustic energy." },
            { icon: Droplets, t: "Bio-Acoustic Serum Formulations", d: "Microbubble cartridges paired with hydration, brightening and rejuvenation actives." },
            { icon: Stethoscope, t: "Professional In-Clinic Protocol", d: "Standardized, provider-administered workflow for med spas and dermatology practices." },
          ].map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-3xl border bg-card p-7 shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary"><I className="h-5 w-5" /></span>
              <h3 className="mt-5 text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <Eyebrow>Product concept preview</Eyebrow>
            <h2 className="mt-3 text-4xl">A complete, customizable treatment system</h2>
            <p className="mt-4 text-muted-foreground">Handheld applicator, click-in microbubble vials and customizable ingredient concentrates — visualized as a concept only.</p>
            <Link to="/platform" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">See the full product concept <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <Diagram src={diagrams.handheld} title="Handheld treatment system" caption="Concept illustration. Not a working prototype; not FDA-cleared." />
        </div>
      </Section>

      <Section>
        <div className="rounded-[2rem] bg-foreground p-10 text-background md:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-mint">Commercial snapshot (planning targets)</p>
          <div className="mt-8 grid gap-8 md:grid-cols-4">
            {[["$45,000", "Console target price"], ["$35", "Per-treatment consumable kit"], ["$250", "Typical patient treatment price"], ["4,184", "Eligible U.S. locations (TAM)"]].map(([v, l]) => (
              <div key={l}><p className="font-serif text-5xl text-blush">{v}</p><p className="mt-2 text-sm opacity-80">{l}</p></div>
            ))}
          </div>
          <p className="mt-8 text-sm opacity-80">A razor-and-blade model: equipment adoption paired with recurring single-use consumable revenue — the combination that makes the device-plus-formulation pairing commercially interesting.</p>
          <p className="mt-4 text-xs opacity-60">Preliminary planning estimates from the Cavinova MBS business plan — illustrative financial assumptions, subject to validation.</p>
        </div>
      </Section>

      <Section className="grid gap-5 md:grid-cols-3">
        {([["/science", "Science & Technology", "How sonophoresis and cavitation work."], ["/platform", "Product Concept", "Hardware, consumables and workflow."], ["/opportunity", "Commercial Opportunity", "Market sizing, unit economics, roadmap."]] as const).map(([to, t, d]) => (
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
    </>
  );
}
