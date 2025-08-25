"use client";

import { IconButton, Link, Text } from "@/shared/ui";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faProjectDiagram,
  faTasks,
  faHouse,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuItem } from "@/shared/ui/menu";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navLinks = [
    {
      href: "/",
      label: "Главная",
      icon: faHouse,
    },
    {
      href: "/project",
      label: "Проекты",
      icon: faProjectDiagram,
    },
    {
      href: "/tasks",
      label: "Задачи",
      icon: faTasks,
    },
  ];

  return (
    <aside
      className={clsx(styles.sidebar, !isExpanded && styles.sidebarReduced)}
    >
      <div>
        <IconButton
          className={styles.sidebarReduce}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <FontAwesomeIcon icon={isExpanded ? faAngleLeft : faAngleRight} />
        </IconButton>

        <nav>
          <Menu className={styles.nav}>
            {navLinks.map((link) => (
              <MenuItem
                as={Link}
                className={styles.navItem}
                key={link.href}
                href={link.href}
              >
                <FontAwesomeIcon
                  icon={link.icon}
                  width={18}
                  height={18}
                  className={styles.navLinkIcon}
                />
                {isExpanded && link.label}
              </MenuItem>
            ))}
          </Menu>
        </nav>
      </div>

      <MenuItem as={"div"} className={styles.avatar}>
        <Image
          src={"/images/default-avatar.webp"}
          width={20}
          height={20}
          alt={"Default person avatar"}
          className={styles.avatarImage}
        />
        {isExpanded && <Text variant="body">Denis Chagin</Text>}
      </MenuItem>
    </aside>
  );
};
