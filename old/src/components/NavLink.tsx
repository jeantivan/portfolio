"use client";
import { ComponentPropsWithoutRef } from "react";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { mc } from "@/utils/helpers";

type NavLinkProps = ComponentPropsWithoutRef<"a"> & {
  href: string;
  content: string;
  closeNav: () => void;
};

export function MobileNavLink({
  href,
  content,
  closeNav,
  ...rest
}: NavLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <a
      {...rest}
      className={mc(
        "w-full inline-flex justify-center py-4",
        "text-4xl font-display text-background-11",
        "border-b border-primary-8",
        isActive && "border-primary-9 text-background-12"
      )}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        closeNav();
        router.push(href);
      }}
    >
      {content}
    </a>
  );
}

type DesktopNavLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  href: string;
  content: string;
};

export function DesktopNavLink({
  href,
  content,
  ...rest
}: DesktopNavLinkProps) {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      {...rest}
      href={href}
      className={mc(
        "text-base leading-none p-2 font-medium",
        "relative z-0 text-background-11 hover:text-background-12 underline decoration-transparent underline-offset-8",
        isActive && "text-background-12 decoration-primary-9"
      )}
    >
      <span className="bg-inherit">{content}</span>
    </Link>
  );
}
