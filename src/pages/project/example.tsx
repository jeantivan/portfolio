import { NextPage } from "next";
import Head from "next/head";
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
import IconButton from "@src/components/IconButton";
import Button from "@src/components/Button";
import Flex from "@src/components/Flex";

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

const dots = [1, 2, 3, 4, 5];
const skills = ["Javascript", "React", "Next", "Material UI"];

const Project: NextPage = (props: any) => {
  return (
    <Container
      css={{
        paddingTop: 16,
        paddingBottom: 16,
        "@md": { paddingTop: 32, paddingBottom: 32 },
      }}
    >
      <Head>
        <title>Example Project | Jean Tivan</title>
      </Head>
      <Flex
        css={{
          marginBottom: 16,
          alignItems: "center",
          "& > *": {
            marginRight: 8,
          },
          color: "$textSecondary",
        }}
      >
        <Link>Projects</Link>
        <Span css={{ display: "inline-flex" }}>
          <ChevronRightIcon />
        </Span>
        <Link>Small projects</Link>
        <Span css={{ display: "inline-flex" }}>
          <ChevronRightIcon />
        </Span>
        <Link active>Project Name</Link>
      </Flex>
      <Div css={{ gridArea: "title", marginBottom: 16 }}>
        <Text as="h1" heading css={{ fontSize: 32, "@md": { fontSize: 40 } }}>
          Project title, it can be a large title
        </Text>
      </Div>
      <Div
        css={{
          marginBottom: 16,
        }}
      >
        <Flex>
          <Button
            css={{
              maxWidth: 200,
              flex: 1,
              marginRight: 8,
              "& svg": { marginRight: 12 },
            }}
          >
            <GitHubLogoIcon /> Github
          </Button>
          <Button
            css={{ maxWidth: 200, flex: 1, "& svg": { marginRight: 12 } }}
          >
            <GlobeIcon /> Preview
          </Button>
        </Flex>
      </Div>
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
      <Div css={{ marginBottom: 16 }}>
        <Text as="h5" heading css={{ fontSize: 24, marginBottom: 12 }}>
          Description
        </Text>
        <Text secondary css={{ lineHeight: 1.6 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          voluptates amet autem, perspiciatis, voluptatibus, reprehenderit
          eveniet cumque officiis inventore reiciendis animi id optio quod.
          Alias magnam aperiam dicta rerum cum unde culpa voluptatum error
          obcaecati? Rem, expedita vero labore veniam saepe minus iusto
          recusandae? Quas ullam soluta harum molestiae omnis!
        </Text>
        <Text secondary css={{ lineHeight: 1.6 }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
          voluptates amet autem, perspiciatis, voluptatibus, reprehenderit
          eveniet cumque officiis inventore reiciendis animi id optio quod.
          Alias magnam aperiam dicta rerum cum unde culpa voluptatum error
          obcaecati? Rem, expedita vero labore veniam saepe minus iusto
          recusandae? Quas ullam soluta harum molestiae omnis!
        </Text>
        <Text
          secondary
          css={{ fontSize: 14, fontStyle: "italic", marginTop: 12 }}
        >
          Finished: 21/01/2022
        </Text>
      </Div>
      <Div>
        <Text heading secondary css={{ fontSize: 14 }}>
          Tech used
        </Text>
        <Flex css={{ flexFlow: "row wrap", width: "100%" }}>
          {skills.map((skill) => (
            <Skill key={skill}>{skill}</Skill>
          ))}
        </Flex>
      </Div>
    </Container>
  );
};

export default Project;
