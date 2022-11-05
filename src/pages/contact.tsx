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
  flexWrap: "wrap",
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

const Button = styled("button", {
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

const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const Label = styled("label", {
  color: "$text",
  fontFamily: "$mont",
  fontWeight: 700,
  marginBottom: 8,
  display: "block",
});

const Input = styled("input", {
  all: "unset",
  flex: 1,
  padding: "12px 20px",
  background: "$sand3",
  borderRadius: 4,
  borderColor: "1px solid $sand7",
  color: "$text",

  "&:hover": {
    background: "$sand4",
  },

  "&:focus": {
    outline: "1px solid $primary",
  },

  "&:invalid": {
    outline: "1px solid red",
  },
});

const Form = styled("form", {
  display: "grid",
  gridGap: "16px",
  gridTemplateAreas: `
    "name"
    "email"
    "message"
    "button"
  `,
  marginBottom: 64,

  "@md": {
    gridTemplateAreas: `
    "name email"
    "message message"
    "button button"
  `,
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
            <Button
              as="a"
              css={{ flex: 1 }}
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
            {/* <Link css={{ flex: 1 }}>UpWork</Link> */}
          </Flex>
          <Text
            css={{ color: "$textSecondary", fontSize: 20, marginBottom: 16 }}
          >
            Or you can leave me a brief message so I can get back to you
          </Text>
          <Form>
            <InputContainer css={{ gridArea: "name" }}>
              <Label htmlFor="name">Full name</Label>
              <Input name="name" id="name" placeholder="John Doe" required />
            </InputContainer>
            <InputContainer css={{ gridArea: "email" }}>
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                required
              />
            </InputContainer>
            <InputContainer css={{ gridArea: "message" }}>
              <Label htmlFor="message">Message</Label>
              <Input
                as="textarea"
                name="message"
                id="message"
                css={{ minHeight: 200 }}
                placeholder="Your message goes here..."
                required
                minLength={5}
                maxLength={256}
              ></Input>
            </InputContainer>
            <Button css={{ gridArea: "button" }}>Enviar</Button>
          </Form>
        </Content>
      </Grid>
    </Container>
  );
};

export default Contact;
