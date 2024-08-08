import { useState } from 'react';
import Button from './Button';

export default function AddTodoForm({ todos, setTodos }) {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todos.length >= 3) {
      alert('Log in to add more than 3 todos');
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: todoText, isCompleted: false },
      ]);
      setTodoText('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
