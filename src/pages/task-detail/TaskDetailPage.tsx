import { Breadcrumbs, Container } from "@/shared/ui";
import { TaskHeader } from "@/widgets/task-header";
import { TaskComments } from "@/widgets/task-comments";
import { TaskSidebar } from "@/widgets/task-sidebar";
import styles from "./TaskDetailPage.module.scss";

export const TaskDetailPage = () => {
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { title: "Главная", link: "/" },
          { title: "Проекты", link: "/project" },
          { title: "Текущий проект", link: "/project/1" },
          { title: "Задача 1", link: "/task/1", isLast: true },
        ]}
      />

      <Container>
        <div className={styles.layout}>
          <div className={styles.mainContent}>
            <TaskHeader />
            <TaskComments />
          </div>
          <div className={styles.sidebar}>
            <TaskSidebar />
          </div>
        </div>
      </Container>
    </div>
  );
};