import { clsx } from 'clsx';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'todo', label: 'Todo' },
  { key: 'done', label: 'Done' },
];

export default function TodoFilter({ value, onChange }) {
  return (
    <div className="w-full max-w-md mb-6">
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/80 border border-gray-200 shadow-sm backdrop-blur">
        {FILTERS.map((filter) => (
          <button
            key={filter.key}
            onClick={() => onChange(filter.key)}
            className={clsx(
              "flex-1 px-4 py-2.5 rounded-xl transition-all duration-200 cursor-pointer",
              "text-sm font-semibold tracking-wide",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50",
              value === filter.key
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/70"
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
