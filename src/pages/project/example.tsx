import { NextPage } from "next";
import Head from "next/head";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  GitHubLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";
import { styled } from "@config/stitches.config";
import Container from "@components/Container";
import Text from "@components/Text";
import IconButton from "@src/components/IconButton";
import Button from "@src/components/Button";
import Flex from "@src/components/Flex";

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridTemplateRows: "repeat(4, min-content) 1fr",
  gridTemplateAreas: `
    "title title title title title title"
    "display display display display links links"
    "display display display display type type"
    "display display display display skills skills"
    "description description description description description ."
  `,

  "& > *": {
    padding: 8,
  },
});

const Display = styled("div", {
  gridArea: "display",
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gridTemplateRows: "1fr min-content",
  gridTemplateAreas: `
    "gallery gallery gallery gallery gallery"
    "prev . dots . next";   
  `,
  gridGap: "12px 0",
});

const Div = styled("div", {});

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

const ProjectType = styled("div", {
  all: "unset",
  display: "inline-block",
  fontFamily: "$mont",
  fontWeight: 700,
  fontSize: 24,
  color: "$text",
  position: "relative",
  overflowX: "hidden",
  userSelect: "none",
  cursor: "pointer",
  transition: "all 150ms ease",

  "&:after": {
    content: "''",
    position: "absolute",
    bottom: -4,
    left: 0,
    width: 100,
    height: 4,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    background: "$primary",
    transform: "translateX(-100%)",
    willChange: "transform",
  },

  "&:hover:after": {
    transform: "translateX(0%)",
  },
});

const dots = [1, 2, 3, 4, 5];

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
      <Grid>
        <Div css={{ gridArea: "title" }}>
          <Text as="h1" heading css={{ fontSize: 40, marginBottom: 8 }}>
            Project title, it can be a large title
          </Text>
          <Text secondary css={{ fontSize: 14, fontStyle: "italic" }}>
            Finished: 21/01/2022
          </Text>
        </Div>
        <Display>
          <Div
            css={{
              gridArea: "gallery",
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
        <Div css={{ gridArea: "links" }}>
          <Text secondary css={{ fontSize: 14, marginBottom: 8 }}>
            Check out:
          </Text>
          <Flex>
            <Button
              css={{ flex: 1, marginRight: 8, "& svg": { marginRight: 12 } }}
            >
              <GitHubLogoIcon /> Github
            </Button>
            <Button css={{ flex: 1, "& svg": { marginRight: 12 } }}>
              <GlobeIcon /> Preview
            </Button>
          </Flex>
        </Div>
        <Div css={{ gridArea: "type" }}>
          <Text secondary css={{ fontSize: 14, marginBottom: 8 }}>
            Project type:
          </Text>
          <ProjectType>Small project</ProjectType>
        </Div>
        <Div css={{ gridArea: "description" }}>
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
        </Div>
        <Div css={{ gridArea: "skills" }}>
          <Text secondary css={{ fontSize: 14, marginBottom: 8 }}>
            Tech used
          </Text>
        </Div>
      </Grid>
    </Container>
  );
};

export default Project;
