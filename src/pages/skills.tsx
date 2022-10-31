import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "@config/stitches.config";
import Container from "@components/Container";
import Skill from "@components/Skill";

const Grid = styled("div", {
  paddingTop: 32,
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridGap: "16px 16px",
});

const Content = styled("div", {
  gridColumn: "span 6",

  "@lg": {
    gridColumn: "span 3",
  },
});

const Title = styled("h1", {
  fontFamily: "$mont",
  color: "$text",
  fontWeight: 700,
  fontSize: 56,
  margin: 0,
  marginBottom: 16,
});

const Text = styled("p", {
  fontWeight: 400,
  color: "$textSecondary",
  fontSize: 16,
  lineHeight: 2,
  margin: 0,

  "@md": {
    fontSize: 18,
  },
});

const Span = styled("span", {});

const SkillList = styled("div", {
  position: "relative",
  gridColumn: "span 6",
  display: "grid",
  gridTemplateColumns: "repeat(4, 64px)",
  gridTemplateRows: "repeat(auto-fill, 64px)",
  gap: "16px 16px",
  gridTemplateAreas: `
    "react react javascript typescript"
    "react react next react-spring"
  "material-ui tailwindcss css html"
`,
  placeContent: "center",
  zIndex: 0,

  "@lg": {
    gridColumn: "span 3",
    gridTemplateAreas: `
      "typescript javascript next ."
      "react-spring react react ."
      ". react react material-ui"
      ". tailwindcss css html"
    `,
  },
});

const skills = [
  {
    name: "Javascript",
    image: "/images/skills/javascript.svg",
  },
  {
    name: "Typescript",
    image: "/images/skills/typescript.svg",
  },
  {
    name: "React",
    image: "/images/skills/react.svg",
  },
  {
    name: "Next",
    image: "/images/skills/nextjs.svg",
  },
  {
    name: "HTML",
    image: "/images/skills/html-5.svg",
  },
  {
    name: "CSS",
    image: "/images/skills/css-3.svg",
  },
  {
    name: "Material UI",
    image: "/images/skills/material-ui.svg",
  },
  {
    name: "TailwindCSS",
    image: "/images/skills/tailwindcss.svg",
  },
  {
    name: "React Spring",
    image: "/images/skills/react-spring.svg",
  },
];

const Skills: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Skills | JeanTivan</title>
      </Head>
      <Grid>
        <Content>
          <Title>
            How I build a <Span css={{ color: "$primary" }}>website?</Span>
          </Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
            adipisci fugit ab nemo et soluta hic ipsa velit inventore totam
            eveniet aperiam esse laudantium, dolorem cupiditate officiis, minus
            ad aliquam!
          </Text>
        </Content>

        <SkillList>
          {skills.map((skill) => (
            <Skill key={skill.name} {...skill} />
          ))}

          <Span
            css={{
              gridColumn: "1 / 5",
              gridRow: "1 / 5",
              width: "100%",
              height: "100%",
              display: "block",
              color: "$primary",
              zIndex: -1,
              transform: "translate(25%, -15%)",
              "& svg": {
                stroke: "$primary",
              },
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 264 304"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.36414 77.1547L132 2.3094L261.636 77.1547V226.845L132 301.691L2.36414 226.845V77.1547Z"
                strokeWidth="4"
              />
            </svg>
          </Span>
        </SkillList>
      </Grid>
    </Container>
  );
};

export default Skills;
