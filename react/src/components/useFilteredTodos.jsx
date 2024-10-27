import { useEffect, useState } from 'react';

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

export default useFilteredTodos;