import "./style.css";

import { useEffect, useState } from "react";
import { RestaurantContainer } from "../restaurant/container";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/get-restaurants.js";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurant/selectors.js";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  // Preselect the 1st restaurant.
  const restaurantIds = useSelector(selectRestaurantIds);
  useEffect(() => {
    if (!activeRestaurantId && restaurantIds?.length > 0) {
      setActiveRestaurantId(restaurantIds[0]);
    }
  }, [restaurantIds, activeRestaurantId]);

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
