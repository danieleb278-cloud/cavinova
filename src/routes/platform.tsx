import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowDown,
  FlaskConical,
  Droplets,
  LockKeyhole,
  ShieldCheck,
  SlidersHorizontal,
  ScanLine,
  Hand,
  CircleCheck,
} from "lucide-react";
import { Diagram, Eyebrow, Section, seo } from "@/components/site";
import { Button } from "@/components/ui/button";
import { References } from "@/components/references";

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
    body: "Two premeasured, single-use vials would click into the handpiece. Vial A holds the microbubble component. Vial B holds the selected active ingredients. Separate delivery pathways would handle each component. Keeping the components separate until dispensing is intended to support stability. Internal routing still needs to be designed and tested.",
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
    body: "Premeasured portions and automated dispensing aim to leave less unused serum and make quantities more consistent. Single-use packaging creates material waste of its own. Product use, packaging waste, and overall environmental impact would need separate evaluation.",
  },
  {
    title: "Guided professional workflow",
    icon: Hand,
    body: "The proposed process runs from vial insertion and authentication through configuration, dispensing, ultrasound, and shutoff. The goal is a repeatable routine with fewer settings for staff to enter by hand.",
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
    "Evaluate production, service, partnerships, and distribution.",
  ],
] as const;

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
    <div className="mt-8 max-w-5xl">
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

const authentication = {
  insert: {
    title: "Insert vials",
    status: "Awaiting authentication",
    detail:
      "Insert the two required consumables. Treatment remains disabled until both are checked.",
    icon: FlaskConical,
    tone: "border-white/20 bg-white/5",
  },
  scanning: {
    title: "Authenticating",
    status: "Checking both consumables",
    detail: "The concept checks the identity and compatibility of each vial.",
    icon: ScanLine,
    tone: "border-teal/60 bg-teal/10",
  },
  authorized: {
    title: "Authorized",
    status: "Ready for operator start",
    detail:
      "Both consumables are recognized. The concept would select the corresponding validated protocol and wait for the provider to start treatment.",
    icon: CircleCheck,
    tone: "border-teal/60 bg-teal/15",
  },
  locked: {
    title: "Authentication failed",
    status: "Treatment locked",
    detail:
      "The example active-ingredient vial is unrecognized or incompatible. Ultrasound and automatic dispensing remain disabled.",
    icon: LockKeyhole,
    tone: "border-rose/65 bg-rose/15",
  },
} as const;

function OperationSequence() {
  const [state, setState] = useState<keyof typeof authentication>("insert");
  const [recognized, setRecognized] = useState(true);
  const current = authentication[state];
  const Icon = current.icon;
  const scanning = state === "scanning";

  useEffect(() => {
    if (!scanning) return;
    const timer = window.setTimeout(() => setState(recognized ? "authorized" : "locked"), 1450);
    return () => window.clearTimeout(timer);
  }, [scanning, recognized]);

  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] border bg-card shadow-soft">
      <div className="bg-[#10292e] p-4 text-white sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/20 pb-4">
          <span className="font-serif text-2xl">Cavinova</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-teal">
            Concept simulation
          </span>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid grid-cols-2 gap-3" aria-label="Required consumables">
            {["Microbubble component", "Active ingredients"].map((label, index) => {
              const status =
                state === "insert"
                  ? "Awaiting check"
                  : scanning
                    ? "Checking"
                    : state === "locked" && index === 1
                      ? "Unrecognized"
                      : "Recognized";
              return (
                <div
                  key={label}
                  className={`rounded-2xl border p-3 sm:p-5 ${index === 0 ? "border-rose/55 bg-rose/10" : "border-teal/55 bg-teal/10"} ${scanning ? "motion-safe:animate-pulse" : ""}`}
                >
                  <FlaskConical
                    aria-hidden
                    className={`mb-3 size-7 ${index === 0 ? "text-blush" : "text-teal"}`}
                  />
                  <p className="text-sm font-semibold">Vial {index === 0 ? "A" : "B"}</p>
                  <p className="mt-1 break-words text-sm">{label}</p>
                  <p className="mt-3 text-sm font-semibold">{status}</p>
                </div>
              );
            })}
          </div>
          <div
            role="status"
            aria-atomic="true"
            className={`rounded-2xl border p-4 sm:p-5 ${current.tone}`}
          >
            <Icon
              aria-hidden
              className={`size-7 ${state === "locked" ? "text-blush" : "text-teal"} ${scanning ? "motion-safe:animate-pulse" : ""}`}
            />
            <h3 className="mt-2 text-2xl">{current.title}</h3>
            <p className="mt-1 font-semibold">{current.status}</p>
            <p className="mt-2 leading-relaxed text-white/85">{current.detail}</p>
          </div>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div
          role="group"
          aria-label="Choose an authentication scenario"
          className="flex flex-wrap gap-2"
        >
          <Button
            type="button"
            disabled={scanning}
            className={choiceClass}
            onClick={() => {
              setRecognized(true);
              setState("scanning");
            }}
          >
            Try recognized vials
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={scanning}
            className={choiceClass}
            onClick={() => {
              setRecognized(false);
              setState("scanning");
            }}
          >
            Try an unrecognized vial
          </Button>
          <Button
            type="button"
            variant="ghost"
            className={choiceClass}
            onClick={() => setState("insert")}
          >
            Reset simulation
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Illustrates proposed control logic. The interface and authentication capability are
          conceptual.
        </p>
      </div>
    </div>
  );
}

function Platform() {
  return (
    <>
      <div className="bg-hero">
        <Section className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
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
            src="/images/platform/integrated-system.webp"
            title="Cavinova console and handpiece concept"
            caption="Proposed integrated Cavinova system. Conceptual design, not a commercial product."
          />
        </Section>
      </div>

      <div id="integrated-system" className="scroll-mt-24">
        <Section>
          <Heading
            eyebrow="Integrated by design"
            title="Separated for stability. Delivered at the moment of treatment."
          >
            <p>
              The proposed system would keep two premeasured, single-use components separate:
              acoustically responsive microbubbles and selected active ingredients.
            </p>
            <p>
              The pink microbubble and teal active-ingredient pathways are intended to stay isolated
              until dispensing at the specialized ultrasound tip. The goal is to preserve
              formulation integrity and coordinate delivery with ultrasound. The mechanism and
              benefits still need engineering and testing.
            </p>
          </Heading>
          <div className="mt-7">
            <Diagram
              enlarge
              conceptLabel={false}
              src="/images/platform/transducer-tip.webp"
              title="Conceptual transducer tip with separate microbubble and active-ingredient pathways"
              caption="Conceptual product illustration. Final engineering design subject to validation."
            />
          </div>
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
            <h3 className="text-2xl">Initial format · Premeasured, single-use packets</h3>
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
            <h3 className="text-2xl">Future format · Two authenticated, single-use vials</h3>
            <p className="leading-relaxed text-muted-foreground">
              Two separate, premeasured, single-use vials would connect to the proposed handpiece
              for controlled dispensing at the transducer tip. One holds the microbubble component
              and the other holds selected active ingredients.
            </p>
            <Diagram
              enlarge
              conceptLabel={false}
              src="/images/platform/dual-vials.webp"
              title="Two separate click-in vials beside the Cavinova handpiece concept"
              caption="Packaging concept · future single-use machine vials. The connection design still needs engineering and testing."
            />
            <details className="rounded-2xl border bg-card p-4">
              <summary className="flex min-h-11 cursor-pointer items-center font-semibold underline decoration-primary underline-offset-4">
                See how the two vials would connect
              </summary>
              <div className="mt-3">
                <VialSchematic />
              </div>
            </details>
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
