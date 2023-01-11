import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "@config/stitches.config";
import Container from "@components/Container";
import Button from "@components/Button";
import Text from "@components/Text";
import Flex from "@components/Flex";

const Span = styled("span", {});
const Grid = styled("div", {
  paddingTop: 32,
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "repeat(8, 1fr)",
  gridGap: "24px 16px",
  zIndex: 0,
});

const Content = styled("div", {
  gridColumn: "span 8",
});

const Title = styled("div", {
  marginBottom: 16,
});

const Link = styled("a", {
  textDecoration: "none",
  color: "$primary",

  "&:hover": {
    textDecoration: "underline",
  },
});

const Contact: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>Contact | JeanTivan</title>
      </Head>
      <Grid>
        <Content>
          <Title>
            <Text
              as="h1"
              heading
              css={{ fontSize: 48, "@lg": { fontSize: 56 } }}
            >
              Do you want to{" "}
              <Span css={{ color: "$primary" }}>work with me?</Span>
            </Text>
          </Title>
          <Text
            secondary
            css={{ fontSize: 22, marginBottom: 32, lineHeight: 1.6 }}
          >
            Currently, I am looking for a new exciting experience, so if you are
            looking for someone who is passionate and eager to learn and grow,
            please do not hesitate to contact me through{" "}
            <Link
              href="https://www.linkedin.com/in/jean-tivan/"
              title="Let's connect ;)"
            >
              LinkedIn
            </Link>{" "}
            or you can send me an email at{" "}
            <Link
              href="mailto:jptivan53@gmail.com"
              title="Send me an Email! :D"
            >
              jptivan52@gmail.com
            </Link>
          </Text>
        </Content>
        <Content
          css={{ gridColumn: "span 8", "@md": { gridColumn: "2 / span 6" } }}
        >
          <Text
            as="h2"
            heading
            css={{ marginBottom: 24, fontSize: 24, "@lg": { fontSize: 32 } }}
          >
            Get a copy of my curriculum vitae
          </Text>
          <Flex css={{ marginBottom: 40 }}>
            <Button disabled css={{ flex: 1, marginRight: 16 }}>
              English
            </Button>
            <Button disabled css={{ flex: 1 }}>
              Spanish
            </Button>
          </Flex>
        </Content>
      </Grid>
    </Container>
  );
};

export default Contact;
