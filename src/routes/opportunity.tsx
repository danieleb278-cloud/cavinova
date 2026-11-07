import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Droplets, FlaskConical, Layers3 } from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
import { Button } from "@/components/ui/button";
import { equipmentScenario } from "@/lib/opportunity";
import { references } from "@/lib/references";

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
const sourceClass =
  "inline-flex min-h-11 items-center gap-2 font-semibold underline decoration-primary underline-offset-4";

const treatments = [
  {
    title: "Conventional topical facials",
    body: "Topical products support hydration and conditioning. The skin’s outer barrier limits how readily many ingredients pass through.",
    source: "Skin penetration research",
    href: "https://pubmed.ncbi.nlm.nih.gov/10839713/",
    x: 22,
  },
  {
    title: "Hydrodermabrasion and serum infusion",
    body: "Systems such as Hydrafacial combine cleansing, exfoliation, extraction, and hydration, with targeted serums available as boosters.",
    source: "Hydrafacial treatment overview",
    href: "https://www.hydrafacial.com/pages/the-treatment",
    x: 405,
  },
  {
    title: "Microneedling",
    body: "Small needles intentionally puncture the skin. The procedure has specific uses, training considerations, and potential side effects.",
    source: "FDA on microneedling",
    href: "https://www.fda.gov/medical-devices/aesthetic-cosmetic-devices/microneedling-devices",
    x: 776,
  },
  {
    title: "Ultrasound-based technologies",
    body: "Some aesthetic devices use focused ultrasound to lift tissue. Sonophoresis research instead investigates how ultrasound can influence skin permeability.",
    source: "Ultrasound device indications",
    href: "https://ultherapy.com/app/uploads/2023/08/1015107IFU-Rev-D.pdf",
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

const ecosystem = [
  "Professional practice",
  "Offers a validated treatment",
  "Uses a single-use formulation",
  "Replenishes as demand warrants",
  "Potential to add formulations",
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

function MarketScenario() {
  return (
    <aside
      className="mt-8 rounded-3xl border bg-card p-5 sm:p-7"
      aria-label="Preliminary market screening"
    >
      <ol className="grid gap-4 sm:grid-cols-3">
        {[
          "U.S. professional aesthetic practices",
          "Med spas in six selected states",
          `≈${equipmentScenario.screenedLocations.toLocaleString("en-US")} preliminarily screened locations`,
        ].map((item, index) => (
          <li key={item} className="border-t border-teal/60 pt-4">
            <Eyebrow>0{index + 1}</Eyebrow>
            <p className="mt-2 font-serif text-2xl">{item}</p>
          </li>
        ))}
      </ol>
      <p className="mt-5 leading-relaxed text-muted-foreground">
        The estimate is a starting point for research. Equipment fit and provider demand still need
        to be established.
      </p>
      <details className="mt-4 border-t">
        <summary className="flex min-h-11 cursor-pointer items-center font-semibold underline decoration-primary underline-offset-4">
          How the screening estimate was calculated
        </summary>
        <p className="max-w-3xl leading-relaxed text-muted-foreground">
          The team applied AmSpa’s reported 57% hydradermabrasion share to its 2023 count of 10,488
          U.S. med spas, then applied a 70% team suitability assumption and a 44.7% share for
          California, Florida, Illinois, New Jersey, New York, and Texas from ByteScraper’s
          directory. Hydradermabrasion serves as a proxy for experience with equipment-assisted
          facials. The model does not verify individual locations or measure demand.
        </p>
        <ul className="mt-2">
          <li>
            <a className={sourceClass} href={references.E.url}>
              AmSpa industry report recap
            </a>
          </li>
          <li>
            <a className={sourceClass} href={references.F.url}>
              AmSpa service-mix data
            </a>
          </li>
          <li>
            <a
              className={sourceClass}
              href="https://bytescraper.com/b2b-database/list-of-med-spas-in-united-states"
            >
              ByteScraper U.S. medical spa directory
            </a>
          </li>
        </ul>
      </details>
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
            Professional skincare offers more treatments than ever. But ingredient delivery remains
            an opportunity for innovation.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            From advanced facials to microneedling and energy-based treatments, providers have many
            options. Cavinova is investigating whether ultrasound and acoustically responsive
            microbubbles could help deliver selected topical ingredients.
          </p>
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
          {treatments.map(({ title, body, source, href, x }) => (
            <article key={title} className="overflow-hidden rounded-3xl border bg-card">
              <Artwork src={landscape} height={650} frame={[x, 260, 358, 154]} alt="" />
              <div className="p-5 sm:p-6">
                <h3 className="text-balance text-2xl">{title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
                <a className={sourceClass} href={href}>
                  {source}
                </a>
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
                    Ultrasound could set microbubbles in motion. Whether that improves delivery of
                    selected ingredients remains a research question.
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
          <MarketScenario />
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="The business opportunity"
          title="The opportunity extends beyond a single treatment."
        >
          <p>
            If validation supports adoption, each appointment would use a premeasured, single-use
            formulation. Repeat appointments could drive replenishment and, over time, support
            additional formulations and an integrated system.
          </p>
        </Heading>
        <ol
          aria-label="Proposed treatment and replenishment cycle"
          className="mt-7 grid gap-3 lg:grid-cols-5"
        >
          {ecosystem.map((step, index) => (
            <li key={step} className="rounded-xl border border-teal/40 bg-secondary/35 p-4">
              <Eyebrow>0{index + 1}</Eyebrow>
              <p className="mt-2 font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <div className="bg-secondary/35">
        <Section>
          <Heading
            eyebrow="The commercial thesis"
            title="A delivery-focused innovation in an established treatment market."
          />
          <dl className="mt-7 grid gap-5 md:grid-cols-3">
            <div className="border-t pt-4">
              <dt className="font-serif text-2xl">Scientific foundation</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">
                Published studies give Cavinova a starting point for investigating
                ultrasound-assisted delivery.
              </dd>
            </div>
            <div className="border-t pt-4">
              <dt className="font-serif text-2xl">Professional application</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">
                The concept is aimed at practices already familiar with specialized skincare
                services.
              </dd>
            </div>
            <div className="border-t pt-4">
              <dt className="font-serif text-2xl">Long-term platform potential</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">
                A validated formulation could become the basis for an integrated system and
                recurring consumables.
              </dd>
            </div>
          </dl>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Scientific, regulatory, customer, and commercial questions remain open.
          </p>
        </Section>
      </div>

      <Section>
        <Heading
          eyebrow="Connect with Cavinova"
          title="The next opportunity in skincare may be how ingredients are delivered."
        >
          <p>
            We welcome conversations with aesthetic professionals, researchers, and potential
            development partners about what would make this approach worth pursuing.
          </p>
        </Heading>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild className="min-h-11 rounded-full">
            <Link to="/contact">
              Connect With Cavinova <ArrowRight aria-hidden />
            </Link>
          </Button>
          <Button asChild variant="outline" className="min-h-11 rounded-full">
            <Link to="/science">Explore the Science</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
