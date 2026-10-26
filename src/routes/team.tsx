import { createFileRoute } from "@tanstack/react-router";
import { Cog, Scale, FlaskConical, Factory } from "lucide-react";
import { PageHero, Section, Eyebrow, Placeholder, seo } from "@/components/site";

export const Route = createFileRoute("/team")({
  head: () => seo("Founding Team — Cavinova", "Meet the interdisciplinary Rutgers MBS Capstone team behind the Cavinova concept."),
  component: Team,
});

const team = [
  { n: "Danielle Bosworth", r: "Project Manager & Business Plan Lead", b: "Product Design MBS concentration. Licensed cosmetologist with salon & spa operations, B2B sales and treatment-systems experience." },
  { n: "Victoria DeMeola", r: "Co-Founder, Technology & R&D Lead", b: "Biotechnology, genomics, molecular diagnostics and lab operations; leads foundational technology evaluation." },
  { n: "Qiwei Miao", r: "Co-Founder, Market Strategy & Financial Planning Lead", b: "Biology and personal care science; former L'Oréal Research & Innovation experience in formulation and claims evaluation." },
];

function Team() {
  return (
    <>
      <PageHero eyebrow="Founding Team" title="Interdisciplinary by design">Rutgers University Master of Business and Science — Capstone team.</PageHero>
      <Section className="grid gap-6 md:grid-cols-3">
        {team.map((m) => (
          <article key={m.n} className="overflow-hidden rounded-3xl border bg-card">
            <Placeholder title="Portrait" hint="Upload a 4:5 professional headshot, soft neutral background." className="aspect-[4/5] rounded-none border-0 border-b-2" />
            <div className="p-6"><h3 className="text-2xl">{m.n}</h3><p className="mt-1 text-sm font-semibold text-primary">{m.r}</p><p className="mt-3 text-sm text-muted-foreground">{m.b}</p></div>
          </article>
        ))}
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
