import clsx from "clsx";
import { ComponentProps, FC } from "react";
import { Link } from "../link/Link";
import styles from "./Breadcrumbs.module.scss";

export type BreadcrumbItem = {
  title: string;
  link: string;
  isLast?: boolean;
};

export type BreadcrumbsProps = ComponentProps<"nav"> & {
  crumbs: BreadcrumbItem[];
  variant?: "sticky";
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  crumbs,
  className,
  variant = "sticky",
  ...rest
}) => {
  return (
    <nav
      className={clsx(
        styles.breadcrumb,
        variant && styles[`breadcrumbVariant${variant}`],
        className
      )}
      aria-label="Breadcrumb"
      {...rest}
    >
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className={styles.breadcrumbList}
      >
        {crumbs.map((crumb, index) => (
          <li
            key={index}
            className={styles.breadcrumbItem}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {crumb.isLast || index === crumbs.length - 1 ? (
              <>
                <span
                  className={styles.breadcrumbCurrent}
                  itemProp="name"
                  aria-current="page"
                >
                  {crumb.title}
                </span>
                <meta itemProp="position" content={String(index + 1)} />
              </>
            ) : (
              <>
                <Link
                  href={crumb.link}
                  className={styles.breadcrumbLink}
                  itemProp="item"
                >
                  <span itemProp="name">{crumb.title}</span>
                </Link>
                <meta itemProp="position" content={String(index + 1)} />
                <span className={styles.breadcrumbSeparator} aria-hidden="true">
                  /
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
