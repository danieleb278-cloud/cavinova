import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, Hand, Waves } from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
import { Button } from "@/components/ui/button";
import { ImageLightbox } from "@/components/image-lightbox";
import { Cite, References, ReferencesLink } from "@/components/references";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Cavinova — Advanced Acoustic Aesthetics",
      "Cavinova is exploring how ultrasound and acoustically responsive microbubbles could help deliver selected skincare ingredients.",
    ),
  component: Home,
});

const images = "/images/home";
const button =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition";
const textLink =
  "inline-flex min-h-11 items-center gap-2 font-semibold text-foreground underline decoration-primary underline-offset-4";

const mobileInnovation = [
  {
    title: "Acoustically Responsive Serum",
    description:
      "A proposed serum with selected active ingredients and tiny bubbles designed to respond to sound.",
  },
  {
    title: "Controlled Ultrasound",
    description: "Ultrasound would be used to set the microbubbles in motion at the skin surface.",
  },
  {
    title: "The Proposed Interaction",
    description:
      "Under suitable ultrasound conditions, microbubble activity may temporarily make the skin more permeable, potentially helping selected ingredients pass through.",
  },
];

const comparison = [
  {
    title: "Topical Application",
    file: "skin-barrier.webp",
    alt: "Illustration of topical ingredients resting mostly on the outer layer of the skin.",
    caption: "The stratum corneum limits the passage of many topical ingredients.",
  },
  {
    title: "The Delivery Opportunity",
    file: "delivery-opportunity.webp",
    alt: "Concept illustration of ultrasound waves above skin and selected ingredients moving through the outer layer.",
    caption:
      "Ultrasound-assisted approaches are being investigated for temporarily increasing skin permeability.",
  },
];

const possibilities = [
  {
    title: "More targeted treatment possibilities",
    icon: Droplets,
    tone: "border-rose/40 bg-accent",
    description:
      "Exploring formulations with selected ingredients for different professional skincare applications.",
  },
  {
    title: "A needle-free concept",
    icon: Waves,
    tone: "border-teal/50 bg-secondary/65",
    description:
      "Investigating an ultrasound-assisted method that does not rely on needles or intentionally creating wounds in the skin.",
  },
  {
    title: "A possible addition to professional services",
    icon: Hand,
    tone: "border-border bg-card",
    description:
      "Evaluating whether the technology could become a practical and commercially attractive service for aesthetic providers.",
  },
];

const destinations = [
  {
    to: "/science",
    title: "Explore the Science",
    description: "Understand ultrasound, microbubbles, and the proposed delivery mechanism.",
  },
  {
    to: "/platform",
    title: "Discover the Product Concept",
    description: "See how the technology could translate into a professional treatment.",
  },
  {
    to: "/opportunity",
    title: "Understand the Opportunity",
    description: "Explore Cavinova's proposed development and commercialization strategy.",
  },
] as const;

