import Text from "./common/Text";
import type { TextProps } from "./common/Text";

import { splitEspecialChar, EspecialCharRgx } from "@/utils/splitEspecialChar";

type HeadingProps = Omit<TextProps, "children" | "variant"> & {
  text: string;
  variant?: "title" | "heading" | "subheading";
};
function Heading({ text, variant = "subheading", ...rest }: HeadingProps) {
  const textToRender = splitEspecialChar(text).map((str, i) => {
    if (str.search(EspecialCharRgx) >= 0) {
      return (
        <span key={`sing-${i}`} className="text-primary-11 dark:text-primary-9">
          {str}
        </span>
      );
    }
    return str;
  });

  return (
    <Text variant={variant} {...rest}>
      {textToRender}
    </Text>
  );
}

export default Heading;
