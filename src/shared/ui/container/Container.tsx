import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Container.module.scss";

export type ContainerProps = ComponentProps<"div"> & {};

export const Container: FC<ContainerProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={clsx(styles.container, className)} {...rest}>
      {children}
    </div>
  );
};
