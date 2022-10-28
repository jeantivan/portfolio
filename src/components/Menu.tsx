import * as Popover from "@radix-ui/react-popover";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { styled } from "@config/stitches.config";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useSettings } from "@components/Settings";
import { COLORS } from "@src/constants";

const Arrow = styled(Popover.Arrow, {
  fill: "$menu",
});

const MenuContent = styled(Popover.Content, {
  zIndex: 100,
  maxWidth: 354,
  width: "calc(100vw - 36px)",
  background: "$menu",
  padding: 14,
  borderRadius: 6,
  boxShadow: "$shadow",
  color: "$text",
});

const MenuSection = styled("div", {
  marginBottom: 14,

  "&:last-child": {
    marginBottom: 0,
  },
});

const TitleSection = styled("div", {
  fontFamily: "$mont",
  fontSize: 16,
  fontWeight: 700,
  marginBottom: 14,
});

const MenuRadioGroup = styled(RadioGroupPrimitive.Root, {
  display: "flex",
  width: "100%",
});

const MenuRadioItem = styled(RadioGroupPrimitive.Item, {
  flex: 1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$sand3",
  padding: 10,
  border: "1px solid $sand7",
  color: "$text",

  "&:first-child": {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },

  "&:last-child": {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

  "&:hover:not(:disabled)": {
    backgroundColor: "$sand4",
  },

  "&:disabled": {
    color: "$sand11",
  },

  "&[data-state=checked]": {
    backgroundColor: "$sand5",
    borderColor: "$primary",
    color: "$primary",
  },
});

const Span = styled("span", {
  width: "100%",
  height: 0,
  position: "relative",
  paddingTop: "50%",
  borderRadius: 2,

  "&:after": {
    content: "''",
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
  },
});

const RightSlot = styled("span", {
  display: "inline-flex",
  marginRight: 14,
});

const Menu = () => {
  const { primaryColor, colorMode, changePrimaryColor, changeColorMode } =
    useSettings()!;

  const handlePrimaryColorChange = (color: typeof primaryColor) => {
    changePrimaryColor(color);
  };

  const handleColorModeChange = (mode: typeof colorMode) => {
    changeColorMode(mode);
  };

  return (
    <MenuContent sideOffset={14}>
      <MenuSection>
        <TitleSection>Color mode</TitleSection>
        <MenuRadioGroup
          name="color-mode"
          value={colorMode}
          onValueChange={handleColorModeChange}
        >
          <MenuRadioItem value="dark">
            <RightSlot>
              <MoonIcon />
            </RightSlot>
            Dark
          </MenuRadioItem>
          <MenuRadioItem value="light">
            <RightSlot>
              <SunIcon />
            </RightSlot>
            Light
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuSection>
      <MenuSection>
        <TitleSection>Primary color</TitleSection>
        <MenuRadioGroup
          name="primary-color"
          value={primaryColor}
          onValueChange={handlePrimaryColorChange}
        >
          {COLORS.map((color) => (
            <MenuRadioItem value={color} key={color}>
              <Span
                aria-label={color}
                css={{ backgroundColor: `$${color}9` }}
              />
            </MenuRadioItem>
          ))}
        </MenuRadioGroup>
      </MenuSection>
      <MenuSection css={{ marginBottom: 0 }}>
        <TitleSection>Language</TitleSection>
        <MenuRadioGroup name="language" defaultValue="dark">
          <MenuRadioItem value="dark">EN</MenuRadioItem>
          <MenuRadioItem value="light" disabled>
            ES
          </MenuRadioItem>
        </MenuRadioGroup>
      </MenuSection>
      <Arrow />
    </MenuContent>
  );
};

export default Menu;
