import { Check, Trash2 } from 'lucide-react'
import { Task } from '../../App'
import styles from './TaskItem.module.css'

interface TaskItemProps {
  task: Task
  onToggleTaskCompletion: (taskId: number) => void
  onDeleteTask: (taskId: number) => void
}

export function TaskItem({
  task,
  onToggleTaskCompletion,
  onDeleteTask,
}: TaskItemProps) {
  function handleChangeTaskCompletion() {
    onToggleTaskCompletion(task.id)
  }

  function handleDeleteTask() {
    onDeleteTask(task.id)
  }

  return (
    <li className={styles.container}>
      <div>
        <input
          aria-label={
            task.isCompleted ? 'Tarefa completa' : 'Tarefa incompleta'
          }
          type="checkbox"
        />
        <span
          onClick={handleChangeTaskCompletion}
          className={
            task.isCompleted ? styles.checkboxChecked : styles.checkbox
          }
        >
          {task.isCompleted && <Check size={12} />}
        </span>
      </div>
      <p className={task.isCompleted ? styles.paragraphChecked : ''}>
        {task.content}
      </p>
      <button className={styles.deleteButton} onClick={handleDeleteTask}>
        <Trash2 size={14} />
      </button>
    </li>
  )
}
