import { ComponentProps } from "react";
import cx from "classnames";

type ContainerProps = ComponentProps<"div">;

function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      className={cx("w-full mx-auto px-4 lg:w-[1024px]", className)}
    >
      {children}
    </div>
  );
}

export default Container;
