import {TaskItem} from "@/entities/task";

export default function ProjectPage() {
  return (
  <div>
    <TaskItem variant={"error"} iconVariant={"done"} taskTitle={"Сделать карточку"}/>
  </div>
  )
}
