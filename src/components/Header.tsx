import { useState } from "react";
import { useRouter } from "next/router";
import { styled } from "@config/stitches.config";
import { HamburgerMenuIcon, LayersIcon } from "@radix-ui/react-icons";
import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
} from "@radix-ui/react-dialog";
import IconButton from "@components/IconButton";
import Navbar from "@components/Navbar";

const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: 18,
  gridArea: "header",
  "@md": {
    display: "none",
  },
});

const Header = () => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  router.events.on("routeChangeComplete", () => {
    if (open) {
      setOpen(false);
    }
  });

  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <Container>
        <DialogTrigger asChild>
          <IconButton>
            <HamburgerMenuIcon />
          </IconButton>
        </DialogTrigger>

        <IconButton>
          <LayersIcon />
        </IconButton>
      </Container>
      <Navbar />
    </DialogRoot>
  );
};

export default Header;
