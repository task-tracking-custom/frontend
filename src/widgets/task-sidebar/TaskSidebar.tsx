"use client";
import {
  Text,
  Badge,
  Button,
  Card,
  Divider,
  Select,
  PersonItem,
} from "@/shared/ui";
import { components } from "react-select";
import styles from "./TaskSidebar.module.scss";

export const TaskSidebar = () => {
  return (
    <Card>
      <Text variant="h4" className={styles.title}>
        Детали
      </Text>

      <div className={styles.details}>
        <div className={styles.detailItem}>
          <Text variant="caption">Исполнитель</Text>
          <Select
            options={[{ label: "Denis Chagin", value: "Denis Chagin" }]}
            components={{
              Option: ({ ...props }) => {
                return (
                  <components.Option {...props}>
                    <PersonItem name={(props.data as any).label} />
                  </components.Option>
                );
              },
            }}
          ></Select>
        </div>

        <div className={styles.detailItem}>
          <Text variant="caption">Статус</Text>
          <Badge variant="error">В работе</Badge>
        </div>

        <div className={styles.detailItem}>
          <Text variant="caption">Приоритет</Text>
          <Badge variant="warning">Высокий</Badge>
        </div>
      </div>

      <Divider className={styles.divider} />

      <div className={styles.actions}>
        <Button variant="fill">Закрыть задачу</Button>
        <Button variant="outline">Редактировать</Button>
      </div>
    </Card>
  );
};
