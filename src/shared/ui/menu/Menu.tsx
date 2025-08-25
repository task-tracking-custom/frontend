import { ComponentProps, ReactNode } from "react";
import styles from "./Menu.module.scss";
import clsx from "clsx";

export type MenuProps = ComponentProps<"ul"> & {
  children: ReactNode;
};

export const Menu = (props: MenuProps) => {
  const { children, className, ...rest } = props;
  return (
    <ul className={clsx(styles.menu, className)} {...rest}>
      {children}
    </ul>
  );
};
