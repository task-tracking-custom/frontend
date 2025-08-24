import styles from "./IconButton.module.scss";
import { ComponentProps, FC } from "react";
import clsx from "clsx";

export type IconButtonProps = ComponentProps<"button"> & {
  variant?: "default";
};

export const IconButton: FC<IconButtonProps> = (props) => {
  const { children, className, variant = "default", ...rest } = props;

  return (
    <button
      className={clsx(
        styles.button,
        className,
        styles[`buttonVariant${variant}`]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
