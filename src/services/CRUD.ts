import { Todo } from "../types/todo";

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

export {fetchTodos}