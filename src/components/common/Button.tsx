import { ComponentProps } from "react";
import cx from "classnames";

import { TSizes } from "@utils/types";

type ButtonProps = ComponentProps<"button"> & {
  size?: TSizes;
};

type ButtonSizes = {
  [K in TSizes]: string;
};

const buttonSizes: ButtonSizes = {
  small: "px-6 py-1 text-sm",
  medium: "px-8 py-2",
  large: "px-12 py-3 text-xl",
};

function Button({
  children,
  size = "medium",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cx(
        buttonSizes[size],
        "uppercase inline-flex justify-center items-center line-none",
        "bg-transparent text-primary-9 border border-primary-7 rounded-sm",
        "hover:bg-primary-9 hover:primary-9 hover:text-primary-1",
        "transition duration-75",
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
