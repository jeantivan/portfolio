import { notFound } from "next/navigation";
import { FrameIcon } from "@radix-ui/react-icons";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";

import Text from "@/components/common/Text";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Heading from "@/components/Heading";
import ProjectImage from "@/components/ProjectImage";
import { getProjectBySlug, getProjectsSlug } from "@/src/sanity/queries";

// Imagen de ejemplo
import chat_me from "@/assets/images/chat-me.png";
import Image from "next/image";
import { imageFor } from "@/src/sanity/utils";
import { mc } from "@/src/utils/helpers";

export async function generateStaticParams() {
  return getProjectsSlug();
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}) {
  const project = await getProjectBySlug(params.slug);

  return {
    title: `${project.title} project`,
    description: project.description
  };
}

async function Project({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  const { title, content, builtWith, mainImage } = project;

  const image = imageFor(mainImage);

  return (
    <Container className="py-6 grid grid-cols-10 gap-4">
      <section
        className={mc(
          "backdrop-blur-sm bg-background-1",
          "col-span-10 md:col-span-3 md:order-2",
          "grid grid-cols-2 gap-4",
          "sticky top-0 py-4 md:py-0"
        )}
      >
        <Button>Github</Button>
        <Button>Website</Button>
      </section>
      <section className="mb-10 col-span-10 md:col-span-7">
        <div className="mb-6">
          <div className="w-full">
            <Image
              alt={mainImage.alt || `Main image of: ${title}`}
              src={image.url()}
              width={getImageDimensions(mainImage).width}
              height={getImageDimensions(mainImage).height}
              className="rounded"
            />
          </div>
        </div>
        <Heading text={title} variant="heading" className="mb-6" />
        <PortableText
          value={content}
          components={{
            block: {
              normal: ({ children }) => (
                <Text color="secondary" variant="body1" className="mb-6">
                  {children}
                </Text>
              )
            }
          }}
        />
      </section>
      {/* <div className="self-end mt-auto">
          <Text variant="subtitle" color="secondary">
            Built with
          </Text>
          <div className="flex gap-3">
            {builtWith.map((skill) => {
              return <Text key={skill.slug.current}>#{skill.name}</Text>;
            })}
          </div>
        </div> */}

      {/*
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
      </section> */}
    </Container>
  );
}

export default Project;
