import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, Eyebrow, seo } from "@/components/site";
import { providerEconomics, PATIENT_PRICE, KIT_COST, MONTHLY_LEASE } from "@/lib/economics";

export const Route = createFileRoute("/opportunity")({
  head: () => seo("Commercial Opportunity — Cavinova", "Market sizing, razor-and-blade model, provider unit economics and five-year commercialization roadmap for Cavinova."),
  component: Opportunity,
});

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const vols = [5, 10, 25, 50];

function Opportunity() {
  const [v, setV] = useState(25);
  const e = providerEconomics(v);
  return (
    <>
      <PageHero eyebrow="Commercial Opportunity" title="4,184+ eligible U.S. aesthetic practices">
        Medical spas, dermatology and high-end aesthetic practices already performing equipment-assisted facial treatments.
      </PageHero>

      <Section>
        <Eyebrow>Market analysis</Eyebrow>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            ["TAM", "4,184 locations", "10,488 U.S. med spas × 57% offering hydradermabrasion × 70% qualification ≈ $125.5M equipment + $50.2M/yr consumables."],
            ["SAM", "≈1,673 locations", "40% of TAM serviceable ≈ $50.2M equipment + $20.1M/yr recurring consumables."],
            ["SOM", "≈84 locations", "≈5% of SAM captured within the first three commercial years."],
          ].map(([k, v2, d]) => (
            <div key={k} className="rounded-3xl border bg-card p-7 shadow-soft">
              <p className="font-serif text-5xl text-primary">{k}</p><p className="mt-3 text-xl font-semibold">{v2}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Figures are planning estimates from the Cavinova business plan (AmSpa 2024–2025 data plus team assumptions) and require further validation.</p>
      </Section>

      <Section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border bg-card p-8"><Eyebrow>The razor</Eyebrow><h3 className="mt-3 text-3xl">Capital equipment</h3><p className="mt-2 text-muted-foreground">Console sales or leases at a $45,000 unit target — a preliminary planning estimate from the Cavinova MBS business plan, subject to validation.</p></div>
        <div className="rounded-3xl border bg-secondary/50 p-8"><Eyebrow>The blade</Eyebrow><h3 className="mt-3 text-3xl">Recurring consumables</h3><p className="mt-2 text-muted-foreground">{usd(KIT_COST)} treatment kit (wholesale to provider), supporting a {usd(PATIENT_PRICE)} patient treatment — illustrative financial assumptions, subject to validation.</p></div>
      </Section>

      <Section>
        <Eyebrow>Provider unit economics calculator</Eyebrow>
        <div className="mt-6 flex flex-wrap gap-2">
          {vols.map((n) => (
            <button key={n} onClick={() => setV(n)} className={`rounded-full border px-5 py-2 text-sm ${v === n ? "border-primary bg-primary text-primary-foreground" : "bg-card"}`}>{n} / month</button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {[["Revenue", usd(e.revenue)], ["Consumables", usd(e.consumables)], ["Lease (illustrative)", usd(e.lease)], ["Gross clinic contribution", usd(e.contribution)], ["Console payback", `${e.paybackMonths.toFixed(1)} mo`]].map(([l, val]) => (
            <div key={l} className="rounded-2xl border bg-card p-5"><p className="text-xs text-muted-foreground">{l}</p><p className="mt-1 font-serif text-3xl">{val}</p></div>
          ))}
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted text-left"><tr>{["Treatments/mo", "Revenue", "Consumables", "Lease", "Gross contribution", "Payback (purchase)"].map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
            <tbody>
              {vols.map((n) => { const r = providerEconomics(n); return (
                <tr key={n} className={`border-t ${n === v ? "bg-accent" : ""}`}>
                  <td className="px-4 py-3">{n}</td><td className="px-4 py-3">{usd(r.revenue)}</td><td className="px-4 py-3">{usd(r.consumables)}</td>
                  <td className="px-4 py-3">{usd(r.lease)}</td><td className="px-4 py-3 font-semibold">{usd(r.contribution)}</td><td className="px-4 py-3">{r.paybackMonths.toFixed(1)} mo</td>
                </tr>); })}
            </tbody>
          </table>
        </div>
        <div className="mt-6 space-y-2 rounded-2xl border border-dashed border-rose/50 bg-accent/50 p-5 text-xs text-muted-foreground">
          <p><strong className="text-foreground">Inputs &amp; assumptions:</strong> {usd(PATIENT_PRICE)} treatment fee, {usd(KIT_COST)} consumable kit per treatment, and an illustrative monthly equipment lease of {usd(MONTHLY_LEASE)}. Payback = $45,000 console target ÷ monthly contribution (revenue − consumables − lease).</p>
          <p><strong className="text-foreground">Included costs:</strong> consumable kits and the illustrative equipment lease only.</p>
          <p><strong className="text-foreground">Excluded costs:</strong> clinician labor, salon/clinic overhead, facility rent, maintenance, equipment insurance, financing costs, and taxes.</p>
          <p><strong className="text-foreground">Important:</strong> Calculated contribution margin is gross clinic contribution, not net profit. Results are illustrative estimates and do not represent guaranteed financial returns.</p>
        </div>
      </Section>

      <Section>
        <Eyebrow>5-year staged roadmap</Eyebrow>
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {[
            ["Year 1", "IP Option & Feasibility", "Pursue IP access; technical feasibility studies."],
            ["Year 2", "Prototyping & Licensing", "Integrated prototype; license negotiation."],
            ["Year 3", "Regulatory Testing", "Verification, validation, manufacturing prep."],
            ["Year 4", "Pilot Manufacturing", "Regulatory completion; controlled launch."],
            ["Year 5", "Commercial Scale", "Market expansion; recurring revenue growth."],
          ].map(([y, t, d]) => (
            <li key={y} className="relative rounded-3xl border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-deep">{y} · Stage gate</p>
              <h3 className="mt-2 text-2xl">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
