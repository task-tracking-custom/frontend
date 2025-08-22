import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Modal.module.scss";

export type ModalProps = ComponentProps<"div"> & {
  isOpen: boolean;
  onClose?: () => void;
};

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  className,
  ...rest
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={clsx(styles.modal, className)}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        {children}
      </div>
    </div>
  );
};
