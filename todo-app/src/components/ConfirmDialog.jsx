import { clsx } from 'clsx';

export default function ConfirmDialog({ open, title, description, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="relative w-full max-w-sm rounded-2xl bg-white shadow-2xl border border-gray-100 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className={clsx(
              "px-4 py-2 rounded-xl text-sm font-semibold text-gray-600 cursor-pointer",
              "hover:bg-gray-100 transition-all duration-200"
            )}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={clsx(
              "px-4 py-2 rounded-xl text-sm font-semibold text-white cursor-pointer",
              "bg-gradient-to-r from-red-500 to-rose-500 shadow-lg shadow-rose-500/30",
              "hover:from-red-500 hover:to-red-600 transition-all duration-200"
            )}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
