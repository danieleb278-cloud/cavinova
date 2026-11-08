import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronDown, RotateCcw } from "lucide-react";
import { Section, Eyebrow, seo } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Cite, References } from "@/components/references";
import { ScienceMechanism } from "@/components/science-mechanism";

export const Route = createFileRoute("/science")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Science & Technology — Cavinova",
      "Explore the proposed interaction between ultrasound, microbubbles, and the skin barrier, the published evidence, and what Cavinova still needs to test.",
    ),
  component: Science,
});

const steps = [
  {
    title: "Topical Application",
    description:
      "A proposed serum containing acoustically responsive microbubbles and selected active ingredients is applied to the skin surface.",
  },
  {
    title: "Acoustic Activation",
    description:
      "Under suitable conditions, ultrasound can make responsive microbubbles oscillate.",
  },
  {
    title: "Microbubble Activity",
    description:
      "Depending on acoustic conditions, microbubble activity can produce localized mechanical effects that may influence the skin barrier.",
  },
  {
    title: "Potential Enhanced Delivery",
    description:
      "Published research suggests these mechanisms can increase skin permeability under certain conditions, potentially supporting ingredient delivery. Cavinova's specific formulation has not yet been validated.",
  },
] as const;

const evidence = [
  {
    title: "Sonophoresis",
    description:
      "Researchers have studied whether ultrasound can help substances pass through skin. Under specific experimental conditions, ultrasound increased skin permeability. The response depends on the ultrasound settings and the substance being studied.",
    sources: ["B"],
  },
  {
    title: "Acoustic Cavitation",
    description:
      "Tiny gas bubbles can expand and contract in response to ultrasound. This motion can create small flows and mechanical forces near the skin surface. Researchers are studying how these effects can change how readily ingredients pass through the outer layer.",
    sources: ["B", "C"],
  },
  {
    title: "Experimental Delivery Research",
    description:
      "In a Franz diffusion cell with excised pig skin, Park and colleagues measured how much ferulic acid crossed the skin sample. After 30 minutes at 2.47 MHz, a 1:1,000 dilution of Definity microbubbles yielded about 3.1 times as much delivered ferulic acid as ultrasound alone. Cavinova’s formulation, device pairing, and performance in people still need testing.",
    sources: ["P"],
  },
] as const;

const challenges = [
  [
    "Formulation Stability",
    "Can the microbubbles remain functional during formulation, storage, and application?",
  ],
  [
    "Acoustic Compatibility",
    "Which ultrasound frequencies, intensities, and operating conditions produce the desired response?",
  ],
  [
    "Ingredient Delivery",
    "Does the combined approach meaningfully improve delivery of selected active ingredients under controlled testing conditions?",
  ],
  [
    "Safety",
    "Can the intended permeability effects be achieved without unacceptable tissue effects?",
  ],
  [
    "Reproducibility",
    "Can the formulation and treatment conditions consistently produce comparable results?",
  ],
];

