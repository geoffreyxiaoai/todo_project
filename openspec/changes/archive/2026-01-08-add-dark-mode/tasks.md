# Tasks: Add Dark Mode

## 1. Foundation

- [x] 1.1 Configure Tailwind for dark mode using `class` strategy in CSS
- [x] 1.2 Define CSS variables for light/dark theme colors in `index.css`

## 2. Theme State Management

- [x] 2.1 Create `useTheme` hook to manage theme state and localStorage persistence
- [x] 2.2 Add system preference detection with `prefers-color-scheme` media query
- [x] 2.3 Apply `dark` class to `<html>` element based on theme state

## 3. Toggle UI

- [x] 3.1 Create `ThemeToggle.jsx` component with sun/moon icons (Lucide)
- [x] 3.2 Add toggle button to App header area

## 4. Component Updates

- [x] 4.1 Update `App.jsx` container with dark mode classes
- [x] 4.2 Update `TodoInput.jsx` with dark mode styling
- [x] 4.3 Update `TodoItem.jsx` with dark mode styling
- [x] 4.4 Update `TodoFilter.jsx` with dark mode styling
- [x] 4.5 Update `ConfirmDialog.jsx` with dark mode styling

## 5. Verification

- [x] 5.1 Test toggle switches between light and dark modes
- [x] 5.2 Test theme persists across page reloads
- [x] 5.3 Test system preference is respected on first visit
- [x] 5.4 Verify all components render correctly in both modes
