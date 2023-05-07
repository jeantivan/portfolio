"use client";
import { ComponentProps, ReactNode } from "react";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";

import cx from "classnames";

import { TSizes } from "@utils/types";

type IconButtonProps = ComponentProps<"button"> & {
  label: string;
  size?: TSizes;
};

type Sizes = {
  [K in TSizes]: string;
};

const buttonSizes: Sizes = {
  small: "p-2",
  medium: "p-2.5",
  large: "p-3",
};

const iconSizes: Sizes = {
  small: "[&>svg]:w-3.5 [&>svg]:h-3.5",
  medium: "[&>svg]:w-5 [&>svg]:h-5",
  large: "[&>svg]:w-6 [&>svg]:h-6",
};

function IconButton({
  children,
  label,
  className,
  size = "medium",
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={cx(
        "bg-transparent border border-gold-7 text-gold-9 rounded",
        "hover:border-primary-8 hover:text-primary-10 hover:bg-gold-3",
        "transition duration-75",
        buttonSizes[size],
        className
      )}
      {...rest}
    >
      <span className={cx(iconSizes[size], "fill-current")}>
        <AccessibleIcon.Root label={label}>{children}</AccessibleIcon.Root>
      </span>
    </button>
  );
}

export default IconButton;
