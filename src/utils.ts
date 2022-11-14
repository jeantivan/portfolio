import { sand, sandDark } from "@radix-ui/colors";
import { createTheme } from "@config/stitches.config";
import { TColorMode, TColors } from "@src/types";

export const createPrimaryColorTheme = (color: TColors) => {
  return createTheme({
    colors: {
      primary: `$${color}9`,
      primaryDark: `$${color}11`,
      primaryLight: `$${color}8`,
      contrastText: color === "amber" ? "black" : "white",
    },
  });
};

export const createColorModeTheme = (mode: TColorMode) => {
  if (mode === "light") {
    return createTheme({
      colors: {
        ...sand,

        bg: "$sand2",
        text: "$sand12",
        textSecondary: "$sand11",
        menu: "white",
      },
    });
  }

  return createTheme({
    colors: {
      ...sandDark,

      bg: "$sand2",
      text: "$sand12",
      textSecondary: "$sand11",
      menu: "$sand3",
    },
  });
};
