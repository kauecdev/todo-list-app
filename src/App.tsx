import { CirclePlus } from 'lucide-react'

import { Header } from './components/Header'
import { Input } from './components/Input'

import styles from './App.module.css'
import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { TaskList } from './components/TaskList'

export interface Task {
  id: number
  content: string
  isCompleted: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function handleCreateNewTask() {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: currentTasks.length + 1, content: newTaskText, isCompleted: false },
    ])
    setNewTaskText('')
  }

  function handleEnterToCreateTask(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleCreateNewTask()
    }
  }

  function toggleTaskCompletion(taskId: number) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function deleteTask(taskId: number) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== taskId)
    setTasks(tasksWithoutDeletedOne)
  }

  const tasksCounter = tasks.length
  const completedTasksCounter = tasks.reduce((previous, current) => {
    if (current.isCompleted) {
      return ++previous
    }
    return previous
  }, 0)

  return (
    <main>
      <Header />

      <section className={styles.container}>
        <div className={styles.todoInputContainer}>
          <Input
            value={newTaskText}
            onChange={handleNewTaskTextChange}
            onKeyDown={handleEnterToCreateTask}
          />
          <button
            disabled={newTaskText.length === 0}
            onClick={handleCreateNewTask}
          >
            Criar <CirclePlus size={16} />
          </button>
        </div>

        <div className={styles.taskContainer}>
          <header>
            <span>
              Tarefas criadas
              <span className={styles.counter}>{tasksCounter}</span>
            </span>
            <span>
              Concluídas
              <span className={styles.counter}>
                {completedTasksCounter === 0
                  ? 0
                  : `${completedTasksCounter} de ${tasksCounter}`}
              </span>
            </span>
          </header>

          <TaskList
            tasks={tasks}
            onToggleTaskCompletion={toggleTaskCompletion}
            onDeleteTask={deleteTask}
          />
        </div>
      </section>
    </main>
  )
}

export default App
