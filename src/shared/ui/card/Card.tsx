import clsx from "clsx";
import { ElementType } from "react";
import styles from "./Card.module.scss";
import { PolymorphicProps } from "@/shared/types";

export type CardProps<T extends ElementType = "div"> = PolymorphicProps<
  T,
  {
    variant?: "default" | "hover";
  }
>;

export const Card = <T extends ElementType = "div">({
  as,
  children,
  className,
  variant = "default",
  ...rest
}: CardProps<T>) => {
  const Component = as || "div";

  return (
    <Component
      className={clsx(styles.card, styles[`cardVariant${variant}`], className)}
      {...rest}
    >
      {children}
    </Component>
  );
};
