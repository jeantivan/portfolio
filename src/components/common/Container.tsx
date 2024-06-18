import { ComponentProps } from "react";
import cx from "classnames";

type ContainerProps = ComponentProps<"div">;

function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      className={cx("w-full mx-auto p-3 lg:px-0 lg:w-[960px]", className)}
    >
      {children}
    </div>
  );
}

export default Container;
