import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
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

// get todos from the local storage
const getInitialTodos = () => {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

export default function TodosContextProvider(props: PropsWithChildren) {
  const { isAuthenticated } = useKindeAuth();

  //state
  const [todos, setTodos] = useState<Todo[]>(getInitialTodos);

  // derived state
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  // event handlers / actions
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated) {
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

  // side effects

  // add todo to the local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
