import { Task } from '../../App'
import { NoTasksMessage } from './NoTasksMessage'
import { TaskItem } from './TaskItem'
import styles from './TaskList.module.css'

interface TaskListProps {
  tasks: Task[]
  onToggleTaskCompletion: (taskId: number) => void
  onDeleteTask: (taskId: number) => void
}

export function TaskList({
  tasks,
  onToggleTaskCompletion,
  onDeleteTask,
}: TaskListProps) {
  return tasks.length > 0 ? (
    <article>
      <ul className={styles.list}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTaskCompletion={onToggleTaskCompletion}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </article>
  ) : (
    <NoTasksMessage />
  )
}
