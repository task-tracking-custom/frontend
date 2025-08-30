import { ComponentType, ReactNode } from "react";
import styles from "./Container.module.scss";
import clsx from "clsx";
import { PropsByAs } from "@/shared/types/styled";

type ContainerAsStrings = "div" | "section" | "main" | "article" | "aside";
type ContainerAs = ContainerAsStrings | ComponentType;

export type ContainerProps<As extends ContainerAs = "div"> = {
  children?: ReactNode;
  as?: As;
  className?: string;
} & PropsByAs<ContainerAsStrings, As>;

export const Container = <As extends ContainerAs>(
  props: ContainerProps<As>
) => {
  const { children, as = "div", className, ...rest } = props;
  const Component = as;

  return (
    <Component {...rest} className={clsx(styles.container, className)}>
      {children}
    </Component>
  );
};
