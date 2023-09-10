import TodoInterface from '../interfaces/TodoInterface'

type propsType={todo:TodoInterface, onDelete:(s:string)=>void,
  handleCheck:(id:string)=>void
}

const TodoItem = ({todo, onDelete, handleCheck}:propsType) => {
  return (
    <div  className="todo">
            <div>
              <input className="checkbox" type="checkbox" onChange={()=>handleCheck(todo.id)}/>
              <p className={todo?.completed?'strike':''}>{todo.text}</p>
              </div>
              <p className="deleteBtn" onClick={()=>onDelete(todo.id)}>X</p>
          </div>
  )
}

export default TodoItem