"use client";
import { useState, useContext, createContext } from "react";

import Container from "./common/Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { mc } from "@/utils/helpers";

const ShowNavContext = createContext({
  showNav: false,
  toggle: () => {},
  closeNav: () => {}
});

export const useShowNav = () => useContext(ShowNavContext);

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggle = () => {
    setShowNav(!showNav);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <ShowNavContext.Provider value={{ showNav, toggle, closeNav }}>
      <header
        className={mc(
          "w-full transition duration-75",
          "bg-background-2 dark:bg-background-1"
        )}
      >
        <Container>
          <DesktopNav />
          <MobileNav />
        </Container>
      </header>
    </ShowNavContext.Provider>
  );
}
export default Header;
