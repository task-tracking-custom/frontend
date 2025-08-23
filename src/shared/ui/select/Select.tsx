import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Select.module.scss";

export type SelectProps = ComponentProps<"select">;

export const Select: FC<SelectProps> = ({ children, className, ...rest }) => {
  return (
    <div className={styles.selectWrapper}>
      <select className={clsx(styles.select, className)} {...rest}>
        {children}
      </select>
    </div>
  );
};