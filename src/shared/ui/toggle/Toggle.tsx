import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Toggle.module.scss";

export type ToggleProps = ComponentProps<"button"> & {
  pressed?: boolean;
};

export const Toggle: FC<ToggleProps> = ({ children, className, pressed, ...rest }) => {
  return (
    <button 
      className={clsx(styles.toggle, pressed && styles.togglePressed, className)} 
      {...rest}
    >
      {children}
    </button>
  );
};