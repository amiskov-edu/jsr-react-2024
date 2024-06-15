import "./style.css";

import { useEffect, useState } from "react";
import { RestaurantContainer } from "../restaurant/container";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants.js";
import { useDispatch } from "react-redux";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants())
  }, []);

  return (
    <>
      <RestaurantTabsContainer
        activeRestaurantId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      {activeRestaurantId && <RestaurantContainer id={activeRestaurantId} />}
    </>
  );
};
