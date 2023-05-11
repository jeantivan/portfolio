"use client";
import { ComponentProps } from "react";
import cx from "classnames";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";

const RadioGroup = RadioGroupPrimitive.Root;

/* 
  TODO: Agregar la funcionalidad utilizando cookies
*/

type RadioItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;
const RadioItem = ({ children, ...rest }: RadioItemProps) => {
  return (
    <RadioGroupPrimitive.Item
      {...rest}
      className={cx(
        "py-2 px-6 border first:rounded-l last:rounded-r",
        "border-gold-7 data-[state=checked]:border-primary-9 disabled:border-gold-6",
        "bg-gold-2 data-[state=checked]:bg-gold-5 disabled:bg-gold-1",
        "text-gold-11 data-[state=checked]:text-primary-9 disabled:text-gold-8"
      )}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
};

function DarkMode() {
  return (
    <div className="mb-2">
      <p className="text-gold-11 mb-1">Dark mode:</p>
      <RadioGroup
        defaultValue="dark"
        className="flex"
        aria-label="Select color mode"
      >
        <RadioItem value="dark">
          <MoonIcon className="w-6 h-6 md:w-5 md:h-5" />
        </RadioItem>
        <RadioItem value="system" disabled>
          <DesktopIcon className="w-6 h-6 md:w-5 md:h-5" />
        </RadioItem>
        <RadioItem value="light" disabled>
          <SunIcon className="w-6 h-6 md:w-5 md:h-5" />
        </RadioItem>
      </RadioGroup>
    </div>
  );
}

export default DarkMode;
