import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("Projects and Case Study Pages (Seam 2)", () => {
  const distDir = path.resolve(import.meta.dirname, "../dist");
  const projectContentDir = path.resolve(
    import.meta.dirname,
    "../src/content/project",
  );

  describe("Legacy structure removal", () => {
    it("has removed legacy es and en subdirectories from src/content/project", () => {
      expect(fs.existsSync(path.join(projectContentDir, "es"))).toBe(false);
      expect(fs.existsSync(path.join(projectContentDir, "en"))).toBe(false);
    });
  });

  describe("Route generation based on Case Study presence", () => {
    it("generates /projects/index.html and /en/projects/index.html", () => {
      expect(fs.existsSync(path.join(distDir, "projects/index.html"))).toBe(
        true,
      );
      expect(fs.existsSync(path.join(distDir, "en/projects/index.html"))).toBe(
        true,
      );
    });

    it("generates detail pages for projects with Case Study in both locales", () => {
      expect(
        fs.existsSync(path.join(distDir, "projects/avilatek/index.html")),
      ).toBe(true);
      expect(
        fs.existsSync(path.join(distDir, "en/projects/avilatek/index.html")),
      ).toBe(true);

      expect(
        fs.existsSync(path.join(distDir, "projects/chat-me/index.html")),
      ).toBe(true);
      expect(
        fs.existsSync(path.join(distDir, "en/projects/chat-me/index.html")),
      ).toBe(true);
    });

    it("does NOT generate detail pages for projects without Case Study", () => {
      expect(fs.existsSync(path.join(distDir, "projects/gnl/index.html"))).toBe(
        false,
      );
      expect(
        fs.existsSync(path.join(distDir, "en/projects/gnl/index.html")),
      ).toBe(false);

      expect(
        fs.existsSync(path.join(distDir, "projects/ft-printf/index.html")),
      ).toBe(false);
      expect(
        fs.existsSync(path.join(distDir, "en/projects/ft-printf/index.html")),
      ).toBe(false);

      expect(
        fs.existsSync(path.join(distDir, "projects/portfolio/index.html")),
      ).toBe(false);
      expect(
        fs.existsSync(path.join(distDir, "en/projects/portfolio/index.html")),
      ).toBe(false);
    });
  });

  describe("Case Study localized content and fallback", () => {
    it("renders Spanish Case Study content for /projects/avilatek", () => {
      const html = fs.readFileSync(
        path.join(distDir, "projects/avilatek/index.html"),
        "utf-8",
      );
      expect(html).toContain("Avilatek - Real Estate");
      expect(html).toContain("Vivamus viverra mattis fermentum");
    });

    it("renders English Case Study content from .en.md for /en/projects/avilatek", () => {
      const html = fs.readFileSync(
        path.join(distDir, "en/projects/avilatek/index.html"),
        "utf-8",
      );
      expect(html).toContain("Avilatek - Real Estate");
      expect(html).toContain("Technical Challenges and Architecture");
    });

    it("falls back to Spanish Case Study body for /en/projects/chat-me when .en.md is missing", () => {
      const htmlEs = fs.readFileSync(
        path.join(distDir, "projects/chat-me/index.html"),
        "utf-8",
      );
      const htmlEn = fs.readFileSync(
        path.join(distDir, "en/projects/chat-me/index.html"),
        "utf-8",
      );

      // Title is localized
      expect(htmlEs).toContain("Chat me - Clon de WhatsApp web");
      expect(htmlEn).toContain("Chat me - WhatsApp Web Clone");

      // Body in English falls back cleanly to the Spanish markdown content
      expect(htmlEn).toContain("Vivamus viverra mattis fermentum");
    });
  });

  describe("Projects list page (/projects and /en/projects)", () => {
    it("renders the 3 sections with mutual exclusivity and correct ordering in Spanish", () => {
      const html = fs.readFileSync(
        path.join(distDir, "projects/index.html"),
        "utf-8",
      );

      // Section titles
      expect(html).toContain("Todos los proyectos que he creado");
      expect(html).toContain("42 Madrid");
      expect(html).toContain("Otros proyectos pequeños");

      // Check card order in Featured Projects
      const posAvilatek = html.indexOf("Avilatek - Real Estate");
      const posChatMe = html.indexOf("Chat me - Clon de WhatsApp web");
      expect(posAvilatek).toBeGreaterThan(-1);
      expect(posChatMe).toBeGreaterThan(-1);
      expect(posAvilatek).toBeLessThan(posChatMe);

      // Check 42 projects section
      const posGnl = html.indexOf("Get Next Line");
      const posFtPrintf = html.indexOf("ft_printf");
      expect(posGnl).toBeGreaterThan(-1);
      expect(posFtPrintf).toBeGreaterThan(-1);
      expect(posGnl).toBeLessThan(posFtPrintf);

      // Check Other projects section
      const posPortfolio = html.indexOf("Portafolio Personal");
      expect(posPortfolio).toBeGreaterThan(-1);

      // Ensure 42 projects are not duplicated in other projects section
      const otherSectionHtml = html.slice(
        html.indexOf("Otros proyectos pequeños"),
      );
      expect(otherSectionHtml).not.toContain("Get Next Line");
      expect(otherSectionHtml).not.toContain("ft_printf");
    });

    it("renders the 3 sections with mutual exclusivity and English localized titles in /en/projects", () => {
      const html = fs.readFileSync(
        path.join(distDir, "en/projects/index.html"),
        "utf-8",
      );

      expect(html).toContain("All the projects that I");
      expect(html).toContain("42 Madrid");
      expect(html).toContain("Others small projects");

      expect(html).toContain("Chat me - WhatsApp Web Clone");
      expect(html).toContain("Personal Portfolio");

      const otherSectionEn = html.slice(html.indexOf("Others small projects"));
      expect(otherSectionEn).not.toContain("Get Next Line");
      expect(otherSectionEn).not.toContain("ft_printf");
    });

    it("links cards with Case Study to internal routes and cards without Case Study directly to external URLs", () => {
      const htmlEs = fs.readFileSync(
        path.join(distDir, "projects/index.html"),
        "utf-8",
      );

      // With Case Study
      expect(htmlEs).toContain('href="/projects/avilatek"');
      expect(htmlEs).toContain('href="/projects/chat-me"');

      // Without Case Study -> links directly to github or website
      expect(htmlEs).toContain('href="https://github.com/jeantivan/gnl"');
      expect(htmlEs).toContain('href="https://github.com/jeantivan/ft_printf"');
      expect(htmlEs).toContain('href="https://jeantivan.dev"');

      const htmlEn = fs.readFileSync(
        path.join(distDir, "en/projects/index.html"),
        "utf-8",
      );

      // With Case Study in English
      expect(htmlEn).toContain('href="/en/projects/avilatek"');
      expect(htmlEn).toContain('href="/en/projects/chat-me"');

      // Without Case Study in English
      expect(htmlEn).toContain('href="https://github.com/jeantivan/gnl"');
      expect(htmlEn).toContain('href="https://github.com/jeantivan/ft_printf"');
      expect(htmlEn).toContain('href="https://jeantivan.dev"');
    });
  });

  describe("Home page featured projects", () => {
    it("renders only featured projects in Spanish home", () => {
      const html = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

      expect(html).toContain("Avilatek - Real Estate");
      expect(html).toContain("Chat me - Clon de WhatsApp web");
      expect(html).not.toContain("Get Next Line");
      expect(html).not.toContain("Portafolio Personal");
    });

    it("renders only featured projects in English home with English titles", () => {
      const html = fs.readFileSync(
        path.join(distDir, "en/index.html"),
        "utf-8",
      );

      expect(html).toContain("Avilatek - Real Estate");
      expect(html).toContain("Chat me - WhatsApp Web Clone");
      expect(html).not.toContain("Get Next Line");
      expect(html).not.toContain("Personal Portfolio");
    });
  });
});
