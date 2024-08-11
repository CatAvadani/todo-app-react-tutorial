import { Props } from './Header';

export default function Counter({
  totalNumberOfTodos,
  numberOfCompletedTodos,
}: Props) {
  return (
    <p>
      <b>{numberOfCompletedTodos}</b>/{totalNumberOfTodos} todos completed
    </p>
  );
}
