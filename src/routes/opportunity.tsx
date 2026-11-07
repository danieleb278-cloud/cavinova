import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import {
  ArrowRight,
  FlaskConical,
  SlidersHorizontal,
  Droplets,
  BriefcaseBusiness,
  Hand,
  Users,
} from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
import { Button } from "@/components/ui/button";
import { equipmentScenario, illustrativeEquipmentLocations } from "@/lib/opportunity";
import { references } from "@/lib/references";
import { researchVisuals } from "@/lib/research-visuals";
import serumPackaging from "@/assets/Cavinova_Dual_Chamber_Serum_Concept.png.asset.json";

export const Route = createFileRoute("/opportunity")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Opportunity — Cavinova",
      "Explore the professional market need, Cavinova’s serum-first strategy, and the evidence needed to advance an integrated skincare platform.",
    ),
  component: Opportunity,
});

const needs = [
  {
    title: "Differentiation",
    body: "Practices need services they can meaningfully distinguish. Cavinova would test whether ultrasound-assisted delivery offers a reason to add a new treatment.",
    icon: FlaskConical,
    tone: "bg-accent",
  },
  {
    title: "Consistency and workflow",
    body: "Preparation, equipment settings, and training shape how a service runs. A future integrated system would aim to coordinate those steps.",
    icon: SlidersHorizontal,
    tone: "bg-secondary/60",
  },
  {
    title: "Formulation efficiency",
    body: "Premeasured, single-use portions could make serum use more predictable and leave less unused product. Both goals need testing.",
    icon: Droplets,
    tone: "bg-card",
  },
];

const participants = [
  {
    title: "Practice owners",
    body: "Weigh demand, differentiation, and what it would take to introduce a service.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Aesthetic professionals",
    body: "Need a practical routine, appropriate training, and clear operating instructions.",
    icon: Hand,
  },
  {
    title: "Treatment clients",
    body: "Their experience, satisfaction, and interest in returning would shape adoption.",
    icon: Users,
  },
];

const differentiation = [
  [
    "Specialized formulation",
    "A candidate microbubble serum with selected active ingredients, supplied in premeasured single-use packets for manual application.",
  ],
  [
    "Integrated system",
    "A future device concept that combines separate microbubble and active-ingredient vials, a dual-chamber handpiece, measured dispensing, and acoustic settings established through testing.",
  ],
  [
    "Intelligent consumables",
    "Authenticated vials could let the system recognize a configuration, load the corresponding settings, and apply operating safeguards.",
  ],
] as const;

const stages = [
  [
    "Establish technical feasibility",
    "Investigate stability, acoustic response, ingredient compatibility, delivery, and safety.",
  ],
  [
    "Evaluate professional application",
    "Assess specific ultrasound setups, professional-use requirements, and provider interest.",
  ],
  [
    "Validate the commercial proposition",
    "Test willingness to adopt, workflow fit, training needs, and potential repeat consumable demand.",
  ],
  [
    "Advance the integrated platform",
    "If the evidence supports it, develop the dedicated system with separate vials, automated dispensing, authentication, and treatment controls.",
  ],
  [
    "Expand through qualified partners",
    "Explore manufacturing, distribution, professional education, and service partnerships.",
  ],
] as const;

const ecosystem = [
  ["Develop and support", "Cavinova develops and supports the proposed platform."],
  ["Adopt", "Qualified practices could adopt a validated treatment approach."],
  ["Use", "Each session would use a premeasured, single-use formulation."],
  ["Replenish", "Practices would reorder as treatment activity warrants."],
  [
    "Continue supporting practices",
    "Ongoing relationships could inform service and future formulations.",
  ],
] as const;

const validation = [
  [
    "Scientific feasibility",
    "Does the formulation provide a meaningful and reproducible delivery advantage?",
  ],
  [
    "Safety and regulatory requirements",
    "What testing, controls, classifications, and authorizations would the intended use require?",
  ],
  [
    "Intellectual property",
    "Can Cavinova secure the rights it needs and establish freedom to operate?",
  ],
  [
    "Professional-market demand",
    "Would qualified practices adopt the approach and continue using it?",
  ],
  [
    "Operational feasibility",
    "Can Cavinova and its suppliers consistently make, supply, and support the formulations and future equipment?",
  ],
  ["Commercial viability", "Could the business sustain operations as demand grows?"],
] as const;

const link =
  "inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-primary underline-offset-4";

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

