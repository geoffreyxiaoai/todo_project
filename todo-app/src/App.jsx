import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useTodos } from './hooks/useTodos';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const queryClient = new QueryClient();

function TodoApp() {
  const { todos, isLoading, isError, addTodo, toggleTodo, deleteTodo, isAdding } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-md mb-8 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">
          Todo App
        </h1>
        <p className="text-gray-500">Stay organized and productive</p>
      </div>

      <TodoInput onAdd={addTodo} isAdding={isAdding} />

      {isLoading ? (
        <div className="text-gray-500 animate-pulse">Loading tasks...</div>
      ) : isError ? (
        <div className="text-red-400">Error loading tasks</div>
      ) : (
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      )}
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoApp />
    </QueryClientProvider>
  );
}
