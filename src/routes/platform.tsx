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

const productStages = [
  {
    label: "Stage 1 · Initial Serum Concept",
    title: "Activated by the provider. Applied manually.",
    tone: "border-rose/50 bg-accent/45",
    image: "/images/platform/activation-vial.webp",
    alt: "Exploratory twist-to-activate vial shown before and after the two chambers combine.",
    caption: "Exploratory initial packaging concept. Not a finalized product design.",
    paragraphs: [
      "Cavinova's proposed initial product is a premeasured, single-use formulation intended for professional manual application.",
      "One packaging concept under consideration is a dual-chamber activation vial that keeps microbubbles and active ingredients separate until preparation. The provider would activate the vial, prepare the formulation, and apply it before treatment with suitable ultrasound equipment once compatibility and safety are established.",
      "The packaging design and preparation process must be validated for microbubble stability, ingredient compatibility, and treatment performance.",
    ],
  },
  {
    label: "Stage 2 · Future Integrated Platform",
    title: "Authenticated by the machine. Dispensed automatically.",
    tone: "border-teal/55 bg-secondary/45",
    image: "/images/platform/dual-vials.webp",
    alt: "Two separate pink and teal single-use vials beside the proposed Cavinova handpiece.",
    caption: "Long-term integrated system concept. Engineering and validation required.",
    paragraphs: [
      "With sufficient validation, funding, and professional demand, Cavinova aims to develop an integrated ultrasound treatment platform.",
      "The proposed system uses two separate, premeasured, single-use vials that authenticate with the machine. The microbubble and active-ingredient components remain isolated through separate pathways until dispensing at the specialized transducer tip.",
      "The system is intended to coordinate formulation delivery, validated treatment settings, and proposed safety controls within one professional workflow.",
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
            title="Separate until dispensing. Designed to support stability."
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
        <Heading eyebrow="The serum technology" title="The innovation begins with the formulation.">
          <p>
            Cavinova's initial development priority is an acoustically responsive formulation
            designed for professional skincare applications. The team is investigating how
            microbubbles and selected active ingredients can be maintained, prepared, and applied
            under conditions that support the proposed ultrasound-assisted delivery mechanism.
          </p>
          <p>
            Early development will focus on formulation stability, ingredient compatibility,
            packaging feasibility, acoustic response, and safety.
          </p>
        </Heading>

        <div className="mt-10 border-t pt-8 sm:mt-14 sm:pt-10">
          <Eyebrow>Product Evolution</Eyebrow>
          <h3 className="mt-3 text-balance text-3xl leading-tight sm:text-4xl">
            One innovation. Two stages of development.
          </h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Cavinova begins with a manually applied formulation and aims to evolve toward a fully
            integrated professional treatment system, subject to scientific validation, funding, and
            commercial demand.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {productStages.map(({ label, title, tone, image, alt, caption, paragraphs }) => (
              <article
                key={label}
                className={`grid min-w-0 gap-4 rounded-3xl border p-5 sm:p-6 md:row-span-4 md:grid-rows-subgrid ${tone}`}
              >
                <div>
                  <Eyebrow>{label}</Eyebrow>
                  <h4 className="mt-2 text-balance text-2xl">{title}</h4>
                </div>
                <div className="overflow-hidden rounded-2xl border bg-card">
                  <img
                    src={image}
                    alt={alt}
                    width={1448}
                    height={1086}
                    loading="lazy"
                    className="block aspect-[4/3] w-full object-contain"
                  />
                </div>
                <p className="text-sm font-semibold">{caption}</p>
                <div className="space-y-3 leading-relaxed text-muted-foreground">
                  {paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7 rounded-2xl border bg-secondary/35 p-5 sm:p-6">
            <h4 className="text-balance text-2xl">
              The science stays central. The level of integration evolves.
            </h4>
            <p className="mt-2 max-w-3xl leading-relaxed text-muted-foreground">
              Both approaches are built around premeasured, single-use formulation components and
              the proposed interaction between acoustic energy and microbubbles. The initial format
              allows the formulation to be developed independently of proprietary equipment, while
              the future integrated system could automate more of the treatment experience.
            </p>
          </div>
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
