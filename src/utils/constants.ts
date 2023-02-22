import { TSkill, TProject } from "./types";
export const PRIMARY_COLOR_KEY = "jeantivan-portfolio-primary-color";
export const COLOR_MODE_KEY = "jeantivan-portfolio-color-mode";
export const COLORS = ["orange", "indigo", "grass", "amber", "purple"] as const;

export const MAIN_SKILLS: TSkill[] = [
  {
    name: "Javascript",
    image: "/images/skills/javascript.svg",
    slug: "javascript",
  },
  {
    name: "Typescript",
    image: "/images/skills/typescript.svg",
    slug: "typescript",
  },
  {
    name: "React",
    image: "/images/skills/react.svg",
    slug: "react",
  },
  {
    name: "Next",
    image: "/images/skills/nextjs.svg",
    slug: "next",
  },
  {
    name: "HTML",
    image: "/images/skills/html-5.svg",
    slug: "html",
  },
  {
    name: "CSS",
    image: "/images/skills/css-3.svg",
    slug: "css",
  },
  {
    name: "Material UI",
    image: "/images/skills/material-ui.svg",
    slug: "material-ui",
  },
  {
    name: "TailwindCSS",
    image: "/images/skills/tailwindcss.svg",
    slug: "tailwindcss",
  },
  {
    name: "React Spring",
    image: "/images/skills/react-spring.svg",
    slug: "react-spring",
  },
];

export const PROJECT_EXAMPLE: TProject = {
  name: "Project Example",
  slug: "project-example",
  githubLink: "https://github.com/jeantivan/real-estate-web",
  liveLink: "https://real-estate-web.vercel.app/",
  skills: [MAIN_SKILLS[0], MAIN_SKILLS[2], MAIN_SKILLS[3]],
  type: { slug: "featured", type: "Featured" },
  finishDate: "21/01/2022",
  coverImage: "/images/projects/example/Home.png",
  description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          voluptates amet autem, perspiciatis, voluptatibus, reprehenderit
          eveniet cumque officiis inventore reiciendis animi id optio quod.
          Alias magnam aperiam dicta rerum cum unde culpa voluptatum error
          obcaecati? Rem, expedita vero labore veniam saepe minus iusto
          recusandae? Quas ullam soluta harum molestiae omnis!`,
};
