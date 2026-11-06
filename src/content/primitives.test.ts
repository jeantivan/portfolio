import { describe, expect, it } from "vitest";
import {
  createThemedImageSchema,
  localizedTextSchema,
  themedImageSchema,
} from "./primitives";

describe("localizedTextSchema", () => {
  it("normalizes a plain string into { es, en } with identical values", () => {
    const result = localizedTextSchema.parse("Desarrollador Frontend");
    expect(result).toEqual({
      es: "Desarrollador Frontend",
      en: "Desarrollador Frontend",
    });
  });

  it("preserves separate es and en values when both are provided", () => {
    const result = localizedTextSchema.parse({
      es: "Desarrollador Frontend",
      en: "Frontend Developer",
    });
    expect(result).toEqual({
      es: "Desarrollador Frontend",
      en: "Frontend Developer",
    });
  });

  it("falls back en to es when en is omitted", () => {
    const result = localizedTextSchema.parse({
      es: "Solo en español",
    });
    expect(result).toEqual({
      es: "Solo en español",
      en: "Solo en español",
    });
  });

  it("fails validation when es is missing or empty", () => {
    expect(() => localizedTextSchema.parse({ en: "Only English" })).toThrow();
    expect(() => localizedTextSchema.parse(123)).toThrow();
    expect(() => localizedTextSchema.parse(null)).toThrow();
  });
});

describe("themedImageSchema / createThemedImageSchema", () => {
  it("normalizes a single image into { dark, light } with identical references", () => {
    const singleImage = { src: "/images/icon.svg", width: 40, height: 40 };
    const result = themedImageSchema.parse(singleImage);
    expect(result).toEqual({
      dark: singleImage,
      light: singleImage,
    });
  });

  it("preserves distinct dark and light images when both are provided", () => {
    const darkImage = { src: "/images/icon-dark.svg", width: 40, height: 40 };
    const lightImage = { src: "/images/icon-light.svg", width: 40, height: 40 };
    const result = themedImageSchema.parse({
      dark: darkImage,
      light: lightImage,
    });
    expect(result).toEqual({
      dark: darkImage,
      light: lightImage,
    });
  });

  it("fails validation when custom inner schema fails", () => {
    const stringThemedSchema = createThemedImageSchema(
      // using zod string validation
      localizedTextSchema,
    );
    // Invalid inner type:
    expect(() => stringThemedSchema.parse(123)).toThrow();
  });
});
