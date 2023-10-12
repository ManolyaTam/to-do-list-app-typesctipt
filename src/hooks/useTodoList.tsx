import { useState, useEffect } from "react";
import { fetchTodos } from '../services/CRUD';
import { Todo } from '../types/todo';

const useTodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await fetchTodos();
      if (res && Array.isArray(res)) {
        setTodos(res);
      }
    };
    fetch();
  }, []);

  const getTaskById = (id: number): Todo | undefined => {
    return todos.find(todo => todo.id === id)
  }

  const deleteTask = (id: number) => {
    const task = getTaskById(id);
    if (!task) return;

    const confirmed = window.confirm(`Are you sure you want to delete this task?\n${task.todo}`);
    if (confirmed)
      setTodos(todos.filter(todo => todo.id !== id));
  };

  return { todos, deleteTask }
}

export default useTodoList;