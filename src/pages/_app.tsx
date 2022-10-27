import App, { AppContext, AppInitialProps, AppProps } from "next/app";
import { getCookie, setCookie, hasCookie } from "cookies-next";
import { globalCss } from "@config/stitches.config";
import Layout from "@components/Layout";
import Settings from "@components/Settings";
import { TColorMode, TColors } from "@src/types";
import { COLOR_MODE_KEY, PRIMARY_COLOR_KEY } from "@src/constants";

type AppOwnProps = { color: TColors; mode: TColorMode };

const globalStyles = globalCss({
  "html, body": {
    padding: "0",
    margin: "0",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Inter, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
  "*": { boxSizing: "border-box" },
});

function MyApp({ Component, pageProps, color, mode }: AppProps & AppOwnProps) {
  globalStyles();
  return (
    <Settings color={color} mode={mode}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Settings>
  );
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context);
  const { req, res } = context.ctx;

  if (!hasCookie(PRIMARY_COLOR_KEY, { req, res })) {
    setCookie(PRIMARY_COLOR_KEY, "orange", { req, res });
  }
  if (!hasCookie(COLOR_MODE_KEY, { req, res })) {
    setCookie(COLOR_MODE_KEY, "dark", { req, res });
  }

  return {
    ...ctx,
    color: (getCookie(PRIMARY_COLOR_KEY, { req, res }) || "orange") as TColors,
    mode: (getCookie(COLOR_MODE_KEY, { req, res }) || "dark") as TColorMode,
  };
};

export default MyApp;
