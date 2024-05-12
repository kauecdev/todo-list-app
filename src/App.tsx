import { CirclePlus } from 'lucide-react'

import { Header } from './components/Header'
import { Input } from './components/Input'

import styles from './App.module.css'

function App() {
  return (
    <main>
      <Header />

      <section className={styles.container}>
        <div className={styles.todoInputContainer}>
          <Input />
          <button>
            Criar <CirclePlus size={16} />
          </button>
        </div>
      </section>
    </main>
  )
}

export default App
