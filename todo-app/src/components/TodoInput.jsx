import { useState } from "react";
import { Plus } from "lucide-react";
import { clsx } from "clsx";

export default function TodoInput({ onAdd, isAdding }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
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
          "w-full px-6 py-4 text-lg rounded-2xl shadow-sm",
          "bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600",
          "text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500",
          "outline-none transition-all duration-300",
          "focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        disabled={isAdding}
      />
      <button
        type="submit"
        disabled={!text.trim() || isAdding}
        className={clsx(
          "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-xl",
          "bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 cursor-pointer",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600",
          "shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
        )}
      >
        <Plus size={24} />
      </button>
    </form>
  );
}
