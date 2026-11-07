import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Droplets, FlaskConical, Layers3 } from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
import { OpportunityFlow } from "@/components/opportunity-flow";
import { Button } from "@/components/ui/button";
import { Cite, References } from "@/components/references";

export const Route = createFileRoute("/opportunity")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Opportunity — Cavinova",
      "Explore the professional skincare treatment landscape and the opportunity Cavinova sees in ultrasound-assisted ingredient delivery.",
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

const practiceValue = [
  {
    title: "A distinctive service",
    body: "A delivery-focused treatment could give practices a new service if testing shows a meaningful benefit.",
    icon: FlaskConical,
    tone: "bg-accent",
  },
  {
    title: "Defined treatment quantities",
    body: "Premeasured, single-use formulations could support clear preparation steps and predictable product use.",
    icon: Droplets,
    tone: "bg-secondary/60",
  },
  {
    title: "Room to expand",
    body: "If testing supports more ingredients, one delivery approach could support a wider range of formulations.",
    icon: Layers3,
    tone: "bg-card",
  },
];

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

function MarketFocus() {
  return (
    <aside
      className="mt-8 rounded-3xl border bg-card p-5 sm:p-7"
      aria-label="Preliminary market screening"
    >
      <ol className="grid gap-4 sm:grid-cols-3">
        {[
          "U.S. professional aesthetic practices",
          "Med spas in six selected states",
          "Practices with suitable equipment and service fit",
        ].map((item, index) => (
          <li key={item} className="border-t border-teal/60 pt-4">
            <Eyebrow>0{index + 1}</Eyebrow>
            <p className="mt-2 font-serif text-2xl">{item}</p>
          </li>
        ))}
      </ol>
      <p className="mt-5 leading-relaxed text-muted-foreground">
        AmSpa reports that some med spas already offer equipment-assisted facials such as
        hydradermabrasion.
        <Cite ids={["F"]} /> Device compatibility and provider demand still need to be established.
      </p>
    </aside>
  );
}

function Opportunity() {
  return (
    <>
      <div className="bg-hero">
        <Section>
          <Eyebrow>The market opportunity</Eyebrow>
          <h1 className="mt-4 max-w-5xl text-balance text-4xl leading-tight sm:text-5xl xl:text-6xl">
            An established treatment market. A different approach to ingredient delivery.
          </h1>
          <div className="mt-5 max-w-3xl space-y-3 text-lg leading-relaxed text-muted-foreground">
            <p>
              Professional aesthetics already supports a range of treatment technologies and
              specialized skincare services.
              <Cite ids={["F", "H"]} />
            </p>
            <p>
              Cavinova is investigating whether acoustically responsive formulations and ultrasound
              can create a differentiated professional offering with recurring consumable demand and
              longer-term platform potential.
            </p>
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

      <Section>
        <Heading
          eyebrow="The Cavinova opportunity"
          title="From a differentiated treatment to a scalable professional platform."
        >
          <p>
            Cavinova’s opportunity combines an emerging formulation concept informed by published
            research
            <Cite ids={["C", "P"]} /> with an established market for technology-enabled aesthetic
            services.
          </p>
          <p>
            If validated, the approach could support specialized professional treatments, ongoing
            formulation replenishment, and eventual expansion into a coordinated
            equipment-and-consumables platform.
          </p>
        </Heading>
        <OpportunityFlow
          steps={[
            { title: "Technology", description: "Ultrasound-responsive microbubble formulations." },
            { title: "Customer", description: "Professional aesthetic practices." },
            {
              title: "Recurring business",
              description: "Premeasured, single-use treatment formulations.",
            },
            { title: "Expansion", description: "An intelligent integrated treatment platform." },
          ]}
        />
      </Section>

      <Section>
        <Heading
          eyebrow="The professional value proposition"
          title="A differentiated treatment needs to create value in the treatment room."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {practiceValue.map(({ title, body, icon: Icon, tone }) => (
            <article key={title} className={`rounded-3xl border p-5 ${tone}`}>
              <Icon aria-hidden className="size-7 text-teal-deep" />
              <h3 className="mt-3 text-2xl">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </Section>

      <div className="bg-accent/55">
        <Section>
          <Heading
            eyebrow="The initial commercial audience"
            title="A focused opportunity within professional aesthetics."
          >
            <p>
              Prospective providers include qualified med spas, dermatology practices, and aesthetic
              professionals with suitable equipment, relevant client demand, and interest in a
              delivery-focused service.
            </p>
          </Heading>
          <MarketFocus />
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="Investment & strategic interest"
          title="Interested in helping shape what’s next in professional skincare?"
        >
          <p>
            Cavinova welcomes conversations with prospective investors, strategic partners, and
            industry collaborators interested in evaluating an early-stage, science-driven skincare
            technology opportunity.
          </p>
          <p>
            We’re exploring the scientific, product, and commercial foundations required to advance
            the concept.
          </p>
        </Heading>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="min-h-11 rounded-full">
            <Link to="/contact">
              Discuss the Opportunity <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline" className="min-h-11 rounded-full">
            <Link to="/platform">Explore the Product Vision</Link>
          </Button>
        </div>
      </Section>
      <References ids={["A", "B", "C", "F", "P", "H", "M", "U", "K"]} />
    </>
  );
}
