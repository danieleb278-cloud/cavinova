import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowDown,
  FlaskConical,
  Droplets,
  LockKeyhole,
  ShieldCheck,
  SlidersHorizontal,
  Power,
  Hand,
  Radio,
  CircleCheck,
} from "lucide-react";
import { Diagram, Eyebrow, Section, seo } from "@/components/site";
import { Button } from "@/components/ui/button";
import { References } from "@/components/references";
import { researchVisuals } from "@/lib/research-visuals";
import serumPackaging from "@/assets/Cavinova_Dual_Chamber_Serum_Concept.png.asset.json";

export const Route = createFileRoute("/platform")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Product Concept — Cavinova",
      "Explore Cavinova’s proposed integrated professional skincare system, from premeasured serum packets to an authenticated, dual-vial ultrasound platform.",
    ),
  component: Platform,
});

const features = [
  {
    title: "Two separate vials",
    icon: FlaskConical,
    body: "Two premeasured, single-use vials would click into the handpiece. Vial A holds the microbubble component. Vial B holds the selected active ingredients. Separate delivery pathways would handle each component. The internal routing and where the components interact still need to be designed and tested.",
  },
  {
    title: "Consumable authentication",
    icon: LockKeyhole,
    body: "An electronic tag would identify each required vial. The system would proceed only after recognizing both vials and checking the configuration. If authentication fails, ultrasound and automatic dispensing stay disabled.",
  },
  {
    title: "Automatic configuration",
    icon: SlidersHorizontal,
    body: "After authentication, the system would identify the formulation and load the operating settings established through testing. The goal is to reduce manual setup. The required acoustic settings still need to be determined.",
  },
  {
    title: "Measured dispensing",
    icon: Droplets,
    body: "The system would dispense a measured amount from the installed vials. The dispensing design and how accurately it delivers that amount still need engineering and validation.",
  },
  {
    title: "Integrated safeguards",
    icon: ShieldCheck,
    body: "The concept would block operation with unrecognized consumables, use recognized configurations, and stop under defined conditions. Automatic shutoff and its operating conditions are proposed design requirements that need validation.",
  },
  {
    title: "Single-use verification",
    icon: CircleCheck,
    body: "Authentication is intended to distinguish recognized consumables from unrecognized ones. A future enhancement could check whether a vial has already been used or refilled. That capability still needs to be designed and tested.",
  },
  {
    title: "More predictable serum use",
    icon: Droplets,
    body: "Premeasured portions and automated dispensing could leave less unused serum and make quantities more consistent. Single-use packaging creates material waste of its own. Product use, packaging waste, and overall environmental impact would need separate evaluation.",
  },
  {
    title: "Guided professional workflow",
    icon: Hand,
    body: "The proposed process runs from vial insertion and authentication through configuration, dispensing, ultrasound, and shutoff. The goal is a repeatable routine with fewer settings for staff to enter by hand.",
  },
] as const;

const operation = [
  {
    title: "Insert",
    icon: FlaskConical,
    body: "The provider inserts the two premeasured vials into the proposed dual-chamber handpiece.",
  },
  {
    title: "Authenticate",
    icon: LockKeyhole,
    body: "The system would read both tags and check whether the vials are recognized and compatible.",
  },
  {
    title: "Configure",
    icon: SlidersHorizontal,
    body: "After a successful check, the system would load the operating parameters established through testing for that configuration.",
  },
  {
    title: "Dispense",
    icon: Droplets,
    body: "The system would dispense the intended amount from the installed vials.",
  },
  {
    title: "Treat",
    icon: Radio,
    body: "The system would deliver controlled ultrasound according to the intended protocol.",
  },
  {
    title: "Complete",
    icon: Power,
    body: "Operation would end according to the protocol, with automatic shutoff where required.",
  },
] as const;

const workflows = [
  {
    title: "Initial Development Path",
    subtitle: "Manual serum application",
    steps: [
      "Select the premeasured packet.",
      "Open it and apply the formulation by hand.",
      "Use suitable ultrasound equipment once compatibility, safety, and the protocol are validated.",
      "Complete the session and required cleanup.",
    ],
  },
  {
    title: "Long-Term Integrated Vision",
    subtitle: "A coordinated equipment workflow",
    steps: [
      "Insert two premeasured, single-use vials.",
      "Authenticate both consumables.",
      "Load the tested operating settings automatically.",
      "Enable measured dispensing and controlled ultrasound.",
      "End operation according to the protocol and safety requirements.",
    ],
  },
] as const;

