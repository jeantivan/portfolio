import type { NextPage } from "next";
import Head from "next/head";
import { styled } from "@config/stitches.config";
import Container from "@components/Container";
import Button from "@components/Button";
import Text from "@components/Text";
import Flex from "@components/Flex";
import ContactForm from "@components/ContactForm";

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

const Title = styled("div", {
  marginBottom: 16,
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
          <Text secondary css={{ fontSize: 20 }}>
            You can contact me through
          </Text>
          <Flex css={{ margin: "16px 0" }}>
            <Button
              as="a"
              css={{ flex: 1, marginRight: 16 }}
              href="https://www.linkedin.com/in/jean-tivan/"
              title="Let's connect ;)"
            >
              LinkedIn
            </Button>
            <Button
              as="a"
              css={{ flex: 1 }}
              href="mailto:jptivan53@gmail.com"
              title="Send me an Email! :D"
            >
              Email
            </Button>
          </Flex>
          <Text
            css={{ color: "$textSecondary", fontSize: 20, marginBottom: 16 }}
          >
            Or you can leave me a brief message so I can get back to you
          </Text>
          <ContactForm />
        </Content>
      </Grid>
    </Container>
  );
};

export default Contact;
