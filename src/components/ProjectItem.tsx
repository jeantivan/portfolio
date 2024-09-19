import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import Card from "./common/Card";
import Text from "./common/Text";

import { urlForImage } from "@/sanity/utils";
import { TProject } from "@/utils/types";
import { mc } from "@/utils/helpers";

type ProjectItemProps = {
	project: TProject;
};
function ProjectItem(props: ProjectItemProps) {
	const { title, slug, mainImage, isFeatured, description } = props.project;

	const imageUrl = mainImage && urlForImage(mainImage)?.url();

	if (!isFeatured) {
		return (
			<Link href={`/project/${slug.current}`} className="w-full">
				<Card
					as="article"
					className={mc(
						"shrink-0 w-full group bg-background-2 overflow-hidden p-2 flex"
					)}
				>
					<header className="w-full">
						<Text className={mc("line-clamp-1 flex-1", "text-base")}>
							{title}
						</Text>
						<Text variant="subtitle" color="secondary" className="line-clamp-1">
							{description}
						</Text>
					</header>
					<div>
						<span className="text-primary-9 w-10 inline-flex justify-end mr-1">
							<ArrowRightIcon className="w-6 h-6 md:group-hover:translate-x-1 transition-all" />
						</span>
					</div>
				</Card>
			</Link>
		);
	}
	return (
		<Link
			href={`/project/${slug.current}`}
			className={mc(
				"lg:w-[472px] w-full isFeatured"
				//isFeatured ? "lg:w-[472px] w-full isFeatured" : "w-[calc(50%-8px)]"
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
					<p className={mc("line-clamp-1 font-medium flex-1", "text-lg")}>
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
