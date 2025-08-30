import clsx from "clsx";
import { ComponentProps, FC } from "react";
import styles from "./Breadcrumbs.module.scss";
import Link from "next/link";

export interface ICrumb {
  label: string;
  href?: string;
  active?: boolean;
}

export type BreadcrumbsProps = ComponentProps<"nav"> & {
  crumbs: ICrumb[];
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  crumbs,
  className,
  ...rest
}) => {
  return (
    <nav className={clsx(styles.breadcrumb, className)} {...rest}>
      <ul className={styles.breadcrumbList}>
        {crumbs.map((crumb, index) => (
          <li key={index} className={styles.breadcrumbListItem}>
            {crumb.href && !crumb.active ? (
              <Link href={crumb.href} className={styles.breadcrumbItem}>
                {crumb.label}
              </Link>
            ) : (
              <span
                className={clsx(
                  styles.breadcrumbItem,
                  crumb.active && styles.breadcrumbItemActive
                )}
              >
                {crumb.label}
              </span>
            )}
            {index < crumbs.length - 1 && (
              <span className={styles.breadcrumbSeparator}>/</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
