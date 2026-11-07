import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  FlaskConical,
  Droplets,
  LockKeyhole,
  ShieldCheck,
  SlidersHorizontal,
  Hand,
  CircleCheck,
} from "lucide-react";
import { Diagram, Eyebrow, Section, seo } from "@/components/site";
import { Button } from "@/components/ui/button";
import { References } from "@/components/references";
import { AuthenticationMachine } from "@/components/authentication-machine";

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
          <AuthenticationMachine />
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="The serum technology"
          title="One technology. Two approaches to professional application."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="grid min-w-0 gap-4 rounded-3xl border border-rose/50 bg-accent/45 p-5 sm:p-6 md:row-span-4 md:grid-rows-subgrid">
            <div>
              <Eyebrow>Initial development format</Eyebrow>
              <h3 className="mt-2 text-balance text-2xl">Manually Applied Formulation</h3>
            </div>
            <div className="space-y-3 leading-relaxed text-muted-foreground">
              <p>
                A professional would manually apply a premeasured, single-use formulation before
                treatment with suitable existing ultrasound equipment, once compatibility and safety
                are established.
              </p>
              <p>
                This enables early formulation development and evaluation without requiring a
                proprietary Cavinova machine. The final packaging configuration remains under
                consideration.
              </p>
            </div>
            <div className="grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl border bg-card">
              <div className="relative aspect-square w-5/8 overflow-hidden">
                <img
                  src={serumPackaging.url}
                  alt="Illustrative dual-chamber packet, one packaging concept for the manually applied formulation."
                  width={1774}
                  height={887}
                  loading="lazy"
                  className="absolute left-[-81%] top-[-2%] h-auto w-[209%] max-w-none"
                />
              </div>
            </div>
            <p className="text-sm font-semibold">
              Illustrative packaging concept · Final format under consideration
            </p>
          </article>
          <article className="grid min-w-0 gap-4 rounded-3xl border border-teal/55 bg-secondary/45 p-5 sm:p-6 md:row-span-4 md:grid-rows-subgrid">
            <div>
              <Eyebrow>Future integrated format</Eyebrow>
              <h3 className="mt-2 text-balance text-2xl">Intelligent, Automated Delivery</h3>
            </div>
            <div className="space-y-3 leading-relaxed text-muted-foreground">
              <p>
                Cavinova's proposed integrated system would use two separate, premeasured,
                single-use vials for the microbubble and active-ingredient components.
              </p>
              <p>
                The machine would authenticate the vials, load validated treatment settings, and
                automatically dispense the components through the specialized transducer tip. The
                components would stay isolated until the point of use.
              </p>
            </div>
            <div className="grid aspect-[16/10] place-items-center overflow-hidden rounded-2xl border bg-card">
              <div className="relative aspect-square w-5/8 overflow-hidden">
                <img
                  src="/images/platform/dual-vials.webp"
                  alt="Two separate concept vials with pink and teal caps for the future integrated system."
                  width={1448}
                  height={1086}
                  loading="lazy"
                  className="absolute left-[-24%] top-[-86%] h-auto w-[341%] max-w-none"
                />
              </div>
            </div>
            <p className="text-sm font-semibold">Proposed integrated-machine consumables</p>
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
