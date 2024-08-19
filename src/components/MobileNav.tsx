import {
  Cross1Icon,
  DownloadIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons";

import { useTranslations } from "next-intl";
import { mc } from "@/utils/helpers";

import IconButton from "./common/IconButton";
import Button from "./common/Button";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import { useShowNav } from "./Header";
import { MobileNavLink as NavLink } from "./NavLink";

function Nav() {
  const t = useTranslations("NavBar");
  const { closeNav } = useShowNav();

  return (
    <div className="fixed inset-0 z-50">
      <div className="bg-background-2 p-3 w-full h-full grid grid-rows-[min-content_1fr_min-content]">
        <header className="flex gap-6 items-center justify-between py-2">
          <IconButton onClick={closeNav} label={t("close")} icon={Cross1Icon} />
          <DarkMode />
        </header>
        <nav className="flex flex-col justify-center items-center w-full gap-8">
          <NavLink href="/" content={t("links.about-me")} closeNav={closeNav} />

          <NavLink
            href="/projects"
            content={t("links.projects")}
            closeNav={closeNav}
          />

          <NavLink
            href="/skills"
            content={t("links.skills")}
            closeNav={closeNav}
          />

          <NavLink
            href="/contact"
            content={t("links.contact")}
            closeNav={closeNav}
          />
        </nav>
        <footer className="flex gap-6 justify-center py-3">
          <IconButton
            icon={LinkedInLogoIcon}
            label={t("mobile.linkedin-btn")}
          />
          <IconButton icon={GitHubLogoIcon} label={t("mobile.github-btn")} />
        </footer>
      </div>
    </div>
  );
}

function MobileNav() {
  const t = useTranslations("NavBar");
  const { showNav, toggle } = useShowNav();

  return (
    <div className="md:hidden">
      <div className="flex justify-end md:justify-betweenW gap-6 items-center py-2">
        <IconButton
          onClick={toggle}
          label={t("mobile.open")}
          color="secondary"
          icon={HamburgerMenuIcon}
        />
        <Logo mobile />
        <Button as="a">
          {t("cv")}{" "}
          <span className="inline-flex">
            <DownloadIcon />
          </span>
        </Button>
      </div>
      {showNav && <Nav />}
    </div>
  );
}

export default MobileNav;
