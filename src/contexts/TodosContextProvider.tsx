import { createContext, PropsWithChildren, useState } from 'react';
import { Todo } from '../lib/types';

type TodosContextValue = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext({} as TodosContextValue);

export default function TodosContextProvider(props: PropsWithChildren) {
  //state
  const [todos, setTodos] = useState<Todo[]>([]);

  // derived state
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  // event handlers / actions
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3) {
      alert('Log in to add more than 3 todos');
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: todoText, isCompleted: false },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
}
