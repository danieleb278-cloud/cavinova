import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
import { OpportunityFlow } from "@/components/opportunity-flow";
import { Button } from "@/components/ui/button";
import { Cite, References } from "@/components/references";

export const Route = createFileRoute("/opportunity")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Opportunity — Cavinova",
      "See how Cavinova plans to help spas introduce a premium ultrasound and microbubble facial with a repeatable service and refill model.",
    ),
  component: Opportunity,
});

const landscape = "/images/opportunity/treatment-landscape.webp";
const comparison = "/images/opportunity/delivery-comparison.webp";
const treatments = [
  {
    title: "Conventional topical facials",
    body: "Topical facials aim to hydrate and condition skin. The skin’s outer barrier limits how readily many ingredients pass through.",
    sources: ["A"],
    x: 22,
  },
  {
    title: "Hydrodermabrasion and serum infusion",
    body: "Systems such as Hydrafacial combine cleansing, exfoliation, extraction, and hydration, with targeted serum boosters available in select treatment tiers.",
    sources: ["H"],
    x: 405,
  },
  {
    title: "Microneedling",
    body: "Small needles intentionally puncture the skin. The procedure has specific uses, training considerations, and potential side effects.",
    sources: ["M"],
    x: 776,
  },
  {
    title: "Ultrasound-based technologies",
    body: "Some aesthetic devices use focused ultrasound to lift tissue.",
    sources: ["U"],
    x: 1150,
  },
] as const;

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

// Frame the supplied artwork without baking its small labels into the webpage.
function Artwork({
  src,
  height,
  frame,
  alt,
}: {
  src: string;
  height: number;
  frame: [number, number, number, number];
  alt: string;
}) {
  const [x, y, width, visibleHeight] = frame;
  return (
    <div
      className="relative overflow-hidden bg-card"
      style={{ aspectRatio: width / visibleHeight }}
    >
      <img
        src={src}
        width={1536}
        height={height}
        alt={alt}
        loading="lazy"
        className="absolute h-auto max-w-none"
        style={{
          width: `${153600 / width}%`,
          left: `${(-100 * x) / width}%`,
          top: `${(-100 * y) / visibleHeight}%`,
        }}
      />
    </div>
  );
}

