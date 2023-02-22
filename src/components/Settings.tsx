import { ReactNode, useState, createContext, useContext } from "react";
import { setCookie } from "cookies-next";
import { styled } from "@config/stitches.config";
import {
  TColorMode,
  TColorModeThemes,
  TColors,
  TPrimaryColorThemes,
} from "@utils/types";
import { COLORS, COLOR_MODE_KEY, PRIMARY_COLOR_KEY } from "@utils/constants";
import { createColorModeTheme, createPrimaryColorTheme } from "@utils/helpers";

export type TSettings = {
  primaryColor: TColors;
  colorMode: TColorMode;
  changeColorMode: (mode: TColorMode) => void;
  changePrimaryColor: (color: TColors) => void;
};

const SettingsCxt = createContext<TSettings | null>(null);

const PrimaryColorModeThemes: TPrimaryColorThemes = COLORS.reduce(
  (acc, curr) => ((acc[curr] = createPrimaryColorTheme(curr)), acc),
  {} as TPrimaryColorThemes
);

const ColorModeThemes: TColorModeThemes = {
  dark: createColorModeTheme("dark"),
  light: createColorModeTheme("light"),
};

export const useSettings = () => useContext(SettingsCxt);

type SettingsProps = {
  children: ReactNode;
  mode: TColorMode;
  color: TColors;
};

const Transition = styled("div", {
  "& *": {
    transition:
      "color 150ms ease, border-color 150ms ease, background-color 150ms ease",
  },
});

const Settings = ({ children, mode, color }: SettingsProps) => {
  const [colorMode, setColorMode] = useState<TColorMode>(mode);
  const [primaryColor, setPrimaryColor] = useState<TColors>(color);

  const changeColorMode = (mode: TColorMode) => {
    setCookie(COLOR_MODE_KEY, mode);

    setColorMode(mode);
  };
  const changePrimaryColor = (color: TColors) => {
    setCookie(PRIMARY_COLOR_KEY, color);

    setPrimaryColor(color);
  };

  return (
    <SettingsCxt.Provider
      value={{ colorMode, primaryColor, changeColorMode, changePrimaryColor }}
    >
      {/* <div className={ColorModeThemes[colorMode]}>
        <div className={PrimaryColorModeThemes[primaryColor]}>{children}</div>
      </div> */}
      <div
        className={`${ColorModeThemes[colorMode]} ${PrimaryColorModeThemes[primaryColor]}`}
      >
        <Transition>{children}</Transition>
      </div>
    </SettingsCxt.Provider>
  );
};

export default Settings;
