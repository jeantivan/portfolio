import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import cx from "classnames";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import Logo from "./Logo";
import IconButton from "./common/IconButton";
import { Tooltip } from "./common/Tooltip";

type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  isActive?: boolean;
};
function NavLink({ href, isActive, ...props }: NavLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={cx(
        "uppercase py-2 px-4 ",
        "relative z-0",
        isActive
          ? "text-gold-12 hover:text-gold-12"
          : "text-gold-10 hover:text-gold-11"
      )}
    >
      <span className="px-2 bg-inherit">{props.children}</span>
      {isActive && (
        <span className="absolute w-full h-px bg-primary-10 bottom-0 left-0 -translate-y-1/2 z-[5]"></span>
      )}
    </Link>
  );
}

function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center py-2">
      <Logo />
      <nav className="hidden md:flex flex-1 justify-center gap-8">
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
      <div className="flex gap-2 -mr-2.5">
        <Tooltip content="Visit my github">
          <IconButton
            label="Visit my github"
            color="secondary"
            icon={GitHubLogoIcon}
            as="a"
            href="https://github.com/jeantivan"
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default DesktopNav;
