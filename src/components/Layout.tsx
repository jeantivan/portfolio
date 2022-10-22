import { ReactNode } from "react";
import Header from "./Header";
import { styled } from "@config/stitches.config";

const Container = styled("div", {
  backgroundImage: `radial-gradient(circle at 90% 10%, $sand1, $sand2 80%)`,
  backgroundRepeat: "no-repeat",
  minWidth: "100vw",
  minHeight: "100vh",
  overflowX: "hidden",
  display: "grid",
  gridTemplateColumns: "1f",
  gridTemplateRows: "min-content 1fr",
  gridTemplateAreas: `
    "header"
    "main"`,
});

const Main = styled("main", {
  display: "flex",
  justifyContent: "center",
  padding: 32,
  gridArea: "main",
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
