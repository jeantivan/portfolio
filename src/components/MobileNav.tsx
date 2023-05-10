"use client";
import { ReactNode } from "react";
import Link from "next/link";
import cx from "classnames";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import IconButton from "./common/IconButton";
import Container from "./common/Container";

const Content = ({ children }: { children: ReactNode }) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay />
    <DialogPrimitive.Content
      className={cx(
        "w-full h-screen bg-gold-2 focus:outline-none",
        "fixed top-0 left-0",
        "data-[state=open]:animate-contentShow"
      )}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
);

function MobileNav() {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <IconButton label="Abrir navbar" variant="text" color="secondary">
          <HamburgerMenuIcon />
        </IconButton>
      </DialogPrimitive.Trigger>
      <Content>
        <Container className="h-full flex flex-col">
          <header className="py-2 flex items-center justify-end">
            <DialogPrimitive.Close>
              <IconButton label="Cerrar navbar" color="secondary">
                <Cross1Icon />
              </IconButton>
            </DialogPrimitive.Close>
          </header>
          <nav className="flex flex-col justify-center items-center gap-y-20 mt-32">
            <Link
              href="/"
              className="text-6xl text-gold-11 border-b py-4 border-primary-9"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="text-6xl text-gold-11 border-b border-transparent py-4"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-6xl text-gold-11 border-b border-transparent py-4"
            >
              Contact
            </Link>
          </nav>
          <footer className="mt-auto mb-8">
            <div className="w-full flex justify-center">
              <div className="text-2xl text-primary-9 py-4 px-6 border-r">
                EN
              </div>
              <div className="text-2xl text-gold-11 py-4 px-6">ES</div>
            </div>
          </footer>
        </Container>
      </Content>
    </DialogPrimitive.Root>
  );
}

export default MobileNav;
