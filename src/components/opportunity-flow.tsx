import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type ThesisStep = { title: string; description: ReactNode };

export function OpportunityFlow({ steps }: { steps: readonly ThesisStep[] }) {
  return (
    <ol
      aria-label="Cavinova opportunity at a glance"
      className="mt-8 grid overflow-hidden rounded-3xl border bg-card shadow-soft lg:grid-cols-4"
    >
      {steps.map(({ title, description }, index) => (
        <li
          key={title}
          className={`relative min-w-0 border-b p-6 last:border-b-0 lg:border-b-0 lg:border-r lg:p-7 lg:last:border-r-0 ${index % 2 === 0 ? "bg-accent/70" : "bg-secondary/45"}`}
        >
          <p className="inline-flex size-9 items-center justify-center rounded-full border bg-card text-sm font-semibold text-teal-deep">
            0{index + 1}
          </p>
          <h3 className="mt-2 text-balance text-2xl">{title}</h3>
          <p className="mt-2 leading-relaxed text-muted-foreground">{description}</p>
          {index < steps.length - 1 && (
            <ArrowRight
              aria-hidden
              className="absolute -bottom-3 left-1/2 z-10 size-6 -translate-x-1/2 rotate-90 rounded-full border bg-card p-1 text-foreground lg:-right-3 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 lg:rotate-0"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
