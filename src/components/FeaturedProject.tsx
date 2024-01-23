import Image from "next/image";
import Link from "next/link";

import Card from "./common/Card";
import Text from "./common/Text";

import { imageFor } from "@/sanity/utils";
import { TProject } from "@/utils/types";

type FeaturedProjectProps = {
  project: TProject;
};
function FeaturedProject(props: FeaturedProjectProps) {
  const { title, slug, mainImage } = props.project;

  const image = imageFor(mainImage);
  return (
    <Card
      as="article"
      className="relative border border-primary-7 aspect-video"
    >
      <Link href={`/project/${slug.current}`}>
        <div className="w-full bg-gray-400 absolute inset-0 overflow-hidden rounded">
          <Image alt={mainImage.alt} fill src={image.url()} />
        </div>
        <header className="absolute inset-0 flex items-end py-2 px-4 bg-gradient-to-t from-neutral-950/70 from-5% via-neutral-950/10 via-15%">
          <div className="flex items-center gap-2">
            <span className="w-4 h-1 rounded-full bg-primary-9" />
            <Text variant="body2">{title}</Text>
          </div>
        </header>
      </Link>
    </Card>
  );
}

export default FeaturedProject;
