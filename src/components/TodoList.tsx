import { useState } from 'react';
import DeleteButton from './DeleteButton';

export default function TodoList({ todos, setTodos }) {
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const totalNumberOfTodos = todos.length;

  return (
    <ul>
      {totalNumberOfTodos === 0 ? (
        <li className=' h-full flex justify-center items-center text-black/50 text-2xl'>
          Start by adding a todo!
        </li>
      ) : null}
      {todos.map((todo) => (
        <li
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, isCompleted: !t.isCompleted };
                }
                return t;
              })
            );
          }}
          key={todo.id}
          className=' flex justify-between items-center px-4 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]'
        >
          <span
            className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}
          >
            {todo.text}
          </span>{' '}
          <DeleteButton id={todo.id} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  );
}
