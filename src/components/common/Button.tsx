import { forwardRef } from "react";
import cx from "classnames";

import {
  PolymorphicComponentPropsWithRef,
  PolymorphicRef
} from "@/utils/types";

// Estilos
type Variant = "filled" | "outlined" | "text";
type Size = "large" | "medium" | "small";

const variantClassNames: Record<Variant, string> = {
  filled:
    "border-primary-9 bg-primary-9 text-background-1 hover:bg-primary-10 hover:border-primary-10",
  outlined:
    "border-primary-7 bg-transparent text-primary-9 border-primary-7 hover:bg-primary-9 hover:text-primary-1",
  text: "border-transparent text-primary-9 border-transparent hover:bg-primary-4 hover:border-primary-4 hover:text-primary-10"
};
const sizeClassNames: Record<Size, string> = {
  small: "px-6 py-1.5 text-xs h-6",
  medium: "px-8 py-3 text-sm h-9",
  large: "px-10 py-4 text-base h-12"
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
    variant = "filled",
    ...rest
  } = props;

  const Component = as || "button";

  const classNames = cx(
    variantClassNames[variant],
    sizeClassNames[size],
    "inline-flex justify-center items-center gap-3",
    "uppercase font-medium leading-none text-center",
    "border rounded-lg",
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
