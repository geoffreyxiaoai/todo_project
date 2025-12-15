import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos?.length) {
    return (
      <div className="text-center py-12">
        <p className="text-white/30 text-lg">No tasks yet. Add one above!</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
