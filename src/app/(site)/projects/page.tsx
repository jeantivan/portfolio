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
        <div className="mb-6 md:mb-8">
          <Heading
            text="All the Projects that I've built."
            Component="h1"
            variant="title"
            className="mb-4"
            display
          />
          <Text color="secondary" variant="body2">
            Lorem ipsum dolor sit amet consectetur. Sed sit enim aliquam
            pharetra metus at lectus aliquet aliquam. Nibh aliquam nunc
            pellentesque mollis. Nisl at nisi quis amet non diam felis felis
            purus.
          </Text>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project._id} project={project} />
          ))}
        </div>
      </section>
      <section className="grid gap-6">
        <div className="">
          <Heading
            text="Other small projects."
            Component="h2"
            variant="heading"
            className="mb-4"
            display
          />
          <Text color="secondary" variant="body1">
            Lorem ipsum dolor sit amet consectetur. Sed sit enim aliquam
            pharetra metus at lectus aliquet aliquam. Nibh aliquam nunc
            pellentesque mollis. Nisl at nisi quis amet non diam felis felis
            purus.
          </Text>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {smallProjects.map((project) => (
            <FeaturedProject key={project._id} project={project} />
          ))}
          {smallProjects.map((project) => (
            <FeaturedProject key={project._id} project={project} />
          ))}
        </div>
      </section>
      <section>
        <Text color="secondary">
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
