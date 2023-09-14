import cx, { ArgumentArray } from "classnames";
import { twMerge } from "tailwind-merge";

export function mc(...inputs: ArgumentArray) {
  return twMerge(cx(inputs));
}
