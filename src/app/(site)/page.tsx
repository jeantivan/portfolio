import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import Container from "@/components/common/Container";
import Text from "@/components/common/Text";
import Button from "@/components/common/Button";

import Heading from "@/components/Heading";
import FeaturedProject from "@/src/components/FeaturedProject";
import { getProjects } from "@/src/sanity/queries";
import Card from "@/src/components/common/Card";

export const metadata = {
  title: "About",
  description:
    "Welcome to my portfolio, my name is Jean Tivan a self-taught frontend developer passionate for react and next.js"
};

async function Home() {
  const projects = await getProjects();

  const featuredProjects = projects
    .filter((project) => project.isFeatured)
    .slice(2);
  return (
    <Container className="px-3 py-6 lg:py-16">
      <section className="mb-14">
        <div className="mb-4 md:mb-8 flex flex-col md:flex-row gap-6 justify-between">
          {/* TODO: Implementar imagen
          <Card className="bg-background-11 w-full rounded-xl mb-5 md:mb-0 lg:h-full aspect-video md:aspect-[2/3]"></Card> */}
          <div className="shrink-0 flex flex-col justify-end">
            <Text
              Component="h1"
              variant="main"
              weight="bold"
              className="uppercase mb-2.5 text-end"
            >
              Jean <br></br>Tivan
            </Text>
            <Text
              Component="h2"
              variant="title"
              color="primary"
              weight="medium"
              className="uppercase"
              display
            >
              Frontend Developer
            </Text>
          </div>
        </div>
        <div className="mb-7 md:mb-9">
          <Text variant="subheading" weight="light" color="secondary">
            Lorem ipsum dolor sit amet consectetur. Eget sed sed quam faucibus
            mi in nisl.
          </Text>
        </div>
      </section>
      <section className="mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="border border-primary-6 rounded flex-1 p-6 md:p-12 flex flex-col">
            <Heading
              text="The latest projects that I've build."
              Component="h3"
              variant="title"
              className="flex-1 mb-20 md:mb-12"
            />
            <div className="flex justify-end flex-none">
              <Button as={Link} href="/projects">
                See all the projects{" "}
                <ArrowRightIcon className="w-5 h-5 fill-current" />
              </Button>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            {featuredProjects.map((project) => (
              <FeaturedProject key={project._id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Home;
