import { forwardRef } from "react";

import cx from "classnames";
import AccesibleIcon from "./AccesibleIcon";

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@utils/types";

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

type IconButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      color?: Color;
      size?: Size;
      variant?: Variant;
      label: string;
      iconClassName?: string;
    }
  >;

type IconButtonComponent = <C extends React.ElementType = "button">(
  props: IconButtonProps<C>
) => React.ReactElement | null;

const IconButton: IconButtonComponent = forwardRef(function ForwardIconButton<
  C extends React.ElementType = "button"
>(props: IconButtonProps<C>, ref?: PolymorphicRef<C>) {
  const {
    as,
    children,
    className,
    label,
    iconClassName,
    size = "medium",
    variant = "text",
    color = "default",
    ...rest
  } = props;

  const Component = as || "button";

  // Todas las classNames juntas
  const classNames = cx(
    "inline-flex justify-center align-center outline-none",
    buttonSizes[size],
    variantClassNames[variant],
    colorClassNames[color],
    "transition duration-75 rounded",
    className
  );

  return (
    <Component {...rest} className={classNames} ref={ref}>
      <AccesibleIcon
        label={label}
        className={cx(iconClassName, iconSizes[size])}
      >
        {children}
      </AccesibleIcon>
    </Component>
  );
});

export default IconButton;
