import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import Card from "./common/Card";

import { urlForImage } from "@/sanity/utils";
import { TProject } from "@/utils/types";
import { mc } from "@/utils/helpers";

type ProjectItemProps = {
  project: TProject;
};
function ProjectItem(props: ProjectItemProps) {
  const { title, slug, mainImage, isFeatured } = props.project;

  const imageUrl = mainImage && urlForImage(mainImage)?.url();

  return (
    <Link
      href={`/project/${slug.current}`}
      className={mc(
        isFeatured ? "lg:w-[472px] w-[406px] isFeatured" : "w-[195px]"
      )}
    >
      <Card
        as="article"
        className={mc(
          "shrink-0 w-full group bg-background-2 rounded-lg overflow-hidden"
        )}
      >
        <div className="relative aspect-video">
          <Image
            alt={(mainImage.alt as string) || `Main image of: ${title}`}
            fill
            src={imageUrl!}
          />
        </div>
        <header className="w-full flex space-between items-center p-2">
          <p
            className={mc(
              "line-clamp-1 font-medium flex-1",
              isFeatured ? "text-lg" : "text-base"
            )}
          >
            {title}
          </p>
          <span className="text-primary-9 w-10 inline-flex justify-end mr-1">
            <ArrowRightIcon className="w-6 h-6 md:group-hover:translate-x-1 transition-all" />
          </span>
        </header>
      </Card>
    </Link>
  );
}

export default ProjectItem;
