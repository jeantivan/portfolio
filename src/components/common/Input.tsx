import { ComponentProps, ReactNode } from "react";
import cx from "classnames";

type InputProps = ComponentProps<"input"> &
  ComponentProps<"textarea"> & {
    label: string;
    name: string;
    error?: string;
    textarea?: boolean;
  };

function Input({ label, name, error, textarea, ...rest }: InputProps) {
  const Component = textarea ? "textarea" : "input";

  return (
    <div className={cx("w-full flex flex-wrap", textarea && "h-full")}>
      <label
        className={cx(
          "capitalize mb-1 block flex-1",
          error ? "text-red-600" : "text-gold-11"
        )}
        htmlFor={name}
      >
        {label}
        <span className="text-primary-9">:</span>
      </label>
      <Component
        className={cx(
          "rounded-sm border border-gold-5 text-lg w-full",
          "bg-gold-3 p-3 placeholder:text-gold-8 text-gold-12",
          "caret-primary-9 outline-none focus:border-primary-9 focus:ring-primary-9",
          textarea && "resize-y min-h-[8rem]",
          error && "border-red-600 mb-1"
        )}
        name={name}
        aria-invalid={Boolean(error)}
        {...rest}
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
}

export default Input;
