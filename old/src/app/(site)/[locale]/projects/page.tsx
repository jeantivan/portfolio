import Container from "@/components/common/Container";
import Text from "@/components/common/Text";

import ProjectItem from "@/src/components/ProjectItem";
import Heading from "@/components/Heading";
import { getProjects } from "@/src/sanity/queries";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Projects",
  description: "Collection of projects that I've built"
};

type PageProps = {
  params: {
    locale: string;
  };
};
async function Projects({ params: { locale } }: PageProps) {
  const t = await getTranslations("ProjectsPage");
  const projects = await getProjects();

  const featuredProjects = projects.filter((p) => p.isFeatured);
  const smallProjects = projects.filter((p) => !p.isFeatured);

  return (
    <Container className="grid gap-8 pt-4 py-6 md:pt-8">
      <section className="">
        <div className="mb-6 md:mb-8">
          <Heading
            text={t("main.title")}
            Component="h1"
            variant="title"
            className="mb-4"
            display
          />
          <Text color="secondary" variant="body3">
            {t("main.content")}
          </Text>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>
      </section>
      <section className="grid gap-6">
        <div className="">
          <Heading
            text={t("small-projects.title")}
            Component="h2"
            variant="heading"
            className="mb-4"
            display
          />
          <Text color="secondary" variant="body1">
            {t("small-projects.content")}
          </Text>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {smallProjects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
          {smallProjects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))}
        </div>
      </section>
      <section>
        <Text color="secondary">{t("extra.content")}</Text>
      </section>
    </Container>
  );
}

export default Projects;
