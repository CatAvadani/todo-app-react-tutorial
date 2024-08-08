export default function Counter({ todos }) {
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  return (
    <p>
      <b>{completedTodos}</b>/0 todos completed
    </p>
  );
}
