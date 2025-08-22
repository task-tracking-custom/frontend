import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Avatar.module.scss";

export type AvatarProps = ComponentProps<"div"> & {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg";
  fallback?: string;
};

export const Avatar: FC<AvatarProps> = ({ src, alt, size = "md", fallback, className, ...rest }) => {
  return (
    <div className={clsx(styles.avatar, styles[`avatarSize${size}`], className)} {...rest}>
      {src ? (
        <img src={src} alt={alt} className={styles.avatarImage} />
      ) : (
        <span className={styles.avatarFallback}>{fallback}</span>
      )}
    </div>
  );
};