import { ComponentType, ReactNode } from "react";
import styles from "./Menu.module.scss";
import clsx from "clsx";
import { PropsByAs } from "@/shared/types/styled";

type MenuItemAsStrings = "li" | "a" | "button" | "div";
type MenuItemAs = MenuItemAsStrings | ComponentType;

export type MenuItemProps<As extends MenuItemAs = "li"> = {
  children?: ReactNode;
  as?: As;
  className?: string;
} & PropsByAs<MenuItemAsStrings, As>;

export const MenuItem = <As extends MenuItemAs>(props: MenuItemProps<As>) => {
  const { children, as = "li", className, ...rest } = props;
  const Component = as;

  return (
    <Component {...rest} className={clsx(styles.menuItem, className)}>
      {children}
    </Component>
  );
};
