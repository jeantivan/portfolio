import "@/styles/global.css";
import { Metadata } from "next";
import { Inter, Anton } from "next/font/google";

import { dir } from "i18next";
import { languages } from "@/src/app/i18n/settings";

import Header from "@/components/Header";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import { mc } from "@/utils/helpers";

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  variable: "--anton",
  weight: "400"
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter"
});

export const metadata: Metadata = {
  title: {
    template: "%s | JeanTivan",
    default: "JeanTivan"
  }
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <body
        className={mc(
          inter.variable,
          anton.variable,
          "bg-background-3 dark:bg-background-1 min-h-screen",
          "grid grid-rows-[min-content_1fr_min-content]"
        )}
      >
        <Providers>
          <Header lng={lng} />
          <main className="bg-background-2 dark:bg-background-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
