import { ComponentProps } from "react";
import Link from "next/link";
import cx from "classnames";

import Logo from "./Logo";

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
    </div>
  );
}

export default DesktopNav;
