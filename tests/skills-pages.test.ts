import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("Skills Pages Rendering (/, /en, /skills, /en/skills)", () => {
  const distDir = path.resolve(import.meta.dirname, "../dist");

  describe("Home page Main Stack section (featured technologies)", () => {
    it("renders only featured technologies ordered by order in Spanish home (/index.html)", () => {
      const html = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

      expect(html).toContain("React.js");
      expect(html).toContain("Next.js");
      expect(html).toContain("TypeScript");
      expect(html).toContain("TailwindCSS");

      const posReact = html.indexOf("React.js");
      const posNext = html.indexOf("Next.js");
      const posTS = html.indexOf("TypeScript");
      const posTailwind = html.indexOf("TailwindCSS");

      expect(posReact).toBeLessThan(posNext);
      expect(posNext).toBeLessThan(posTS);
      expect(posTS).toBeLessThan(posTailwind);
    });

    it("renders featured technologies in English home (/en/index.html)", () => {
      const html = fs.readFileSync(
        path.join(distDir, "en/index.html"),
        "utf-8",
      );

      expect(html).toContain("React.js");
      expect(html).toContain("Next.js");
      expect(html).toContain("TypeScript");
      expect(html).toContain("TailwindCSS");
    });
  });

  describe("Skills page (/skills and /en/skills)", () => {
    it("renders the three domain sections in Spanish (/skills/index.html)", () => {
      const html = fs.readFileSync(
        path.join(distDir, "skills/index.html"),
        "utf-8",
      );

      // Section titles
      expect(html).toContain("Tecnologías y herramientas");
      expect(html).toContain("Disciplinas y competencias técnicas");
      expect(html).toContain("Habilidades interpersonales y metodológicas");

      // Technology entries
      expect(html).toContain("Astro");
      expect(html).toContain("TypeScript");
      expect(html).toContain("TailwindCSS");

      // Technical Skill entries
      expect(html).toContain("Desarrollo Frontend");
      expect(html).toContain(
        "Construcción de interfaces interactivas, responsivas y accesibles",
      );

      // Soft Skill entries
      expect(html).toContain("Aprendizaje autónomo peer-to-peer");
      expect(html).toContain(
        "Capacidad forjada en la metodología 42 Madrid para investigar",
      );

      // Dynamic alternate hreflang tags
      expect(html).toContain(
        'rel="alternate" hreflang="es" href="https://jeantivan.dev/skills"',
      );
      expect(html).toContain(
        'rel="alternate" hreflang="en" href="https://jeantivan.dev/en/skills"',
      );
      expect(html).toContain(
        'rel="alternate" hreflang="x-default" href="https://jeantivan.dev/skills"',
      );
    });

    it("renders the three domain sections in English (/en/skills/index.html)", () => {
      const html = fs.readFileSync(
        path.join(distDir, "en/skills/index.html"),
        "utf-8",
      );

      // Section titles
      expect(html).toContain("Technologies");
      expect(html).toContain("tools");
      expect(html).toContain("Technical skills");
      expect(html).toContain("engineering practices");
      expect(html).toContain("Soft skills");
      expect(html).toContain("methodologies");

      // Technical Skill entries in English
      expect(html).toContain("Frontend Development");
      expect(html).toContain(
        "Building interactive, responsive, and accessible interfaces",
      );

      // Soft Skill entries in English
      expect(html).toContain("Peer-to-peer autonomous learning");
      expect(html).toContain(
        "Ability forged through 42 Madrid methodology to research",
      );

      // Dynamic alternate hreflang tags
      expect(html).toContain(
        'rel="alternate" hreflang="es" href="https://jeantivan.dev/skills"',
      );
      expect(html).toContain(
        'rel="alternate" hreflang="en" href="https://jeantivan.dev/en/skills"',
      );
      expect(html).toContain(
        'rel="alternate" hreflang="x-default" href="https://jeantivan.dev/skills"',
      );
    });
  });
});
