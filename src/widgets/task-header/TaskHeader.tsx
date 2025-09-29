import { Text, Badge, Card } from "@/shared/ui";
import styles from "./TaskHeader.module.scss";

export const TaskHeader = () => {
  return (
    <div>
      <div className={styles.header}>
        <Text as="h1" variant="h3">
          Исправить баг с отображением уведомлений
        </Text>
        <Badge variant="error">#123</Badge>
      </div>

      <div className={styles.tags}>
        <Badge variant="error">Bug</Badge>
        <Badge variant="warning">High Priority</Badge>
      </div>

      <Card>
        <Text as="h4" variant="h6">
          Описание
        </Text>
        <Text variant="body" className={styles.description}>
          При получении push-уведомлений на мобильных устройствах уведомления
          отображаются некорректно.
        </Text>
      </Card>
    </div>
  );
};
