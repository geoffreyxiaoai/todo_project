import { Check, Trash2 } from 'lucide-react';
import { clsx } from 'clsx';

const formatTimeAgo = (timestamp) => {
  const diffMs = Math.max(0, Date.now() - timestamp);
  const totalMinutes = Math.floor(diffMs / 60000);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;

  const pluralize = (value, unit) =>
    `${value} ${unit}${value === 1 ? '' : 's'}`;

  if (totalMinutes < 60) {
    return `${pluralize(totalMinutes, 'minute')} ago`;
  }

  if (totalHours < 24) {
    return `${pluralize(totalHours, 'hour')} ${pluralize(minutes, 'minute')} ago`;
  }

  return `${pluralize(days, 'day')} ${pluralize(hours, 'hour')} ${pluralize(minutes, 'minute')} ago`;
};

export default function TodoItem({ todo, onToggle, onDelete }) {
  const createdAt = todo.createdAt ?? todo.id;
  return (
    <div
      className={clsx(
        "group flex items-center justify-between p-4 mb-3 rounded-xl",
          "bg-white border border-gray-100 shadow-sm hover:shadow-md",
          "transition-all duration-300 hover:transform hover:scale-[1.02]",
          todo.completed && "opacity-60 bg-gray-50"
      )}
    >
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={() => onToggle(todo.id)}
          className={clsx(
            "flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-300",
            todo.completed
              ? "bg-green-500 border-green-500 text-white"
              : "border-gray-300 hover:border-blue-500 text-transparent"
          )}
        >
          <Check size={14} strokeWidth={3} />
        </button>
        <div className="flex flex-col">
          <span
            className={clsx(
              "text-lg transition-all duration-300",
              todo.completed ? "text-gray-400 line-through" : "text-gray-700"
            )}
          >
            {todo.text}
          </span>
          <span className="text-sm text-gray-400">
            {formatTimeAgo(createdAt)}
          </span>
        </div>
      </div>
      
      <button
        onClick={() => onDelete(todo.id)}
        className={clsx(
          "p-2 text-gray-400 hover:text-red-500 rounded-lg",
          "opacity-0 group-hover:opacity-100 transition-all duration-300",
          "hover:bg-red-50"
        )}
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
