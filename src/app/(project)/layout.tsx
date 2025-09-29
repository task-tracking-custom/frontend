import { Layout } from "@/widgets/layout";
import { ReactNode } from "react";

export default function RootLayout(props: { children: ReactNode }) {
  return <Layout>{props.children}</Layout>;
}
