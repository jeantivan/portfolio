import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("Static Build Output (dist/)", () => {
  const distDir = path.resolve(import.meta.dirname, "../dist");

  it("serves Spanish home directly at /index.html without meta refresh redirect", () => {
    const indexPath = path.join(distDir, "index.html");
    expect(fs.existsSync(indexPath)).toBe(true);

    const html = fs.readFileSync(indexPath, "utf-8");
    expect(html).toContain('lang="es"');
    expect(html).not.toContain('http-equiv="refresh"');
  });

  it("serves English home at /en/index.html with lang='en'", () => {
    const enIndexPath = path.join(distDir, "en/index.html");
    expect(fs.existsSync(enIndexPath)).toBe(true);

    const html = fs.readFileSync(enIndexPath, "utf-8");
    expect(html).toContain('lang="en"');
  });

  it("includes dynamic hreflang alternate links on root and english home", () => {
    const esHtml = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");
    expect(esHtml).toMatch(/<link\s+rel="alternate"\s+hreflang="es"/);
    expect(esHtml).toMatch(/<link\s+rel="alternate"\s+hreflang="en"/);
    expect(esHtml).toMatch(/<link\s+rel="alternate"\s+hreflang="x-default"/);

    const enHtml = fs.readFileSync(
      path.join(distDir, "en/index.html"),
      "utf-8",
    );
    expect(enHtml).toMatch(/<link\s+rel="alternate"\s+hreflang="es"/);
    expect(enHtml).toMatch(/<link\s+rel="alternate"\s+hreflang="en"/);
  });

  it("generates canonical static routes for projects, skills, and contact in both languages", () => {
    const requiredRoutes = [
      "projects/index.html",
      "en/projects/index.html",
      "skills/index.html",
      "en/skills/index.html",
      "contact/index.html",
      "en/contact/index.html",
    ];

    for (const route of requiredRoutes) {
      const fullPath = path.join(distDir, route);
      expect(
        fs.existsSync(fullPath),
        `Expected ${route} to exist in dist`,
      ).toBe(true);
    }
  });
});
