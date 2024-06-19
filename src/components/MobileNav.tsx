import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Cross1Icon,
  DownloadIcon,
  GitHubLogoIcon,
  HamburgerMenuIcon,
  LinkedInLogoIcon,
  MoonIcon
} from "@radix-ui/react-icons";

import IconButton from "./common/IconButton";

import { useIsExpanded } from "./Header";
import Button from "./common/Button";
import { Tooltip } from "./common/Tooltip";
import { mc } from "../utils/helpers";

type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  isActive?: boolean;
};
function NavLink({ href, isActive, ...props }: NavLinkProps) {
  return (
    <Link
      className={mc(
        "w-full inline-flex justify-center py-4",
        "text-4xl font-display text-background-11",
        "border-b border-primary-8",
        isActive && "border-primary-9 text-background-12"
      )}
      href={href}
      {...props}
    >
      {props.children}
    </Link>
  );
}

function Nav({
  isExpanded,
  toggle
}: {
  isExpanded: boolean;
  toggle: () => void;
}) {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 z-50">
      <div className="bg-background-2 p-3 w-full h-full grid grid-rows-[min-content_1fr_min-content]">
        <header className="flex gap-6 items-center justify-between py-2">
          <IconButton
            onClick={toggle}
            label={isExpanded ? "Cerrar nav" : "Abrir navbar"}
            data-state={isExpanded ? "open" : "closed"}
            icon={isExpanded ? Cross1Icon : HamburgerMenuIcon}
          />
          <Tooltip content="Switch color mode">
            <IconButton label="Switch color mode" icon={MoonIcon} />
          </Tooltip>
        </header>
        <nav className="flex flex-col justify-center items-center w-full gap-8">
          <NavLink href="/" isActive={pathname === "/"}>
            About
          </NavLink>
          <NavLink href="/projects" isActive={pathname === "/projects"}>
            Projects
          </NavLink>
          <NavLink href="/contact" isActive={pathname === "/contact"}>
            Contact
          </NavLink>
        </nav>
        <footer className="flex gap-6 justify-center py-3">
          <IconButton icon={LinkedInLogoIcon} label="LinkedIn Profile" />
          <IconButton icon={GitHubLogoIcon} label="LinkedIn Profile" />
        </footer>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="flex-1 md:flex-initial">
      <Link href="/">
        <p className="text-[1.875rem] leading-none uppercase font-display">
          JT
        </p>
      </Link>
    </div>
  );
}

function MobileNav() {
  const { isExpanded, toggle } = useIsExpanded();

  return (
    <div className="md:hidden">
      <div className="flex gap-6 items-center py-2">
        <IconButton
          onClick={toggle}
          label={isExpanded ? "Cerrar nav" : "Abrir navbar"}
          color={isExpanded ? "primary" : "secondary"}
          data-state={isExpanded ? "open" : "closed"}
          icon={isExpanded ? Cross1Icon : HamburgerMenuIcon}
        />
        <Logo />
        <Button as="a">
          Descargar CV{" "}
          <span className="inline-flex">
            <DownloadIcon />
          </span>
        </Button>
      </div>
      {isExpanded && <Nav isExpanded={isExpanded} toggle={toggle} />}
    </div>
  );
}

export default MobileNav;
