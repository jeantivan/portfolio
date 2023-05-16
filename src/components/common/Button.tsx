import { forwardRef } from "react";
import cx from "classnames";

import { PolymorphicComponentPropsWithRef, PolymorphicRef } from "@utils/types";

// Estilos
type Variant = "outlined" | "text";
type Size = "large" | "medium" | "small";

const variantClassNames: Record<Variant, string> = {
  outlined:
    "border-primary-7 bg-transparent text-primary-9 border-primary-7 hover:bg-primary-9 hover:text-primary-1",
  text: "border-transparent text-primary-9 border-transparent hover:bg-primary-4 hover:border-primary-4 hover:text-primary-10",
};
const sizeClassNames: Record<Size, string> = {
  small: "px-6 py-1.5 text-sm h-8",
  medium: "px-8 py-3 text-base h-10",
  large: "px-12 py-4 text-lg h-12",
};

type ButtonProps<C extends React.ElementType> =
  PolymorphicComponentPropsWithRef<
    C,
    {
      size?: Size;
      variant?: Variant;
    }
  >;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement | null;

const Button: ButtonComponent = forwardRef(function ForwardButton<
  C extends React.ElementType = "button"
>(props: ButtonProps<C>, ref?: PolymorphicRef<C>) {
  const {
    as,
    children,
    className,
    size = "medium",
    variant = "outlined",
    ...rest
  } = props;

  const Component = as || "button";

  const classNames = cx(
    variantClassNames[variant],
    sizeClassNames[size],
    "inline-flex justify-center items-center gap-3",
    "tracking-wider uppercase font-medium leading-none text-center",
    "border rounded-sm",
    "transition duration-75",
    className
  );

  return (
    <Component className={classNames} ref={ref} {...rest}>
      {children}
    </Component>
  );
});

export default Button;
