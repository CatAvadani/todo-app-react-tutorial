import { useTodosContext } from '../hooks/UseTodosContext';
import DeleteButton from './DeleteButton';

export default function TodoList() {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();

  return (
    <ul>
      {todos.length === 0 ? (
        <li className=' h-full flex justify-center items-center text-black/50 text-2xl'>
          Start by adding a todo!
        </li>
      ) : null}
      {todos.map((todo) => (
        <li
          onClick={() => handleToggleTodo(todo.id)}
          key={todo.id}
          className=' flex justify-between items-center px-4 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]'
        >
          <span
            className={`${todo.isCompleted ? 'line-through text-[#ccc]' : ''}`}
          >
            {todo.text}
          </span>{' '}
          <DeleteButton id={todo.id} onDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
