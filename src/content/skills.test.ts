import { describe, expect, it } from "vitest";
import {
  getFeaturedTechnologies,
  softSkillSchema,
  sortByOrder,
  technicalSkillSchema,
  technologySchema,
} from "./skills";

describe("Technology Domain Schema", () => {
  it("normalizes a single icon into dark and light variants and defaults featured to false", () => {
    const raw = {
      name: "TypeScript",
      icon: "/images/techSkills/typescript.svg",
    };

    const parsed = technologySchema.parse(raw);

    expect(parsed.name).toBe("TypeScript");
    expect(parsed.icon).toEqual({
      dark: "/images/techSkills/typescript.svg",
      light: "/images/techSkills/typescript.svg",
    });
    expect(parsed.featured).toBe(false);
    expect(parsed.order).toBeUndefined();
  });

  it("preserves explicit dark and light icons and accepts featured and order", () => {
    const raw = {
      name: "Astro",
      icon: {
        dark: "/images/techSkills/Astro_dark.svg",
        light: "/images/techSkills/Astro_light.svg",
      },
      featured: true,
      order: 1,
    };

    const parsed = technologySchema.parse(raw);

    expect(parsed.name).toBe("Astro");
    expect(parsed.icon).toEqual({
      dark: "/images/techSkills/Astro_dark.svg",
      light: "/images/techSkills/Astro_light.svg",
    });
    expect(parsed.featured).toBe(true);
    expect(parsed.order).toBe(1);
  });

  it("rejects invalid inputs when name or icon is missing", () => {
    expect(() => technologySchema.parse({ name: "TypeScript" })).toThrow();
    expect(() =>
      technologySchema.parse({ icon: "/images/techSkills/typescript.svg" }),
    ).toThrow();
  });
});

describe("Technical Skill Domain Schema", () => {
  it("validates technical skill with localized text fallback for title and description", () => {
    const raw = {
      title: "Desarrollo Frontend",
      description: {
        es: "Construcción de interfaces interactivas y accesibles.",
      },
      technologies: ["react-js", "next-js", "typescript"],
      order: 2,
    };

    const parsed = technicalSkillSchema.parse(raw);

    expect(parsed.title).toEqual({
      es: "Desarrollo Frontend",
      en: "Desarrollo Frontend",
    });
    expect(parsed.description).toEqual({
      es: "Construcción de interfaces interactivas y accesibles.",
      en: "Construcción de interfaces interactivas y accesibles.",
    });
    expect(parsed.technologies).toEqual(["react-js", "next-js", "typescript"]);
    expect(parsed.order).toBe(2);
  });

  it("preserves explicit bilingual titles and descriptions and allows optional technologies and order", () => {
    const raw = {
      title: {
        es: "Arquitectura de Software",
        en: "Software Architecture",
      },
      description: {
        es: "Diseño modular y patrones limpios.",
        en: "Modular design and clean patterns.",
      },
    };

    const parsed = technicalSkillSchema.parse(raw);

    expect(parsed.title).toEqual({
      es: "Arquitectura de Software",
      en: "Software Architecture",
    });
    expect(parsed.description).toEqual({
      es: "Diseño modular y patrones limpios.",
      en: "Modular design and clean patterns.",
    });
    expect(parsed.technologies).toBeUndefined();
    expect(parsed.order).toBeUndefined();
  });

  it("rejects technical skill when title is missing", () => {
    expect(() =>
      technicalSkillSchema.parse({
        technologies: ["react-js"],
      }),
    ).toThrow();
  });
});

describe("Soft Skill Domain Schema", () => {
  it("validates soft skill with localized text fallback", () => {
    const raw = {
      title: "Aprendizaje autónomo peer-to-peer",
      description: "Capacidad adquirida en 42 Madrid para resolver problemas.",
      order: 1,
    };

    const parsed = softSkillSchema.parse(raw);

    expect(parsed.title).toEqual({
      es: "Aprendizaje autónomo peer-to-peer",
      en: "Aprendizaje autónomo peer-to-peer",
    });
    expect(parsed.description).toEqual({
      es: "Capacidad adquirida en 42 Madrid para resolver problemas.",
      en: "Capacidad adquirida en 42 Madrid para resolver problemas.",
    });
    expect(parsed.order).toBe(1);
  });

  it("preserves explicit bilingual fields and allows omitting description and order", () => {
    const raw = {
      title: {
        es: "Comunicación efectiva",
        en: "Effective Communication",
      },
    };

    const parsed = softSkillSchema.parse(raw);

    expect(parsed.title).toEqual({
      es: "Comunicación efectiva",
      en: "Effective Communication",
    });
    expect(parsed.description).toBeUndefined();
    expect(parsed.order).toBeUndefined();
  });

  it("rejects soft skill when title is missing", () => {
    expect(() => softSkillSchema.parse({})).toThrow();
  });
});

describe("Skill Sorting Helpers", () => {
  it("sorts items by order ascending, placing items without order at the end", () => {
    const items = [
      { id: "c", data: { name: "C" } },
      { id: "a", data: { name: "A", order: 2 } },
      { id: "b", data: { name: "B", order: 1 } },
      { id: "d", data: { name: "D" } },
    ];

    const sorted = sortByOrder(items);

    expect(sorted.map((item) => item.id)).toEqual(["b", "a", "c", "d"]);
  });

  it("filters and sorts featured technologies by order", () => {
    const technologies = [
      { id: "react", data: { featured: true, order: 2 } },
      { id: "c", data: { featured: false, order: 1 } },
      { id: "astro", data: { featured: true, order: 1 } },
      { id: "git", data: { featured: false } },
    ];

    const featured = getFeaturedTechnologies(technologies);

    expect(featured.map((t) => t.id)).toEqual(["astro", "react"]);
  });
});
