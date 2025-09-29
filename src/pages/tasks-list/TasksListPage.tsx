import { TaskItem } from "@/entities/task";
import { Container, Breadcrumbs } from "@/shared/ui";

const tasks = [
  {
    id: 1,
    title: "Реализовать авторизацию пользователей",
    variant: "success",
    iconVariant: "done",
  },
  {
    id: 2,
    title: "Настроить CI/CD pipeline для автоматического деплоя",
    variant: "warning",
    iconVariant: "in-progress",
  },
  {
    id: 3,
    title: "Исправить баг с отображением уведомлений на мобильных устройствах",
    variant: "error",
    iconVariant: "in-review",
  },
  {
    id: 4,
    title: "Добавить темную тему в настройки приложения",
    variant: "default",
    iconVariant: "to-do",
  },
  {
    id: 5,
    title: "Оптимизировать запросы к базе данных для ускорения загрузки",
    variant: "warning",
    iconVariant: "in-progress",
  },
  {
    id: 6,
    title: "Написать unit тесты для компонентов формы",
    variant: "success",
    iconVariant: "done",
  },
  {
    id: 7,
    title: "Обновить документацию API",
    variant: "default",
    iconVariant: "to-do",
  },
  {
    id: 8,
    title: "Интегрировать систему аналитики для отслеживания пользователей",
    variant: "error",
    iconVariant: "in-review",
  },
] as const;

export const TasksListPage = () => {
  return (
    <div>
      <Breadcrumbs
        crumbs={[
          { title: "Главная", link: "/" },
          { title: "Проекты", link: "/project" },
          { title: "Текущий проект", link: "/project/1", isLast: true },
        ]}
      />
      <Container>
        <div>
          {tasks.map((task) => (
            <TaskItem
              taskId={task.id}
              key={task.id}
              variant={task.variant}
              iconVariant={task.iconVariant}
              taskTitle={task.title}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};