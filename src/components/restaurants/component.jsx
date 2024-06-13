import { useState } from "react";
import { Restaurant } from "../restaurant/component.jsx";
import { RestaurantTabs } from "../restaurant-tabs/component.jsx";
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
      <RestaurantTabs
        activeRestaurantId={activeRestaurantId}
        onChange={setActiveRestaurantId}
      />
      <Restaurant id={activeRestaurantId} />
    </>
  );
};
