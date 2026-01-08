# Change: Add Dark Mode with Toggle

## Why
Users often prefer dark mode for reduced eye strain, better visibility in low-light environments, and aesthetic preference. The current app only supports a light theme with hardcoded colors.

## What Changes
- Add a persistent dark mode that applies dark-themed styling across all UI components
- Add a toggle button in the header to switch between light and dark modes
- Persist the user's theme preference in localStorage
- Respect the user's system preference as the default on first visit

## Impact
- Affected specs: `theme` (new capability)
- Affected code:
  - `src/App.jsx` — Add toggle button and theme state management
  - `src/index.css` — Add CSS variables for theme colors and dark mode styles
  - `src/components/*.jsx` — Update to use theme-aware Tailwind classes
  - `src/hooks/useTheme.js` — New hook for theme state management (optional)
