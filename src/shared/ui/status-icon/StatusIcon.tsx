import {ComponentProps, FC} from "react";
import clsx from "clsx";

import styles from "./StatusIcon.module.scss"

export type StatusIconProps = ComponentProps<"figure"> & {
	variant?: "to-do" | "in-progress" | "in-review" | "done";
}

export const StatusIcon: FC<StatusIconProps> = ({ children, className, variant = "to-do", ...rest }) => {
	return (
		<figure className={clsx(styles.statusIcon, styles[`statusIconVariant${variant}`], className)} {...rest}>
			{children}
		</figure>
	)
}