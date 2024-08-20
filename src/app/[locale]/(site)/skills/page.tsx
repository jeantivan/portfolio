import { ReactNode } from "react";
import { groupBy } from "lodash";
import Card from "@/src/components/common/Card";
import Container from "@/src/components/common/Container";
import Text from "@/src/components/common/Text";
import Heading from "@/src/components/Heading";
import { mc } from "@/src/utils/helpers";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { TSkill } from "@/src/utils/types";
import { getTechSkills } from "@/src/sanity/queries";
import { urlForImage } from "@/src/sanity/utils";
import Image from "next/image";
import { Tooltip } from "@/src/components/common/Tooltip";
import { getTranslations } from "next-intl/server";

// Tecnologias favoritas que uso para construir experiencias

const TempBox = ({ small = false }: { small?: boolean }) => (
  <div
    className={mc(
      "w-28 h-28 rounded-lg bg-background-6",
      small && "lg:w-[72px] lg:h-[72px]"
    )}
  ></div>
);

const SkillsImage = ({
  small = false,
  skill
}: {
  small?: boolean;
  skill: TSkill;
}) => {
  const { name, image } = skill;

  const imageUrl = urlForImage(image)?.width(176).url() ?? "";

  return (
    <Tooltip content={name}>
      <div
        className={mc(
          "w-28 h-28 p-3 rounded-lg bg-background-3/50 dark:bg-background-8/50 backdrop-blur-sm grid place-items-center",
          small && "p-2 lg:w-[72px] lg:h-[72px]"
        )}
      >
        <div
          className={mc(
            "relative w-[88px] h-[88px]",
            small && small && "lg:w-[56px] lg:h-[56px]"
          )}
        >
          <Image
            alt={(image.alt as string) || `${name}`}
            src={imageUrl}
            fill
            className="rounded-xl object-contain"
          />
        </div>
      </div>
    </Tooltip>
  );
};

const SkillsContainer = ({
  className,
  children
}: {
  className: string;
  children: ReactNode;
}) => (
  <Card
    className={mc(
      "py-6 px-3 lg:px-6 grid grid-rows-[min-content_min-content] gap-6",
      className
    )}
  >
    {children}
  </Card>
);

export const metadata = {
  title: "Contact",
  description: "Let's connect and work together!"
};

async function Skills() {
  const t = await getTranslations("SkillsPage");
  const techSkills: TSkill[] = await getTechSkills();

  const skillsByGroup = groupBy(techSkills, "group");
  return (
    <Container className="px-3 py-6 lg:py-10 grid gap-16 md:gap-20">
      <section className="grid gap-6">
        <div>
          <Heading
            text={t("main.title")}
            variant="title"
            className="text-center mb-4"
            display
          />
          <Text variant="body3" color="secondary" className="">
            {t("main.content")}
          </Text>
        </div>
        <div className="grid lg:grid-cols-12 gap-4">
          <SkillsContainer className="lg:col-start-1 lg:col-end-9 lg:row-start-1 lg:row-end-3">
            <Text variant="body2">{t("skills.main-stack")}</Text>
            <div className="flex flex-wrap gap-3 w-full justify-center lg:justify-around">
              {skillsByGroup["main-stack"].map((skill) => (
                <SkillsImage key={skill._id} skill={skill} />
              ))}
            </div>
          </SkillsContainer>
          <SkillsContainer className="lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-4">
            <Text variant="body2">{t("skills.basics")}</Text>
            <div className="flex flex-wrap justify-center w-full gap-3">
              {skillsByGroup["basics"].map((skill) => (
                <SkillsImage key={skill._id} skill={skill} />
              ))}
            </div>
          </SkillsContainer>
          <SkillsContainer className="justify-center lg:col-start-1 lg:col-end-6 lg:row-start-3 lg:row-end-5">
            <Text variant="body2">{t("skills.styling")}</Text>
            <div className="flex xs:flex-wrap justify-center w-full gap-3">
              {skillsByGroup["system-design"].map((skill) => (
                <SkillsImage key={skill._id} skill={skill} />
              ))}
            </div>
          </SkillsContainer>

          <SkillsContainer className="lg:col-start-6 lg:col-end-9 lg:row-start-3 lg:row-end-6">
            <Text variant="body2">{t("skills.animations")}</Text>
            <div className="flex w-full lg:flex-col gap-3 justify-center items-center">
              {skillsByGroup["animations"].map((skill) => (
                <SkillsImage key={skill._id} skill={skill} />
              ))}
            </div>
          </SkillsContainer>
          <SkillsContainer className="lg:col-start-9 lg:col-end-13 lg:row-start-4 lg:row-end-6">
            <Text variant="body2">{t("skills.version-control")}</Text>
            <div className="flex w-full gap-3 justify-center lg:justify-center">
              {skillsByGroup["version-control"].map((skill) => (
                <SkillsImage key={skill._id} skill={skill} />
              ))}
            </div>
          </SkillsContainer>
          <SkillsContainer className="flex items-end lg:col-start-1 lg:col-end-6 lg:row-start-5 lg:lg:row-end-6">
            <Text className="flex-1" variant="subheading" display>
              {t("skills.others")}
            </Text>
            <span className="inline-block">
              <ArrowDownIcon className="w-12 h-12 text-primary-9" />
            </span>
          </SkillsContainer>
          <SkillsContainer className="items-center lg:col-start-1 lg:col-end-11 lg:row-start-6 lg:lg:row-end-7">
            <div className="w-full row-span-2 flex flex-wrap items-center lg:justify-around gap-3">
              {skillsByGroup["backend"].map((skill) => (
                <SkillsImage small key={skill._id} skill={skill} />
              ))}
              {skillsByGroup["others"].map((skill) => (
                <SkillsImage small key={skill._id} skill={skill} />
              ))}
            </div>
          </SkillsContainer>
          <Card className="p-3 grid items-center justify-center lg:col-start-11 lg:lg:col-end-13 lg:row-start-6 lg:lg:row-end-7">
            <Text
              className="tracking-wide -mt-4"
              variant="heading"
              color="primary"
              display
            >
              ...
            </Text>
          </Card>
        </div>
      </section>
      <section>
        <Text>{t("extra.content")}</Text>
      </section>
    </Container>
  );
}

export default Skills;
