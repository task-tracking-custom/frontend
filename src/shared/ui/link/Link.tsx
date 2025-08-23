import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Link.module.scss";

export type LinkProps = ComponentProps<"a"> & {
  variant?: "default" | "subtle";
};

export const Link: FC<LinkProps> = (props) => {
  const { children, className, variant = "default", ...rest } = props;

  return (
    <a
      className={clsx(
        styles.link,
        className,
        styles[`linkVariant${variant}`]
      )}
      {...rest}
    >
      {children}
    </a>
  );
};