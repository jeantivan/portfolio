import "@/styles/skills-page.css";

import { ReactNode, Fragment } from "react";
import Card from "@/src/components/common/Card";
import Container from "@/src/components/common/Container";
import Text from "@/src/components/common/Text";
import Heading from "@/src/components/Heading";
import { mc } from "@/src/utils/helpers";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import { getSkillsGroups } from "@/src/sanity/queries";
import { getTranslations } from "next-intl/server";
import Skill from "@/src/components/Skill";
import { TSkill } from "@/src/utils/types";

const SkillsContainer = ({
  className,
  children
}: {
  className: string;
  children: ReactNode;
}) => (
  <Card
    className={mc(
      "p-5 grid grid-rows-[min-content_min-content] gap-5",
      className
    )}
  >
    {children}
  </Card>
);
const ReactEcosystemTechs = ({ techs }: { techs: TSkill[] }) => {
  const showSuspense = techs.length >= 8;

  const techsToShow = techs.slice(0, 7);

  return (
    <div className="flex w-full flex-wrap gap-2 justify-start items-center">
      {techsToShow.map((skill) => (
        <Skill size="small" key={skill._id} skill={skill} />
      ))}
      {showSuspense && (
        <div
          className={mc(
            "aspect-square p-2 rounded-lg grid place-items-center",
            "w-[66px]"
          )}
        >
          <Text
            display
            color="primary"
            variant="heading"
            className="-mt-5 leading-none tracking-wider"
          >
            ...
          </Text>
        </div>
      )}
    </div>
  );
};

export const metadata = {
  title: "Contact",
  description: "Let's connect and work together!"
};

type PageProps = {
  params: {
    locale: string;
  };
};
async function Skills({ params: { locale } }: PageProps) {
  const t = await getTranslations("SkillsPage");

  const skillsGroups = await getSkillsGroups();

  const inTheBackendGroup = skillsGroups.find(
    (skillGroup) => skillGroup.slug.en.current === "in-the-backend"
  );

  return (
    <Container className="px-3 py-6 lg:py-10 grid gap-16 md:gap-20">
      <section className="grid gap-6">
        <div>
          <Heading
            text={t("main.title")}
            variant="title"
            className="mb-4"
            display
          />
          <Text variant="body3" color="secondary" className="">
            {t("main.content")}
          </Text>
        </div>
        <div className="bento gap-4">
          {skillsGroups.map(({ _id, title, slug, techs }) => {
            const label = title[locale as "en" | "es"];

            switch (slug.en.current) {
              case "in-the-backend":
                return null;
              case "more-technologies":
                return (
                  <Fragment key={_id}>
                    <Card
                      case
                      className={mc("helper", "p-5 flex items-center gap-6")}
                    >
                      <ArrowDownIcon className="text-primary-9 w-8 h-8"></ArrowDownIcon>
                      <Text className="lg:text-xl leading-none">{label}</Text>
                    </Card>
                    <SkillsContainer
                      className={mc(
                        slug.en.current,
                        "place-items-center grid-rows-auto"
                      )}
                    >
                      <div className="flex flex-wrap gap-4">
                        {inTheBackendGroup &&
                          inTheBackendGroup.techs?.map((tech) => (
                            <Skill size="small" key={_id} skill={tech} />
                          ))}
                        {techs?.map((tech) => (
                          <Skill size="small" key={_id} skill={tech} />
                        ))}
                      </div>
                    </SkillsContainer>
                  </Fragment>
                );
              case "the-main-stack":
                return (
                  <SkillsContainer
                    key={_id}
                    className={mc("lg:pt-12", slug.en.current)}
                  >
                    <Text display variant="subheading">
                      {label}
                    </Text>
                    <div className="w-full flex flex-wrap justify-evenly md:justify-start gap-2 md:gap-4">
                      {techs?.map((tech) => (
                        <Skill size="large" key={_id} skill={tech} />
                      ))}
                    </div>
                  </SkillsContainer>
                );
              case "version-control":
                return (
                  <SkillsContainer key={_id} className={`${slug.en.current}`}>
                    <Text variant="body2">{label}</Text>
                    <div className="flex w-full flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                      {techs?.map((skill) => (
                        <Skill key={skill._id} skill={skill} />
                      ))}
                    </div>
                  </SkillsContainer>
                );
              case "animations":
                return (
                  <SkillsContainer key={_id} className={`${slug.en.current}`}>
                    <Text variant="body2">{label}</Text>
                    <div className="flex w-full flex-col md:flex-row lg:flex-col gap-2 md:gap-4 justify-center items-center">
                      {techs?.map((skill) => (
                        <Skill key={skill._id} skill={skill} />
                      ))}
                    </div>
                  </SkillsContainer>
                );
              case "react-ecosystem":
                const reTechs = [
                  ...techs,
                  ...techs,
                  ...techs,
                  ...techs,
                  ...techs,
                  ...techs,
                  ...techs,
                  ...techs,
                  ...techs,
                  ...techs,
                  ...techs,
                  ...techs,
                  ...techs
                ];
                return (
                  <SkillsContainer key={_id} className={`${slug.en.current}`}>
                    <Text variant="body2">{label}</Text>
                    <ReactEcosystemTechs techs={reTechs} />
                  </SkillsContainer>
                );

              default:
                return (
                  <SkillsContainer
                    key={_id}
                    className={mc(
                      slug.en.current,
                      "flex flex-col justify-between"
                    )}
                  >
                    <Text variant="body2">{label}</Text>
                    <div className="flex justify-evenly gap-2 md:gap-4">
                      {techs?.map((tech) => (
                        <Skill size="big" key={_id} skill={tech} />
                      ))}
                    </div>
                  </SkillsContainer>
                );
            }

            return null;
          })}
          {/* <SkillsContainer className="lg:col-start-1 lg:col-end-9 lg:row-start-1 lg:row-end-3">
            <Text variant="body2">{t("skills.main-stack")}</Text>
            <div className="flex flex-wrap gap-3 w-full justify-center lg:justify-around">
               grouped["las-tecnologias-principales"][0].techs?.map((skill) => (
                <SkillsImage key={skill._id} skill={skill} />
              )) 
            </div>
          </SkillsContainer> */}

          <Card className="hidden p-3 lg:grid items-center justify-center suspense">
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
