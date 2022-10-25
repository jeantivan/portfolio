import { styled } from "@config/stitches.config";

const Container = styled("div", {
  marginTop: 0,
  marginBottom: 0,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 24,
  paddingRight: 24,
  paddingTop: 32,
  paddingBottom: 32,
  //zIndex: 1,

  width: "100%",
  "@md": {
    paddingLeft: 32,
    paddingRight: 32,
    maxWidth: 768,
  },
  "@lg": {
    maxWidth: 1200,
  },
});

export default Container;
