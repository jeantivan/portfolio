import cx from "classnames";
import Link from "next/link";

import Container from "./common/Container";
import MobileNav from "./MobileNav";

function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-gold-2">
      <Container>
        <div className="py-2 flex items-center">
          <div className="flex-1 md:flex-initial text-3xl md:text-2xl text-gold-12">
            <Link href="/">
              JeanTivan
              <span className="text-primary-9">.</span>
              dev
            </Link>
          </div>
          <nav className="hidden md:flex text-gold-11 flex-1 justify-center gap-8">
            <Link
              href="/"
              className={cx(
                "uppercase py-2 px-6",
                "border-b border-transparent hover:border-primary-9"
              )}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={cx(
                "uppercase py-2 px-6",
                "border-b border-transparent hover:border-primary-9"
              )}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={cx(
                "uppercase py-2 px-6",
                "border-b border-transparent hover:border-primary-9"
              )}
            >
              Contact
            </Link>
          </nav>
          <MobileNav />
          {/* TODO: MENU con las opciones de i18n y darkmode (deshabilitadas) */}
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
