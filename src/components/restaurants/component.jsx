import { useState } from "react";
import { RestaurantContainer } from "../restaurant/container";
import { RestaurantTabsContainer } from "../restaurant-tabs/container";
import "./style.css";

export const Restaurants = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState();
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
