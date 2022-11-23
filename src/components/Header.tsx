import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { styled } from "@config/stitches.config";
import {
  HamburgerMenuIcon,
  GearIcon,
  DownloadIcon,
} from "@radix-ui/react-icons";
import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
} from "@radix-ui/react-dialog";
import {
  Root as MenuRoot,
  Trigger as MenuTrigger,
} from "@radix-ui/react-popover";
import IconButton from "@components/IconButton";
import Navbar from "@components/Navbar";
import Menu from "@components/Menu";
import Container from "@components/Container";
import DownloadCV from "@components/DownloadCV";

const StyledHeader = styled("header", {
  display: "flex",

  gridArea: "header",
});

const Nav = styled("nav", {
  display: "none",
  width: "100%",
  marginRight: 16,

  "@lg": { display: "flex" },
});

const Link = styled("a", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  fontFamily: "$mont",
  fontWeight: 500,
  color: "$text",
  padding: "6px 26px",
  border: "1px solid $sand5",
  borderRadius: 6,
  userSelect: "none",
  cursor: "pointer",

  "&:not(:last-child)": {
    marginRight: 16,
  },

  "&:hover": {
    borderColor: "$primary",
    color: "$primary",
  },

  variants: {
    active: {
      true: {
        borderColor: "$primary",
        color: "$primary",
      },
    },
  },
});

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const closeDialogOnRouteChange = () => {
      setOpen(false);
    };

    router.events.on("routeChangeStart", closeDialogOnRouteChange);

    return () => {
      router.events.off("routeChangeStart", closeDialogOnRouteChange);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <MenuRoot>
        <StyledHeader>
          <Container
            css={{ display: "flex", paddingTop: 18, paddingBottom: 18 }}
          >
            <DialogTrigger asChild>
              <IconButton
                css={{
                  marginRight: "auto",
                  "@lg": {
                    display: "none",
                  },
                }}
              >
                <HamburgerMenuIcon />
              </IconButton>
            </DialogTrigger>
            <Nav>
              <NextLink href="/" passHref>
                <Link active={router.pathname === "/"}>About</Link>
              </NextLink>

              <NextLink passHref href="/projects">
                <Link active={router.pathname === "/projects"}>Projects</Link>
              </NextLink>
              <NextLink passHref href="/skills">
                <Link active={router.pathname === "/skills"}>Skills</Link>
              </NextLink>
              <NextLink passHref href="/contact">
                <Link active={router.pathname === "/contact"}>Contact</Link>
              </NextLink>
            </Nav>
            <DownloadCV />
            <MenuTrigger asChild>
              <IconButton
                css={{
                  marginLeft: 16,
                  "&[data-state='open']": { borderColor: "$primary" },
                }}
              >
                <GearIcon />
              </IconButton>
            </MenuTrigger>
          </Container>
          <Navbar />
          <Menu />
        </StyledHeader>
      </MenuRoot>
    </DialogRoot>
  );
};

export default Header;
