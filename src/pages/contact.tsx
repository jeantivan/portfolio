import type { NextPage } from "next";
import Head from "next/head";
import Container from "@components/Container";
import { styled } from "@config/stitches.config";

const Span = styled("span", {});
const Grid = styled("div", {
  paddingTop: 32,
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "repeat(6, 1fr)",
  gridGap: "24px 16px",
  zIndex: 0,
});

const Content = styled("div", {
  gridColumn: "span 6",
  "@lg": {
    gridColumn: "span 4",
  },
});

const Flex = styled("div", {
  display: "flex",
});

const Title = styled("div", {
  marginBottom: 16,
});

const Text = styled("p", {
  margin: 0,
  color: "$text",
  fontSize: 16,
  lineHeight: 1.8,

  variants: {
    heading: {
      true: {
        fontFamily: "$mont",
        fontWeight: 700,
        lineHeight: 1.25,
      },
    },
  },
});

const Link = styled("a", {
  all: "unset",
  padding: "12px 20px",
  display: "inline-flex",
  borderRadius: 6,
  background: "$primary",
  justifyContent: "center",
  textTransform: "uppercase",
  fontWeight: 700,
  cursor: "pointer",
  userSelect: "none",

  "&:not(:last-child)": {
    marginRight: 16,
  },

  "&:hover": {
    background: "$primaryHover",
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
              css={{ fontSize: 48, "@lg": { fontSize: 64 } }}
            >
              How you can <Span css={{ color: "$primary" }}>contact me?</Span>
            </Text>
          </Title>
          <Text css={{ color: "$textSecondary", fontSize: 20 }}>
            You can contact me through
          </Text>
          <Flex css={{ width: "50%", margin: "16px 0" }}>
            <Link
              css={{ flex: 1 }}
              href="https://www.linkedin.com/in/jean-tivan/"
              title="Let's connect ;)"
            >
              LinkedIn
            </Link>
            <Link
              css={{ flex: 1 }}
              href="mailto:jptivan53@gmail.com"
              title="Send me an Email! :D"
            >
              Email
            </Link>
            {/* <Link css={{ flex: 1 }}>UpWork</Link> */}
          </Flex>
          <Text
            css={{ color: "$textSecondary", fontSize: 20, marginBottom: 16 }}
          >
            Or you can leave me a brief message so I can get back to you
          </Text>
        </Content>
      </Grid>
    </Container>
  );
};

export default Contact;
