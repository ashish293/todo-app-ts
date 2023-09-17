import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { useState } from 'react'
import { addTodo } from '../features/counter/counterSlice';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { TodoItemType } from '../vite-env';
const page = () => {
  const [title, setTitle] = useState<string>('')
  const dispatch = useDispatch()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return
    const todo: TodoItemType = {
      id: uuidv4(),
      isCompleted: false,
      title: title
    }
    dispatch(addTodo(todo))
    setTitle('');
  }
  return (
    <form onSubmit={onSubmit} className='addtodoForm'>
      <TextField id="outlined-basic" className='addtodoTextfield' sx={{ width: '80%' }} label="Todo" variant="outlined" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} />
      <Button variant="contained" type='submit' sx={{ flex: 1, marginLeft: 4 }}>Add</Button>
    </form>
  );
}

export default page;