import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Text.module.scss";

export type TextProps = ComponentProps<"p"> & {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body" | "caption";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  color?: "white";
};

export const Text: FC<TextProps> = (props) => {
  const { children, className, variant = "body", as, color, ...rest } = props;

  const headingVariants = ["h1", "h2", "h3", "h4", "h5", "h6"];
  const element = headingVariants.includes(variant) && !as ? variant : as;
  const Component = (element ?? "p") as "p";

  return (
    <Component
      className={clsx(
        styles.text,
        styles[`textVariant` + variant],
        styles[`textColor${color}`],
        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
