import { Text, Button, Card, Divider, Textarea } from "@/shared/ui";
import styles from "./TaskComments.module.scss";

export const TaskComments = () => {
  return (
    <Card className={styles.commentsCard}>
      <Text variant="h4">Комментарии</Text>
      <div className={styles.commentsSection}>
        <div className={styles.comment}>
          <div className={styles.avatar}></div>
          <div className={styles.commentContent}>
            <Text variant="h5">Denis Chagin</Text>
            <Text variant="body" className={styles.commentText}>
              Проблема воспроизводится на iPhone 12 Pro.
            </Text>
          </div>
        </div>
      </div>
      
      <Divider className={styles.divider} />
      
      <div>
        <Textarea placeholder="Напишите комментарий..." className={styles.textarea} />
        <Button variant="fill">Отправить</Button>
      </div>
    </Card>
  );
};