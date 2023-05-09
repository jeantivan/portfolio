import "@styles/global.css";
import { Space_Grotesk } from "next/font/google";

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
      <body
        className={`${spaceGrotesk.className} dark dark-theme dark:bg-gold-1 bg-gold-1`}
      >
        <div className="dark:bg-gold-1 bg-gold-1">{children}</div>
      </body>
    </html>
  );
}
