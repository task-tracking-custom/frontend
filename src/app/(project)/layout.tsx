import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";
import { ReactNode } from "react";
import styles from "./layout.module.scss";

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <>
      <div className={styles.main}>
        <Sidebar />

        <div className={styles.mainContent}>
          {props.children}

          <Footer />
        </div>
      </div>
    </>
  );
}
