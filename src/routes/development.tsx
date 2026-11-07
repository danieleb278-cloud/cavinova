import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Radio, ShieldQuestion, MessagesSquare } from "lucide-react";
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
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        {developmentPriorities.map((priority, i) => {
          const Icon = icons[i] ?? FlaskConical;
          return <article key={priority.title} className="border-t pt-6">
            <div className="flex items-center gap-3"><Icon aria-hidden className="h-6 w-6 text-primary" /><Eyebrow>0{i + 1} · Planned area</Eyebrow></div>
            <h2 className="mt-4 text-3xl">{priority.title}</h2><p className="mt-4 text-lg leading-relaxed text-muted-foreground">{priority.description}</p>
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
