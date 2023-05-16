import { forwardRef } from "react";

import cx from "classnames";
import AccesibleIcon from "./AccesibleIcon";

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@utils/types";

// Estilos
type Size = "large" | "medium" | "small";
type Variant = "text" | "outlined";
type Color = "primary" | "secondary" | "default";

const buttonSizes: Record<Size, string> = {
  small: "p-2 w-8 h-8",
  medium: "p-2.5 w-10 h-10",
  large: "p-3 w-12 h-12",
};

const variantClassNames: Record<Variant, string> = {
  text: "bg-transparent border-transparent",
  outlined: "border",
};

const colorClassNames: Record<Color, string> = {
  default:
    "border-gold-12 text-gold-12 hover:bg-neutral-100/20 data-[state=open]:bg-neutral-100/5",
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
      icon: C;
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
    size = "medium",
    variant = "text",
    color = "default",
    label,
    icon,
    iconClassName,
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
      <AccesibleIcon icon={icon} label={label} iconClassName={className} />
    </Component>
  );
});

export default IconButton;
