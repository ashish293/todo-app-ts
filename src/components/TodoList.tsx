import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TodoItemType } from "../vite-env";
import TodoItem from "./TodoItem";

const TodoList = () => {

  const todos = useSelector((state: RootState): Array<TodoItemType> => state.todo.todoList)
  return (
    <>
      {todos.map((item) => <TodoItem todo={item} key={item.id} />)}
    </>
  );
}

export default TodoList;