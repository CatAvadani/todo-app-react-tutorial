import { useTodosContext } from '../contexts/TodosContextProvider';

export default function Counter() {
  const { totalNumberOfTodos, numberOfCompletedTodos } = useTodosContext();
  return (
    <p>
      <b>{numberOfCompletedTodos}</b>/{totalNumberOfTodos} todos completed
    </p>
  );
}
