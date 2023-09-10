import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import TodoInterface from './interfaces/TodoInterface'
import TodoItem from "./components/TodoItem"
const App = () => {
  const [todos, setTodos] = useState<TodoInterface[]>([])
  const [todo, setTodo] = useState<string>("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newTodo : TodoInterface = {
      id: uuidv4(),
      text: todo,
      completed: false
    }
    addTodo (newTodo)
  }
  const addTodo = (todo: TodoInterface) => {
    const newTodos: TodoInterface[] = [...todos, todo]
    setTodos(newTodos)
  }
  const handleDelete = (id: string) => {
    const updatedTodos: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
    setTodos(updatedTodos)
  }
  const handleCheck = (id: string) => {
    const updatedTodos: TodoInterface[] = todos.map((todo: TodoInterface) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="container">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit} className="myForm">
        <input type="text" id="todoInput" value={todo} placeholder="Title" onChange={(e) => setTodo (e.target.value)} />
        <button id="submitBtn" type="submit">Add Todo</button>
      </form>

      <div className="todos">
        {todos.map((todo: TodoInterface) => (
          <TodoItem todo={todo} onDelete={handleDelete} key={todo.id} handleCheck={handleCheck} />
        ))}
        </div>
    </div>
  )
}

export default App