const phases = [
  [
    "Formulation Validation",
    "Study microbubble stability, ingredient compatibility, acoustic response, delivery, safety, and reproducibility.",
  ],
  [
    "Professional and Equipment Feasibility",
    "Evaluate specific existing ultrasound setups, provider interest, and how the proposed routine would fit into practice.",
  ],
  [
    "Integrated Machine Development",
    "If the evidence supports investment, develop the dual-vial handpiece, authentication, dispensing, configuration, and safeguards.",
  ],
  [
    "Commercial Platform Expansion",
    "Evaluate production, equipment leasing, recurring consumables, service, partnerships, and distribution.",
  ],
] as const;

const leaseSteps = [
  "A practice leases Cavinova equipment",
  "The practice purchases authenticated single-use consumables",
  "Eligible purchases could earn credits toward the lease",
  "Qualifying treatment activity could lower the practice’s effective equipment cost",
];

const choiceClass = "min-h-11 h-auto whitespace-normal px-3 py-2 text-left leading-snug";

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

function VialSchematic() {
  return (
    <figure className="flex h-full flex-col justify-center rounded-3xl border bg-secondary/45 p-5 sm:p-7">
      <figcaption className="mb-6 text-xl font-semibold">
        Concept schematic · two separate vials
      </figcaption>
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="rounded-2xl border border-rose/50 bg-accent p-3">
          <FlaskConical aria-hidden className="mx-auto mb-2 size-7" />
          <strong className="block">Vial A</strong>
          <span>Microbubble component</span>
        </div>
        <div className="rounded-2xl border border-teal/50 bg-secondary p-3">
          <FlaskConical aria-hidden className="mx-auto mb-2 size-7" />
          <strong className="block">Vial B</strong>
          <span>Active-ingredient formulation</span>
        </div>
        <ArrowDown aria-hidden className="mx-auto size-5 text-primary" />
        <ArrowDown aria-hidden className="mx-auto size-5 text-teal-deep" />
        <div className="col-span-2 rounded-2xl border bg-card p-3">
          <strong>Dual-chamber handpiece</strong>
          <div className="mt-2 grid grid-cols-2 gap-2">
            <span className="rounded-lg bg-accent p-2">Vial A connection</span>
            <span className="rounded-lg bg-secondary p-2">Vial B connection</span>
          </div>
        </div>
        <ArrowDown aria-hidden className="col-span-2 mx-auto size-5 text-muted-foreground" />
        <div className="col-span-2 rounded-xl border bg-card p-3 font-medium">
          Proposed treatment interface
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Internal fluid paths and the point of interaction remain to be engineered.
      </p>
    </figure>
  );
}

function FeatureExplorer() {
  const [selected, setSelected] = useState(0);
  const feature = features[selected];
  const Icon = feature.icon;
  return (
    <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
      <Diagram
        enlarge
        conceptLabel={false}
        src={researchVisuals.handheld}
        title="Cavinova treatment handpiece concept"
        caption="Existing handpiece concept artwork. The feature controls explain the proposed system architecture."
      />
      <div>
        <div role="group" aria-label="Select a machine feature" className="grid grid-cols-2 gap-2">
          {features.map(({ title }, index) => (
            <Button
              key={title}
              type="button"
              variant="outline"
              aria-pressed={selected === index}
              aria-controls="platform-feature"
              onClick={() => setSelected(index)}
              className={`${choiceClass} justify-start ${selected === index ? "border-primary bg-accent" : ""}`}
            >
              {title}
            </Button>
          ))}
        </div>
        <div
          id="platform-feature"
          aria-live="polite"
          aria-atomic="true"
          className="mt-4 rounded-2xl border bg-card p-5"
        >
          <Icon aria-hidden className="size-6 text-teal-deep" />
          <h3 className="mt-2 text-2xl">{feature.title}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{feature.body}</p>
        </div>
      </div>
    </div>
  );
}

