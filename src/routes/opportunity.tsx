import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Droplet, Droplets, FlaskConical, Hand, Layers, Sparkles, Waves } from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
import { Artwork } from "@/components/artwork";
import { ImageLightbox } from "@/components/image-lightbox";
import { OpportunityFlow } from "@/components/opportunity-flow";
import { Button } from "@/components/ui/button";
import { Cite, References, ReferencesLink } from "@/components/references";

export const Route = createFileRoute("/opportunity")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Opportunity — Cavinova",
      "See how Cavinova plans to help spas introduce a premium ultrasound and microbubble facial with a repeatable service and refill model.",
    ),
  component: Opportunity,
});

const landscape = "/images/opportunity/treatment-landscape.webp";
const workflowImage = "/images/platform/rear-vial-workflow.png";
const workflowAlt =
  "Cavinova concept showing serum and a freeze-dried microbubble tab mixed in a vial, the vial attaching at the rear, and the ultrasound plate resting against the cheek.";

const mobileInnovation = [
  {
    title: "Mix just before use",
    description: "Combine the serum and a freeze-dried microbubble tab in the reservoir vial.",
  },
  {
    title: "Attach the reservoir",
    description: "Screw the prepared vial into the rear port of the handpiece.",
  },
  {
    title: "Dispense during the facial",
    description: "The handpiece is designed to dispense the mixture at the edge of the ultrasound plate.",
  },
];

const possibilities = [
  {
    title: "A new service for your menu",
    icon: Droplets,
    tone: "border-rose/40 bg-accent",
    description:
      "Give clients a reason to book an upgrade with a facial built around ultrasound and a dedicated microbubble serum.",
  },
  {
    title: "Designed for the treatment room",
    icon: Waves,
    tone: "border-teal/50 bg-secondary/65",
    description:
      "A handheld applicator, two marked reusable cup sizes, and facial presets give estheticians a routine they can learn and repeat.",
  },
  {
    title: "Built for repeat visits",
    icon: Hand,
    tone: "border-border bg-card",
    description:
      "Our goal is a facial clients want to book again, with serum and microbubble refills that spas can replenish as they treat.",
  },
];

// Take-home lineup: three pairings inspired by the in-spa serums, two planned over time.
export const takeHomePairings = [
  { name: "Hydrate & Glow", stage: "starting", icon: Droplet },
  { name: "Smooth & Firm", stage: "starting", icon: Waves },
  { name: "Brighten & Even Tone", stage: "starting", icon: Sparkles },
  { name: "Texture & Polish", stage: "planned", icon: Layers },
  { name: "Signature Radiance", stage: "planned", icon: Sparkles },
] as const;

const treatments = [
  {
    title: "Conventional topical facials",
    body: "A conventional facial relies on the formulation and how it is applied. The skin’s outer barrier limits the passage of many topical ingredients.",
    advantage:
      "Cavinova adds controlled ultrasound and a serum designed to respond to it, giving spas a distinct step to build a facial around.",
    sources: ["A"],
    x: 22,
  },
  {
    title: "Hydrodermabrasion and serum infusion",
    body: "Hydrodermabrasion uses fluid and suction for cleansing, exfoliation, and hydration. Its workflow centers on those steps.",
    advantage:
      "Cavinova gives spas a serum-focused option without suction or extraction in the planned treatment workflow.",
    sources: ["H"],
    x: 405,
  },
  {
    title: "Microneedling",
    body: "Microneedling deliberately punctures the skin. That adds a skin-puncture step and associated training and aftercare considerations.",
    advantage:
      "Cavinova is designed as a needle-free facial, with the serum and applicator used at the skin surface.",
    sources: ["M"],
    x: 776,
  },
  {
    title: "Focused ultrasound procedures",
    body: "Focused ultrasound can concentrate energy in tissue for specific aesthetic procedures. That is a different use of sound from a topical serum facial.",
    advantage:
      "Cavinova pairs sound with responsive microbubbles at the surface and plans presets for each facial and session length.",
    sources: ["U"],
    x: 1150,
  },
] as const;