function Home() {
  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-20">
          <div className="min-w-0">
            <Eyebrow>Cavinova | Advanced Acoustic Aesthetics</Eyebrow>
            <h1 className="mt-5 max-w-xl text-balance text-4xl leading-[1.08] sm:text-5xl xl:text-6xl">
              Skincare Has a Delivery Problem.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Cavinova combines ultrasound with acoustically responsive microbubbles in a noninvasive treatment concept designed to improve the delivery of active skincare ingredients through the skin barrier.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/science"
                className={`${button} bg-primary text-primary-foreground hover:opacity-90`}
              >
                Discover the science <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <a href="#innovation" className={`${button} border bg-card hover:border-primary`}>
                Explore Cavinova
              </a>
            </div>
          </div>
          <img
            src={`${images}/acoustic-waves.webp`}
            alt="Concept illustration of teal acoustic waves interacting with pink microbubbles at the skin surface."
            width={1672}
            height={941}
            fetchPriority="high"
            className="h-auto w-full rounded-3xl border shadow-soft"
          />
        </div>
      </section>

      <Section>
        <Eyebrow>The delivery challenge</Eyebrow>
        <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:gap-12">
          <h2 className="text-balance text-4xl leading-tight sm:text-5xl">
            The skin protects us. That protection also creates a delivery challenge.
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              The stratum corneum is the skin's outermost layer. It helps keep harmful substances
              out and limits how readily many topical ingredients pass through.
              <Cite ids={["A"]} />
            </p>
            <p>
              The challenge is delivering selected ingredients while respecting the skin's
              protective function.
            </p>
          </div>
        </div>
        <div className="mt-9 grid gap-6 md:grid-cols-2">
          {comparison.map(({ title, file, alt, caption }) => (
            <figure key={file} className="min-w-0 overflow-hidden rounded-3xl border bg-card">
              <img
                src={`${images}/${file}`}
                alt={alt}
                width={1448}
                height={1086}
                loading="lazy"
                className="block h-auto w-full"
              />
              <figcaption className="border-t p-5 sm:p-6">
                <h3 className="text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {caption}
                  <Cite ids={file === "skin-barrier.webp" ? ["A"] : ["G"]} />
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-9 border-l-2 border-primary pl-5 font-serif text-2xl leading-snug sm:text-3xl">
          The opportunity isn't simply developing another active ingredient. It's investigating a
          different way to deliver it.
        </p>
      </Section>

      <div id="innovation" className="scroll-mt-24 bg-secondary/40">
        <Section>
          <Eyebrow>The innovation</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
            Two technologies. One proposed delivery system.
          </h2>
          <figure className="mt-8 hidden overflow-hidden rounded-3xl border bg-card shadow-soft md:block">
            <ImageLightbox
              src={`${images}/cavinova-approach.webp`}
              title="Cavinova concept showing a microbubble serum, controlled ultrasound, and their proposed interaction at the skin surface"
            />
          </figure>
          <div className="mt-6 md:hidden">
            <figure className="overflow-hidden rounded-2xl border bg-card">
              {/* Frame the illustration between the embedded labels in the original artwork. */}
              <div className="relative aspect-[1100/365] overflow-hidden">
                <img
                  src={`${images}/cavinova-approach.webp`}
                  alt="Concept illustration of microbubbles and ultrasound at the skin surface, with arrows showing the proposed movement of ingredients."
                  width={1672}
                  height={941}
                  loading="lazy"
                  className="absolute left-[-26%] top-[-114%] h-auto w-[152%] max-w-none"
                />
              </div>
            </figure>
            <dl className="mt-5 divide-y divide-border">
              {mobileInnovation.map(({ title, description }) => (
                <div key={title} className="py-4">
                  <dt className="font-serif text-xl font-semibold leading-snug">{title}</dt>
                  <dd className="mt-2 leading-relaxed text-muted-foreground">{description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Published lab studies inform this conceptual illustration.
              <Cite ids={["C", "P"]} /> Cavinova's formulation and proposed system still need
              testing.
            </p>
          </div>
          <Link to="/science" className={`mt-6 ${textLink}`}>
            See how the science works <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <ReferencesLink />
        </Section>
      </div>

      <Section>
        <Eyebrow>Professional potential</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-tight sm:text-5xl">
          What could this mean for professional skincare?
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          If validated, the approach could give skincare professionals more options for delivering
          selected ingredients.
        </p>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {possibilities.map(({ title, description, icon: Icon, tone }) => (
            <article key={title} className={`rounded-3xl border p-6 ${tone}`}>
              <span className="inline-grid size-11 place-items-center rounded-xl border bg-card text-foreground">
                <Icon aria-hidden className="size-5" />
              </span>
              <h3 className="mt-4 text-balance text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="bg-accent/55">
        <Section>
          <Eyebrow>Our development approach</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
            Prototype and test the complete system.
          </h2>
          <div className="mt-5 max-w-3xl space-y-3 leading-relaxed text-muted-foreground">
            <p>
              Our first step is to build an ultrasound device prototype alongside two experimental
              serum formulations. We’ll compare serum alone, serum with ultrasound, serum with
              microbubbles, and the full combination of serum, ultrasound, and microbubbles.
            </p>
            <p>
              The results will help us decide whether the full system warrants further investment.
            </p>
          </div>
          <Link to="/opportunity" className={`mt-6 ${textLink}`}>
            Explore the Opportunity <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
          </Link>
        </Section>
      </div>

      <Section>
        <Eyebrow>Explore Cavinova</Eyebrow>
        <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">
          A different approach to what skincare can deliver.
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {destinations.map(({ to, title, description }) => (
            <Link
              key={to}
              to={to}
              className="group rounded-2xl border bg-card p-5 transition hover:border-primary sm:p-6"
            >
              <h3 className="flex items-start justify-between gap-2 text-2xl">
                {title}{" "}
                <ArrowRight
                  aria-hidden
                  className="mt-1 h-5 w-5 shrink-0 text-primary motion-safe:transition group-hover:translate-x-1"
                />
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-3xl bg-secondary/65 p-6 sm:p-8">
          <div className="max-w-xl">
            <h3 className="text-2xl">Help shape what we test next.</h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Tell us what you’d want to see from testing the ultrasound device and formulations
              together, or what would make the complete system practical in your treatment room.
            </p>
          </div>
          <Link
            to="/contact"
            className={`${button} border bg-card text-foreground hover:border-primary`}
          >
            Contact the Cavinova team <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </Section>

      <div id="homepage-references" className="scroll-mt-24 [&_ul]:space-y-3 [&_ul]:text-base">
        <References ids={["A", "C", "P", "G"]} />
      </div>
    </>
  );
}
