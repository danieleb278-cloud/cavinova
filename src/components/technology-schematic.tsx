import { ArrowRight, ArrowDown, FlaskConical, Radio, Activity } from "lucide-react";

export function TechnologySchematic() {
  const stages = [
    { label: "Candidate formulation", icon: FlaskConical },
    { label: "Ultrasound applicator", icon: Radio },
    { label: "Response to measure", icon: Activity },
  ];
  return <figure aria-label="Concept illustration: candidate formulation and ultrasound applicator, with a response to measure" className="border-y bg-secondary/30 px-4 py-10 md:px-8">
    <figcaption className="mb-8 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">Concept illustration</figcaption>
    <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
      {stages.map(({ label, icon: Icon }, index) => <div key={label} className="contents">
        {index > 0 && <><ArrowRight aria-hidden className="hidden h-6 w-6 shrink-0 text-muted-foreground md:block" /><ArrowDown aria-hidden className="h-6 w-6 text-muted-foreground md:hidden" /></>}
        <div className="flex w-full max-w-64 flex-col items-center gap-4 text-center">
          <span className="grid h-20 w-20 place-items-center rounded-full border border-teal bg-card"><Icon aria-hidden className="h-8 w-8 text-primary" /></span>
          <p className="font-serif text-2xl leading-tight">{label}</p>
        </div>
      </div>)}
    </div>
  </figure>;
}