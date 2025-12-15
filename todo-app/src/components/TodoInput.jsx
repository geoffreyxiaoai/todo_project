import { useState } from 'react';
import { Plus } from 'lucide-react';
import { clsx } from 'clsx';

export default function TodoInput({ onAdd, isAdding }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-md mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className={clsx(
          "w-full px-6 py-4 text-lg bg-white border border-gray-200 rounded-2xl shadow-sm",
          "text-gray-900 placeholder-gray-400 outline-none transition-all duration-300",
          "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        disabled={isAdding}
      />
      <button
        type="submit"
        disabled={!text.trim() || isAdding}
        className={clsx(
          "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl",
          "bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600",
          "shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
        )}
      >
        <Plus size={24} />
      </button>
    </form>
  );
}
