import { useTheme } from '@/context/ThemeContext';
import { Todo } from '@/types';
import React, { useEffect, useState } from 'react';

const TodosPage: React.FC = () => {
  const { theme } = useTheme();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getTodo = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data: Todo[] = await response.json();
      setTodos(data.slice(0, 10));
    } catch (error) {
      console.error('Error fetching todos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  if (loading) {
    return (
      <div
        className={`flex justify-center items-center h-screen ${
          theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
        }`}
      >
        Loading...
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen p-5 ${
        theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
      }`}
    >
      <h1 className="text-4xl font-bold text-center mb-8">Todo List</h1>
      <ul className="space-y-4 max-w-2xl mx-auto">
        <li className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <span className="font-bold">Title</span>
          <span className="font-bold">Completed</span>
        </li>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <span className="text-lg">{todo.title}</span>
            <span
              className={`text-xl font-bold ${
                todo.completed ? 'text-green-500' : 'text-red-500'
              }`}
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