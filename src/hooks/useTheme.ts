// useTheme.ts - Not strictly used as a separate hook in the current structure.
// The theme logic is handled within src/context/AppContext.tsx.
// You can keep this file empty or implement a custom hook if you prefer.

import { useAppContext } from "../context/AppContext";

const useTheme = () => {
  const { theme, toggleTheme } = useAppContext();
  return { theme, toggleTheme };
};

export default useTheme;
