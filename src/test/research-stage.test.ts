import { QueryClient } from "@tanstack/react-query";
import { createMemoryHistory, createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { developmentPriorities } from "@/lib/development";
import { inquiryCategories } from "@/lib/inquiry-categories";

describe("research-stage site rules", () => {
  it("permanently redirects the retired opportunity page to development", async () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() }, history: createMemoryHistory({ initialEntries: ["/opportunity"] }) });
    await router.load();
    expect(router.state.location.pathname).toBe("/development");
  });
  it("lists the four planned development areas in order", () => expect(developmentPriorities.map((p) => p.title)).toEqual(["Formulation and packaging", "Device-specific feasibility", "Delivery and safety", "Professional workflow"]));
  it("labels the former licensing option as a research inquiry while keeping its stored value", () => expect(inquiryCategories[1]).toEqual({ label: "Research or Technology Inquiry", value: "Technology & Licensing Discussion" }));
});
