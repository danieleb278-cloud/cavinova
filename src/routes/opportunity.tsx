import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Droplet, FlaskConical, Layers, Sparkles, Waves } from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
import { Artwork } from "@/components/artwork";
import { ImageLightbox } from "@/components/image-lightbox";
import { Button } from "@/components/ui/button";
import { Cite, References, ReferencesLink } from "@/components/references";
import boosterWandAsset from "@/assets/take-home-booster-wand.png.asset.json";
import starterPackageAsset from "@/assets/professional-starter-package.png.asset.json";

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
const workflowImage = "/images/platform/rear-vial-workflow.png";
const workflowAlt =
  "Cavinova concept showing serum and a freeze-dried microbubble tab mixed in a vial, the vial attaching at the rear, and the ultrasound plate resting against the cheek.";

const boosterWand = boosterWandAsset.url;
const boosterWandAlt =
  "Concept rendering of the proposed Cavinova take-home booster wand resting on a stone countertop beside a folded towel.";

const starterPackage = starterPackageAsset.url;
const starterPackageAlt =
  "Concept rendering of the proposed Cavinova professional starter package: the tabletop system with its handpiece, three trial serum bottles, and a pack of nine microbubble doses.";

const mobileInnovation = [
  {
    title: "Mix just before use",
    description: "Combine the serum and a freeze-dried microbubble tab in the reservoir vial.",
  },
  {
    title: "Attach the reservoir",
    description: "Screw the prepared vial into the rear port of the handpiece.",
  },
  {
    title: "Dispense during the facial",
    description: "The handpiece is designed to dispense the mixture at the edge of the ultrasound plate.",
  },
];

// Take-home lineup: three pairings inspired by the in-spa serums, two planned over time.
export const takeHomePairings = [
  { name: "Hydrate & Glow", stage: "starting", icon: Droplet },
  { name: "Smooth & Firm", stage: "starting", icon: Waves },
  { name: "Brighten & Even Tone", stage: "starting", icon: Sparkles },
  { name: "Texture & Polish", stage: "planned", icon: Layers },
  { name: "Signature Radiance", stage: "planned", icon: Sparkles },
] as const;

