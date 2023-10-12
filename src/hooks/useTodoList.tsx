import { useState, useEffect } from "react";
import { Todo } from '../types/todo';

const fetchTodos = async (): Promise<Todo[] | null> => {
  return fetch('https://dummyjson.com/todos')
    .then((res) => {
      if (res.ok) {
        return res.json()
          .then(json => json.todos);
      }
      else {
        console.log('unexpected response status code', res.status, res.statusText)
        return null;
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      return null;
    });
}

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

  const createTask = (description: string) => {
    const task: Todo = {
      id: Math.random(),
      todo: description,
      completed: false
    }
    setTodos(todos => [...todos, task]);
  }

  return { todos, deleteTask, createTask }
}

export default useTodoList;