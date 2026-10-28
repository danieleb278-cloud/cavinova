import { createFileRoute } from "@tanstack/react-router";
import { Cog, Scale, FlaskConical, Factory } from "lucide-react";
import { PageHero, Section, Eyebrow, seo } from "@/components/site";
import danielle from "@/assets/danielle_bosworth.png.asset.json";
import qiwei from "@/assets/qiwei_miao.png.asset.json";
import victoria from "@/assets/victoria_demeola.png.asset.json";

export const Route = createFileRoute("/team")({
  staticData: { sitemap: true },
  head: () => seo("Founding Team — Cavinova", "Meet the interdisciplinary Rutgers MBS Capstone team behind the Cavinova concept."),
  component: Team,
});

const team = [
  {
    n: "Danielle Bosworth",
    r: "Project Manager & Business Plan Lead",
    b: "Danielle combines graduate training in Product Design at Rutgers University with extensive experience in the professional beauty industry. As a licensed cosmetologist, her background includes salon management, B2B sales, product education, and professional treatment systems. Her experience provides a practical understanding of how aesthetic technologies are introduced, adopted, and used by beauty professionals. At Cavinova, Danielle leads project coordination, business plan development, and commercialization strategy, connecting the team's technical research with customer needs, market opportunities, and product development decisions.",
    img: danielle.url,
  },
  {
    n: "Victoria DeMeola",
    r: "Co-Founder, Technology & R&D Lead",
    b: "Victoria brings a scientific background in biotechnology, genomics, molecular diagnostics, and laboratory operations. Her experience provides a foundation for evaluating emerging technologies and understanding the research required to translate scientific discoveries into practical applications. At Cavinova, Victoria leads the technical evaluation of the proposed ultrasound-assisted delivery system, investigating its underlying scientific principles, potential applications, and development requirements. Her work helps identify the technical challenges, testing needs, and research priorities necessary to assess the technology's feasibility.",
    img: victoria.url,
  },
  {
    n: "Qiwei Miao",
    r: "Co-Founder, Market Strategy & Financial Planning Lead",
    b: "Qiwei brings expertise in biology and personal care science, including experience with L'Oréal's Research and Innovation organization. Her background includes cosmetic formulation research, product stability testing, competitive analysis, and the evaluation of product claims. At Cavinova, she applies this expertise to assess the professional skincare market, evaluate competing technologies, and identify opportunities for differentiation. Her understanding of cosmetic formulation and product performance helps connect the proposed technology's scientific potential with the practical expectations of professional skincare providers and their clients.",
    img: qiwei.url,
  },
];

function Team() {
  return (
    <>
      <PageHero eyebrow="Founding Team" title="Interdisciplinary by design">Rutgers University Master of Business and Science — Capstone team.</PageHero>
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
      <Section>
        <Eyebrow>Advisory &amp; external development strategy</Eyebrow>
        <h2 className="mt-3 text-4xl">Planned partnerships</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {[[Cog, "Medical-device engineering", "Transducer and handpiece design partners."], [Scale, "Regulatory affairs", "Pathway strategy and submissions advisors."], [FlaskConical, "Clinical CROs", "Safety and efficacy study execution."], [Factory, "Contract manufacturing", "Device and serum CMOs under quality systems."]].map(([I, t, d]) => {
            const Icon = I as typeof Cog;
            return <div key={t as string} className="rounded-3xl border bg-card p-6"><Icon className="h-6 w-6 text-teal-deep" /><h3 className="mt-3 text-xl">{t as string}</h3><p className="mt-2 text-sm text-muted-foreground">{d as string}</p></div>;
          })}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">No partnerships have been formally established.</p>
      </Section>
    </>
  );
}
