import { useState } from 'react';
import DeleteButton from './DeleteButton';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {
      text: 'Buy milk',
      isCompleted: false,
    },
    {
      text: 'Do laundry',
      isCompleted: false,
    },
    {
      text: 'Clean room',
      isCompleted: true,
    },
  ]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  return (
    <ul>
      {todos.map((item) => (
        <li
          onClick={() => setIsCompleted(!isCompleted)}
          key={item.text}
          className=' flex justify-between items-center px-4 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]'
        >
          <span
            className={`${item.isCompleted ? 'line-through text-[#ccc]' : ''}`}
          >
            {item.text}
          </span>{' '}
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
}