function Science() {
  const [step, setStep] = useState(0);
  const active = steps[step]!;
  return (
    <>
      <div className="bg-hero">
        <Section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <Eyebrow>The science behind Cavinova</Eyebrow>
            <h1 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl xl:text-6xl">
              Unlocking the Skin Barrier
            </h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Research suggests that ultrasound activates acoustically responsive microbubbles,
                creating temporary pathways through the skin's outermost layer that may allow active
                ingredients to penetrate more deeply.
                <Cite ids={["P"]} />
              </p>
            </div>
            <Button asChild className="mt-6 min-h-11 rounded-full text-base">
              <a href="#mechanism">
                Explore the mechanism <ArrowRight aria-hidden />
              </a>
            </Button>
          </div>
          <img
            src="/images/home/acoustic-waves.webp"
            alt="Concept illustration of turquoise sound waves approaching pink microbubbles at the skin surface."
            width={1672}
            height={941}
            className="w-full rounded-3xl border shadow-soft"
          />
        </Section>
      </div>

      <div id="mechanism" className="scroll-mt-24">
        <Section>
          <Eyebrow>Interactive mechanism</Eyebrow>
          <h2 className="mt-3 text-balance text-4xl leading-tight sm:text-5xl">
            How it works.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore the proposed mechanism, one step at a time.
          </p>
          <div className="mt-8 grid gap-6 rounded-3xl border bg-secondary/35 p-4 sm:p-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
            <figure className="min-w-0 self-start overflow-hidden rounded-2xl border bg-card">
              <ScienceMechanism
                key={step}
                step={step}
                title={active.title}
                description={active.description}
              />
              <figcaption className="border-t px-4 py-3 text-sm leading-relaxed text-muted-foreground">
                Conceptual mechanism illustration based on published scientific principles. Not a
                simulation or demonstration of Cavinova-specific treatment performance.
              </figcaption>
            </figure>
            <div className="min-w-0 self-center">
              <div
                role="group"
                aria-label="Select a mechanism stage"
                className="grid grid-cols-2 gap-2"
              >
                {steps.map(({ title }, index) => (
                  <Button
                    key={title}
                    variant="outline"
                    type="button"
                    aria-pressed={step === index}
                    aria-controls="mechanism-stage"
                    onClick={() => setStep(index)}
                    className={`h-auto min-h-12 justify-start whitespace-normal px-3 py-2 text-left leading-snug ${step === index ? "border-primary bg-accent text-foreground" : ""}`}
                  >
                    <span aria-hidden className="font-semibold">
                      0{index + 1}
                    </span>
                    {title}
                  </Button>
                ))}
              </div>
              <div id="mechanism-stage" aria-live="polite" aria-atomic="true" className="my-5">
                <Eyebrow>
                  Step {step + 1} of {steps.length}
                </Eyebrow>
                <h3 className="mt-2 text-2xl sm:text-3xl">{active.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {active.description}
                  {step > 0 && <Cite ids={step < 3 ? ["B", "P"] : ["C", "P"]} />}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  type="button"
                  className="min-h-11"
                  disabled={step === 0}
                  onClick={() => setStep(step - 1)}
                >
                  <ArrowLeft aria-hidden /> Previous
                </Button>
                <Button
                  type="button"
                  className="min-h-11"
                  disabled={step === steps.length - 1}
                  onClick={() => setStep(step + 1)}
                >
                  Next <ArrowRight aria-hidden />
                </Button>
                <Button
                  variant="ghost"
                  type="button"
                  className="min-h-11"
                  onClick={() => setStep(0)}
                >
                  <RotateCcw aria-hidden /> Restart
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <div id="lab-study" className="scroll-mt-24 bg-secondary/40">
        <Section>
          <Eyebrow>The scientific evidence</Eyebrow>
          <h2 className="mt-3 max-w-4xl text-balance text-4xl leading-tight sm:text-5xl">
            A promising mechanism, supported by published research.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Cavinova’s approach draws on published studies of ultrasound-assisted skin permeation
            and responsive microbubbles. Results depend on the formulation, acoustic settings, and
            experimental model.
            <Cite ids={["B", "C", "P"]} />
          </p>
          <div className="mt-8 max-w-4xl divide-y rounded-2xl border bg-card px-5 sm:px-7">
            {evidence.map(({ title, description, sources }) => (
              <details key={title} className="group">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-serif text-xl font-semibold [&::-webkit-details-marker]:hidden">
                  {title}
                  <ChevronDown
                    aria-hidden
                    className="size-5 shrink-0 motion-safe:transition group-open:rotate-180"
                  />
                </summary>
                <p className="mb-5 max-w-3xl leading-relaxed text-muted-foreground">
                  {description}
                  <Cite ids={sources} />
                </p>
              </details>
            ))}
          </div>
        </Section>
      </div>

      <Section>
        <Eyebrow>From principle to validation</Eyebrow>
        <h2 className="mt-3 max-w-4xl text-balance text-4xl leading-tight sm:text-5xl">
          The science is promising. The engineering questions remain.
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Cavinova must determine whether the proposed formulation and ultrasound conditions can
          produce safe, consistent, and meaningful results.
        </p>
        <ol className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {challenges.map(([title, description], index) => (
            <li key={title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t pt-5">
              <span
                aria-hidden
                className="grid size-10 place-items-center rounded-full border bg-accent text-sm font-semibold"
              >
                0{index + 1}
              </span>
              <div>
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <div className="bg-accent/55">
        <Section>
          <Eyebrow>From research to application</Eyebrow>
          <h2 className="mt-3 max-w-4xl text-balance text-4xl leading-tight sm:text-5xl">
            Understanding the mechanism is only the beginning.
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Cavinova’s next challenge is turning these principles into a formulation and routine
              that can be tested and refined for professional skincare.
            </p>
            <p>
              We’d start by measuring how the serum responds to ultrasound and whether it improves
              ingredient delivery in controlled tests. Those results would guide decisions about the
              equipment, formulation, and professional workflow.
            </p>
          </div>
          <Button asChild className="mt-6 min-h-11 rounded-full text-base">
            <Link to="/platform">
              Explore the Product Concept <ArrowRight aria-hidden />
            </Link>
          </Button>
        </Section>
      </div>
      <References ids={["B", "C", "P"]} />
    </>
  );
}
