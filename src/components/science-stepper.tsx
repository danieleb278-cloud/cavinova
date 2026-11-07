import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageLightbox } from "@/components/image-lightbox";
import { scienceSteps } from "@/lib/research-visuals";

export function ScienceStepper() {
  const [selected, setSelected] = useState(0);
  const step = scienceSteps[selected] ?? scienceSteps[0];
  return <div className="mt-8 grid items-start gap-8 md:grid-cols-[1fr_1.5fr]">
    <div className="space-y-3" aria-label="Illustrated science sequence">
      {scienceSteps.map((item, i) => <Button key={item.title} variant="ghost" aria-pressed={selected === i} aria-controls="science-illustration" onClick={() => setSelected(i)} className={`h-auto w-full justify-start whitespace-normal rounded-lg border p-4 text-left ${selected === i ? "border-primary bg-accent text-primary" : "bg-card"}`}>
        <span className="mr-4 text-sm tabular-nums">0{i + 1}</span><span className="text-base">{item.title}</span>
      </Button>)}
      <p className="pt-3 text-sm leading-relaxed text-muted-foreground" aria-live="polite">{step.description}</p>
    </div>
    <figure id="science-illustration" className="overflow-hidden rounded-lg border bg-card">
      <ImageLightbox key={step.src} src={step.src} title={step.alt} />
      <figcaption className="border-t px-5 py-4 text-sm text-muted-foreground">Concept illustration · Not to scale · Step {selected + 1} of 4. Proposed effects have not been validated by Cavinova.</figcaption>
    </figure>
  </div>;
}