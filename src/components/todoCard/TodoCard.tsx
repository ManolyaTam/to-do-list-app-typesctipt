import './todo-card.css'
import { FC } from 'react';

interface TodoProps {
  id: number;
  todo: string;
  completed: boolean,
  onDelete: (e: React.MouseEvent<HTMLElement>) => void
  onToggle: (e: React.ChangeEvent) => void
}

const TodoCard: FC<TodoProps> = ({ id, todo, completed, onDelete, onToggle }) => {
  return (
    <div className='todo'>
      <div className="right">
        <input type="checkbox" checked={completed} onChange={onToggle} />
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


