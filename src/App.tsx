import './App.css';
import TodoCard from './components/todo/TodoCard';
import useTodoList from './hooks/useTodoList';

function App() {
  const { todos, deleteTask, createTask } = useTodoList();
  const onTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {  //¯\_(ツ)_/¯ defining a new e.target
      description: {value: string} 
    }
    const description = target.description.value;
    createTask(description);
    target.description.value = ''; // reset the input field
  }

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div>
        <form onSubmit={onTaskSubmit}>
          <input placeholder='Create a task...' name='description' required/>
          <button>add</button>
        </form>
      </div>
      <div>
        {
          todos.length ? todos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              completed={todo.completed}
              onDelete={() => deleteTask(todo.id)}
            />
          ))
            : 'todo list is empty'}
      </div>
    </div>
  );
}

export default App;
