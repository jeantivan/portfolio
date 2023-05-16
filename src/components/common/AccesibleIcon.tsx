import type { ElementType, CSSProperties } from "react";
import cx from "classnames";

// Visually Hidden for screens
// Source:  https://github.com/radix-ui/primitives/blob/main/packages/react/visually-hidden/src/VisuallyHidden.tsx
const screenReaderStyle: CSSProperties = {
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal",
};

type AccesibleIconProps = {
  label: string;
  icon: ElementType;
  className?: string;
  iconClassName?: string;
};
function AccesibleIcon({
  className,
  label,
  icon,
  iconClassName,
}: AccesibleIconProps) {
  const Icon = icon || "svg";
  return (
    <span className={cx("inline-flex w-full h-full", className)}>
      <Icon
        className={cx("fill-current w-full h-full", iconClassName)}
        aria-hidden
        focusable={false}
      />
      <span style={{ ...screenReaderStyle }}>{label}</span>
    </span>
  );
}

export default AccesibleIcon;
