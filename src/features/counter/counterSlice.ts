import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoItemType } from '../../vite-env.d';
export interface TodoState {
  todoList: TodoItemType[];
}
const initialState: TodoState = {
  todoList: [],
};
export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<TodoItemType>) => {
      console.log(action.payload);

      state.todoList.push(action.payload);
    },
    removeTodo: (state: TodoState, action: PayloadAction<string>) => {
      const itemIndex = state.todoList.findIndex((item) => item.id === action.payload)
      state.todoList.splice(itemIndex, 1)
    },
    editTodo: (state: TodoState, action: PayloadAction<TodoItemType>) => {
      const item = state.todoList.find((item) => item.id === action.payload.id)
      if (item && action.payload.title) {
        item.title = action.payload.title;
      }
    },
    toggleTodo: (state: TodoState, action: PayloadAction<string>) => {
      const item = state.todoList.find((item) => item.id === action.payload)
      if (item) {
        item.isCompleted = !item?.isCompleted
      }
    }
  }
})
export const { addTodo, removeTodo, editTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer