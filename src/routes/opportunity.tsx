import { createFileRoute, redirect } from "@tanstack/react-router";
import { seo } from "@/components/site";

export const Route = createFileRoute("/opportunity")({
  staticData: { sitemap: false },
  head: () => seo("Development — Cavinova", "Cavinova’s development priorities and concept-stage feasibility planning."),
  beforeLoad: () => { throw redirect({ to: "/development", statusCode: 301 }); },
});
