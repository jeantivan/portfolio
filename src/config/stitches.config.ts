import { Inter, Montserrat } from "next/font/google";
import { createStitches } from "@stitches/react";
import { orange, indigo, grass, amber, purple } from "@radix-ui/colors";

// Fuentes optimizadas usandos next/font
const inter = Inter({
  subsets: ["latin"],
  variable: "--inter",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
});

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
      ...orange,
      ...indigo,
      ...grass,
      ...amber,
      ...purple,

      // Variables del tema
      primary: `$orange9`,
      primaryDark: `$orange11`,
      primaryLight: `$orange8`,
      contrastText: "white",
      bg: "$sand2",
      text: "$sand12",
      textSecondary: "$sand11",
      menu: "$sand3",
    },
    fonts: {
      mont: montserrat.style.fontFamily,
      inter: inter.style.fontFamily,
    },
    shadows: {
      shadow: "0px 2px 4px rgba(0,0,0,0.1)",
    },
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 960px)",
  },
});
