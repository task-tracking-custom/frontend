import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./SectionContent.module.scss";

export type SectionContentProps = ComponentProps<"div">;

export const SectionContent: FC<SectionContentProps> = ({ 
  children, 
  className, 
  ...rest 
}) => {
  return (
    <div className={clsx(styles.sectionContent, className)} {...rest}>
      {children}
    </div>
  );
};