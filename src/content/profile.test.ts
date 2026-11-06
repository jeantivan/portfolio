import { describe, expect, it } from "vitest";
import {
  createProfileSchema,
  educationSchema,
  profileSchema,
  workExperienceSchema,
} from "./profile";

describe("Profile Domain Schema", () => {
  const minimalRawProfile = {
    name: "Jean Tivan",
    profession: "Desarrollador Web",
    bio: "Biografía del autor en español.",
    cv: "/assets/cv-es-jeantivan-dev.pdf",
    picture: {
      src: "/images/foto-ejemplo.jpeg",
      alt: "Foto de Jean Tivan",
    },
    social: {
      email: "dev.jeantivan@gmail.com",
      linkedIn: "https://www.linkedin.com/in/jean-tivan/",
      github: "https://github.com/jeantivan",
    },
  };

  it("validates a minimal profile with mandatory fields and undefined experience/education", () => {
    const result = profileSchema.parse(minimalRawProfile);

    expect(result.name).toBe("Jean Tivan");
    expect(result.profession).toEqual({
      es: "Desarrollador Web",
      en: "Desarrollador Web",
    });
    expect(result.bio).toEqual({
      es: "Biografía del autor en español.",
      en: "Biografía del autor en español.",
    });
    expect(result.cv).toEqual({
      es: "/assets/cv-es-jeantivan-dev.pdf",
      en: "/assets/cv-es-jeantivan-dev.pdf",
    });
    expect(result.picture.alt).toEqual({
      es: "Foto de Jean Tivan",
      en: "Foto de Jean Tivan",
    });
    expect(result.picture.src).toBe("/images/foto-ejemplo.jpeg");
    expect(result.social).toEqual({
      email: "dev.jeantivan@gmail.com",
      linkedIn: "https://www.linkedin.com/in/jean-tivan/",
      github: "https://github.com/jeantivan",
    });
    expect(result.experience).toBeUndefined();
    expect(result.education).toBeUndefined();
  });

  it("falls back to Spanish when localized fields only define 'es'", () => {
    const rawWithSpanishOnly = {
      ...minimalRawProfile,
      profession: { es: "Desarrollador de Software" },
      bio: { es: "Biografía únicamente en español." },
      cv: { es: "/assets/cv-es.pdf" },
      picture: {
        src: "/images/foto.jpg",
        alt: { es: "Foto en español" },
      },
    };

    const result = profileSchema.parse(rawWithSpanishOnly);

    expect(result.profession).toEqual({
      es: "Desarrollador de Software",
      en: "Desarrollador de Software",
    });
    expect(result.bio).toEqual({
      es: "Biografía únicamente en español.",
      en: "Biografía únicamente en español.",
    });
    expect(result.cv).toEqual({
      es: "/assets/cv-es.pdf",
      en: "/assets/cv-es.pdf",
    });
    expect(result.picture.alt).toEqual({
      es: "Foto en español",
      en: "Foto en español",
    });
  });

  it("preserves distinct English and Spanish values when both are provided", () => {
    const rawBilingual = {
      ...minimalRawProfile,
      profession: { es: "Desarrollador Web", en: "Web Developer" },
      bio: {
        es: "Biografía en español.",
        en: "Biography in English.",
      },
      cv: {
        es: "/assets/cv-es.pdf",
        en: "/assets/cv-en.pdf",
      },
      picture: {
        src: "/images/foto.jpg",
        alt: { es: "Foto en español", en: "Picture in English" },
      },
    };

    const result = profileSchema.parse(rawBilingual);

    expect(result.profession).toEqual({
      es: "Desarrollador Web",
      en: "Web Developer",
    });
    expect(result.bio).toEqual({
      es: "Biografía en español.",
      en: "Biography in English.",
    });
    expect(result.cv).toEqual({
      es: "/assets/cv-es.pdf",
      en: "/assets/cv-en.pdf",
    });
    expect(result.picture.alt).toEqual({
      es: "Foto en español",
      en: "Picture in English",
    });
  });

  it("validates profile when complete Work Experience and Education items are provided", () => {
    const rawWithFullDetails = {
      ...minimalRawProfile,
      experience: [
        {
          role: {
            es: "Desarrollador Fullstack",
            en: "Fullstack Developer",
          },
          company: "Acme Corp",
          companyUrl: "https://acme.example.com",
          startDate: "2023-01",
          endDate: "2024-06",
          description: {
            es: "Desarrollo de servicios y frontend.",
            en: "Backend services and frontend development.",
          },
          technologies: ["TypeScript", "Astro", "Node.js"],
        },
      ],
      education: [
        {
          institution: "42 Madrid",
          program: {
            es: "Ingeniería de Software y Sistemas",
            en: "Software Engineering & Systems",
          },
          startDate: "2021-09",
          endDate: "2023-12",
          description: {
            es: "Metodología peer-to-peer y proyectos en C/C++.",
            en: "Peer-to-peer methodology and C/C++ projects.",
          },
        },
      ],
    };

    const result = profileSchema.parse(rawWithFullDetails);

    expect(result.experience).toHaveLength(1);
    expect(result.experience?.[0].role).toEqual({
      es: "Desarrollador Fullstack",
      en: "Fullstack Developer",
    });
    expect(result.experience?.[0].company).toBe("Acme Corp");
    expect(result.experience?.[0].companyUrl).toBe("https://acme.example.com");
    expect(result.experience?.[0].technologies).toEqual([
      "TypeScript",
      "Astro",
      "Node.js",
    ]);

    expect(result.education).toHaveLength(1);
    expect(result.education?.[0].institution).toBe("42 Madrid");
    expect(result.education?.[0].program).toEqual({
      es: "Ingeniería de Software y Sistemas",
      en: "Software Engineering & Systems",
    });
  });

  it("fails validation when mandatory fields or valid formats are missing", () => {
    // Missing name
    expect(() =>
      profileSchema.parse({
        ...minimalRawProfile,
        name: "",
      }),
    ).toThrow();

    // Invalid email
    expect(() =>
      profileSchema.parse({
        ...minimalRawProfile,
        social: {
          ...minimalRawProfile.social,
          email: "not-an-email",
        },
      }),
    ).toThrow();

    // Invalid url in social
    expect(() =>
      profileSchema.parse({
        ...minimalRawProfile,
        social: {
          ...minimalRawProfile.social,
          github: "not-a-url",
        },
      }),
    ).toThrow();

    // Invalid companyUrl in experience
    expect(() =>
      profileSchema.parse({
        ...minimalRawProfile,
        experience: [
          {
            role: "Dev",
            company: "Acme",
            companyUrl: "not-a-valid-url",
            startDate: "2023",
          },
        ],
      }),
    ).toThrow();
  });

  it("validates standalone workExperienceSchema and educationSchema", () => {
    const experienceItem = workExperienceSchema.parse({
      role: "Backend Engineer",
      company: "Acme Corp",
      startDate: "2022-01",
      description: { es: "Lógica de backend sólo en español" },
    });
    expect(experienceItem.role).toEqual({
      es: "Backend Engineer",
      en: "Backend Engineer",
    });
    expect(experienceItem.company).toBe("Acme Corp");
    expect(experienceItem.description).toEqual({
      es: "Lógica de backend sólo en español",
      en: "Lógica de backend sólo en español",
    });

    const educationItem = educationSchema.parse({
      institution: "42 Madrid",
      program: "Common Core",
      startDate: "2021-09",
      description: { es: "Metodología peer-to-peer" },
    });
    expect(educationItem.institution).toBe("42 Madrid");
    expect(educationItem.program).toEqual({
      es: "Common Core",
      en: "Common Core",
    });
    expect(educationItem.description).toEqual({
      es: "Metodología peer-to-peer",
      en: "Metodología peer-to-peer",
    });
  });

  it("supports custom image schema through createProfileSchema", () => {
    const customProfileSchema = createProfileSchema();
    const result = customProfileSchema.parse(minimalRawProfile);
    expect(result.name).toBe("Jean Tivan");
  });
});
