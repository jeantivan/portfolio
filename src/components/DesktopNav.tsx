import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DownloadIcon } from "@radix-ui/react-icons";

import { mc } from "@/utils/helpers";
import { useClientTranslation } from "@/src/app/i18n/client";

import Button from "./common/Button";
import DarkMode from "./DarkMode";
import Logo from "./Logo";

type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  isActive?: boolean;
};
function NavLink({ href, isActive, ...props }: NavLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={mc(
        "text-base leading-none p-2 font-medium",
        "relative z-0 text-background-11 hover:text-background-12 underline decoration-transparent underline-offset-8",
        isActive && "text-background-12 decoration-primary-9"
      )}
    >
      <span className="bg-inherit">{props.children}</span>
    </Link>
  );
}

function DesktopNav({ lng }: { lng: string }) {
  const pathname = usePathname();

  const { t } = useClientTranslation(lng, "common");

  return (
    <div className="hidden md:flex items-center">
      {pathname !== "/" ? <Logo lng={lng} /> : null}
      <nav className="hidden md:flex flex-1 justify-end items-center gap-4">
        <NavLink href={t(`/${lng}`)} isActive={pathname === `/${lng}`}>
          {t("navbar.links.about-me")}
        </NavLink>
        <NavLink
          href={t(`/${lng}/projects`)}
          isActive={pathname === `/${lng}/projects`}
        >
          {t("navbar.links.projects")}
        </NavLink>
        <NavLink
          href={t(`/${lng}/skills`)}
          isActive={pathname === `/${lng}/skills`}
        >
          {t("navbar.links.skills")}
        </NavLink>
        <NavLink
          href={t(`/${lng}/contact`)}
          isActive={pathname === `/${lng}/contact`}
        >
          {t("navbar.links.contact")}
        </NavLink>
        <Button as="a">
          {t("navbar.cv")}
          <span className="inline-flex">
            <DownloadIcon />
          </span>
        </Button>
        <div className="flex gap-2">
          <DarkMode lng={lng} />
        </div>
      </nav>
    </div>
  );
}

export default DesktopNav;