function OperationSequence() {
  const [stage, setStage] = useState(0);
  const [recognized, setRecognized] = useState(true);
  const locked = !recognized && stage === 1;
  const current = operation[stage];
  const Icon = locked ? LockKeyhole : current.icon;
  const lastStage = recognized ? operation.length - 1 : 1;
  return (
    <div className="mt-8 rounded-3xl border bg-card p-4 sm:p-7">
      <div
        role="group"
        aria-label="Consumable recognition scenario"
        className="mb-5 flex flex-wrap gap-2"
      >
        {[true, false].map((valid) => (
          <Button
            key={String(valid)}
            type="button"
            variant="outline"
            className={`${choiceClass} ${recognized === valid ? "border-primary bg-accent" : ""}`}
            aria-pressed={recognized === valid}
            onClick={() => {
              setRecognized(valid);
              setStage(valid ? 0 : 1);
            }}
          >
            {valid ? "Recognized consumables" : "Unrecognized consumable"}
          </Button>
        ))}
      </div>
      <div
        role="group"
        aria-label="Select an operating stage"
        className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6"
      >
        {operation.map(({ title, icon: StageIcon }, index) => (
          <Button
            key={title}
            type="button"
            variant="outline"
            aria-pressed={stage === index}
            aria-controls="platform-operation"
            disabled={index > lastStage}
            onClick={() => setStage(index)}
            className={`${choiceClass} ${stage === index ? "border-primary bg-accent" : ""}`}
          >
            <StageIcon aria-hidden />
            {title}
          </Button>
        ))}
      </div>
      <div
        id="platform-operation"
        aria-live="polite"
        aria-atomic="true"
        className={`mt-5 rounded-2xl p-5 ${locked ? "bg-accent" : "bg-secondary/55"}`}
      >
        <Icon aria-hidden className="size-6" />
        <h3 className="mt-2 text-2xl">{locked ? "Treatment locked" : current.title}</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {locked
            ? "Authentication unsuccessful. Ultrasound activation and automatic dispensing remain disabled."
            : current.body}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          className="min-h-11"
          disabled={stage === 0}
          onClick={() => setStage(stage - 1)}
        >
          Previous
        </Button>
        <Button
          type="button"
          className="min-h-11"
          disabled={stage === lastStage}
          onClick={() => setStage(stage + 1)}
        >
          Next <ArrowRight aria-hidden />
        </Button>
        <Button type="button" variant="ghost" className="min-h-11" onClick={() => setStage(0)}>
          Restart sequence
        </Button>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Concept demonstration of intended control logic.
      </p>
    </div>
  );
}