const treatments = [
  {
    title: "Traditional Facials",
    lead: "A familiar experience built around topical skincare.",
    body: "Traditional facials cleanse, exfoliate, and hydrate. They remain a staple of professional skincare and typically rely on topical application.",
    advantageTitle: "Go Beyond the Traditional Facial.",
    advantageBody:
      "Give clients a reason to upgrade with a signature facial designed around targeted serum options.",
    sources: ["A"],
    x: 22,
  },
  {
    title: "Infusion & Hydradermabrasion",
    lead: "A service centered on cleansing and exfoliation.",
    body: "Treatments such as Hydrafacial combine exfoliation, suction-based extraction, and topical serums for a refreshed, hydrated look.",
    advantageTitle: "Make Ingredient Delivery the Priority.",
    advantageBody:
      "Cavinova’s proposed facial is built around the application of targeted skincare formulations, giving spas a distinct service to add alongside cleansing and extraction.",
    sources: ["H"],
    x: 405,
  },
  {
    title: "Microneedling",
    lead: "Advanced treatments can involve needles and recovery time.",
    body: "Microneedling uses controlled punctures and is used for concerns such as fine lines and certain scars. Redness, swelling, and sensitivity can follow. Provider requirements vary by procedure and jurisdiction.",
    advantageTitle: "Advanced Skincare. No Needles Required.",
    advantageBody:
      "Cavinova is designed as a needle-free professional facial with options focused on hydration, radiance, smoother- and firmer-looking skin, and a more even-looking tone.",
    sources: ["M"],
    x: 776,
  },
  {
    title: "Energy-Based Aesthetics",
    lead: "Powerful technology designed for different treatment goals.",
    body: "Laser, radiofrequency, and focused ultrasound are used for a range of aesthetic goals. Depending on the procedure, these can include resurfacing, heating, or tissue remodeling.",
    advantageTitle: "Advanced Technology. Focused on Skincare.",
    advantageBody:
      "Cavinova brings acoustic technology to a professional facial centered on targeted formulations and cosmetic appearance goals.",
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

function Opportunity() {
  return (
    <>
      <div className="bg-hero">
        <Section>
          <Eyebrow>Why Cavinova?</Eyebrow>
          <h1 className="mt-4 max-w-5xl text-balance text-4xl leading-tight sm:text-5xl xl:text-6xl">
            A different approach to professional skincare.
          </h1>
          <div className="mt-5 max-w-3xl space-y-3 text-lg leading-relaxed text-muted-foreground">
            <p>
              Not every skincare innovation requires a new active ingredient or another complex
              treatment system.
            </p>
            <p>
              Cavinova’s proposed platform brings established skincare ingredients and advanced
              acoustic delivery technology together in one system designed for the professional spa
              environment.
            </p>
          </div>
          <ul className="mt-6 grid gap-3 md:grid-cols-3" aria-label="Platform design goals">
            {[
              ["Targeted Treatments", "A planned collection of formulations for different skincare goals."],
              ["Simplified Operation", "Automated treatment settings and a streamlined preparation process."],
              ["Designed for More Spas", "A versatile professional platform built around accessible adoption and ongoing treatment opportunities."],
            ].map(([title, description]) => (
              <li key={title} className="rounded-2xl border bg-card/85 p-4 sm:p-5">
                <p className="font-semibold">{title}</p>
                <p className="mt-1 leading-relaxed text-muted-foreground">{description}</p>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6 min-h-11 rounded-full">
            <Link to="/platform">
              Explore the Cavinova System <ArrowRight aria-hidden />
            </Link>
          </Button>
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
          eyebrow="The professional skincare landscape"
          title="Your clients already love facials. Give them a reason to upgrade."
        >
          <p>
            From traditional facials to advanced aesthetic services, spas have more options than
            ever. Cavinova is developing a signature facial centered on targeted skincare
            ingredients clients already know.
          </p>
        </Heading>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {treatments.map(({ title, lead, body, advantageTitle, advantageBody, sources, x }) => (
            <article
              key={title}
              className="flex flex-col overflow-hidden rounded-3xl border bg-card"
            >
              <Artwork src={landscape} height={650} frame={[x, 260, 358, 154]} alt="" />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-balance text-2xl">{title}</h3>
                <p className="mt-2 font-semibold">{lead}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {body}
                  <Cite ids={sources} />
                </p>
                <div className="mt-auto rounded-2xl bg-secondary/55 p-4 pt-4 [margin-top:auto]">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">
                    The Cavinova Advantage
                  </p>
                  <h4 className="mt-1.5 text-base font-semibold">{advantageTitle}</h4>
                  <p className="mt-1 leading-relaxed text-muted-foreground">{advantageBody}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 rounded-3xl border bg-secondary/55 p-6 shadow-soft sm:p-10">
          <div className="max-w-4xl">
            <Eyebrow>Why Choose Cavinova?</Eyebrow>
            <h2 className="mt-3 text-balance text-4xl leading-tight sm:text-5xl">
              More than another facial.
            </h2>
            <div className="mt-5 space-y-3 leading-relaxed text-muted-foreground">
              <p>
                Cavinova gives spas a way to build a signature service around the skincare goals
                clients care about, with three professional serum options and a needle-free
                workflow.
              </p>
              <p className="font-semibold text-foreground">
                More treatment options. A stronger reason to choose your spa.
              </p>
            </div>
          </div>
          <Button asChild className="mt-6 min-h-11 rounded-full">
            <Link to="/platform">
              Explore the Cavinova System <ArrowRight aria-hidden />
            </Link>
          </Button>
        </div>
      </Section>

      <div id="innovation" className="scroll-mt-24 bg-secondary/40">
        <Section>
          <Eyebrow>The innovation</Eyebrow>
          <h2 className="mt-4 text-balance text-4xl leading-tight sm:text-5xl">Better Together.</h2>
          <figure className="mt-8 hidden overflow-hidden rounded-3xl border bg-card shadow-soft md:block">
            <ImageLightbox
              src={workflowImage}
              title={workflowAlt}
            />
          </figure>
          <div className="mt-6 md:hidden">
            <figure className="overflow-hidden rounded-2xl border bg-card">
              <img
                src={workflowImage}
                alt={workflowAlt}
                width={1672}
                height={941}
                loading="lazy"
                className="block h-auto w-full"
              />
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
              Published lab studies inform Cavinova’s approach to ultrasound and microbubbles.
              <Cite ids={["C", "P"]} /> Cavinova's formulation and proposed system still need
              testing.
            </p>
          </div>
          <Link
            to="/science"
            className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-foreground underline decoration-primary underline-offset-4"
          >
            See how the science works <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
          <ReferencesLink />
        </Section>
      </div>

      <Section>
        <Heading eyebrow="Cavinova at Home" title="Skincare that goes home with your clients">
          <p>
            The proposed take-home collection pairs each Cavinova serum with a companion
            moisturizer. It starts with three pairings inspired by the in-spa options: Hydrate &
            Glow, Smooth & Firm, and Brighten & Even Tone. Two more pairings, Texture & Polish and
            Signature Radiance, are planned over time.
          </p>
          <p>
            Spas can recommend a matching routine at checkout and give clients a reason to return
            for their favorites.
          </p>
        </Heading>
        <div className="mt-7 space-y-3">
          {(["starting", "planned"] as const).map((stage) => (
            <div key={stage} className="flex flex-wrap items-center gap-2">
              <span
                className={`w-full text-xs font-semibold uppercase tracking-[0.2em] sm:w-auto ${
                  stage === "starting" ? "text-teal-deep" : "text-muted-foreground"
                }`}
              >
                {stage === "starting" ? "Starting with" : "Planned over time"}
              </span>
              {takeHomePairings
                .filter((pairing) => pairing.stage === stage)
                .map(({ name, icon: Icon }) => (
                  <span
                    key={name}
                    className={`inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-sm ${
                      stage === "starting" ? "" : "border-dashed"
                    }`}
                  >
                    <Icon aria-hidden className="size-4 text-teal-deep" />
                    {name}
                  </span>
                ))}
            </div>
          ))}
        </div>
        <aside className="mt-6 max-w-3xl overflow-hidden rounded-2xl border bg-card sm:grid sm:grid-cols-2 sm:items-stretch">
          <figure className="overflow-hidden border-b border-border sm:border-b-0 sm:border-r">
            <ImageLightbox src={boosterWand} title={boosterWandAlt} />
          </figure>
          <div className="p-5 sm:p-6">
            <p className="inline-flex items-center gap-2 rounded-full border bg-secondary/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-teal-deep">
              <FlaskConical aria-hidden className="size-3.5" /> In development
            </p>
            <h3 className="mt-3 font-serif text-xl font-semibold leading-snug">
              Take-home booster wand
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              We’re developing an optional, battery-powered booster pen designed for use with
              Cavinova’s take-home serums.
            </p>
          </div>
        </aside>
      </Section>

      <Section>
        <div className="overflow-hidden rounded-3xl border bg-card shadow-soft">
          <div className="px-6 pt-8 sm:px-10 sm:pt-10">
            <Eyebrow>Professional Starter Package</Eyebrow>
            <h2 className="mt-3 text-balance text-4xl leading-tight sm:text-5xl">
              Try all three serums before stocking up.
            </h2>
            <p className="mt-5 max-w-4xl leading-relaxed text-muted-foreground">
              The proposed starter package brings together the Cavinova professional system, one
              trial bottle each of Hydrate &amp; Glow, Smooth &amp; Firm, and Brighten &amp; Even
              Tone, and nine individually packaged microbubble doses. Your team can try all three in
              the treatment room and choose which serums to keep on hand in full size.
            </p>
          </div>
          <figure className="mt-8 overflow-hidden border-y border-border">
            <ImageLightbox src={starterPackage} title={starterPackageAlt} />
          </figure>
          <div className="grid gap-6 px-6 py-8 sm:grid-cols-2 sm:px-10 sm:py-10">
            <div>
              <h3 className="text-base font-semibold">Easy to restock</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                We’re planning online reordering for professional serums and treatment supplies,
                with refill bundles to help spas save and optional scheduled shipments to make
                restocking easier.
              </p>
            </div>
            <div>
              <h3 className="text-base font-semibold">A direct line to Cavinova</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                Have a question about the system, starter package, or refills?{" "}
                <Link
                  to="/contact"
                  className="font-semibold text-teal-deep underline decoration-teal-deep/40 underline-offset-4 hover:decoration-teal-deep"
                >
                  Reach the Cavinova team
                </Link>{" "}
                through our website.
              </p>
            </div>
          </div>
        </div>
      </Section>

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
      <References ids={["A", "C", "F", "P", "H", "M", "U"]} />
    </>
  );
}
