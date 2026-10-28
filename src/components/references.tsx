import { references, type ReferenceId } from "@/lib/references";

export function Cite({ ids }: { ids: ReferenceId[] }) {
  return <sup className="ml-1 inline-flex gap-1 text-xs font-medium text-teal-deep">
    {ids.map((id) => <a key={id} href={references[id].url} target="_blank" rel="noreferrer" aria-label={`Reference ${references[id].number}: ${references[id].label}`} className="underline underline-offset-2">[{references[id].number}]</a>)}
  </sup>;
}

export function References({ ids }: { ids: ReferenceId[] }) {
  return <section aria-label="References" className="mx-auto max-w-7xl px-4 py-8">
    <h2 className="font-serif text-2xl">References</h2>
    <ul className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">
      {ids.map((id) => <li key={id}><a href={references[id].url} target="_blank" rel="noreferrer" className="hover:text-primary underline underline-offset-2">[{references[id].number}] {references[id].label}</a></li>)}
    </ul>
  </section>;
}