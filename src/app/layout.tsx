import "@/styles/global.css";
import { Space_Grotesk } from "next/font/google";

import Header from "@/components/Header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--space-grotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} dark-theme bg-gold-1`}>
        <div className="bg-gold-1">
          <Header />
          <main className="pt-[57px]">{children}</main>
        </div>
      </body>
    </html>
  );
}
