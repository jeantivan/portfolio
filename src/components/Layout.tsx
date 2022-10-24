import { ReactNode } from "react";
import { styled } from "@config/stitches.config";
import Header from "@components/Header";
import SocialLinks from "@components/SocialLinks";

const Container = styled("div", {
  backgroundImage: `radial-gradient(circle at 90% 10%, $sand1, $sand2 80%)`,
  backgroundRepeat: "no-repeat",
  minWidth: "100vw",
  minHeight: "100vh",
  overflowX: "hidden",
  display: "grid",
  gridTemplateColumns: "1f",
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
    <Container>
      <Header />
      <Main>{children}</Main>
      <SocialLinks />
    </Container>
  );
};

export default Layout;
