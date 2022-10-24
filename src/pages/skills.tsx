import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GridIcon, ListBulletIcon } from "@radix-ui/react-icons";
import { styled } from "@config/stitches.config";
import Container from "@components/Container";
import IconButton from "@components/IconButton";
import Skill from "@components/Skill";

const Title = styled("h1", {
  fontFamily: "$mont",
  fontWeight: 700,
  fontSize: 72,
  margin: 0,
  marginBottom: 24,
  paddingBottom: 12,
});

const SubHeading = styled("h2", {
  fontFamily: "$mont",
  fontSize: 20,
  fontWeight: 700,
});

const Text = styled("p", {
  fontWeight: 400,
  color: "$sand11",
  fontSize: 16,
  lineHeight: 2,
  margin: 0,

  "@md": {
    fontSize: 18,
  },
});

const Span = styled("span", {
  position: "relative",

  "&:after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 6,
    width: "50%",
    backgroundColor: "$orange9",
    clipPath: "polygon(0 0, 100% 0%, 80% 100%, 0% 100%)",
    transform: "translate(0, 12px)",
  },
});

const Flex = styled("div", {
  display: "flex",
});

const SkillList = styled("div", {
  display: "grid",
  gridGap: "16px 16px",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridTemplateRows: "repeat(3, min-content)",

  variants: {
    list: {
      true: {
        gridTemplateColumns: "1fr",
      },
    },
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
    name: "React.js",
    image: "/images/skills/react.svg",
  },
  {
    name: "Next.js",
    image: "/images/skills/nextjs.svg",
  },
  {
    name: "HTML 5",
    image: "/images/skills/html-5.svg",
  },
  {
    name: "CSS",
    image: "/images/skills/css-3.svg",
  },
];

const Skills: NextPage = () => {
  const [list, setList] = useState(true);

  const toggleList = () => {
    setList(!list);
  };

  return (
    <Container>
      <Head>
        <title>Skills | JeanTivan</title>
      </Head>
      <Flex css={{ flexDirection: "column", marginBottom: 24 }}>
        <Title>
          <Span>Skills</Span>
        </Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis esse
          hic dolorum, minus tenetur vitae!
        </Text>
      </Flex>
      <Flex
        css={{
          flex: 1,
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <SubHeading>Tech skills</SubHeading>
        <IconButton onClick={toggleList}>
          {list ? <GridIcon /> : <ListBulletIcon />}
        </IconButton>
      </Flex>

      <SkillList list={list}>
        {skills.map((skill) => (
          <Skill key={skill.name} {...skill} list={list} />
        ))}
      </SkillList>
    </Container>
  );
};

export default Skills;
