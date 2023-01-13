import Head from "next/head";
import type { NextPage } from "next";
import { styled } from "@config/stitches.config";
import Container from "@components/Container";
import Project from "@components/Project";

import { PROJECT_EXAMPLE } from "@src/constants";

const Span = styled("span", {});

const Grid = styled("div", {
  paddingTop: 32,
  display: "grid",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridGap: "16px",
});

const Title = styled("div", {
  gridColumn: "span 6",
  marginBottom: 24,

  "@md": {
    gridColumn: "span 5",
  },
});

const Text = styled("p", {
  margin: 0,
  color: "$text",
  fontSize: 16,
  lineHeight: 1.25,

  variants: {
    heading: {
      true: {
        fontFamily: "$mont",
        fontWeight: 700,
        lineHeight: 1.25,
      },
    },
    secondary: {
      true: {
        color: "$textSecondary",
      },
    },
  },
});

const Projects: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Projects | JeanTivan</title>
      </Head>
      <Grid>
        <Title>
          <Text
            heading
            as="h1"
            css={{ fontSize: 44, marginBottom: 8, "@lg": { fontSize: 64 } }}
          >
            The <Span css={{ color: "$primary" }}>projects</Span> that{" "}
            <Span css={{ color: "$primary" }}>I&apos;ve build</Span> so far.
          </Text>
          <Text secondary>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            consequuntur?
          </Text>
        </Title>
      </Grid>

      <section>
        <Project featured {...PROJECT_EXAMPLE} />
        <Project featured {...PROJECT_EXAMPLE} />
        <Project featured {...PROJECT_EXAMPLE} />
      </section>
      <Grid>
        <Text
          as="h3"
          heading
          css={{
            fontSize: 24,
            gridColumn: "span 5",
          }}
        >
          <Span css={{ border: 0, borderBottom: "2px solid $primary" }}>
            Small projects
          </Span>
        </Text>
        <Text secondary css={{ gridColumn: "span 6" }}>
          Interdum fermentum mollis leo eget vestibulum congue mauris, amet
          ullamcorper. Dignissim molestie cras scelerisque augue et tellus
          varius vitae.
        </Text>
        <Project {...PROJECT_EXAMPLE} />
        <Project {...PROJECT_EXAMPLE} />
        <Project {...PROJECT_EXAMPLE} />
        <Project {...PROJECT_EXAMPLE} />
      </Grid>
    </Container>
  );
};

export default Projects;
