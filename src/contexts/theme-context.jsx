import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);
const SetThemeContext = createContext(null);

export function useTheme() {
  return useContext(ThemeContext);
}

export function useSetTheme() {
  return useContext(SetThemeContext);
}

export function ThemeProvider({ children, theme: currentTheme }) {
  const [theme, setTheme] = useState(currentTheme);
  return (
    <ThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        <div className={`theme-${theme}`}>{children}</div>
      </SetThemeContext.Provider>
    </ThemeContext.Provider>
  );
}
