"use client";
import { ComponentProps } from "react";
import AccesibleIcon from "./AccesibleIcon";

import cx from "classnames";

// Estilos
type Size = "large" | "medium" | "small";
type Variant = "text" | "outlined";
type Color = "primary" | "secondary" | "default";

const buttonSizes: Record<Size, string> = {
  small: "p-2",
  medium: "p-2.5",
  large: "p-3",
};

const iconSizes: Record<Size, string> = {
  small: "[&>svg]:w-3.5 [&>svg]:h-3.5",
  medium: "[&>svg]:w-5 [&>svg]:h-5",
  large: "[&>svg]:w-6 [&>svg]:h-6",
};

const variantClassNames: Record<Variant, string> = {
  text: "bg-transparent border-0",
  outlined: "border",
};

const colorClassNames: Record<Color, string> = {
  default:
    "border-gold-12 text-gold-12 hover:bg-neutral-100/5 data-[state=open]:bg-neutral-100/75",
  primary:
    "border-primary-7 hover:border-primary-8 hover:bg-primary-4 active:bg-primary-5 text-primary-9 data-[state=open]:bg-primary-5",
  secondary:
    "border-gold-7 hover:border-gold-8 hover:bg-gold-4 active:bg-gold-5 text-gold-9 data-[state=open]:bg-gold-5",
};

// Polimorfismo ->

// Props bases
type IconButtonBaseProps = {
  label: string;
  variant?: Variant;
  color?: Color;
  size?: Size;
  iconClassName?: string;
};

// Como un boton simple
type ButtonAsButton = IconButtonBaseProps &
  Omit<ComponentProps<"button">, keyof IconButtonBaseProps> & {
    as?: "button";
  };

// Como un link externo <a>
type ButtonAsExternalLink = IconButtonBaseProps &
  Omit<ComponentProps<"a">, keyof IconButtonBaseProps> & {
    as: "externalLink";
  };

type IconButtonProps = ButtonAsButton | ButtonAsExternalLink;

function IconButton({
  label,
  className,
  iconClassName,
  size = "medium",
  variant = "text",
  color = "default",
  ...props
}: IconButtonProps) {
  // Todas las classNames juntas
  const classNames = cx(
    "inline-flex justify-center align-center",
    buttonSizes[size],
    variantClassNames[variant],
    colorClassNames[color],
    "transition duration-75 rounded",
    className
  );

  if (props.as === "externalLink") {
    let { as, ...rest } = props;

    return (
      <a
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        <AccesibleIcon
          label={label}
          className={cx(iconSizes[size], iconClassName)}
        >
          {props.children}
        </AccesibleIcon>
      </a>
    );
  }
  return (
    <button className={classNames} {...props}>
      <AccesibleIcon
        label={label}
        className={cx(iconSizes[size], iconClassName)}
      >
        {props.children}
      </AccesibleIcon>
    </button>
  );
}

export default IconButton;
