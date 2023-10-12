import { useState, useEffect } from "react";
import { fetchTodos } from '../services/CRUD';
import { Todo } from '../types/todo';

const useTodoList = () => {
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

  return { todos }
}

export default useTodoList;