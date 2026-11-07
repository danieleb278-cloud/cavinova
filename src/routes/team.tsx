import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, seo } from "@/components/site";
import danielle from "@/assets/danielle_bosworth.png.asset.json";
import qiwei from "@/assets/qiwei_miao.png.asset.json";
import victoria from "@/assets/victoria_demeola.png.asset.json";

export const Route = createFileRoute("/team")({
  staticData: { sitemap: true },
  head: () => seo("Capstone Team — Cavinova", "Meet the Rutgers MBS capstone team exploring Cavinova’s research-stage concept."),
  component: Team,
});

const team = [
  {
    n: "Danielle Bosworth",
    r: "Product Design & Project Coordination",
    b: "Danielle combines graduate training in Product Design at Rutgers University with extensive experience in the professional beauty industry. As a licensed cosmetologist, her background includes salon management, B2B sales, product education, and professional treatment systems. Her experience provides a practical understanding of how aesthetic technologies are introduced, adopted, and used by beauty professionals. At Cavinova, Danielle leads product design and project coordination, connecting the team's research questions with professional workflow considerations.",
    img: danielle.url,
  },
  {
    n: "Victoria DeMeola",
    r: "Technology & Research",
    b: "Victoria brings a scientific background in biotechnology, genomics, molecular diagnostics, and laboratory operations. Her experience provides a foundation for evaluating emerging technologies and understanding the research required to translate scientific discoveries into practical applications. At Cavinova, Victoria leads technology and research planning, reviewing the underlying scientific principles and identifying technical challenges, testing needs, and feasibility questions.",
    img: victoria.url,
  },
  {
    n: "Qiwei Miao",
    r: "Personal Care Science & Market Research",
    b: "Qiwei brings expertise in biology and personal care science, including prior industry research experience. Her background includes cosmetic formulation research, product stability testing, competitive analysis, and the evaluation of product claims. At Cavinova, she applies this background to personal care science and market research, helping the team consider formulation questions and the practical expectations of skincare professionals.",
    img: qiwei.url,
  },
];

function Team() {
  return (
    <>
      <PageHero eyebrow="Capstone Team" title="Interdisciplinary by design">Rutgers University Master of Business and Science capstone team. Individual backgrounds do not imply endorsement by Rutgers or any outside organization.</PageHero>
      <Section>
        <div className="mx-auto flex max-w-4xl flex-col gap-6">
          {team.map((m) => (
            <article
              key={m.n}
              className="grid overflow-hidden rounded-3xl border bg-card shadow-soft transition duration-300 hover:-translate-y-1 sm:grid-cols-[240px_4px_1fr] md:grid-cols-[280px_4px_1fr]"
            >
              <img
                src={m.img}
                alt={`${m.n} — ${m.r}`}
                width={1122}
                height={1402}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-top sm:aspect-auto sm:h-full"
              />
              <div className="h-1 bg-rosegold sm:h-auto sm:w-1" />
              <div className="p-6 md:p-8">
                <h3 className="text-2xl">{m.n}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{m.r}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.b}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
