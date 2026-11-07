import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Radio, ShieldQuestion, MessagesSquare, ArrowRight, ArrowDown } from "lucide-react";
import { PageHero, Section, Eyebrow, seo } from "@/components/site";
import { developmentPriorities } from "@/lib/development";

export const Route = createFileRoute("/development")({
  staticData: { sitemap: true },
  head: () => seo("Development — What We Need to Learn Next | Cavinova", "Planned research areas for Cavinova: formulation and packaging, device-specific feasibility, delivery and safety, and professional workflow."),
  component: Development,
});
const icons = [FlaskConical, Radio, ShieldQuestion, MessagesSquare];
function Development() {
  return <>
    <PageHero eyebrow="Development" title="What we need to learn next.">Four planned areas for the Cavinova research-stage concept.</PageHero>
    <Section>
      <Eyebrow>Research planning sequence</Eyebrow>
      <h2 className="mt-3 text-4xl">Four connected areas to investigate</h2>
      <p className="mt-4 text-sm text-muted-foreground">A planning sequence, not a timeline. Findings in any area may inform the others.</p>
      <div className="mt-10 grid gap-x-8 gap-y-10 lg:grid-cols-4" aria-label="Four planned research priorities">
        {developmentPriorities.map((priority, i) => {
          const Icon = icons[i] ?? FlaskConical;
          return <article key={priority.title} className="relative border-t border-teal pt-6">
            <div className="flex items-center gap-3"><span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-teal bg-secondary/50"><Icon aria-hidden className="h-7 w-7 text-primary" /></span><Eyebrow>0{i + 1} · Planned area</Eyebrow></div>
            <h3 className="mt-4 min-h-16 text-2xl leading-tight">{priority.title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{priority.description}</p>
            {i < developmentPriorities.length - 1 && <><ArrowRight aria-hidden className="absolute -right-7 top-11 hidden h-6 w-6 text-teal-deep lg:block" /><ArrowDown aria-hidden className="mx-auto mt-6 h-6 w-6 text-teal-deep lg:hidden" /></>}
          </article>;
        })}
      </div>
    </Section>
    <section className="bg-secondary/35"><Section>
      <Eyebrow>Current stage</Eyebrow>
      <p className="mt-4 max-w-4xl text-lg leading-relaxed text-muted-foreground">Cavinova is at the concept and feasibility-planning stage. Compatibility, safety and effectiveness for the proposed use have yet to be established. Any future product configuration will depend on testing, intellectual-property review and applicable regulatory requirements.</p>
    </Section></section>
  </>;
}
