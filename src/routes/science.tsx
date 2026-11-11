import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
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

const validationQuestions = [
  "Keep microbubbles stable and functional through storage and use.",
  "Confirm compatibility with the proposed ultrasound device.",
  "Demonstrate repeatable delivery of selected ingredients.",
  "Identify suitable treatment settings and assess preliminary safety.",
  "Confirm the workflow is practical for professionals.",
];

const development = [
  {
    title: "Formulate",
    description:
      "Develop cosmetic serum formulations for hydration, the look of fine lines, and the appearance of uneven tone.",
  },
  {
    title: "Prototype",
    description:
      "Build an initial ultrasound device designed to work with the formulations as part of one system.",
  },
  {
    title: "Validate",
    description:
      "Evaluate how the serum and handpiece work together, check repeatability, and use the results to refine the facial presets.",
  },
] as const;

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
              How Ultrasound and Microbubbles Work Together
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
          <h2 className="text-balance text-4xl leading-tight sm:text-5xl">
            From Research to Reality
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Published research supports the potential of ultrasound and microbubbles to increase
            skin permeability and improve ingredient transport.
            <Cite ids={["B", "C", "P"]} /> Cavinova's challenge is turning that research into a
            consistent, safe, and practical professional treatment.
          </p>
          <div className="mt-8 grid divide-y overflow-hidden rounded-3xl border bg-card lg:grid-cols-[1.25fr_1fr] lg:divide-x lg:divide-y-0">
            <div className="space-y-4 p-5 leading-relaxed text-muted-foreground sm:p-7">
              <h3 className="text-2xl text-foreground">What Research Shows</h3>
              <p>
                Laboratory studies show that ultrasound can increase skin permeability under certain
                conditions. Microbubble activity near the surface can contribute to this effect,
                which depends on the settings, formulation, and substance being studied.
                <Cite ids={["B", "C"]} />
              </p>
              <p>
                In a Franz diffusion cell with excised pig skin, Park and colleagues measured how
                much ferulic acid crossed the sample. After 30 minutes at 2.47 MHz, ultrasound with
                a 1:1,000 dilution of Definity microbubbles delivered about 3.1 times as much ferulic
                acid as ultrasound alone.
                <Cite ids={["P"]} /> The study did not test Cavinova's system or establish how it
                performs in people.
              </p>
            </div>
            <div className="bg-secondary/30 p-5 sm:p-7">
              <h3 className="text-2xl">What Cavinova Must Prove</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-teal-deep">
                {validationQuestions.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <div className="rounded-3xl border bg-accent/45 p-5 sm:p-8 lg:p-10">
          <Eyebrow>Our development priority</Eyebrow>
          <h2 className="mt-3 text-balance text-4xl leading-tight sm:text-5xl">
            Proving the Concept.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Our first priority is to establish technical feasibility and gather measurable results
            by developing and testing the ultrasound device and formulations together.
          </p>
          <ol className="mt-6 grid gap-5 border-t pt-6 md:grid-cols-3 md:gap-7">
            {development.map(({ title, description }, index) => (
              <li key={title}>
                <Eyebrow>0{index + 1}</Eyebrow>
                <h3 className="mt-2 text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
              </li>
            ))}
          </ol>
        </div>
        <Button asChild className="mt-6 min-h-11 rounded-full text-base">
          <Link to="/platform">
            Explore the Product Concept <ArrowRight aria-hidden />
          </Link>
        </Button>
      </Section>
      <References ids={["B", "C", "P"]} />
    </>
  );
}
