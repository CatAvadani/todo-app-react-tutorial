import { useState } from 'react';
import { useTodosContext } from '../hooks/UseTodosContext';
import Button from './Button';

export default function AddTodoForm() {
  const { handleAddTodo } = useTodosContext();
  const [todoText, setTodoText] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todoText);
        setTodoText('');
      }}
    >
      <h2 className=' font-medium text-[#231d15]'>Add a todo</h2>
      <input
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        type='text'
        className='h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[16px]'
      />
      <Button>Add to list</Button>
    </form>
  );
}
