import { TodoItemType } from "../vite-env";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Checkbox, Chip } from "@mui/material";
import { editTodo, removeTodo, toggleTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';

type PropsType = {
  todo: TodoItemType;
}

const TodoItem = ({ todo }: PropsType) => {
  const dispatch = useDispatch()
  const [text, setText] = useState<TodoItemType['title']>('')
  const [editMode, setEditMode] = useState<boolean>(false)
  const handleChange = () => {
    dispatch(toggleTodo(todo.id))
  }
  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)
  const handleModify = () => setEditMode(!editMode)
  const handleDelete = () => dispatch(removeTodo(todo.id))
  const handleSave = () => {
    setEditMode(false)
    dispatch(editTodo({ id: todo.id, title: text }))
  }
  return (
    <Box sx={{ marginTop: 4, display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox checked={todo.isCompleted} onChange={handleChange} />
        {editMode ?
          <TextField
            id="standard-basic"
            variant="standard"
            defaultValue={todo.title}
            onChange={handleChangeText}
          /> : <Typography sx={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} >{todo.title}</Typography>
        }

      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        {editMode ?
          <Box sx={{ alignItems: 'center', display: 'flex', background: '#4caf5090', borderRadius: 4 }}>
            <Chip
              label='save'
              color='success'
              onClick={handleSave}
            />
            <CancelIcon onClick={handleModify} sx={{ marginRight: 1, marginLeft: 0.5 }} fontSize="small" />
          </Box> : <Chip
            label='modify'
            onClick={handleModify}
            color='primary'
          />
        }
        <DeleteIcon onClick={handleDelete} sx={{ marginLeft: 1 }} fontSize="medium" color='error' />
      </Box>
    </Box>
  );
}

export default TodoItem;