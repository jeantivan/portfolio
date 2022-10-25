import { styled } from "@config/stitches.config";

const IconButton = styled("button", {
  all: "unset",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 6,
  border: "1px solid $sand5",
  color: "$primary",
  borderRadius: 6,
  cursor: "pointer",

  "&:hover": {
    borderColor: "$primary",
  },

  "& svg": {
    width: 20,
    height: 20,
    fill: "currentColor",
  },
});

export default IconButton;
