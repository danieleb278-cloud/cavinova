import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Info, CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { PageHero, Section, seo } from "@/components/site";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => seo("Contact — Cavinova", "Academic, technology, provider-feedback and general inquiries for the Cavinova Rutgers MBS Capstone venture."),
  component: Contact,
});

const EMAIL = "contact.cavinova@gmail.com";
const cats = ["Academic / Capstone Inquiry", "Technology & Licensing Discussion", "Aesthetic Provider Feedback", "General Information"];
const field = "w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none focus:border-ring";

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please add your name.").max(100),
  email: z.string().trim().email("Please add a valid email address.").max(150),
  org: z.string().trim().max(150),
  message: z.string().trim().min(10, "Please add a message of at least 10 characters.").max(2000),
});

function Contact() {
  const [cat, setCat] = useState<string>(cats[0] ?? "General Information");
  const [f, setF] = useState({ name: "", email: "", org: "", message: "" });
  const [website, setWebsite] = useState(""); // honeypot — hidden from real visitors
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (website) return; // bot filled the hidden field — silently drop
    const parsed = inquirySchema.safeParse(f);
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Please review the form.");
      return;
    }
    setErr("");
    setBusy(true);
    const { error } = await supabase.from("contact_submissions").insert({
      category: cat,
      name: parsed.data.name,
      email: parsed.data.email,
      organization: parsed.data.org || null,
      message: parsed.data.message,
    });
    setBusy(false);
    if (error) {
      setErr("Something went wrong submitting your inquiry. Please try again, or email us directly at " + EMAIL + ".");
      return;
    }
    setSent(true);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Start a conversation">Questions about the capstone, the technology or provider workflows are welcome.</PageHero>
      <Section className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={submit} className="space-y-5 rounded-3xl border bg-card p-8 shadow-soft">
          <div>
            <p className="mb-2 text-sm font-semibold">Inquiry category</p>
            <div className="grid gap-2 sm:grid-cols-2">
              {cats.map((c) => (
                <Button variant="ghost" type="button" key={c} aria-pressed={cat === c} onClick={() => setCat(c)} className={`h-auto justify-start whitespace-normal rounded-xl border px-4 py-3 text-left text-sm ${cat === c ? "border-primary bg-accent text-primary" : ""}`}>{c}</Button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="inquiry-name" className="block text-sm font-semibold">Full name</label>
              <input id="inquiry-name" autoComplete="name" className={field} placeholder="Full name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} maxLength={100} />
            </div>
            <div className="space-y-2">
              <label htmlFor="inquiry-email" className="block text-sm font-semibold">Email</label>
              <input id="inquiry-email" autoComplete="email" className={field} placeholder="Email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} maxLength={150} />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="inquiry-organization" className="block text-sm font-semibold">Organization / institution (optional)</label>
            <input id="inquiry-organization" autoComplete="organization" className={field} placeholder="Organization / institution (optional)" value={f.org} onChange={(e) => setF({ ...f, org: e.target.value })} maxLength={150} />
          </div>
          <div className="space-y-2">
            <label htmlFor="inquiry-message" className="block text-sm font-semibold">Your message</label>
            <textarea id="inquiry-message" className={`${field} min-h-36`} placeholder="Your message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} maxLength={2000} />
          </div>
          {/* Honeypot: invisible to visitors, catches bots */}
          <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
          {err && <p className="text-sm text-destructive">{err}</p>}
          {sent ? (
            <p className="flex items-center gap-2 text-sm text-teal-deep"><CheckCircle2 className="h-4 w-4" /> Your inquiry has been submitted.</p>
          ) : (
            <p className="text-xs text-muted-foreground">Your inquiry is submitted through this website. You can also contact the team directly at {EMAIL}.</p>
          )}
          <p className="text-xs text-muted-foreground">We collect your name, email and message to respond to inquiries, along with your chosen category and optional organization. Your submission is not displayed publicly.</p>
          <Button type="submit" disabled={busy || sent} className="flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60">
            {busy && <Loader2 className="h-4 w-4 animate-spin" />}
            {sent ? "Inquiry submitted" : busy ? "Submitting…" : "Submit inquiry"}
          </Button>
        </form>
        <aside className="space-y-5">
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent("Cavinova Academic Inquiry")}`} className="flex items-center gap-3 rounded-3xl border bg-card p-6 hover:border-primary">
            <Mail className="h-6 w-6 text-primary" /><div><p className="font-semibold">Email the team directly</p><p className="text-sm text-muted-foreground">{EMAIL}</p></div>
          </a>
          <div className="rounded-3xl border border-dashed border-rose/50 bg-accent/60 p-6 text-sm text-muted-foreground">
            <Info className="mb-2 h-5 w-5 text-primary" />
            Cavinova is a pre-commercial student venture. We do not accept orders, investment checks, or commercial licensing contracts.
          </div>
        </aside>
      </Section>
    </>
  );
}
