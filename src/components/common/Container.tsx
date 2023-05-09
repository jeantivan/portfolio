import { ReactNode } from "react";
import cx from "classnames";
type ContainerProps = {
  children: ReactNode;
  className: string;
};
function Container({ children, className, ...rest }: ContainerProps) {
  return (
    <div
      {...rest}
      className={cx("w-full mx-auto px-2 lg:w-[1024px]", className)}
    >
      {children}
    </div>
  );
}

export default Container;
