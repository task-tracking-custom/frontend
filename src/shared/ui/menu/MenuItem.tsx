import {
  ComponentProps,
  ComponentType,
  createElement,
  FC,
  JSX,
  ReactNode,
} from "react";
import styles from "./Menu.module.scss";
import clsx from "clsx";
import { PropsByAs } from "@/shared/types/styled";

type MenuItemAs = keyof JSX.IntrinsicElements | ComponentType;

export type MenuItemProps<As extends MenuItemAs = "li"> = {
  children?: ReactNode;
  as?: As;
  className?: string;
} & PropsByAs<"li", As>;

export const MenuItem = <As extends MenuItemAs>(props: MenuItemProps<As>) => {
  const { children, as = "li", className, ...rest } = props;

  if (typeof as === "string") {
    const Component = as as keyof JSX.IntrinsicElements;

    return createElement(
      Component,
      { className: clsx(styles.menuItem, className), ...rest },
      children
    );
  }
  const Component = as as ComponentType<any>;
  return (
    <Component {...rest} className={clsx(styles.menuItem, className)}>
      {children}
    </Component>
  );
};
