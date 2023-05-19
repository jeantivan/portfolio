import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Root as Separator } from "@radix-ui/react-separator";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import IconButton from "./common/IconButton";
import Logo from "./Logo";
// import DarkMode from "./DarkMode";
// import I18n from "./I18n";

import { useIsExpanded } from "./Header";

type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  isActive?: boolean;
};
function NavLink({ href, isActive, ...props }: NavLinkProps) {
  return (
    <Link
      className="text-2xl text-gold-12 w-full inline-flex justify-center relative z-0"
      href={href}
      {...props}
    >
      <span className="py-1.5 px-3 z-10 bg-gold-2">{props.children}</span>
      {isActive && (
        <span className="absolute w-full h-px bg-primary-9 top-1/2 -translate-y-1/2 z-[5]"></span>
      )}
    </Link>
  );
}

function Nav() {
  const pathname = usePathname();

  return (
    <div className="w-full pb-6">
      <Separator
        orientation="horizontal"
        decorative
        className="bg-gold-3 w-full h-px mb-4"
      />
      <nav className="flex flex-col w-full gap-4">
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
    </div>
  );
}

function MobileNav() {
  const { isExpanded, toggle } = useIsExpanded();

  return (
    <div className="md:hidden">
      <div className="flex items-center py-2">
        <Logo />
        <IconButton
          label={isExpanded ? "Cerrar nav" : "Abrir navbar"}
          variant="text"
          color={isExpanded ? "primary" : "secondary"}
          onClick={toggle}
          data-state={isExpanded ? "open" : "closed"}
          icon={isExpanded ? Cross1Icon : HamburgerMenuIcon}
        />
      </div>
      {isExpanded && <Nav />}
    </div>
  );
}

export default MobileNav;