function Heading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-4xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-balance text-4xl leading-tight sm:text-5xl">{title}</h2>
      {children && (
        <div className="mt-5 space-y-3 leading-relaxed text-muted-foreground">{children}</div>
      )}
    </div>
  );
}

// Frame the supplied artwork without baking its small labels into the webpage.
function Artwork({
  src,
  height,
  frame,
  alt,
}: {
  src: string;
  height: number;
  frame: [number, number, number, number];
  alt: string;
}) {
  const [x, y, width, visibleHeight] = frame;
  return (
    <div
      className="relative overflow-hidden bg-card"
      style={{ aspectRatio: width / visibleHeight }}
    >
      <img
        src={src}
        width={1536}
        height={height}
        alt={alt}
        loading="lazy"
        className="absolute h-auto max-w-none"
        style={{
          width: `${153600 / width}%`,
          left: `${(-100 * x) / width}%`,
          top: `${(-100 * y) / visibleHeight}%`,
        }}
      />
    </div>
  );
}

// Frame the supplied artwork without baking its small labels into the webpage.
function Artwork({
  src,
  height,
  frame,
  alt,
}: {
  src: string;
  height: number;
  frame: [number, number, number, number];
  alt: string;
}) {
  const [x, y, width, visibleHeight] = frame;
  return (
    <div
      className="relative overflow-hidden bg-card"
      style={{ aspectRatio: width / visibleHeight }}
    >
      <img
        src={src}
        width={1536}
        height={height}
        alt={alt}
        loading="lazy"
        className="absolute h-auto max-w-none"
        style={{
          width: `${153600 / width}%`,
          left: `${(-100 * x) / width}%`,
          top: `${(-100 * y) / visibleHeight}%`,
        }}
      />
    </div>
  );
}

