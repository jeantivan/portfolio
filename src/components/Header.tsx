import IconButton from "@components/IconButton";
import Navbar from "@components/Navbar";
import { styled } from "@config/stitches.config";
import { HamburgerMenuIcon, LayersIcon } from "@radix-ui/react-icons";
import {
  Root as DialogRoot,
  Trigger as DialogTrigger,
} from "@radix-ui/react-dialog";

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
  return (
    <DialogRoot>
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
