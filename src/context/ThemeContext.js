import { createContext, useContext, useState } from 'react';

const defaultThemeContext = {
  theme: 'light',
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultThemeContext);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((oldTheme) => oldTheme === 'light' ? 'dark' : 'light');
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
