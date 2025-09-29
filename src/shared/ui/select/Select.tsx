"use client";
import clsx from "clsx";
import { FC } from "react";
import ReactSelect, { Props as ReactSelectProps } from "react-select";
import styles from "./Select.module.scss";

export type SelectProps = ReactSelectProps & {
  className?: string;
};

export const Select: FC<SelectProps> = ({ className, ...rest }) => {
  return (
    <div className={clsx(styles.selectWrapper, className)}>
      <ReactSelect
        className={styles.select}
        classNamePrefix="select"
        {...rest}
      />
    </div>
  );
};
