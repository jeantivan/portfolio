"use client";
import * as Toggle from "@radix-ui/react-toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { useTheme } from "next-themes";

import { Tooltip } from "./common/Tooltip";
import IconButton from "./common/IconButton";

function DarkMode() {
  const { theme, setTheme } = useTheme();
  return (
    <Tooltip content="Switch color mode">
      <Toggle.Root
        asChild
        onPressedChange={() => {
          if (theme === "dark") return setTheme("light");
          return setTheme("dark");
        }}
      >
        <IconButton
          label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
          icon={theme === "dark" ? SunIcon : MoonIcon}
        />
      </Toggle.Root>
    </Tooltip>
  );
}

export default DarkMode;
