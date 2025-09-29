import clsx from "clsx";
import { ComponentProps, ElementType } from "react";
import { Text } from "../text/Text";
import Image from "next/image";
import styles from "./PersonItem.module.scss";
import { PolymorphicProps } from "@/shared/types";

export type PersonItemProps<T extends ElementType = "div"> = PolymorphicProps<
  T,
  {
    variant?: "default" | "compact";
    avatarSrc?: string;
    name?: string;
  }
>;

export const PersonItem = <T extends ElementType = "div">({
  as,
  children,
  className,
  variant = "default",
  avatarSrc = "https://avatars.githubusercontent.com/u/107411576?v=4",
  name = "Mu3aHTp0n",
  ...rest
}: PersonItemProps<T>) => {
  const Component = as || "div";

  return (
    <Component className={clsx(styles.person, className)} {...rest}>
      <Image
        width={18}
        height={18}
        src={avatarSrc}
        alt={"Avatar"}
        className={styles.personImage}
      />
      <Text>{name}</Text>
      {children}
    </Component>
  );
};
