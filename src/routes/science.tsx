import { createFileRoute } from "@tanstack/react-router";
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
      "Explore published research on ultrasound-assisted ingredient delivery and its potential for professional skincare.",
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

const scienceReferences = ["Topical", "Hyaluronic", "C", "Tone", "B", "P"] as const;

const findings = [
  {
    value: "1–5%",
    title: "Reported Topical Bioavailability",
    description:
      "A published review estimated that roughly 1–5% of the applied dose becomes available in the skin for most commercial dermatological formulations.",
    source: "Topical",
    accent: "bg-accent/55",
  },
  {
    value: "2.1×",
    title: "Greater Hyaluronic Acid Penetration",
    description:
      "Researchers reported about 2.1 times the penetration of labeled hyaluronic acid in rat skin using ultrasound-induced CO₂ microbubble cavitation.",
    source: "Hyaluronic",
    accent: "bg-secondary/55",
  },
  {
    value: "2×",
    title: "Vitamin C Derivative Permeation",
    description:
      "In a pigskin lab study, about twice as much of a vitamin C derivative passed through the skin after 24 hours with ultrasound and microbubbles compared with topical application alone.",
    source: "C",
    accent: "bg-muted/50",
  },
] as const;

const research = [
  {
    title: "Enhanced Skin Permeability",
    description:
      "Ultrasound-generated mechanical effects can temporarily alter the skin’s outer barrier, creating pathways for improved topical ingredient transport.",
    sources: ["Topical", "Hyaluronic"],
  },
  {
    title: "Improved Ingredient Delivery",
    description:
      "Experimental studies have demonstrated increased penetration of selected compounds, including hyaluronic acid and vitamin C derivatives, under specific ultrasound and microbubble conditions.",
    sources: ["Hyaluronic", "C"],
  },
  {
    title: "Visible Cosmetic Applications",
    description:
      "A clinical study found greater improvement in facial hyperpigmentation with ultrasound and a topical gel containing niacinamide and a vitamin C derivative than with the gel alone.",
    sources: ["Tone"],
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
              The Science of Better Delivery
            </h1>
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Skincare ingredients have come a long way. But getting them into the skin remains
                one of formulation science’s biggest challenges.
              </p>
              <p>
                Research has shown that many conventional topical formulations deliver only a small
                fraction of their applied ingredients into the skin.
                <Cite ids={["Topical"]} order={scienceReferences} />
              </p>
              <p>
                Cavinova builds on a growing body of scientific research demonstrating how
                ultrasound and acoustically responsive microbubbles can enhance skin permeability
                and improve the delivery of selected active ingredients.
                <Cite ids={["Hyaluronic", "C"]} order={scienceReferences} />
              </p>
            </div>
            <Button asChild className="mt-6 min-h-11 rounded-full text-base">
              <a href="#research-at-a-glance">
                Explore the Science <ArrowRight aria-hidden />
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

      <div id="research-at-a-glance" className="scroll-mt-24">
        <Section>
          <Eyebrow>The Research at a Glance</Eyebrow>
          <h2 className="mt-3 text-balance text-4xl leading-tight sm:text-5xl">
            The numbers behind better delivery.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {findings.map(({ value, title, description, source, accent }) => (
              <article
                key={title}
                className={`rounded-3xl border p-5 shadow-soft sm:p-7 ${accent}`}
              >
                <p className="font-serif text-5xl leading-none text-teal-deep sm:text-6xl">
                  {value}
                </p>
                <h3 className="mt-4 text-2xl">{title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {description}
                  <Cite ids={[source]} order={scienceReferences} />
                </p>
              </article>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-sm italic leading-relaxed text-muted-foreground">
            These figures come from independent published studies that used different formulations
            and experimental conditions. The studies did not test the Cavinova system.
          </p>
        </Section>
      </div>

      <div id="mechanism" className="scroll-mt-24">
        <Section>
          <Eyebrow>Interactive mechanism</Eyebrow>
          <h2 className="mt-3 text-balance text-4xl leading-tight sm:text-5xl">How it works.</h2>
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
                  {step > 0 && (
                    <Cite ids={step < 3 ? ["B", "P"] : ["C", "P"]} order={scienceReferences} />
                  )}
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
            What the Research Shows
          </h2>
          <p className="mt-4 text-xl font-medium">
            Decades of research. A new opportunity for professional skincare.
          </p>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Ultrasound-assisted delivery has been studied across a range of topical formulations and
            active ingredients. Research demonstrates how acoustic energy, particularly when
            combined with microbubbles, can enhance skin permeability and support the movement of
            selected ingredients into the skin.
          </p>
          <div className="mt-8 grid divide-y overflow-hidden rounded-3xl border bg-card md:grid-cols-3 md:divide-x md:divide-y-0">
            {research.map(({ title, description, sources }) => (
              <article key={title} className="p-5 sm:p-7">
                <h3 className="text-2xl">
                  {title}
                  <Cite ids={sources} order={scienceReferences} />
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </Section>
      </div>
      <References ids={scienceReferences} order={scienceReferences} />
    </>
  );
}
