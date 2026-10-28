import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { sitemapStaticPaths, sitemapXML } from "@/lib/sitemap";

describe("Cavinova public sitemap", () => {
  it("includes exactly the six public pages, excluding the sitemap itself", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(sitemapStaticPaths(router)).toEqual(["/", "/contact", "/opportunity", "/platform", "/science", "/team"]);
  });

  it("uses the published origin without invented content-change dates", () => {
    const xml = sitemapXML("https://cavinova.lovable.app", [{ path: "/" }, { path: "/science" }]);
    expect(xml).toContain("<loc>https://cavinova.lovable.app/</loc>");
    expect(xml).toContain("<loc>https://cavinova.lovable.app/science</loc>");
    expect(xml).not.toContain("<lastmod>");
  });
});