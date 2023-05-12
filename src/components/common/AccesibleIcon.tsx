"use client";

import * as AccesibleIconPrimitive from "@radix-ui/react-accessible-icon";
import cx from "classnames";

type AccesibleIconProps = AccesibleIconPrimitive.AccessibleIconProps & {
  className?: string;
};
function AccesibleIcon({ className, children, label }: AccesibleIconProps) {
  return (
    <span className={cx("fill-current", className)}>
      <AccesibleIconPrimitive.Root label={label}>
        {children}
      </AccesibleIconPrimitive.Root>
    </span>
  );
}

export default AccesibleIcon;
