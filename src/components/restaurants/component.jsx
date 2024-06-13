import { useState } from "react";
import { Restaurant } from "../restaurant/component";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import "./style.css";
import { useSelector } from "react-redux";

export const Restaurants = () => {
  const restaurantIds = useSelector((state) => state.restaurant.ids);
  const [activeRestaurantId, setActiveRestaurantId] = useState();

  if (!restaurantIds) {
    return <div>Restaurants not found.</div>;
  }

  return (
    <>
      <RestaurantTabsContainer
        activeRestaurantId={activeRestaurantId}
        onTabClick={setActiveRestaurantId}
      />
      <Restaurant id={activeRestaurantId} />
    </>
  );
};
