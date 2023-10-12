import './App.css';
import TodoCard from './components/todoCard/TodoCard';
import useTodoList from './hooks/useTodoList';
import CreateTaskFrom from './components/createTaskForm/CreateTaskForm';

function App() {
  const { todos, deleteTask, createTask, toggleTask } = useTodoList();

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
              onToggle={() => toggleTask(todo.id)}
            />
          ))
            : 'todo list is empty'}
      </div>
    </div>
  );
}

export default App;
