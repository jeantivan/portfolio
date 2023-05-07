import { ReactNode } from "react";
import { styled } from "@config/stitches.config";
import Header from "@components/Header";
import SocialLinks from "@components/SocialLinks";

import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
});

const Container = styled("div", {
  backgroundColor: "$bg",
  backgroundImage: `radial-gradient(circle at 15% 50%, $sand4, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $sand4, rgba(255, 255, 255, 0) 25%)`,
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  minWidth: "100%",
  minHeight: "100vh",
  overflowX: "hidden",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "min-content 1fr min-content",
  gridTemplateAreas: `
    "header"
    "main"
    "footer"`,
});

const Main = styled("main", {
  gridArea: "main",
  display: "flex",
  justifyContent: "center",
  //"@md": { padding: 32 },
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={spaceGrotesk.className}>
      <Container>
        <Header />
        <Main>{children}</Main>
        <SocialLinks />
      </Container>
    </div>
  );
};

export default Layout;
