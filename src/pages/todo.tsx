import { useTheme } from '@/context/ThemeContext';
import { Todo } from '@/types';
import React, { useEffect, useState } from 'react';

const TodosPage: React.FC = () => {
  const {theme} = useTheme()
  const [todos, setTodos] = useState<Todo[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 

  const getTodo = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data: Todo[] = await response.json();
        setTodos(data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching todos:', error);
      } finally {
        setLoading(false); 
      }
  }

  useEffect(() => {
    getTodo()
  }, []); 

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '50px',height:'90vh',  backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
      color: theme === 'light' ? '#000000' : '#ffffff',}}>Loading...</div>;
  }

  return (
    <div style={{ 
      textAlign: 'center', 
      padding:5, 
      height:'100%  ', 
      backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
      color: theme === 'light' ? '#000000' : '#ffffff',
    }}>
    <h1 className='text-4xl p-2'>Todo List</h1>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      <li style={{
            fontSize: '18px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '600px',
            margin: '0 auto',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
          }}>
        <span><strong>Title</strong></span>
        <span><strong>Completed</strong></span>
      </li>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            fontSize: '18px',
            marginBottom: '10px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '600px',
            margin: '0 auto',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
          }}
        >
          <span>{todo.title}</span>

          <span
            style={{
              color: todo.completed ? 'green' : 'red',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            {todo.completed ? '✔️' : '❌'}
          </span>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default TodosPage;
