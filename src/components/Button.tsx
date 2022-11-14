import { styled } from "@config/stitches.config";

const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 20px",
  background: "linear-gradient(to right, $primaryDark,$primary)",
  color: "$contrastText",
  borderRadius: 6,
  cursor: "pointer",
  transition: "all 0.150s ease-out",

  "&:hover": {
    boxShadow: "0px 0px 12px $colors$primaryDark",
  },
});

export default Button;
