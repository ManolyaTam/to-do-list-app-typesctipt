import './todo-card.css'
import { FC, useState } from 'react';

interface TodoProps {
  id: number;
  todo: string;
  completed: boolean,
  onDelete: (e: React.MouseEvent<HTMLElement>) => void
}

const TodoCard: FC<TodoProps> = ({ id, todo, completed, onDelete }) => {
  const [checked, setChecked] = useState(completed);
  return (
    <div className='todo'>
      <div className="right">
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <p className='desc'>{todo}</p>
      </div>
      <div className='left'>
        <button
          className='x-btn'
          onClick={onDelete}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default TodoCard;


