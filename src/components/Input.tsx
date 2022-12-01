import { forwardRef } from "react";
import type { CSS } from "@stitches/react";
import { styled } from "@config/stitches.config";

const Container = styled("div", {
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

const InputRoot = styled("input", {
  all: "unset",
  flex: 1,
  padding: "12px 20px",
  background: "$sand3",
  borderRadius: 4,
  outline: "1px solid $sand7",
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

type InputProps = {
  label: string;
  css?: CSS;
  textarea?: boolean;
};

const Input = forwardRef<React.ElementRef<typeof InputRoot>, InputProps>(
  function MyInput({ label, css, textarea, ...rest }, ref) {
    return (
      <Container css={css}>
        <Label>{label}</Label>
        <InputRoot as={textarea ? "textarea" : "input"} {...rest} ref={ref} />
      </Container>
    );
  }
);

export default Input;
