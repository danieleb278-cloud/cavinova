import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, Eyebrow, Diagram, seo } from "@/components/site";
import { providerEconomics, PATIENT_PRICE, KIT_COST, MONTHLY_LEASE, CONSOLE_PRICE, DEFAULT_MONTHLY_TREATMENTS } from "@/lib/economics";
import { Cite, References } from "@/components/references";
import { US_MED_SPAS_2023, HYDRADERMABRASION_SHARE, TEAM_QUALIFICATION_SHARE, TEAM_SERVICEABILITY_SHARE, TEAM_CAPTURE_SHARE, TAM_LOCATIONS, SAM_LOCATIONS, SOM_LOCATIONS, ANNUAL_KITS_PER_LOCATION, ANNUAL_KIT_REVENUE_PER_LOCATION, TAM_EQUIPMENT_POTENTIAL, SAM_EQUIPMENT_POTENTIAL, TAM_ANNUAL_KIT_SCENARIO, SAM_ANNUAL_KIT_SCENARIO } from "@/lib/market";
import strategy from "@/assets/cavinova_commercialization_strategy.png.asset.json";
import roadmap from "@/assets/cavinova_five_year_roadmap.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/opportunity")({
  staticData: { sitemap: true },
  head: () => seo("Commercial Opportunity — Cavinova", "Illustrative medical-spa market screening, separate purchase and lease economics, and conditional capstone commercialization plans for Cavinova."),
  component: Opportunity,
});

const usd = (n: number) => n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
const millions = (n: number) => `$${(n / 1000000).toLocaleString("en-US", { maximumFractionDigits: 3 })}M`;
const count = (n: number) => n.toLocaleString("en-US");
const vols = [5, 10, 25, 50];

