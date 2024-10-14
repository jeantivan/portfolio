import Heading from "@/components/Heading";
import { getSkillGroupBySlug } from "@/src/sanity/queries";

type PageProps = {
  params: {
    group: string;
    locale: string;
  };
};
async function Page({ params: { locale, group } }: PageProps) {
  const skillGroup = await getSkillGroupBySlug({ slug: group, locale });

  //const smallCards = skillGroup.techs.length > 4;
  return (
    <div>
      <Heading text="Techs group" variant="subheading" />
      <code className="w-[960px]">
        <pre>{JSON.stringify(skillGroup)}</pre>
      </code>
    </div>
  );
}

export default Page;
