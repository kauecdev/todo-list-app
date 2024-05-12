import { ClipboardList } from 'lucide-react'
import styles from './NoTasksMessage.module.css'

export function NoTasksMessage() {
  return (
    <article className={styles.container}>
      <ClipboardList size={56} />
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </article>
  )
}
