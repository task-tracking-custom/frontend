import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Input.module.scss";

export type InputProps = Omit<ComponentProps<"input">, "size"> & {
  variant?: "fill" | "outline" | "underline";
  size?: "sm" | "md" | "lg";
};

export const Input: FC<InputProps> = (props) => {
  const { children, className, variant = "fill", size = "md", ...rest } = props;

  return (
    <input
      className={clsx(
        styles.input,
        className,
        styles[`inputVariant` + variant],
        styles[`inputSize` + size]
      )}
      {...rest}
    />
  );
};