function Opportunity() {
  return (
    <>
      <div className="bg-hero">
        <Section>
          <Eyebrow>The market opportunity</Eyebrow>
          <h1 className="mt-4 max-w-5xl text-balance text-4xl leading-tight sm:text-5xl xl:text-6xl">
            A premium facial spas can make their own.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Day spas and med spas already offer technology-enabled facials.
            <Cite ids={["F", "H"]} /> Cavinova is developing a new service for those treatment
            rooms, pairing an ultrasound handpiece with a microbubble serum. A spa can start with
            one system and replenish supplies as it serves clients.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Opportunity themes">
            {[
              "Technology differentiation",
              "Existing professional market",
              "Recurring formulations",
            ].map((theme) => (
              <li
                key={theme}
                className="rounded-full border bg-card px-4 py-2 text-sm font-semibold"
              >
                {theme}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="min-h-11 rounded-full">
              <a href="#investment-thesis">
                Explore the Business Opportunity <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button asChild variant="outline" className="min-h-11 rounded-full">
              <Link to="/contact" search={{ interest: "investment" }}>
                Discuss the Opportunity
              </Link>
            </Button>
          </div>
          <div className="mt-7 overflow-hidden rounded-3xl border shadow-soft">
            <div className="sm:hidden">
              <Artwork
                src={landscape}
                height={650}
                frame={[560, 0, 740, 240]}
                alt="A skincare professional attending to a client."
              />
            </div>
            <div className="hidden sm:block">
              <Artwork
                src={landscape}
                height={650}
                frame={[0, 0, 1536, 240]}
                alt="A skincare professional attending to a client in a contemporary treatment room."
              />
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="The current treatment landscape · What exists today?"
          title="Different treatments. Different approaches to the skin."
        />
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {treatments.map(({ title, body, sources, x }) => (
            <article key={title} className="overflow-hidden rounded-3xl border bg-card">
              <Artwork src={landscape} height={650} frame={[x, 260, 358, 154]} alt="" />
              <div className="p-5 sm:p-6">
                <h3 className="text-balance text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {body}
                  <Cite ids={sources} />
                  {x === 1150 && (
                    <>
                      {" "}
                      Sonophoresis research investigates how ultrasound can influence skin
                      permeability.
                      <Cite ids={["B"]} />
                    </>
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <div className="bg-secondary/35">
        <Section>
          <Heading
            eyebrow="The delivery opportunity · Where Cavinova sees the opening"
            title="What if the next advancement is not another ingredient, but a different way to deliver it?"
          >
            <p>
              Cavinova is studying whether a specialized formulation and suitable ultrasound could
              produce a useful, repeatable difference in topical ingredient delivery.
            </p>
          </Heading>
          <figure className="mt-7">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-3xl border bg-card">
                <Artwork
                  src={comparison}
                  height={374}
                  frame={[66, 65, 592, 216]}
                  alt="Skin cross-section with topical ingredients shown at the surface."
                />
                <div className="p-5">
                  <h3 className="text-2xl">Conventional topical application</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Ingredients are applied at the surface. How readily they pass through depends on
                    the ingredient and formulation.
                    <Cite ids={["A", "K"]} />
                  </p>
                </div>
              </div>
              <div className="overflow-hidden rounded-3xl border bg-card">
                <Artwork
                  src={comparison}
                  height={374}
                  frame={[662, 65, 592, 216]}
                  alt="Conceptual skin cross-section showing ultrasound waves, microbubbles, and arrows suggesting possible ingredient movement."
                />
                <div className="p-5">
                  <h3 className="text-2xl">Proposed Cavinova approach</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    Under suitable conditions, ultrasound can set responsive microbubbles in motion.
                    <Cite ids={["B", "P"]} /> Whether that improves delivery of selected ingredients
                    remains a research question.
                  </p>
                </div>
              </div>
            </div>
            <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Conceptual comparison. Cavinova-specific performance still needs testing.
            </figcaption>
          </figure>
        </Section>
      </div>

      <div id="investment-thesis" className="scroll-mt-24 bg-hero">
        <Section>
          <Heading
            eyebrow="Why Cavinova"
            title="From the first installation to the next refill."
          >
            <p>
              We plan to start with founder-led demos and training in the New York metro. Each
              installation gives us a chance to learn how estheticians use the system and what
              brings spas back for refills. That experience informs how we expand into new regions.
            </p>
          </Heading>
          <OpportunityFlow
            steps={[
              {
                title: "Science-led differentiation",
                description: (
                  <>
                    Ultrasound-responsive microbubble formulations.
                    <Cite ids={["C", "P"]} />
                  </>
                ),
              },
              {
                title: "Professional customer",
                description: "Day spas and med spas looking for a premium facial to add to their menus.",
              },
              {
                title: "Recurring treatment demand",
                description:
                  "Spas replenish bulk serum and measured microbubble doses as they perform facials.",
              },
              {
                title: "Regional expansion",
                description:
                  "Local demos and trainer-led onboarding, supported by online refill ordering.",
              },
            ]}
          />
        </Section>
      </div>

      <Section>
        <div className="rounded-3xl border bg-secondary/55 p-6 shadow-soft sm:p-10">
          <Heading
            eyebrow="Investment & strategic interest"
            title="Interested in exploring Cavinova's potential?"
          >
            <p>
              We welcome conversations with prospective investors, strategic partners, and industry
              collaborators interested in evaluating a science-driven professional skincare
              opportunity.
            </p>
          </Heading>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="min-h-11 rounded-full">
              <Link to="/contact" search={{ interest: "investment" }}>
                Discuss the Opportunity <ArrowRight aria-hidden />
              </Link>
            </Button>
            <Button asChild variant="outline" className="min-h-11 rounded-full">
              <Link to="/platform">Explore the Product Concept</Link>
            </Button>
          </div>
        </div>
      </Section>
      <References ids={["A", "B", "C", "F", "P", "H", "M", "U", "K"]} />
    </>
  );
}
