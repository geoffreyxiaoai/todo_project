import { Check, Trash2 } from 'lucide-react';
import { clsx } from 'clsx';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div
      className={clsx(
        "group flex items-center justify-between p-4 mb-3 rounded-xl",
        "bg-white/5 backdrop-blur-md border border-white/5 hover:border-white/10",
        "transition-all duration-300 hover:bg-white/10 hover:transform hover:scale-[1.02]",
        todo.completed && "opacity-60"
      )}
    >
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={() => onToggle(todo.id)}
          className={clsx(
            "flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-300",
            todo.completed
              ? "bg-green-500 border-green-500 text-white"
              : "border-white/30 hover:border-purple-400 text-transparent"
          )}
        >
          <Check size={14} strokeWidth={3} />
        </button>
        <span
          className={clsx(
            "text-lg transition-all duration-300",
            todo.completed ? "text-white/30 line-through" : "text-white"
          )}
        >
          {todo.text}
        </span>
      </div>
      
      <button
        onClick={() => onDelete(todo.id)}
        className={clsx(
          "p-2 text-white/30 hover:text-red-400 rounded-lg",
          "opacity-0 group-hover:opacity-100 transition-all duration-300",
          "hover:bg-red-400/10"
        )}
      >
        <Trash2 size={20} />
      </button>
    </div>
  );
}
