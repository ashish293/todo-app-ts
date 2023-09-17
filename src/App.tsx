import Container from '@mui/material/Container';
import Header from './components/Header';
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList';
const App = ()=>{
  return (
    <Container>
      <Header/>
      <AddTodo />
      <TodoList/>
    </Container>
  );
}

export default App;