import SocialLinks from "@components/SocialLinks";
import IconButton from "@components/IconButton";
import { styled, keyframes } from "@config/stitches.config";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import NextLink from "next/link";

const navShow = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translate(0)" },
});

const Header = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: 18,
  gridArea: "header",
  "@md": {
    display: "none",
  },
});

const Container = styled(DialogPrimitive.Content, {
  width: "100%",
  height: "100vh",
  position: "fixed",
  inset: 0,
  backgroundColor: "$sand5",
  zIndex: 100,

  background: `$sand4 radial-gradient(circle at 10% 90%, $sand2, $sand4 70%, $sand4) no-repeat`,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${navShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});

const Content = styled("div", {
  padding: 32,
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "center",
  height: "calc(100% - 70px)",
});

const Link = styled("a", {
  all: "unset",
  fontSize: 48,
  fontWeight: 700,
  margin: "20px 0",
  fontFamily: "$mont",

  "&:first-letter": {
    color: "$orange9",
  },
});

const NavLinks = styled("div", {
  margin: "auto auto",
  display: "flex",
  flexDirection: "column",
});

const Navbar = () => {
  return (
    <DialogPrimitive.Portal>
      <Container>
        <Header>
          <DialogPrimitive.Close asChild>
            <IconButton>
              <Cross1Icon />
            </IconButton>
          </DialogPrimitive.Close>
        </Header>
        <Content>
          <NavLinks>
            <NextLink href="/" passHref>
              <Link>About</Link>
            </NextLink>
            <NextLink href="/projects" passHref>
              <Link>Projects</Link>
            </NextLink>
            <NextLink href="/skills" passHref>
              <Link>Skills</Link>
            </NextLink>
          </NavLinks>
          <SocialLinks />
        </Content>
      </Container>
    </DialogPrimitive.Portal>
  );
};

export default Navbar;
