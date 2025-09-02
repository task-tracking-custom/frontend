import {FC} from "react";
import {Badge, Card, Text} from "@/shared/ui";
import {StatusIcon} from "@/shared/ui/status-icon/StatusIcon";
import Image from "next/image";

import {BadgeProps} from "@/shared/ui";

import styles from './TaskItem.module.scss'

export type TaskItemProps = {
	taskTitle: string;
	iconVariant?: "to-do" | "in-progress" | "in-review" | "done";
};

export const TaskItem: FC<TaskItemProps & BadgeProps> = ({taskTitle, iconVariant = "to-do", variant}) => {
  return (
	  <Card style={{width: "280px", margin: '20px'}} variant="hover">
		  <StatusIcon variant={iconVariant}/>
		  <main className={styles.main}>
			  <Text variant="h3">{taskTitle}</Text>
		  </main>
		  <footer className={styles.footer}>
			  <Badge variant={variant}>Bug</Badge>
			  <div className={styles.avatarContainer}>
				  <Image className={styles.avatar}
						 width={32}
						 height={32}
						 src={'https://avatars.githubusercontent.com/u/107411576?v=4'}
						 alt={'Avatar'}
				  />
				  <Text>Mu3aHTp0n</Text>
			  </div>
		  </footer>
	  </Card>
  )
}