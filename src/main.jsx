import { createRoot } from "react-dom/client";

import { restaurants } from "./constants/restaurants.js";

import { App } from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/index.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App restaurants={restaurants} />
  </Provider>,
);
