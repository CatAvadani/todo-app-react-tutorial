import { useContext } from 'react';
import { TodosContext } from '../contexts/TodosContextProvider';

export const useTodosContext = () => useContext(TodosContext);
