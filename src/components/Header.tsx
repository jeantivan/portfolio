import IconButton from "./IconButton";
import { styled } from "@config/stitches.config";
import { HamburgerMenuIcon, LayersIcon } from "@radix-ui/react-icons";

const Container = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  padding: 18,
  gridArea: "header",
});

const Header = () => {
  return (
    <Container>
      <IconButton>
        <HamburgerMenuIcon />
      </IconButton>
      <IconButton>
        <LayersIcon />
      </IconButton>
    </Container>
  );
};

export default Header;
