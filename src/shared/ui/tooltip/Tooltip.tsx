import clsx from "clsx";
import { ComponentProps, FC, ReactNode } from "react";
import styles from "./Tooltip.module.scss";

export type TooltipProps = ComponentProps<"div"> & {
  content: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

export const Tooltip: FC<TooltipProps> = ({ children, content, position = "top", className, ...rest }) => {
  return (
    <div className={clsx(styles.tooltip, className)} {...rest}>
      {children}
      <div className={clsx(styles.tooltipContent, styles[`tooltipPosition${position}`])}>
        {content}
      </div>
    </div>
  );
};