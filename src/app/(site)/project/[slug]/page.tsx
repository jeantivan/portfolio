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
    <Container className="pt-2 pb-8 md:py-6 grid grid-cols-10 gap-4">
      <section
        className={mc(
          "backdrop-blur-sm bg-background-1",
          "col-span-10 md:col-span-3 md:order-2",
          "grid grid-cols-2 md:grid-cols-1 content-start gap-2 md:gap-4",
          "sticky top-0 py-2 md:py-0"
        )}
      >
        <Button>Github</Button>
        <Button>Website</Button>
      </section>
      <section className="col-span-10 md:col-span-7">
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
        <Heading text={title} variant="heading" className="mb-3 md:mb-6" />
        <PortableText
          value={content}
          components={{
            block: {
              normal: ({ children }) => (
                <Text
                  color="secondary"
                  variant="body1"
                  className="mb-6 last:mb-0"
                >
                  {children}
                </Text>
              )
            }
          }}
        />
        <div className="col-span-10">
          <Text variant="subtitle" weight="bold" color="secondary">
            Built with
          </Text>
          <div className="flex gap-3">
            {builtWith.map((skill) => {
              return (
                <Text weight="light" key={skill.slug.current}>
                  <span className="text-primary-8 ">#</span>
                  {skill.name}
                </Text>
              );
            })}
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Project;
