import "@/styles/global.css";

export const metadata = {
  title: "Sanity Studio | JeanTivan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
