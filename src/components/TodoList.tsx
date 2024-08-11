import { Todo } from '../lib/types';
import DeleteButton from './DeleteButton';

type TodoListProps = {
  todos: Todo[];
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export default function TodoList({
  todos,
  handleToggleTodo,
  handleDeleteTodo,
}: TodoListProps) {
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
          <DeleteButton id={todo.id} handleDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
