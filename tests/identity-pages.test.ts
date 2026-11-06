import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("Identity Pages Rendering (/, /en, /contact, /en/contact)", () => {
  const distDir = path.resolve(import.meta.dirname, "../dist");

  describe("Home page (/) and English home (/en)", () => {
    it("renders Profile data in Spanish home (/index.html)", () => {
      const html = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

      // Header CV link in Spanish
      expect(html).toContain('href="/assets/cv-es-jeantivan-dev.pdf?dl="');

      // Hero & Profession in Spanish
      expect(html).toContain("Jean <br />Tivan");
      expect(html).toContain("Desarrollador Web");

      // About me section
      expect(html).toContain("Cras rhoncus tempor augue quis suscipit");
      expect(html).toContain('alt="Foto de perfil de Jean Tivan"');

      // Footer GitHub link
      expect(html).toContain('href="https://github.com/jeantivan"');
    });

    it("renders Profile data in English home (/en/index.html)", () => {
      const html = fs.readFileSync(
        path.join(distDir, "en/index.html"),
        "utf-8",
      );

      // Header CV link in English
      expect(html).toContain('href="/assets/cv-en-jeantivan-dev.pdf?dl="');

      // Hero & Profession in English
      expect(html).toContain("Jean <br />Tivan");
      expect(html).toContain("Web developer");

      // About me section
      expect(html).toContain("Cras rhoncus tempor augue quis suscipit");
      expect(html).toContain('alt="Profile picture of Jean Tivan"');

      // Footer GitHub link
      expect(html).toContain('href="https://github.com/jeantivan"');
    });
  });

  describe("Contact page (/contact) and English contact (/en/contact)", () => {
    it("renders Profile data in Spanish contact (/contact/index.html)", () => {
      const html = fs.readFileSync(
        path.join(distDir, "contact/index.html"),
        "utf-8",
      );

      // Mailto and text
      expect(html).toContain('href="mailto:dev.jeantivan@gmail.com"');
      expect(html).toContain("dev.jeantivan@gmail.com");

      // Social links
      expect(html).toContain('href="https://www.linkedin.com/in/jean-tivan/"');
      expect(html).toContain('href="https://github.com/jeantivan"');

      // CV download link
      expect(html).toContain('href="/assets/cv-es-jeantivan-dev.pdf?dl="');
    });

    it("renders Profile data in English contact (/en/contact/index.html)", () => {
      const html = fs.readFileSync(
        path.join(distDir, "en/contact/index.html"),
        "utf-8",
      );

      // Mailto and text
      expect(html).toContain('href="mailto:dev.jeantivan@gmail.com"');
      expect(html).toContain("dev.jeantivan@gmail.com");

      // Social links
      expect(html).toContain('href="https://www.linkedin.com/in/jean-tivan/"');
      expect(html).toContain('href="https://github.com/jeantivan"');

      // CV download link
      expect(html).toContain('href="/assets/cv-en-jeantivan-dev.pdf?dl="');
    });
  });
});
