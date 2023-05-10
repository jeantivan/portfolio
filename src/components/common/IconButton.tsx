"use client";
import { ComponentProps } from "react";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";

import cx from "classnames";

import { TSizes } from "@utils/types";

type Variants = "text" | "outlined";
type Colors = "primary" | "secondary" | "default";

type IconButtonProps = ComponentProps<"button"> & {
  label: string;
  variant?: Variants;
  color?: Colors;
  size?: TSizes;
  iconClassName?: string;
};

const buttonSizes: Record<TSizes, string> = {
  small: "p-2",
  medium: "p-2.5",
  large: "p-3",
};

const iconSizes: Record<TSizes, string> = {
  small: "[&>svg]:w-3.5 [&>svg]:h-3.5",
  medium: "[&>svg]:w-5 [&>svg]:h-5",
  large: "[&>svg]:w-6 [&>svg]:h-6",
};

const variantClassNames: Record<Variants, string> = {
  text: "bg-transparent border-0",
  outlined: "border",
};

const colorClassNames: Record<Colors, string> = {
  default: "border-gold-12 text-gold-12 hover:bg-neutral-100/5",
  primary:
    "border-primary-7 hover:border-primary-8 hover:bg-primary-4 active:bg-primary-5 text-primary-9",
  secondary:
    "border-gold-7 hover:border-gold-8 hover:bg-gold-4 active:bg-gold-5 text-gold-9",
};

function IconButton({
  children,
  label,
  className,
  iconClassName,
  size = "medium",
  variant = "text",
  color = "default",
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={cx(
        buttonSizes[size],
        variantClassNames[variant],
        colorClassNames[color],
        "transition duration-75 rounded",
        className
      )}
      {...rest}
    >
      <span className={cx("fill-current", iconSizes[size], iconClassName)}>
        <AccessibleIcon.Root label={label}>{children}</AccessibleIcon.Root>
      </span>
    </button>
  );
}

export default IconButton;
