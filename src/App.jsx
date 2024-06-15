import "./app.css";

import { Header } from "./components/header/component.jsx";
import { Footer } from "./components/footer/component.jsx";
import { Restaurants } from "./components/restaurants/component.jsx";
import { Feedback } from "./components/feedback/component.jsx";
import { ProgressBar } from "./components/progressbar/component.jsx";
import { ThemeProvider } from "./contexts/theme-context.jsx";
import { UserProvider } from "./contexts/user-context.jsx";
import { useDispatch } from "react-redux";
import { getRestaurants } from "./redux/entities/restaurant/thunks/get-restaurants.js";
import { useEffect } from "react";
import { getUsers } from "./redux/entities/user/thunks/get-users.js";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <ProgressBar />
          <Header />
          <hr />
          <Restaurants />
          <hr />
          <Feedback />
          <hr />
          {[...Array(50)].map(() => (
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          ))}
          <hr />
          <Footer />
        </ThemeProvider>
      </UserProvider>
    </>
  );
};
