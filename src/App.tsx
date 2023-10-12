import './App.css';
import TodoCard from './components/todo/TodoCard';
import useTodoList from './hooks/useTodoList';

function App() {
  const { todos, deleteTask } = useTodoList();
  return (
    <div className="App">
      <h2>To Do List</h2>
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
          :  'todo list is empty'}
      </div>
    </div>
  );
}

export default App;
