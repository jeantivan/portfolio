import cx from "classnames";
import { ComponentPropsWithRef } from "react";

type CardProps<C extends React.ElementType> = ComponentPropsWithRef<C> & {
  as?: C;
};
const Card = <C extends React.ElementType>({
  as,
  className,
  children,
  ...rest
}: CardProps<C>) => {
  const Component = as || "div";
  return (
    <Component
      className={cx(
        "bg-background-1 dark:bg-background-2 rounded-xl shadow border border-background-4",
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Card;
