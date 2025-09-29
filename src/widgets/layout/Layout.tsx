import { Footer } from "@/widgets/footer";
import { Sidebar } from "@/widgets/sidebar";
import { ReactNode } from "react";
import styles from "./Layout.module.scss";

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.mainContent}>
        {children}
        <Footer />
      </div>
    </main>
  );
};