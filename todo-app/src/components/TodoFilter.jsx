import { clsx } from 'clsx';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'todo', label: 'Todo' },
  { key: 'done', label: 'Done' },
];

export default function TodoFilter({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 w-full max-w-md mb-4">
      {FILTERS.map((filter) => (
        <button
          key={filter.key}
          onClick={() => onChange(filter.key)}
          className={clsx(
            "flex-1 px-4 py-2 rounded-xl border transition-all duration-200",
            "text-sm font-medium shadow-sm",
            value === filter.key
              ? "bg-blue-600 text-white border-blue-600 shadow-blue-600/30"
              : "bg-white text-gray-600 border-gray-200 hover:border-blue-500 hover:text-blue-600"
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
