import clsx from "clsx";
import { ComponentProps, ComponentType, FC } from "react";
import styles from "./Button.module.scss";
import { PropsByAs } from "@/shared/types";

type ButtonAs = "button" | "a" | ComponentType<any>;

export type ButtonProps<As extends ButtonAs = "button"> = {
  variant?: "fill" | "outline" | "text" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: "black";
} & PropsByAs<"button", As>;

export const Button = <As extends ButtonAs>(props: ButtonProps<As>) => {
  const {
    children,
    className,
    variant = "fill",
    size = "md",
    color,
    as = "button",
    ...rest
  } = props;

  const Component = as as ComponentType<any>;

  return (
    <Component
      className={clsx(
        styles.button,
        className,
        styles[`buttonVariant` + variant],
        styles[`buttonSize` + size],
        color && styles[`buttonColor` + color]
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
