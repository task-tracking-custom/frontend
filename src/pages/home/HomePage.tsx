import { Breadcrumbs, Card, Container, ICrumb, Link, Text } from "@/shared/ui";
import styles from "./HomePage.module.scss";
import { Menu, MenuItem } from "@/shared/ui/menu";

export const HomePage = () => {
  const crumbs: ICrumb[] = [
    {
      label: "Главная",
      href: "/",
    },
  ];
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <Container as={"main"}>
        <Card>
          <Text as="h1" variant="h2">
            Добро пожаловать в систему управления задачами
          </Text>
          <Text variant="body">
            Это ваша страница для управления задачами в проектах и проектами.
          </Text>
        </Card>

        <div className={styles.cards}>
          <Card>
            <Text variant="h2">Мои проекты</Text>
            <Text variant="body">
              Выберите задачу, которую вы хотите решить.
            </Text>

            <Menu className={styles.menu}>
              <MenuItem>Задача 1</MenuItem>
              <MenuItem>Задача 2</MenuItem>
              <MenuItem>Задача 3</MenuItem>
            </Menu>
          </Card>

          <Card>
            <Text variant="h2">Мои задачи</Text>
            <Text variant="body">
              Выберите задачу, которую вы хотите решить.
            </Text>

            <Menu className={styles.menu}>
              <MenuItem>Проект 1</MenuItem>
              <MenuItem>Проект 2</MenuItem>
              <MenuItem>Проект 3</MenuItem>
            </Menu>
          </Card>
        </div>
      </Container>
    </>
  );
};
