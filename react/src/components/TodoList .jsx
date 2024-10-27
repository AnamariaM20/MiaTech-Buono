import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import useFetch from './UseFetch';
import useFilteredTodos from './useFilteredTodos';
import { useTodos } from './ToDoContext';
import { Link, useSearchParams } from 'react-router-dom'

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { data, loading, error };
  };
  
  const TodoList = () => {
    const { todos, updateTodos } = useTodos(); 
    const { loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos');
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState('');
    const inputRef = useRef(null);
    const filteredTodos = useFilteredTodos(todos || [], searchTerm);
  
    const handleSearchChange = useCallback((e) => {
        setSearchTerm(e.target.value);
    }, []);
    
    const filteredTodosx = useMemo(() => {
        return useFilteredTodos(todos || [], searchTerm);
    }, [todos, searchTerm]);
    useEffect(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, []);

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
        <>
    <div>
      <input
        type="text"
        placeholder="Search todos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        //onChange={handleSearchChange} 
        ref={inputRef} 
      />
      <ul>
        {filteredTodosx.map(todo => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
            {todo.title} {todo.completed ? '(Completed)' : '(Not Completed)'}
          </li>
        ))}
      </ul>
    </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '(Completed)' : '(Not Completed)'}
          </li>
        ))}
      </ul>
      </>
      
    );
  };
  const useFilteredTodos = (todos, searchTerm) => {
    const [filteredTodos, setFilteredTodos] = useState([]);
  
    useEffect(() => {
      if (!searchTerm) {
        setFilteredTodos(todos);
        return;
      }
  
      const lowercasedTerm = searchTerm.toLowerCase();
      const filtered = todos.filter(todo =>
        todo.title.toLowerCase().includes(lowercasedTerm)
      );
  
      setFilteredTodos(filtered);
    }, [todos, searchTerm]);
  
    return filteredTodos;
  };  
  
  export default TodoList;