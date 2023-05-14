"use client";
import type { ReactNode } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

type TooltipProps = TooltipPrimitive.TooltipContentProps & {
  content: ReactNode;
  delayDuration?: number;
  forceMount?: boolean;
};

const Tooltip = ({
  className,
  content,
  delayDuration = 350,
  sideOffset = 4,
  align = "center",
  forceMount,
  children,
  ...rest
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <span>{children}</span>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal forceMount={forceMount}>
          <TooltipPrimitive.Content
            className="select-none z-[999] rounded-sm shadow-md text-gold-1 bg-gold-12 py-2 px-3 origin-[--radix-tooltip-content-transform-origin]"
            sideOffset={sideOffset}
            align="center"
            {...rest}
          >
            {content}
            <TooltipPrimitive.Arrow className="fill-gold-12" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export { Tooltip, type TooltipProps };
