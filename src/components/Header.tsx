"use client";
import { useState, useContext, createContext } from "react";
import cx from "classnames";

import Container from "./common/Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const IsExpandedContext = createContext({
  isExpanded: false,
  toggle: () => {},
});

export const useIsExpanded = () => useContext(IsExpandedContext);

function Header() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <IsExpandedContext.Provider value={{ isExpanded, toggle }}>
      <header
        className={cx(
          "w-full backdrop-blur-sm fixed top-0 z-10 transition duration-75",
          {
            "bg-[--bg-navbar]": !isExpanded,
            "bg-gold-2": isExpanded,
          }
        )}
      >
        <Container>
          <DesktopNav />
          <MobileNav />
        </Container>
      </header>
    </IsExpandedContext.Provider>
  );
}
export default Header;
