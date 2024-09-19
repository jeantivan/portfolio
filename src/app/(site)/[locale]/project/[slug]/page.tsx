import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { GlobeIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import Text from "@/components/common/Text";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Heading from "@/components/Heading";

import { getProjectBySlug, getProjectsSlug } from "@/src/sanity/queries";

// Imagen de ejemplo
import Image from "next/image";
import { urlForImage } from "@/src/sanity/utils";
import { mc } from "@/src/utils/helpers";
import { getTranslations } from "next-intl/server";

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
	const t = await getTranslations("ProjectPage");
	const project = await getProjectBySlug(params.slug);

	const { title, content, builtWith, mainImage, githubRepo, website } = project;

	const imageUrl = urlForImage(mainImage)?.height(768).width(1366).url() ?? "";

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
				<Button
					as="a"
					href={githubRepo}
					target="_blank"
					rel="noopener noreferrer"
				>
					<GitHubLogoIcon className="w-4 h-4 inline-block mr-2.5"></GitHubLogoIcon>
					Github
				</Button>
				<Button as="a" href={website} rel="noopener noreferrer">
					<GlobeIcon className="w-4 h-4 inline-block mr-2.5"></GlobeIcon>Website
				</Button>
			</section>
			<section className="col-span-10 md:col-span-7">
				<div className="mb-6">
					<div className="w-full">
						<Image
							alt={(mainImage.alt as string) || `Main image of: ${title}`}
							src={imageUrl}
							width={1366}
							height={768}
							className="rounded-xl"
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
						{t("builtWith")}
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
