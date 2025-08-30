"use client";
import clsx from "clsx";
import {
  ComponentType,
  ReactNode,
  useState,
  useRef,
  useEffect,
  JSX,
} from "react";
import { createPortal } from "react-dom";
import styles from "./Tooltip.module.scss";
import { PropsByAs } from "@/shared/types/styled";

type TooltipAsStrings = keyof JSX.IntrinsicElements;
type TooltipAs = TooltipAsStrings | ComponentType;

export type TooltipProps<As extends TooltipAs = "div"> = {
  children?: ReactNode;
  content: ReactNode;
  as?: As;
  className?: string;
} & PropsByAs<TooltipAsStrings, As>;

export const Tooltip = <As extends TooltipAs>(props: TooltipProps<As>) => {
  const { children, content, as = "div", className, ...rest } = props;
  const Component = as as any;
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const triggerRef = useRef<HTMLDivElement>(null);

  const updateTooltipPosition = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    
    const top = rect.bottom + window.scrollY + 8;
    const left = rect.left + window.scrollX + rect.width / 2;

    setTooltipStyle({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      updateTooltipPosition();
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Component
        ref={triggerRef}
        className={clsx(styles.tooltip, className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...rest}
      >
        {children}
      </Component>

      {isVisible &&
        typeof document !== "undefined" &&
        createPortal(
          <div className={styles.tooltipContent} style={tooltipStyle}>
            {content}
          </div>,
          document.body
        )}
    </>
  );
};
