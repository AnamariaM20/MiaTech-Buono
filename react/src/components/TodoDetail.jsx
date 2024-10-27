import React from 'react';
import { useParams } from 'react-router-dom';
import { useTodos } from './ToDoContext'; // Importa il contesto dei to-do

const TodoDetail = () => {
  const { id } = useParams(); // Ottieni l'ID dalla URL
  const { todos } = useTodos(); // Accedi ai to-do dal contesto
  const todo = todos.find(todo => todo.id === parseInt(id)); // Trova il to-do corrispondente

  if (!todo) {
    return <div>To-do non trovato.</div>; // Messaggio se il to-do non esiste
  }

  return (
    <div>
      <h2>Dettagli del To-do</h2>
      <p><strong>ID:</strong> {todo.id}</p>
      <p><strong>Titolo:</strong> {todo.title}</p>
      <p><strong>Completato:</strong> {todo.completed ? 'Sì' : 'No'}</p>
    </div>
  );
};

export default TodoDetail;