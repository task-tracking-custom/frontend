"use client";

import { IconButton, Text } from "@/shared/ui";
import Link from "next/link";
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
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.aside
      className={styles.sidebar}
      animate={{
        width: isExpanded ? 250 : 60,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
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
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 1, width: "auto" }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        marginLeft: "12px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {link.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </MenuItem>
            ))}
          </Menu>
        </nav>
      </div>

      <MenuItem
        as={"div"}
        className={styles.avatar}
        itemScope
        itemType="https://schema.org/Person"
      >
        <Image
          src={"/images/default-avatar.webp"}
          width={20}
          height={20}
          alt={"Default person avatar"}
          className={styles.avatarImage}
          itemProp="image"
        />
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                marginLeft: "8px",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <Text variant="body" itemProp="name">
                Denis Chagin
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
      </MenuItem>
    </motion.aside>
  );
};