function Platform() {
  return (
    <>
      <div className="bg-hero">
        <Section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow>The Cavinova product vision</Eyebrow>
            <h1 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl xl:text-6xl">
              More than a serum. An intelligent skincare delivery platform.
            </h1>
            <div className="mt-5 space-y-3 leading-relaxed text-muted-foreground">
              <p>
                Cavinova envisions a professional system that pairs acoustically responsive
                formulations with controlled ultrasound.
              </p>
              <p>
                Premeasured, single-use formulations, automated dispensing, consumable
                authentication, and integrated controls could make the process easier to learn and
                repeat.
              </p>
              <p>
                We’d validate the serum first. Our long-term goal is a complete Cavinova system
                shaped by scientific evidence and professional demand.
              </p>
            </div>
            <Button asChild className="mt-6 min-h-11 rounded-full text-base">
              <a href="#integrated-system">
                Explore the proposed system <ArrowRight aria-hidden />
              </a>
            </Button>
          </div>
          <Diagram
            enlarge
            conceptLabel={false}
            src={researchVisuals.console}
            title="Cavinova console and handpiece concept"
            caption="Proposed integrated Cavinova system. Conceptual design, not a commercial product."
          />
        </Section>
      </div>

      <div id="integrated-system" className="scroll-mt-24">
        <Section>
          <Heading
            eyebrow="Integrated by design"
            title="Not just ultrasound. A coordinated treatment system."
          >
            <p>
              The future system would connect formulation identification, treatment settings,
              dispensing, and safeguards. Select a feature to see what it would add to the
              provider’s routine.
            </p>
          </Heading>
          <FeatureExplorer />
        </Section>
      </div>

      <div className="bg-secondary/35">
        <Section>
          <Heading
            eyebrow="Intelligent treatment control"
            title="Designed to recognize the treatment before delivering it."
          >
            <p>
              The proposed workflow starts with the two single-use vials. See how the system would
              proceed after authentication, or what would stay disabled if a vial is unrecognized.
            </p>
          </Heading>
          <OperationSequence />
        </Section>
      </div>

      <Section>
        <Heading eyebrow="The serum technology" title="The innovation begins with the formulation.">
          <p>
            We’re investigating how microbubbles and selected skincare ingredients respond to
            ultrasound. Hyaluronic acid, vitamin C, and niacinamide are candidates for research.
            Compatibility, stability, safety, delivery, and reproducibility still need testing.
          </p>
        </Heading>
        <div className="mt-8 grid gap-7 md:grid-cols-2">
          <article className="flex min-w-0 flex-col gap-4">
            <h3 className="text-2xl">Initial format · Manual serum packets</h3>
            <p className="leading-relaxed text-muted-foreground">
              A provider would open a premeasured, single-use packet and apply it by hand. This
              format would support testing with suitable existing ultrasound equipment. It is
              separate from the dedicated machine.
            </p>
            <figure className="overflow-hidden rounded-3xl border bg-card">
              <img
                src={serumPackaging.url}
                alt="Cavinova dual-chamber squeeze packet concept for manual application."
                width={1774}
                height={887}
                loading="lazy"
                className="block h-auto w-full object-contain"
              />
              <figcaption className="border-t px-4 py-3 text-sm text-muted-foreground">
                Packaging concept · manual application
              </figcaption>
            </figure>
          </article>
          <article className="flex min-w-0 flex-col gap-4">
            <h3 className="text-2xl">Future format · Click-in machine vials</h3>
            <p className="leading-relaxed text-muted-foreground">
              Two separate, premeasured, single-use vials would connect to the proposed handpiece
              for automated delivery. One holds the microbubble component and the other holds
              selected active ingredients.
            </p>
            <VialSchematic />
          </article>
        </div>
      </Section>

      <div className="bg-accent/55">
        <Section>
          <Heading
            eyebrow="Designed for professionals"
            title="A simpler process. A more integrated experience."
          >
            <p>
              The initial concept starts with a premeasured manual application. The long-term system
              would automate more of the preparation, configuration, and dispensing.
            </p>
          </Heading>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {workflows.map(({ title, subtitle, steps }) => (
              <article key={title} className="rounded-3xl border bg-card p-5 sm:p-7">
                <Eyebrow>{title}</Eyebrow>
                <h3 className="mt-2 text-2xl">{subtitle}</h3>
                <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-muted-foreground">
                  {steps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="From formulation to platform"
          title="Start with the serum. Build toward something bigger."
        >
          <p>
            We’d establish whether the formulation works with a suitable ultrasound setup before
            making a major hardware investment. Early results and provider feedback would guide
            development toward the integrated Cavinova platform.
          </p>
        </Heading>
        <ol className="mt-8 grid gap-4 lg:grid-cols-4">
          {phases.map(([title, description], index) => (
            <li
              key={title}
              className={`relative rounded-2xl border p-5 ${index >= 2 ? "bg-secondary/55" : "bg-card"}`}
            >
              <Eyebrow>Phase {index + 1} · Planned</Eyebrow>
              <h3 className="mt-3 text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <div className="bg-secondary/40">
        <Section>
          <Heading
            eyebrow="Designed for long-term partnerships"
            title="A platform built around equipment and ongoing treatment demand."
          >
            <p>
              Cavinova is exploring equipment leasing as a way to lower upfront costs for practices.
              Eligible purchases of authenticated consumables could earn credits toward the lease.
              The economics and terms still need evaluation.
            </p>
          </Heading>
          <ol aria-label="Proposed lease-credit model" className="mt-8 grid gap-3 lg:grid-cols-4">
            {leaseSteps.map((item, index) => (
              <li key={item} className="relative rounded-xl border bg-card p-4 font-medium">
                <span className="mb-2 block text-sm font-semibold text-teal-deep">
                  0{index + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <div className="border-t pt-4">
              <h3 className="text-2xl">For practices</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Leasing could reduce upfront investment. Measured doses and a coordinated workflow
                could make consumable needs easier to plan. Lease credits would depend on qualifying
                purchases.
              </p>
            </div>
            <div className="border-t pt-4">
              <h3 className="text-2xl">For Cavinova</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Recurring consumable purchases could support service and continued formulation
                development. Practices may weigh cartridge restrictions against the value of
                compatibility checks, guided setup, and measured dispensing.
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Concept under evaluation. Lease credits and terms have yet to be established.
          </p>
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="From product vision to business strategy"
          title="An ambitious platform. A disciplined path to market."
        >
          <p>
            Serum testing comes first. The results will help show whether specialized formulations,
            coordinated equipment, and recurring consumables could support a viable professional
            platform.
          </p>
        </Heading>
        <Button asChild className="mt-6 min-h-11 rounded-full text-base">
          <Link to="/opportunity">
            Explore the Opportunity <ArrowRight aria-hidden />
          </Link>
        </Button>
        <p className="mt-6 text-sm text-muted-foreground">
          A published patent application informed aspects of the concept. Cavinova has yet to secure
          rights to it or validate a working system.
        </p>
      </Section>
      <References ids={["D"]} />
    </>
  );
}
