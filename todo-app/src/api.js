const STORAGE_KEY = 'todos-react-query';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getTodos = async () => {
  await delay(500); // Simulate network delay
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const addTodo = async (text) => {
  await delay(300);
  const todos = await getTodos();
  const newTodo = { id: Date.now(), text, completed: false };
  const newTodos = [newTodo, ...todos];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
  return newTodo;
};

const toggleTodo = async (id) => {
  await delay(200);
  const todos = await getTodos();
  const newTodos = todos.map((t) =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
  return newTodos.find((t) => t.id === id);
};

const deleteTodo = async (id) => {
  await delay(200);
  const todos = await getTodos();
  const newTodos = todos.filter((t) => t.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos));
  return id;
};

export { getTodos, addTodo, toggleTodo, deleteTodo };
