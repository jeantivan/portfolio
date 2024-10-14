import React, {
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  forwardRef
} from "react";
import cx from "classnames";
import AccesibleIcon from "./AccesibleIcon";

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

interface IconButtonProps {
  color?: Color;
  size?: Size;
  variant?: Variant;
  label: string;
  icon: IconProps;
  iconClassName?: string;
}

/**
 * How to Pass a Component as a Prop in React
 * autor: Matt Pocock
 *
 * source: https://www.totaltypescript.com/pass-component-as-prop-react
 */
type FixedForwardRef = <T, P = {}>(
  render: (props: P, ref: React.Ref<T>) => React.ReactNode
) => (props: P & React.RefAttributes<T>) => React.ReactNode;

const fixedForwardRef = forwardRef as FixedForwardRef;

type DistributiveOmit<T, TOmitted extends PropertyKey> = T extends any
  ? Omit<T, TOmitted>
  : never;

export const UnwrappedAnyComponent = <TAs extends ElementType>(
  props: {
    as?: TAs;
    color?: Color;
    size?: Size;
    variant?: Variant;
    label: string;
    icon: IconProps;
    iconClassName?: string;
  } & DistributiveOmit<
    ComponentPropsWithRef<ElementType extends TAs ? "button" : TAs>,
    "as"
  >,
  ref: ForwardedRef<any>
) => {
  const {
    as: Comp = "button",
    className,
    size = "medium",
    variant = "outlined",
    color = "default",
    label,
    icon,
    iconClassName,
    ...rest
  } = props;

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
    <Comp className={classNames} {...rest} ref={ref}>
      <AccesibleIcon icon={icon} label={label} iconClassName={className} />
    </Comp>
  );
};

const IconButton = fixedForwardRef(UnwrappedAnyComponent);

export default IconButton;
