import { styled } from "@config/stitches.config";
import Button from "@components/Button";

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

const ContactForm = () => {
  return (
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
      <Button css={{ gridArea: "button" }}>Send message</Button>
    </Form>
  );
};

export default ContactForm;
