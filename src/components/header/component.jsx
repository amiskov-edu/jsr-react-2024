import { useTheme, useSetTheme } from "../../contexts/theme-context.jsx";
import { UserPanel } from "../user-panel/component.jsx";
import { CartCounter } from "../cart-counter/component.jsx";

export const Header = () => {
  const theme = useTheme();
  const setTheme = useSetTheme();
  return (
    <header>
      <h1>Restaurants</h1>
      <CartCounter />
      <UserPanel />
      <button onClick={() => setTheme(theme === "dark" ? null : "dark")}>
        switch theme
      </button>
      Current Theme: {theme}.
    </header>
  );
};
