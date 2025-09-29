import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Link.module.scss";
import NextLink from "next/link";

export type LinkProps = ComponentProps<"a"> & {
  variant?: "default";
  href: string;
};

export const Link: FC<LinkProps> = (props) => {
  const { children, className, variant = "default", ...rest } = props;

  return (
    <NextLink
      className={clsx(styles.link, className, styles[`linkVariant${variant}`])}
      {...rest}
    >
      {children}
    </NextLink>
  );
};
