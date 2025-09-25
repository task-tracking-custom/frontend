import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./BlurCard.module.scss";

export type BlurCardProps = ComponentProps<"div"> & {
  variant?: "glass" | "highlight" | "default";
};

export const BlurCard: FC<BlurCardProps> = ({ 
  children, 
  className, 
  variant = "default", 
  ...rest 
}) => {
  return (
    <div 
      className={clsx(styles.card, styles[`cardVariant${variant}`], className)} 
      {...rest}
    >
      {children}
    </div>
  );
};