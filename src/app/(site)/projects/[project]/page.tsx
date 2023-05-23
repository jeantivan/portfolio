"use client";
import { notFound } from "next/navigation";
import Text from "@/components/common/Text";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";

// Imagen de ejemplo
import chat_me from "@/assets/images/chat-me.png";
import ProjectImage from "@/components/ProjectImage";
import { FrameIcon } from "@radix-ui/react-icons";
import Heading from "@/components/Heading";

const getProjects = () => [
  {
    slug: "project-example",
  },
  {
    slug: "project-example-2",
  },
  {
    slug: "project-example-3",
  },
];

const projectExists = (projectSlug: string) => {
  const projects = getProjects();
  return projects.filter(({ slug }) => slug === projectSlug).length >= 1;
};

export async function generateStaticParams() {
  return getProjects();
}

function Project({ params }: { params: { project: string } }) {
  if (!projectExists(params.project)) {
    notFound();
  }

  return (
    <Container className="my-8 md:my-16">
      <section className="mb-10">
        <Heading
          text="Project name example."
          variant="title"
          className="mb-6"
        />
        <Text color="secondary" variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          animi, ullam, nihil dolores delectus omnis officia assumenda tempora
          sequi eius consectetur unde praesentium porro! Optio ut tempore
          dignissimos ab ea ipsam eligendi est veniam harum veritatis,
          consectetur cum magni assumenda corporis alias soluta nemo deleniti!
        </Text>
      </section>

      <section className="mb-10">
        <div className="w-full flex flex-wrap gap-x-8 gap-y-6">
          <Button className="w-full md:flex-1">Live Preview</Button>
          <Button className="w-full md:flex-1">See on Github</Button>
        </div>
      </section>
      <section className="mb-10">
        <Heading text="Gallery." className="mb-6" />

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <ProjectImage alt="Image caption" src={chat_me} />
          <ProjectImage alt="Image caption" src={chat_me} />
          <ProjectImage alt="Image caption" src={chat_me} />
          <ProjectImage alt="Image caption" src={chat_me} />
          <ProjectImage alt="Image caption" src={chat_me} />
        </div>
      </section>
      <section className="mb-10">
        <Heading text="Built with." className="mb-6" />

        <div className="flex gap-4 flex-wrap">
          <div className="inline-flex items-center gap-2">
            <FrameIcon className="text-primary-9" />
            <Text>React.js</Text>
          </div>
          <div className="inline-flex items-center gap-2">
            <FrameIcon className="text-primary-9" />
            <Text>React.js</Text>
          </div>
          <div className="inline-flex items-center gap-2">
            <FrameIcon className="text-primary-9" />
            <Text>React.js</Text>
          </div>
          <div className="inline-flex items-center gap-2">
            <FrameIcon className="text-primary-9" />
            <Text>React.js</Text>
          </div>
        </div>
      </section>
      <section>
        <Text color="secondary" variant="subtitle">
          Created at: 10 Jun 2020
        </Text>
      </section>
    </Container>
  );
}

export default Project;
