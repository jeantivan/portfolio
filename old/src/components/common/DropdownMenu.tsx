"use client";
import { ComponentPropsWithoutRef } from "react";
import cx from "classnames";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

import { CheckIcon } from "@radix-ui/react-icons";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const itemClassName = cx(
	"px-3 flex items-center gap-2 select-none cursor-pointer outline-none",
	"hover:bg-gold-4 data-[disabled]:bg-gold-3 data-[disabled]:text-gold-8 data-[disabled]:cursor-auto"
);

type DropdownMenuItemProps = ComponentPropsWithoutRef<
	typeof DropdownMenuPrimitive.Item
>;
const DropdownMenuItem = ({ className, ...rest }: DropdownMenuItemProps) => (
	<DropdownMenuPrimitive.Item
		className={cx(itemClassName, className)}
		{...rest}
	>
		{rest.children}
	</DropdownMenuPrimitive.Item>
);

type DropdownMenuCheckboxItemProps = ComponentPropsWithoutRef<
	typeof DropdownMenuPrimitive.DropdownMenuCheckboxItem
>;
const DropdownMenuCheckboxItem = ({
	className,
	children,
	...rest
}: DropdownMenuCheckboxItemProps) => (
	<DropdownMenuPrimitive.DropdownMenuCheckboxItem
		className={cx(
			itemClassName,
			"data-[state=checked]:bg-primary-4",
			"data-[state=checked]:text-primary-9",
			"relative",
			className
		)}
		{...rest}
	>
		{children}
		<DropdownMenuPrimitive.ItemIndicator className="absolute w-7 right-0 inline-flex items-center justify-center">
			<CheckIcon className="fill-current" />
		</DropdownMenuPrimitive.ItemIndicator>
	</DropdownMenuPrimitive.DropdownMenuCheckboxItem>
);

type DropdownMenuRadioItemProps = ComponentPropsWithoutRef<
	typeof DropdownMenuPrimitive.DropdownMenuRadioItem
>;
const DropdownMenuRadioItem = ({
	children,
	className,
	...rest
}: DropdownMenuRadioItemProps) => (
	<DropdownMenuPrimitive.DropdownMenuRadioItem
		className={cx(
			itemClassName,
			"data-[state=checked]:bg-primary-4",
			"data-[state=checked]:text-primary-9",
			"relative",
			className
		)}
		{...rest}
	>
		{children}
		<DropdownMenuPrimitive.ItemIndicator className="absolute w-7 right-0 inline-flex items-center justify-center">
			<CheckIcon className="fill-current" />
		</DropdownMenuPrimitive.ItemIndicator>
	</DropdownMenuPrimitive.DropdownMenuRadioItem>
);

type DropdownMenuContentProps = ComponentPropsWithoutRef<
	typeof DropdownMenuPrimitive.Content
>;
const DropdownMenuContent = ({
	className,
	sideOffset = 3,
	...rest
}: DropdownMenuContentProps) => (
	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content
			sideOffset={sideOffset}
			{...rest}
			className={cx(
				"bg-gold-2 text-gold-12 text-lg z-50 min-w-[9rem] overflow-hidden",
				"border border-gold-4 rounded-md",
				"py-1.5",
				className
			)}
			id="DropdownMenu"
		>
			{rest.children}
		</DropdownMenuPrimitive.Content>
	</DropdownMenuPrimitive.Portal>
);

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuGroup,
	DropdownMenuRadioGroup,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem
};
