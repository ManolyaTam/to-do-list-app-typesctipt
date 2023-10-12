import './create-form.css'
import { FC } from "react";

interface CreateFormProps {
  onSubmit: (description: string) => void
}

const CreateTaskFrom: FC<CreateFormProps> = ({ onSubmit }) => {
  const onTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {  //¯\_(ツ)_/¯ defining a new e.target
      description: { value: string }
    }
    const description = target.description.value;
    onSubmit(description);
    target.description.value = ''; // reset the input field
  }

  return (
    <div className='create-task-form'>
      <form onSubmit={onTaskSubmit}>
        <input
          className='desc-field'
          placeholder='Create a task...'
          name='description'
          required
        />
        <button className='create-task-btn'>add</button>
      </form>
    </div>
  )
}

export default CreateTaskFrom;