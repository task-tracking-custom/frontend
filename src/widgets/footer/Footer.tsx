import { Text } from "@/shared/ui";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bottom}>
        <Text variant="caption">
          © {new Date().getFullYear()} TaskTracker. Все права защищены.
        </Text>
      </div>
    </footer>
  );
};
