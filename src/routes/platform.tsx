import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Clock3, Droplet, GraduationCap, Layers, Sparkles, Waves } from "lucide-react";
import { Eyebrow, Section, seo } from "@/components/site";
import { Button } from "@/components/ui/button";

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
const features = [
  {
    title: "Precision-Measured Preparation",
    description:
      "Choose your serum and measure the amount needed for a 30- or 60-minute facial using the reusable preparation cup. Add the freeze-dried microbubbles, mix, and click the prepared cup directly into the handpiece.",
    benefit: "Less Prep. Less Waste.",
    detail:
      "Straightforward measurements simplify preparation, help control product use, and reduce unnecessary serum waste.",
    image: "measured-preparation.webp",
    alt: "Reusable graduated preparation cup beside the handpiece’s click-in connection.",
    accent: "bg-[#e2f1ee]",
    icon: Clock3,
  },
  {
    title: "Automatic Serum Dispensing",
    description:
      "The Cavinova handpiece automatically dispenses the prepared formulation during treatment through an integrated delivery system.",
    benefit: "More Consistent Application.",
    detail:
      "Controlled dispensing helps standardize serum use across treatments, reducing manual application and opportunities for operator error.",
    image: "automatic-dispensing.webp",
    alt: "A drop of serum forming at the Cavinova handpiece’s dispensing tip.",
    accent: "bg-[#f6e8e9]",
    icon: Layers,
  },
  {
    title: "Intelligent Touchscreen Control",
    description:
      "The premium touchscreen base comes with preloaded treatment programs. Simply select your serum and choose a 30- or 60-minute session. Cavinova automatically adjusts the ultrasound frequency and associated settings for that treatment.",
    benefit: "Simpler Training. Greater Confidence.",
    detail:
      "Preset treatment parameters reduce manual adjustments, simplify staff training, and support a more standardized professional treatment experience.",
    image: "touchscreen-controls.webp",
    alt: "Cavinova touchscreen showing three serum presets and 30- and 60-minute sessions.",
    accent: "bg-[#f6eddf]",
    icon: GraduationCap,
  },
];

const serums = [
  {
    name: "Hydrate & Glow",
    category: "Hydration + Radiance",
    image: "hydrate-and-glow.png",
    description:
      "Designed to replenish moisture and improve the appearance of dry, dull, or dehydrated skin, leaving the complexion looking fresh, supple, and luminous.",
    ideal: "Dryness, dehydration, and dull-looking skin.",
    focus: "Moisture, suppleness, and a dewy-looking finish.",
    accent: "bg-[#e2f1ee]",
    bar: "bg-[#18756f]",
    icon: Droplet,
  },
  {
    name: "Smooth & Firm",
    category: "Firmness + Smoothness",
    image: "smooth-and-firm.png",
    description:
      "Focused on improving the appearance of fine lines, supporting a firmer-looking complexion, and leaving skin looking smoother and more refined.",
    ideal: "Fine lines, loss of firmness, and uneven-looking texture.",
    focus: "The look of fine lines, firmness, and texture.",
    accent: "bg-[#f6e8e9]",
    bar: "bg-[#a14964]",
    icon: Waves,
  },
  {
    name: "Brighten & Even Tone",
    category: "Brightness + Even Tone",
    image: "brighten-and-even-tone.webp",
    description:
      "Created to address the appearance of dullness and uneven skin tone, helping reveal a brighter, more balanced-looking complexion.",
    ideal: "Dullness, visible discoloration, and uneven-looking tone.",
    focus: "Radiance and a more even-looking tone.",
    accent: "bg-[#f6eddf]",
    bar: "bg-[#9d622e]",
    icon: Sparkles,
  },
] as const;

const questions = [
  [
    "What's your main skincare priority?",
    ["Improving hydration", "Smoother, firmer-looking skin", "Brighter, more even-looking skin"],
  ],
  [
    "What concerns you most about your complexion?",
    ["Dryness or dehydration", "Fine lines or loss of firmness", "Dullness or uneven tone"],
  ],
  [
    "What would you most like to improve?",
    ["Moisture and suppleness", "Smoothness and firmness", "Radiance and tone uniformity"],
  ],
  [
    "What result are you looking for?",
    [
      "A fresh, dewy appearance",
      "A smoother, more refined appearance",
      "A luminous, balanced complexion",
    ],
  ],
  [
    "Which skincare concern would you prioritize first?",
    [
      "Replenishing moisture",
      "Softening the appearance of fine lines",
      "Improving the appearance of uneven tone",
    ],
  ],
] as const;

