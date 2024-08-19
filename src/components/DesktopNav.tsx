import { DownloadIcon } from "@radix-ui/react-icons";

import Button from "./common/Button";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

import { DesktopNavLink as NavLink } from "./NavLink";
import { useTranslations } from "next-intl";

function DesktopNav() {
  const t = useTranslations("NavBar");

  return (
    <div className="hidden md:flex items-center">
      <Logo />
      <nav className="hidden md:flex flex-1 justify-end items-center gap-4">
        <NavLink href="/" content={t("links.about-me")} />

        <NavLink href="/projects" content={t("links.projects")} />

        <NavLink href="/skills" content={t("links.skills")} />

        <NavLink href="/contact" content={t("links.contact")} />

        <Button as="a">
          {t("cv")}
          <span className="inline-flex">
            <DownloadIcon />
          </span>
        </Button>
        <div className="flex gap-2">
          <DarkMode />
        </div>
      </nav>
    </div>
  );
}

export default DesktopNav;
