import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Button.module.scss";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "fill" | "outline" | "text" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, className, variant = "fill", size = "md", ...rest } = props;

  console.log(
    styles,
    clsx(
      styles.button,
      className,
      styles[`buttonVariant` + variant],
      styles[`buttonSize` + size]
    )
  );

  return (
    <button
      className={clsx(
        styles.button,
        className,
        styles[`buttonVariant` + variant],
        styles[`buttonSize` + size]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
