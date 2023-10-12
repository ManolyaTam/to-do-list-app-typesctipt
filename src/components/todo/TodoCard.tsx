import './todo.css'
import { FC, useState } from 'react';

interface TodoProps {
  id: number;
  todo: string;
  completed: boolean
}

const TodoCard: FC<TodoProps> = ({ id, todo, completed }) => {
  const [checked, setChecked] = useState(completed);
  return (
    <div className='todo'>
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
      <p className='desc'>{todo}</p>
    </div>
  );
};

export default TodoCard;


