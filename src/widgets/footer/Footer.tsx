import styles from "./Footer.module.scss";
import { Container } from "@/shared/ui";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            © 2024 Task Tracker. Все права защищены.
          </p>
        </div>
      </Container>
    </footer>
  );
};
