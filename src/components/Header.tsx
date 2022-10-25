import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { styled } from "@config/stitches.config";
import { HamburgerMenuIcon, GearIcon } from "@radix-ui/react-icons";
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

const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: 18,
  gridArea: "header",
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
        <Container>
          <DialogTrigger asChild>
            <IconButton
              css={{
                marginRight: "auto",
                "@md": {
                  display: "none",
                },
              }}
            >
              <HamburgerMenuIcon />
            </IconButton>
          </DialogTrigger>

          <MenuTrigger asChild>
            <IconButton
              css={{
                marginLeft: "auto",
                "&[data-state='open']": { borderColor: "$primary" },
              }}
            >
              <GearIcon />
            </IconButton>
          </MenuTrigger>
        </Container>
        <Navbar />
        <Menu />
      </MenuRoot>
    </DialogRoot>
  );
};

export default Header;
