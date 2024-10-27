import React from 'react';
import { Link } from 'react-router-dom';
import TodoList from './TodoList'; 
import { useTodos } from './TodoContext'; 

const Home = () => {
  const { todos } = useTodos(); 
  return (
    <div>
      <h2>Home</h2>
      <TodoList />
      <h3>Lista dei To-do</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link> 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;