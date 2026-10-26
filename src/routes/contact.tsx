import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Info, CheckCircle2 } from "lucide-react";
import { PageHero, Section, seo } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => seo("Contact — Cavinova", "Academic, technology, provider-feedback and general inquiries for the Cavinova Rutgers MBS Capstone venture."),
  component: Contact,
});

const EMAIL = "cavinova.capstone@example.com";
const cats = ["Academic / Capstone Inquiry", "Technology & Licensing Discussion", "Aesthetic Provider Feedback", "General Information"];
const field = "w-full rounded-xl border bg-card px-4 py-3 text-sm outline-none focus:border-ring";

function Contact() {
  const [cat, setCat] = useState(cats[0]);
  const [f, setF] = useState({ name: "", email: "", org: "", message: "" });
  const [err, setErr] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.name.trim() || !/^\S+@\S+\.\S+$/.test(f.email) || f.message.trim().length < 10) {
      setErr("Please add your name, a valid email and a message of at least 10 characters.");
      return;
    }
    setErr("");
    const body = `Name: ${f.name}\nEmail: ${f.email}\nOrganization: ${f.org}\nCategory: ${cat}\n\n${f.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`[Cavinova] ${cat}`)}&body=${encodeURIComponent(body)}`;
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
                <button type="button" key={c} onClick={() => setCat(c)} className={`rounded-xl border px-4 py-3 text-left text-sm ${cat === c ? "border-primary bg-accent text-primary" : ""}`}>{c}</button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input className={field} placeholder="Full name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} maxLength={100} />
            <input className={field} placeholder="Email" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} maxLength={150} />
          </div>
          <input className={field} placeholder="Organization / institution (optional)" value={f.org} onChange={(e) => setF({ ...f, org: e.target.value })} maxLength={150} />
          <textarea className={`${field} min-h-36`} placeholder="Your message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} maxLength={2000} />
          {err && <p className="text-sm text-destructive">{err}</p>}
          {sent && <p className="flex items-center gap-2 text-sm text-teal-deep"><CheckCircle2 className="h-4 w-4" /> Your email app should now open with your message ready to send.</p>}
          <button className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">Send inquiry</button>
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
