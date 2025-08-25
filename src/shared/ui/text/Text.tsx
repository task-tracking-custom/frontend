import clsx from "clsx";
import { ComponentProps, createElement, FC } from "react";
import styles from "./Text.module.scss";

export type TextProps = ComponentProps<"p"> & {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "caption";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
};

export const Text: FC<TextProps> = (props) => {
  const { children, className, variant = "body", as, ...rest } = props;

  const headingVariants = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const element = headingVariants.includes(variant) && !as ? variant : as;

  return createElement(
    element ?? "p",
    {
      className: clsx(styles.text, className, styles[`textVariant` + variant]),
      ...rest,
    },
    children
  );
};
