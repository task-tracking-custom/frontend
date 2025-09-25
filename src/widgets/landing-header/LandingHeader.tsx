import { Text } from "@/shared/ui";
import styles from "./LandingHeader.module.scss";
import Link from "next/link";

const navLinks = [
  { href: "/login", label: "Login" },
  { href: "#features", label: "Features" },
  { href: "#our-impact", label: "Our impact" },
];

export const LandingHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <Text variant="h3" color="white">
            TaskTracker
          </Text>
        </div>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className={styles.navLink}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
