import Container from "@/components/common/Container";
import Text from "@/components/common/Text";

import SmallProject from "@/components/SmallProject";
import FeaturedProject from "@/components/FeaturedProject";
import Heading from "@/components/Heading";

export const metadata = {
  title: "Projects | JeanTivan.dev",
  description: "Collection of projects that I've built"
};

function Projects() {
  return (
    <Container className="my-8 md:my-16">
      <section className="mb-16 md:mb-20">
        <div className="mb-10">
          <Heading
            text="The projects I've built so far."
            Component="h1"
            variant="title"
            className="uppercase mb-6 md:w-11/12"
          />
          <Text color="secondary">
            Lorem ipsum dolor sit amet consectetur. Sed sit enim aliquam
            pharetra metus at lectus aliquet aliquam. Nibh aliquam nunc
            pellentesque mollis. Nisl at nisi quis amet non diam felis felis
            purus.
          </Text>
        </div>
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
        </div>
      </section>

      <section className="mb-14">
        <Heading
          text="Other small projects."
          Component="h2"
          variant="heading"
          className="mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SmallProject />
          <SmallProject />
          <SmallProject />
          <SmallProject />
          <SmallProject />
          <SmallProject />
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
