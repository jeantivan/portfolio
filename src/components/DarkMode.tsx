"use client";
import * as Toggle from "@radix-ui/react-toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { useTheme } from "next-themes";

import { useTranslations } from "next-intl";

import { Tooltip } from "./common/Tooltip";
import IconButton from "./common/IconButton";

import { useEffect, useState } from "react";

function DarkMode() {
  const { theme, setTheme } = useTheme();

  const t = useTranslations("DarkMode");

  const [mounted, setMounted] = useState(false);

  // Asegúrate de que solo interactuamos con el tema después de montar el componente en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // O renderiza un loader si lo prefieres
  }
  return (
    <Tooltip content={t(theme === "dark" ? "switch.light" : "switch.dark")}>
      <Toggle.Root
        asChild
        onPressedChange={() => {
          if (theme === "dark") return setTheme("light");
          return setTheme("dark");
        }}
      >
        <IconButton
          label={t(theme === "dark" ? "switch.light" : "switch.dark")}
          icon={theme === "dark" ? SunIcon : MoonIcon}
        />
      </Toggle.Root>
    </Tooltip>
  );
}

function DarkModeWrapper() {
  return (
    <div className="min-w-9">
      <DarkMode />
    </div>
  );
}

export default DarkModeWrapper;
