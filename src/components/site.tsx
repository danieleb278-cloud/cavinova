import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ImagePlus, Menu, X, FlaskConical } from "lucide-react";
import handheld from "@/assets/Cavinova_Customizable_Treatment_System.png.asset.json";
import consoleSys from "@/assets/Cavinova_Customizable_Treatment_System_1.png.asset.json";
import monogram from "@/assets/cavinova_emblem.png.asset.json";
import wordmark from "@/assets/cavinova_wordmark.png.asset.json";

export const diagrams = { handheld: handheld.url, console: consoleSys.url };

const nav = [
  { to: "/", label: "Home" },
  { to: "/science", label: "Science" },
  { to: "/platform", label: "Product Concept" },
  { to: "/opportunity", label: "Opportunity" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function ConceptBanner() {
  return (
    <div className="bg-secondary text-secondary-foreground">
      <p className="mx-auto max-w-7xl px-4 py-2 text-center text-xs tracking-wide">
        <FlaskConical className="mr-1.5 inline h-3.5 w-3.5 text-teal-deep" />
        Conceptual Venture • Rutgers MBS Capstone — pre-commercial academic exploration. No products are for sale.
      </p>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="shrink-0" aria-label="Cavinova home">
          <img src={monogram.url} alt="Cavinova" className="h-10 w-auto md:h-12" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-full px-3.5 py-2 text-sm text-muted-foreground transition hover:text-primary"
              activeProps={{ className: "bg-accent text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col border-t px-4 py-2 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 text-sm"
              activeOptions={{ exact: n.to === "/" }} activeProps={{ className: "text-primary font-medium" }}>
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-[1fr_2fr]">
        <div>
          <img src={wordmark.url} alt="Cavinova — Advanced Acoustic Aesthetics" className="h-16 w-auto" />
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-teal-deep">Science in Harmony with Skin</p>
        </div>
        <div className="space-y-4 text-sm text-muted-foreground">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {nav.map((n) => <Link key={n.to} to={n.to} className="hover:text-primary">{n.label}</Link>)}
          </div>
          <p className="rounded-xl border border-dashed border-rose/50 bg-accent/60 p-4 text-xs leading-relaxed">
            <strong className="text-foreground">Disclosure:</strong> Cavinova is a proposed venture developed for the Rutgers
            University MBS Capstone program. Technologies and products presented are conceptual and under evaluation. Cavinova
            does not currently hold rights to the referenced intellectual property (U.S. Patent Application Publication No.
            US20250073439A1, associated with inventor John H. Shadduck).
          </p>
          <p className="text-xs">© {new Date().getFullYear()} Cavinova (conceptual) · New Jersey, USA</p>
        </div>
      </div>
    </footer>
  );
}

export function Waveform({ className = "" }: { className?: string }) {
  const bars = Array.from({ length: 29 }, (_, i) => {
    const d = Math.abs(i - 14);
    return Math.max(6, 100 * Math.exp(-(d * d) / 40));
  });
  return (
    <svg viewBox="0 0 290 100" className={className} aria-hidden>
      {bars.map((h, i) => (
        <rect key={i} x={i * 10 + 3} y={50 - h / 2} width="4" height={h} rx="2" fill="var(--teal)" opacity={0.35 + h / 160} />
      ))}
    </svg>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-deep">{children}</p>;
}

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-hero">
      <Waveform className="pointer-events-none absolute -right-10 top-6 h-40 w-[28rem] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-4 max-w-4xl text-4xl leading-tight md:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg text-muted-foreground">{children}</div>}
      </div>
    </section>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`mx-auto max-w-7xl px-4 py-16 ${className}`}>{children}</section>;
}

export function Placeholder({ title, hint, className = "" }: { title: string; hint: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-rose/50 bg-accent/40 p-8 text-center ${className}`}>
      <span className="grid h-12 w-12 place-items-center rounded-full bg-card text-primary shadow-soft"><ImagePlus className="h-5 w-5" /></span>
      <p className="font-serif text-xl">{title}</p>
      <p className="max-w-xs text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

export function ConceptLabel() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-card px-3 py-1 text-xs font-semibold text-primary">
      Conceptual Product Visualization — Not a Commercial Product
    </span>
  );
}

export function Diagram({ src, title, caption }: { src: string; title: string; caption: string }) {
  return (
    <figure className="overflow-hidden rounded-3xl border bg-card shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b px-5 py-3">
        <p className="font-serif text-xl">{title}</p>
        <ConceptLabel />
      </div>
      <a href={src} target="_blank" rel="noreferrer"><img src={src} alt={title} className="w-full" loading="lazy" /></a>
      <figcaption className="px-5 py-3 text-xs text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

export function seo(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
