import "@/styles/global.css";
import { Space_Grotesk, Inter } from "next/font/google";

import Header from "@/components/Header";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import { mc } from "@/utils/helpers";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--space-grotesk"
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter"
});

export const metadata = {
  title: {
    default: "JeanTivan",
    template: "%s | JeanTivan"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={mc(
          inter.className,
          "bg-background-1 min-h-screen",
          "grid grid-rows-[min-content_1fr_min-content]"
        )}
      >
        <Providers>
          <Header />
          <main className="bg-background-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
