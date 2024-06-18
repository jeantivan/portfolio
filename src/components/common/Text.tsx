import { ReactNode } from "react";
import cx from "classnames";

type Colors =
  | "primary"
  | "secondary"
  | "error"
  | "success"
  | "danger"
  | "default";
type Weights = "light" | "normal" | "medium" | "bold";
type Variants =
  | "main"
  | "title"
  | "heading"
  | "subheading"
  | "body1"
  | "body2" // El tamaño de fuente de esta variante es ligeramente mas grande que el anterior
  | "subtitle";

const colorClasses = {
  primary: "text-primary-9",
  secondary: "text-background-11",
  default: "text-background-12",
  error: "text-red-600",
  danger: "text-yellow-600",
  success: "text-green-600"
};

const weightClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  bold: "font-bold"
};

const variantClasses = {
  main: "font-display text-[11rem] leading-[11rem] md:text-[14rem] md:leading-[14rem] font-extrabold",
  title: "text-5xl md:text-7xl", // h1
  heading: "text-4xl md:text-5xl", // h2
  subheading: "text-2xl md:text-3xl", // h3
  body2: "text-lg md:text-xl",
  body1: "text-base md:text-lg",
  subtitle: "text-sm md:text-base"
};

function getTextColor(color: Colors) {
  return colorClasses[color];
}
function getTextWeight(weight: Weights) {
  return weightClasses[weight];
}

function getTextVariant(variant: Variants) {
  return variantClasses[variant];
}

export type TextProps = {
  children: ReactNode;
  variant?: Variants;
  color?: Colors;
  weight?: Weights;
  Component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  className?: string;
  display?: true;
};

function Text({
  children,
  Component = "p",
  color = "default",
  variant = "body1",
  weight = "normal",
  display,
  className,
  ...rest
}: TextProps) {
  return (
    <Component
      {...rest}
      className={cx(
        className,
        getTextVariant(variant),
        getTextColor(color),
        display ? "font-display" : undefined,
        variant !== "main" && getTextWeight(weight)
      )}
    >
      {children}
    </Component>
  );
}

export default Text;
