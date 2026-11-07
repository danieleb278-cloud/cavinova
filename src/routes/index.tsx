import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
import { ImageLightbox } from "@/components/image-lightbox";
import { Cite, References } from "@/components/references";

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
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition";
const textLink = "inline-flex items-center gap-2 font-semibold text-primary hover:underline";

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
    description:
      "Exploring formulations with selected ingredients for different professional skincare applications.",
  },
  {
    title: "A non-invasive treatment approach",
    description:
      "Investigating an ultrasound-assisted method that does not rely on needles or intentionally creating wounds in the skin.",
  },
  {
    title: "A possible addition to professional services",
    description:
      "Evaluating whether the technology could become a practical and commercially attractive service for aesthetic providers.",
  },
];

const stages = [
  {
    title: "Validate the serum",
    description:
      "Investigate formulation stability, acoustic response, safety, and ingredient delivery.",
  },
  {
    title: "Understand professional demand",
    description: "Evaluate provider interest, treatment workflow, and commercial practicality.",
  },
  {
    title: "Select the right platform",
    description:
      "Determine whether compatibility, partnership, or dedicated equipment offers the strongest path forward.",
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
            <h1 className="mt-5 max-w-xl text-4xl leading-[1.08] sm:text-5xl xl:text-6xl">
              Skincare has evolved. But getting ingredients into skin remains a challenge.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Most skincare innovation focuses on the ingredients themselves. Cavinova is exploring
              something different: how ultrasound and acoustically responsive microbubbles could
              help those ingredients move beyond the skin's outer barrier.
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
          <h2 className="text-4xl leading-tight sm:text-5xl">
            The skin protects us. That protection also creates a delivery challenge.
          </h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              The skin's outermost layer, the stratum corneum, serves as an essential protective
              barrier. While that barrier helps keep harmful substances out, it also limits how
              readily many topical ingredients can pass through.
              <Cite ids={["A"]} />
            </p>
            <p>
              The challenge isn't simply creating better ingredients. It's understanding how to
              deliver selected ingredients where they're needed, while respecting the skin's
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
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {caption}
                  {file === "delivery-opportunity.webp" && <Cite ids={["A", "C"]} />}
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
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Two technologies. One proposed delivery system.
          </h2>
          <figure className="mt-8 overflow-hidden rounded-3xl border bg-card shadow-soft">
            <ImageLightbox
              src={`${images}/cavinova-approach.webp`}
              title="Cavinova concept showing a microbubble serum, controlled ultrasound, and their proposed interaction at the skin surface"
            />
          </figure>
          <div className="mt-8 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Cavinova's proposed approach brings together an acoustically responsive serum and
              ultrasound energy.
            </p>
            <p>
              The serum would contain selected active ingredients and microbubbles designed to
              respond to acoustic stimulation. When exposed to suitable ultrasound conditions,
              microbubble activity may temporarily increase skin permeability, potentially
              supporting the delivery of selected ingredients.
              <Cite ids={["C"]} />
            </p>
            <p>
              The interaction is supported by broader scientific research, but Cavinova's specific
              formulation and treatment system still require testing and validation.
            </p>
          </div>
          <Link to="/science" className={`mt-6 ${textLink}`}>
            See how the science works <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </Section>
      </div>

      <Section>
        <Eyebrow>Professional potential</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl">
          What could this mean for professional skincare?
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          If validated, Cavinova's approach could create new possibilities for professional
          treatments by combining selected skincare ingredients with a specialized delivery method.
        </p>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {possibilities.map(({ title, description }, index) => (
            <article key={title} className="border-t-2 border-teal pt-5">
              <Eyebrow>0{index + 1}</Eyebrow>
              <h3 className="mt-3 text-2xl">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="bg-accent/55">
        <Section className="grid gap-9 lg:grid-cols-[1fr_0.85fr] lg:gap-14">
          <div>
            <Eyebrow>Our development approach</Eyebrow>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
              Prove the delivery. Then decide how to scale it.
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                Cavinova's first priority is to investigate the serum's stability, acoustic
                response, safety, and ability to support ingredient delivery.
              </p>
              <p>
                Those findings will help determine whether the strongest commercial path involves
                compatible existing equipment, an established equipment partner, or eventually
                developing a dedicated Cavinova system.
              </p>
              <p>
                Rather than committing substantial resources to hardware manufacturing before the
                technology has been validated, Cavinova intends to make development decisions based
                on scientific evidence and professional market demand.
              </p>
            </div>
            <Link to="/opportunity" className={`mt-6 ${textLink}`}>
              Explore our commercialization strategy{" "}
              <ArrowRight aria-hidden className="h-4 w-4 shrink-0" />
            </Link>
          </div>
          <ol className="relative self-center space-y-7 before:absolute before:bottom-6 before:left-5 before:top-5 before:w-px before:bg-primary/35">
            {stages.map(({ title, description }, index) => (
              <li key={title} className="relative grid grid-cols-[2.5rem_1fr] gap-4">
                <span className="grid h-10 place-items-center rounded-full border border-primary/35 bg-card text-sm font-semibold text-primary">
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
      </div>

      <Section>
        <Eyebrow>Explore Cavinova</Eyebrow>
        <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
          A different approach to what skincare can deliver.
        </h2>
        <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
          Cavinova is exploring the intersection of acoustic technology, formulation science, and
          professional aesthetics. Discover the research behind the concept, see how it could become
          a treatment system, and learn about the path toward commercialization.
        </p>
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
        <p className="mt-8 text-muted-foreground">
          We welcome questions from potential collaborators, researchers, and professional partners.
        </p>
        <Link to="/contact" className={`mt-3 ${textLink}`}>
          Contact the Cavinova team <ArrowRight aria-hidden className="h-4 w-4" />
        </Link>
      </Section>

      <References ids={["A", "C"]} />
    </>
  );
}
