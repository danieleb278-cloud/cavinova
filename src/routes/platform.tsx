import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Droplets, Hand, SlidersHorizontal } from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
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
      "Fill the marked cup, add a microbubble dose, and mix. Click the cup into the handpiece. Both cup sizes fit the same port.",
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
      <section
        aria-labelledby="platform-title"
        className="relative isolate overflow-hidden bg-[#f5ebe4]"
      >
        <div className="mx-auto flex max-w-[92rem] flex-col lg:min-h-[27rem] lg:justify-center xl:min-h-[32rem]">
          <div className="relative z-10 px-6 pt-12 pb-8 sm:px-10 sm:pt-16 lg:w-[43%] lg:py-10 xl:px-16">
            <Eyebrow>The Cavinova Platform | Coming 2028</Eyebrow>
            <h1
              id="platform-title"
              className="mt-4 max-w-[12ch] text-4xl leading-[1.03] tracking-tight sm:text-5xl xl:text-6xl"
            >
              Advanced technology. Simple by design.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed">
              Meet the Cavinova System, a professional acoustic skincare platform designed to make
              sophisticated treatments surprisingly simple.
            </p>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              From precision-measured serum preparation to automated treatment settings and
              controlled dispensing, every detail is designed around the way skincare professionals
              actually work.
            </p>
            <Button asChild className="mt-7 min-h-11 rounded-full px-6 text-base">
              <a href="#system">
                Explore the System <ArrowRight aria-hidden />
              </a>
            </Button>
          </div>
          <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:left-[40%]">
            <img
              src={`${images}/platform-hero.webp`}
              alt="Cavinova concept system with a touchscreen base, a white handpiece, and the Hydrate & Glow, Smooth & Firm, and Brighten & Even Tone serums."
              width={1536}
              height={1024}
              fetchPriority="high"
              className="block h-auto w-full lg:h-full lg:object-cover lg:object-center"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#f5ebe4] to-transparent lg:inset-y-0 lg:right-auto lg:h-auto lg:w-[13%] lg:bg-gradient-to-r"
            />
          </div>
        </div>
      </section>

      <Section>
        <div id="system" className="grid scroll-mt-28 gap-8 lg:grid-cols-2 lg:items-start">
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
