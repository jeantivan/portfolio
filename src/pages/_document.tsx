import { Html, Head, Main, NextScript } from "next/document";
import { Space_Grotesk } from "next/font/google";
import { getCssText } from "@config/stitches.config";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
});

export default function Document() {
  return (
    <Html className={spaceGrotesk.variable}>
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
