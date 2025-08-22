import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Checkbox.module.scss";

export type CheckboxProps = ComponentProps<"label"> & {
  inputProps?: ComponentProps<"input">;
};

export const Checkbox: FC<CheckboxProps> = (props) => {
  const { children, className, inputProps, ...rest } = props;

  return (
    <label className={clsx(styles.checkbox, className)} {...rest}>
      <input
        type="checkbox"
        className={clsx("visually-hidden", styles.checkboxInput)}
        {...inputProps}
      />
      <span className={styles.checkboxBox}>
        <svg className={styles.checkboxIcon} viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
      </span>
      {children}
    </label>
  );
};