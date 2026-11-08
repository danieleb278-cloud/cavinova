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
import { Cite, References } from "@/components/references";
import { AuthenticationMachine } from "@/components/authentication-machine";

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

const treatmentSteps = [
  {
    title: "Insert",
    lead: "Click in the single-use vials.",
    body: "Premeasured consumables are designed to simplify setup and support clean, consistent preparation.",
    icon: FlaskConical,
  },
  {
    title: "Configure",
    lead: "The system recognizes the treatment.",
    body: "Compatible consumables could prompt the system to load the appropriate settings and help reduce manual setup errors.",
    icon: SlidersHorizontal,
  },
  {
    title: "Treat",
    lead: "Deliver the treatment through one coordinated workflow.",
    body: "The handpiece is designed to dispense the formulation as ultrasound is applied. Proposed controls are intended to support safer, more consistent operation.",
    icon: Hand,
  },
] as const;

const clinicAdvantages = [
  ["Premeasured dosing", "Helps support consistent treatment quantities."],
  ["Less preparation time", "Could streamline setup by reducing manual preparation steps."],
  ["Reduced product waste", "Single-use portions may help minimize unused serum."],
  ["Automatic configuration", "Intended to reduce manual adjustments and setup errors."],
  ["Authentication controls", "Designed to recognize compatible vials and block unrecognized consumables."],
  ["Safety features", "Proposed lockouts and shutoff controls are intended to support safer operation."],
  ["Turnkey workflow", "A coordinated system could simplify staff training and daily use."],
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
  const feature = features[selected]!;
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
              More Than a Serum
            </h1>
            <div className="mt-5 space-y-3 leading-relaxed text-muted-foreground">
              <p>
                Cavinova's integrated treatment system is designed to simplify professional application, enhance active ingredient delivery, and support consistent treatment performance.
              </p>
              <p>
                Premeasured, single-use formulations, automated dispensing, consumable
                authentication, and integrated controls could make the process easier to learn and
                repeat.
              </p>
              <p>
                .
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
            title="Separated for Stability"
          >
            <p>
              Cavinova's proposed dual-vial system keeps the microbubble formulation and active ingredients separate until dispensing. The design aims to protect formulation stability while supporting hygienic, premeasured treatments.
            </p>
            <p>
              {'\u00a0'}The goal is to preserve formulation integrity and coordinate delivery with ultrasound. The mechanism and benefits still need engineering and testing.
            </p>
          </Heading>
          <div className="mt-7">
            <Diagram
              enlarge
              conceptLabel={false}
              src="/images/platform/transducer-tip.webp"
              title="Conceptual transducer tip with separate microbubble and active-ingredient pathways"
              caption="Concept illustration. The depicted fluid routing, mixing, dispensing accuracy, and ultrasound settings still need engineering and validation."
            />
          </div>
          <FeatureExplorer />
        </Section>
      </div>

      <div className="bg-secondary/35">
        <Section>
          <Heading
            eyebrow="Intelligent treatment control"
            title="Recognized. Authorized. Ready."
          >
            <p>
              
              
              
              The proposed system uses RFID technology to identify compatible vials, configure treatment settings, and prevent activation when a vial is unrecognized.
            </p>
          </Heading>
          <AuthenticationMachine />
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="The treatment experience"
          title="A Simpler Process. A Smarter Treatment Workflow."
        >
          <p>
            Cavinova is designed to bring formulation preparation, treatment setup, and ultrasound
            application into one coordinated professional system.
          </p>
        </Heading>

        <div className="mt-8 grid items-start gap-7 lg:grid-cols-2 lg:gap-10">
          <ol aria-label="Proposed treatment workflow" className="relative space-y-6 before:absolute before:bottom-8 before:left-6 before:top-8 before:w-px before:bg-teal/45">
            {treatmentSteps.map(({ title, lead, body, icon: Icon }, index) => (
              <li key={title} className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-4">
                <div className="grid size-12 place-items-center rounded-full border bg-secondary text-teal-deep">
                  <Icon aria-hidden className="size-6" />
                </div>
                <div className="pb-1">
                  <Eyebrow>0{index + 1}</Eyebrow>
                  <h3 className="mt-1 text-2xl">{title}</h3>
                  <p className="mt-2 font-semibold">{lead}</p>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ol>

          <aside aria-labelledby="clinic-advantages" className="rounded-3xl border bg-secondary/45 p-5 shadow-soft sm:p-7">
            <h3 id="clinic-advantages" className="text-3xl">Clinic Advantages</h3>
            <dl className="mt-3 divide-y">
              {clinicAdvantages.map(([title, body]) => (
                <div key={title} className="py-2.5">
                  <dt className="font-semibold">{title}</dt>
                  <dd className="mt-0.5 leading-relaxed text-muted-foreground">{body}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

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
          John H. Shadduck’s published application US20250073439A1 informed aspects of the concept.
          <Cite ids={["D"]} /> Cavinova has yet to secure rights to it or validate a working system.
        </p>
      </Section>
      <References ids={["D"]} />
    </>
  );
}
