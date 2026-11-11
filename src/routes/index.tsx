import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
import { Cite, References } from "@/components/references";
import heroRender from "@/assets/luxury-skincare-device-still-life.png.asset.json";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () =>
    seo(
      "Cavinova — A New Premium Facial for Spas",
      "Cavinova is developing a premium facial system that pairs controlled ultrasound and a microbubble serum for day spas and med spas.",
    ),
  component: Home,
});

const images = "/images/home";
const button =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition";

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

function Home() {
  return (
    <>
      <section className="bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-9 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:py-20">
          <div className="min-w-0">
            <Eyebrow>Professional skincare</Eyebrow>
            <h1 className="mt-5 max-w-xl text-balance text-4xl leading-[1.08] sm:text-5xl xl:text-6xl">
              Great skincare deserves better delivery.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              The beauty industry has spent decades perfecting what goes into skincare. We're
              changing how it gets there.
              <br />
              <br />
              Cavinova combines intelligent ultrasound technology with acoustically responsive
              microbubbles and targeted serums to enhance ingredient delivery into the skin.
              <br />
              <br />
              One intelligent system. Three targeted treatments. A new approach to professional
              skincare.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/platform"
                className={`${button} bg-primary text-primary-foreground hover:opacity-90`}
              >
                Discover Cavinova <ArrowRight aria-hidden className="h-4 w-4" />
              </Link>
              <Link to="/opportunity" className={`${button} border bg-card hover:border-primary`}>
                {"\u00a0Bring Cavinova to Your Spa"}
              </Link>
            </div>
          </div>
          <img
            src={heroRender.url}
            alt="Concept render of a proposed Cavinova handheld ultrasound handpiece with fluid cartridges and three labeled serum bottles arranged on stone pedestals."
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
          <h2 className="text-balance text-4xl leading-tight sm:text-5xl">Great ingredients. One big problem.</h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              Your skin is your body's largest organ, and one of its most important jobs is to protect you.
            </p>
            <p>
              But the same barrier that keeps harmful substances out also makes it difficult for many beneficial skincare ingredients to get in.
            </p>
            <p>
              Hyaluronic acid. Vitamin C. Niacinamide. These are ingredients we've known and trusted for years. Their benefits are well established, yet their ability to penetrate the skin can still be limited.
            </p>
            <p>
              What if the next big breakthrough in skincare isn't a new ingredient, but a better way to deliver the ones we already love?
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
      </Section>

      <div className="bg-secondary/40">
        <Section>
          <Eyebrow>The missing piece</Eyebrow>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl leading-tight sm:text-5xl">
            The Missing Piece
          </h2>
          <div className="mt-5 max-w-3xl space-y-4 leading-relaxed text-muted-foreground">
            <p>
              We've spent years improving what's inside the bottle. Now we're addressing what
              happens after it touches the skin.
            </p>
            <p>
              Cavinova takes a new approach to ingredient delivery, helping unlock the full
              potential of skincare ingredients we already know and trust.
            </p>
          </div>
          <Link
            to="/platform"
            className={`mt-8 ${button} bg-primary text-primary-foreground hover:opacity-90`}
          >
            Discover the Technology <ArrowRight aria-hidden className="h-4 w-4" />
          </Link>
        </Section>
      </div>

      <div id="homepage-references" className="scroll-mt-24 [&_ul]:space-y-3 [&_ul]:text-base">
        <References ids={["A", "G"]} />
      </div>
    </>
  );
}
