import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DownloadIcon, GitHubLogoIcon, MoonIcon } from "@radix-ui/react-icons";

import { mc } from "@/utils/helpers";

import IconButton from "./common/IconButton";
import { Tooltip } from "./common/Tooltip";
import Text from "./common/Text";
import Button from "./common/Button";

type NavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  isActive?: boolean;
};
function NavLink({ href, isActive, ...props }: NavLinkProps) {
  return (
    <Link
      {...props}
      href={href}
      className={mc(
        "uppercase text-base py-2 px-5",
        "relative z-0 text-background-12 hover:text-primary-11",
        isActive && "text-primary-9 hover:text-primary-9"
      )}
    >
      <span className="bg-inherit">{props.children}</span>
    </Link>
  );
}

function Logo() {
  return (
    <div className="flex-1 md:flex-initial text-3xl md:text-2xl text-gold-12">
      <Link href="/">
        <Text className="text-xl leading-[1.25rem] uppercase" display>
          JeanTivan
        </Text>
      </Link>
    </div>
  );
}

function DesktopNav() {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center py-3">
      {pathname !== "/" ? <Logo /> : null}
      <nav className="hidden md:flex flex-1 justify-end gap-4">
        <NavLink href="/" isActive={pathname === "/"}>
          About
        </NavLink>
        <NavLink href="/projects" isActive={pathname === "/projects"}>
          Projects
        </NavLink>
        <NavLink href="/contact" isActive={pathname === "/contact"}>
          Contact
        </NavLink>
        <Button as="a">
          Descargar CV{" "}
          <span className="inline-flex ml-2.5">
            <DownloadIcon />
          </span>
        </Button>
        <div className="flex gap-2">
          <Tooltip content="Switch color mode">
            <IconButton label="Switch color mode" icon={MoonIcon} />
          </Tooltip>
        </div>
      </nav>
    </div>
  );
}

export default DesktopNav;
