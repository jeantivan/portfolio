"use client";
import { forwardRef, ComponentProps } from "react";
import cx from "classnames";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon } from "@radix-ui/react-icons";

type SelectItemProps = ComponentProps<typeof SelectPrimitive.Item>;
const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  function SelectItemWithRef({ children, className, ...props }, forwardedRef) {
    return (
      <SelectPrimitive.Item
        className={cx(
          "text-xl leading-none text-gold-11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-gold-8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary-9 data-[highlighted]:text-primary-12",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
          <CheckIcon />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    );
  }
);

function I18n() {
  return (
    <div className="w-full flex justify-center">
      <div className="mb-2">
        <p className="text-xl text-gold-11 mb-1">Language:</p>
      </div>
      <div className="text-2xl text-primary-9 py-4 px-6 border-r">EN</div>
      <div className="text-2xl text-gold-11 py-4 px-6">ES</div>
    </div>
  );
}

export default I18n;
