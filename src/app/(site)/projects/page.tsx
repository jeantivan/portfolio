import Container from "@/components/common/Container";
import Text from "@/components/common/Text";

import SmallProject from "@/components/SmallProject";
import FeaturedProject from "@/components/FeaturedProject";
import Heading from "@/components/Heading";
import { getProjects } from "@/src/sanity/queries";

export const metadata = {
  title: "Projects",
  description: "Collection of projects that I've built"
};

async function Projects() {
  const projects = await getProjects();

  const featuredProjects = projects.filter((p) => p.isFeatured);
  const smallProjects = projects.filter((p) => !p.isFeatured);

  return (
    <Container className="grid gap-8 pt-4 py-6 md:pt-8">
      <section className="">
        <Heading
          text="The projects I've built so far."
          Component="h1"
          variant="title"
          className="mb-3 md:mb-6"
        />
        <Text color="secondary" variant="body2">
          Lorem ipsum dolor sit amet consectetur. Sed sit enim aliquam pharetra
          metus at lectus aliquet aliquam. Nibh aliquam nunc pellentesque
          mollis. Nisl at nisi quis amet non diam felis felis purus.
        </Text>
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project._id} project={project} />
          ))}
        </div>
      </section>

      <section className="grid gap-6">
        <div>
          <Heading
            text="Other small projects."
            Component="h2"
            variant="heading"
            className="mb-3 md:mb-6"
          />
          <Text color="secondary" variant="body1">
            Lorem ipsum dolor sit amet consectetur. Sed sit enim aliquam
            pharetra metus at lectus aliquet aliquam. Nibh aliquam nunc
            pellentesque mollis. Nisl at nisi quis amet non diam felis felis
            purus.
          </Text>
        </div>

        <div className="grid gap-2">
          {smallProjects.map((project) => (
            <SmallProject key={project._id} project={project} />
          ))}
        </div>
      </section>
      <section>
        <Text>
          Lorem ipsum dolor sit amet consectetur. At orci at purus cras mi
          nascetur. Risus at cras diam non. Varius aliquam orci sit quis nec sed
          hendrerit porta consectetur. Dignissim lacus maecenas ultricies netus
          at. Enim interdum ornare vulputate semper ac.
        </Text>
      </section>
    </Container>
  );
}

export default Projects;
