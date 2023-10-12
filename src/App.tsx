import './App.css';
import TodoCard from './components/todoCard/TodoCard';
import useTodoList from './hooks/useTodoList';
import CreateTaskFrom from './components/createForm/CreateForm';

function App() {
  const { todos, deleteTask, createTask } = useTodoList();

  return (
    <div className="App">
      <h2>To Do List</h2>
      <CreateTaskFrom onSubmit={createTask} />
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
