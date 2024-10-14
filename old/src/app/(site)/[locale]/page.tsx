import { Metadata } from "next";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { getTranslations } from "next-intl/server";

import Container from "@/components/common/Container";
import Text from "@/components/common/Text";
import Button from "@/components/common/Button";
import Heading from "@/components/Heading";
import ProjectItem from "@/components/ProjectItem";
import {
  getProjects,
  getSkillsGroups,
  getTechSkills
} from "@/src/sanity/queries";
import Skill from "@/src/components/Skill";
import Card from "@/src/components/common/Card";
import { Link } from "@/i18n/routing";

export const metadata: Metadata = {
  title: "About | JeanTivan",
  description:
    "Welcome to my portfolio, my name is Jean Tivan a self-taught frontend developer passionate for react and next.js"
};

type PageProps = {
  params: {
    lng: string;
  };
};
async function Home({ params: { lng } }: PageProps) {
  //const { t } = await useTranslation(lng, "about-me");
  const t = await getTranslations("AboutMePage");
  const projects = await getProjects();

  const skills = await getTechSkills();
  const skillsGroups = await getSkillsGroups();

  const featuredProjects = projects
    .filter((project) => project.isFeatured)
    .slice(0, 3);

  const mainStackSkills = skillsGroups.find(
    (skillGroup) => skillGroup.slug.en.current === "the-main-stack"
  );
  return (
    <Container className="px-3 py-6 lg:py-10 grid gap-16 md:gap-24">
      <section className="">
        <div className="mb-4 flex flex-col md:flex-row gap-6">
          {/* TODO: Implementar imagen
          <Card className="bg-background-11 w-full rounded-xl mb-5 md:mb-0 lg:h-full aspect-video md:aspect-[2/3]"></Card> */}
          <div className="shrink-0 flex flex-col">
            <Text
              Component="h1"
              variant="main"
              weight="bold"
              className="uppercase mb-2.5"
            >
              Jean <br></br>Tivan
            </Text>
            <Text
              Component="h2"
              variant="title"
              weight="medium"
              className="uppercase text-primary-11 dark:text-primary-9"
              display
            >
              {t("main.title")}
            </Text>
          </div>
        </div>
        <Text
          variant="subheading"
          weight="light"
          color="secondary"
          className=""
        >
          {t("main.content")}
        </Text>
      </section>
      <section className="grid gap-6 md:gap-8">
        <Heading
          text={t("projects.title")}
          Component="h3"
          variant="title"
          className="flex-1 text-center"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {featuredProjects.map((project, index) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            className="w-full max-w-lg"
            variant="outlined"
            as={Link}
            href="/projects"
          >
            {t("projects.cta")} <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </section>
      <section className="grid gap-6 md:gap-8">
        <Heading text={t("skills.title")} variant="heading" display />
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-3">
          {mainStackSkills?.techs.map((skill) => (
            <Card
              key={skill._id}
              className="max-w-60 bg-background-2 px-8 py-4"
            >
              <Skill showName skill={skill} />
            </Card>
          ))}
        </div>
        <div className="flex justify-end">
          <Button
            className="w-full max-w-lg"
            variant="outlined"
            as={Link}
            href="/skills"
          >
            {t("skills.cta")} <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </section>
      <section className="grid gap-6 md:gap-8">
        <Heading text={t("about-me.title")} variant="heading" display />
        <Text variant="body2" color="secondary">
          {t("about-me.content")}
        </Text>
        <div className="flex justify-end">
          <Button as={Link} href="/contact">
            {t("about-me.cta")}
          </Button>
        </div>
      </section>
    </Container>
  );
}

export default Home;
