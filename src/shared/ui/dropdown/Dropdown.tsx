"use client";
import clsx from "clsx";
import { ComponentProps, FC, ReactNode, useState } from "react";
import styles from "./Dropdown.module.scss";

export type DropdownProps = ComponentProps<"div"> & {
  trigger: ReactNode;
  items: { label: string; onClick: () => void }[];
};

export const Dropdown: FC<DropdownProps> = ({
  trigger,
  items,
  className,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(styles.dropdown, className)} {...rest}>
      <div
        className={styles.dropdownTrigger}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </div>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {items.map((item, index) => (
            <button
              key={index}
              className={styles.dropdownItem}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
