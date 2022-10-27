import { ReactNode, useState, createContext, useContext } from "react";
import {
  TColorMode,
  TColorModeThemes,
  TColors,
  TPrimaryColorThemes,
} from "@src/types";
import { COLOR_MODE_KEY, PRIMARY_COLOR_KEY } from "@src/constants";
import { createColorModeTheme, createPrimaryColorTheme } from "@src/utils";
import { setCookie } from "cookies-next";

const colors = ["orange", "blue", "grass", "amber", "purple"] as const;

export type TSettings = {
  primaryColor: TColors;
  colorMode: TColorMode;
  changeColorMode: (mode: TColorMode) => void;
  changePrimaryColor: (color: TColors) => void;
};

const SettingsCxt = createContext<TSettings | null>(null);

const PrimaryColorModeThemes: TPrimaryColorThemes = colors.reduce(
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
      <div className={ColorModeThemes[colorMode]}>
        <div className={PrimaryColorModeThemes[primaryColor]}>{children}</div>
      </div>
    </SettingsCxt.Provider>
  );
};

export default Settings;
