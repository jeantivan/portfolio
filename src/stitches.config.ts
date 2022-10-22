import { createStitches } from "@stitches/react";
import { sandDark } from "@radix-ui/colors";

export const { styled, globalCss } = createStitches({
  theme: {
    colors: {
      bg: sandDark.sand2,
    },
  },
});
