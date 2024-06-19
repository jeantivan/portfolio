import { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import Container from "@/components/common/Container";
import Text from "@/components/common/Text";
import Button from "@/components/common/Button";

import Heading from "@/components/Heading";
import FeaturedProject from "@/src/components/FeaturedProject";
import { getProjects } from "@/src/sanity/queries";

import Skill from "@/src/components/Skill";
import Card from "@/src/components/common/Card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Welcome to my portfolio, my name is Jean Tivan a self-taught frontend developer passionate for react and next.js"
};

async function Home() {
  const projects = await getProjects();

  const featuredProjects = projects
    .filter((project) => project.isFeatured)
    .slice(0, 3);
  return (
    <Container className="px-3 py-6 lg:py-10 grid gap-16 md:gap-24">
      <section className="">
        <div className="mb-4 flex flex-col md:flex-row gap-6 justify-end">
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
        <Text variant="subheading" weight="light" color="secondary">
          Lorem ipsum dolor sit amet consectetur. Eget sed sed quam sit nisl.
        </Text>
      </section>
      <section className="grid gap-6 md:gap-8">
        <Heading
          text="The latest projects that I've build."
          Component="h3"
          variant="title"
          className="flex-1 text-center"
        />
        <div className="flex flex-wrap justify-center gap-3">
          {featuredProjects.map((project, index) => (
            <FeaturedProject key={project._id} project={project} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            className="w-full max-w-lg"
            variant="outlined"
            as={Link}
            href="/projects"
          >
            Checkout all my projects <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </section>
      <section className="grid gap-6 md:gap-8">
        <Heading
          text="My favorites tech to build experiences."
          variant="heading"
          display
        />
        <div className="grid grid-cols-2 md:grid-cols-4 justify-between gap-3">
          <Card className="max-w-60 bg-background-2 px-8 py-4">
            <Skill
              showName
              skill={{ name: "Next.js", slug: { current: "" } }}
            />
          </Card>
          <Card className="max-w-60 bg-background-2 px-8 py-4">
            <Skill
              showName
              skill={{ name: "React.js", slug: { current: "" } }}
            />
          </Card>
          <Card className="max-w-60 bg-background-2 px-8 py-4">
            <Skill
              showName
              skill={{ name: "TypeScript", slug: { current: "" } }}
            />
          </Card>
          <Card className="max-w-60 bg-background-2 px-8 py-4">
            <Skill
              showName
              skill={{ name: "Tailwind", slug: { current: "" } }}
            />
          </Card>
        </div>
        <div className="flex justify-end">
          <Button
            className="w-full max-w-lg"
            variant="outlined"
            as={Link}
            href="/skills"
          >
            Checkout all my skills <ArrowRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </section>
      <section className="grid gap-6 md:gap-8">
        <Heading text="About me." variant="heading" display />
        <Text variant="body2" color="secondary">
          Lorem ipsum dolor sit amet consectetur. Morbi blandit morbi enim sit
          sed. Arcu non hac enim turpis ullamcorper quam eget turpis. Proin est
          turpis ut in sit. Semper elit ut vel fermentum volutpat lacus mattis
          aliquam et. Pretium diam ultrices tincidunt cursus nunc et congue
          nibh. Fames non libero turpis augue ultrices. Molestie imperdiet id at
          nisi nisl. Fringilla congue adipiscing quam etiam sodales curabitur
          purus in. Leo sed amet senectus vel dui id vulputate cursus. Sit in
          molestie enim commodo adipiscing purus.
        </Text>
        <div className="flex justify-end">
          <Button as={Link} href="/contact">
            Get in touch with me
          </Button>
        </div>
      </section>
    </Container>
  );
}

export default Home;
