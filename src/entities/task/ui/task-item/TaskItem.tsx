import { FC } from "react";
import {
  Badge,
  Card,
  Text,
  Tooltip,
  PersonItem,
  StatusIcon,
} from "@/shared/ui";

import { BadgeProps } from "@/shared/ui";

import styles from "./TaskItem.module.scss";
import Link from "next/link";
import { paths } from "@/shared/libs";

export type TaskItemProps = {
  taskId: number;
  taskTitle: string;
  iconVariant?: "to-do" | "in-progress" | "in-review" | "done";
} & BadgeProps;

export const TaskItem: FC<TaskItemProps> = ({
  taskTitle,
  iconVariant = "to-do",
  variant,
  taskId,
}) => {
  return (
    <Card
      as={Link}
      variant="hover"
      className={styles.card}
      href={paths.getTask(taskId)}
    >
      <Tooltip content={iconVariant}>
        <StatusIcon variant={iconVariant} />
      </Tooltip>
      <div className={styles.badgeContainer}>
        <Badge variant={variant}>Bug</Badge>
      </div>
      <div className={styles.main}>
        <Text as="h3" variant="body">
          {taskTitle}
        </Text>
      </div>
      <footer className={styles.footer}>
        <PersonItem />
      </footer>
    </Card>
  );
};
