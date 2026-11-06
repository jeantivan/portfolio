export type StaticPageKey = "about" | "projects" | "skills" | "contact";

export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
}

export const staticPagesSeo: Record<
  StaticPageKey,
  { es: PageSeo; en: PageSeo }
> = {
  about: {
    es: {
      title: "Sobre mi",
      description:
        "Portafolio profesional de Jean Tivan, desarrollador web en Madrid, España.",
      keywords: [
        "desarrollador web",
        "programación web",
        "desarrollador en madrid españa",
        "desarrollador frontend en madrid españa",
        "desarrollador full stack en madrid españa",
        "españa",
        "madrid",
      ],
    },
    en: {
      title: "About me",
      description:
        "Professional portfolio of Jean Tivan, web developer based in Madrid, Spain.",
      keywords: [
        "web developer",
        "web programming",
        "developer in madrid spain",
        "frontend developer in madrid spain",
        "full stack developer in madrid spain",
        "spain",
        "madrid",
      ],
    },
  },
  projects: {
    es: {
      title: "Mis proyectos",
      description: "Proyectos y casos de estudio desarrollados por Jean Tivan.",
      keywords: [
        "desarrollador web",
        "programación web",
        "desarrollador en madrid",
        "madrid",
        "españa",
        "Proyectos",
        "React",
        "Next",
        "html",
        "css",
        "desarrollador frontend",
        "desarrollador full stack",
        "nodejs",
      ],
    },
    en: {
      title: "My projects",
      description:
        "Software projects and case studies developed by Jean Tivan.",
      keywords: [
        "web developer",
        "web programming",
        "developer in Madrid",
        "Madrid",
        "Spain",
        "Projects",
        "React",
        "Next",
        "html",
        "css",
        "frontend developer",
        "full stack developer",
        "nodejs",
      ],
    },
  },
  skills: {
    es: {
      title: "Mis habilidades",
      description:
        "Tecnologías, competencias técnicas y habilidades blandas dominadas por Jean Tivan.",
      keywords: [
        "desarrollador web",
        "programación web",
        "desarrollador en madrid",
        "madrid",
        "españa",
        "Proyectos",
        "desarrollador frontend",
        "desarrollador full stack",
        "habilidades",
      ],
    },
    en: {
      title: "My skills",
      description:
        "Technologies, technical skills, and soft skills mastered by Jean Tivan.",
      keywords: [
        "web developer",
        "web programming",
        "developer in madrid spain",
        "frontend developer in madrid spain",
        "full stack developer in madrid spain",
        "spain",
        "madrid",
      ],
    },
  },
  contact: {
    es: {
      title: "Contáctame",
      description:
        "Ponte en contacto con Jean Tivan para colaboraciones, oportunidades y proyectos.",
      keywords: [
        "desarrollador web",
        "programación web",
        "desarrollador en madrid",
        "madrid",
        "españa",
        "contacto",
        "Linked In",
        "Github",
      ],
    },
    en: {
      title: "Contact me",
      description:
        "Get in touch with Jean Tivan for collaborations, opportunities, and projects.",
      keywords: [
        "web developer",
        "web programming",
        "developer in madrid spain",
        "frontend developer in madrid spain",
        "full stack developer in madrid spain",
        "spain",
        "madrid",
        "contact",
        "Linked In",
        "Github",
      ],
    },
  },
};
