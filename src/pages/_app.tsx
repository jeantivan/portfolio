import type { AppProps } from "next/app";
import { globalCss } from "../config/stitches.config";

const globalStyles = globalCss({
  "html, body": {
    padding: "0",
    margin: "0",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
    backgroundColor: "$bg",
    color: "$orange1",
  },
  "*": { boxSizing: "border-box" },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
