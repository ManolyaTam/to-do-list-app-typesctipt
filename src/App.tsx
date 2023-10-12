import { useEffect, useState } from 'react';
import './App.css';
import { fetchTodos } from './services/CRUD';
import { Todo } from './types/todo';
import TodoCard from './components/todo/TodoCard';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetch = async () => {
      fetchTodos().then(res => {
        if (res && Array.isArray(res))
          setTodos(res)
      })
    }
    fetch();
  }, []);

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div>
        {todos.map((todo) => (
          <TodoCard
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            completed={todo.completed}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