function Opportunity() {
  return (
    <>
      <div className="bg-hero">
        <Section>
          <Eyebrow>Why Cavinova?</Eyebrow>
          <h1 className="mt-4 max-w-5xl text-balance text-4xl leading-tight sm:text-5xl xl:text-6xl">
            A different approach to professional skincare.
          </h1>
          <div className="mt-5 max-w-3xl space-y-3 text-lg leading-relaxed text-muted-foreground">
            <p>
              Not every skincare innovation requires a new active ingredient or another complex
              treatment system.
            </p>
            <p>
              Cavinova’s proposed platform brings established skincare ingredients and advanced
              acoustic delivery technology together in one system designed for the professional spa
              environment.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-3" aria-label="Platform design goals">
            {[
              ["Targeted Treatments", "A planned collection of formulations for different skincare goals."],
              ["Simplified Operation", "Automated treatment settings and a streamlined preparation process."],
              ["Designed for More Spas", "A versatile professional platform built around accessible adoption and ongoing treatment opportunities."],
            ].map(([title, description]) => (
              <li key={title} className="rounded-2xl border bg-card/85 p-4 sm:p-5">
                <p className="font-semibold">{title}</p>
                <p className="mt-1 leading-relaxed text-muted-foreground">{description}</p>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6 min-h-11 rounded-full">
            <Link to="/platform">
              Explore the Cavinova System <ArrowRight aria-hidden />
            </Link>
          </Button>
          <div className="mt-7 overflow-hidden rounded-3xl border shadow-soft">
            <div className="sm:hidden">
              <Artwork
                src={landscape}
                height={650}
                frame={[560, 0, 740, 240]}
                alt="A skincare professional attending to a client."
              />
            </div>
            <div className="hidden sm:block">
              <Artwork
                src={landscape}
                height={650}
                frame={[0, 0, 1536, 240]}
                alt="A skincare professional attending to a client in a contemporary treatment room."
              />
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="The treatment landscape"
          title="Where Cavinova adds something different"
        />
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {treatments.map(({ title, body, advantage, sources, x }) => (
            <article key={title} className="overflow-hidden rounded-3xl border bg-card">
              <Artwork src={landscape} height={650} frame={[x, 260, 358, 154]} alt="" />
              <div className="p-5 sm:p-6">
                <h3 className="text-balance text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {body}
                  <Cite ids={sources} />
                </p>
                <div className="mt-4 rounded-2xl bg-secondary/55 p-4">
                  <h4 className="text-base font-semibold">The Cavinova approach</h4>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{advantage}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <div id="innovation" className="scroll-mt-24 bg-secondary/40">
        <Section>
          <Eyebrow>The innovation</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">Better Together.</h2>
          <figure className="mt-8 hidden overflow-hidden rounded-3xl border bg-card shadow-soft md:block">
            <ImageLightbox
              src={workflowImage}
              title={workflowAlt}
            />
          </figure>
          <div className="mt-6 md:hidden">
            <figure className="overflow-hidden rounded-2xl border bg-card">
              <img
                src={workflowImage}
                alt={workflowAlt}
                width={1672}
                height={941}
                loading="lazy"
                className="block h-auto w-full"
              />
            </figure>
            <dl className="mt-5 divide-y divide-border">
              {mobileInnovation.map(({ title, description }) => (
                <div key={title} className="py-4">
                  <dt className="font-serif text-xl font-semibold leading-snug">{title}</dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">{description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Published lab studies inform Cavinova’s approach to ultrasound and microbubbles.
              <Cite ids={["C", "P"]} /> Cavinova's formulation and proposed system still need
              testing.
            </p>
          </div>
          <Link
            to="/science"
            className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-foreground underline decoration-primary underline-offset-4"
          >
            See how the science works <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <ReferencesLink />
        </Section>
      </div>

      <Section>
        <Eyebrow>Professional potential</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-tight sm:text-5xl">
          Made for Professionals
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Cavinova is designed around the people who would use it every day. Spa owners get a new
          service to offer, and estheticians get a workflow built around the treatment room.
        </p>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {possibilities.map(({ title, description, icon: Icon, tone }) => (
            <article key={title} className={`rounded-3xl border p-6 ${tone}`}>
              <span className="inline-grid size-11 place-items-center rounded-xl border bg-card text-foreground">
                <Icon aria-hidden className="size-5" />
              </span>
              <h3 className="mt-4 text-balance text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <Heading eyebrow="Cavinova at Home" title="Skincare that goes home with your clients">
          <p>
            The proposed take-home collection pairs each Cavinova serum with a companion
            moisturizer. It starts with three pairings inspired by the in-spa options: Hydrate &
            Glow, Smooth & Firm, and Brighten & Even Tone. Two more pairings, Texture & Polish and
            Signature Radiance, are planned over time.
          </p>
          <p>
            Spas can recommend a matching routine at checkout and give clients a reason to return
            for their favorites.
          </p>
        </Heading>
        <div className="mt-7 space-y-3">
          {(["starting", "planned"] as const).map((stage) => (
            <div key={stage} className="flex flex-wrap items-center gap-2">
              <span
                className={`w-full text-xs font-semibold uppercase tracking-[0.2em] sm:w-auto ${
                  stage === "starting" ? "text-teal-deep" : "text-muted-foreground"
                }`}
              >
                {stage === "starting" ? "Starting with" : "Planned over time"}
              </span>
              {takeHomePairings
                .filter((pairing) => pairing.stage === stage)
                .map(({ name, icon: Icon }) => (
                  <span
                    key={name}
                    className={`inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm ${
                      stage === "starting" ? "" : "border-dashed"
                    }`}
                  >
                    <Icon aria-hidden className="size-4 text-teal-deep" />
                    {name}
                  </span>
                ))}
            </div>
          ))}
        </div>
        <aside className="mt-6 max-w-3xl rounded-2xl border bg-card p-5 sm:p-6">
          <p className="inline-flex items-center gap-2 rounded-full border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">
            <FlaskConical aria-hidden className="size-3.5" /> In development
          </p>
          <h3 className="mt-3 font-serif text-xl font-semibold leading-snug">
            Take-home booster wand
          </h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            We’re developing an optional, battery-powered booster pen designed for use with
            Cavinova’s take-home serums.
          </p>
        </aside>
      </Section>

      <div className="bg-secondary/35">
        <Section>
          <Heading
            eyebrow="Why pair sound and serum?"
            title="A serum designed to respond to ultrasound"
          >
            <p>
              Sound and serum are designed as a pair. The development goal is to find out whether
              the combination can make a visible difference in a repeatable cosmetic facial.
            </p>
          </Heading>
          <figure className="mt-7">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border bg-card">
                <Artwork
                  src={comparison}
                  height={374}
                  frame={[66, 65, 592, 216]}
                  alt="Skin cross-section with topical ingredients shown at the surface."
                />
                <div className="p-5">
                  <h3 className="text-2xl">Conventional topical application</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Ingredients are applied at the surface. How readily they pass through depends on
                    the ingredient and formulation.
                    <Cite ids={["A", "K"]} />
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border bg-card">
                <Artwork
                  src={comparison}
                  height={374}
                  frame={[662, 65, 592, 216]}
                  alt="Conceptual skin cross-section showing ultrasound waves, microbubbles, and arrows suggesting possible ingredient movement."
                />
                <div className="p-5">
                  <h3 className="text-2xl">Proposed Cavinova approach</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Under suitable conditions, ultrasound can set responsive microbubbles in motion.
                    <Cite ids={["B", "P"]} /> Whether that improves delivery of selected ingredients
                    remains a research question.
                  </p>
                </div>
              </div>
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Conceptual comparison. Cavinova-specific performance still needs testing.
            </figcaption>
          </figure>
          <aside className="mt-6 max-w-4xl rounded-2xl border bg-card p-5 sm:p-6">
            <h3 className="text-2xl">Why bubble size matters</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              In a published pigskin lab study, a tracer dye penetrated <strong>37% deeper</strong>{" "}
              after ultrasound with 3.5-micrometer microbubbles than with 1.4-micrometer
              microbubbles under the same ultrasound setting.
              <Cite ids={["C"]} /> That finding gives Cavinova a concrete reason to test bubble size
              alongside the serum and ultrasound settings.
            </p>
          </aside>
        </Section>
      </div>

      <div id="investment-thesis" className="scroll-mt-24 bg-hero">
        <Section>
          <Heading eyebrow="Why Cavinova" title="From the first installation to the next refill.">
            <p>
              We plan to start with founder-led demos and training in the New York metro. Each
              installation gives us a chance to learn how estheticians use the system and what
              brings spas back for refills. That experience informs how we expand into new regions.
            </p>
          </Heading>
          <OpportunityFlow
            steps={[
              {
                title: "Science-led differentiation",
                description: (
                  <>
                    Ultrasound-responsive microbubble formulations.
                    <Cite ids={["C", "P"]} />
                  </>
                ),
              },
              {
                title: "Professional customer",
                description:
                  "Day spas and med spas looking for a premium facial to add to their menus.",
              },
              {
                title: "Recurring treatment demand",
                description:
                  "Spas replenish bulk serum and measured microbubble doses as they perform facials.",
              },
              {
                title: "Regional expansion",
                description:
                  "Local demos and trainer-led onboarding, supported by online refill ordering.",
              },
            ]}
          />
        </Section>
      </div>

      <Section>
        <div className="rounded-3xl border bg-secondary/55 p-6 shadow-soft sm:p-10">
          <Heading
            eyebrow="Investment & strategic interest"
            title="Interested in exploring Cavinova's potential?"
          >
            <p>
              We welcome conversations with prospective investors, strategic partners, and industry
              collaborators interested in evaluating a science-driven professional skincare
              opportunity.
            </p>
          </Heading>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="min-h-11 rounded-full">
              <Link to="/contact" search={{ interest: "investment" }}>
                Discuss the Opportunity <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" className="min-h-11 rounded-full">
              <Link to="/platform">Explore the Product Concept</Link>
            </Button>
          </div>
        </div>
      </Section>
      <References ids={["A", "B", "C", "F", "P", "H", "M", "U", "K"]} />
    </>
  );
}
