import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Textarea.module.scss";

export type TextareaProps = ComponentProps<"textarea">;

export const Textarea: FC<TextareaProps> = ({ className, ...rest }) => {
  return (
    <textarea className={clsx(styles.textarea, className)} {...rest} />
  );
};