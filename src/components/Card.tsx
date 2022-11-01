import { styled } from "@config/stitches.config";

const Card = styled("div", {
  borderRadius: 6,
  backgroundColor: "$menu",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
  width: "100%",
  height: "100%",
  userSelect: "none",
  cursor: "pointer",
  zIndex: 1,
  transition: "all 150ms ease",
});

export default Card;
