import React from 'react'
import '../Styles/App.css'
import AddTodo from './AddTodo'
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };



  return (
    <div className='card card 1'>
      <h1 id="heading">Todo App</h1>
      <AddTodo addTodo={addTodo} />
      
        {todos.map((todo, index) => (
          <TodoList
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        
  



    </div>
  )
}