function Progression({
  items,
  label,
}: {
  items: readonly (readonly [string, string])[];
  label: string;
}) {
  return (
    <ol aria-label={label} className="mt-8 grid gap-4 lg:grid-flow-col lg:auto-cols-fr">
      {items.map(([title, body], index) => (
        <li
          key={title}
          className="relative border-l-2 border-teal/60 pb-3 pl-4 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-4"
        >
          <Eyebrow>0{index + 1}</Eyebrow>
          <h3 className="mt-2 text-xl leading-tight">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
        </li>
      ))}
    </ol>
  );
}

function MarketScenario() {
  return (
    <aside
      className="mt-10 rounded-3xl border bg-card p-5 sm:p-7"
      aria-labelledby="equipment-scenario"
    >
      <h3 id="equipment-scenario" className="text-2xl">
        An illustrative six-state equipment scenario
      </h3>
      <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
        A preliminary team estimate for{" "}
        {new Intl.ListFormat("en-US").format(equipmentScenario.states)}. Actual qualifying practices
        and adoption still need validation.
      </p>
      <dl className="mt-6 grid gap-5 sm:grid-cols-3">
        {[
          [
            "Estimated med spa screening pool",
            `≈${equipmentScenario.screenedLocations.toLocaleString("en-US")}`,
          ],
          ["Hypothetical cumulative adoption", `${equipmentScenario.cumulativeAdoption * 100}%`],
          ["Illustrative equipment locations", String(illustrativeEquipmentLocations)],
        ].map(([title, value]) => (
          <div key={title} className="border-t border-teal/50 pt-4">
            <dt className="font-medium">{title}</dt>
            <dd className="mt-2 font-serif text-4xl tabular-nums text-foreground">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
        The 1% scenario gives about 19 locations for equipment planning. The serum-only opportunity
        depends on which devices and applicators prove compatible. A separate estimate would be
        needed for that market.
      </p>
      <details className="mt-4 border-t">
        <summary className="flex min-h-11 cursor-pointer items-center font-semibold underline decoration-primary underline-offset-4">
          How the team estimated the screening pool
        </summary>
        <p className="max-w-3xl pb-4 leading-relaxed text-muted-foreground">
          The team started with AmSpa’s reported 10,488 U.S. med spas for 2023. It applied the
          reported 57% share offering hydradermabrasion as a proxy for familiarity with
          equipment-assisted facials, a 70% team assumption for additional practice suitability, and
          a 44.7% six-state share estimated from ByteScraper’s 2026 directory. The model screens for
          potential fit using service mix, clinical capability, and operational and financial
          readiness. It does not identify individual qualified practices or forecast demand.
        </p>
        <ul className="pb-3">
          <li>
            <a className={link} href={references.E.url}>
              AmSpa industry report recap
            </a>
          </li>
          <li>
            <a className={link} href={references.F.url}>
              AmSpa service-mix context
            </a>
          </li>
          <li>
            <a
              className={link}
              href="https://bytescraper.com/b2b-database/list-of-medical-spas-in-united-states"
            >
              ByteScraper U.S. medical spa directory
            </a>
          </li>
        </ul>
      </details>
    </aside>
  );
}

function Opportunity() {
  return (
    <>
      <div className="bg-hero">
        <Section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow>The opportunity</Eyebrow>
            <h1 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl xl:text-6xl">
              A new approach to professional skincare deserves a new path to market.
            </h1>
            <div className="mt-5 space-y-3 leading-relaxed text-muted-foreground">
              <p>
                New professional skincare treatments have to offer meaningful value to both
                practices and clients. Cavinova is investigating where specialized formulations and
                controlled ultrasound could do that together.
              </p>
              <p>
                Our strategy starts by testing the serum and learning what practices need. Our
                long-term goal is an integrated platform that coordinates dosing, compatibility, and
                professional use.
              </p>
            </div>
          </div>
          <div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
            aria-label="From serum concept to integrated platform"
          >
            <figure className="overflow-hidden rounded-2xl border bg-card shadow-soft">
              <img
                src={serumPackaging.url}
                alt="Cavinova two-chamber manual serum packet concept."
                width={1774}
                height={887}
                className="aspect-[4/3] w-full object-contain"
              />
              <figcaption className="border-t p-4">
                <Eyebrow>Starting point</Eyebrow>
                <p className="mt-1 font-serif text-xl">Premeasured serum concept</p>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border bg-card shadow-soft">
              <img
                src={researchVisuals.console}
                alt="Concept rendering of the future Cavinova console and handpiece."
                className="aspect-[4/3] w-full object-contain"
              />
              <figcaption className="border-t p-4">
                <Eyebrow>Long-term vision</Eyebrow>
                <p className="mt-1 font-serif text-xl">Integrated system concept</p>
              </figcaption>
            </figure>
          </div>
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="The problem worth solving"
          title="Innovation must deliver more than another treatment option."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {needs.map(({ title, body, icon: Icon, tone }) => (
            <article key={title} className={`rounded-3xl border p-5 sm:p-6 ${tone}`}>
              <Icon aria-hidden className="size-7 text-teal-deep" />
              <h3 className="mt-4 text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="bg-secondary/35">
        <Section>
          <Heading
            eyebrow="The initial customer"
            title="Built around the needs of aesthetic professionals."
          >
            <p>
              We’d start with qualified U.S. medical spas, dermatology practices, and professional
              aesthetic providers interested in evaluating a needle-free skincare concept. Early
              evaluation would favor practices with suitable capabilities and staff willing to give
              structured feedback.
            </p>
          </Heading>
          <div className="mt-7 grid gap-5 md:grid-cols-3" aria-label="People who shape adoption">
            {participants.map(({ title, body, icon: Icon }) => (
              <article key={title} className="border-t pt-4">
                <Icon aria-hidden className="size-6 text-teal-deep" />
                <h3 className="mt-3 text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
          <MarketScenario />
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="How Cavinova could differentiate"
          title="The opportunity is not simply another ultrasound device."
        >
          <p>
            We’d start by establishing the value of the formulation, then test what a dedicated
            system could add to dosing, compatibility, and the provider’s routine.
          </p>
        </Heading>
        <Progression items={differentiation} label="Proposed sources of differentiation" />
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          These proposed advantages depend on technical validation, customer acceptance, and
          intellectual property review.
        </p>
        <Link to="/platform" className={`mt-4 ${link}`}>
          See the Product Concept <ArrowRight aria-hidden className="size-4" />
        </Link>
      </Section>

      <div className="bg-accent/55">
        <Section>
          <Heading eyebrow="The path to market" title="Validate what matters. Scale what works.">
            <p>
              The serum is our first development priority. A compatible existing device could help
              us evaluate the approach. The results would guide any equipment partnership or
              investment in a dedicated Cavinova system.
            </p>
          </Heading>
          <ol
            aria-label="Conditional commercialization roadmap"
            className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5"
          >
            {stages.map(([title, body], index) => (
              <li key={title} className="border-l-2 border-primary/50 pl-4">
                <Eyebrow>Stage {index + 1} · Proposed</Eyebrow>
                <h3 className="mt-2 text-xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="The commercial ecosystem"
          title="Beyond the equipment. A continuing treatment relationship."
        >
          <p>
            If practices adopt the approach, each session would use a premeasured portion.
            Replenishment would depend on actual treatment activity. A future system could tie
            consumable recognition, formulation compatibility, and the provider’s routine together.
          </p>
        </Heading>
        <div className="rounded-3xl border bg-secondary/35 px-5 pb-2 sm:px-7">
          <Progression items={ecosystem} label="Proposed recurring consumables ecosystem" />
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <h3 className="text-2xl">For practices</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Potentially distinct services, predictable formulation quantities, coordinated
              preparation, and future formulation options.
            </p>
          </div>
          <div>
            <h3 className="text-2xl">For Cavinova</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Potential repeat consumable demand and continuing practice relationships that could
              inform new formulations and ongoing support.
            </p>
          </div>
        </div>
      </Section>

      <div className="bg-secondary/40">
        <Section>
          <Heading
            eyebrow="The path from promise to proof"
            title="Commercial potential depends on measurable evidence."
          >
            <p>
              Before advancing, Cavinova needs evidence that the approach can be developed
              responsibly, used consistently, and adopted by professional practices.
            </p>
          </Heading>
          <dl className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {validation.map(([title, body]) => (
              <div key={title} className="border-t border-teal/60 pt-4">
                <dt className="font-serif text-2xl">{title}</dt>
                <dd className="mt-2 leading-relaxed text-muted-foreground">{body}</dd>
              </div>
            ))}
          </dl>
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="Building the next chapter"
          title="From scientific possibility to professional innovation."
        >
          <p>
            We welcome conversations with researchers, formulation specialists, technology
            developers, and aesthetic professionals who can help evaluate what this approach would
            need to succeed.
          </p>
        </Heading>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="min-h-11 rounded-full">
            <Link to="/contact">
              Connect With Cavinova <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline" className="min-h-11 rounded-full">
            <Link to="/platform">Explore Our Product Vision</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
