import { references, type ReferenceId } from "@/lib/references";

function revealReference(id: string) {
  const target = document.getElementById(id);
  const details = target?.closest("details");
  if (details) details.open = true;
}

export function Cite({ ids }: { ids: readonly ReferenceId[] }) {
  return (
    <sup className="ml-1 inline-flex gap-1 align-super text-xs font-semibold">
      {ids.map((id) => {
        const number = references[id].number;
        const target = `reference-${id}`;
        return (
          <a
            key={id}
            href={`#${target}`}
            onClick={() => revealReference(target)}
            aria-label={`Go to reference ${number}`}
            className="rounded-sm px-1 underline decoration-primary underline-offset-2 focus-visible:outline-2"
          >
            [{number}]
          </a>
        );
      })}
    </sup>
  );
}

export function ReferencesLink() {
  return (
    <a
      href="#page-references"
      onClick={() => revealReference("page-references")}
      className="inline-flex min-h-11 items-center font-semibold underline decoration-primary underline-offset-4 sm:ml-5"
    >
      Research references
    </a>
  );
}

export function References({ ids }: { ids: readonly ReferenceId[] }) {
  return (
    <section aria-label="References" className="mx-auto max-w-7xl px-4 py-8">
      <details id="page-references" className="scroll-mt-28 border-t">
        <summary className="min-h-11 cursor-pointer py-3 font-serif text-2xl">References</summary>
        <ol className="space-y-3 pb-3 leading-relaxed text-muted-foreground">
          {ids.map((id) => (
            <li key={id} id={`reference-${id}`} tabIndex={-1} className="scroll-mt-28">
              <a
                href={references[id].url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center underline decoration-primary underline-offset-2"
              >
                [{references[id].number}] {references[id].label}
              </a>
            </li>
          ))}
        </ol>
      </details>
    </section>
  );
}
