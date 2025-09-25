import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Section.module.scss";

export type SectionProps = ComponentProps<"section"> & {
  variant?: "gradient" | "dark" | "light" | "default";
};

export const Section: FC<SectionProps> = ({ 
  children, 
  className, 
  variant = "default", 
  ...rest 
}) => {
  return (
    <section 
      className={clsx(styles.section, styles[`sectionVariant${variant}`], className)} 
      {...rest}
    >
      {children}
    </section>
  );
};