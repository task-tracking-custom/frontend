import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Badge.module.scss";

export type BadgeProps = ComponentProps<"span"> & {
  variant?: "default" | "success" | "warning" | "error";
};

export const Badge: FC<BadgeProps> = ({ children, className, variant = "default", ...rest }) => {
  return (
    <span className={clsx(styles.badge, styles[`badgeVariant${variant}`], className)} {...rest}>
      {children}
    </span>
  );
};