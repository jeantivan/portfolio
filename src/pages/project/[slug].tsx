import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import {
  ChevronRightIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

import { styled } from "@config/stitches.config";

import Container from "@components/Container";
import Text from "@components/Text";
// import IconButton from "@components/IconButton";
import Button from "@components/Button";
import Flex from "@components/Flex";
import CoverImage from "@components/CoverImage";
import Tag from "@components/Tag";

import { PROJECT_EXAMPLE } from "@utils/constants";
import { TProject, TProjectType } from "@utils/types";

const Span = styled("span", {});
const Div = styled("div", {});

const Link = styled("a", {
  all: "unset",
  color: "$textSecondary",
  cursor: "pointer",

  "&:hover": {
    textDecoration: "underline",
  },

  variants: {
    active: {
      true: {
        color: "$text",
      },
    },
  },
});

const Breadcrumbs = ({
  projectType,
  projectSlug,
  projectName,
}: {
  projectType: TProjectType;
  projectSlug: string;
  projectName: string;
}) => {
  return (
    <Flex
      css={{
        alignItems: "center",
        "& > *": {
          marginRight: 8,
        },
        color: "$textSecondary",
      }}
    >
      <NextLink href={"/projects"} passHref legacyBehavior>
        <Link>Projects</Link>
      </NextLink>
      <Span css={{ display: "inline-flex" }}>
        <ChevronRightIcon />
      </Span>
      <NextLink href={`/projects/${projectType.slug}`} passHref legacyBehavior>
        <Link>{projectType.type} projects</Link>
      </NextLink>
      <Span css={{ display: "inline-flex" }}>
        <ChevronRightIcon />
      </Span>
      <NextLink href={`/project/${projectSlug}`} passHref legacyBehavior>
        <Link active>{projectName}</Link>
      </NextLink>
    </Flex>
  );
};

type PageProps = {
  project: TProject;
};
const ProjectPage: NextPage<PageProps> = ({ project }) => {
  return (
    <Container
      css={{
        paddingTop: 16,
        paddingBottom: 16,
        "@md": { paddingTop: 32, paddingBottom: 32 },
      }}
    >
      <Head>
        <title>{project.name} | Jean Tivan</title>
      </Head>
      <Div css={{ marginBottom: 16 }}>
        <Breadcrumbs
          projectType={project.type}
          projectName={project.name}
          projectSlug={project.slug}
        />
      </Div>
      <Div css={{ gridArea: "title", marginBottom: 16 }}>
        <Text as="h1" heading css={{ fontSize: 32, "@md": { fontSize: 40 } }}>
          {project.name}
        </Text>
      </Div>

      <Div css={{ marginBottom: 32 }}>
        <Text secondary css={{ lineHeight: 1.6, fontSize: 18 }}>
          {project.description}
        </Text>
      </Div>
      <Div
        css={{
          marginBottom: 40,
        }}
      >
        <Div
          css={{
            display: "grid",
            gridColumnGap: "10%",
            gridTemplateColumns: "repeat(2, 1fr)",
          }}
        >
          <Button
            css={{
              width: "100%",
              "& svg": { marginRight: 12 },
            }}
            as="a"
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubLogoIcon /> Github
          </Button>
          <Button
            css={{ width: "100%", "& svg": { marginRight: 12 } }}
            as="a"
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeIcon /> Preview
          </Button>
        </Div>
      </Div>
      <Div css={{ marginBottom: 40 }}>
        <Div css={{ marginLeft: "auto", marginRight: "auto", width: "80%" }}>
          {project.coverImage && (
            <CoverImage
              layout="fill"
              src={project.coverImage}
              alt={`Image from: ${project.name}`}
            />
          )}
        </Div>
      </Div>

      <Div>
        <Text heading secondary css={{ fontSize: 14, marginBottom: 12 }}>
          Tech used
        </Text>
        <Flex css={{ flexFlow: "row wrap", width: "100%" }}>
          {project.skills.map((skill) => (
            <Tag key={skill.slug}>{skill.name}</Tag>
          ))}
        </Flex>
        <Text
          secondary
          css={{ fontSize: 14, fontStyle: "italic", marginTop: 16 }}
        >
          Finished: 21/01/2022
        </Text>
      </Div>
    </Container>
  );
};

export default ProjectPage;

export const getStaticPaths: GetStaticPaths = (context) => {
  // TODO: Crear contenido y obtener desde Sanity

  return {
    paths: [
      {
        params: {
          slug: PROJECT_EXAMPLE.slug,
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
  return {
    props: {
      project: PROJECT_EXAMPLE,
    },
  };
};
