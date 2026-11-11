import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Droplets, Hand, SlidersHorizontal } from "lucide-react";
import { Diagram, Eyebrow, Section, seo } from "@/components/site";
import { Button } from "@/components/ui/button";
import { Cite, References } from "@/components/references";

export const Route = createFileRoute("/platform")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Product Concept — Cavinova",
      "Explore Cavinova’s proposed cosmetic facial system, reusable treatment cups, serum lineup, and preset controls.",
    ),
  component: Platform,
});

const images = "/images/platform";
const featuredSerums = [
  {
    name: "Hydrate & Glow",
    image: "hydrate-and-glow.png",
    alt: "Concept photo of a teal Hydrate & Glow serum bottle.",
    description:
      "A moisture-focused facial for skin that looks dry or dull. The formula is designed for a fresh, dewy finish.",
  },
  {
    name: "Smooth & Firm",
    image: "smooth-and-firm.png",
    alt: "Concept photo of a rose Smooth & Firm serum bottle.",
    description:
      "A smoothing facial for clients focused on the look of fine lines and a more supple, firm-looking finish.",
  },
] as const;

const facials = ["Hydrate & Glow", "Smooth & Firm", "Brighten & Even Tone"] as const;
const sessions = [
  { label: "30-minute facial", cup: "Small reusable cup" },
  { label: "60-minute facial", cup: "Large reusable cup" },
] as const;

const steps = [
  {
    title: "Prepare the cup",
    description:
      "Fill the marked cup to the measured line, add a microbubble dose, and mix before fitting the cup to the handpiece.",
    icon: Droplets,
  },
  {
    title: "Select the facial and time",
    description:
      "Choose the facial and session length. The software is designed to load the corresponding ultrasound preset.",
    icon: SlidersHorizontal,
  },
  {
    title: "Perform the facial",
    description:
      "Use the handpiece to apply the prepared serum at the skin surface. Clean the reusable cup and contact surfaces between appointments.",
    icon: Hand,
  },
] as const;

function PresetPreview() {
  const [facial, setFacial] = useState<(typeof facials)[number]>(facials[0]);
  const [session, setSession] = useState<(typeof sessions)[number]>(sessions[0]);

  return (
    <div className="rounded-3xl border bg-card p-5 shadow-soft sm:p-7">
      <h3 className="text-2xl">Preview the controls</h3>
      <fieldset className="mt-5">
        <legend className="font-semibold">Facial</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {facials.map((name) => (
            <Button
              key={name}
              type="button"
              variant={facial === name ? "default" : "outline"}
              aria-pressed={facial === name}
              onClick={() => setFacial(name)}
            >
              {name}
            </Button>
          ))}
        </div>
      </fieldset>
      <fieldset className="mt-5">
        <legend className="font-semibold">Session length</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {sessions.map((choice) => (
            <Button
              key={choice.label}
              type="button"
              variant={session === choice ? "default" : "outline"}
              aria-pressed={session === choice}
              onClick={() => setSession(choice)}
            >
              {choice.label}
            </Button>
          ))}
        </div>
      </fieldset>
      <div className="mt-6 rounded-2xl border bg-secondary/50 p-4" aria-live="polite">
        <p className="font-semibold">
          {facial} · {session.label}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {session.cup} · Matching ultrasound preset
        </p>
      </div>
    </div>
  );
}

function Platform() {
  return (
    <>
      <div className="bg-hero">
        <Section className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <Eyebrow>Professional cosmetic skincare</Eyebrow>
            <h1 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl xl:text-6xl">
              An ultrasound facial built for the treatment room
            </h1>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Cavinova pairs a handheld applicator with a microbubble serum prepared in a marked,
              reusable cup. Estheticians choose the facial and session length, and the software
              loads the preset designed for that combination.
            </p>
            <Button asChild className="mt-6 min-h-11 rounded-full text-base">
              <a href="#facial-serums">
                Explore the serum lineup <ArrowRight aria-hidden />
              </a>
            </Button>
          </div>
          <Diagram
            enlarge
            conceptLabel={false}
            src={`${images}/reusable-cup-system.png`}
            title="Cavinova console, handpiece and two reusable mixing cups"
            caption="Concept rendering of the Cavinova facial system with small and large reusable cups."
          />
        </Section>
      </div>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <Eyebrow>The esthetician’s workflow</Eyebrow>
            <h2 className="mt-3 text-balance text-4xl leading-tight sm:text-5xl">
              Choose the facial. Set the time.
            </h2>
            <ol className="mt-7 space-y-5">
              {steps.map(({ title, description, icon: Icon }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full border bg-secondary text-teal-deep">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-xl">{title}</h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <PresetPreview />
        </div>
      </Section>

      <div id="facial-serums" className="scroll-mt-24 bg-secondary/35">
        <Section>
          <Eyebrow>Planned launch serums</Eyebrow>
          <h2 className="mt-3 text-balance text-4xl leading-tight sm:text-5xl">
            Give clients a facial that fits their skin goals.
          </h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            The starter package is planned to include trial sizes of the launch formulas. Spas can
            then replenish their most-used serums in full-size bottles and order the microbubble
            doses separately.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {featuredSerums.map((serum) => (
              <article key={serum.name} className="overflow-hidden rounded-3xl border bg-card">
                <img
                  src={`${images}/${serum.image}`}
                  alt={serum.alt}
                  width={960}
                  height={960}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl">{serum.name}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{serum.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-card p-5">
              <h3 className="text-xl">Brighten &amp; Even Tone</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Also planned for launch, with a focus on the appearance of uneven tone and dark
                spots.
              </p>
            </div>
            <div className="rounded-2xl border bg-card p-5">
              <h3 className="text-xl">Planned additions</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Texture &amp; Polish will focus on the look of uneven texture. Signature Radiance
                will offer an all-over glow facial.
              </p>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <h2 className="text-balance text-4xl leading-tight sm:text-5xl">
          Bring a new facial to the spa menu.
        </h2>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          Cavinova is developing the handpiece, serum preparation, and presets together so spas can
          offer a consistent experience across the menu.
        </p>
        <Button asChild className="mt-6 min-h-11 rounded-full text-base">
          <Link to="/opportunity">
            Explore the opportunity <ArrowRight aria-hidden />
          </Link>
        </Button>
        <p className="mt-6 text-sm text-muted-foreground">
          John H. Shadduck’s published application US20250073439A1 informed aspects of the concept.
          <Cite ids={["D"]} /> Cavinova has yet to secure rights to the application.
        </p>
      </Section>
      <References ids={["D"]} />
    </>
  );
}
