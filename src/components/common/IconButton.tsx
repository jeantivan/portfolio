import { forwardRef } from "react";
import cx from "classnames";
import AccesibleIcon from "./AccesibleIcon";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef
} from "@/utils/types";

// Estilos
type Size = "large" | "medium" | "small";
type Variant = "text" | "outlined" | "filled";
type Color = "primary" | "secondary" | "default";

const buttonSizes: Record<Size, string> = {
  small: "p-1.5 w-6 h-6",
  medium: "p-2 w-9 h-9",
  large: "p-2.5 w-12 h-12"
};

const variantClassNames: Record<Variant, string> = {
  text: "bg-transparent border-transparent",
  outlined: "border border-background-6",
  filled:
    "border border-primary-9 bg-primary-9 hover:border-primary-10 hover:bg-primary-10 text-background-1"
};

const colorClassNames: Record<Color, string> = {
  default:
    "border-background-7 text-background-12 hover:bg-neutral-100/20 data-[state=open]:bg-neutral-100/5",
  primary:
    "border-primary-7 hover:border-primary-8 hover:bg-primary-4 active:bg-primary-5 text-primary-9 data-[state=open]:bg-primary-5",
  secondary:
    "border-background-7 hover:border-background-8 hover:bg-background-4 active:bg-background-5 text-background-9 data-[state=open]:bg-background-5"
};

// Del código fuente de @radix-ui
type RadixIconProps = React.SVGAttributes<SVGElement> & {
  children?: never;
  color?: string;
};
type IconProps = React.ForwardRefExoticComponent<
  RadixIconProps & React.RefAttributes<SVGSVGElement>
>;

type IconButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      color?: Color;
      size?: Size;
      variant?: Variant;
      label: string;
      icon: IconProps;
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
    variant = "outlined",
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
    "transition duration-75 rounded-lg",
    className
  );

  return (
    <Component {...rest} className={classNames} ref={ref}>
      <AccesibleIcon icon={icon} label={label} iconClassName={className} />
    </Component>
  );
});

export default IconButton;
