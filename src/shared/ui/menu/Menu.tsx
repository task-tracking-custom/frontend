import { ComponentType, ReactNode } from "react";
import styles from "./Menu.module.scss";
import clsx from "clsx";
import { PropsByAs } from "@/shared/types/styled";

type MenuAsStrings = "ul" | "ol" | "div" | "nav";
type MenuAs = MenuAsStrings | ComponentType;

export type MenuProps<As extends MenuAs = "ul"> = {
  children: ReactNode;
  as?: As;
  className?: string;
} & PropsByAs<MenuAsStrings, As>;

export const Menu = <As extends MenuAs>(props: MenuProps<As>) => {
  const { children, as = "ul", className, ...rest } = props;
  const Component = as;

  return (
    <Component {...rest} className={clsx(styles.menu, className)}>
      {children}
    </Component>
  );
};
