import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Switch.module.scss";

export type SwitchProps = ComponentProps<"label"> & {
  inputProps?: ComponentProps<"input">;
  boxProps?: ComponentProps<"span">;
};

export const Switch: FC<SwitchProps> = (props) => {
  const { className, inputProps, boxProps, ...rest } = props;

  return (
    <label className={clsx(styles.switch, className)} {...rest}>
      <input
        type="checkbox"
        className={clsx("visually-hidden", styles.switchInput)}
        {...inputProps}
      />
      <span className={styles.switchBox} {...boxProps}></span>
    </label>
  );
};
