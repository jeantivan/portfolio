import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { styled } from "@config/stitches.config";
import Container from "@components/Container";
import Text from "@components/Text";
import { MAIN_SKILLS, PROJECT_EXAMPLE } from "@src/constants";
import { TSkill, TProject } from "@src/types";

const Span = styled("span", {});

type PageProps = {
  skill: TSkill;
  projects: TProject[];
};

const ProjectsBySkill: NextPage<PageProps> = ({ skill, projects }) => {
  const title = `Projects with: ${skill.name} | Jean Tivan`;
  return (
    <Container css={{ paddingTop: 32, paddingBottom: 32 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Text heading css={{ fontSize: 40 }}>
        Projects created using:{" "}
        <Span css={{ color: "$primary" }}>{skill.name}</Span>
      </Text>
    </Container>
  );
};

// TODO: Crear contenido en Sanity
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = MAIN_SKILLS.map((skill) => ({
    params: {
      slug: skill.slug,
    },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  const skill = MAIN_SKILLS.find((s) => s.slug === params?.slug);

  return {
    props: {
      skill: skill || MAIN_SKILLS[0],
      projects: [PROJECT_EXAMPLE],
    },
  };
};

export default ProjectsBySkill;