function Opportunity() {
  const [v, setV] = useState(DEFAULT_MONTHLY_TREATMENTS);
  const e = providerEconomics(v);
  return (
    <>
      <PageHero eyebrow="Commercial Opportunity" title={`Approximately ${count(TAM_LOCATIONS)} potentially addressable medical-spa locations`}>
        An illustrative U.S. med-spa screening estimate based on reported industry inputs and team planning assumptions, not confirmed provider eligibility.
      </PageHero>

      <Section>
        <Eyebrow>Market analysis</Eyebrow>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {[
            ["TAM", `${count(TAM_LOCATIONS)} locations`, `${count(US_MED_SPAS_2023)} med spas × ${HYDRADERMABRASION_SHARE * 100}% hydradermabrasion proxy × ${TEAM_QUALIFICATION_SHARE * 100}% team qualification assumption. ${millions(TAM_EQUIPMENT_POTENTIAL)} one-time equipment potential; ${millions(TAM_ANNUAL_KIT_SCENARIO)}/year illustrative kits scenario.`],
            ["SAM", `${count(SAM_LOCATIONS)} locations`, `${TEAM_SERVICEABILITY_SHARE * 100}% of rounded TAM: team serviceability assumption. ${millions(SAM_EQUIPMENT_POTENTIAL)} one-time equipment potential; ${millions(SAM_ANNUAL_KIT_SCENARIO)}/year illustrative kits scenario.`],
            ["SOM", `${count(SOM_LOCATIONS)} locations`, `${TEAM_CAPTURE_SHARE * 100}% of rounded SAM: illustrative team capture assumption, not an adoption forecast.`],
          ].map(([k, v2, d]) => (
            <div key={k} className="rounded-3xl border bg-card p-7 shadow-soft">
              <p className="font-serif text-5xl text-primary">{k}</p><p className="mt-3 text-xl font-semibold">{v2}</p>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Source inputs: {count(US_MED_SPAS_2023)} U.S. med spas in 2023, reported by AmSpa in 2024.<Cite ids={["E"]} /> Hydradermabrasion share: {HYDRADERMABRASION_SHARE * 100}%.<Cite ids={["F"]} /> This service is a screening proxy, not proof of Cavinova adoption or eligibility; the base universe includes med spas only.</p>
        <p className="mt-3 text-xs text-muted-foreground">Qualification ({TEAM_QUALIFICATION_SHARE * 100}%), serviceability ({TEAM_SERVICEABILITY_SHARE * 100}%) and capture ({TEAM_CAPTURE_SHARE * 100}%) are team planning assumptions, not AmSpa findings. Counts are rounded sequentially. Equipment potential assumes one {usd(CONSOLE_PRICE)} console per location and is one-time, not annual revenue.</p>
        <p className="mt-3 text-xs text-muted-foreground">Annual consumables use the calculator’s default team scenario of {DEFAULT_MONTHLY_TREATMENTS} treatments/month: {ANNUAL_KITS_PER_LOCATION} kits/year/location at {usd(KIT_COST)}/kit, or {usd(ANNUAL_KIT_REVENUE_PER_LOCATION)}/year/location. These illustrative scenarios are not forecasts and require validation.</p>
      </Section>

      <Section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border bg-card p-8"><Eyebrow>The razor</Eyebrow><h3 className="mt-3 text-3xl">Capital equipment</h3><p className="mt-2 text-muted-foreground">Console sales or leases at a {usd(CONSOLE_PRICE)} unit target — a preliminary planning estimate from the Cavinova MBS business plan, subject to validation.</p></div>
        <div className="rounded-3xl border bg-secondary/50 p-8"><Eyebrow>The blade</Eyebrow><h3 className="mt-3 text-3xl">Recurring consumables</h3><p className="mt-2 text-muted-foreground">{usd(KIT_COST)} treatment kit (wholesale to provider), supporting a {usd(PATIENT_PRICE)} patient treatment — illustrative financial assumptions, subject to validation.</p></div>
      </Section>

      <Section>
        <Eyebrow>Provider unit economics calculator</Eyebrow>
        <div className="mt-6 flex flex-wrap gap-2">
          {vols.map((n) => (
            <Button variant="ghost" key={n} aria-label={`${n} treatments per month`} aria-pressed={v === n} onClick={() => setV(n)} className={`h-auto rounded-full border px-5 py-2 text-sm ${v === n ? "border-primary bg-primary text-primary-foreground" : "bg-card"}`}>{n} / month</Button>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[["Monthly revenue", usd(e.revenue)], ["Monthly consumables", usd(e.consumables)], ["Monthly contribution before equipment financing", usd(e.contributionBeforeFinancing)], ["Simplified purchase payback", `${e.purchasePaybackMonths.toFixed(1)} mo`], ["Monthly lease (illustrative)", usd(e.lease)], ["Monthly lease scenario contribution", usd(e.leaseContribution)]].map(([l, val]) => (
            <div key={l} className="rounded-2xl border bg-card p-5"><p className="text-xs text-muted-foreground">{l}</p><p className="mt-1 font-serif text-3xl">{val}</p></div>
          ))}
        </div>
        <div className="mt-8 overflow-x-auto rounded-2xl border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-muted text-left"><tr>{["Treatments/mo", "Revenue", "Consumables", "Contribution before financing", "Purchase payback", "Lease/mo", "Lease scenario contribution"].map((h) => <th key={h} className="px-4 py-3 font-semibold">{h}</th>)}</tr></thead>
            <tbody>
              {vols.map((n) => { const r = providerEconomics(n); return (
                <tr key={n} className={`border-t ${n === v ? "bg-accent" : ""}`}>
                  <td className="px-4 py-3">{n}</td><td className="px-4 py-3">{usd(r.revenue)}</td><td className="px-4 py-3">{usd(r.consumables)}</td>
                  <td className="px-4 py-3 font-semibold">{usd(r.contributionBeforeFinancing)}</td><td className="px-4 py-3">{r.purchasePaybackMonths.toFixed(1)} mo</td><td className="px-4 py-3">{usd(r.lease)}</td><td className="px-4 py-3">{usd(r.leaseContribution)}</td>
                </tr>); })}
            </tbody>
          </table>
        </div>
        <div className="mt-6 space-y-2 rounded-2xl border border-dashed border-rose/50 bg-accent/50 p-5 text-xs text-muted-foreground">
          <p><strong className="text-foreground">Inputs &amp; assumptions:</strong> {usd(PATIENT_PRICE)} treatment fee, {usd(KIT_COST)} consumable kit per treatment, and a {usd(CONSOLE_PRICE)} console purchase or an alternative illustrative {usd(MONTHLY_LEASE)}/month lease. Monthly contribution before equipment financing = treatments × ({usd(PATIENT_PRICE)} − {usd(KIT_COST)}). Simplified purchase payback = {usd(CONSOLE_PRICE)} ÷ that contribution, with no lease subtraction. Lease scenario contribution subtracts {usd(MONTHLY_LEASE)} separately.</p>
          <p><strong className="text-foreground">Included costs:</strong> consumable kits; the illustrative equipment lease is included only in the lease scenario. Simplified purchase payback compares the console purchase price with pre-financing monthly contribution.</p>
          <p><strong className="text-foreground">Excluded costs:</strong> clinician labor, salon/clinic overhead, facility rent, maintenance, equipment insurance, financing costs, and taxes.</p>
          <p><strong className="text-foreground">Important:</strong> Calculated contribution margin is gross clinic contribution, not net profit. Results are illustrative estimates and do not represent guaranteed financial returns.</p>
        </div>
      </Section>

      <Section>
        <Eyebrow>Commercialization strategy</Eyebrow>
        <h2 className="mt-3 text-4xl">Three potential paths — team-preferred strategy</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">The business plan evaluates three routes for commercializing ultrasound-assisted topical delivery, conditional on appropriate IP access and technical, regulatory and commercial feasibility.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            ["Option 1 — Integrated Device & Serum Platform", "Cavinova would develop the complete treatment system; revenue from device sales/leasing plus recurring serum sales. Highest control and strongest long-term platform potential. Investment: High · Control: High.", true],
            ["Option 2 — Serum-Focused Partnership", "Cavinova would develop proprietary serum formulations while an established partner would supply or adapt hardware. Lower hardware burden, but shared control and partner dependence. Investment: Moderate · Control: Shared.", false],
            ["Option 3 — Technology Sublicensing", "Cavinova would work with an established industry company that would lead development, manufacturing and any authorized launch. Lower direct responsibility, but reduced control and upside. Investment: Lower · Control: Limited.", false],
          ].map(([t, d, primary]) => (
            <div key={t as string} className={`rounded-3xl border p-7 ${primary ? "border-teal/50 bg-secondary/40 shadow-soft" : "bg-card"}`}>
              {primary ? <p className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Team-preferred strategy</p> : null}
              <h3 className="text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Team preference: pursue the integrated device-and-serum platform, while retaining the other models as contingency options if technical, regulatory, or commercial conditions change.</p>
        <div className="mt-8">
          <Diagram src={strategy.url} title="Cavinova Commercialization Strategy Options" caption="Three potential paths for commercializing ultrasound-assisted topical delivery technology. Conceptual illustration; proposed features require engineering validation. Embedded wording about licensed rights or a selected strategy is conceptual: no licensing agreement is in place, and this is the team’s preferred conditional path." />
        </div>
      </Section>

      <Section>
        <Eyebrow>5-year staged roadmap</Eyebrow>
        <p className="mt-3 text-sm text-muted-foreground">Years are relative to an assumed project start, not committed calendar dates. Each stage would depend on feasibility, funding, appropriate IP access and required authorizations.</p>
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {[
            ["Year 1", "IP Option & Feasibility", "Would pursue IP access and technical feasibility studies."],
            ["Year 2", "Prototyping & Licensing", "Would develop an integrated prototype and negotiate appropriate IP rights."],
            ["Year 3", "Regulatory Testing", "Would undertake verification, validation and manufacturing preparation."],
            ["Year 4", "Target Regulatory Milestone", "Potential pilot manufacturing and launch contingent on required authorization."],
            ["Year 5", "Commercial Scale", "Would consider expansion and recurring consumables after an authorized launch."],
          ].map(([y, t, d]) => (
            <li key={y} className="relative rounded-3xl border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-teal-deep">{y} · Stage gate</p>
              <h3 className="mt-2 text-2xl leading-tight [overflow-wrap:anywhere]">{t}</h3><p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <Diagram enlarge src={roadmap.url} title="Five-Year Commercialization Roadmap" caption="Planned stage-gated milestones from the Cavinova MBS business plan. Illustrative planning timeline only; no IP license, regulatory authorization, or commercial launch has occurred." />
        </div>
      </Section>
      <References ids={["E", "F"]} />
    </>
  );
}
