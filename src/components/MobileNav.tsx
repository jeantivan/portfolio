import { ReactNode, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  Cross1Icon,
  DownloadIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon
} from "@radix-ui/react-icons";

import { mc } from "@/utils/helpers";
import { useClientTranslation } from "@/src/app/i18n/client";

import IconButton from "./common/IconButton";
import Button from "./common/Button";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

type NavLinkProps = {
  closeNav: () => void;
  isActive?: boolean;
  href: string;
  children: ReactNode;
};
function NavLink({ href, isActive, closeNav, ...props }: NavLinkProps) {
  const router = useRouter();

  return (
    <a
      className={mc(
        "w-full inline-flex justify-center py-4",
        "text-4xl font-display text-background-11",
        "border-b border-primary-8",
        isActive && "border-primary-9 text-background-12"
      )}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        closeNav();
        router.push(href);
      }}
      {...props}
    >
      {props.children}
    </a>
  );
}

function Nav({
  //isExpanded,
  toggle,
  closeNav,
  lng
}: {
  //isExpanded: boolean;
  lng: string;
  toggle: () => void;
  closeNav: () => void;
}) {
  const pathname = usePathname();
  const { t } = useClientTranslation(lng, "common");

  return (
    <div className="fixed inset-0 z-50">
      <div className="bg-background-2 p-3 w-full h-full grid grid-rows-[min-content_1fr_min-content]">
        <header className="flex gap-6 items-center justify-between py-2">
          <IconButton
            onClick={toggle}
            label={t("navbar.close")}
            icon={Cross1Icon}
          />
          <DarkMode lng={lng} />
        </header>
        <nav className="flex flex-col justify-center items-center w-full gap-8">
          <NavLink
            href={t(`/${lng}`)}
            isActive={pathname === `/${lng}`}
            closeNav={closeNav}
          >
            {t("navbar.links.about-me")}
          </NavLink>
          <NavLink
            href={t(`/${lng}/projects`)}
            isActive={pathname === `/${lng}/projects`}
            closeNav={closeNav}
          >
            {t("navbar.links.projects")}
          </NavLink>
          <NavLink
            href={t(`/${lng}/skills`)}
            isActive={pathname === `/${lng}/skills`}
            closeNav={closeNav}
          >
            {t("navbar.links.skills")}
          </NavLink>
          <NavLink
            href={t(`/${lng}/contact`)}
            isActive={pathname === `/${lng}/contact`}
            closeNav={closeNav}
          >
            {t("navbar.links.contact")}
          </NavLink>
        </nav>
        <footer className="flex gap-6 justify-center py-3">
          <IconButton
            icon={LinkedInLogoIcon}
            label={t("navbar.mobile.linkedin-btn")}
          />
          <IconButton
            icon={GitHubLogoIcon}
            label={t("navbar.mobile.github-btn")}
          />
        </footer>
      </div>
    </div>
  );
}

function MobileNav({ lng }: { lng: string }) {
  const { t } = useClientTranslation(lng, "common");

  const [showNav, setShowNav] = useState<boolean>(false);

  const toggle = () => setShowNav(!showNav);

  const closeNav = () => setShowNav(false);

  return (
    <div className="md:hidden">
      <div className="flex gap-6 items-center py-2">
        <IconButton
          onClick={toggle}
          label={t("navbar.mobile.open")}
          color="secondary"
          icon={HamburgerMenuIcon}
        />
        <Logo lng={lng} mobile />
        <Button as="a">
          {t("navbar.cv")}{" "}
          <span className="inline-flex">
            <DownloadIcon />
          </span>
        </Button>
      </div>
      {showNav && <Nav lng={lng} closeNav={closeNav} toggle={toggle} />}
    </div>
  );
}

export default MobileNav;
