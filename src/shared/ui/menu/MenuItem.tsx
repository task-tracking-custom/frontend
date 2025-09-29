import { ElementType } from "react";
import styles from "./Menu.module.scss";
import clsx from "clsx";
import { PolymorphicProps } from "@/shared/types";

export type PersonItemProps<T extends ElementType = "div"> =
  PolymorphicProps<T> & {
    as?: T;
  };

export const MenuItem = <As extends ElementType = "div">(
  props: PersonItemProps<As>
) => {
  const { children, as = "li", className, ...rest } = props;

  const Component = as;

  return (
    <Component {...rest} className={clsx(styles.menuItem, className)}>
      {children}
    </Component>
  );
};
