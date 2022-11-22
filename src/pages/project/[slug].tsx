import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { styled } from "@config/stitches.config";
import Container from "@components/Container";
import Text from "@components/Text";
import IconButton from "@components/IconButton";
import Button from "@components/Button";
import Flex from "@components/Flex";
import { PROJECT_EXAMPLE } from "@src/constants";
import { TProject, TProjectType } from "@src/types";

const Span = styled("span", {});
const Div = styled("div", {});

const Display = styled("div", {
  marginBottom: 16,
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "1fr min-content",
  gridTemplateAreas: `
    "gallery gallery gallery gallery gallery"
    "prev . dots . next";   
  `,
  gridGap: "12px 0",

  "@lg": {
    //width: "70%",
  },
});

const Dot = styled("div", {
  width: 6,
  height: 6,
  borderRadius: 9999,
  background: "$sand9",

  "&:not(:last-child)": {
    marginRight: 8,
  },

  variants: {
    active: {
      true: {
        width: 8,
        height: 8,
        background: "$primary",
      },
    },
  },
});

const Skill = styled("div", {
  fontSize: 12,
  color: "$primary",
  borderRadius: 999,
  border: "1px solid $primary",
  padding: "6px 20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 12,

  "&:not(:last-child)": { marginRight: 12 },
});

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

const Gallery = () => (
  <Display>
    <Div
      css={{
        gridArea: "gallery",
        width: "100%",
        position: "relative",
        height: 0,
        paddingTop: "61.78%",
        overflow: "hidden",
        borderRadius: 6,
      }}
    >
      <Div
        css={{
          background: "$sand9",
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      ></Div>
    </Div>
    <IconButton css={{ gridArea: "prev", color: "$textSecondary" }}>
      <ArrowLeftIcon />
    </IconButton>
    <Div
      css={{
        gridArea: "dots",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {dots.map((dot) => (
        <Dot key={dot} active={dot === 3} />
      ))}
    </Div>
    <IconButton css={{ gridArea: "next", color: "$textSecondary" }}>
      <ArrowRightIcon />
    </IconButton>
  </Display>
);

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

const dots = [1, 2, 3, 4, 5];

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
      <Div
        css={{
          marginBottom: 16,
        }}
      >
        <Flex css={{ justifyContent: "space-around" }}>
          <Button
            css={{
              maxWidth: 300,
              flex: 1,
              marginRight: 8,
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
            css={{ maxWidth: 300, flex: 1, "& svg": { marginRight: 12 } }}
            as="a"
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GlobeIcon /> Preview
          </Button>
        </Flex>
      </Div>
      <Div css={{ marginBottom: 16 }}>
        <Text secondary css={{ lineHeight: 1.6 }}>
          {project.description}
        </Text>
      </Div>
      <Div css={{ marginBottom: 16 }}>
        <Div css={{ marginLeft: "auto", marginRight: "auto", width: "80%" }}>
          <Div
            css={{
              width: "100%",
              position: "relative",
              height: 0,
              paddingTop: "75%",
              overflow: "hidden",
              borderRadius: 6,
            }}
          >
            <Div
              css={{
                background: "$sand9",
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Div
                css={{ position: "relative", width: "100%", height: "100%" }}
              >
                {project.coverImage && (
                  <Image
                    layout="fill"
                    src={project.coverImage}
                    alt={`Image from: ${project.name}`}
                  />
                )}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <Div>
        <Text heading secondary css={{ fontSize: 14 }}>
          Tech used
        </Text>
        <Flex css={{ flexFlow: "row wrap", width: "100%" }}>
          {project.skills.map((skill) => (
            <Skill key={skill.slug}>{skill.name}</Skill>
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
