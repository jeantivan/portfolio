import { createStitches } from "@stitches/react";
import { sandDark, orange } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...sandDark,
      ...orange,
      primary: orange.orange9,
      bg: sandDark.sand2,
    },
    fonts: {
      mont: "'Montserrat', sans-serif",
    },
  },
});
