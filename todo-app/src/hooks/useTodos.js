import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTodos, addTodo, toggleTodo, deleteTodo } from '../api';

export function useTodos() {
  const queryClient = useQueryClient();

  const todosQuery = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  });

  const addTodoMutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const toggleTodoMutation = useMutation({
    mutationFn: toggleTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return {
    todos: todosQuery.data,
    isLoading: todosQuery.isLoading,
    isError: todosQuery.isError,
    addTodo: addTodoMutation.mutate,
    toggleTodo: toggleTodoMutation.mutate,
    deleteTodo: deleteTodoMutation.mutate,
    isAdding: addTodoMutation.isPending,
  };
}
