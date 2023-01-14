import { styled } from "@config/stitches.config";

const Tag = styled("div", {
  fontSize: 12,
  color: "$primary",
  borderRadius: 999,
  border: "1px solid $primary",
  padding: "6px 20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  "&:not(:last-child)": { marginRight: 12 },
});

export default Tag;
