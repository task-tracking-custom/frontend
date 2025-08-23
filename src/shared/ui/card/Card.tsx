import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Card.module.scss";

export type CardProps = ComponentProps<"div"> & {
  variant?: "default" | "hover";
};

export const Card: FC<CardProps> = ({ children, className, variant = "default", ...rest }) => {
  return (
    <div className={clsx(styles.card, styles[`cardVariant${variant}`], className)} {...rest}>
      {children}
    </div>
  );
};