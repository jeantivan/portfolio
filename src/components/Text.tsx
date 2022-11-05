import { styled } from "@config/stitches.config";

const Text = styled("p", {
  margin: 0,
  color: "$text",
  fontSize: 16,
  lineHeight: 1.25,

  variants: {
    heading: {
      true: {
        fontFamily: "$mont",
        fontWeight: 700,
        lineHeight: 1.25,
      },
    },
    secondary: {
      true: {
        color: "$textSecondary",
      },
    },
  },
});

export default Text;
