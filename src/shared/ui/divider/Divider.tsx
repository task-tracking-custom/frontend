import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Divider.module.scss";

export type DividerProps = ComponentProps<"hr"> & {
  orientation?: "horizontal" | "vertical";
};

export const Divider: FC<DividerProps> = ({ className, orientation = "horizontal", ...rest }) => {
  return (
    <hr 
      className={clsx(styles.divider, styles[`dividerOrientation${orientation}`], className)} 
      {...rest} 
    />
  );
};