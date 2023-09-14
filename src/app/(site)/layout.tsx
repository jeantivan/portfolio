import "@/styles/global.css";
import { Space_Grotesk } from "next/font/google";

import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { mc } from "@/utils/helpers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--space-grotesk"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mc(spaceGrotesk.className, "bg-background-1")}>
        <Providers>
          <Header />
          <main className="pt-[56px] bg-background-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
