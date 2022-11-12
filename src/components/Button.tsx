import { styled } from "@config/stitches.config";

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 20px",
  background: "$primary",
  color: "$contrastText",
  borderRadius: 6,

  "&:hover": {
    backgroundColor: "$primaryHover",
  },
});

export default Button;
