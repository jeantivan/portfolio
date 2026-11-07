import { describe, expect, it } from "vitest";
import {
  createProjectSchema,
  get42Projects,
  getCaseStudyProjects,
  getFeaturedProjects,
  getOtherProjects,
  getProjectHref,
  getProjectSlug,
  hasCaseStudy,
  projectSchema,
} from "./project";

describe("Project Domain Schema and Logic (Seam 1)", () => {
  const validImage = {
    dark: "/images/dark.png",
    light: "/images/light.png",
  };

  const validFeaturedProjectData = {
    title: { es: "Proyecto Destacado", en: "Featured Project" },
    description: { es: "Descripción corta", en: "Short description" },
    category: "web" as const,
    featured: true,
    order: 1,
    links: {
      github: "https://github.com/user/project",
      website: "https://project.com",
    },
    builtWith: ["react-js", "typescript"],
    mainImage: {
      alt: { es: "Captura de pantalla", en: "Screenshot" },
      src: validImage,
    },
  };

  describe("Project schema validation", () => {
    it("validates a fully defined featured project", () => {
      const parsed = projectSchema.parse(validFeaturedProjectData);

      expect(parsed.title).toEqual({
        es: "Proyecto Destacado",
        en: "Featured Project",
      });
      expect(parsed.description).toEqual({
        es: "Descripción corta",
        en: "Short description",
      });
      expect(parsed.category).toBe("web");
      expect(parsed.featured).toBe(true);
      expect(parsed.order).toBe(1);
      expect(parsed.links.github).toBe("https://github.com/user/project");
      expect(parsed.links.website).toBe("https://project.com");
      expect(parsed.builtWith).toEqual(["react-js", "typescript"]);
      expect(parsed.mainImage).toBeDefined();
    });

    it("normalizes localized strings with Spanish fallback for title and description", () => {
      const parsed = projectSchema.parse({
        ...validFeaturedProjectData,
        title: "Solo en español",
        description: { es: "Descripción sólo en español" },
        mainImage: {
          alt: "Texto alt simple",
          src: "/images/single.png",
        },
      });

      expect(parsed.title).toEqual({
        es: "Solo en español",
        en: "Solo en español",
      });
      expect(parsed.description).toEqual({
        es: "Descripción sólo en español",
        en: "Descripción sólo en español",
      });
      expect(parsed.mainImage?.alt).toEqual({
        es: "Texto alt simple",
        en: "Texto alt simple",
      });
      expect(parsed.mainImage?.src).toEqual({
        dark: "/images/single.png",
        light: "/images/single.png",
      });
    });

    it("applies default order (99) and featured (false) when omitted", () => {
      const parsed = projectSchema.parse({
        title: "Proyecto sin orden",
        description: "Descripción",
        category: "other",
        links: {
          github: "https://github.com/user/repo",
        },
        builtWith: ["c"],
      });

      expect(parsed.order).toBe(99);
      expect(parsed.featured).toBe(false);
      expect(parsed.mainImage).toBeUndefined();
    });

    it("rejects invalid category", () => {
      expect(() =>
        projectSchema.parse({
          ...validFeaturedProjectData,
          category: "invalid-category",
        }),
      ).toThrow();
    });

    it("extracts clean project slug using getProjectSlug", () => {
      expect(getProjectSlug("project/avilatek.md")).toBe("avilatek");
      expect(getProjectSlug("chat-me.md")).toBe("chat-me");
      expect(getProjectSlug("gnl")).toBe("gnl");
    });

    it("allows custom schema creation with createProjectSchema", () => {
      const customSchema = createProjectSchema();
      expect(customSchema).toBeDefined();
    });
  });

  describe("mainImage refine rule", () => {
    it("fails when featured === true and mainImage is omitted", () => {
      const dataWithoutImage = {
        ...validFeaturedProjectData,
        featured: true,
        mainImage: undefined,
      };

      expect(() => projectSchema.parse(dataWithoutImage)).toThrow(
        /mainImage is required when featured is true/i,
      );
    });

    it("passes when featured === false and mainImage is omitted", () => {
      const dataWithoutImage = {
        title: "Proyecto 42",
        description: "Descripción 42",
        category: "42" as const,
        featured: false,
        order: 2,
        links: { github: "https://github.com/user/gnl" },
        builtWith: ["c"],
      };

      const parsed = projectSchema.parse(dataWithoutImage);
      expect(parsed.featured).toBe(false);
      expect(parsed.mainImage).toBeUndefined();
    });
  });

  describe("hasCaseStudy helper", () => {
    it("returns true when project body has non-empty markdown content", () => {
      expect(hasCaseStudy({ body: "## Un caso de estudio detallado" })).toBe(
        true,
      );
    });

    it("returns false when body is undefined, empty string or whitespace only", () => {
      expect(hasCaseStudy({})).toBe(false);
      expect(hasCaseStudy({ body: "" })).toBe(false);
      expect(hasCaseStudy({ body: "   \n\t  " })).toBe(false);
    });
  });

  describe("getProjectHref navigation helper", () => {
    const projectWithCaseStudy = {
      id: "avilatek.md",
      body: "Markdown body content",
      data: {
        links: {
          github: "https://github.com/user/avilatek",
          website: "https://avilatek.com",
        },
      },
    };

    const projectWithoutCaseStudy = {
      id: "gnl.md",
      body: "   ",
      data: {
        links: {
          github: "https://github.com/user/gnl",
        },
      },
    };

    const projectWithoutCaseStudyWithWebsite = {
      id: "small-app.md",
      body: "",
      data: {
        links: {
          github: "https://github.com/user/app",
          website: "https://app.com",
        },
      },
    };

    it("generates internal localized URL when project has a Case Study", () => {
      expect(getProjectHref(projectWithCaseStudy, "es")).toBe(
        "/projects/avilatek",
      );
      expect(getProjectHref(projectWithCaseStudy, "en")).toBe(
        "/en/projects/avilatek",
      );
    });

    it("links directly to website or github when project has NO Case Study", () => {
      expect(getProjectHref(projectWithoutCaseStudy, "es")).toBe(
        "https://github.com/user/gnl",
      );
      expect(getProjectHref(projectWithoutCaseStudy, "en")).toBe(
        "https://github.com/user/gnl",
      );

      expect(getProjectHref(projectWithoutCaseStudyWithWebsite, "es")).toBe(
        "https://app.com",
      );
      expect(getProjectHref(projectWithoutCaseStudyWithWebsite, "en")).toBe(
        "https://app.com",
      );
    });
  });

  describe("Filtering and Ordering helpers", () => {
    const sampleProjects = [
      {
        id: "web-featured-2.md",
        data: {
          title: { es: "Web Featured 2", en: "Web Featured 2" },
          category: "web" as const,
          featured: true,
          order: 2,
        },
      },
      {
        id: "web-featured-1.md",
        data: {
          title: { es: "Web Featured 1", en: "Web Featured 1" },
          category: "web" as const,
          featured: true,
          order: 1,
        },
      },
      {
        id: "42-proj-2.md",
        data: {
          title: { es: "42 Proj 2", en: "42 Proj 2" },
          category: "42" as const,
          featured: false,
          order: 3,
        },
      },
      {
        id: "42-proj-1.md",
        data: {
          title: { es: "42 Proj 1", en: "42 Proj 1" },
          category: "42" as const,
          featured: true, // even if featured: true, it's 42
          order: 1,
        },
      },
      {
        id: "other-proj-2.md",
        data: {
          title: { es: "Other Proj 2", en: "Other Proj 2" },
          category: "other" as const,
          featured: false,
          order: 10,
        },
      },
      {
        id: "other-proj-1.md",
        data: {
          title: { es: "Other Proj 1", en: "Other Proj 1" },
          category: "other" as const,
          featured: false,
          order: 5,
        },
      },
    ];

    it("getFeaturedProjects returns only non-42 featured projects, sorted by order", () => {
      const featured = getFeaturedProjects(sampleProjects);
      expect(featured.map((p) => p.id)).toEqual([
        "web-featured-1.md",
        "web-featured-2.md",
      ]);
    });

    it("get42Projects returns all 42 projects sorted by order", () => {
      const projects42 = get42Projects(sampleProjects);
      expect(projects42.map((p) => p.id)).toEqual([
        "42-proj-1.md",
        "42-proj-2.md",
      ]);
    });

    it("getOtherProjects returns non-featured and non-42 projects sorted by order", () => {
      const others = getOtherProjects(sampleProjects);
      expect(others.map((p) => p.id)).toEqual([
        "other-proj-1.md",
        "other-proj-2.md",
      ]);
    });

    it("ensures sections are mutually exclusive and 42 projects are never in other projects", () => {
      const featured = getFeaturedProjects(sampleProjects);
      const projects42 = get42Projects(sampleProjects);
      const others = getOtherProjects(sampleProjects);

      const featuredIds = new Set(featured.map((p) => p.id));
      const projects42Ids = new Set(projects42.map((p) => p.id));
      const othersIds = new Set(others.map((p) => p.id));

      for (const id of projects42Ids) {
        expect(featuredIds.has(id)).toBe(false);
        expect(othersIds.has(id)).toBe(false);
      }

      for (const id of featuredIds) {
        expect(othersIds.has(id)).toBe(false);
      }
    });

    it("getCaseStudyProjects filters only projects with non-empty body", () => {
      const projects = [
        { id: "p1", body: "Has content" },
        { id: "p2", body: "   " },
        { id: "p3", body: "" },
        { id: "p4", body: "More content" },
      ];
      expect(getCaseStudyProjects(projects).map((p) => p.id)).toEqual([
        "p1",
        "p4",
      ]);
    });
  });
});
