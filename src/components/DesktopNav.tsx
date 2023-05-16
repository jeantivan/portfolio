import { ComponentProps } from "react";
import Link from "next/link";
import cx from "classnames";

import Logo from "./Logo";
import IconButton from "./common/IconButton";
import { GlobeIcon, MoonIcon } from "@radix-ui/react-icons";
import { Tooltip } from "./common/Tooltip";
// import SelectDarkMode from "./DropdownMenu";

function NavLink(props: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={cx(
        "uppercase py-2 px-6",
        "border-b border-transparent hover:border-primary-9"
      )}
    >
      {props.children}
    </Link>
  );
}

function DesktopNav() {
  return (
    <div className="hidden md:flex items-center py-2">
      <Logo />
      <nav className="hidden md:flex text-gold-11 flex-1 justify-center gap-8">
        <NavLink href="/">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </nav>
      <div className="flex gap-2 -mr-2.5">
        {/* TODO: Agregas los dropdown menu para cada elemento */}
        <Tooltip content="Select color scheme">
          <IconButton
            label="Select color scheme"
            color="secondary"
            icon={MoonIcon}
          />
        </Tooltip>
        <Tooltip content="Select language">
          <IconButton
            label="Select language"
            color="secondary"
            icon={GlobeIcon}
          />
        </Tooltip>
      </div>
    </div>
  );
}

export default DesktopNav;
