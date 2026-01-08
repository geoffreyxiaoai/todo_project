import { Sun, Moon } from "lucide-react";
import { clsx } from "clsx";

export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === "dark";

  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={clsx(
        "p-2.5 rounded-xl transition-all duration-300 cursor-pointer",
        "bg-white/80 dark:bg-slate-800/80 border border-gray-200 dark:border-slate-600",
        "hover:bg-gray-100 dark:hover:bg-slate-700",
        "shadow-sm hover:shadow-md backdrop-blur-sm"
      )}
    >
      {isDark ? (
        <Sun size={20} className="text-amber-500" />
      ) : (
        <Moon size={20} className="text-slate-600" />
      )}
    </button>
  );
}
