import { describe, expect, it } from "vitest";
import { getAlternateLinks, getPageSeo, localizePath, t } from "./index";

describe("i18n translation (t)", () => {
  it("translates UI keys to default/spanish language", () => {
    expect(t("NavBar_cv", undefined, "es")).toBe("Descargar CV");
    expect(t("NavBar_cv")).toBe("Descargar CV");
  });

  it("translates UI keys to english language", () => {
    expect(t("NavBar_cv", undefined, "en")).toBe("Download CV");
  });

  it("interpolates parameters in messages", () => {
    const url = "https://github.com/jeantivan";
    const es = t("Footer_github_cta", { githubUrl: url }, "es");
    expect(es).toContain(`href='${url}'`);

    const en = t("Footer_github_cta", { githubUrl: url }, "en");
    expect(en).toContain(`href='${url}'`);
  });
});

describe("localizePath", () => {
  it("localizes root path for es and en without double slashes or redirects", () => {
    expect(localizePath("/", "es")).toBe("/");
    expect(localizePath("/", "en")).toBe("/en");
    expect(localizePath("/en", "es")).toBe("/");
    expect(localizePath("/en", "en")).toBe("/en");
  });

  it("localizes canonical subpaths properly", () => {
    expect(localizePath("/projects", "es")).toBe("/projects");
    expect(localizePath("/projects", "en")).toBe("/en/projects");
    expect(localizePath("/en/projects", "es")).toBe("/projects");
    expect(localizePath("/en/projects", "en")).toBe("/en/projects");

    expect(localizePath("/skills", "es")).toBe("/skills");
    expect(localizePath("/skills", "en")).toBe("/en/skills");

    expect(localizePath("/contact", "es")).toBe("/contact");
    expect(localizePath("/contact", "en")).toBe("/en/contact");
  });

  it("localizes detail project subpaths", () => {
    expect(localizePath("/projects/chat-me", "es")).toBe("/projects/chat-me");
    expect(localizePath("/projects/chat-me", "en")).toBe(
      "/en/projects/chat-me",
    );
    expect(localizePath("/en/projects/chat-me", "es")).toBe(
      "/projects/chat-me",
    );
    expect(localizePath("/en/projects/chat-me", "en")).toBe(
      "/en/projects/chat-me",
    );
  });

  it("normalizes legacy localized routes", () => {
    expect(localizePath("/proyectos", "es")).toBe("/projects");
    expect(localizePath("/proyectos", "en")).toBe("/en/projects");
    expect(localizePath("/contacto", "es")).toBe("/contact");
    expect(localizePath("/contacto", "en")).toBe("/en/contact");
    expect(localizePath("/habilidades", "es")).toBe("/skills");
    expect(localizePath("/habilidades", "en")).toBe("/en/skills");
    expect(localizePath("/proyecto/gnl", "es")).toBe("/projects/gnl");
    expect(localizePath("/proyecto/gnl", "en")).toBe("/en/projects/gnl");
  });
});

describe("getAlternateLinks", () => {
  it("generates hreflang alternates with x-default pointing to defaultLocale (es)", () => {
    const alternates = getAlternateLinks("/projects", "https://jeantivan.dev");
    expect(alternates).toEqual([
      { hreflang: "es", href: "https://jeantivan.dev/projects" },
      { hreflang: "en", href: "https://jeantivan.dev/en/projects" },
      { hreflang: "x-default", href: "https://jeantivan.dev/projects" },
    ]);
  });

  it("generates correct alternates for root page", () => {
    const alternates = getAlternateLinks("/en", "https://jeantivan.dev");
    expect(alternates).toEqual([
      { hreflang: "es", href: "https://jeantivan.dev/" },
      { hreflang: "en", href: "https://jeantivan.dev/en" },
      { hreflang: "x-default", href: "https://jeantivan.dev/" },
    ]);
  });
});

describe("getPageSeo", () => {
  it("returns localized SEO metadata for static pages", () => {
    const es = getPageSeo("about", "es");
    expect(es.title).toBe("Sobre mi");
    expect(es.keywords.length).toBeGreaterThan(0);

    const en = getPageSeo("about", "en");
    expect(en.title).toBe("About me");
    expect(en.keywords.length).toBeGreaterThan(0);
  });
});
