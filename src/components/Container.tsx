import { styled } from "@config/stitches.config";

const Container = styled("div", {
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 24,
  paddingRight: 24,
  //zIndex: 1,

  width: "100%",
  "@md": {
    paddingLeft: 32,
    paddingRight: 32,
    maxWidth: 768,
  },
  "@lg": {
    maxWidth: 960,
  },
});

export default Container;