// Rows are selected goals and columns are serums, both in hydration, firmness, tone order.
// Direct matches get 100 points. Related goals get partial credit, with radiance shared
// by hydration and tone. Each answered question contributes equally to each serum.
const affinity = [
  [100, 30, 55],
  [30, 100, 30],
  [55, 30, 100],
];

const futureSerums = [
  {
    name: "Texture & Polish",
    description: "Focused on skin refinement and a smoother-looking finish.",
    accent: "bg-[#f6eddf]",
  },
  {
    name: "Signature All-Over Beauty",
    description:
      "A versatile addition to the Cavinova collection, designed to expand the possibilities for professional beauty treatments.",
    accent: "bg-[#f6e8e9]",
  },
];

function SerumMatch() {
  const [answers, setAnswers] = useState<Partial<Record<number, number>>>({});
  const selected = Object.values(answers).filter((answer) => answer !== undefined);
  const results = serums
    .map((serum, index) => ({
      ...serum,
      score: selected.length
        ? Math.round(
            selected.reduce((total, answer) => total + affinity[answer]![index]!, 0) /
              selected.length,
          )
        : 0,
    }))
    .sort((a, b) => b.score - a.score);
  const topScore = results[0]?.score;
  const tied = results.filter(({ score }) => score === topScore).length > 1;

  return (
    <Section className="scroll-mt-24">
      <div
        id="serum-match"
        className="scroll-mt-28 rounded-[2rem] border bg-[#edf6f3] p-5 sm:p-8 lg:p-12"
      >
        <Eyebrow>Personalized Skincare Discovery</Eyebrow>
        <h2 className="mt-3 text-4xl sm:text-5xl">Find Your Serum Match.</h2>
        <p className="mt-3 text-muted-foreground">
          Five quick questions. See which Cavinova treatments best match your skincare goals.
        </p>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.15fr_1fr]">
          <div className="space-y-5">
            {questions.map(([question, choices], questionIndex) => (
              <fieldset key={question}>
                <legend className="font-semibold">
                  {questionIndex + 1}. {question}
                </legend>
                <div className="mt-2 flex flex-wrap gap-2">
                  {choices.map((choice, choiceIndex) => (
                    <label key={choice} className="cursor-pointer">
                      <input
                        className="peer sr-only"
                        type="radio"
                        name={`serum-question-${questionIndex}`}
                        checked={answers[questionIndex] === choiceIndex}
                        onChange={() =>
                          setAnswers((current) => ({ ...current, [questionIndex]: choiceIndex }))
                        }
                      />
                      <span className="flex min-h-11 items-center rounded-2xl border border-[#bfd7d1] bg-white/75 px-3 py-2 text-sm hover:bg-white peer-checked:border-[#07545a] peer-checked:bg-[#07545a] peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-[#07545a] peer-focus-visible:ring-offset-2">
                        {choice}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
          </div>
          <div className="rounded-3xl border bg-white/80 p-4 shadow-soft sm:p-6 lg:sticky lg:top-28">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-2xl">Your serum matches</h3>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setAnswers({})}
                disabled={!selected.length}
              >
                Reset
              </Button>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {selected.length
                ? `${selected.length} of ${questions.length} answered`
                : "Choose an answer to see your matches."}
            </p>
            <div className="mt-4 space-y-3" aria-live="polite">
              {results.map(({ name, focus, score, accent, bar, icon: Icon }) => {
                const strongest = selected.length > 0 && score === topScore;
                return (
                  <div
                    key={name}
                    className={`rounded-2xl border p-4 ${accent} ${strongest ? "border-[#24766f]" : "border-transparent"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="flex items-center gap-2 font-sans text-sm font-semibold">
                        <Icon aria-hidden className="size-4 shrink-0 text-teal-deep" />
                        {name}
                      </h4>
                      <span className="shrink-0 text-sm font-semibold tabular-nums">
                        {selected.length ? `${score}% match` : "—"}
                      </span>
                    </div>
                    {strongest && (
                      <p className="mt-1 text-xs font-semibold text-teal-deep">
                        {tied ? "Joint top match" : "Top match"}
                      </p>
                    )}
                    <div
                      className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/85"
                      aria-hidden
                    >
                      <div
                        className={`h-full rounded-full transition-[width] duration-300 motion-reduce:transition-none ${bar}`}
                        style={{ width: `${score}%` }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{focus}</p>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 text-xs italic text-muted-foreground">
              Match percentages reflect your skincare preferences, not predicted treatment results.
            </p>
          </div>
        </div>
      </div>
    </Section>
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
              className="mt-4 max-w-[17ch] text-4xl leading-[1.03] tracking-tight sm:text-5xl lg:text-[clamp(2.5rem,3.7vw,3.375rem)]"
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
            <Button
              asChild
              className="mt-7 min-h-11 rounded-full bg-[#07545a] px-6 text-base text-white hover:bg-[#063f45]"
            >
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
        <div id="system" className="scroll-mt-28 text-center">
          <Eyebrow>Thoughtfully Engineered</Eyebrow>
          <h2 className="mt-3 text-balance text-4xl sm:text-5xl">
            Designed for Professionals. Built for Business.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            Every part of the Cavinova system is designed to make advanced skincare treatments
            easier to prepare, deliver, and incorporate into a busy spa.
          </p>
        </div>
        <div className="mt-9 divide-y">
          {features.map(
            ({ title, description, benefit, detail, image, alt, accent, icon: Icon }) => (
              <article
                key={title}
                className="grid items-center gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)_auto_minmax(0,1.35fr)] lg:gap-6"
              >
                <img
                  src={`${images}/${image}`}
                  alt={alt}
                  width={768}
                  height={512}
                  loading="lazy"
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                />
                <div>
                  <h3 className="font-sans text-sm font-bold tracking-wide text-teal-deep uppercase">
                    {title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
                </div>
                <ArrowRight aria-hidden className="hidden size-5 text-teal-deep lg:block" />
                <div
                  className={`flex items-start gap-3 rounded-2xl p-5 md:col-span-2 lg:col-span-1 ${accent}`}
                >
                  <Icon aria-hidden className="mt-1 size-6 shrink-0 text-teal-deep" />
                  <div>
                    <h4 className="text-2xl">{benefit}</h4>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{detail}</p>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </Section>

      <div id="facial-serums" className="scroll-mt-24 bg-[#faf1ea]">
        <Section>
          <div className="text-center">
            <Eyebrow>The 2028 Launch Collection</Eyebrow>
            <h2 className="mt-3 text-balance text-4xl sm:text-5xl">
              Three targeted serums. One versatile system.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Each formulation offers a distinct treatment experience, allowing professionals to
              tailor Cavinova facials to their clients’ skincare goals.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {serums.map(({ name, image, category, description, ideal, accent, icon: Icon }) => (
              <article
                key={name}
                className="flex flex-col overflow-hidden rounded-3xl border bg-card shadow-soft"
              >
                <img
                  src={`${images}/${image}`}
                  alt={`Cavinova ${name} serum bottle`}
                  width={960}
                  height={960}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <h3 className="text-2xl">{name}</h3>
                  <p className="mt-1 text-xs font-bold tracking-wide text-teal-deep uppercase">
                    {category}
                  </p>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{description}</p>
                  <div className={`mt-5 flex items-center gap-3 rounded-2xl p-3 text-sm ${accent}`}>
                    <Icon aria-hidden className="size-5 shrink-0 text-teal-deep" />
                    <p>
                      <strong>Ideal for:</strong> {ideal}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </div>

      <SerumMatch />

      <div className="border-y bg-[#fbf6f0]">
        <Section>
          <Eyebrow>The Collection Is Growing</Eyebrow>
          <h2 className="mt-3 text-balance text-4xl sm:text-5xl">
            More treatments. More possibilities.
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
            The Cavinova collection will continue to expand, introducing additional formulations
            designed to give professionals more ways to personalize the treatment experience.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {futureSerums.map(({ name, description, accent }) => (
              <article key={name} className={`rounded-3xl border p-6 sm:p-8 ${accent}`}>
                <h3 className="text-2xl">{name}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Planned future additions following the 2028 launch, with five formulations targeted by
            2032.
          </p>
        </Section>
      </div>

      <Section className="text-center">
        <h2 className="text-balance text-4xl sm:text-5xl">Bring Cavinova to Your Spa.</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          Discover how one intelligent skincare platform can expand your treatment menu, simplify
          your workflow, and introduce a new experience for your clients.
        </p>
        <Button
          asChild
          className="mt-6 min-h-11 rounded-full bg-[#07545a] px-6 text-base text-white hover:bg-[#063f45]"
        >
          <Link to="/opportunity">
            Explore the Spa Opportunity <ArrowRight aria-hidden />
          </Link>
        </Button>
      </Section>
    </>
  );
}
