import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "@config/stitches.config";
import Container from "@components/Container";

const Title = styled("h1", {
  fontFamily: "$mont",
  fontWeight: 700,
  fontSize: 72,
  margin: 0,
  marginBottom: 16,
  paddingBottom: 12,
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

const Projects: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Projects | JeanTivan</title>
      </Head>
      <Title>
        <Span>Projects</Span>
      </Title>
    </Container>
  );
};

export default Projects;
