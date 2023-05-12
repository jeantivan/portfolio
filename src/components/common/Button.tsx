import cx from "classnames";
import { ComponentProps, ReactNode } from "react";
import Link, { LinkProps } from "next/link";

// Estilos
type Variant = "outlined" | "text";
type Size = "large" | "medium" | "small";

const variantClassNames: Record<Variant, string> = {
  outlined:
    "border-primary-7 bg-transparent text-primary-9 border-primary-7 hover:bg-primary-9 hover:text-primary-1",
  text: "border-transparent text-primary-9 border-transparent hover:bg-primary-4 hover:border-primary-4 hover:text-primary-10",
};
const sizeClassNames: Record<Size, string> = {
  small: "px-6 py-1 text-sm",
  medium: "px-8 py-2 text-base",
  large: "px-12 py-3 text-xl",
};

// Polimorfismo del Botón
// Fuente: https://dev.to/frehner/polymorphic-button-component-in-typescript-c28
type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

// Si es un botón normal
type ButtonAsButton = ButtonBaseProps &
  Omit<ComponentProps<"button">, keyof ButtonBaseProps> & {
    as?: "button";
  };

// Si es un Link de next
type ButtonAsLink = ButtonBaseProps &
  Omit<LinkProps, keyof ButtonBaseProps> & {
    as: "link";
  };

// Si es un Link externo <a>
type ButtonAsExternalLink = ButtonBaseProps &
  Omit<ComponentProps<"a">, keyof ButtonBaseProps> & {
    as: "externalLink";
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsExternalLink;

function Button({
  size = "medium",
  variant = "outlined",
  className,
  ...props
}: ButtonProps) {
  const classNames = cx(
    variantClassNames[variant],
    sizeClassNames[size],
    "inline-flex justify-center items-center gap-3",
    "tracking-wider uppercase font-medium line-none text-center",
    "border rounded-sm",
    "transition duration-75",
    className
  );

  // Link de next
  if (props.as === "link") {
    let { as, ...rest } = props;

    return (
      <Link className={classNames} {...rest}>
        {props.children}
      </Link>
    );
  }

  // Link externo
  if (props.as === "externalLink") {
    let { as, ...rest } = props;

    return (
      <a
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {props.children}
      </a>
    );
  }

  // Botón común y corriente
  return (
    <button className={classNames} type="button" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
