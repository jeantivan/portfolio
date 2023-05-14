"use client";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import cx from "classnames";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;
const PopoverAnchor = PopoverPrimitive.Anchor;
const PopoverClose = PopoverPrimitive.Close;

const PopoverContent = ({
  className,
  children,
  align = "center",
  sideOffset = 4,
  ...rest
}: PopoverPrimitive.PopoverContentProps) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align={align}
        sideOffset={sideOffset}
        {...rest}
        className={cx(
          "bg-gold-2 rounded z-50 shadow-md border border-gold-3",
          className
        )}
      >
        {children}
        <PopoverPrimitive.Arrow className="fill-gold-3" />
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
};

export { Popover, PopoverTrigger, PopoverAnchor, PopoverClose, PopoverContent };
